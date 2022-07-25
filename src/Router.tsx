import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import Client from "./Layout/Client";

import Admin from "./Layout/Admin";
import Statistics from "./pages/admin/Statistics";
import Article from "./pages/Article";
import Speical from "./pages/Special";
import Project from "./pages/Project";
import Time from "./pages/Time";
import Login from "./pages/Login";
import Demo from "./pages/Demo";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";

import ArticleManage from "./pages/admin/Article";
import SpeicalManage from "./pages/admin/Speical";
import TagManage from "./pages/admin/Tag";

import AuthRoute from "./components/AuthRoute";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Navigate to="/article" />}></Route>
        <Route path="/" element={<Client />}>
          <Route path="article" element={<Article />}></Route>
          <Route path="speical" element={<Speical />}></Route>
          <Route path="time" element={<Time />}></Route>
          <Route path="Project" element={<Project />}></Route>
        </Route>
        <Route
          path="/admin"
          element={<Navigate to="/admin/statistics" />}
        ></Route>
        <Route path="/admin" element={<AuthRoute element={<Admin />} />}>
          <Route
            path="statistics"
            element={<AuthRoute element={<Statistics />}></AuthRoute>}
          ></Route>
          <Route
            path="article"
            element={<AuthRoute element={<ArticleManage />}></AuthRoute>}
          ></Route>
          <Route path="speical" element={<AuthRoute element={<SpeicalManage />}></AuthRoute>}></Route>
          <Route path="tag" element={<AuthRoute element={<TagManage />}></AuthRoute>}></Route>
        </Route>
        <Route path="/403" element={<Error403 />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
