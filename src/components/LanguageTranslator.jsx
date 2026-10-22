import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { Languages, Check, Globe, Sparkles, X } from 'lucide-react'

export const SUPPORTED_LANGUAGES = [
  {
    code: 'en',
    label: 'English',
    native: 'English',
    shortNative: 'English',
    flag: '🇬🇧',
    dir: 'ltr',
    desc: 'Original English content',
  },
  {
    code: 'zh-CN',
    label: 'Chinese',
    native: '中文',
    shortNative: '中文',
    flag: '🇨🇳',
    dir: 'ltr',
    desc: '简体中文 · Chinese translation',
  },
  {
    code: 'ar',
    label: 'Arabic',
    native: 'العربية',
    shortNative: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
    desc: 'الترجمة العربية · Arabic translation',
  },
]

export const BRAND_TRANSLATIONS = {
  en: {
    brandName: 'THAIAGAM',
    brandSub: 'GROUP OF COMPANIES · SINCE 1972',
    name: 'Thaiagam',
    fullName: 'Thaiagam Group of Companies',
    documentTitle: 'Thaiagam Group of Companies | Qualitative Range of Coir Fibre Products Since 1972',
    aboutDesc: 'Thaiagam group of companies since 1972 has more than 40 years of experiences in coir products. Our group comprises of four units supplying qualitative coir products.',
    leadDesc: 'Thaiagam group of companies since 1972 has more than 40 years of experiences in coir products. Our group comprises of four units supplying India’s leading companies and global export markets.',
  },
  'zh-CN': {
    brandName: '泰亚甘',
    brandSub: '企业集团 · 始于 1972 年',
    name: '泰亚甘',
    fullName: '泰亚甘企业集团 (Thaiagam Group)',
    documentTitle: '泰亚甘企业集团 | 始于1972年的高品质椰纤维与椰糠产品',
    aboutDesc: '泰亚甘企业集团自1972年成立以来，在椰子纤维与椰糠制品领域拥有40多年的丰富经验。我们集团下设四个生产单元，面向全球供应优质环保产品。',
    leadDesc: '泰亚甘企业集团自1972年起拥有40余年专业生产经验，旗下4大核心制造工厂长期向印度龙头企业及欧美全球市场大宗出口高品质椰纤维。',
  },
  ar: {
    brandName: 'ثاياجام',
    brandSub: 'مجموعة الشركات · منذ عام 1972',
    name: 'ثاياجام',
    fullName: 'مجموعة شركات ثاياجام (Thaiagam Group)',
    documentTitle: 'مجموعة شركات ثاياجام | منتجات ألياف جوز الهند عالية الجودة منذ 1972',
    aboutDesc: 'تتمتع مجموعة شركات ثاياجام بخبرة تمتد لأكثر من 40 عاماً منذ عام 1972 في تصنيع وتصدير منتجات ألياف جوز الهند والبيتموس عالية الجودة عالمياً.',
    leadDesc: 'تمتلك مجموعة شركات ثاياجام منذ عام 1972 أكثر من 40 عاماً من الخبرة في منتجات جوز الهند وتوريد كبرى الشركات والأسواق العالمية.',
  },
}

export function getBrandInfo(langCode) {
  return BRAND_TRANSLATIONS[langCode] || BRAND_TRANSLATIONS.en
}

const STORAGE_LANG_KEY = 'thaiagam_lang_v1'

export function getSavedLanguage() {
  try {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-zA-Z-]+)/)
    if (match && match[1]) {
      const found = SUPPORTED_LANGUAGES.find((l) => l.code === match[1])
      if (found) return found.code
    }
    const saved = localStorage.getItem(STORAGE_LANG_KEY)
    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
      return saved
    }
  } catch (e) {
    console.warn('Language state read error:', e)
  }
  return 'en'
}

export function applyGoogleTranslation(langCode) {
  try {
    localStorage.setItem(STORAGE_LANG_KEY, langCode)
  } catch {}

  const targetLang = SUPPORTED_LANGUAGES.find((l) => l.code === langCode) || SUPPORTED_LANGUAGES[0]

  // Set document direction and lang attribute
  document.documentElement.lang = targetLang.code
  document.documentElement.dir = targetLang.dir

  // Clear any lingering Google Translate cookies so browser extensions or old sessions don't render widget
  const domain = window.location.hostname
  const expirePast = '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = `googtrans${expirePast}`
  document.cookie = `googtrans${expirePast} domain=${domain};`
  if (domain.includes('.')) {
    const parts = domain.split('.')
    if (parts.length >= 2) {
      const rootDomain = '.' + parts.slice(-2).join('.')
      document.cookie = `googtrans${expirePast} domain=${rootDomain};`
    }
  }

  // Remove any injected Google Translate badges or floating symbols
  try {
    document.querySelectorAll('.VIpgJd-ZVi9od-aZ2wEe-wOHMyf, .VIpgJd-ZVi9od-aZ2wEe-OiiCO, .goog-te-banner-frame, #goog-gt-tt, iframe[id^=":"]')
      .forEach((el) => el.remove())
  } catch {}
}

import { getTranslation } from '../translations'

// React Context for global reactive language & localized brand state
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLangState] = useState(getSavedLanguage)

  const selectLanguage = (langCode) => {
    setCurrentLangState(langCode)
    applyGoogleTranslation(langCode)
  }

  useEffect(() => {
    const brand = getBrandInfo(currentLang)
    if (brand && brand.documentTitle) {
      document.title = brand.documentTitle
    }
    const active = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang)
    if (active) {
      document.documentElement.lang = active.code
      document.documentElement.dir = active.dir
    }
  }, [currentLang])

  const brand = getBrandInfo(currentLang)
  const t = getTranslation(currentLang)

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        selectLanguage,
        brand,
        t,
        translations: t,
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Fallback if rendered outside provider
    const [currentLang, setCurrentLang] = useLanguageState()
    const t = getTranslation(currentLang)
    return {
      currentLang,
      selectLanguage: setCurrentLang,
      brand: getBrandInfo(currentLang),
      t,
      translations: t,
      supportedLanguages: SUPPORTED_LANGUAGES,
    }
  }
  return context
}

export function useLanguageState() {
  const [currentLang, setCurrentLang] = useState(getSavedLanguage)

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode)
    applyGoogleTranslation(langCode)
  }

  useEffect(() => {
    const active = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang)
    if (active) {
      document.documentElement.lang = active.code
      document.documentElement.dir = active.dir
    }
  }, [currentLang])

  return [currentLang, changeLanguage]
}

/* Floating Translator Trigger Pill (Positioned near Theme Button at bottom left) */
export function FloatingLanguageTrigger({ currentLang, onSelectLanguage, hidden }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const activeLangObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className={`floating-language-wrapper notranslate ${hidden ? 'is-hidden' : ''}`} ref={menuRef} translate="no">
      <button
        type="button"
        className="floating-language-trigger notranslate"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Change Website Language"
        title={`Current Language: ${activeLangObj.native}. Click to translate.`}
        translate="no"
      >
        <Languages className="language-btn-icon" />
        <span className="language-btn-code notranslate" translate="no">
          {activeLangObj.flag} {activeLangObj.shortNative}
        </span>
        <span className="language-btn-dot" />
      </button>

      {isOpen && (
        <div className="language-dropdown-popover notranslate" role="dialog" aria-label="Select Language" translate="no">
          <div className="lang-popover-header notranslate" translate="no">
            <div className="lang-popover-title-row">
              <Globe className="w-4 h-4 text-accent" />
              <span className="lang-popover-title">Select Language</span>
            </div>
            <button
              type="button"
              className="lang-popover-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close language menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lang-options-list notranslate" translate="no">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isActive = lang.code === currentLang
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={`lang-option-btn notranslate ${isActive ? 'is-active' : ''}`}
                  translate="no"
                  onClick={() => {
                    onSelectLanguage(lang.code)
                    setIsOpen(false)
                  }}
                >
                  <span className="lang-flag">{lang.flag}</span>
                  <div className="lang-details notranslate" translate="no">
                    <span className="lang-name notranslate" translate="no">{lang.native}</span>
                    <span className="lang-native notranslate" translate="no">{lang.label} ({lang.desc})</span>
                  </div>
                  {isActive && <Check className="w-4 h-4 text-accent lang-check" />}
                </button>
              )
            })}
          </div>

          <div className="lang-popover-footer notranslate" translate="no">
            <span>Powered by Google Translate · Instant Whole Website Translation</span>
          </div>
        </div>
      )}
    </div>
  )
}

/* Header & Mobile Drawer Language Button */
export function HeaderLanguageButton({ currentLang, onSelectLanguage, isMobileDrawer = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const activeLangObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className={`header-language-wrapper notranslate ${isMobileDrawer ? 'is-mobile' : ''}`} ref={menuRef} translate="no">
      <button
        type="button"
        className={`${isMobileDrawer ? 'mobile-drawer-theme-btn' : 'header-language-btn'} notranslate`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select Website Language"
        title={`Current Language: ${activeLangObj.native}`}
        translate="no"
      >
        <Languages className="w-4 h-4 text-accent" />
        <span className="notranslate" translate="no">{activeLangObj.flag} {activeLangObj.native}</span>
        <span className="theme-btn-dot" />
      </button>

      {isOpen && (
        <div className={`language-dropdown-popover notranslate ${isMobileDrawer ? 'mobile-popover' : ''}`} translate="no">
          <div className="lang-popover-header notranslate" translate="no">
            <div className="lang-popover-title-row">
              <Globe className="w-4 h-4 text-accent" />
              <span className="lang-popover-title">Select Language</span>
            </div>
            <button
              type="button"
              className="lang-popover-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close language menu"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lang-options-list notranslate" translate="no">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isActive = lang.code === currentLang
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={`lang-option-btn notranslate ${isActive ? 'is-active' : ''}`}
                  translate="no"
                  onClick={() => {
                    onSelectLanguage(lang.code)
                    setIsOpen(false)
                  }}
                >
                  <span className="lang-flag">{lang.flag}</span>
                  <div className="lang-details notranslate" translate="no">
                    <span className="lang-name notranslate" translate="no">{lang.native}</span>
                    <span className="lang-native notranslate" translate="no">{lang.label} ({lang.desc})</span>
                  </div>
                  {isActive && <Check className="w-4 h-4 text-accent lang-check" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
