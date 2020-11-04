import { client } from '../api';
import {
  CmsCaseDetailModel,
  cmsCaseDetailToSiteModel,
  SiteCaseDetailModel,
} from '../cms';

export interface SiteCaseDetailPageData {
  case: SiteCaseDetailModel | null;
}

export async function getCaseDetailPageData(
  slug: string,
): Promise<SiteCaseDetailPageData> {
  const {
    data: {
      cases: [caseDetail],
    },
  } = (await client({
    query: `query {
      cases(where: { slug: "${slug}" }) {
        id
        image { alternativeText caption width height url }
        title { en }
        tagline { en }
        introduction { en }
        client
        clientWebsite
        problem {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          content { en }
        }
        solution {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          content { en }
        }
        result {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          content { en }
        }
      }
    }`,
  })) as {
    data: { cases: Array<CmsCaseDetailModel | undefined> };
  };
  return {
    case: caseDetail == null ? null : cmsCaseDetailToSiteModel(caseDetail),
  };
}
