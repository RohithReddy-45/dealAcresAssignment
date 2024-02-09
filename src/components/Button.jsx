function Button({ children }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 mt-2 mb-4">
      {children}
    </button>
  );
}

export default Button;
