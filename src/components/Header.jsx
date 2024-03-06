import Button from "./Button"
export const Header = ({ generateNewRequest, }) => {
  return (
    <div className='p-4 border border-black text-right rounded-xl'>
        <Button isActive={true} clickHandler={generateNewRequest}>
          Generate
        </Button>
    </div>
  )
}
