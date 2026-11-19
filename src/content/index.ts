import { de } from './de'
import { en } from './en'
import type { Copy, Locale } from './types'

export const copy: Record<Locale, Copy> = { en, de }
export type { Copy, Locale }
