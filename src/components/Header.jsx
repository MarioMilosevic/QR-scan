import Button from "./Button";
export const Header = ({ isActive, generateNewRequest }) => {
  return (
    <div className="p-4 border border-black text-right rounded-xl">
      <Button isActive={isActive} clickHandler={generateNewRequest}>
        Generate
      </Button>
    </div>
  );
};
