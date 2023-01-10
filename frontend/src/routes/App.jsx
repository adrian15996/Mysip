import { useState } from "react";
import { Layout } from "../containers/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import SignInSide from "../components/singIn";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singin" element={<SignInSide />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
