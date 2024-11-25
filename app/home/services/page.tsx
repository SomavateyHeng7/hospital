import Form from "@/components/home/services/services_form";

export default function servicesPage() {
  const services = [
    { name: "Consultations" },
    { name: "Medical check-up" },
    { name: "Emergency" },
    { name: "Surgery" },
    { name: "Home Services" },
    { name: "Physical medicines & Rehabilitations" },
    { name: "Laboratory" },
    { name: "Blood test" },
    { name: "Urine analysis" },
    { name: "Stood analysis" },
    { name: "Sputum analysis" },
    { name: "Culture" },
    { name: "Anapath" },
    { name: "Other medical specimens" },
    { name: "Imagery" },
    { name: "Ultrasound" },
    { name: "X-Ray" },
    { name: "CT-Scan" },
    { name: "MRI" },
  ];
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Below are the list of services provided at our clinic. Please select
            the desire service you want.
          </p>
        </div>
      </section>
      <Form services={services} />
    </div>
  );
}
