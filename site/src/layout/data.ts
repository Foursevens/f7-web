import { client, gql } from '../api';
import {
  cmsContactFragment,
  CmsContactModel,
  cmsContactToSite,
  cmsLinkFragment,
  cmsLocalizedTextFragment,
  cmsMenuFragment,
  CmsMenuModel,
  cmsMenuToSite,
  SiteContactModel,
  SiteMenuModel,
} from '../cms';

export interface LayoutData {
  contact: SiteContactModel;
  layout: {
    mainMenu: SiteMenuModel;
    footerMenus: SiteMenuModel[];
  };
}

export async function getLayoutData(): Promise<LayoutData> {
  const { contact, layout } = (await client.request(gql`
    ${cmsContactFragment}
    ${cmsLinkFragment}
    ${cmsLocalizedTextFragment}
    ${cmsMenuFragment}
    {
      contact {
        ...contact
      }
      layout {
        mainMenu {
          ...menu
        }
        footerMenus {
          ...menu
        }
      }
    }
  `)) as {
    contact?: CmsContactModel;
    layout?: { mainMenu?: CmsMenuModel; footerMenus?: CmsMenuModel[] };
  };
  return {
    contact: cmsContactToSite(contact),
    layout: {
      mainMenu: cmsMenuToSite(layout?.mainMenu ?? {}),
      footerMenus: (layout?.footerMenus ?? []).map(cmsMenuToSite),
    },
  };
}
