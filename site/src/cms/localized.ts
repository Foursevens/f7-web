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

// NOTE: The CMS model actually has all fields required. But since we enabled
// this feature there was already content with missing translation we have to
// take into account.
export interface CmsLocalizedModel {
  en: string;
  fr?: string;
  nl?: string;
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
    fr: fr ?? en,
    nl: nl ?? en,
  };
}

export function useLocale(): Locale {
  const { locale } = useRouter();
  return locale as Locale;
}
