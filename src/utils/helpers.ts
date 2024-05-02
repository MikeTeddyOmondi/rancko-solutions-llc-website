import type { CollectionEntry, CollectionKey } from "astro:content";

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateSlug(string: string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function generateCategoryData(categories: Set<string>) {
  let categoryData: CategoryData[] = [];
  categories.forEach((category) => {
    categoryData.push({
      name: category,
      slug: `${generateSlug(category)}`,
    });
  });
  return categoryData;
}

type CategoryData = { name: string; slug: string };

