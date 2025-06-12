import app from "./domain/menu/express.js";
import { PORT } from "./common/config.js";
import { startCron } from "./common/scheduleHanlder.js";

app.listen(PORT, () => {
    console.log("server is running");
    startCron();
})
