import { HomeCard } from "@/components/shared/home/home-card";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
import {
  getAllCategories,
  getProductsByTag,
  getProductsForCard,
} from "@/lib/actions/product.actions";
import { toSlug } from "@/lib/utils";
import data from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import ProductSlider from "@/components/shared/product/product-slider";
import BrowsingHistoryList from "@/components/shared/browsing-history-list";

export default async function HomePage() {
  const categories = (await getAllCategories()).slice(0, 4);
  const todaysDeals = await getProductsByTag({ tag: "todays-deal" });
  const newArrivals = await getProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });
  const featureds = await getProductsForCard({
    tag: "featured",
    limit: 4,
  });
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
    limit: 4,
  });
  const bestSellingProducts = await getProductsByTag({ tag: "best-seller" });

  const cards = [
    {
      title: "Categories to explore",
      link: {
        text: "See More",
        href: "/search",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: "Explore New Arrivals",
      items: newArrivals,
      link: {
        text: "View All",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Discover Best Sellers",
      items: bestSellers,
      link: {
        text: "View All",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Featured Products",
      items: featureds,
      link: {
        text: "Shop Now",
        href: "/search?tag=new-arrival",
      },
    },
  ];

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className="bg-border md:space-y-4 md:p-4">
        <HomeCard cards={cards} />
        <Card className="w-full rounded-none">
          <CardContent className="items-center gap-3 p-4">
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
          </CardContent>
        </Card>

        <Card className="w-full rounded-none">
          <CardContent className="items-center gap-3 p-4">
            <ProductSlider
              title="Best Selling Products"
              products={bestSellingProducts}
              hideDetails
            />
          </CardContent>
        </Card>
      </div>
      <div className="bg-background p-4">
        <BrowsingHistoryList />
      </div>
    </>
  );
}
