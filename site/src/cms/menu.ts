import { gql } from '../api';
import { CmsLinkModel, cmsLinkToSiteModel, SiteLinkModel } from './link';
import {
  CmsLocalizedModel,
  cmsLocalizedToSiteModel,
  SiteLocalizedModel,
} from './localized';

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
  title?: CmsLocalizedModel;
  items?: CmsMenuItemModel[];
}

export interface SiteMenuModel {
  title?: SiteLocalizedModel;
  items: SiteMenuItemModel[];
}

export function cmsMenuToSite({
  title,
  items = [],
}: CmsMenuModel): SiteMenuModel {
  const menu: SiteMenuModel = {
    items: items.map(cmsMenuItemToSite),
  };

  if (title != null) {
    menu.title = cmsLocalizedToSiteModel(title);
  }

  return menu;
}

export interface CmsMenuItemModel {
  id: string;
  highlight: boolean;
  link: CmsLinkModel;
}

export interface SiteMenuItemModel {
  id: string;
  highlight: boolean;
  link: SiteLinkModel;
}

export function cmsMenuItemToSite({
  id,
  highlight,
  link,
}: CmsMenuItemModel): SiteMenuItemModel {
  return {
    id,
    highlight,
    link: cmsLinkToSiteModel(link),
  };
}
