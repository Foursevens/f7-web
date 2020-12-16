import {
  CmsContentBlockModel,
  SiteContentBlockModel,
  cmsContentBlockToSiteModel,
  CmsConversionBlockModel,
  SiteConversionBlockModel,
  cmsConversionBlockToSiteModel,
} from '../cms';

export interface CmsHomepageModel {
  hero?: CmsContentBlockModel;
  blocks?: CmsContentBlockModel[];
  conversion?: CmsConversionBlockModel;
}

export interface SiteHomepageModel {
  hero: SiteContentBlockModel;
  blocks: SiteContentBlockModel[];
  conversion: SiteConversionBlockModel;
}

export function cmsHomepageToSite({
  hero,
  blocks,
  conversion,
}: CmsHomepageModel = {}): SiteHomepageModel {
  return {
    hero: cmsContentBlockToSiteModel(hero ?? { id: 'hero-1' }),
    blocks: (blocks ?? []).map(cmsContentBlockToSiteModel),
    conversion: cmsConversionBlockToSiteModel(conversion ?? {}),
  };
}
