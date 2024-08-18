const NavButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-light px-2 py-2 text-white underline hover:font-semibold transition-colors duration-200 bg-transparent border-none"
    >
      {text}
    </button>
  );
};

export default NavButton;
