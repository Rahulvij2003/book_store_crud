import React from 'react'

const BooksSection = ({data}) => {
    console.log(data);
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>

      {data && data.map((item,index) => (

        <div className="" style={{ width: "200px", height: "350px ", border: "1px solid white", borderRadius: "20px"}}>
          <img style={{ width: "200px", height: "210px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className='img-fluid' src={item.image} alt="/" />
          <h6 className='m-0 my-1 text-white' style={{fontSize: "15px"}}>{item.bookname.slice(0, 20)}...</h6>

          <b style={{fontSize: "30px"}} className='mb-2 px-2 text-white'>RS. {item.price}</b>

          <div className='d-flex justify-content-around align-items-center my-2'>
          <button className='btn btn-primary'>UPADTE</button>

          <button className='btn btn-danger'>DELETE</button>
          </div>
        
        </div>

      ))}
    </div>
  )
}

export default BooksSection;
