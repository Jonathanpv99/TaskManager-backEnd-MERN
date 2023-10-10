
import app from "./app.js";
import {conetDB} from "./bd.js";

conetDB();

app.listen(3000)
console.log('server on port', 3000)