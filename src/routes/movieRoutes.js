import express from "express";

const router = express.Router();

router.get("/all", (_req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Here is a list of all the movies from mcu."
    })
})


export default router;