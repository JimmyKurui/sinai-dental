const serviceCategories = [
  'Cosmetic',
  'Dental Implants',
  'Restorative',
  'Braces',
  'Root Canal',
  'Oral Surgery',
  'Bridges',
  'Emergency',
]
const Figure = ({ serviceCategory }) => (
  <figure>
    <img
      src="https://i.pinimg.com/736x/72/5a/1c/725a1c1838b3a2d5d0291bbce9eba411.jpg"
      alt="" srcset=""
      className="img-fluid"
    />
    <figcaption>
      <h3>{serviceCategory}</h3>
      <p>Teeth whitening using dental imaging and scans to get the intial shape</p>
    </figcaption>
  </figure>
)

const BentoGrid = () => (
  <div class="grid">
    {Array.from({ length: 8 }).map((_, index) => (
      <div class="box" style={{ gridArea: `box-${index + 1}` }}>
        <Figure serviceCategory={serviceCategories[index]} />
      </div>
    ))}
  </div>
)

export default BentoGrid;