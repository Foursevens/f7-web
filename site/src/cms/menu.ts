import { gql } from '../api';
import { CmsLinkModel } from './link';
import { CmsLocalizedModel } from './localized';

export const cmsMenuFragment = gql`
  fragment menu on ComponentOrganismsMenu {
    title {
      ...localizedText
    }
    items {
      id
      highlight
      link {
        ...link
      }
    }
  }
`;

export interface CmsMenuModel {
  title: CmsLocalizedModel | null;
  items: CmsMenuItemModel[] | null;
}

export interface CmsMenuItemModel {
  id: string;
  highlight: boolean;
  link: CmsLinkModel;
}
