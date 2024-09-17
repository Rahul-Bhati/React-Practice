import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Restaurant from "./components/Restaurant";
import RestaurantDetail, { loader as restaurantDetailLoader } from "./components/RestaurantDetail";
import About from "./components/About";
import { UserContext } from "./utils/UserContext";

// const content = React.createElement("div", { id: "main" }, [
//   React.createElement(
//     "div",
//     { class: "left" },
//     React.createElement("h1", {}, "Left")
//   ),
//   React.createElement(
//     "div",
//     { class: "right" },
//     React.createElement("h1", {}, "Right")
//   ),
//   React.createElement("h1", {}, "Hello World!"),
// ]);

// another type of creating react ele is using JSX -> it is not html inside js
// JSX make life easy, more readeble code

// const heading = <h1>Hello JSX</h1>;
// bable convert it into react ele -> then js obj -> parcel convert it -> html

// functional componenets : it is just a js function that return JSX
// alwasys name capital for compo
// const FunComp = () => {
//   return <div className="main">{heading}</div>;
// };

// we can write it like below
// const FunComp2 = () => (
//   <div className="main">
//     Second Type to use functional componenets {heading}
//   </div>
// );

const App = () => {
  const [sign, setSign] = useState("Rahul");
  return (
    /* if we use value={sign} that will replace all data inside UserContext mean {logedInUser:"default"}
     * will change into sign value that is Rahul
     * */
    <UserContext.Provider value={{ logedInUser: sign, setSign }}>

      <Navbar className="shadow-lg" />
      <Outlet />

    </UserContext.Provider>

  )
}

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      {
        path: "/", element: <Restaurant />
      },
      {
        path: "/restaurant/:id", element: <RestaurantDetail />
      },
      {
        path: "/about", element: <About />
      },
      {
        path: "/contact", element: <div>Contact</div>
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(<FunComp />);
root.render(<RouterProvider router={router} />);

// is syntext ko or bhi acha banane ke liye JSX ka use karte hai.
