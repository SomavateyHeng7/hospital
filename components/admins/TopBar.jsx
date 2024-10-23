const TopBar = () => {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Hospital Management Admin</h1>
        <div className="flex items-center">
          <span className="text-gray-700 mr-4">Admin</span>
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </header>
    );
  };
  
  export default TopBar;
  