import { client, gql } from '../api';
import {
  cmsHero2Fragment,
  cmsImageFragment,
  cmsLocalizedContentFragment,
  cmsLocalizedTextFragment,
} from '../cms';
import {
  CmsJobsPageModel,
  cmsJobsPageToSite,
  SiteJobsPageModel,
} from './types';

export interface SiteJobsPageData {
  jobsPage: SiteJobsPageModel;
}

export async function getJobsPageData(): Promise<SiteJobsPageData> {
  const { jobsPage } = (await client.request(gql`
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
  `)) as { jobsPage: CmsJobsPageModel | null };
  return { jobsPage: cmsJobsPageToSite(jobsPage ?? undefined) };
}
