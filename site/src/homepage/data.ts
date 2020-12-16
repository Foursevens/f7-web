import { client, gql } from '../api';
import {
  cmsContentBlockFragment,
  cmsConversionBlockFragment,
  cmsImageFragment,
  cmsLinkFragment,
} from '../cms';
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
    ${cmsContentBlockFragment}
    ${cmsConversionBlockFragment}
    ${cmsImageFragment}
    ${cmsLinkFragment}
    {
      homepage {
        hero {
          ...contentBlock
        }
        blocks {
          ...contentBlock
        }
        conversion {
          ...conversionBlock
        }
      }
    }
  `)) as { homepage: CmsHomepageModel | null };
  return { homepage: cmsHomepageToSite(homepage ?? undefined) };
}
