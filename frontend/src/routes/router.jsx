import Home from "../pages/home";
import ContactUs from "../pages/contact-us";
import SignInSide from "../pages/login";
import SignUp from "../pages/signUp";
import { Settings } from "../pages/settings";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacto",
    element: <ContactUs />,
  },
  { path: "/log-in", element: <SignInSide /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/settings", element: <Settings /> },
];
