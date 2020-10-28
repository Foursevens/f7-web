import { CmsImageModel, cmsImageToSiteModel, SiteImageModel } from './image';
import { CmsLinkModel, SiteLinkModel } from './link';
import { CmsLocalizedModel, cmsLocalizedToSiteModel } from './localized';

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
  const contentBlock: SiteContentBlockModel = { id };

  if (image != null) {
    contentBlock.image = cmsImageToSiteModel(image, index);
  }

  if (title != null) {
    contentBlock.title = cmsLocalizedToSiteModel(title);
  }

  if (tagline != null) {
    contentBlock.tagline = cmsLocalizedToSiteModel(tagline);
  }

  if (content != null) {
    contentBlock.content = cmsLocalizedToSiteModel(content);
  }

  if (cta != null) {
    contentBlock.cta = { href: cta.href, text: cta.text.en };
  }

  return contentBlock;
}
