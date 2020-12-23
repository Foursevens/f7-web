import { client, gql } from '../api';
import {
  CmsCaseDetailModel,
  cmsCaseDetailToSiteModel,
  cmsConversionBlockFragment,
  cmsImageFragment,
  cmsLinkFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
  SiteCaseDetailModel,
} from '../cms';
import {
  CmsCaseDetailPageModel,
  cmsCaseDetailPageToSiteModel,
  SiteCaseDetailPageModel,
} from './types';

export interface SiteCaseDetailPageData {
  case: SiteCaseDetailModel | null;
  caseDetailPage: SiteCaseDetailPageModel;
}

export async function getCaseDetailPageData(
  slug: string,
): Promise<SiteCaseDetailPageData> {
  const {
    cases: [caseDetail],
    caseDetailPage,
  } = (await client.request(
    gql`
      ${cmsConversionBlockFragment}
      ${cmsImageFragment}
      ${cmsLinkFragment}
      ${cmsLocalizedContentFragment}
      ${cmsLocalizedTextFragment}
      query getCaseDetail($slug: String!) {
        cases(publicationState: LIVE, where: { slug: $slug }) {
          id
          image {
            ...image
          }
          title {
            ...localizedText
          }
          tagline {
            ...localizedText
          }
          introduction {
            ...localizedContent
          }
          client
          clientWebsite
          problem {
            image {
              ...image
            }
            content {
              ...localizedContent
            }
          }
          solution {
            image {
              ...image
            }
            content {
              ...localizedContent
            }
          }
          result {
            image {
              ...image
            }
            content {
              ...localizedContent
            }
          }
        }
        caseDetailPage {
          conversion {
            ...conversionBlock
          }
        }
      }
    `,
    { slug },
  )) as {
    cases: Array<CmsCaseDetailModel | undefined>;
    caseDetailPage?: CmsCaseDetailPageModel;
  };
  return {
    case: caseDetail == null ? null : cmsCaseDetailToSiteModel(caseDetail),
    caseDetailPage: cmsCaseDetailPageToSiteModel(caseDetailPage ?? {}),
  };
}
