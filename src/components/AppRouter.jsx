import { createHashRouter, RouterProvider } from "react-router-dom"
import HomeScreen from "../features/home/HomeScreen"

const router = createHashRouter([
  {
    path: "/",
    id: "Home",
    element: <HomeScreen />,
  },
])

const AppRouter = () => <RouterProvider {...{ router }} />

export default AppRouter
