import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Step1 } from "./components/Step1";

const Step2 = () => <>Step2</>;
const Step3 = () => <>Step3</>;
const Result = () => <>Result</>;

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
