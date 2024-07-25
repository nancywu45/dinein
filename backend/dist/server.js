import express from 'express';
const port = 3000;
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send("Hi");
});
app.listen(port);
//# sourceMappingURL=server.js.map