import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {CaseReport, ErrorElement, HomePage, Home, CreateHome} from "./components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/create",
    element: <CreateHome />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "case-report",
        element: <CaseReport />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
