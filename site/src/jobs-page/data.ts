import { client } from '../api';
import {
  CmsJobsPageModel,
  cmsJobsPageToSite,
  SiteJobsPageModel,
} from './types';

export interface SiteJobsPageData {
  jobsPage: SiteJobsPageModel;
}

export async function getJobsPageData(): Promise<SiteJobsPageData> {
  const {
    data: { jobsPage },
  } = (await client({
    query: `query {
      jobsPage {
        hero {
          image {
            alternativeText
            caption
            width
            height
            url
          }
          title { en }
          content { en }
        }
      }
    }`,
  })) as { data: { jobsPage: CmsJobsPageModel | null } };
  return { jobsPage: cmsJobsPageToSite(jobsPage ?? undefined) };
}
