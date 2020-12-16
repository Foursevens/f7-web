import { gql } from '../../api';
import { CmsImageModel, cmsImageToSiteModel, SiteImageModel } from '../image';
import { CmsLinkModel, SiteLinkModel } from '../link';
import { CmsLocalizedModel, cmsLocalizedToSiteModel } from '../localized';

const EVEN = 2;

export const cmsContentBlockFragment = gql`
  fragment contentBlock on ComponentMoleculesContentBlock {
    id
    image {
      ...image
    }
    title {
      en
    }
    tagline {
      en
    }
    content {
      en
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
  image?: SiteImageModel & { position?: 'start' | 'end' };
  title?: string;
  tagline?: string;
  content?: string;
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
    contentBlock.cta = { href: cta.href, text: cta.text.en };
  }

  return contentBlock;
}
