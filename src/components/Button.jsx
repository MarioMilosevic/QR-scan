const Button = ({ value, cursor, changeCursor }) => {
  return (
    <button className={`px-4 py-2 rounded-lg bg-slate-300 duration-200 ${cursor} hover:bg-slate-200`} onClick={changeCursor}>
      {value}
    </button>
  );
};

export default Button;
