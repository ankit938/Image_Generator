const imageModel = require("../models/imageModel");
// const fetch =require('node-fetch');
const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
        const res = await fetch(`https://loremflickr.com/320/240/${searchText}`);
        imageUrl  =  res.url;   

        await imageModel.create({
            searchText: searchText,
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            status: 'error',
            message: 'An error occurred while generating the image'
        });
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageUrl,
        }
    })
}

module.exports = {
    generateImage
}