// import { list } from "postcss";
// import React from "react";

// const names = ["zakaria", "khan", "uni"];

// const App = () => {
//   return (
//     <>
//       <div className=" text-5xl">App</div>

//       <ul>
//         {names.map((name) => (
//           <li>{name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import Mainlayout from "./layouts/Mainlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return (
    // <>
    //   <Navbar />
    //   <Hero
    //     title="Become a React Dev"
    //     subtitle="Find a job that fits your skillset and requirements"
    //   />
    //   <HomeCards />
    //   <JobListings />
    //   <ViewAllJobs />
    // </>

    <RouterProvider router={router} />
  );
};

export default App;
