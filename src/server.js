import Hapi, { server } from "@hapi/hapi";

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
