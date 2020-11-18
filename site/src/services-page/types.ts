import {
  CmsContentBlockModel,
  cmsContentBlockToSite,
  CmsHero2Model,
  cmsHero2ModelToSite,
  SiteContentBlockModel,
  SiteHero2Model,
} from '../cms';

export interface CmsServicesPageModel {
  hero?: CmsHero2Model;
  blocks?: CmsContentBlockModel[];
}

export interface SiteServicesPageModel {
  hero: SiteHero2Model;
  blocks?: SiteContentBlockModel[];
}

export function cmsServicesPageToSite({
  hero,
  blocks,
}: CmsServicesPageModel = {}): SiteServicesPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
    blocks: (blocks ?? []).map(cmsContentBlockToSite),
  };
}
