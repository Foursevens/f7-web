import { CmsImageModel, SiteImageModel, cmsImageToSiteModel } from './image';
import { CmsLocalizedModel, cmsLocalizedToSiteModel } from './localized';

export interface CmsHero2Model {
  image?: CmsImageModel;
  title?: CmsLocalizedModel;
  content?: CmsLocalizedModel;
}

export interface SiteHero2Model {
  image?: SiteImageModel;
  content?: string;
  title?: string;
}

export function cmsHero2ModelToSite({
  content,
  image,
  title,
}: CmsHero2Model): SiteHero2Model {
  const adaptedHero2: SiteHero2Model = {};

  if (content != null) {
    adaptedHero2.content = cmsLocalizedToSiteModel(content);
  }

  if (image != null) {
    adaptedHero2.image = cmsImageToSiteModel(image);
  }

  if (title != null) {
    adaptedHero2.title = cmsLocalizedToSiteModel(title);
  }

  return adaptedHero2;
}
