

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About AR/VR Events Ticket Booking System
        </h1>
        <p className="text-lg leading-7 text-center text-gray-700 max-w-2xl mx-auto">
          Welcome to the AR/VR Events Ticket Booking System — your one-stop platform for discovering and booking tickets to the latest events in the world of Augmented Reality (AR) and Virtual Reality (VR). We aim to bridge the gap between technology enthusiasts, professionals, and event organizers, offering seamless and efficient ticket booking services.
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Mission Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">
              Our Mission
            </h2>
            <p className="text-md leading-6 text-gray-700">
              Our mission is to make AR/VR events accessible to everyone, whether you’re a technology enthusiast, developer, or simply curious about this groundbreaking technology. We empower users to explore, connect, and participate in cutting-edge AR/VR experiences globally.
            </p>
          </div>

          {/* Key Features Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Explore a wide range of AR/VR events happening globally.</li>
              <li>Seamless ticket booking experience with secure payments.</li>
              <li>Personalized event recommendations based on interests.</li>
              <li>Integration with AR/VR devices for immersive experiences.</li>
              <li>Real-time updates and notifications about upcoming events.</li>
            </ul>
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-md leading-6 text-gray-700">
              With a user-friendly interface and a passion for innovation, we provide a platform where technology and community come together. Whether you’re an event organizer or an attendee, we ensure a smooth and enriching experience from start to finish.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-600">
            Join the AR/VR revolution today!
          </h3>
          <p className="text-gray-700 mt-2">
            Discover events, book tickets, and immerse yourself in the future of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
