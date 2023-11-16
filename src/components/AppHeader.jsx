import { IconButton } from "@material-tailwind/react"
import { useMatches } from "react-router-dom"
import AppIcon from "./AppIcon"

const AppHeader = ({ menu, Icon, back }) => {
  const matches = useMatches()

  return (
    <div className="flex items-center justify-between bg-[#1F3C5C] p-2 rounded-lg w-full">
      <div className="flex-1">{Icon ? Icon : null}</div>
      <span className="text-white font-Lato_bold text-[16px]">
        {matches[0].id}
      </span>
      <div className="flex-1 flex justify-end">
        {menu ? (
          <IconButton className="max-w-[24px]" variant="text">
            <AppIcon name="menu" className="fill-none w-6" />
          </IconButton>
        ) : null}
      </div>
    </div>
  )
}

export default AppHeader
