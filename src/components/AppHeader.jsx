import { useMatches } from "react-router-dom"

const AppHeader = () => {
  const matches = useMatches()

  return (
    <div className="flex items-center justify-center bg-[#1F3C5C] p-4 rounded-lg w-full">
      <span className="text-white font-Lato_bold text-[16px]">
        {matches[0].id}
      </span>
    </div>
  )
}

export default AppHeader
