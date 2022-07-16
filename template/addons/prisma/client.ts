// src/lib/prisma/client.ts
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prismaClient = new PrismaClient({ log: ["query"] });

export default prismaClient;
