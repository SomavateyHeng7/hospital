import About from "@/components/ui/Home/About/about";
import DoctorList from "@/components/ui/Home/About/doctor-list";

export default function AboutPage() {
  // fetch doctors from database
  const doctors = [
    {
      name: "Dr. LONG SOPHEA",
      profession: "DERMATOLOGIST",
      image: "/images/doctors/john.jpeg",
    },
    { name: "Dr. CHHAR BUNPAUL", profession: "PULMONOLOGIST", image: "" },
    {
      name: "Dr. SIM SOKCHAN",
      profession: "NEURO-SURGEON",
      image: "/images/doctors/james.png",
    },
    {
      name: "Dr. HOK TOLA",
      profession: "NEUROLOGIST",
      image: "/images/doctors/sarah.jpg",
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
      <About />
      <DoctorList doctors={doctors} />
    </div>
  );
}
