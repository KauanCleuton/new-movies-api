import { Router } from "express";
import { listUser } from '../controllers/MoviesController'

const router = Router()

const user = []

router.get("/list", listUser)

export default router