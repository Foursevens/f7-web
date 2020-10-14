import { ImageProps } from '@f7-web/design';

export interface ContentBlock {
  id: string;
  content?: string;
  cta?: { href: string; text: string };
  image?: ImageProps & { position?: 'start' | 'end' };
  tag?: string;
  title?: string;
}
