import { useSanityClient, groq } from "astro-sanity";

export async function Brands(limit=0) {
  let brands = await useSanityClient().fetch(
    groq`*[_type == "brand"]{title, 'slug':slug.current, 'subtitle':description, body, 'image':{'src': mainImage.asset->url}, 'stars':rating, 'tags':tags[]->title, links[]->{url, 'logo':type->logo.asset->url}}`
  );

  if(limit){
      return brands.slice(0, limit)
  }

  return brands
}

export async function TextToImages(limit=0) {
  let images = await useSanityClient().fetch(
    groq`*[_type == "textToImage"]{title, 'slug':slug.current, prompt, negativePrompt, 'image':image.asset->url, 'tools':tool[]->{'slug':slug.current, title}}`
  );

  if(limit){
      return images.slice(0, limit)
  }

  return images
}
