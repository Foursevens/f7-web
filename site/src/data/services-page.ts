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

export interface CmsServicesPageModel {
  hero: CmsHero2Model;
  blocks: CmsContentBlockModel[];
  conversion: CmsConversionBlockModel | null;
}

export interface SiteServicesPageData {
  servicesPage: CmsServicesPageModel;
}

export function getServicesPageData(): Promise<SiteServicesPageData> {
  return client.request<SiteServicesPageData>(gql`
    ${cmsContentBlockFragment}
    ${cmsConversionBlockFragment}
    ${cmsHero2Fragment}
    ${cmsImageFragment}
    ${cmsLinkFragment}
    ${cmsLocalizedContentFragment}
    ${cmsLocalizedTextFragment}
    {
      servicesPage {
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
