import { client, gql } from '../api';
import {
  CmsCaseCardModel,
  cmsHero2Fragment,
  CmsHero2Model,
  cmsImageFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';

interface SiteCasesPageModel {
  hero: CmsHero2Model;
}

export interface SiteCasesPageData {
  cases: CmsCaseCardModel[];
  casesPage: SiteCasesPageModel;
}

export function getCasesPageData(): Promise<SiteCasesPageData> {
  return client.request<SiteCasesPageData>(gql`
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
  `);
}
