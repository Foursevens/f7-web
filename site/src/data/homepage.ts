import { client, gql } from '../api';
import {
  cmsImageFragment,
  cmsLinkFragment,
  cmsContentBlockFragment,
  CmsContentBlockModel,
  cmsConversionBlockFragment,
  CmsConversionBlockModel,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';

export interface CmsHomepageModel {
  hero: CmsContentBlockModel;
  blocks: CmsContentBlockModel[];
  conversion: CmsConversionBlockModel | null;
}

export interface SiteHomepageData {
  homepage: CmsHomepageModel;
}

export function getHomepageData(): Promise<SiteHomepageData> {
  return client.request<SiteHomepageData>(gql`
    ${cmsContentBlockFragment}
    ${cmsConversionBlockFragment}
    ${cmsImageFragment}
    ${cmsLinkFragment}
    ${cmsLocalizedContentFragment}
    ${cmsLocalizedTextFragment}
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
  `);
}
