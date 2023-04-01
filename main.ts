import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { page } from "./page.tsx";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
});

router.get("/about", (ctx) => {
  ctx.response.body = "About Page";
});

router.get("/page", (ctx) => {
  ctx.response.body = page({ title: "Page Title" });
});

app.use(router.routes());
app.use(router.allowedMethods());

// default 404 page
app.use((ctx) => {
  ctx.response.body = "Page not found";
  ctx.response.status = 404;
});

await app.listen({ port: 8000 });
