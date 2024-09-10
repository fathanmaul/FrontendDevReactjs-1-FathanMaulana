import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={
        <Detail />
      } />
      <Route path="*" element={<div>Not Found</div>} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
