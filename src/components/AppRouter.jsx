import { createHashRouter, RouterProvider } from "react-router-dom"
import HomeScreen from "../features/home/HomeScreen"
import SignalScreen from "../features/signals/SignalScreen"
import ProfileScreen from "../features/profile/ProfileScreen"
import WalletScreen from "../features/wallet/WalletScreen"
import ChargeBalanceScreen from "../features/wallet/ChargeBalanceScreen"

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
    path: "/wallet",
    id: "Wallet",
    element: <WalletScreen />,
  },
  {
    path: "/charge",
    id: "Charge Balance",
    element: <ChargeBalanceScreen />,
  },
  {
    path: "/profile",
    id: "Profile",
    element: <ProfileScreen />,
  },
])

const AppRouter = () => <RouterProvider {...{ router }} />

export default AppRouter
