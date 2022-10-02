import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Layout>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
