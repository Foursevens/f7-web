import { CmsHero2Model, cmsHero2ModelToSite, SiteHero2Model } from '../cms';

export interface CmsCasesPageModel {
  hero?: CmsHero2Model;
}

export interface SiteCasesPageModel {
  hero: SiteHero2Model;
}

export function cmsCasesPageToSite({
  hero,
}: CmsCasesPageModel = {}): SiteCasesPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
  };
}
