import express from 'express'
import { userRouter } from './users/users.js'

const port = 8000
const app = express()

app.get('/hello', (req, res) => {
    //res.download('/test.pdf')
    res.end()
})

app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server launched on http://localhost:${port}`)
})