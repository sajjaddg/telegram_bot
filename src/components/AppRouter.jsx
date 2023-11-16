import { createHashRouter, RouterProvider } from "react-router-dom"
import HomeScreen from "../features/home/HomeScreen"
import SignalScreen from "../features/signals/SignalScreen"
import ProfileScreen from "../features/profile/ProfileScreen"

const router = createHashRouter([
  {
    path: "/",
    id: "Home",
    element: <HomeScreen />,
  },
  {
    path: "/signals",
    id: "Signals",
    element: <SignalScreen />,
  },
  {
    path: "/profile",
    id: "Profile",
    element: <ProfileScreen />,
  },
])

const AppRouter = () => <RouterProvider {...{ router }} />

export default AppRouter
