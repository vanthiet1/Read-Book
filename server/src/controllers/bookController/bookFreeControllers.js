const { BookFree, BookGenre } = require('../../models/home/BookModel');

const bookFreeController = {
    addBookFree: async (req, res) => {
        try {  
            const { categories } = req.body;
            const newBookFree = new BookFree(req.body);
            const savedBook = await newBookFree.save();
            const bookId = savedBook._id;

            for (const category of categories) {
            const genre  =  await BookGenre.findOneAndUpdate(
                    { name: category.name },
                    { $push: { books: bookId } },
                    { new: true, upsert: true } 
                );
                savedBook.genres.push(genre._id);
            }
            await savedBook.save();
            res.status(200).json(savedBook);
        } catch (error) {
            console.error("Error adding book:", error);
            res.status(500).json("Internal Server Error");
        }
    },
    
    

    getBookFree: async (req, res) => {
        try {
            const getAllBooks = await BookFree.find();
            res.status(200).json(getAllBooks);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAnBookFree: async (req,res)=>{
        try {
           const id = req.params.id;
           const product = await BookFree.findById(id);
           if (!product) {
               return res.status(404).json({ error: 'Product not found' });
             }
             res.json(product);
        } catch (error) {
           res.status(500).json(error)
        }
      },

    getBookGenre: async (req,res)=>{
        try {
            const getBookGenre = await BookGenre.find();
            res.status(200).json(getBookGenre);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = bookFreeController;
