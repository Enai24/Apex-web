import React, { useEffect, useState, useRef } from 'react';

interface ElevenLabsConvaiProps {
  agentId?: string;
}

export default function ElevenLabsConvai({ agentId = "hdYVmisQI4kAcZwuyCtC" }: ElevenLabsConvaiProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [elementMounted, setElementMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if the script is already loaded
    const existingScript = document.querySelector('script[src="/convai-widget.js"]');
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }
    
    // Load the ElevenLabs Convai script from our local public folder
    const script = document.createElement('script');
    script.src = '/convai-widget.js'; // Using our local copy of the script
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      setScriptLoaded(true);
      console.log('ElevenLabs Convai script loaded successfully');
    };
    
    script.onerror = (error) => {
      console.error('Error loading ElevenLabs Convai script:', error);
    };
    
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      // Check if the script is still in the document before removing
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  // Create the widget using dangerouslySetInnerHTML instead of custom elements
  useEffect(() => {
    if (scriptLoaded && containerRef.current && !elementMounted) {
      try {
        // Use a random ID to ensure uniqueness
        const containerId = `convai-container-${Math.random().toString(36).substring(2, 9)}`;
        containerRef.current.id = containerId;
        
        // Create a unique iframe to isolate the widget
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '300px';
        iframe.style.border = 'none';
        iframe.title = "ElevenLabs Convai Widget";
        
        containerRef.current.appendChild(iframe);
        
        // Set content of the iframe after it's loaded
        iframe.onload = () => {
          if (iframe.contentDocument) {
            iframe.contentDocument.body.innerHTML = `
              <div style="height: 100%; width: 100%;">
                <elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>
              </div>
            `;
            
            // Add script to iframe
            const script = iframe.contentDocument.createElement('script');
            script.src = '/convai-widget.js';
            script.async = true;
            iframe.contentDocument.head.appendChild(script);
          }
        };
        
        setElementMounted(true);
      } catch (error) {
        console.error('Error mounting ElevenLabs Convai widget:', error);
      }
    }
  }, [scriptLoaded, agentId, elementMounted]);

  return (
    <div className="elevenlabs-convai-widget rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      {/* Container for the custom element */}
      <div ref={containerRef} className="min-h-[300px]"></div>
      
      {/* Loading state */}
      {!scriptLoaded && (
        <div className="p-6 text-center absolute inset-0 bg-white bg-opacity-90">
          <div className="animate-pulse flex flex-col items-center justify-center h-64">
            <div className="w-12 h-12 rounded-full bg-blue-200 mb-4"></div>
            <div className="h-4 bg-blue-200 rounded w-1/3 mb-3"></div>
            <div className="h-3 bg-blue-100 rounded w-1/4"></div>
          </div>
        </div>
      )}
    </div>
  );
} 