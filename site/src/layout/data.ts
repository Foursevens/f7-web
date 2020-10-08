import { client } from '../api';

export interface MainLayoutMenuItem {
  id: string;
  highlight: boolean;
  href: string;
  title: string;
}

export interface MainLayoutMenu {
  menuItems: MainLayoutMenuItem[];
  reference: string;
}

export interface MainLayoutData {
  headerMenu: MainLayoutMenu;
}

export async function getMainLayoutData(): Promise<MainLayoutData> {
  const { data } = (await client({
    query: `query {
      menus {
        menu_items {
          id
          highlight
          href
          title_en
        }
        reference
      }
    }`,
  })) as {
    data: {
      menus: Array<{
        menu_items: Array<{
          id: string;
          highlight: boolean;
          href: string;
          title_en: string;
        }>;
        reference: string;
      }>;
    };
  };
  const mainMenu = data.menus.find((menu) => menu.reference === 'main');
  if (mainMenu == null) {
    throw new Error('Menu with reference "main" not found.');
  }
  return {
    headerMenu: {
      menuItems: mainMenu.menu_items.map(
        ({ title_en, ...rest }): MainLayoutMenuItem => ({
          ...rest,
          title: title_en,
        }),
      ),
      reference: mainMenu.reference,
    },
  };
}
