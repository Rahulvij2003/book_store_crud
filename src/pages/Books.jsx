import React, { useEffect , useState } from 'react'
import axios from 'axios'
import BooksSection from '../components/BooksSection';

const Books = () => {
  const [Data, setData] = useState([]); 
  useEffect(() => {
    const fetch = async () => {
      const response =  await axios
      .get('http://localhost:1000/api/v/getbooks')
      // .then((res) => console.log('dataBook',res.data.books));
      console.log('response', response.data.books)
      setData(response.data.books);
    };
    fetch();
  });
  console.log('Data', Data) 
  return (
    <div className='bg-dark' style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className='text-white'>Books Section</h4>
      </div>

      {Data ? <BooksSection data={Data}/> : <div className='text-white'>Loading...</div>}
      
    </div>
  )
}

export default Books
