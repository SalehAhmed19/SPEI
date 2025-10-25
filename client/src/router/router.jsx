import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Academic from "../pages/Academic";
import Department from "../pages/Department";
import Admission from "../pages/Admission";
import Administration from "../pages/Administration";
import Teachers from "../pages/Teachers";
import Journal from "../pages/Journal";
import Gallery from "../pages/Gallery";
import Alumni from "../pages/Alumni";
import Career from "../pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/academic", element: <Academic /> },
      { path: "/department", element: <Department /> },
      { path: "/admission", element: <Admission /> },
      { path: "/administration", element: <Administration /> },
      { path: "/teachers", element: <Teachers /> },
      { path: "/journal-publication", element: <Journal /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/alumni", element: <Alumni /> },
      { path: "/career", element: <Career /> },
    ],
  },
]);

export default router;
