import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import exhibitionsRoute from './routes/exhibitions.js'
import usersRoute from './routes/users.js'
import reviewsRoute from './routes/reviews.js'
import searchRoute from './routes/search.js'

const app = express()
const PORT = process.env.port || 8080

app.use(express.json())
app.use(cors())
app.use('/public/images', express.static('public/images'))
app.use('/exhibitions', exhibitionsRoute)
app.use('/users', usersRoute)
app.use('/reviews', reviewsRoute)
app.use('/search', searchRoute)

app.listen(PORT, () => {
    console.log("Server is running on port 8080")
})