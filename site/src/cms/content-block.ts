import { gql } from '../api';
import { CmsImageModel } from './image';
import { CmsLinkModel } from './link';
import { CmsLocalizedModel } from './localized';

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
  image: CmsImageModel | null;
  title: CmsLocalizedModel | null;
  tagline: CmsLocalizedModel | null;
  content: CmsLocalizedModel | null;
  cta: CmsLinkModel | null;
}
