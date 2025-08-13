import Link from "next/link";

const services = [
  { category: 'General', description: 'Complete dental care with advanced laser technology and anxiety management', image: '', clip: 'https://videos.pond5.com/3d-water-flosser-isolated-white-footage-297194018_main_xxl.mp4', url: "general" },
  { category: 'Cosmetic', description: 'Professional teeth whitening and bonding for a confident, beautiful smile', image: '', clip: 'https://videos.pond5.com/diastema-closure-using-bonding-procedure-footage-256220910_main_xxl.mp4', url: "cosmetic" },
  { category: 'Root Canal', description: 'Pain-free root canal therapy to save and restore infected teeth', image: '', clip: 'https://videos.pond5.com/endodontic-root-canal-treatment-process-footage-144660364_main_xxl.mp4', url: "general" },
  { category: 'Orthodontics', description: 'Custom braces and clear aligners for perfectly straight, healthy smiles', image: '', clip: 'https://videos.pond5.com/dental-braces-placement-orthodontic-treatment-footage-220927127_main_xxl.mp4', url: "orthodontics" },
  { category: 'Oral Surgery', description: 'Expert dental implants and extractions with precision surgical techniques', image: '', clip: 'https://videos.pond5.com/extraction-damaged-tooth-footage-236101351_main_xxl.mp4', url: "surgery" },
  { category: 'Halitosis', description: 'Effective bad breath treatment targeting root causes for lasting freshness', image: '', clip: 'https://videos.pond5.com/3d-animation-stylized-teeth-jaw-footage-145351310_main_xxl.mp4', url: "general" },
  { category: 'Same Day Emergency', description: 'Immediate dental care for accidents, injuries, and urgent pain relief', image: '', clip: 'https://videos.pond5.com/3d-animation-tooth-pain-featuring-footage-310166318_main_xxl.mp4', url: "emergency" },
  { category: 'Restorative', description: 'Durable crowns, bridges, and dentures restoring function and natural appearance', image: '', clip: 'https://videos.pond5.com/dental-bridge-based-2-teeth-footage-221912342_main_xxl.mp4', url: "restorative" },
]

const Figure = ({ media }) => (
  <figure>
    <video
      src={media.clip}
      poster={media.img || "https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"}
      autoPlay
      loop
      muted
      playsInline
    >
      Your browser does not support the video tag
      <img
        src={media.img || "https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"}
        alt={media.description.split(' ').slice(0, 10)}
      />
    </video>
    <figcaption>
      <Link href={`services/${media.link}`} >
        <h3>{media.category}</h3>
      </Link>
      <p>{media.description}</p>
    </figcaption>
  </figure>
)

const BentoGrid = ({ services: [] = services }) => (
  <div class="grid">
    {services.slice(0, 8).map((service, index) => (
      <div class="box" style={{ gridArea: `box-${index + 1}` }}>
        <Figure media={service} key={index} />
      </div>
    ))}
  </div>
)

export default BentoGrid;