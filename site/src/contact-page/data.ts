import { client, gql } from '../api';
import {
  cmsContactFragment,
  CmsContactModel,
  cmsContactToSite,
  cmsLocalizedTextFragment,
  SiteContactModel,
} from '../cms';
import {
  CmsContactPageModel,
  cmsContactPageToSite,
  SiteContactPageModel,
} from './types';

export interface SiteContactPageData {
  contactPage: SiteContactPageModel;
  contact: SiteContactModel;
}

export async function getContactPageData(): Promise<SiteContactPageData> {
  const { contact, contactPage } = (await client.request(gql`
    ${cmsContactFragment}
    ${cmsLocalizedTextFragment}
    {
      contact {
        ...contact
      }
      contactPage {
        title {
          ...localizedText
        }
      }
    }
  `)) as {
    contact: CmsContactModel | null;
    contactPage: CmsContactPageModel | null;
  };
  return {
    contact: cmsContactToSite(contact ?? undefined),
    contactPage: cmsContactPageToSite(contactPage ?? undefined),
  };
}
