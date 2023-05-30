import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";

const Result = () => (
  <>
    <Link to="/"> Start Over</Link>
  </>
);

const router = createBrowserRouter([
  { path: "/", element: <Step1 /> },
  { path: "/step2", element: <Step2 /> },
  { path: "/step3", element: <Step3 /> },
  { path: "/result", element: <Result /> },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
