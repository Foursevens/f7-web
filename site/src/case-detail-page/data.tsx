import { client } from '../api';
import { CmsCaseModel, cmsCaseToSiteModel, SiteCaseModel } from '../cms';

export interface SiteCaseDetailPageData {
  case: SiteCaseModel;
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
        slug
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
    data: { cases: CmsCaseModel[] };
  };
  return {
    case: cmsCaseToSiteModel(caseDetail),
  };
}
