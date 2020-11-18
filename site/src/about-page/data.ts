import { client, gql } from '../api';
import {
  CmsAboutPageModel,
  cmsAboutPageToSite,
  SiteAboutPageModel,
} from './types';

export interface SiteAboutPageData {
  aboutPage: SiteAboutPageModel;
}

export async function getAboutPageData(): Promise<SiteAboutPageData> {
  const { aboutPage } = (await client.request(gql`
    {
      aboutPage {
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
      }
    }
  `)) as { aboutPage: CmsAboutPageModel | null };
  return { aboutPage: cmsAboutPageToSite(aboutPage ?? undefined) };
}
