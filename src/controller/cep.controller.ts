import { Request, Response } from "express"

const ApiNodeCorreios = require("node-correios")
const correios = new ApiNodeCorreios()


export const postCeps = async (req: Request, res: Response) => {
    const { cep } = req.body
    correios.consultaCEP({ cep }).then(result => {
        return res.json(result)
    }).catch(error => {
        return res.json(error)
    })
}

