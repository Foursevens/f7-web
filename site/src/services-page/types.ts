import {
  CmsContentBlockModel,
  cmsContentBlockToSite,
  SiteContentBlockModel,
} from '../cms';

export interface CmsServicesPageModel {
  blocks?: CmsContentBlockModel[];
}

export interface SiteServicesPageModel {
  blocks?: SiteContentBlockModel[];
}

export function cmsServicesPageToSite({
  blocks = [],
}: CmsServicesPageModel = {}): SiteServicesPageModel {
  return {
    blocks: blocks.map(cmsContentBlockToSite),
  };
}
