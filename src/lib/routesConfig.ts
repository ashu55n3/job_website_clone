import React from "react";

const Homepage = React.lazy(() => import("../views/Homepage"));
const Login = React.lazy(() => import("../views/Login"));
const NotFound = React.lazy(() => import("../views/NotFound"));
const PostedJobs = React.lazy(() => import("../views/PostedJobs"));

const routesConfig = {
  homepage: { path: "/", element: Homepage },
  login: {
    path: "/login",
    element: Login,
  },
  notFound: {
    path: "*",
    element: NotFound,
  },
  postedJobs: {
    path: "/posted-jobs",
    element: PostedJobs,
  },
};

export default routesConfig;
