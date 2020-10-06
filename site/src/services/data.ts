import { apiBaseUrl, client } from '../api';
import { ContentBlock } from '../content-block';

export interface ServicesData {
  service: null | {
    contentBlocks: ContentBlock[];
  };
}

export async function getServicesData(): Promise<ServicesData> {
  const { data } = (await client({
    query: `query {
      service {
        content_blocks {
          id
          content_en
          cta {
            href
            text_en
          }
          image {
            url
          }
          image_position
          tag_en
          title_en
        }
      }
    }`,
  })) as {
    data: {
      service?: {
        content_blocks: Array<{
          id: string;
          cta?: { href: string; text_en: string };
          content_en?: string;
          image?: { url: string };
          image_position: 'start' | 'end';
          tag_en?: string;
          title_en?: string;
        }>;
      };
    };
  };
  if (data.service == null) {
    return { service: null };
  }
  return {
    service: {
      contentBlocks: data.service.content_blocks.map(
        ({ id, content_en, cta, image, image_position, tag_en, title_en }) => {
          const adaptedService: Partial<ContentBlock> = { id };
          if (cta != null) {
            adaptedService.cta = { href: cta.href, text: cta.text_en };
          }
          if (image != null) {
            const imageUrl = image.url.startsWith('http')
              ? image.url
              : `${apiBaseUrl}${image.url}`;
            adaptedService.image = { position: image_position, url: imageUrl };
          }
          Object.assign(adaptedService, {
            content: content_en,
            tag: tag_en,
            title: title_en,
          });
          return adaptedService as ContentBlock;
        },
      ),
    },
  };
}
