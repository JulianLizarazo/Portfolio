export const fallbackLng: string = 'es'
export const languages: string[] = [fallbackLng, 'en']
export const defaultNS: string = 'translation'

export function getOptions (lng: string = fallbackLng, ns: string = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}