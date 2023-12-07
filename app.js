let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;

let path = require("path");

const postRouter = require('./routes/post.routes')
const pageRouter = require('./routes/page.routes')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended : false}))
app.use('',postRouter)
app.use('',pageRouter)

let createPath = (page) => path.join(__dirname, "views", `${page}.ejs`);

 app.listen(PORT, () => {
      console.log(`Server has been started on PORT ${PORT}...`);
 });
