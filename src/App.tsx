import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

function App() {
  return (
    <>
      {/* <h1 className="text-center font-bold underline">Trigvent</h1> */}

      <RouterProvider router={routers} />
    </>
  );
}

export default App;
