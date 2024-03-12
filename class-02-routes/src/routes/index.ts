import { Router } from "express";

export const router = Router()
router.get("/", (_req, res) => {
    res.send({name: "Mauricio Gomes"})
})


router.get("/pokemon", (_req, res) => {
    res.send([
        {id: 1, name: "Bulbasaur"},
        {id: 150, name: "Mew"},
        {id: 6, name: "Charizard"},
    ])
})