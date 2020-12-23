import { gql } from '../api';
import { CmsImageModel, cmsImageToSiteModel } from './image';
import {
  CmsLocalizedModel,
  cmsLocalizedToSiteModel,
  SiteLocalizedModel,
} from './localized';

export const cmsHero2Fragment = gql`
  fragment hero2 on ComponentMoleculesHero2 {
    image {
      ...image
    }
    title {
      ...localizedText
    }
    content {
      ...localizedContent
    }
  }
`;

export interface CmsHero2Model {
  image?: CmsImageModel;
  title?: CmsLocalizedModel;
  content?: CmsLocalizedModel;
}

export interface SiteHero2Model {
  image?: CmsImageModel;
  title?: SiteLocalizedModel;
  content?: SiteLocalizedModel;
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
