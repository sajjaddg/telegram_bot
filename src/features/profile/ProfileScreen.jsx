import { useMemo, useState } from "react"
import { Button, IconButton } from "@material-tailwind/react"
import AppHeader from "../../components/AppHeader"
import AppIcon from "../../components/AppIcon"

const ProfileScreen = () => {
  const [active, setActive] = useState(false)

  const [name, setName] = useState("Ali Mousavi")
  const [phone, setPhone] = useState("0928374632")
  const [email, setEmail] = useState("sampleemailm@gmail.com")

  const Icon = useMemo(
    () => (
      <IconButton
        size="sm"
        className="bg-[#A2BAC6] rounded p-1"
        onClick={() => setActive((pre) => !pre)}
        disabled={active}
      >
        <AppIcon name="edit" className="w-6 fill-none" />
      </IconButton>
    ),
    [active]
  )

  return (
    <div className="flex flex-col h-[100svh] p-4 pb-0 gap-8">
      <AppHeader menu {...{ Icon }} />
      <div className="flex flex-col gap-6">
        <Input title="Name :" setValue={setName} value={name} {...{ active }} />
        <Input
          title="Mobile Number :"
          setValue={setPhone}
          value={phone}
          {...{ active }}
        />
        <Input
          title="Email :"
          setValue={setEmail}
          value={email}
          {...{ active }}
        />
      </div>
      <div
        className={`flex-1 flex transition-opacity duration-500 items-end ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        <Button
          onClick={() => setActive((pre) => !pre)}
          className="w-full bg-[#CDA875] rounded-b-none"
          disabled={!active}
        >
          <div className="flex justify-center items-center gap-2">
            <AppIcon name="save" className="w-[18px]" />
            <span className="font-Lato text-[16px] text-white capitalize">
              Save
            </span>
          </div>
        </Button>
      </div>
    </div>
  )
}

const Input = ({ active, title, value, setValue }) => {
  return (
    <div
      className={`px-4 py-3 flex gap-2 rounded-lg border border-[#325573] transition-colors duration-500 ${
        active ? "bg-[#1F3C5C] border-[#A2BAC6]" : "bg-[#325573]"
      }`}
    >
      <span
        className={`text-[14px] font-Lato transition-colors duration-500 ${
          active ? "text-[#C4CDD5]" : "text-[#132A4C]"
        }`}
      >
        {title}
      </span>
      <input
        className={`bg-transparent transition-colors duration-500 font-Lato text-[14px] outline-none flex-1 ${
          active ? "text-white" : "text-[#C4CDD5]"
        }`}
        disabled={!active}
        onChange={(e) => setValue(e.currentTarget.value)}
        {...{ value }}
      />
    </div>
  )
}

export default ProfileScreen
