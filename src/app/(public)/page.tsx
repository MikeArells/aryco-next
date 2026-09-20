import HomeClient from "./HomeClient";
import { getProperties } from "@/lib/properties";
import { getNews } from "@/services/newsService";

export default async function Home() {

  const news = await getNews();
  const properties = await getProperties();

  return (
    <HomeClient
      news={news}
      properties={properties}
    />
    
  );
}