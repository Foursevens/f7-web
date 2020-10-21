import { client } from '../api';
import {
  CmsHomepageModel,
  cmsHomepageToSite,
  SiteHomepageModel,
} from './types';

export interface SiteHomepageData {
  homepage: SiteHomepageModel;
}

export async function getHomepageData(): Promise<SiteHomepageData> {
  const {
    data: { homepage },
  } = (await client({
    query: `query {
      homepage {
        hero {
          id
          image {
            alternativeText
            width
            height
            url
            caption
          }
          title { en }
          content { en }
          cta {
            href
            text { en }
          }
        }
      }
    }`,
  })) as { data: { homepage?: CmsHomepageModel } };
  return { homepage: cmsHomepageToSite(homepage) };
}
