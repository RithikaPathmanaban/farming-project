import React from 'react';
import { SectionHeader, Accordion, Card, CardHeader, CardTitle, CardContent, Button, Badge } from '../ui';
import { faqItems } from '../../content';
import { HelpCircle, PhoneCall, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export function FaqSection() {
  const accordionItems = faqItems.map((item, idx) => ({
    id: item.id || `faq-${idx}`,
    number: `0${idx + 1}`,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section className="section-pad faq-section" id="faq">
      <div className="section-container">
        <div className="faq-layout-grid">
          {/* Left Column: Heading & Direct Help Desk CTA */}
          <div className="faq-left-col">
            <SectionHeader
              align="left"
              badge="Frequently Asked Questions"
              badgeVariant="accent"
              title="B2B Supply &"
              highlight="Export Clarifications"
              description="Find straightforward answers regarding minimum container orders, moisture controls, custom labeling, and global port clearances."
            />

            <div className="faq-support-card">
              <h3 className="faq-support-title">Have a Specific Contract Inquiry?</h3>
              <p className="faq-support-desc">
                Our export sales managers are available for direct discussions regarding customized moisture specifications, EC tolerances, and forward freight booking.
              </p>
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight size={16} />}
                fullWidth
              >
                Speak With Our Desk
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="faq-right-col">
            <Accordion
              items={accordionItems}
              allowMultiple={false}
              defaultExpanded="faq-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
