import db from "../../../utils/db.js"
import bcrypt from "bcrypt"
import User from "../../../models/User.js"


export async function POST(req){
    try {
        await db.connection()
        const {username, email, password: pass} = await req.json()
        const isExisiting  = await User.findOne({email})
        if(isExisiting){
            throw new Error("User Already Exists")

        }

        const hashPassword = await bcrypt.hash(pass, 10)
        const newUser = await User.create({username, email, password: hashPassword})
        const {password, ...user} = newUser._doc
        return new Response(JSON.stringify(user), {status: 200})
    } catch (error) {
        return new Response (JSON.stringify(error.message), {status: 500})

    }
}