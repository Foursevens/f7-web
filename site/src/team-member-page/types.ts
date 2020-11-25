import {
  CmsConversionBlockModel,
  cmsConversionBlockToSiteModel,
  SiteConversionBlockModel,
} from '../cms';

export interface CmsTeamMemberPageModel {
  conversion?: CmsConversionBlockModel;
}

export interface SiteTeamMemberPageModel {
  conversion: SiteConversionBlockModel;
}

export function cmsTeamMemberPageToSiteModel({
  conversion,
}: CmsTeamMemberPageModel): SiteTeamMemberPageModel {
  return {
    conversion: cmsConversionBlockToSiteModel(conversion ?? {}),
  };
}
