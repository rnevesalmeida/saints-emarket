import Categories from "./components/categories/categories";
import ProductList from "./components/productList/productList";
import Hero from "./components/hero-banner/hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <main>
        <Hero />
        <Categories />
        <ProductList />
      </main>
    </Fragment>
  );
}
