import React from 'react';
import { SectionHeader, Card, CardHeader, CardTitle, CardContent, Badge, StatCounter, Button } from '../ui';
import { exportDestinations } from '../../content';
import { Anchor, Globe2, Ship, ArrowRight, ShieldCheck } from 'lucide-react';

export function GlobalExportSection() {
  return (
    <section className="section-pad global-export-section" id="export">
      <div className="section-container">
        <div className="export-grid-layout">
          {/* Left Column: Heading & Global Capability Summary */}
          <div className="export-text-col">
            <SectionHeader
              align="left"
              badge="Worldwide Distribution"
              badgeVariant="accent"
              title="Global Export Network &"
              highlight="Seaport Logistics"
              description="Directly connected to deep-water container ports in Southern India, we service industrial buyers, horticultural distributors, and mattress manufacturers across five continents."
            />

            <div className="export-stats-panel">
              <div className="export-stat-card">
                <StatCounter value={15} suffix="+" label="Target Export Nations" />
              </div>
              <div className="export-stat-card">
                <StatCounter value={2} label="Key Seaport Hubs" />
              </div>
              <div className="export-stat-card">
                <StatCounter value={100} suffix="%" label="Export Grade Tested" />
              </div>
              <div className="export-stat-card">
                <StatCounter value={26} suffix=" MT" label="Max Load / 40ft HC" />
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight size={16} />}
              >
                Inquire for CIF / FOB Rates
              </Button>
            </div>
          </div>

          {/* Right Column: Active Destination Port Badges */}
          <div className="export-destinations-col">
            <div className="export-countries-list">
              {exportDestinations.map((dest, idx) => (
                <div key={idx} className="export-country-badge">
                  <span className="country-flag-symbol" role="img" aria-label={dest.country}>
                    {dest.flag}
                  </span>
                  <div className="country-info-wrap">
                    <span className="country-name">{dest.country}</span>
                    <span className="country-port">{dest.port}</span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>
                      {dest.volume}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalExportSection;
