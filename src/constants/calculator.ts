import type { LanguageOption } from '@/types/calculator'

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'none', flag: '🔇', name: 'None' },
  { code: 'ar-SA', flag: '🇸🇦', name: 'Arabic' },
  { code: 'fr-FR', flag: '🇫🇷', name: 'French' },
  { code: 'en-US', flag: '🇺🇸', name: 'English' }
]

export const MESSAGES = {
  'none': {
    listening: 'Listening...',
    speak: 'Please speak clearly',
    error: 'Voice recognition error. Please try again.'
  },
  'ar-SA': {
    listening: 'جاري الاستماع...',
    speak: 'تحدث بوضوح من فضلك',
    error: 'خطأ في التعرف على الصوت. حاول مرة أخرى'
  },
  'fr-FR': {
    listening: 'Écoute en cours...',
    speak: 'Parlez clairement s\'il vous plaît',
    error: 'Erreur de reconnaissance vocale. Veuillez réessayer.'
  },
  'en-US': {
    listening: 'Listening...',
    speak: 'Please speak clearly',
    error: 'Voice recognition error. Please try again.'
  }
} as const 