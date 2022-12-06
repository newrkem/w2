import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoDetail from "../components/TodoDetail";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="detail" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
