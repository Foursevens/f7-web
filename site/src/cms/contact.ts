import { gql } from '../api';
import { CmsLocalizedModel, cmsLocalizedToSiteModel } from './localized';

export const cmsContactFragment = gql`
  fragment contact on Contact {
    email
    phone
    address {
      lines {
        en
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
  address?: Array<{ lines: CmsLocalizedModel[] }>;
  email?: string;
  phone?: string;
  socialMedia?: SocialMedia[];
}

export interface SiteContactModel {
  address: string[][];
  email?: string;
  phone?: string;
  socialMedia: SocialMedia[];
}

export function cmsContactToSite({
  address,
  email,
  phone,
  socialMedia,
}: CmsContactModel = {}): SiteContactModel {
  const contact: SiteContactModel = {
    address: (address ?? []).map(({ lines }) =>
      lines.map(cmsLocalizedToSiteModel),
    ),
    socialMedia: socialMedia ?? [],
  };

  if (email != null) {
    contact.email = email;
  }

  if (phone != null) {
    contact.phone = phone;
  }

  return contact;
}
