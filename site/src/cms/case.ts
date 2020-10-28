import { CmsImageModel, cmsImageToSiteModel, SiteImageModel } from './image';
import { CmsLocalizedModel, cmsLocalizedToSiteModel } from './localized';

interface CmsCaseContentModel {
  image: CmsImageModel;
  content: CmsLocalizedModel;
}

interface SiteCaseContentModel {
  image: SiteImageModel;
  content: string;
}

function cmsCaseContentToSiteModel({
  image,
  content,
}: CmsCaseContentModel): SiteCaseContentModel {
  return {
    image: cmsImageToSiteModel(image),
    content: cmsLocalizedToSiteModel(content),
  };
}

export interface CmsCaseModel {
  id: string;
  slug: string;
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

export interface SiteCaseModel {
  id: string;
  slug: string;
  client?: string;
  clientWebsite?: string;
  introduction?: string;
  image?: SiteImageModel;
  tagline?: string;
  title?: string;
  problem: SiteCaseContentModel;
  solution: SiteCaseContentModel;
  result: SiteCaseContentModel;
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
    problem: cmsCaseContentToSiteModel(problem),
    solution: cmsCaseContentToSiteModel(solution),
    result: cmsCaseContentToSiteModel(result),
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
