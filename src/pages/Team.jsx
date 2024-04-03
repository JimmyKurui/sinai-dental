import Banner from "../components/ui/Banner";
// import { useState, useEffect } from "react";
// import { useIntersectionObserver } from "react-intersection-observer";

const Team = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const observer = useIntersectionObserver(
  //   document.querySelector("#team-section"),
  //   {
  //     threshold: 0.5,
  //     rootMargin: "0px 0px -50% 0px",
  //   },
  //   (entries) => {
  //     if (entries[0].isIntersecting) {
  //       setIsVisible(true);
  //     }
  //   }
  // );

  // useEffect(() => {
  //   observer()

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      <Banner message="Team" />

      <section id="team-section">
        <div className="container">
          <h2 className="text-center">Meet The Team</h2>
          <div className="row team-member">
            <div className="team-member-figure col-12 col-md-6">
              <img
                src="https://via.placeholder.com/300x300"
                alt="Team Member"
                // className={`team-member team-member-image ${
                //   isVisible ? "fade-in-bottom" : ""
                // }`}
              />
            </div>
            <div className="team-member-description col-12 col-md-6">
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor lectus nibh.
              </p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-md-6">
              <img
                src="https://via.placeholder.com/300x300"
                alt="Team Member"
                // className={`team-member team-member-image ${
                //   isVisible ? "fade-in-bottom" : ""
                // }`}
              />
            </div>
            <div className="team-member-description col-12 col-md-6">
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor lectus nibh.
              </p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-md-6">
              <img
                src="https://via.placeholder.com/300x300"
                alt="Team Member"
                // className={`team-member team-member-image ${
                //   isVisible ? "fade-in-bottom" : ""
                // }`}
              />
            </div>
            <div className="team-member-description col-12 col-md-6">
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor lectus nibh.
              </p>
            </div>
          </div>

          <div className="row team-member">
            <div className="team-member-figure col-12 col-md-6">
              <img
                src="https://via.placeholder.com/300x300"
                alt="Team Member"
                // className={`team-member team-member-image ${
                //   isVisible ? "fade-in-bottom" : ""
                // }`}
              />
            </div>
            <div className="team-member-description col-12 col-md-6">
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                porttitor lectus nibh.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="news-gallery-section">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              {/* Temporary */}
              <div className="sample-news-wrapper" style={{ height: '350px', overflowY: 'hidden', margin: '50px 30px 0'}}>
                <img
                  src="src\assets\img\team\sample-team-news-screenshot.png"
                  alt=""
                  width="60%"
                />
              </div>
              {/* <div className="article" style={{ 
  backgroundImage: 'url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}> */}
              {/* <img src="https://unsplash.com/photos/silhouette-of-three-women-running-on-grey-concrete-road-oGv9xIl7DkY" /> */}
            </div>
            {/* <div className="article h-75" style={{ backgroundImage: 'https://images.unsplash.com/photo-1598043596827-fd992a2f137a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hZ2F6aW5lfGVufDB8fDB8fHww'}}>article</div> */}

            {/* <div className="col">
              <div className="article h-75" style={{ backgroundImage: 'https://plus.unsplash.com/premium_photo-1682125304342-a49fba491087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hZ2F6aW5lfGVufDB8fDB8fHww'}}>article</div>
              <div className="article h-25" style={{ backgroundImage: 'https://cdn.dribbble.com/users/1522528/screenshots/15868832/media/5a8edeb3d9e9015acb8021b25974e939.jpg?resize=320x240&vertical=center'}}>article</div>
            </div>
            <div className="col">
              <div className="article h-25" style={{ backgroundImage: 'https://cdn.dribbble.com/users/1979832/screenshots/16040460/media/a6094dd49f0ce76a5038527f3e8c0269.png?resize=320x240&vertical=center'}}>article</div>
              <div className="article h-75" style={{ backgroundImage: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkJTIwY2xpbmljfGVufDB8fDB8fHww'}}>article</div>
            </div> */}
            {/* </div> */}
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
