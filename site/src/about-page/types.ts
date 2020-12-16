import {
  CmsContentBlockModel,
  cmsContentBlockToSiteModel,
  CmsConversionBlockModel,
  cmsConversionBlockToSiteModel,
  CmsHero2Model,
  cmsHero2ModelToSite,
  SiteContentBlockModel,
  SiteConversionBlockModel,
  SiteHero2Model,
} from '../cms';

export interface CmsAboutPageModel {
  hero?: CmsHero2Model;
  blocks?: CmsContentBlockModel[];
  conversion?: CmsConversionBlockModel;
}

export interface SiteAboutPageModel {
  hero: SiteHero2Model;
  blocks: SiteContentBlockModel[];
  conversion: SiteConversionBlockModel;
}

export function cmsAboutPageToSite({
  hero,
  blocks,
  conversion,
}: CmsAboutPageModel = {}): SiteAboutPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
    blocks: (blocks ?? []).map(cmsContentBlockToSiteModel),
    conversion: cmsConversionBlockToSiteModel(conversion ?? {}),
  };
}
