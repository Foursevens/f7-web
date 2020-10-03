import { client } from '../api';

export interface ServicesData {
  services: Service[];
}

export interface Service {
  id: string;
  content: string;
  cta?: { href: string; text: string };
  image: { position: 'start' | 'end'; url: string };
  tag?: string;
  title: string;
}

export async function getServicesData(): Promise<ServicesData> {
  const { data } = (await client({
    query: `query {
      service {
        services {
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
      service: {
        services: Array<{
          id: string;
          cta?: { href: string; text_en: string };
          content_en: string;
          image: { url: string };
          image_position: 'start' | 'end';
          tag_en?: string;
          title_en: string;
        }>;
      };
    };
  };
  return {
    services: data.service.services.map(
      ({ id, content_en, cta, image, image_position, tag_en, title_en }) => {
        const adaptedService: Partial<Service> = { id };
        if (cta != null) {
          adaptedService.cta = { href: cta.href, text: cta.text_en };
        }
        Object.assign(adaptedService, {
          content: content_en,
          image: {
            position: image_position,
            url: image.url,
          },
          tag: tag_en,
          title: title_en,
        });
        return adaptedService as Service;
      },
    ),
  };
}
