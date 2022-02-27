import { PrismaClient } from "@prisma/client";

// npx prisma generate - type 생성
// export default new PrismaClient();

const client = new PrismaClient();

client.user.create({
  data: {
    name: "yujin",
    password: "123",
  },
});
