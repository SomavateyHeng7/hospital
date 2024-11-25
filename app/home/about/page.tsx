import DoctorList from "@/components/home/about/doctor-list";

export default function AboutPage() {
  // Fetch doctors from the database (currently using static data)
  const doctors = [
    {
      name: "Dr. LONG SOPHEA",
      profession: "DERMATOLOGIST",
      image: "/doctors/john.jpeg",
    },
    { name: "Dr. CHHAR BUNPAUL", profession: "PULMONOLOGIST", image: "" },
    {
      name: "Dr. SIM SOKCHAN",
      profession: "NEURO-SURGEON",
      image: "/doctors/james.png",
    },
    {
      name: "Dr. HOK TOLA",
      profession: "NEUROLOGIST",
      image: "/doctors/sarah.jpg",
    },
    { name: "Dr. OUNG MONYRAKSMEY", profession: "GY-OBSTETRICIAN", image: "" },
    { name: "Dr. MENG MAKARA", profession: "GENERAL PHYSICIAN", image: "" },
    { name: "Dr. LORN BUNHENG", profession: "GENERAL SURGEON", image: "" },
    { name: "Dr. TONG THONGHENG", profession: "GY-OBSTETRICIAN", image: "" },
    { name: "Dr. HUOT TINGHUY", profession: "PEDIATRICIAN", image: "" },
    { name: "Dr. KEO VANNARITH", profession: "CANCEROLOGIST", image: "" },
    { name: "Dr. CHEA HUY", profession: "TRAUMATOLOGIST", image: "" },
  ];

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are a hospital that provides the best healthcare services.
          </p>
        </div>
      </section>
      <DoctorList doctors={doctors} />
    </div>
  );
}
