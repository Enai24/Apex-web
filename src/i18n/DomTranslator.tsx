'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useI18n } from './client';
import { defaultLocale } from './config';

const EXCLUDED_TAGS = new Set([
    'SCRIPT',
    'STYLE',
    'NOSCRIPT',
    'TEXTAREA',
    'INPUT',
    'SELECT',
    'OPTION',
    'CODE',
    'PRE',
]);

const ATTRIBUTE_NAMES = ['placeholder', 'aria-label', 'title', 'alt'];

const originalTextMap = new WeakMap<Node, string>();
const originalAttrMap = new WeakMap<Element, Map<string, string>>();

function shouldSkipNode(node: Node) {
    const parent = node.parentElement;
    if (!parent) return false;
    return EXCLUDED_TAGS.has(parent.tagName);
}

function getOriginalText(
    node: Node,
    locale: string,
    reverseDictionary: Map<string, string>
) {
    if (originalTextMap.has(node)) {
        return originalTextMap.get(node) || '';
    }
    const text = node.textContent || '';
    const original = locale !== defaultLocale && reverseDictionary.has(text)
        ? reverseDictionary.get(text) || text
        : text;
    originalTextMap.set(node, original);
    return original;
}

function translateTextNodes(
    root: HTMLElement,
    translate: (text: string) => string,
    locale: string,
    reverseDictionary: Map<string, string>
) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    let current = walker.nextNode();
    while (current) {
        const textNode = current as Text;
        if (!shouldSkipNode(textNode)) {
            nodes.push(textNode);
        }
        current = walker.nextNode();
    }

    nodes.forEach((node) => {
        const original = getOriginalText(node, locale, reverseDictionary);
        const trimmed = original.trim();
        if (!trimmed) return;
        const translated = translate(trimmed);
        const leading = original.slice(0, original.indexOf(trimmed));
        const trailing = original.slice(original.indexOf(trimmed) + trimmed.length);
        const nextText = `${leading}${translated}${trailing}`;
        if (node.textContent !== nextText) {
            node.textContent = nextText;
        }
    });
}

function translateAttributes(
    root: HTMLElement,
    translate: (text: string) => string,
    locale: string,
    reverseDictionary: Map<string, string>
) {
    const elements = root.querySelectorAll('*');
    elements.forEach((el) => {
        if (EXCLUDED_TAGS.has(el.tagName)) return;
        const originalAttrs = originalAttrMap.get(el) || new Map<string, string>();

        ATTRIBUTE_NAMES.forEach((attr) => {
            if (!el.hasAttribute(attr)) return;
            const existing = originalAttrs.get(attr) || el.getAttribute(attr) || '';
            if (!originalAttrs.has(attr)) {
                const original = locale !== defaultLocale && reverseDictionary.has(existing)
                    ? reverseDictionary.get(existing) || existing
                    : existing;
                originalAttrs.set(attr, original);
            }
            if (!existing.trim()) return;
            const translated = translate(originalAttrs.get(attr) || existing);
            if (translated && translated !== el.getAttribute(attr)) {
                el.setAttribute(attr, translated);
            }
        });

        if (originalAttrs.size) {
            originalAttrMap.set(el, originalAttrs);
        }
    });
}

export default function DomTranslator() {
    const { translate, locale, dictionary } = useI18n();
    const observerRef = useRef<MutationObserver | null>(null);
    const reverseDictionary = useMemo(() => {
        const map = new Map<string, string>();
        Object.entries(dictionary || {}).forEach(([key, value]) => {
            if (!map.has(value)) {
                map.set(value, key);
            }
        });
        return map;
    }, [dictionary]);

    useEffect(() => {
        const root = document.body;
        if (!root) return;

        const runTranslation = () => {
            translateTextNodes(root, translate, locale, reverseDictionary);
            translateAttributes(root, translate, locale, reverseDictionary);
        };

        runTranslation();

        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        const observer = new MutationObserver(() => {
            runTranslation();
        });
        observer.observe(root, { childList: true, subtree: true });
        observerRef.current = observer;

        return () => {
            observer.disconnect();
        };
    }, [translate, locale, reverseDictionary]);

    return null;
}
