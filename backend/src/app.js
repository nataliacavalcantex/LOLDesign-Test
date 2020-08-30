import express from 'express'
import cors from 'cors'
import Youch from 'youch'
import routes from './routes'
import 'dotenv/config'
import './database'
class App{
    constructor(){
        this.server=express()
        this.middleware()
        this.routes()
        this.exceptionHandler()
    }
    middleware(){
        this.server.use(express.json())
    }
    routes(){
        this.server.use(cors({
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
          }))
        this.server.use(routes)
    }
    exceptionHandler(){
        this.server.use(async(err,req,res,next)=>{
          const errors = await new Youch(err,req).toJSON()
          return res.status(500).json(errors)
        })
      }

}

export default new App().server 