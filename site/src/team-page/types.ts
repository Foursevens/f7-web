import {
  CmsConversionBlockModel,
  cmsConversionBlockToSiteModel,
  CmsHero2Model,
  cmsHero2ModelToSite,
  SiteConversionBlockModel,
  SiteHero2Model,
} from '../cms';

export interface CmsTeamPageModel {
  hero?: CmsHero2Model;
  conversion?: CmsConversionBlockModel;
}

export interface SiteTeamPageModel {
  hero: SiteHero2Model;
  conversion: SiteConversionBlockModel;
}

export function cmsTeamPageToSite({
  hero,
  conversion,
}: CmsTeamPageModel = {}): SiteTeamPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
    conversion: cmsConversionBlockToSiteModel(conversion ?? {}),
  };
}
