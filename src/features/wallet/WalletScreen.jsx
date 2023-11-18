import { useMemo } from "react"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import AppHeader from "../../components/AppHeader"
import AppIcon from "../../components/AppIcon"

const WalletScreen = () => {
  const data = useMemo(
    () => [
      {
        id: 0,
        type: "Charge Balance",
        price: "2,000 USDT",
        plus: true,
        tId: "#218921",
        date: "12/02/2023 - 13:30",
      },
      {
        id: 1,
        type: "Signal",
        price: "200 USDT",
        plus: false,
        tId: "#218921",
        date: "12/02/2023 - 13:30",
      },
      {
        id: 2,
        type: "Alert",
        price: "120 USDT",
        plus: false,
        tId: "#218921",
        date: "12/02/2023 - 13:30",
      },
      {
        id: 3,
        type: "Alert",
        price: "10 USDT",
        plus: false,
        tId: "#218921",
        date: "12/02/2023 - 13:30",
      },
      {
        id: 4,
        type: "Signal",
        price: "200 USDT",
        plus: false,
        tId: "#218921",
        date: "12/02/2023 - 13:30",
      },
      {
        id: 5,
        type: "Alert",
        price: "120 USDT",
        plus: false,
        tId: "#218921",
        date: "12/02/2023 - 13:30",
      },
      {
        id: 6,
        type: "Alert",
        price: "10 USDT",
        plus: false,
        tId: "#218921",
        date: "12/02/2023 - 13:30",
      },
    ],
    []
  )

  return (
    <div className="flex flex-col px-4">
      <div className="sticky top-0 bg-[#212B36] py-4">
        <div className="flex flex-col gap-[29px]">
          <div className="flex flex-col gap-8">
            <AppHeader menu />
            <Balance />
          </div>
          <span className="text-[#C1D1D9] text-center text-[14px]">
            Transaction History
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 pb-4">
        {data.map((it) => (
          <TransactionItem key={it.id} item={it} />
        ))}
      </div>
    </div>
  )
}

const Balance = () => (
  <div className="flex justify-between items-center p-4 bg-[#1F3C5C] flex-1 rounded-lg">
    <div className="flex flex-col gap-[7px]">
      <span className="text-[12px] font-Lato_bold text-[#C1D1D9]">
        Balance :
      </span>
      <span className="text-[24px] font-Lato_bold text-[#CDA875]">
        2,000 USDT
      </span>
    </div>
    <Link to="/charge">
      <Button size="sm" className="bg-[#CDA875] pl-3 pr-4 rounded">
        <div className="flex gap-2 items-center text-[#132A4C]">
          <AppIcon name="charge" className="stroke-current fill-none w-6" />
          <span className="font-Lato text-[12px] capitalize">Charge</span>
        </div>
      </Button>
    </Link>
  </div>
)

const TransactionItem = ({ item }) => {
  const { type, price, plus, tId, date } = item ?? {}

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-6 p-4 bg-[#1F3C5C] border border-[#325573] rounded-lg w-full">
      <div className="flex flex-col gap-1">
        <span className="text-[12px] text-[#C4CDD5]">Type</span>
        <span className="text-[12px] font-medium text-white">{type}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[12px] text-[#C4CDD5]">Price</span>
        <span
          className={`text-[12px] font-medium ${
            plus ? "text-[#1E9992]" : "text-[#CC4959]"
          }`}
        >
          {price}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[12px] text-[#C4CDD5]">Transaction ID</span>
        <span className="text-[12px] font-medium text-white">{tId}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[12px] text-[#C4CDD5]">Date</span>
        <span className="text-[12px] font-medium text-white">{date}</span>
      </div>
    </div>
  )
}

export default WalletScreen
