import express from "express";
const PORT = 3056;
const app = express();

app.get ("/", (req, res) => {
res.send("Hello There!");
});

app.get ("/mouse", (req,res) => {
res.send("Look on your right side,on the desk!");


});

app.listen(PORT,() => {
    console.log(`Listening on port http://localhost:${PORT}`);
})