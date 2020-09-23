import { createApolloFetch } from 'apollo-fetch';

const client = createApolloFetch({ uri: 'http://localhost:1337/graphql' });

export interface MainLayoutMenuItem {
  id: string;
  href: string;
  title: string;
}

export interface MainLayoutMenu {
  menuItems: MainLayoutMenuItem[];
  reference: string;
}

export interface MainLayoutData {
  mainMenu: MainLayoutMenu;
}

export async function getMainLayoutData(): Promise<MainLayoutData> {
  const { data } = (await client({
    query: `query {
      menus {
        menu_items {
          id
          href
          title_en
        }
        reference
      }
    }`,
  })) as {
    data: {
      menus: Array<{
        menu_items: Array<{ id: string; href: string; title_en: string }>;
        reference: string;
      }>;
    };
  };
  const mainMenu = data.menus.find((menu) => menu.reference === 'main');
  if (mainMenu == null) {
    throw new Error('Menu with reference "main" not found.');
  }
  return {
    mainMenu: {
      menuItems: mainMenu.menu_items.map(
        ({ id, href, title_en }): MainLayoutMenuItem => ({
          id,
          href,
          title: title_en,
        }),
      ),
      reference: mainMenu.reference,
    },
  };
}
