import { client, gql } from '../api';
import {
  CmsCaseCardModel,
  cmsCaseCardToSiteModel,
  cmsHero2Fragment,
  cmsImageFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
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
    ${cmsHero2Fragment}
    ${cmsImageFragment}
    ${cmsLocalizedContentFragment}
    ${cmsLocalizedTextFragment}
    {
      casesPage {
        hero {
          ...hero2
        }
      }
      cases(publicationState: LIVE) {
        id
        slug
        image {
          ...image
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
