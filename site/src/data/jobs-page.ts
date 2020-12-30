import { client, gql } from '../api';
import {
  cmsHero2Fragment,
  CmsHero2Model,
  cmsImageFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';

export interface CmsJobsPageModel {
  hero: CmsHero2Model;
}

export interface SiteJobsPageData {
  jobsPage: CmsJobsPageModel;
}

export function getJobsPageData(): Promise<SiteJobsPageData> {
  return client.request<SiteJobsPageData>(gql`
    ${cmsHero2Fragment}
    ${cmsImageFragment}
    ${cmsLocalizedContentFragment}
    ${cmsLocalizedTextFragment}
    {
      jobsPage {
        hero {
          ...hero2
        }
      }
    }
  `);
}
