import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { Award, Factory, TrendingUp, Leaf } from 'lucide-react'
import { useLanguage } from './LanguageTranslator'

export function HeritageGauges() {
  const containerRef = useRef(null)
  const hasAnimated = useRef(false)
  const { t } = useLanguage()

  const metrics = t.gauges.metrics || []

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          // Animate dial rings entrance smoothly
          const dialWraps = containerRef.current?.querySelectorAll('.gauge-dial-wrap')
          if (dialWraps) {
            animate(dialWraps, {
              scale: [0.88, 1],
              opacity: [0.3, 1],
              duration: 900,
              delay: (el, i) => i * 100,
              ease: 'outBack(1.4)',
            })
          }

          // Animate numbers smoothly
          const num1972 = containerRef.current?.querySelector('.gauge-num-1972')
          if (num1972) {
            const obj = { val: 1950 }
            animate(obj, {
              val: 1972,
              duration: 1400,
              ease: 'outExpo',
              onUpdate: () => {
                num1972.textContent = Math.round(obj.val)
              },
            })
          }

          const numUnits = containerRef.current?.querySelector('.gauge-num-units')
          if (numUnits) {
            const obj = { val: 0 }
            animate(obj, {
              val: 4,
              duration: 1200,
              ease: 'outExpo',
              onUpdate: () => {
                numUnits.textContent = `${Math.round(obj.val)} Units`
              },
            })
          }

          const num700 = containerRef.current?.querySelector('.gauge-num-700')
          if (num700) {
            const obj = { val: 200 }
            animate(obj, {
              val: 700,
              duration: 1600,
              ease: 'outExpo',
              onUpdate: () => {
                num700.textContent = `${Math.round(obj.val)} MT`
              },
            })
          }
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="heritage-gauges-cluster" ref={containerRef}>
      {/* Gauge 1: 1972 Year Established Dial */}
      <div className="gauge-instrument-card">
        <div className="gauge-dial-wrap">
          <svg className="gauge-svg-ring" viewBox="0 0 124 124">
            <circle className="gauge-bg-track" cx="62" cy="62" r="52" />
            <circle className="gauge-ring-circle" cx="62" cy="62" r="52" />
          </svg>
          <div className="gauge-dial-center">
            <Award className="gauge-center-icon" />
            <span className="gauge-center-num gauge-num-1972">1972</span>
          </div>
        </div>
        <div className="gauge-info">
          <h4 className="gauge-title">{metrics[0]?.label || 'Year Established'}</h4>
          <p className="gauge-desc">{metrics[0]?.desc || '40+ years of continuous industry leadership & heritage'}</p>
        </div>
      </div>

      {/* Gauge 2: 4 Dedicated Units Segmented Indicator */}
      <div className="gauge-instrument-card">
        <div className="gauge-dial-wrap">
          <svg className="gauge-svg-ring" viewBox="0 0 124 124">
            <circle className="gauge-bg-track" cx="62" cy="62" r="52" />
            <circle className="gauge-ring-circle" cx="62" cy="62" r="52" />
          </svg>
          <div className="gauge-dial-center">
            <Factory className="gauge-center-icon" />
            <span className="gauge-center-num gauge-num-units">4 Units</span>
          </div>
        </div>
        <div className="gauge-info">
          <h4 className="gauge-title">{metrics[1]?.label || 'Manufacturing Hubs'}</h4>
          <p className="gauge-desc">{metrics[1]?.desc || 'Dedicated facilities for curled rope, raw fibre & peat'}</p>
        </div>
      </div>

      {/* Gauge 3: 700 MT Monthly Capacity Radial Meter */}
      <div className="gauge-instrument-card">
        <div className="gauge-dial-wrap">
          <svg className="gauge-svg-ring" viewBox="0 0 124 124">
            <circle className="gauge-bg-track" cx="62" cy="62" r="52" />
            <circle className="gauge-ring-circle" cx="62" cy="62" r="52" />
          </svg>
          <div className="gauge-dial-center">
            <TrendingUp className="gauge-center-icon" />
            <span className="gauge-center-num gauge-num-700">700 MT</span>
          </div>
        </div>
        <div className="gauge-info">
          <h4 className="gauge-title">{metrics[2]?.label || 'Monthly Production'}</h4>
          <p className="gauge-desc">{metrics[2]?.desc || '400 MT curled coir + 700 MT coco peat capacity'}</p>
        </div>
      </div>

      {/* Gauge 4: 100% Eco-Friendly Circular Gauge */}
      <div className="gauge-instrument-card">
        <div className="gauge-dial-wrap">
          <svg className="gauge-svg-ring" viewBox="0 0 124 124">
            <circle className="gauge-bg-track" cx="62" cy="62" r="52" />
            <circle className="gauge-ring-circle" cx="62" cy="62" r="52" />
          </svg>
          <div className="gauge-dial-center">
            <Leaf className="gauge-center-icon" />
            <span className="gauge-center-num gauge-num-100">100%</span>
          </div>
        </div>
        <div className="gauge-info">
          <h4 className="gauge-title">{metrics[3]?.label || 'Eco-Friendly & Pure'}</h4>
          <p className="gauge-desc">{metrics[3]?.desc || '100% biodegradable natural coconut husk products'}</p>
        </div>
      </div>
    </div>
  )
}

export default HeritageGauges
