import { client, gql } from '../api';
import {
  cmsConversionBlockFragment,
  cmsHero2Fragment,
  cmsImageFragment,
  cmsLinkFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';
import {
  CmsTeamPageModel,
  cmsTeamPageToSite,
  SiteTeamPageModel,
} from './types';

export interface SiteTeamPageData {
  teamPage: SiteTeamPageModel;
}

export async function getTeamPageData(): Promise<SiteTeamPageData> {
  const { teamPage } = (await client.request(gql`
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
  `)) as { teamPage: CmsTeamPageModel | null };
  return { teamPage: cmsTeamPageToSite(teamPage ?? undefined) };
}
