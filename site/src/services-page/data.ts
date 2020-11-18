import { client, gql } from '../api';
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
    {
      servicesPage {
        hero {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          title {
            en
          }
          content {
            en
          }
        }
        blocks {
          id
          image {
            alternativeText
            caption
            width
            height
            url
          }
          title {
            en
          }
          tagline {
            en
          }
          content {
            en
          }
          cta {
            href
            text {
              en
            }
          }
        }
      }
    }
  `)) as { servicesPage: CmsServicesPageModel | null };
  return { servicesPage: cmsServicesPageToSite(servicesPage ?? undefined) };
}
