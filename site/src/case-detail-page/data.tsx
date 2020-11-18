import { client, gql } from '../api';
import {
  CmsCaseDetailModel,
  cmsCaseDetailToSiteModel,
  cmsImageFragment,
  SiteCaseDetailModel,
} from '../cms';

export interface SiteCaseDetailPageData {
  case: SiteCaseDetailModel | null;
}

export async function getCaseDetailPageData(
  slug: string,
): Promise<SiteCaseDetailPageData> {
  const {
    cases: [caseDetail],
  } = (await client.request(
    gql`
      ${cmsImageFragment}
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
      }
    `,
    { slug },
  )) as { cases: Array<CmsCaseDetailModel | undefined> };
  return {
    case: caseDetail == null ? null : cmsCaseDetailToSiteModel(caseDetail),
  };
}
