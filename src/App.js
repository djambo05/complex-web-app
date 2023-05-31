import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";
export const PATH = "/complex-web-app";
const router = createBrowserRouter([
  { path: `${PATH}/`, element: <Step1 /> },
  { path: `${PATH}/step2`, element: <Step2 /> },
  { path: `${PATH}/step3`, element: <Step3 /> },
  { path: `${PATH}/result`, element: <Result /> },
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
