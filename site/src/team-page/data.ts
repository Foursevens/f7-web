import { client, gql } from '../api';
import { cmsHero2Fragment, cmsImageFragment } from '../cms';
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
    ${cmsHero2Fragment}
    ${cmsImageFragment}
    {
      teamPage {
        hero {
          ...hero2
        }
      }
    }
  `)) as { teamPage: CmsTeamPageModel | null };
  return { teamPage: cmsTeamPageToSite(teamPage ?? undefined) };
}
