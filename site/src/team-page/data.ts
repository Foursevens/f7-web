import { client } from '../api';
import {
  CmsTeamPageModel,
  cmsTeamPageToSite,
  SiteTeamPageModel,
} from './types';

export interface SiteTeamPageData {
  teamPage: SiteTeamPageModel;
}

export async function getTeamPageData(): Promise<SiteTeamPageData> {
  const {
    data: { teamPage },
  } = (await client({
    query: `query {
      teamPage {
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
  })) as { data: { teamPage: CmsTeamPageModel | null } };
  return { teamPage: cmsTeamPageToSite(teamPage ?? undefined) };
}
