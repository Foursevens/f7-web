import {
  CmsContentBlockModel,
  SiteContentBlockModel,
  cmsContentBlockToSite,
} from '../cms';

export interface CmsHomepageModel {
  hero?: CmsContentBlockModel;
}

export interface SiteHomepageModel {
  hero: SiteContentBlockModel;
}

export function cmsHomepageToSite({
  hero = { id: 'hero-1' },
}: CmsHomepageModel = {}): SiteHomepageModel {
  return {
    hero: cmsContentBlockToSite(hero),
  };
}
