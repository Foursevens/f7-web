import { apiBaseUrl } from '../api';

const EVEN = 2;

export interface CmsImageModel {
  alternativeText?: string;
  caption?: string;
  height: number;
  url: string;
  width: number;
}

export interface SiteImageModel extends CmsImageModel {
  position?: 'start' | 'end';
}

export function cmsImageToSiteModel(
  image: CmsImageModel,
  index = 0,
): SiteImageModel {
  const position = index % EVEN === 0 ? 'start' : 'end';
  const url = image.url.startsWith('http')
    ? image.url
    : `${apiBaseUrl}${image.url}`;
  return { ...image, position, url };
}
