import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./homePage";
import AboutUs from "./aboutUs";
import BachelorInAi from "./bachelorInAi";
import Blog from "./blog";
import ContactUs from "./contactUs";
import Faq from "./faq";
import StudentSuccessStories from "./studentSuccessStories";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "bachelorinai",
        element: <BachelorInAi />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "studentsuccessstories",
        element: <StudentSuccessStories />,
      },
    ],
  },
]);

export default router;
