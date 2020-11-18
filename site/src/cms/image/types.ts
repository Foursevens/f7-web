import { apiBaseUrl, gql } from '../../api';

export const cmsImageFragment = gql`
  fragment image on UploadFile {
    alternativeText
    width
    height
    url
    caption
  }
`;

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
