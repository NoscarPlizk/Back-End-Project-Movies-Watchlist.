export default function MoviesCard_Sample() {
  const MainBoxSize = { width: '300px', height: '400px' }
  const ImageBoxSize = { width: '300px', height: '300px' }
  
  return (
    <div style={MainBoxSize} className="border rounded-2">
      <button 
        className="border-0"
        onclick={() => redirect('/movies')}
      >
        <img
          src='https://media.istockphoto.com/id/483147951/photo/zen-garden.jpg?s=2048x2048&w=is&k=20&c=Q_XEAjqzoHAZygtlOxwp_palO2jF20dU0KVwEZebj0Y='
          className="object-fit-cover"
          style={ImageBoxSize}
        />
      </button>
      <div>
        <h5>Title</h5>
        <div>* Star</div>
        <button>List +</button>
      </div>
    </div>
  )
}