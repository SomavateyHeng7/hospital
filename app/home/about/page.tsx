import About from "@/components/ui/About/about";
import DoctorList from "@/components/ui/About/doctor-list";

export default function AboutPage() {
  // fetch doctors from database
  const doctors = [
    { name: "Dr. John Doe", profession: "Cardiologist" },
    { name: "Dr. Jane Doe", profession: "Neurologist" },
    { name: "Dr. James Smith", profession: "Pediatrician" },
    { name: "Dr. Sarah Johnson", profession: "Dermatologist" },
  ];
  return (
    <div>
      <About />
      <DoctorList doctors={doctors} />
    </div>
  );
}
