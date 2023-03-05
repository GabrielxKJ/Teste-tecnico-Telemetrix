import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";

import { Products } from "../pages/Products";
import { RegisterProducts } from "../pages/RegisterProducts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route element={<Products />} path="/" />
        <Route element={<RegisterProducts />} path="/register" />
      </Route>
    </Routes>
  );
}
