import { client, gql } from '../api';
import {
  cmsConversionBlockFragment,
  CmsConversionBlockModel,
  cmsImageFragment,
  CmsImageModel,
  cmsLinkFragment,
  cmsLocalizedContentFragment,
  CmsLocalizedModel,
  cmsLocalizedTextFragment,
} from '../cms';

interface CmsCaseContentModel {
  image: CmsImageModel | null;
  content: CmsLocalizedModel;
}

export interface CmsCaseDetailModel {
  id: string;
  client?: string;
  clientWebsite?: string;
  introduction?: CmsLocalizedModel;
  image?: CmsImageModel;
  tagline?: CmsLocalizedModel;
  title?: CmsLocalizedModel;
  problem: CmsCaseContentModel;
  solution: CmsCaseContentModel;
  result: CmsCaseContentModel;
}

interface CmsCaseDetailPageModel {
  conversion: CmsConversionBlockModel | null;
}

export interface SiteCaseDetailPageData {
  caseDetail: CmsCaseDetailModel | null;
  caseDetailPage: CmsCaseDetailPageModel;
}

export async function getCaseDetailPageData(
  slug: string,
): Promise<SiteCaseDetailPageData> {
  const {
    cases: [caseDetail = null],
    caseDetailPage,
  } = await client.request<{
    cases: [] | [CmsCaseDetailModel];
    caseDetailPage: CmsCaseDetailPageModel;
  }>(
    gql`
      ${cmsConversionBlockFragment}
      ${cmsImageFragment}
      ${cmsLinkFragment}
      ${cmsLocalizedContentFragment}
      ${cmsLocalizedTextFragment}
      query getCaseDetail($slug: String!) {
        cases(publicationState: LIVE, where: { slug: $slug }) {
          id
          image {
            ...image
          }
          title {
            ...localizedText
          }
          tagline {
            ...localizedText
          }
          introduction {
            ...localizedContent
          }
          client
          clientWebsite
          problem {
            image {
              ...image
            }
            content {
              ...localizedContent
            }
          }
          solution {
            image {
              ...image
            }
            content {
              ...localizedContent
            }
          }
          result {
            image {
              ...image
            }
            content {
              ...localizedContent
            }
          }
        }
        caseDetailPage {
          conversion {
            ...conversionBlock
          }
        }
      }
    `,
    { slug },
  );
  return { caseDetail, caseDetailPage };
}
