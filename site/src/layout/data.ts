import { client, gql } from '../api';
import { CmsMenuModel, cmsMenuToSite, SiteMenuModel } from '../cms';

export interface LayoutData {
  mainMenu: SiteMenuModel;
}

export async function getLayoutData(): Promise<LayoutData> {
  const {
    mainMenus: [mainMenu],
  } = (await client.request(gql`
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
            href
            text {
              en
            }
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
