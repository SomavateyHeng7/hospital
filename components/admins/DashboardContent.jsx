// components/admin/DashboardContent.jsx

const DashboardContent = ({ stats, appointmentsData, revenueData }) => {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
  
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold">Doctors</h2>
            <p className="text-3xl font-semibold text-blue-600">{stats.doctors}</p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold">Patients</h2>
            <p className="text-3xl font-semibold text-blue-600">{stats.patients}</p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold">Appointments</h2>
            <p className="text-3xl font-semibold text-blue-600">{stats.appointments}</p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold">Available Beds</h2>
            <p className="text-3xl font-semibold text-blue-600">{stats.availableBeds}</p>
          </div>
        </div>
  
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Daily Appointments</h2>
            <Bar data={appointmentsData} />
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Monthly Revenue</h2>
            <Line data={revenueData} />
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardContent;
  