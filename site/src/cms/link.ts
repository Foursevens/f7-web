import { gql } from '../api';
import { CmsLocalizedModel } from './localized';

export interface CmsLinkModel {
  href: string;
  text: CmsLocalizedModel;
}

export const cmsLinkFragment = gql`
  fragment link on ComponentAtomsLink {
    href
    text {
      ...localizedText
    }
  }
`;
