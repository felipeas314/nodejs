import express, { Express } from 'express'
import setupRoutes  from '../route';

export const setupApp = async (): Promise<Express> => {    
    console.log('1111111111111111111111111111111d')
    const app = express()
    setupRoutes(app)

    return app
}