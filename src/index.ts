import express from "express";
import prisma from "../lib/prisma";

const server = express();
const port = 3333

server.get("/", async (req, res) => {
  const user = await prisma.user.findMany()

  return res.json(user).status(201)
})

server.listen(port, ()=>{
  console.log(`Servidor rodando na porta ${port}`)
})