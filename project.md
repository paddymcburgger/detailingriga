# Detailing Riga

## Components (src/components/)
- ContactFormModal.astro
- FeaturesGrid.astro
- Footer.astro
- Header.astro
- HeroCarousel.astro
- LanguageSwitcher.astro
- MoreProof.astro
- SectionHero.astro
- ServiceCards.astro
- SocialProofCards.astro
- VideoShowcase.astro

## Layouts (src/layouts/)
- Layout.astro
- ServicePage.astro

## Pages (src/pages/)
- index.astro (RU)
- en/index.astro (EN)
- boats/index, upholstery, ppf, vinyl, graphics, glass-restoration
- cars/index, ppf, vinyl, graphics, glass-restoration, paint-correction, tint
- services/water-stone.astro

## Images (src/assets/images/)
- boats/ (hero, moreProof)
- cars/ (hero, moreProof)
- gallery/yachts/, motorboats/, small-boats/ (socialProof)
- services/ (service cards)

## Import
import img from '../../assets/images/[folder]/[file].jpg';
Use: img.src

## Rules
- max-width: 1200px
- YouTube: iframe autoplay=1&mute=1&loop=1&controls=0
- Image names: [context]-[description].jpg
- Styles inside components
- UI translations: translations.ts
- Page content: in page files