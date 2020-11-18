import { gql } from '../api';
import { CmsLocalizedModel } from './localized';

export const cmsLinkFragment = gql`
  fragment link on ComponentAtomsLink {
    href
    text {
      en
    }
  }
`;

export interface CmsLinkModel {
  href: string;
  text: CmsLocalizedModel;
}

export interface SiteLinkModel {
  href: string;
  text: string;
}

export function cmsLinkToSiteModel({
  href,
  text,
}: CmsLinkModel): SiteLinkModel {
  return { href, text: text.en };
}
