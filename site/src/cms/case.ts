import { CmsImageModel } from './image';
import { CmsLocalizedModel } from './localized';

export interface CmsCaseCardModel {
  id: string;
  slug: string;
  client: string;
  introduction: CmsLocalizedModel | null;
  image: CmsImageModel | null;
  title: CmsLocalizedModel | null;
}
