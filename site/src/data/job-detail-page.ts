import { client, gql } from '../api';
import {
  cmsConversionBlockFragment,
  CmsConversionBlockModel,
  cmsLinkFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';

export interface CmsJobDetailPageModel {
  conversion: CmsConversionBlockModel | null;
}

export interface SiteJobDetailPageData {
  jobDetailPage: CmsJobDetailPageModel;
}

export function getJobDetailPageData(
  slug: string,
): Promise<SiteJobDetailPageData> {
  return client.request<SiteJobDetailPageData>(
    gql`
      ${cmsConversionBlockFragment}
      ${cmsLinkFragment}
      ${cmsLocalizedContentFragment}
      ${cmsLocalizedTextFragment}
      query getJobDetail {
        jobDetailPage {
          conversion {
            ...conversionBlock
          }
        }
      }
    `,
    { slug },
  );
}
