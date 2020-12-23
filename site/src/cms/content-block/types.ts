import { gql } from '../../api';
import { CmsImageModel, cmsImageToSiteModel } from '../image';
import { CmsLinkModel, cmsLinkToSiteModel, SiteLinkModel } from '../link';
import {
  CmsLocalizedModel,
  cmsLocalizedToSiteModel,
  SiteLocalizedModel,
} from '../localized';

const EVEN = 2;

export const cmsContentBlockFragment = gql`
  fragment contentBlock on ComponentMoleculesContentBlock {
    id
    image {
      ...image
    }
    title {
      ...localizedText
    }
    tagline {
      ...localizedText
    }
    content {
      ...localizedContent
    }
    cta {
      ...link
    }
  }
`;

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
  image?: CmsImageModel & { position?: 'start' | 'end' };
  title?: SiteLocalizedModel;
  tagline?: SiteLocalizedModel;
  content?: SiteLocalizedModel;
  cta?: SiteLinkModel;
}

export function cmsContentBlockToSiteModel(
  { id, image, title, tagline, content, cta }: CmsContentBlockModel,
  index = 0,
): SiteContentBlockModel {
  const contentBlock: SiteContentBlockModel = { id };

  if (image != null) {
    const position = index % EVEN === 0 ? 'start' : 'end';
    contentBlock.image = {
      ...cmsImageToSiteModel(image),
      position,
    };
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
    contentBlock.cta = cmsLinkToSiteModel(cta);
  }

  return contentBlock;
}
