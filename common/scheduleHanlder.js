import nodeCron from "node-cron";
import { sendMessageToSlack } from "./slackHandler.js";
import { getMenu } from "../presentation/menuController.js";
import MenuError from "../domain/menu/MenuError.js";

const startCron = () => nodeCron.schedule('30 9 * * 1-5', async () => {
    try {
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
});

/**
 * 테스트용 cron
 */
// const startCron = () => nodeCron.schedule('0 * * * * *', async () => {
//     try {
//         const todayMenus = await getMenu();
//         sendMessageToSlack(todayMenus);

//     } catch (error) {
//         if (error instanceof MenuError) {
//             console.log(error.message);
//         }
//         else {
//             console.log("예상치 못한 에러 : ", error)
//         }
//     }
// });

export { startCron }
