import { CmsImageModel, cmsImageToSiteModel, SiteImageModel } from './image';
import { CmsLocalizedModel, cmsLocalizedToSiteModel } from './localized';

export interface CmsCaseModel {
  id: string;
  slug: string;
  client?: string;
  clientWebsite?: string;
  introduction?: CmsLocalizedModel;
  image?: CmsImageModel;
  tagline?: CmsLocalizedModel;
  title?: CmsLocalizedModel;
  problem: CmsLocalizedModel;
  solution: CmsLocalizedModel;
  result: CmsLocalizedModel;
}

export interface SiteCaseModel {
  id: string;
  slug: string;
  client?: string;
  clientWebsite?: string;
  introduction?: string;
  image?: SiteImageModel;
  tagline?: string;
  title?: string;
  problem: string;
  solution: string;
  result: string;
}

export function cmsCaseToSiteModel({
  id,
  slug,
  image,
  title,
  tagline,
  introduction,
  client,
  clientWebsite,
  problem,
  solution,
  result,
}: CmsCaseModel): SiteCaseModel {
  const caseItem: SiteCaseModel = {
    id,
    slug,
    problem: cmsLocalizedToSiteModel(problem),
    solution: cmsLocalizedToSiteModel(solution),
    result: cmsLocalizedToSiteModel(result),
  };

  if (image != null) {
    caseItem.image = cmsImageToSiteModel(image);
  }

  if (title != null) {
    caseItem.title = cmsLocalizedToSiteModel(title);
  }

  if (tagline != null) {
    caseItem.tagline = cmsLocalizedToSiteModel(tagline);
  }

  if (introduction != null) {
    caseItem.introduction = cmsLocalizedToSiteModel(introduction);
  }

  if (client != null) {
    caseItem.client = client;
  }

  if (clientWebsite != null) {
    caseItem.clientWebsite = clientWebsite;
  }

  return caseItem;
}
