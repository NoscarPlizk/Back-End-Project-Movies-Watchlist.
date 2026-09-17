import MoviesCard from "./MoviesCard"
import MoviesCard_Sample from "./MoviesCard_Sample"

export default function MoviesSector({
  headers, movieAPIlink
}) {
  const StyleFixPosition = `
    w-100
    d-flex flex-column
    p-5
    justify-content-between align-items-center
  `

  return (
    <section className={StyleFixPosition}>
      <div className="d-flex w-75 justify-content-between align-items-center">
        <h2>{headers}</h2>
        <button className="btn">
          {`View All >`} 
        </button>
      </div>
      <div className="d-flex gap-5">
        {((movieAPIlink !== undefined) && (movieAPIlink !== null)) ? 
          movieAPIlink.map((movies, index) => {
            return (
              <div key={index}>
                <MoviesCard movies={movies}/>
              </div>
            )
          })
          :
          <>
            <MoviesCard_Sample />
            <MoviesCard_Sample />
            <MoviesCard_Sample />
          </>
        }
      </div>
    </section>
  )
}