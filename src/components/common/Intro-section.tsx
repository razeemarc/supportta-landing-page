import React from 'react';
import Link from 'next/link';

interface IntroSectionProps {
  title?: string;
  subtitle?: string;
  location?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

const GradientButton: React.FC<{
  text: string;
  url: string;
  isPrimary?: boolean;
  className?: string;
}> = ({ text, url, isPrimary = false, className = '' }) => {
  return (
    <Link href={url}>
      <div
        className={`
          relative inline-flex items-center justify-center
          h-10 px-6 rounded-md text-sm font-medium transition
          ${
            isPrimary
              ? 'bg-gradient-to-b from-[#CC9642] to-[#976220] text-white border border-transparent'
              : 'bg-transparent text-[#976220] border border-[#CC9642]'
          }
          ${className}
        `}
      >
        {text}
        {!isPrimary && (
          <div
            className="absolute inset-0 rounded-md bg-gradient-to-b from-[#CC9642] to-[#976220] pointer-events-none"
            style={{
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1px',
            }}
          />
        )}
      </div>
    </Link>
  );
};

const IntroSection: React.FC<IntroSectionProps> = ({
  title = 'Our Tech Services',
  subtitle = 'Empowering Businesses With Tailored Digital Solutions',
  location,
  primaryButtonText = 'Free Consultation',
  primaryButtonUrl = '#consultation',
  secondaryButtonText = "Let's Build Together",
  secondaryButtonUrl = '#services',
}) => {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-black mb-3 mt-6 pt-8">
          {title}
        </h2>
        <p className="text-base font-normal text-black mb-16">
          {subtitle}
          {location && (
            <>
              <br />
              {location}
            </>
          )}
        </p>
        <div className="flex flex-row justify-center gap-8">
          <GradientButton
            text={primaryButtonText}
            url={primaryButtonUrl}
            isPrimary={true}
          />
          <GradientButton
            text={secondaryButtonText}
            url={secondaryButtonUrl}
            isPrimary={false}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;