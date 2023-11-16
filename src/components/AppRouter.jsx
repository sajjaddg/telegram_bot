import { createHashRouter, RouterProvider } from "react-router-dom"
import HomeScreen from "../features/home/HomeScreen"

const router = createHashRouter([
  {
    path: "/",
    id: "Home",
    element: <HomeScreen />,
  },
  {
    path: "/signals",
    id: "Signals",
    element: <>signals</>,
  },
])

const AppRouter = () => <RouterProvider {...{ router }} />

export default AppRouter
