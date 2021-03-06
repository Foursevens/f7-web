import { gql } from '../api';
import { CmsImageModel } from './image';
import { CmsLocalizedModel } from './localized';

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
  image: CmsImageModel | null;
  title: CmsLocalizedModel | null;
  content: CmsLocalizedModel | null;
}
