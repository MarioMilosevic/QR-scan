const Button = ({ isActive, clickHandler, children }) => {
  const baseClass = `px-4 py-2 rounded-lg duration-200`;
  const extraClass = isActive ? "bg-green-400" : "bg-gray-300";
  return (
    <button
      className={`${baseClass} ${extraClass}`}
      disabled={!isActive}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
