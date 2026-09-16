import { Row, Col, Container, Card ,Image } from "react-bootstrap";
// import LeftBar from "./component/LeftBar"
// import RightSector from "./component/RightSector";
import SearchBar from "../../global_component/SearchBar";

function MoviesCard() {
  const BoxSize = {
    width: '300px', height: '400px'
  }
  
  return (
    <div style={BoxSize} className="border rounded-2">
      <img />
      <div>
        <h5>Title</h5>
        <div>* Star</div>
        <button>List +</button>
      </div>
    </div>
  )
}

export default function Home() {
  const StyleFixPosition = `
    w-100
    d-flex flex-column
    p-5
    justify-content-between align-items-center
  `

  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <section className={StyleFixPosition}>
        <h2>Find your next movie</h2>
        <SearchBar /> 
      </section>
      <section className={StyleFixPosition}>
        <div className="d-flex w-75 justify-content-between align-items-center">
          <h2>Popular Movies</h2>
          <button className="btn">
            {`View All >`} 
          </button>
        </div>
        <div className="d-flex gap-5">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
      </section>
    </div>    
  );
}