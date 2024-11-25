import ContactForm from "@/components/home/contact-us/contact_form";

export default function contactUsPage() {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Contact us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Please fill out the form if you wish to ask us any questions.
          </p>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
