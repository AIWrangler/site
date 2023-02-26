import { useSanityClient, groq } from "astro-sanity";

export default async function index(limit=0) {
  let brands = await useSanityClient().fetch(
    groq`*[_type == "brand"]{title, 'slug':slug.current, 'subtitle':description, body, 'image':{'src': mainImage.asset->url}, 'stars':rating, 'tags':tags[]->title, links[]->{url, 'logo':type->logo.asset->url}}`
  );

  if(limit){
      return brands.slice(0, limit)
  }

  return brands
}
