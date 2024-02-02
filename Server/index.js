import express from 'express';
import { connectDataBase } from './db/db.js';
import { authRouter } from './routes/authRouter.js';
import { doctorRoutes } from './routes/doctorRoutes.js';
import { servicesRouter } from './routes/servicesRoutes.js';
import { videosRouters } from './routes/videosRoutes.js';
import { blogsRouters } from './routes/blogsRoutes.js';
import { contactRouter } from './routes/contactRoutes.js';
import uploader from './utils/uploader.js';
import authMiddleware from './middelware/authAdmin.js';
import cors from 'cors';
import path from 'path';
import { userRouters } from './routes/userRoutes.js';
import { faqRouters } from './routes/faqRoutes.js';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const clint_path = path.join(__dirname, "../dist");
const app = express();

// Use express.json() instead of app.json()
app.use(
    express.json(),
    express.static('./static'),
    express.static("./dist"),
    cors(),
    authRouter,
    doctorRoutes,
    servicesRouter,
    videosRouters,
    blogsRouters,
    contactRouter,
    userRouters,
    faqRouters,
);

app.post("/api/upload", authMiddleware, uploader.single("file"), async (req, res) => {
    return res.send(req.file)
});

app.get("/*", async (req, res) => {
    return res.sendFile(path.join(clint_path, 'index.html'));
});

connectDataBase().then(() => {
    app.listen(8080, () => {
        console.log('Server Start On Port 8080');
    });
}).catch((e) => console.log(e),);
