import express from 'express'
const router = express.Router()

import { userSignup, userLoginIn } from '../controller/user-controller.js'
import { getProducts} from '../controller/product-controller.js'

router.post('/signup', userSignup)
router.post('/login', userLoginIn)

router.get('/products', getProducts)

export default router;