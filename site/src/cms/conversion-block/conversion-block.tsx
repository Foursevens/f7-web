import { ConversionBlock, Title, RichText, ButtonLink } from '@f7-web/design';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import { SiteConversionBlockModel } from './types';

interface Props {
  conversion: SiteConversionBlockModel;
}

export function SiteConversionBlock({ conversion }: Props): ReactElement {
  return (
    <ConversionBlock>
      {conversion.title == null ? null : (
        <Title size="md">{conversion.title}</Title>
      )}
      {conversion.content == null ? null : (
        <RichText size="lg">{conversion.content}</RichText>
      )}
      {conversion.cta == null ? null : (
        <Link href={conversion.cta.href} passHref>
          <ButtonLink background="secondary">{conversion.cta.text}</ButtonLink>
        </Link>
      )}
    </ConversionBlock>
  );
}
