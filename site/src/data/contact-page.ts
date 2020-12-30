import { client, gql } from '../api';
import {
  cmsContactFragment,
  CmsContactModel,
  CmsLocalizedModel,
  cmsLocalizedTextFragment,
} from '../cms';

export interface CmsContactPageModel {
  title: CmsLocalizedModel[];
}

export interface SiteContactPageData {
  contact: CmsContactModel;
  contactPage: CmsContactPageModel;
}

export function getContactPageData(): Promise<SiteContactPageData> {
  return client.request<SiteContactPageData>(gql`
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
  `);
}
