import express, { Express, Request, Response } from 'express'
const port = 3000

const app: Express = express()

app.set('view engine', 'ejs')

app.get('/', (req: Request, res: Response) => {
  res.send("Hi")
})

// import kitchenRouter from './routes/kitchen.js'

// app.use('/kitchen', kitchenRouter)

app.listen(port)