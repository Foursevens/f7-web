import { client, gql } from '../api';
import {
  CmsCaseCardModel,
  cmsCaseCardToSiteModel,
  SiteCaseCardModel,
} from '../cms';
import {
  CmsCasesPageModel,
  cmsCasesPageToSite,
  SiteCasesPageModel,
} from './types';

export interface SiteCasesPageData {
  casesPage: SiteCasesPageModel;
  cases: SiteCaseCardModel[];
}

export async function getCasesPageData(): Promise<SiteCasesPageData> {
  const { casesPage, cases } = (await client.request(gql`
    {
      casesPage {
        hero {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          title {
            en
          }
          content {
            en
          }
        }
      }
      cases(publicationState: LIVE) {
        id
        slug
        image {
          alternativeText
          caption
          width
          height
          url
        }
        client
        title {
          en
        }
        introduction {
          en
        }
      }
    }
  `)) as { casesPage: CmsCasesPageModel | null; cases: CmsCaseCardModel[] };
  return {
    casesPage: cmsCasesPageToSite(casesPage ?? undefined),
    cases: cases.map(cmsCaseCardToSiteModel),
  };
}
