import { useRouter } from 'next/router';

import { gql } from '../api';

export const cmsLocalizedContentFragment = gql`
  fragment localizedContent on ComponentAtomsLocalizedContent {
    en
    fr
    nl
  }
`;

export const cmsLocalizedTextFragment = gql`
  fragment localizedText on ComponentAtomsLocalizedText {
    en
    fr
    nl
  }
`;

export interface CmsLocalizedModel {
  en: string;
  fr: string;
  nl: string;
}

export interface SiteLocalizedModel {
  en: string;
  fr: string;
  nl: string;
}

export type Locale = 'en' | 'fr' | 'nl';

export function cmsLocalizedToSiteModel({
  en,
  fr,
  nl,
}: CmsLocalizedModel): SiteLocalizedModel {
  return {
    en,
    fr,
    nl,
  };
}

export function useLocale(): Locale {
  const { locale } = useRouter();
  return locale as Locale;
}
