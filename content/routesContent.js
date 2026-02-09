const routesContent = `import e from "express"
const router = e.Router()

// Example Middleware
import log from '../middlewares/exMiddleware.js'

// Example Controllers
import welcomePage from '../controllers/exController1.js'
import apiTest from '../controllers/exController2.js'

// Add your routes here
router.get('/', log, welcomePage)
router.get('/api/test', apiTest)

export default router
`;

export default routesContent