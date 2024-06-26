import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetaills from './components/BookDetaills/BookDetaills';
import PagesToRead from './components/PagesToRead/PagesToRead';
import Recommendations from './components/Recommendations/Recommendations';
import Blog from './components/Blog/Blog';
import Banner from './components/Banner/Banner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/banner',
        element: <Banner></Banner>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/book/:bookId',
        element: <BookDetaills></BookDetaills>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/recommendations',
        element: <Recommendations></Recommendations>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
