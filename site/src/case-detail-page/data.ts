import { client, gql } from '../api';
import {
  CmsCaseDetailModel,
  cmsCaseDetailToSiteModel,
  cmsConversionBlockFragment,
  cmsImageFragment,
  cmsLinkFragment,
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
      query getCaseDetail($slug: String!) {
        cases(publicationState: LIVE, where: { slug: $slug }) {
          id
          image {
            ...image
          }
          title {
            en
          }
          tagline {
            en
          }
          introduction {
            en
          }
          client
          clientWebsite
          problem {
            image {
              ...image
            }
            content {
              en
            }
          }
          solution {
            image {
              ...image
            }
            content {
              en
            }
          }
          result {
            image {
              ...image
            }
            content {
              en
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
