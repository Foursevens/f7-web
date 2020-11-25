import {
  CmsConversionBlockModel,
  cmsConversionBlockToSiteModel,
  SiteConversionBlockModel,
} from '../cms';

export interface CmsJobDetailPageModel {
  conversion?: CmsConversionBlockModel;
}

export interface SiteJobDetailPageModel {
  conversion: SiteConversionBlockModel;
}

export function cmsJobDetailPageToSiteModel({
  conversion,
}: CmsJobDetailPageModel): SiteJobDetailPageModel {
  return {
    conversion: cmsConversionBlockToSiteModel(conversion ?? {}),
  };
}
