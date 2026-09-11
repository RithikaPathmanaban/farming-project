import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import { Award, Factory, TrendingUp, Leaf } from 'lucide-react'

export function HeritageGauges() {
  const containerRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          // Animate circular SVG strokes
          const rings = containerRef.current?.querySelectorAll('.gauge-ring-circle')
          if (rings) {
            rings.forEach((ring) => {
              const targetOffset = ring.getAttribute('data-target-offset') || '0'
              animate(ring, {
                strokeDashoffset: [327, parseFloat(targetOffset)],
                duration: 1600,
                ease: 'outCubic',
              })
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

          const num100 = containerRef.current?.querySelector('.gauge-num-100')
          if (num100) {
            const obj = { val: 50 }
            animate(obj, {
              val: 100,
              duration: 1500,
              ease: 'outExpo',
              onUpdate: () => {
                num100.textContent = `${Math.round(obj.val)}%`
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
            <circle
              className="gauge-ring-circle"
              cx="62"
              cy="62"
              r="52"
              strokeDasharray="327"
              strokeDashoffset="82"
              data-target-offset="82"
            />
          </svg>
          <div className="gauge-dial-center">
            <Award className="gauge-center-icon" />
            <span className="gauge-center-num gauge-num-1972">1972</span>
          </div>
        </div>
        <div className="gauge-info">
          <h4 className="gauge-title">Year Established</h4>
          <p className="gauge-desc">40+ years of continuous industry leadership & heritage</p>
        </div>
      </div>

      {/* Gauge 2: 4 Dedicated Units Segmented Indicator */}
      <div className="gauge-instrument-card">
        <div className="gauge-dial-wrap">
          <svg className="gauge-svg-ring" viewBox="0 0 124 124">
            <circle className="gauge-bg-track" cx="62" cy="62" r="52" />
            <circle
              className="gauge-ring-circle"
              cx="62"
              cy="62"
              r="52"
              strokeDasharray="327"
              strokeDashoffset="0"
              data-target-offset="0"
            />
          </svg>
          <div className="gauge-dial-center">
            <Factory className="gauge-center-icon" />
            <span className="gauge-center-num gauge-num-units">4 Units</span>
          </div>
        </div>
        <div className="gauge-info">
          <h4 className="gauge-title">Manufacturing Hubs</h4>
          <p className="gauge-desc">Dedicated facilities for curled rope, raw fibre & peat</p>
        </div>
      </div>

      {/* Gauge 3: 700 MT Monthly Capacity Radial Meter */}
      <div className="gauge-instrument-card">
        <div className="gauge-dial-wrap">
          <svg className="gauge-svg-ring" viewBox="0 0 124 124">
            <circle className="gauge-bg-track" cx="62" cy="62" r="52" />
            <circle
              className="gauge-ring-circle gauge-ring-orange"
              cx="62"
              cy="62"
              r="52"
              strokeDasharray="327"
              strokeDashoffset="49"
              data-target-offset="49"
            />
          </svg>
          <div className="gauge-dial-center">
            <TrendingUp className="gauge-center-icon" />
            <span className="gauge-center-num gauge-num-700">700 MT</span>
          </div>
        </div>
        <div className="gauge-info">
          <h4 className="gauge-title">Monthly Production</h4>
          <p className="gauge-desc">400 MT curled coir + 700 MT coco peat capacity</p>
        </div>
      </div>

      {/* Gauge 4: 100% Eco-Friendly Circular Gauge */}
      <div className="gauge-instrument-card">
        <div className="gauge-dial-wrap">
          <svg className="gauge-svg-ring" viewBox="0 0 124 124">
            <circle className="gauge-bg-track" cx="62" cy="62" r="52" />
            <circle
              className="gauge-ring-circle gauge-ring-green"
              cx="62"
              cy="62"
              r="52"
              strokeDasharray="327"
              strokeDashoffset="0"
              data-target-offset="0"
            />
          </svg>
          <div className="gauge-dial-center">
            <Leaf className="gauge-center-icon" />
            <span className="gauge-center-num gauge-num-100">100%</span>
          </div>
        </div>
        <div className="gauge-info">
          <h4 className="gauge-title">Eco-Friendly & Pure</h4>
          <p className="gauge-desc">100% biodegradable natural coconut husk products</p>
        </div>
      </div>
    </div>
  )
}

export default HeritageGauges
