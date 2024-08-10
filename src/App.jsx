import AddTask from "./components/AddTask";
import Edit from "./components/edit";
import Home from "./components/home";
import Login from "./components/login"
import { UserProvider } from "./context/DataContext";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/add",
    element: <AddTask />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/edit/:id",
    element: < Edit/>,
  },
  {
    path: "*",
    element: <Home />,
  }
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;

