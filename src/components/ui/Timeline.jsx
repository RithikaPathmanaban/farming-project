import React from 'react';

/**
 * Reusable Timeline Component
 * Supports vertical, alternate (zig-zag), and horizontal step layouts
 * Works for any process flow, milestone roadmap, or supply chain visualization.
 */
export function Timeline({
  items = [],
  layout = 'vertical', // 'vertical' | 'alternate' | 'horizontal'
  activeStep = null,
  className = '',
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`ui-timeline ui-timeline--${layout} ${className}`.trim()}>
      <div className="ui-timeline__track" />
      <div className="ui-timeline__items">
        {items.map((item, idx) => {
          const isCompleted = activeStep !== null && idx < activeStep;
          const isActive = activeStep !== null && idx === activeStep;
          const Icon = item.icon;

          return (
            <div
              key={item.id || idx}
              className={`ui-timeline__item ${isCompleted ? 'is-completed' : ''} ${isActive ? 'is-active' : ''} ${
                idx % 2 === 0 ? 'is-even' : 'is-odd'
              }`}
            >
              <div className="ui-timeline__marker">
                <div className="ui-timeline__node">
                  {Icon ? (
                    <Icon size={18} className="ui-timeline__icon" />
                  ) : (
                    <span className="ui-timeline__step-num">{item.stepNumber || idx + 1}</span>
                  )}
                </div>
                {idx < items.length - 1 && <div className="ui-timeline__connector" />}
              </div>

              <div className="ui-timeline__content">
                <div className="ui-timeline__header">
                  {item.stepLabel && (
                    <span className="ui-timeline__step-tag">{item.stepLabel}</span>
                  )}
                  {item.tag && (
                    <span className="ui-timeline__badge">{item.tag}</span>
                  )}
                </div>
                <h3 className="ui-timeline__title">{item.title}</h3>
                {item.subtitle && <p className="ui-timeline__subtitle">{item.subtitle}</p>}
                {item.description && <p className="ui-timeline__desc">{item.description}</p>}
                
                {item.stats && item.stats.length > 0 && (
                  <div className="ui-timeline__stats">
                    {item.stats.map((st, sIdx) => (
                      <div key={sIdx} className="ui-timeline__stat-pill">
                        <span className="ui-timeline__stat-value">{st.value}</span>
                        <span className="ui-timeline__stat-label">{st.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
