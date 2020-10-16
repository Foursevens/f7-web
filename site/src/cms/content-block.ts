import { CmsImageModel, cmsImageToSiteModel, SiteImageModel } from './image';
import { CmsLinkModel, SiteLinkModel } from './link';
import { CmsLocalizedModel, CmsLocalizedToSiteModel } from './localized';

export interface CmsContentBlockModel {
  id: string;
  image?: CmsImageModel;
  title?: CmsLocalizedModel;
  tagline?: CmsLocalizedModel;
  content?: CmsLocalizedModel;
  cta?: CmsLinkModel;
}

export interface SiteContentBlockModel {
  id: string;
  image?: SiteImageModel;
  title?: string;
  tagline?: string;
  content?: string;
  cta?: SiteLinkModel;
}

export function cmsContentBlockToSite(
  { id, image, title, tagline, content, cta }: CmsContentBlockModel,
  index = 0,
): SiteContentBlockModel {
  const adaptedService: Partial<SiteContentBlockModel> = { id };

  if (image != null) {
    adaptedService.image = cmsImageToSiteModel(image, index);
  }

  if (title != null) {
    adaptedService.title = CmsLocalizedToSiteModel(title);
  }

  if (tagline != null) {
    adaptedService.tagline = CmsLocalizedToSiteModel(tagline);
  }

  if (content != null) {
    adaptedService.content = CmsLocalizedToSiteModel(content);
  }

  if (cta != null) {
    adaptedService.cta = { href: cta.href, text: cta.text.en };
  }

  return adaptedService as SiteContentBlockModel;
}
