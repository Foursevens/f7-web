export interface CmsLocalizedModel {
  en: string;
}

export type SiteDelocalizedModel = string;

export function cmsLocalizedToSiteModel(
  localized: CmsLocalizedModel,
): SiteDelocalizedModel {
  return localized.en;
}
