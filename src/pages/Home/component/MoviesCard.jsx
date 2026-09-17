import { useNavigate } from "react-router-dom"

export default function MoviesCard({ movies }) {
  const MainBoxSize = { width: '300px', height: '400px' }
  const ImageBoxSize = { width: '300px', height: '300px' }
  
  const redirect = useNavigate();

  return (
    <div style={MainBoxSize} className="border rounded-2">
      <button onclick={() => redirect('/movies')}>
        <img
          src='https://media.istockphoto.com/id/483147951/photo/zen-garden.jpg?s=2048x2048&w=is&k=20&c=Q_XEAjqzoHAZygtlOxwp_palO2jF20dU0KVwEZebj0Y='
          className="object-fit-cover"
          style={ImageBoxSize}
        />
      </button>
      <div>
        <div>* Star</div>
        <h5>Title</h5>
        <button>List +</button>
      </div>
    </div>
  )
}