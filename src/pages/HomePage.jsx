import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <section id="section1">
        <h1 className="main-Header">Discover the Undefeated City</h1>
        <p>Search Destination</p>
      </section>
      <section id="section2">
        <div className="section2-image"></div>
        <div className="section2-text">
          <h2 className="header2nd">Porto</h2>
          <p>
            Porto is Portugal’s second-largest city, perched along the steep
            banks of the Douro River. Renowned for its colorful Ribeira district
            and the iconic Dom Luís I Bridge, it blends medieval charm with a
            vibrant cultural scene. Porto is the birthplace of port wine, whose
            cellars line the river’s opposite shore, and its UNESCO-listed
            historic center offers narrow cobbled streets, baroque churches, and
            lively cafés. With a backdrop of terracotta rooftops and the
            Atlantic mist on the horizon, Porto captures the romance of
            old-world Europe in every sunset-lit vista.
          </p>
        </div>
      </section>
      <section id="section3">
        <h2 className="section3-mainHeader">Featured Destinations</h2>
        <div id="card-container">
          <div className="card">
            <Link to="/destination/1">
              <img
                src="https://porto.travel/wp-content/uploads/sites/17/2018/03/ribeira-oporto-1-scaled.jpeg"
                alt="Ribeira"
                className="featured-img"
              />
            </Link>
            <h2 className="featured-header">Ribeira</h2>
            <p className="featured-p">
              Ribeira is Porto’s atmospheric riverside district, where narrow
              medieval alleyways and pastel-hued townhouses cascade down to the
              banks of the Douro. Lively cafés and traditional rabelo boats line
              the waterfront esplanade, while steep, winding staircases lead up
              through a maze of historic façades and hidden squares.Including
              some of porto most famous and historic places like Aliados
              clerigos or the lello livrary tower is by day, the sunlit Ribeira
              buzzes with markets and river cruises; at night, its lantern-lit
              streets reveal a more intimate, timeless charm.
            </p>
          </div>
          <div className="card">
            <Link to="/destination/4">
              <img
                src="https://sol.sapo.pt/wp-content/uploads/2024/08/praiamatosinhos.dreamstime-scaled.jpg"
                alt="Foz do Douro"
                className="featured-img"
              />{" "}
            </Link>
            <h2 className="featured-header">Foz do Douro</h2>
            <p className="featured-p">
              Foz do Douro is a scenic coastal district in Porto where the Douro
              River meets the Atlantic Ocean. Known for its elegant seaside
              promenades, charming cafés, and peaceful atmosphere, it's a
              perfect escape from the city's hustle. With picturesque
              lighthouses, sandy beaches, and stunning sunsets, Foz offers a
              refined and relaxing side of Porto. Perguntar ao ChatGPT
            </p>
          </div>
          <div className="card">
            <Link to="/destination/11">
              <img
                src="https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/N4.OTR1540D.jpg?itok=Zl2GULoZ"
                alt="Casa da Música"
                className="featured-img"
              />
            </Link>
            <h2 className="featured-header">Casa da Música</h2>
            <p className="featured-p">
              Casa da Música is Porto’s iconic modern concert hall, designed by
              architect Rem Koolhaas. With its bold geometric design and
              world-class acoustics, it hosts an eclectic mix of performances,
              from classical orchestras to contemporary bands. Its striking
              architecture has become a symbol of Porto’s vibrant cultural
              scene.
            </p>
          </div>
          <div className="card">
            <Link to="/destination/5">
              <img
                src="https://porto.travel/wp-content/uploads/sites/17/2018/02/barrio-se-oporto-1-1024x683.jpeg"
                alt=" Cathedral of Porto"
                className="featured-img"
              />
            </Link>
            <h2 className="featured-header"> Cathedral of Porto</h2>
            <p className="featured-p">
              Sé (Cathedral District) is one of the oldest and most historic
              areas in Porto, centered around the city’s majestic Sé Cathedral.
              Perched on a hill, it offers stunning views over the Douro River
              and the red-tiled rooftops of Ribeira. With narrow, winding
              streets, ancient stone buildings, and a medieval atmosphere, it’s
              a place where Porto’s past feels alive.
            </p>
          </div>

          <div className="card">
            {" "}
            <Link to="/destination/3">
              <img
                src="https://midias-turismo.eurodicas.com.br/wp-content/uploads/2025/02/palacio-de-cristal-no-porto-1-1200x800.jpg.webp"
                alt=" Crystal Palace Gardens"
                className="featured-img"
              />{" "}
            </Link>
            <h2 className="featured-header"> Crystal Palace Gardens</h2>
            <p className="featured-p">
              Crystal Palace Gardens (Jardins do Palácio de Cristal) are lush,
              romantic gardens in the heart of Porto, known for their
              breathtaking views over the Douro River and Gaia. Filled with
              winding paths, fountains, peacocks, and themed gardens, it's a
              peaceful escape ideal for relaxing walks, picnics, and panoramic
              photos.
            </p>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="section4-text">
          <h3>
            Know a hidden gem? <br /> Add your destination!
          </h3>

          <Link to="/add-destination">
            <button>Add you destination</button>
          </Link>
        </div>
        <div className="section4-image"></div>
      </section>
    </div>
  );
}

export default HomePage;
