export interface CmsLocalizedModel {
  en: string;
}

export type DelocalizedText = string;

export function CmsLocalizedToSiteModel(
  localized: CmsLocalizedModel,
): DelocalizedText {
  return localized.en;
}
