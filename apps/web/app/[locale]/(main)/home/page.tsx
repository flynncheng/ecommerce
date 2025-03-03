import HomeTemplate from "@/components/home";
import { listCollections } from "@/lib/data/collections";

export default async function Home() {
  const { collections } = await listCollections({
    fields: "*products",
  });

  return <HomeTemplate collections={collections} />;
}
