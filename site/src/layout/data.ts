import { client, gql } from '../api';
import {
  cmsLinkFragment,
  cmsMenuFragment,
  CmsMenuModel,
  cmsMenuToSite,
  SiteMenuModel,
} from '../cms';

export interface LayoutData {
  mainMenu: SiteMenuModel;
}

export async function getLayoutData(): Promise<LayoutData> {
  const {
    layout: { mainMenu },
  } = (await client.request(gql`
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
    mainMenu: cmsMenuToSite(mainMenu ?? {}),
  };
}
