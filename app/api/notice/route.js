import Notice from "@models/notice";
import { connectToDB } from "@utils/database";


export const GET = async (request) => {
    try {
        await connectToDB()

        const notices = await Notice.find({}).populate('creator')

        return new Response(JSON.stringify(notices), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all notices", { status: 500 })
    }
} 