import React from 'react';
import {
  Brain,
  BarChart,
  Shield,
  Zap,
  MessageSquare,
  LineChart,
  Globe,
  Monitor,
  Bot,
  Users,
  Search,
  CheckCircle2,
  Clock,
  Calendar,
  Layout,
  Languages,
  Activity,
  PhoneCall
} from 'lucide-react';
import { cn } from './cn';

/**
 * AI Workforce Solutions utilities and components
 */

// Icon map for serializable data
export const AI_ICON_MAP: Record<string, any> = {
  Brain,
  BarChart,
  Shield,
  Zap,
  MessageSquare,
  LineChart,
  Globe,
  Monitor,
  Bot,
  Users,
  Search,
  CheckCircle2,
  Clock,
  Calendar,
  Layout,
  Languages,
  Activity,
  PhoneCall
};

// Component for displaying AI capabilities - Modernized with Navy/Orange-Red
export const AICapability = ({
  title,
  description,
  iconName,
  benefits
}: {
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}) => {
  const Icon = AI_ICON_MAP[iconName] || Brain;

  return (
    <div className="group rounded-2xl border border-muted bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-oat-medium text-orange-red transition-colors group-hover:bg-orange-red group-hover:text-white">
        <Icon size={28} />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-navy">{title}</h3>
      <p className="mb-8 text-teal-gray leading-relaxed">{description}</p>

      <div className="space-y-3 border-t border-muted pt-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-navy opacity-60">Key Advantages</h4>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-teal-gray">
              <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-orange-red" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Component for displaying AI statistics
export const AIStat = ({ value, label, description }: { value: string; label: string; description: string }) => {
  return (
    <div className="rounded-2xl border border-muted bg-white p-8 text-center transition-all hover:shadow-lg">
      <div className="mb-2 text-4xl font-bold text-orange-red font-mono">{value}</div>
      <div className="mb-2 text-lg font-bold text-navy">{label}</div>
      <div className="text-sm text-teal-gray">{description}</div>
    </div>
  );
};

// Component for displaying case studies
export const AICaseStudy = ({
  company,
  challenge,
  solution,
  results,
  industry,
  location
}: {
  company: string;
  challenge: string;
  solution: string;
  results: string[];
  industry: string;
  location: string;
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-muted bg-white shadow-sm transition-all hover:shadow-xl">
      <div className="bg-navy px-8 py-6">
        <h3 className="text-xl font-bold text-white">{company}</h3>
        <div className="mt-1 flex items-center text-sm font-medium text-white/70">
          <span>{industry}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="flex-1 p-8">
        <div className="mb-6">
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-navy opacity-40">The Challenge</h4>
          <p className="text-teal-gray leading-relaxed">{challenge}</p>
        </div>
        <div className="mb-6">
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-navy opacity-40">The Solution</h4>
          <p className="text-teal-gray leading-relaxed">{solution}</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-navy opacity-40">Impact</h4>
          <ul className="space-y-3">
            {results.map((result, index) => (
              <li key={index} className="flex items-center text-sm font-semibold text-navy">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-red/10 text-orange-red">
                  <CheckCircle2 size={14} />
                </div>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Resume Match Card Component (for deep-dive demos)
export const CandidateMatchCard = ({ candidate }: { candidate: any }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-muted bg-white shadow-sm transition-all hover:shadow-xl">
      <div className="flex items-center justify-between border-b border-muted bg-oat-medium/30 px-6 py-4">
        <div>
          <h3 className="text-lg font-bold text-navy">{candidate.name}</h3>
          <p className="text-xs font-medium text-teal-gray">{candidate.candidateId}</p>
        </div>
        <div className={cn(
          "rounded-full px-4 py-1 text-sm font-bold tracking-tight shadow-sm",
          candidate.matchScore >= 90 ? "bg-orange-red text-white" : "bg-navy text-white"
        )}>
          {candidate.matchScore}% Match
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-navy/40">Key Skills</div>
          <div className="flex flex-wrap gap-2">
            {candidate.keySkills.map((skill: string, index: number) => (
              <span key={index} className="rounded-lg bg-navy/5 px-3 py-1 text-xs font-bold text-navy">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-4 border-t border-muted pt-6 text-sm">
          <div>
            <div className="mb-1 text-xs font-bold text-navy/40">Experience</div>
            <div className="font-bold text-navy">{candidate.experience} years</div>
          </div>
          <div>
            <div className="mb-1 text-xs font-bold text-navy/40">Location</div>
            <div className="font-bold text-navy">{candidate.location}</div>
          </div>
          <div>
            <div className="mb-1 text-xs font-bold text-navy/40">Education</div>
            <div className="font-bold text-navy truncate">{candidate.educationLevel}</div>
          </div>
          <div>
            <div className="mb-1 text-xs font-bold text-navy/40">Availability</div>
            <div className="font-bold text-navy">{candidate.availability}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-muted bg-gray-50/50 px-6 py-4">
        <span className="text-xs font-medium text-teal-gray">{candidate.lastActivity}</span>
        <button className="text-sm font-bold text-orange-red hover:underline decoration-2 underline-offset-4">
          Full Intelligence Report →
        </button>
      </div>
    </div>
  );
};

// Voice Conversation Card Component (for deep-dive demos)
export const VoiceConversationCard = ({ conversation }: { conversation: any }) => {
  return (
    <div className="flex flex-col rounded-2xl border border-muted bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center justify-between border-b border-muted bg-navy/5 px-6 py-4">
        <div>
          <h3 className="font-bold text-navy">{conversation.candidateName}</h3>
          <p className="text-xs text-teal-gray">{conversation.position}</p>
        </div>
        <div className={cn(
          "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
          conversation.sentimentScore > 80 ? "bg-green-100 text-green-700" : "bg-orange-red/10 text-orange-red"
        )}>
          {conversation.interestLevel} Interest
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between text-sm">
          <div className="flex items-center text-teal-gray">
            <Globe size={14} className="mr-2 text-orange-red" />
            {conversation.languageSpoken}
          </div>
          <div className="flex items-center text-teal-gray">
            <Clock size={14} className="mr-2 text-orange-red" />
            {conversation.duration}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40">AI Highlights</h4>
          <ul className="space-y-2">
            {conversation.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex text-xs leading-relaxed text-navy">
                <span className="mr-2 text-orange-red">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 border-t border-muted">
          <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase text-navy/60">
            <span>Sentiment Accuracy</span>
            <span>{conversation.sentimentScore}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-orange-red transition-all duration-1000"
              style={{ width: `${conversation.sentimentScore}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};