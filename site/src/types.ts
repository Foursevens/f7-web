export interface ContentBlock {
  id: string;
  content: string;
  cta?: { href: string; text: string };
  image: { position?: 'start' | 'end'; url: string };
  tag?: string;
  title: string;
}
