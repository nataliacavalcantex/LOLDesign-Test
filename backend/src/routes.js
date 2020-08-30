import {Router} from 'express'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import PlanController from './app/controllers/PlanController'
import PlaceController from './app/controllers/PlaceController'
import authMidlleware from './app/middlewares/auth'
const routes = Router()

routes.post('/users',UserController.store)
routes.post('/login',SessionController.store)
routes.get('/place/:id',PlaceController.index)
routes.get('/places',PlaceController.show)

routes.get('/plan/:id',PlanController.index)
routes.get('/plans',PlanController.show)

routes.use(authMidlleware)



export default routes