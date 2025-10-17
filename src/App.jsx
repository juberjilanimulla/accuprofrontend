import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import JobsPage from "./pages/JobsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import TalentSolutions from "./pages/TalentSolutions";
import NewsInsights from "./pages/NewsInsights";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <AboutPage /> },
      { path: "find-tech-jobs", element: <JobsPage /> },
      { path: "talent-solutions", element: <TalentSolutions /> },
      { path: "news-and-insights", element: <NewsInsights /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
