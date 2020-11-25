import { gql } from '../api';
import { CmsLinkModel, cmsLinkToSiteModel, SiteLinkModel } from './link';
import { CmsLocalizedModel, cmsLocalizedToSiteModel } from './localized';

export const cmsConversionBlockFragment = gql`
  fragment conversionBlock on ComponentMoleculesConversionBlock {
    __typename
    title {
      en
    }
    content {
      en
    }
    cta {
      ...link
    }
  }
`;

export interface CmsConversionBlockModel {
  title?: CmsLocalizedModel;
  content?: CmsLocalizedModel;
  cta?: CmsLinkModel;
}

export interface SiteConversionBlockModel {
  title?: string;
  content?: string;
  cta?: SiteLinkModel;
}

export function cmsConversionBlockToSiteModel({
  title,
  content,
  cta,
}: CmsConversionBlockModel): SiteConversionBlockModel {
  const conversionBlock: SiteConversionBlockModel = {};

  if (title != null) {
    conversionBlock.title = cmsLocalizedToSiteModel(title);
  }

  if (content != null) {
    conversionBlock.content = cmsLocalizedToSiteModel(content);
  }

  if (cta != null) {
    conversionBlock.cta = cmsLinkToSiteModel(cta);
  }

  return conversionBlock;
}
