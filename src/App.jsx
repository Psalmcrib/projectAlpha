import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageLayout from "./components/pageLayout";
import Home from "./pages/Home";
import ShopGrid from "./pages/Shop/shop-grid";
import ShopWishlist from "./pages/Shop/shop-wishlist";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="shop-grid" element={<ShopGrid />} />
        <Route path="shop-wishlist" element={<ShopWishlist />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};
export default App;
