import BookAppointment from "@/components/ui/Book-Appointment/book-appointment";
import Form from "@/components/ui/Book-Appointment/form";

export default function BookAppointmentPage() {
  // fetch doctors from database
  const doctors = [
    { name: "Dr. LONG SOPHEA (DERMATOLOGIST)" },
    { name: "Dr. CHHAR BUNPAUL (PULMONOLOGIST)" },
    { name: "Dr. SIM SOKCHAN (NEURO-SURGEON)" },
    { name: "Dr. HOK TOLA (NEUROLOGIST)" },
    { name: "Dr. OUNG MONYRAKSMEY (GY-OBSTETRICIAN)" },
    { name: "Dr. MENG MAKARA (GENERAL PHYSICIAN)" },
    { name: "Dr. LORN BUNHENG (GENERAL SURGEON)" },
    { name: "Dr. TONG THONGHENG (GY-OBSTETRICIAN)" },
    { name: "Dr. HUOT TINGHUY (PEDIATRICIAN)" },
    { name: "Dr. KEO VANNARITH (CANCEROLOGIST)" },
    { name: "Dr. CHEA HUY (TRAUMATOLOGIST)" },
    
  ];

  return (
    <div>
      <BookAppointment />
      <Form doctors={doctors} />
    </div>
  );
}
