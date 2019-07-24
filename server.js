const express = require("express");
const next = require("next");
function readItemSlug(slug) {
  const ar = slug.split("-");
  const tempid = ar[ar.length - 1];
  const id = isNaN(tempid) ? 0 : tempid;
  return id;
}

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/gallery/:id", (req, res) => {
      const actualPage = "/gallery";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/detail/:id", (req, res) => {
      const actualPage = "/detail";
      // const parsedId = readItemSlug();
      const queryParams = { id: req.params.id };

      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
