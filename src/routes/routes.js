const express = require("express")
const router = express.Router()
const {visitCounter, numberOfcount} = require("../middleware/url_visit_counter")
const {commission} = require("../controllers/sales_commission")

router.get('/visit', visitCounter, numberOfcount)

router.post('/commission', commission)


module.exports = router