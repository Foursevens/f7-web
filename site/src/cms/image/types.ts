import { apiBaseUrl, gql } from '../../api';

export const cmsImageFragment = gql`
  fragment image on UploadFile {
    alternativeText
    caption
    height
    url
    width
  }
`;

export interface CmsImageModel {
  alternativeText?: string;
  caption?: string;
  height: number;
  url: string;
  width: number;
}

export function cmsImageToSiteModel(image: CmsImageModel): CmsImageModel {
  const url = image.url.startsWith('http')
    ? image.url
    : `${apiBaseUrl}${image.url}`;
  return { ...image, url };
}
