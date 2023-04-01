import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

type Context = {
  response: {
    body: string;
  };
};

router.get("/", (stx: Context) => {
  stx.response.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
