import Button from "./Button"
export const Header = ({cursor}) => {
  return (
    <div className='p-4 border border-black text-right rounded-xl'>
        <Button value={"Generate"} cursor={cursor} />
    </div>
  )
}
