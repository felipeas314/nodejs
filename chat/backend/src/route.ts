import { Express, Router } from "express";
import { readdirSync } from 'fs'
import { join } from 'path'

export default (app: Express): void => {
    console.log('qwer')
    const router = Router()
    app.use('/api', router)
    readdirSync(join(__dirname, './routes')).map(async file => {
        console.log('file:',file)
        if (!file.endsWith('.map')) {
          (await import(`./routes/${file}`)).default(router)
        }
    })
}