import { client, gql } from '../api';
import {
  cmsContactFragment,
  CmsContactModel,
  cmsLinkFragment,
  cmsLocalizedTextFragment,
  cmsMenuFragment,
  CmsMenuModel,
} from '../cms';

interface CmsLayoutModel {
  mainMenu: CmsMenuModel;
  footerMenus: CmsMenuModel[];
}

export interface LayoutData {
  contact: CmsContactModel;
  layout: CmsLayoutModel;
}

export function getLayoutData(): Promise<LayoutData> {
  return client.request<LayoutData>(gql`
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
  `);
}
