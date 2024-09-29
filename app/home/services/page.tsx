import Service from "@/components/ui/Home/Services/services_header";
import Form from "@/components/ui/Home/Services/services_form";

export default function servicesPage() {
  const services = [
    { name: "Childbirth" },
    { name: "Pharmacy" },
    { name: "Chronic diseases" },
    { name: "Primary care" },
    { name: "Blood services" },
    { name: "Diagnostic services" },
  ];
  return (
    <div>
      <Service />
      <Form services={services} />
    </div>
  );
}
