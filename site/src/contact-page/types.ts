import {
  CmsLocalizedModel,
  cmsLocalizedToSiteModel,
  SiteLocalizedModel,
} from '../cms';

export interface CmsContactPageModel {
  title?: CmsLocalizedModel[];
}

export interface SiteContactPageModel {
  title: SiteLocalizedModel[];
}

export function cmsContactPageToSite({
  title,
}: CmsContactPageModel = {}): SiteContactPageModel {
  return {
    title: (title ?? []).map(cmsLocalizedToSiteModel),
  };
}
