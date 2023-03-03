import { useSanityClient, groq } from "astro-sanity";

export async function Brands(limit=0) {
  let brands = await useSanityClient().fetch(
    groq`*[_type == "brand"]{title, 'slug':slug.current, 'subtitle':description, body, 'image':{'src': mainImage.asset->url}, 'stars':rating, 'tags':tags[]->{title, 'slug':slug.current}, links[]->{url, 'logo':type->logo.asset->url}}`
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

export async function Articles(limit = 0) {
  let articles = await useSanityClient().fetch(
    groq`*[_type == "link" && type->title == "Article"]{title, url, 'subtitle':description, 'image':image.asset->url}`
  );

  if (limit) {
    return articles.slice(0, limit);
  }

  return articles;
}

export async function Tags(limit = 0) {
  let tags = await useSanityClient().fetch(
    groq`*[_type == "tag"]{title}`
  );

  if (limit) {
    return tags.slice(0, limit);
  }

  return tags;
}
