import Fastify, { FastifyInstance } from "fastify";

const server: FastifyInstance = Fastify({});

server.get("/ping", async () => {
  return "pong";
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
