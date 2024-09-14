
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/NavBar';
import { Button } from '@/components/ui/button'; 

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-600">Welcome to Our Hospital</h1>
          <p className="mt-4 text-lg text-gray-600">
            Dedicated to providing the best healthcare services for you and your family.
          </p>
          <Button className="mt-6 bg-blue-600 text-white px-6 py-3">
            Book an Appointment
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of healthcare services to meet all your medical needs.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">Cardiology</h3>
              <p className="mt-2 text-gray-600">
                Expert cardiac care, including diagnostics, treatment, and rehabilitation.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">Pediatrics</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive care for children, from birth through adolescence.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">Orthopedics</h3>
              <p className="mt-2 text-gray-600">
                Advanced treatment for bone and joint disorders, injuries, and rehabilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the highest quality medical care, with a focus on patient well-being and satisfaction.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? Need assistance? Contact us today.
          </p>
          <Button className="mt-6 bg-blue-600 text-white px-6 py-3">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer /> 
    </div>
  );
};

export default HomePage;
