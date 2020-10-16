import { CmsLinkModel, SiteLinkModel, cmsLinkToSiteModel } from './link';
import { CmsLocalizedModel, CmsLocalizedToSiteModel } from './localized';

export interface CmsMenuModel {
  reference: string;
  title?: CmsLocalizedModel;
  items: CmsMenuItemModel[];
}

export interface SiteMenuModel {
  reference: string;
  title?: string;
  items: SiteMenuItemModel[];
}

export function cmsMenuToSite({
  reference,
  title,
  items,
}: CmsMenuModel): SiteMenuModel {
  const menu: SiteMenuModel = {
    reference,
    items: items.map(cmsMenuItemToSite),
  };
  if (title != null) {
    menu.title = CmsLocalizedToSiteModel(title);
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
