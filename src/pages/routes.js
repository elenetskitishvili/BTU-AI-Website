import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "./homePage";
import AboutUs from "./aboutUs";
import BachelorInAi from "./bachelorInAi";
import Blog from "./blog";
import ContactUs from "./contactUs";
import Faq from "./faq";
import StudentSuccessStories from "./studentSuccessStories";
import FaqAiLab from "./faqAiLab";
import FaqAiResearch from "./faqAiResearch";

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
      {
        path: "faq/ailab",
        element: <FaqAiLab />,
      },
      {
        path: "faq/airesearch",
        element: <FaqAiResearch />,
      },
    ],
  },
]);

export default router;
