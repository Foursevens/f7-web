import { client, gql } from '../api';
import {
  cmsContentBlockFragment,
  cmsConversionBlockFragment,
  cmsHero2Fragment,
  cmsImageFragment,
  cmsLinkFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';
import {
  CmsServicesPageModel,
  cmsServicesPageToSite,
  SiteServicesPageModel,
} from './types';

export interface SiteServicesPageData {
  servicesPage: SiteServicesPageModel;
}

export async function getServicesPageData(): Promise<SiteServicesPageData> {
  const { servicesPage } = (await client.request(gql`
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
  `)) as { servicesPage: CmsServicesPageModel | null };
  return { servicesPage: cmsServicesPageToSite(servicesPage ?? undefined) };
}
