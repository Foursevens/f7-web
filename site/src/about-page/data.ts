import { client, gql } from '../api';
import { cmsHero2Fragment, cmsImageFragment } from '../cms';
import {
  CmsAboutPageModel,
  cmsAboutPageToSite,
  SiteAboutPageModel,
} from './types';

export interface SiteAboutPageData {
  aboutPage: SiteAboutPageModel;
}

export async function getAboutPageData(): Promise<SiteAboutPageData> {
  const { aboutPage } = (await client.request(gql`
    ${cmsHero2Fragment}
    ${cmsImageFragment}
    {
      aboutPage {
        hero {
          ...hero2
        }
      }
    }
  `)) as { aboutPage: CmsAboutPageModel | null };
  return { aboutPage: cmsAboutPageToSite(aboutPage ?? undefined) };
}
