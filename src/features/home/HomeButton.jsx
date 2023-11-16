import { Link } from "react-router-dom"
import { IconButton } from "@material-tailwind/react"

const HomeButton = ({ item }) => {
  const { title, icon, to } = item ?? {}
  return (
    <Link className="w-full" {...{ to }}>
      <IconButton
        size="lg"
        className="bg-[#1F3C5C] border border-[#325573] min-w-[100%] min-h-[135px]"
      >
        <div className="flex flex-col justify-center items-center gap-2">
          {icon}
          <span className="font-Lato_bold text-[16px] text-white capitalize">
            {title}
          </span>
        </div>
      </IconButton>
    </Link>
  )
}

export default HomeButton
