import {
  B612_Mono,
  Fira_Code,
  JetBrains_Mono,
  Manrope,
  Noto_Serif_SC,
  Source_Code_Pro,
} from 'next/font/google'

const sansFont = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--app-font-sans',
  display: 'swap',
})

const serifFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--app-font-serif',
  display: 'swap',
  // adjustFontFallback: false,
  fallback: ['Noto Serif SC'],
})

const b612MonoFont = B612_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-b612-mono',
  display: 'swap',
})

const firaCodeFont = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-code',
  display: 'swap',
})

const jetbrainsMonoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const sourceCodeProFont = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-source-code-pro',
  display: 'swap',
})

export {
  b612MonoFont,
  firaCodeFont,
  jetbrainsMonoFont,
  sansFont,
  serifFont,
  sourceCodeProFont,
}
