import { Schema, model } from 'mongoose'
import { User } from './user.interface'

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
)

const User = model('User', userSchema)

export default User
