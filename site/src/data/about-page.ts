import { client, gql } from '../api';
import {
  cmsContentBlockFragment,
  CmsContentBlockModel,
  cmsConversionBlockFragment,
  CmsConversionBlockModel,
  cmsHero2Fragment,
  CmsHero2Model,
  cmsImageFragment,
  cmsLinkFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';

interface CmsAboutPageModel {
  hero: CmsHero2Model;
  blocks: CmsContentBlockModel[];
  conversion: CmsConversionBlockModel | null;
}

export interface SiteAboutPageData {
  aboutPage: CmsAboutPageModel;
}

export function getAboutPageData(): Promise<SiteAboutPageData> {
  return client.request<{ aboutPage: CmsAboutPageModel }>(gql`
    ${cmsContentBlockFragment}
    ${cmsConversionBlockFragment}
    ${cmsHero2Fragment}
    ${cmsImageFragment}
    ${cmsLinkFragment}
    ${cmsLocalizedContentFragment}
    ${cmsLocalizedTextFragment}
    {
      aboutPage {
        hero {
          ...hero2
        }
        blocks {
          ...contentBlock
        }
        conversion {
          ...conversionBlock
        }
      }
    }
  `);
}
