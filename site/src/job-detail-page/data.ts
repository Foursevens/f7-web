import { client, gql } from '../api';
import { cmsConversionBlockFragment, cmsLinkFragment } from '../cms';
import {
  SiteJobDetailPageModel,
  CmsJobDetailPageModel,
  cmsJobDetailPageToSiteModel,
} from './types';

export interface SiteJobDetailPageData {
  jobDetailPage: SiteJobDetailPageModel;
}

export async function getJobDetailPageData(
  slug: string,
): Promise<SiteJobDetailPageData> {
  const { jobDetailPage } = (await client.request(
    gql`
      ${cmsConversionBlockFragment}
      ${cmsLinkFragment}
      query getJobDetail {
        jobDetailPage {
          conversion {
            ...conversionBlock
          }
        }
      }
    `,
    { slug },
  )) as {
    jobDetailPage?: CmsJobDetailPageModel;
  };
  return {
    jobDetailPage: cmsJobDetailPageToSiteModel(jobDetailPage ?? {}),
  };
}
