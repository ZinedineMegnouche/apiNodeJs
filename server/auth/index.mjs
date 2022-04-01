import jwt, { JsonWebTokenError } from "jsonwebtoken"
import fs from "fs"
import { json } from "body-parser"

const generateAccesToken = (data) => {
    if (!data) return null

    delete data.password
    return jwt.sign(data, process, env.TOKEN, { expiresIn: '1800s' })
}
const auth = (name, password) => {
    const file = fs.readFileSync('./users.json')
    const users = JSON.parse(file)
    const user = user.find((e) => e.name === name && e.password === password)

    return generateAccesToken(user)
}

export { auth }