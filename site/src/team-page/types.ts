import { CmsHero2Model, cmsHero2ModelToSite, SiteHero2Model } from '../cms';

export interface CmsTeamPageModel {
  hero?: CmsHero2Model;
}

export interface SiteTeamPageModel {
  hero: SiteHero2Model;
}

export function cmsTeamPageToSite({
  hero,
}: CmsTeamPageModel = {}): SiteTeamPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
  };
}
