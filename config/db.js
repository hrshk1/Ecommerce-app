import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config()
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb database ${conn.connection.host}`.bgMagenta.white)  
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}
export default connectDB
//default is used when you export only one thing from whole file and u dont need to use {} on the import file since there is just one thing 