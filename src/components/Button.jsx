const Button = ({children, onClick, className}) => {
  return (
    <button
      className={`${className} rounded-md border-none px-4 py-2 text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
