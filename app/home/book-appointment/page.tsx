import Form from "@/components/home/book-appointment/form";

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
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Book Appointment</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Book an appointment with one of our doctors.
          </p>
        </div>
      </section>
      <Form doctors={doctors} />
    </div>
  );
}
