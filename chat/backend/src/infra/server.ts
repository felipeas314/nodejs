import express, { Express } from 'express'
import setupRoutes  from '../route';

export const setupApp = async (): Promise<Express> => {    
    const app = express()
    setupRoutes(app)

    return app
}