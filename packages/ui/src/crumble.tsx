export const Crumble = ({
  variant,
}: {
  variant: "pink" | "indigo" | "purple"
}) => {
  const [border, background] = {
    pink: ["border-pink-600", "bg-pink-600 "],
    indigo: ["border-indigo-600", "bg-indigo-600"],
    purple: ["border-fuchsia-400", "bg-fuchsia-400"],
  }[variant]

  return (
    <div className="flex self-start px-40">
      <div className={`border ${border} rounded-sm pl-1 pr-2 py-[6px]`}>
        <span className={`${background} p-1 rounded-sm mr-2`}>👋🏻</span>
        <span>Hey Mate! Glad you here! 🎉🎉</span>
      </div>
    </div>
  )
}
