import { Link } from 'react-router';

const About = () => {
  return (
    <div className="flex flex-col">

      <title>About | Pet Care</title>

      {/* Hero Section */}
      <section data-aos="zoom-in" className="bg-linear-to-r from-purple-500 to-purple-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-300">HappyPaws</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            HappyPaws is dedicated to providing the best care and support for your furry friends — making sure every pet is happy, healthy, and loved.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section data-aos="fade-up" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
            alt="Our Mission"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Mission 🐾
          </h2>
          <p className="mb-4 leading-relaxed">
            At <span className="font-semibold text-purple-600">HappyPaws</span>, we aim to create a safe and loving environment for pets and their owners. Our team of dedicated pet care professionals is committed to delivering top-quality services — from grooming to health checkups — ensuring your pets feel loved and cared for every day.
          </p>
          <p className="leading-relaxed">
            Founded by passionate animal lovers, HappyPaws is more than a pet care service — it’s a community where pets thrive and owners feel confident in the care their furry family members receive.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section data-aos="fade-up" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose HappyPaws? 🐶🐱
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-2xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                🐾 Professional Care
              </h3>
              <p>
                Our trained staff ensures your pets receive the best care, attention, and love.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-2xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                🏡 Safe & Clean Environment
              </h3>
              <p>
                We maintain a safe, clean, and hygienic space for pets to play, rest, and grow healthy.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-2xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                ❤️ Personalized Attention
              </h3>
              <p>
                Every pet is unique — we provide customized care, from diet to activities, to ensure they’re happy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section data-aos="fade-up" className="bg-purple-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Pet Family 🐕🐾</h2>
        <p className="text-lg mb-8 opacity-90">
          Trust HappyPaws with your furry friends and give them the love and care they deserve!
        </p>
        <Link to="/signin" className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default About;