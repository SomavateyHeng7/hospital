import Image from "next/image";
import defaultProfile from "@/public/doctor/default-profile.jpg";

interface Doctor {
  name: string;
  profession: string;
  image: string;
}

export default function DoctorList(props: { doctors: Doctor[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Doctors</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {props.doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <Image
              src={doctor.image || defaultProfile}
              alt={doctor.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {doctor.name}
              </h3>
              <p className="mt-2 text-lg text-gray-600">{doctor.profession}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}