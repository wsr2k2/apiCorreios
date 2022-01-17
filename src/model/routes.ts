import { Router, Request, Response } from "express"

import { postCeps } from "../controller/cep.controller"
const routes = Router()

routes.post('/cep', postCeps)

export default routes

