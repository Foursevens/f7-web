import { client } from '../api';
import {
  CmsCasesPageModel,
  cmsCasesPageToSite,
  SiteCasesPageModel,
} from './types';

export interface SiteCasesPageData {
  casesPage: SiteCasesPageModel;
}

export async function getCasesPageData(): Promise<SiteCasesPageData> {
  const {
    data: { casesPage },
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
    }`,
  })) as { data: { casesPage: CmsCasesPageModel | null } };
  return { casesPage: cmsCasesPageToSite(casesPage ?? undefined) };
}
