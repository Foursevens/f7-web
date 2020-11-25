import {
  CmsContentBlockModel,
  cmsContentBlockToSite,
  CmsConversionBlockModel,
  cmsConversionBlockToSiteModel,
  CmsHero2Model,
  cmsHero2ModelToSite,
  SiteContentBlockModel,
  SiteConversionBlockModel,
  SiteHero2Model,
} from '../cms';

export interface CmsServicesPageModel {
  hero?: CmsHero2Model;
  blocks?: CmsContentBlockModel[];
  conversion?: CmsConversionBlockModel;
}

export interface SiteServicesPageModel {
  hero: SiteHero2Model;
  blocks: SiteContentBlockModel[];
  conversion: SiteConversionBlockModel;
}

export function cmsServicesPageToSite({
  hero,
  blocks,
  conversion,
}: CmsServicesPageModel = {}): SiteServicesPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
    blocks: (blocks ?? []).map(cmsContentBlockToSite),
    conversion: cmsConversionBlockToSiteModel(conversion ?? {}),
  };
}
