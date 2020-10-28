import { apiBaseUrl } from '../api';

export interface CmsImageModel {
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  url: string;
}

export interface SiteImageModel extends CmsImageModel {}

export function cmsImageToSiteModel(image: CmsImageModel): SiteImageModel {
  const url = image.url.startsWith('http')
    ? image.url
    : `${apiBaseUrl}${image.url}`;
  return { ...image, url };
}
