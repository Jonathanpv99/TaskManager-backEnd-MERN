
import app from "./app.js";
import {conetDB} from "./bd.js";

conetDB();

app.listen( process.env.PORT || 3000 )
console.log('server on port', process.env.PORT || 3000 )