import React, { useState } from 'react'
import './AddBooks.css'
import axios from "axios"

const AddBooks = () => {

  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",

  });

  const change = (e) => {
    const {name, value} = e.target;
    setData({ ...Data, [name]: value});
  };
  
  // console.log(Data);

  const submit = async (e) => {
    e.preventDefault();
    await axios
    .post("http://localhost:1000/api/v/add", Data)
    .then((res) => alert(res.data.message));

    setData({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",

    })
  };

// console.log(Data);

  return (
    <div>
      

      <div class="container">
        <form action="action_page.php">

            <label for="fname">Book Name</label>
            <input type="text" id="fname" name="bookname" placeholder="Your name.." onChange={change} value={Data.bookname}/>

            <label for="lname">Author Name</label>
            <input type="text" id="lname" name="author" placeholder="Your last name.." onChange={change} value={Data.author}/>

            

            <label for="subject">Description</label>
            <textarea id="subject" name="description" placeholder="Write something.." onChange={change} value={Data.description} style={{height: "200px"}}/>

            <label for="lname">Image URL</label>
            <input type="text" id="lname" name="image" placeholder="Your last name.." onChange={change} value={Data.image}/>

            <label for="lname">Price</label>
            <input type="text" id="lname" name="price" placeholder="Your last name.." onChange={change} value={Data.price}/>

            <input type="submit" onClick={submit} value="Submit"/>

        </form>
      </div>
    </div>
  )
}

export default AddBooks
