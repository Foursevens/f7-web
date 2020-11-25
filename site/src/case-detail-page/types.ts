import {
  CmsConversionBlockModel,
  cmsConversionBlockToSiteModel,
  SiteConversionBlockModel,
} from '../cms';

export interface CmsCaseDetailPageModel {
  conversion?: CmsConversionBlockModel;
}

export interface SiteCaseDetailPageModel {
  conversion: SiteConversionBlockModel;
}

export function cmsCaseDetailPageToSiteModel({
  conversion,
}: CmsCaseDetailPageModel): SiteCaseDetailPageModel {
  return {
    conversion: cmsConversionBlockToSiteModel(conversion ?? {}),
  };
}
