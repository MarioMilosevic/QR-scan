import scanner from "./assets/scanner.png"

const ImgContainer = () => {
  return (
    <div className="border border-black">
        <div className="bg-green-400">
        <img src={scanner} alt="some trees" className="w-[180px] h-[180px]"/>
        </div>
    </div>
  )
}

export default ImgContainer
