import express from "express";


//Import different routes
import moveRoutes from "./routes/movieRoutes.js"

const app = express()

app.get("/", (_req,res) => {
    res.json({
        "success": true,
        "message": "this is a small Marvel Cinematic Universe API !!!"
    })
})

app.use("/api/movies", moveRoutes)

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})