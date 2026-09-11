import React from 'react';
import { Marquee } from '../ui/Marquee';
import { trustTickerItems } from '../../content';
import { Award, CheckCircle2, Factory, Globe2, Leaf, ShieldCheck, Sparkles, Truck } from 'lucide-react';

const iconMap = [Award, ShieldCheck, Globe2, Leaf, Factory, Sparkles, CheckCircle2, Truck];

export function TrustMarqueeSection() {
  return (
    <section className="trust-marquee-section" aria-label="Key Performance Indicators and Industry Trust">
      <Marquee speed={36} pauseOnHover={true} gap="2rem">
        {trustTickerItems.map((item, idx) => {
          const Icon = iconMap[idx % iconMap.length];
          return (
            <div key={idx} className="trust-marquee-item">
              <span className="trust-item-icon">
                <Icon size={16} />
              </span>
              <span className="trust-item-label">{item.label}</span>
              <span className="trust-item-value">{item.value}</span>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}

export default TrustMarqueeSection;
