import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserMd, faProcedures, faCalendarAlt, faBed } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <nav className="space-y-4">
        <Link href="/admin" className="flex items-center p-2 hover:bg-blue-800 rounded">
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
          Dashboard
        </Link>
        <Link href="/admin/doctors" className="flex items-center p-2 hover:bg-blue-800 rounded">
          <FontAwesomeIcon icon={faUserMd} className="mr-2" />
          Doctors
        </Link>
        <Link href="/admin/patients" className="flex items-center p-2 hover:bg-blue-800 rounded">
          <FontAwesomeIcon icon={faProcedures} className="mr-2" />
          Patients
        </Link>
        <Link href="/admin/appointments" className="flex items-center p-2 hover:bg-blue-800 rounded">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          Appointments
        </Link>
        <Link href="/admin/beds" className="flex items-center p-2 hover:bg-blue-800 rounded">
          <FontAwesomeIcon icon={faBed} className="mr-2" />
          Available Beds
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
