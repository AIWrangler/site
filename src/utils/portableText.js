import { portableTextToHtml, useSanityClient } from 'astro-sanity';
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(useSanityClient());
function urlFor(source) {
  return builder.image(source);
}

const customComponents = {
  types: {
    image: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${urlFor(value.asset).format('webp').url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${urlFor(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}