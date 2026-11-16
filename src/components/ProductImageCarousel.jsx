import { useState, useEffect, useRef } from 'react'

/**
 * ProductImageCarousel
 * Auto-running product image slideshow without navigation controls.
 * Automatically pauses and stays still when the user hovers over the image.
 */
export function ProductImageCarousel({
  images = [],
  fallbackImage = '',
  alt = '',
  className = '',
  imgClassName = '',
  interval = 2200,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  // Normalize images list
  const validImages = Array.isArray(images) && images.length > 0
    ? images.filter(Boolean)
    : (fallbackImage ? [fallbackImage] : [])

  const total = validImages.length

  useEffect(() => {
    // No rotation needed for single image or when hovered
    if (total <= 1 || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, interval)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [total, isHovered, interval])

  // Reset index if image list changes and index is out of bounds
  useEffect(() => {
    if (currentIndex >= total && total > 0) {
      setCurrentIndex(0)
    }
  }, [total, currentIndex])

  if (total === 0) return null

  // Single image optimization
  if (total === 1) {
    return (
      <div className={`product-carousel-wrap ${className}`}>
        <img
          src={validImages[0]}
          alt={alt}
          className={`product-carousel-single-img ${imgClassName}`}
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={`product-carousel-wrap notranslate ${className} ${isHovered ? 'is-paused' : 'is-running'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      title="Hover to pause slideshow"
    >
      {validImages.map((src, idx) => {
        const isActive = idx === currentIndex
        return (
          <img
            key={`${src}-${idx}`}
            src={src}
            alt={`${alt} - View ${idx + 1}`}
            className={`product-carousel-slide ${imgClassName} ${isActive ? 'is-active' : 'is-inactive'}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
            aria-hidden={!isActive}
          />
        )
      })}
    </div>
  )
}
export default ProductImageCarousel
