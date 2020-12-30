import { gql } from '../api';
import { CmsLocalizedModel } from './localized';

export const cmsContactFragment = gql`
  fragment contact on Contact {
    email
    phone
    address {
      lines {
        ...localizedText
      }
    }
    socialMedia {
      id
      title
      link
    }
  }
`;

interface SocialMedia {
  id: string;
  link: string;
  title: string;
}

export interface CmsContactModel {
  address: Array<{ lines: CmsLocalizedModel[] }>;
  email: string | null;
  phone: string | null;
  socialMedia: SocialMedia[];
}
