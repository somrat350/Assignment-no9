import { FaAward } from "react-icons/fa";

const vets = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Small Animal Medicine",
    image: "/professional-veterinarian-woman.jpg",
    bio: "15+ years of experience in pet care and winter wellness",
  },
  {
    id: 2,
    name: "Dr. James Chen",
    specialty: "Orthopedic Surgery",
    image: "/professional-veterinarian-man.jpg",
    bio: "Specialist in joint care and mobility for senior pets",
  },
  {
    id: 3,
    name: "Dr. Emma Rodriguez",
    specialty: "Dermatology & Nutrition",
    image: "/professional-veterinarian-woman-dermatology.jpg",
    bio: "Expert in skin health and seasonal dietary adjustments",
  },
  {
    id: 4,
    name: "Dr. Michael Park",
    specialty: "Emergency & Critical Care",
    image: "/professional-veterinarian-man-emergency.jpg",
    bio: "24/7 emergency care and winter-related health issues",
  },
];

const ExpertVets = () => {
  return (
    <section data-aos="fade-up" className="py-16 px-5">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaAward className="text-accent" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Meet Our Expert Vets
          </h2>
          <FaAward className="text-accent" size={28} />
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Dedicated professionals committed to your pet's winter wellness
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-300 text-center"
            >
              <img
                src={vet.image || "/placeholder.svg"}
                alt={vet.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{vet.name}</h3>
                <p className="text-sm text-accent font-semibold mb-3">
                  {vet.specialty}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {vet.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default ExpertVets;
