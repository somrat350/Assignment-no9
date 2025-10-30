import Aos from "aos";
import { useEffect } from "react";
import { FaSnowflake } from "react-icons/fa";

const tips = [
  {
    id: 1,
    title: "Keep Paws Protected",
    description:
      "Use paw balm and booties to protect against ice, salt, and cold surfaces. Check paws regularly for cracks or irritation.",
  },
  {
    id: 2,
    title: "Maintain Hydration",
    description:
      "Ensure fresh water is always available. Dehydration is common in winter due to dry indoor heating.",
  },
  {
    id: 3,
    title: "Limit Outdoor Time",
    description:
      "Reduce time outside in extreme cold. Short, frequent walks are better than long exposure to freezing temperatures.",
  },
  {
    id: 4,
    title: "Provide Warm Shelter",
    description:
      "Create a cozy, insulated space indoors. Use blankets and beds away from drafts and cold windows.",
  },
  {
    id: 5,
    title: "Watch for Signs of Cold",
    description:
      "Look for shivering, reluctance to go outside, or seeking warmth constantly. These indicate your pet is too cold.",
  },
  {
    id: 6,
    title: "Regular Grooming",
    description:
      "Maintain a healthy coat for insulation. Professional grooming helps prevent matting and skin issues.",
  },
];

const WinterTips = () => {
  useEffect(()=>{
      Aos.init()
    },[])
  return (
    <section data-aos="fade-up" className="py-16 px-5">
      <div className="flex items-center justify-center gap-2 mb-4">
        <FaSnowflake className="text-accent" size={28} />
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Winter Care Tips for Pets
        </h2>
        <FaSnowflake className="text-accent" size={28} />
      </div>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Essential guidance to keep your furry friends healthy and happy during
        the cold months
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-card p-6 rounded-lg border border-border hover:border-primary hover:scale-105 duration-300"
          >
            <h3 className="font-bold text-lg mb-3 text-primary">{tip.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterTips;
