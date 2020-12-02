import { CmsLocalizedModel, cmsLocalizedToSiteModel } from '../cms';

export interface CmsContactPageModel {
  title?: CmsLocalizedModel[];
}

export interface SiteContactPageModel {
  title: string[];
}

export function cmsContactPageToSite({
  title,
}: CmsContactPageModel = {}): SiteContactPageModel {
  return {
    title: (title ?? []).map(cmsLocalizedToSiteModel),
  };
}
