function Navbar() {
  return (
    <div className="bg-[#0D5EC6] text-white font-bold text-lg p-4 flex justify-between items-center">
      <img src="/assets/logo.png" alt="logo" className="h-8 w-10" />
      <img
        src="/assets/profile.svg"
        alt="profile"
        className="text-white size-8"
      />
    </div>
  );
}

export default Navbar;
