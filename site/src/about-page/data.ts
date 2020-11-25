import { client, gql } from '../api';
import {
  cmsConversionBlockFragment,
  cmsHero2Fragment,
  cmsImageFragment,
  cmsLinkFragment,
} from '../cms';
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
    ${cmsConversionBlockFragment}
    ${cmsHero2Fragment}
    ${cmsImageFragment}
    ${cmsLinkFragment}
    {
      aboutPage {
        hero {
          ...hero2
        }
        conversion {
          ...conversionBlock
        }
      }
    }
  `)) as { aboutPage: CmsAboutPageModel | null };
  return { aboutPage: cmsAboutPageToSite(aboutPage ?? undefined) };
}
