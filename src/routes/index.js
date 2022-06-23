const errors = require("../middlewares/error")
const express = require('express');
const router = express.Router();
const authRouter = require('./auth/index')
const userRouter = require('./user/index')
const adminRouter = require('./admin/index')
const dataRouter = require('./data/index')
const {isLoggedin , isAdmin} = require("../middlewares/auth")


router.use('/auth', authRouter);
router.use('/user', isLoggedin ,userRouter)
router.use('/admin', isLoggedin , isAdmin ,adminRouter)
router.use('/data', dataRouter);


router.use(errors)



module.exports = router;