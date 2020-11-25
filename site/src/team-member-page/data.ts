import { client, gql } from '../api';
import { cmsConversionBlockFragment, cmsLinkFragment } from '../cms';
import {
  SiteTeamMemberPageModel,
  CmsTeamMemberPageModel,
  cmsTeamMemberPageToSiteModel,
} from './types';

export interface SiteTeamMemberPageData {
  teamMemberPage: SiteTeamMemberPageModel;
}

export async function getTeamMemberPageData(
  slug: string,
): Promise<SiteTeamMemberPageData> {
  const { teamMemberPage } = (await client.request(
    gql`
      ${cmsConversionBlockFragment}
      ${cmsLinkFragment}
      query getTeamMember {
        teamMemberPage {
          conversion {
            ...conversionBlock
          }
        }
      }
    `,
    { slug },
  )) as {
    teamMemberPage?: CmsTeamMemberPageModel;
  };
  return {
    teamMemberPage: cmsTeamMemberPageToSiteModel(teamMemberPage ?? {}),
  };
}
