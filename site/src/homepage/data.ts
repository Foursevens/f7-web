import { client, gql } from '../api';
import {
  CmsHomepageModel,
  cmsHomepageToSite,
  SiteHomepageModel,
} from './types';

export interface SiteHomepageData {
  homepage: SiteHomepageModel;
}

export async function getHomepageData(): Promise<SiteHomepageData> {
  const { homepage } = (await client.request(gql`
    {
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
          title {
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
  `)) as { homepage: CmsHomepageModel | null };
  return { homepage: cmsHomepageToSite(homepage ?? undefined) };
}
