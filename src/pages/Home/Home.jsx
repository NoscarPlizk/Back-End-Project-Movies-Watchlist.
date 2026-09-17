import { Row, Col, Container, Card ,Image } from "react-bootstrap";
// import LeftBar from "./component/LeftBar"
// import RightSector from "./component/RightSector";
import SearchBar from "../../global_component/SearchBar";
import MoviesSector from "./component/MoviesSector";

export default function Home() {
  const StyleFixPosition = `
    w-100
    d-flex flex-column
    p-5
    justify-content-between align-items-center
  `
  const Maybe = 'A'

  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <section className={StyleFixPosition}>
        <h2>Find your next movie</h2>
        <SearchBar /> 
      </section>
      <MoviesSector headers={'Popular Movies'} movieAPIlink={undefined}/>    
    </div>    
  );
}