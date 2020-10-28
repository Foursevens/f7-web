export interface CmsLocalizedModel {
  en: string;
}

export type DelocalizedText = string;

export function cmsLocalizedToSiteModel(
  localized: CmsLocalizedModel,
): DelocalizedText {
  return localized.en;
}
