

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send({
        message: "Hello World!",
    })
});

app.listen(8000, () => {
    console.log("app listening on port 8000")
})
