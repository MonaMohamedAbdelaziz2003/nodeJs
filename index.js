const express = require("express"); //call library

const app = express()
console.log("-----------------------");
// route 
app.get("/", (req, res) => {
    res.send("hello");
})
app.get("/hi", (req, res) => {
    res.send("hi");
})
app.get("/hi2/:num1/:num2", (req, res) => {
        console.log(req.params)
        console.log(req.body)
            // res.send(req.params);
            // json filw 
            // res.json({
            //     name: "mona",
            //     age: 20
            // })
            // res.send("<h1>mona mohamed</h1>") //htm
            // res.sendFile(__dirname + "/views/num.html") //htm1
        res.render("num.ejs", {
            name: "mona"
        })
    })
    // 
app.listen(8000, () => { // 8000 => port is gate in server  opining to send your request
    console.log("iam listening in port 8000")
})

//connect to Db

const mongoose = require("mongoose"); //call library
mongoose.connect("mongodb+srv://monaMongoDb:b!U5WedPWnYMt-J@cluster0.jhmjuvh.mongodb.net/?retryWrites=true&w=majority").then((conn) => {
        console.log(`connection is ${conn.connection.host}`);
    })
    .catch((error) => {
        console.log("error")
    })
    // //
const article = require("./models/artical");

app.get("/article", async(req, res) => {
    const resl = await article.find();
    res.json(resl)
})
app.delete("/article/:articleId", async(req, res) => {
    const id = req.params.articleId
    const user = await article.findByIdAndDelete(id)
        // const user1 = await article.findById(id)
    res.json(user)
})
app.get("/allarticle", async(req, res) => {
    const user = await article.find()
        // res.json(user)
    res.render("article.ejs", {
        allarticle: user
    })
})

app.post("/article", async(req, res) => {
    const newArticle = new article();
    const artTitle = req.body.name;
    const artBody = req.body.age;

    newArticle.titel = "artTitle";
    newArticle.body = "artBody";
    newArticle.save();

    res.json(newArticle);
})