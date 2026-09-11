import React from 'react';
import { SectionHeader, Timeline, Badge, Button } from '../ui';
import { processTimeline } from '../../content';
import { Layers, ShieldCheck, FileSpreadsheet, ArrowRight } from 'lucide-react';

export function ProcessTimelineSection() {
  return (
    <section className="section-pad process-section" id="process">
      <div className="section-container">
        <SectionHeader
          align="center"
          badge="End-to-End Manufacturing"
          badgeVariant="accent"
          title="From Raw Husk to"
          highlight="Export-Grade Coir"
          description="Every step of our production workflow is engineered for consistent tensile resilience, controlled electrical conductivity, and 100% natural sustainability."
        />

        <Timeline
          items={processTimeline}
          layout="alternate"
          className="process-timeline-wrapper"
        />

        <div className="ui-section-header__actions" style={{ justifyContent: 'center', marginTop: '3.5rem' }}>
          <Button
            as="a"
            href="#contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight size={18} />}
          >
            Request Factory Samples
          </Button>
          <Button
            as="a"
            href="#products"
            variant="glass"
            size="lg"
            leftIcon={<Layers size={18} />}
          >
            Explore Specifications
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProcessTimelineSection;
