import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(path.resolve(), "src")));

app.listen(8080, () => console.log("server running ..."));
