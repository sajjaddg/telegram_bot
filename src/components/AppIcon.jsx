import { memo } from "react"
import IconEdit from "../assets/icons/IconEdit"
import IconSave from "../assets/icons/IconSave"
import IconMenu from "../assets/icons/IconMenu"
import IconCharge from "../assets/icons/IconCharge"

const icons = {
  edit: IconEdit,
  save: IconSave,
  menu: IconMenu,
  charge: IconCharge,
}

// eslint-disable-next-line react/display-name, react/prop-types
const AppIcon = memo(({ name, className, ...props }) => {
  const Icon = icons[name]
  return <Icon {...props} className={"fill-current " + className} />
})

export default AppIcon
