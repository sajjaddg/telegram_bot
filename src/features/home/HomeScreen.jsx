import { useMemo } from "react"
import Signal from "../../assets/icons/icon-signals.svg?react"
import Alerts from "../../assets/icons/icon-alerts.svg?react"
import Price from "../../assets/icons/icon-price.svg?react"
import Wallet from "../../assets/icons/icon-wallet.svg?react"
import Profile from "../../assets/icons/icon-profile.svg?react"
import HomeButton from "./HomeButton"
import AppHeader from "../../components/AppHeader"

function HomeScreen() {
  const data = useMemo(
    () => [
      {
        id: 0,
        title: "Signals",
        icon: <Signal />,
        to: "/signals",
      },
      {
        id: 1,
        title: "alerts",
        icon: <Alerts />,
      },
      {
        id: 2,
        title: "Price",
        icon: <Price />,
      },
      {
        id: 3,
        title: "Wallet",
        icon: <Wallet />,
        to: "/wallet",
      },
      {
        id: 4,
        title: "Profile",
        icon: <Profile />,
        to: "/profile",
      },
    ],
    []
  )

  return (
    <div className="flex flex-col  p-4 gap-4">
      <AppHeader />
      <div className="grid grid-cols-2 justify-items-center gap-6 ">
        {data.map((it) => (
          <HomeButton key={it.id} item={it} />
        ))}
      </div>
    </div>
  )
}

export default HomeScreen
