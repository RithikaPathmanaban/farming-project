import type { CSSProperties } from 'react'
import { steps } from '../content'

export function MethodSection() {
  return (
    <section className="method" id="method">
      <div className="method-intro section-pad reveal-up"><p className="eyebrow">Our method</p><h2>From useful byproduct to <em>remarkable</em> input.</h2><p className="method-lead">The best systems are circular. We keep materials in motion, people in the loop, and quality at the centre of every decision.</p></div>
      <div className="steps">{steps.map((step, index) => <div className="step reveal-up" style={{ '--delay': `${index * 140}ms` } as CSSProperties} key={step[0]}><span>{step[0]}</span><div><h3>{step[1]}</h3><p>{step[2]}</p></div><i>↗</i></div>)}</div>
    </section>
  )
}
