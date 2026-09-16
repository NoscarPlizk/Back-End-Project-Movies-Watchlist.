import { Card, Row, Col } from 'react-bootstrap';

export default function SearchBar() {
  const BorderRadius = '5px'

  return (
    <div className='d-flex gap-3'>
      <input 
        type='text'
        placeholder='Search and save movies you want to watch'
        style={{ width: '600px', height: '50px', borderRadius: BorderRadius }}
      />
      <button
        onClick={() => XXX()}
        style={{ width: '100px', height: '50px', borderRadius: BorderRadius }}
      >
        Search
      </button>
    </div>
  )
}