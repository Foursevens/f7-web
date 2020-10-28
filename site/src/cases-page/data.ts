import { client } from '../api';
import { SiteCaseModel, CmsCaseModel, cmsCaseToSiteModel } from '../cms';
import {
  CmsCasesPageModel,
  cmsCasesPageToSite,
  SiteCasesPageModel,
} from './types';

export interface SiteCasesPageData {
  casesPage: SiteCasesPageModel;
  cases: SiteCaseModel[];
}

export async function getCasesPageData(): Promise<SiteCasesPageData> {
  const {
    data: { casesPage, cases },
  } = (await client({
    query: `query {
      casesPage {
        hero {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          title { en }
          content { en }
        }
      }
      cases(publicationState: LIVE) {
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
    data: { casesPage: CmsCasesPageModel | null; cases: CmsCaseModel[] };
  };
  return {
    casesPage: cmsCasesPageToSite(casesPage ?? undefined),
    cases: cases.map(cmsCaseToSiteModel),
  };
}
