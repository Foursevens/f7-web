import { gql } from '../api';
import { CmsLinkModel } from './link';
import { CmsLocalizedModel } from './localized';

export const cmsConversionBlockFragment = gql`
  fragment conversionBlock on ComponentMoleculesConversionBlock {
    title {
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

export interface CmsConversionBlockModel {
  title: CmsLocalizedModel | null;
  content: CmsLocalizedModel | null;
  cta: CmsLinkModel | null;
}
