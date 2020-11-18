import { client, gql } from '../api';
import { cmsImageFragment, cmsLinkFragment } from '../cms';
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
    ${cmsImageFragment}
    ${cmsLinkFragment}
    {
      homepage {
        hero {
          id
          image {
            ...image
          }
          title {
            en
          }
          content {
            en
          }
          cta {
            ...link
          }
        }
      }
    }
  `)) as { homepage: CmsHomepageModel | null };
  return { homepage: cmsHomepageToSite(homepage ?? undefined) };
}
