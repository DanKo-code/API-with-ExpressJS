import express from 'express'

const port = 8000
const app = express()

app.all('/hello', (req, res, next) => {
    console.log('All')
    next()
})

const cb = (req, res, next) => {
    console.log('CB')
    next()
}

// app.get('/hello', [cb, cb, (req, res) => {
//     res.send('Hello!')
// }])

//ERROR???
app.route('/user')
    .get('/hello', (req, res) => {
        res.send('Hello!')
    })
    .post('/hello', (req, res) => {
        res.send('Hello POST')
    })

app.listen(port, () => {
    console.log(`Server launched on http://localhost:${port}`)
})