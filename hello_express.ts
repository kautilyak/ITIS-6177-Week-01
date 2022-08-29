import express from "express"

const app = express();
const PORT = 3000;


app.get('/', (req: any, res: any, next): void => {
    res.send("Hello world from express!");
});

app.listen(PORT, (): void => {
    console.log(`Express listening on ${PORT}`);
})