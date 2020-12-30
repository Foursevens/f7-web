import { client, gql } from '../api';
import {
  cmsConversionBlockFragment,
  CmsConversionBlockModel,
  cmsHero2Fragment,
  CmsHero2Model,
  cmsImageFragment,
  cmsLinkFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';

export interface CmsTeamPageModel {
  hero: CmsHero2Model;
  conversion: CmsConversionBlockModel | null;
}

export interface SiteTeamPageData {
  teamPage: CmsTeamPageModel;
}

export function getTeamPageData(): Promise<SiteTeamPageData> {
  return client.request<SiteTeamPageData>(gql`
    ${cmsConversionBlockFragment}
    ${cmsHero2Fragment}
    ${cmsImageFragment}
    ${cmsLinkFragment}
    ${cmsLocalizedContentFragment}
    ${cmsLocalizedTextFragment}
    {
      teamPage {
        hero {
          ...hero2
        }
        conversion {
          ...conversionBlock
        }
      }
    }
  `);
}
