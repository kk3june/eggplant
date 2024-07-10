import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function initialDB() {
    const user = await db.user.create({
        data: {
            username: 'jun'
        }
    })
    console.log(user)
}

initialDB();

export default initialDB
