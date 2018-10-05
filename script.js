// const HTTPClient = require('./httpClient.js');
// let url = 'http://jservice.io/api/category?id=';
// const categoriesArray = [777, 780, 21, 105, 25, 306, 136, 680, 309, 2537, 1470, 18065, 6145, 9646, 15090, 499, 42, 7, 78, 211, 420, 176];
// const categoryPromises = categoriesArray.map(id => HTTPClient(url + id))
// const fs = require('fs');


const express = require('express')
const app = express()
const categories = require ("./categories.json")

app.use(express.json())
app.get('/api/category/:id', (req, res) => {
    console.log('inside app.get')
    const requestedCategory = categories.find(category => category.id == req.params.id)
    console.log(requestedCategory)
    res.send(requestedCategory)
})

app.listen(3000, ()=> console.log("Michael is GOD!"))

// Promise.all(categoryPromises)
//     .then(categories =>
//         fs.writeFileSync('./categories.json', JSON.stringify(categories))
//     )