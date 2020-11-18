import { client, gql } from '../api';
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
    {
      jobsPage {
        hero {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          title {
            en
          }
          content {
            en
          }
        }
      }
    }
  `)) as { jobsPage: CmsJobsPageModel | null };
  return { jobsPage: cmsJobsPageToSite(jobsPage ?? undefined) };
}
