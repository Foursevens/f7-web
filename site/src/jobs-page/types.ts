import { CmsHero2Model, cmsHero2ModelToSite, SiteHero2Model } from '../cms';

export interface CmsJobsPageModel {
  hero?: CmsHero2Model;
}

export interface SiteJobsPageModel {
  hero: SiteHero2Model;
}

export function cmsJobsPageToSite({
  hero,
}: CmsJobsPageModel = {}): SiteJobsPageModel {
  return {
    hero: cmsHero2ModelToSite(hero ?? {}),
  };
}
