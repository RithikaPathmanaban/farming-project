export function Tabs({
  tabs = [],
  activeTab,
  onChange,
  className = '',
  variant = 'pill',
  size = 'md',
  fullWidth = false,
  ...props
}) {
  return (
    <div
      className={`ui-tabs-container ui-tabs-${variant} ui-tabs-${size} ${fullWidth ? 'is-full-width' : ''} ${className}`.trim()}
      role="tablist"
      {...props}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab
        const Icon = tab.icon

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`ui-tab-btn ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange && onChange(tab.id)}
          >
            {Icon && <Icon className="ui-tab-icon" />}
            <span className="ui-tab-label">{tab.label}</span>
            {tab.count !== undefined && (
              <span className="ui-tab-count">{tab.count}</span>
            )}
            {isActive && <span className="ui-tab-active-pill" layoutId="activeTabIndicator" />}
          </button>
        )
      })}
    </div>
  )
}
