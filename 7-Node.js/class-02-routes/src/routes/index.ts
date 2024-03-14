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


// orute params (obrigatório)
router.get("/user/:id", (req, res) =>{
    const { id } = req.params
res.send({ id })
})
//query params (optional)

router.get("/user", (req, res) => {
    const {id, name, age }= req.query
res.send({id, name, age})

})
//body params

router.post("/user", (req, res) => {
    const{id, name,age} = req.body
   console.log({id, name,age})
   res.send({status: "User create!"})
})