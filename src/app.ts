import express, { Application, Request, Response } from 'express'
import { userRouter } from './modules/user/user.route'

const app: Application = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use('/api/v1/user', userRouter)

export default app
