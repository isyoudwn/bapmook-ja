import app from "./express.js";
import { PORT } from "./config.js";
import { startCron } from "./scheduleHanlder.js";

app.listen(PORT, () => {
    console.log("server is running");
    startCron();
})
