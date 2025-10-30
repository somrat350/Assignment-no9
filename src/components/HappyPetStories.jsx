import { FaPaw } from "react-icons/fa";

const HappyPetStories = () => {
  const stories = [
    {
      id: 1,
      name: "Maya Rahman",
      pet: "Bella 🐶",
      story:
        "Pet Care helped Bella recover from skin allergies. Now she’s playful again!",
      img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1761325793~exp=1761329393~hmac=5e4506159707b843bd7be5733493f51f830daa974b0f52c5926a3e07f1531095&w=2000",
    },
    {
      id: 2,
      name: "Rafiul Hasan",
      pet: "Mimi 🐱",
      story:
        "Thanks to Pet Care grooming services, Mimi looks adorable and smells great!",
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1761325672~exp=1761329272~hmac=59658e9781babdd5ff29c95fc0d8ad0ec2b8a6eee9f2707a1556ef487fef0bd5&w=2000",
    },
    {
      id: 3,
      name: "Sadia Karim",
      pet: "Rocky 🐾",
      story:
        "Rocky’s training classes improved his behavior drastically. Highly recommend!",
      img: "https://img.freepik.com/premium-photo/portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera_1258-3112.jpg?w=1060",
    },
    {
      id: 4,
      name: "Tanvir Alam",
      pet: "Coco 🐦",
      story:
        "I never thought a bird could receive such gentle care. The staff treated Coco with so much love and patience!",
      img: "https://img.freepik.com/premium-photo/motivated-cheerful-glad-pleasant-caucasian-adult-bearded-man-grey-sweater-smiling-with-delighted-expression-looking-excited-satisfied-nod-agreement-give-approval_1258-6184.jpg?w=2000",
    },
  ];
  return (
    <section className="my-16 px-5" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2">
        <FaPaw className="text-pink-500" /> Happy Pet Stories
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {stories.map(({ id, name, pet, story, img }) => (
          <div
            key={id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <figure>
              <img src={img} alt={pet} className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm opacity-80">{story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyPetStories;
