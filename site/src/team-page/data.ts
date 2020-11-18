import { client, gql } from '../api';
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
    {
      teamPage {
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
    }
  `)) as { teamPage: CmsTeamPageModel | null };
  return { teamPage: cmsTeamPageToSite(teamPage ?? undefined) };
}
