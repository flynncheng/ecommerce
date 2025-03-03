import { listCategories } from "@/lib/data/categories";
import MenusTemplate from "./MenusTemplate";

export default async function Menus() {
  const categories = await listCategories();

  // Filter out duplicates and order by rank.
  const data = categories
    .filter(
      (category) =>
        !(category.category_children.length === 0 && category.parent_category),
    )
    .sort((a, b) => (a.rank ?? Infinity) - (b.rank ?? Infinity));

  return <MenusTemplate data={data} />;
}
