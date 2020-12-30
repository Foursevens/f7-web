import { client, gql } from '../api';
import {
  cmsConversionBlockFragment,
  CmsConversionBlockModel,
  cmsLinkFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';

export interface CmsTeamMemberPageModel {
  conversion: CmsConversionBlockModel | null;
}

export interface SiteTeamMemberPageData {
  teamMemberPage: CmsTeamMemberPageModel;
}

export function getTeamMemberPageData(
  slug: string,
): Promise<SiteTeamMemberPageData> {
  return client.request<SiteTeamMemberPageData>(
    gql`
      ${cmsConversionBlockFragment}
      ${cmsLinkFragment}
      ${cmsLocalizedContentFragment}
      ${cmsLocalizedTextFragment}
      query getTeamMember {
        teamMemberPage {
          conversion {
            ...conversionBlock
          }
        }
      }
    `,
    { slug },
  );
}
