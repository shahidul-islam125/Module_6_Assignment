const express = require('express')
const router = express.Router()


//Dependencies
const blogApi = require('../Controllers/blogController')
const blogDetailsApi = require('../Controllers/blogDetailsController')
const commentApi = require('../Controllers/commentController')
const messageApi = require('../Controllers/messageController')
const portfolioApi = require('../Controllers/portfolioController')
const productApi = require('../Controllers/productController')
const profitApi = require('../Controllers/profitController')
const projectApi = require('../Controllers/projectController')
const serviceApi = require('../Controllers/serviceController')
const titleApi = require('../Controllers/titleController')

//Blog API related router
router.get('/createBlog', blogApi.create)
router.get('/readBlog', blogApi.read)
router.get('/deleteBlog', blogApi.delete)
router.get('/updateBlog', blogApi.update)

//Blog Details API related router
router.get('/createBlogDetail', blogDetailsApi.create)
router.get('/readBlogDetail', blogDetailsApi.read)
router.get('/deleteBlogDetail', blogDetailsApi.delete)
router.get('/updateBlogDetail', blogDetailsApi.update)

//Comment API related router
router.get('/createComment', commentApi.create)
router.get('/readComment', commentApi.read)
router.get('/deleteComment', commentApi.delete)
router.get('/updateComment', commentApi.update)

//Message API related router
router.get('/createMessage', messageApi.create)
router.get('/readMessage', messageApi.read)
router.get('/deleteMessage', messageApi.delete)
router.get('/updateMessage', messageApi.update)

//Portfolio API related router
router.get('/createPortfolio', portfolioApi.create)
router.get('/readPortfolio', portfolioApi.read)
router.get('/deletePortfolio', portfolioApi.delete)
router.get('/updatePortfolio', portfolioApi.update)

//Product API related router
router.get('/createProduct', productApi.create)
router.get('/readProduct', productApi.read)
router.get('/deleteProduct', productApi.delete)
router.get('/updateProduct', productApi.update)

//Profit API related router
router.get('/createProfit', profitApi.create)
router.get('/readProfit', profitApi.read)
router.get('/deleteProfit', profitApi.delete)
router.get('/updateProfit', profitApi.update)

//Project API related router
router.get('/createProject', projectApi.create)
router.get('/readProject', projectApi.read)
router.get('/deleteProject', projectApi.delete)
router.get('/updateProject', projectApi.update)

//Service API related router
router.get('/createService', serviceApi.create)
router.get('/readService', serviceApi.read)
router.get('/deleteService', serviceApi.delete)
router.get('/updateService', serviceApi.update)

//Title API related router
router.get('/createTitle', titleApi.create)
router.get('/readTitle', titleApi.read)
router.get('/deleteTitle', titleApi.delete)
router.get('/updateTitle', titleApi.update)


//export the router
module.exports = router;