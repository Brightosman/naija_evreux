import Notice from "@models/blog";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, title, subTitle, image1Url, content1, image2Url, content2, image3Url, content3 } = await request.json();

    try {
        await connectToDB();
        const newBlog = new Blog({ creator: userId, title, subTitle, image1Url, content1, image2Url, content2, image3Url, content3 });

        await newBlog.save();
        return new Response(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new notice", { status: 500 });
    }
}