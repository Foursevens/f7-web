import { client, gql } from '../api';
import {
  cmsLinkFragment,
  cmsMenuFragment,
  CmsMenuModel,
  cmsMenuToSite,
  SiteMenuModel,
} from '../cms';

export interface LayoutData {
  layout: {
    mainMenu: SiteMenuModel;
  };
}

export async function getLayoutData(): Promise<LayoutData> {
  const { layout } = (await client.request(gql`
    ${cmsLinkFragment}
    ${cmsMenuFragment}
    {
      layout {
        mainMenu {
          ...menu
        }
      }
    }
  `)) as { layout: { mainMenu?: CmsMenuModel } };
  return {
    layout: {
      mainMenu: cmsMenuToSite(layout.mainMenu ?? {}),
    },
  };
}
