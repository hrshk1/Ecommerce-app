//we'll craete two functions in it 
//first will be for hashing //second for comparing passwords

import bcrypt from 'bcrypt'

export const hashPassword =async(password)=>{
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password,hashedPassword)
}