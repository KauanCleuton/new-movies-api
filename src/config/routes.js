import { Router } from "express";
import User from '../controllers/user.controller.js'
import Auth from '../middleware/verify.middleware.js'
import movies from '../controllers/MoviesController.js'
const router = Router()


router.get("/list",User.listUser)
router.post("/createUser", User.register )
router.post("/login", User.login)
router.post("/add", Auth.Verify, movies.addTask)

export default router