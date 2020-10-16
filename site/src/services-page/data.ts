import { client } from '../api';
import {
  CmsServicesPageModel,
  cmsServicesPageToSite,
  SiteServicesPageModel,
} from './types';

export interface SiteServicesPageData {
  servicesPage: SiteServicesPageModel;
}

export async function getServicesPageData(): Promise<SiteServicesPageData> {
  const {
    data: { servicesPage },
  } = (await client({
    query: `query {
      servicesPage {
        blocks {
          id
          image {
            alternativeText
            width
            height
            url
            caption
          }
          title { en }
          tagline { en }
          content { en }
          cta {
            href
            text { en }
          }
        }
      }
    }`,
  })) as { data: { servicesPage?: CmsServicesPageModel } };
  return { servicesPage: cmsServicesPageToSite(servicesPage) };
}
