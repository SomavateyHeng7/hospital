import BookAppointment from "@/components/ui/Home/Book-Appointment/book-appointment";
import Form from "@/components/ui/Home/Book-Appointment/form";

export default function BookAppointmentPage() {
  // fetch doctors from database
  const doctors = [
    { name: "Dr. John Doe" },
    { name: "Dr. Jane Doe" },
    { name: "Dr. James Smith" },
    { name: "Dr. Sarah Johnson" },
  ];

  return (
    <div>
      <BookAppointment />
      <Form doctors={doctors} />
    </div>
  );
}
