import { client } from '../api';
import { CmsMenuModel, cmsMenuToSite, SiteMenuModel } from '../cms';

export interface LayoutData {
  mainMenu: SiteMenuModel;
}

export async function getLayoutData(): Promise<LayoutData> {
  const { data } = (await client({
    query: `query {
      mainMenus: menus(where: { reference: "main" }) {
        reference
        title { en }
        items {
          id
          highlight
          link {
            href
            text { en }
          }
        }
      }
    }`,
  })) as {
    data: {
      mainMenus: Array<CmsMenuModel | undefined>;
    };
  };
  const [mainMenu] = data.mainMenus;
  return {
    mainMenu:
      mainMenu == null
        ? { reference: 'main', items: [] }
        : cmsMenuToSite(mainMenu),
  };
}
