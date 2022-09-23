import { useState } from "react";
import { Layout } from "../containers/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
