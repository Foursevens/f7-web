import { CmsLocalizedModel } from './localized';

export interface CmsLinkModel {
  href: string;
  text: CmsLocalizedModel;
}

export interface SiteLinkModel {
  href: string;
  text: string;
}

export function cmsLinkToSiteModel({
  href,
  text,
}: CmsLinkModel): SiteLinkModel {
  return { href, text: text.en };
}
