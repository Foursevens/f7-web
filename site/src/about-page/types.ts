import { CmsHero2Model, cmsHero2ModelToSite, SiteHero2Model } from '../cms';

export interface CmsAboutPageModel {
  hero?: CmsHero2Model;
}

export interface SiteAboutPageModel {
  hero: SiteHero2Model;
}

export function cmsAboutPageToSite({
  hero,
}: CmsAboutPageModel = {}): SiteAboutPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
  };
}
