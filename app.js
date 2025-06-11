import app from "./express.js";
import { PORT } from "./config.js";

app.listen(PORT, () => {
    console.log(PORT)
})
