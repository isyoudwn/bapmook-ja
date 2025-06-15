import nodeCron from "node-cron";
import { sendMessageToSlack } from "./slackHandler.js";
import { getMenu } from "../presentation/menuController.js";
import MenuError from "../domain/menu/MenuError.js";
import { TIME_ZONE } from "./time.js";

const startCron = () =>
    nodeCron.schedule('10 11 * * 1-5', async () => {
        try {
            console.log("[11:10] 트리거");
            const todayMenus = await getMenu();
            sendMessageToSlack(todayMenus);

        } catch (error) {
            if (error instanceof MenuError) {
                console.log(error.message);
            }
            else {
                console.log("예상치 못한 에러 : ", error)
            }
        }
    },
    {
        timezone: TIME_ZONE
    });

export { startCron }
