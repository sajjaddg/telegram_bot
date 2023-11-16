import { memo } from "react"
import IconEdit from "../assets/icons/IconEdit"
import IconSave from "../assets/icons/IconSave"
import IconMenu from "../assets/icons/IconMenu"

const icons = {
  edit: IconEdit,
  save: IconSave,
  menu: IconMenu,
}

// eslint-disable-next-line react/display-name, react/prop-types
const AppIcon = memo(({ name, className, ...props }) => {
  const Icon = icons[name]
  return <Icon {...props} className={"fill-current " + className} />
})

export default AppIcon
