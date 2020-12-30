import { ConversionBlock, Title, RichText, ButtonLink } from '@f7-web/design';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import { CmsConversionBlockModel, useLocale } from '../cms';

interface Props {
  conversion: CmsConversionBlockModel;
}

export function SiteConversionBlock({ conversion }: Props): ReactElement {
  const locale = useLocale();

  return (
    <ConversionBlock>
      {conversion.title == null ? null : (
        <Title size="md">{conversion.title[locale]}</Title>
      )}
      {conversion.content == null ? null : (
        <RichText size="lg">{conversion.content[locale]}</RichText>
      )}
      {conversion.cta == null ? null : (
        <Link href={conversion.cta.href} passHref>
          <ButtonLink design="secondary">
            {conversion.cta.text[locale]}
          </ButtonLink>
        </Link>
      )}
    </ConversionBlock>
  );
}
