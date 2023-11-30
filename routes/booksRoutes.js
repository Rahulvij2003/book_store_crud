const router = require("express").Router();
const bookModel = require("../models/booksModel");

router.post("/add", async(req, res,next) => {
    try{
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ message: "Book Added Sucessfully"});
        });


    }
    catch(error){

    }
next()

});

// router.post("/add", async(req, res,next) => {
//     try{
//         const data = req.body;
//         const newBook = new bookModel(data);
//         await newBook.save().then(() => {
//             res.status(200).json({message: "Book added"});
//         });
//     }
//     catch(error){

//     }
//     next()
// });


router.get("/getbooks", async(req, res) => {
    let books;
    try{
        books = await bookModel.find();
        res.status(200).json({books});


    }catch(error){
        console.log("error");

    }

})

// router.get("/getbooks", async(req,res) => {
//     let books;
//     try{
//         books = await bookModel.find();
//         res.status(200).json({books});
//     }
//     catch(error){
//         console.log("error");
//     }
// })


// get request by id

router.get("/getbooks/:id", async(req, res) => {
    let book;
    const id = req.params.id;
    try{
        book = await bookModel.findById(id);
        res.status(200).json({book});

    }catch(error){
        console.log("error");
    }
})


//UPDATE

// router.put("/updatebook/:id", async(req, res) => {
//     const id = req.params.id;
//     const {bookname, description, author, image, price} = req.body;
//     let book;
//     try{
//         book = await bookModel.findByIdAndUpdate(id, {
//             bookname,
//             description,
//             author,
//             image,
//             price
//         });

//         await book.save().then(()=>res.send(200).json({message: "Data updated sucessfully"}));

//     }catch(error){
//         console.log("error");
//     }

// })

router.put("/updatebook/:id", async(req,res) => {
    const id = req.params.id;
    const {bookname, description, author, image, price} = req.body;
    let book;
    try{
        book = await bookModel.findByIdAndUpdate(id, {
            bookname,
            author,
            description,
            image,
            price
        });
        await book.save().then(() => res.send(200).json({message: "data updated"}));
    }
    catch(error){
        console.log("error");
    }
})



//DELETE

router.delete("/deleteBook/:id", async(req,res) => {
    const id = req.params.id;
    let book;
    try {
        book = await bookModel.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });

})


module.exports = router;