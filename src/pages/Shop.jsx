import { useEffect } from "react";
import FilterShop from "../features/shop/FilterShop";
import ProductsList from "../features/shop/ProductsList";
import SearchShop from "../features/shop/SearchShop";
import ShopBanner from "../features/shop/ShopBanner";
import ShopPagination from "../features/shop/ShopPagination";
import AnimatedPage from "./AnimatedPage";

function Shop() {
  useEffect(() => {
    document.title = "Cara E-commerce | Shop";
  }, []);

  return (
    <AnimatedPage>
      <ShopBanner />
      <div className="responsive-container mb-14 mt-24 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end  md:gap-0">
        <SearchShop />
        <FilterShop />
      </div>
      <ProductsList />
      <ShopPagination />
    </AnimatedPage>
  );
}

export default Shop;
