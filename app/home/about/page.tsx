import About from "@/components/ui/Home/About/about";
import DoctorList from "@/components/ui/Home/About/doctor-list";

export default function AboutPage() {
  // fetch doctors from database
  const doctors = [
    {
      name: "Dr. John Doe",
      profession: "Cardiologist",
      image: "/images/doctors/john.jpeg",
    },
    { name: "Dr. Jane Doe", profession: "Neurologist", image: "" },
    {
      name: "Dr. James Smith",
      profession: "Pediatrician",
      image: "/images/doctors/james.png",
    },
    {
      name: "Dr. Sarah Johnson",
      profession: "Dermatologist",
      image: "/images/doctors/sarah.jpg",
    },
  ];
  return (
    <div>
      <About />
      <DoctorList doctors={doctors} />
    </div>
  );
}
