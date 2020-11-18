import { client, gql } from '../api';
import {
  cmsLinkFragment,
  CmsMenuModel,
  cmsMenuToSite,
  SiteMenuModel,
} from '../cms';

export interface LayoutData {
  mainMenu: SiteMenuModel;
}

export async function getLayoutData(): Promise<LayoutData> {
  const {
    mainMenus: [mainMenu],
  } = (await client.request(gql`
    ${cmsLinkFragment}
    {
      mainMenus: menus(where: { reference: "main" }) {
        reference
        title {
          en
        }
        items {
          id
          highlight
          link {
            ...link
          }
        }
      }
    }
  `)) as { mainMenus: Array<CmsMenuModel | undefined> };
  return {
    mainMenu:
      mainMenu == null
        ? { reference: 'main', items: [] }
        : cmsMenuToSite(mainMenu),
  };
}
