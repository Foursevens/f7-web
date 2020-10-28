import { client } from '../api';
import {
  CmsAboutPageModel,
  cmsAboutPageToSite,
  SiteAboutPageModel,
} from './types';

export interface SiteAboutPageData {
  aboutPage: SiteAboutPageModel;
}

export async function getAboutPageData(): Promise<SiteAboutPageData> {
  const {
    data: { aboutPage },
  } = (await client({
    query: `query {
      aboutPage {
        hero {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          title { en }
          content { en }
        }
      }
    }`,
  })) as { data: { aboutPage: CmsAboutPageModel | null } };
  return { aboutPage: cmsAboutPageToSite(aboutPage ?? undefined) };
}
