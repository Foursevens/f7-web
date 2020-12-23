import { gql } from '../api';
import {
  CmsLocalizedModel,
  cmsLocalizedToSiteModel,
  SiteLocalizedModel,
} from './localized';

export const cmsLinkFragment = gql`
  fragment link on ComponentAtomsLink {
    href
    text {
      ...localizedText
    }
  }
`;

export interface CmsLinkModel {
  href: string;
  text: CmsLocalizedModel;
}

export interface SiteLinkModel {
  href: string;
  text: SiteLocalizedModel;
}

export function cmsLinkToSiteModel({
  href,
  text,
}: CmsLinkModel): SiteLinkModel {
  return { href, text: cmsLocalizedToSiteModel(text) };
}
