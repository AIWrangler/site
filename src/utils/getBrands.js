import { useSanityClient, groq } from "astro-sanity";
import { urlForImage } from "@utils/urlForImage";

export default async function index(limit=0) {

  let brands = await useSanityClient().fetch(
    groq`*[_type == "brand"]{title, slug, 'subtitle':description, body, 'image':mainImage, 'stars':rating, 'tags':tags[]->title, links[]->{url, 'logo':type->logo}}`
  );

  brands = brands.map((brand) => ({
    ...brand,
    href: `/resources/${brand.slug.current}`,
    image: {
      src: brand.image ? urlForImage(brand.image) : "",
      alt: brand.title,
    },
    links: brand.links.map(link=>({url:link?.url, logo:link?.logo?urlForImage(link?.logo):''}))
  }));
  
  if(limit){
      return brands.slice(0, limit)
  }

  return brands
}
