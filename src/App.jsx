import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout, ProductDetail, Shop } from "./router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/product-details/:productId"
            element={
              <Layout>
                <ProductDetail />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
