import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import PageToRead from "../pages/pageToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Homepage },
      { path: "/books", Component: Books },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/page-to-read",
        Component: PageToRead,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
