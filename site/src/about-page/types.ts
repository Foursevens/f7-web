import {
  CmsConversionBlockModel,
  cmsConversionBlockToSiteModel,
  CmsHero2Model,
  cmsHero2ModelToSite,
  SiteConversionBlockModel,
  SiteHero2Model,
} from '../cms';

export interface CmsAboutPageModel {
  hero?: CmsHero2Model;
  conversion?: CmsConversionBlockModel;
}

export interface SiteAboutPageModel {
  hero: SiteHero2Model;
  conversion: SiteConversionBlockModel;
}

export function cmsAboutPageToSite({
  hero,
  conversion,
}: CmsAboutPageModel = {}): SiteAboutPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
    conversion: cmsConversionBlockToSiteModel(conversion ?? {}),
  };
}
