import { gql } from '../api';

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
