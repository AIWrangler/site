import { useSanityClient, groq } from "astro-sanity";

export async function Brands(limit=0) {
  let brands = await useSanityClient().fetch(
    groq`*[_type == "brand"]{title, 'slug':slug.current, 'subtitle':description, body, 'image':{'src': mainImage.asset->url}, 'stars':rating, 'tags':tags[]->{title, 'slug':slug.current}, links[]->{url, 'logo':type->logo.asset->url}}`
  );

  if(limit){
      brands = brands.slice(0, limit)
  }

  let tags = {}
  brands?.forEach((brand) => {
    brand.tags?.forEach((tag) => {
      if (tag) {
        if (!tags[tag.slug]) {
          tags[tag.slug] = { title: tag.title, slug: tag.slug, brands: [] };
        }

        tags[tag.slug].brands.push(brand);
      }
    });
  });  

  return {brands, tags}
}

export async function TextToImages(limit=0) {
  let images = await useSanityClient().fetch(
    groq`*[_type == "textToImage"]{title, 'slug':slug.current, prompt, negativePrompt, 'image':image.asset->url, 'tools':tool[]->{'slug':slug.current, title}, 'models':model[]->{title}}`
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
    groq`*[_type == "tag"]{title, 'slug':slug.current}`
  );

  if (limit) {
    return tags.slice(0, limit);
  }

  return tags;
}
