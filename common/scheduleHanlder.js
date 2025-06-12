import nodeCron from "node-cron";
import { sendMessageToSlack } from "./slackHandler.js";

export const startCron = () => nodeCron.schedule('30 9 * * 1-5', () => {
    console.log('[9:30AM] 슬랙 전송 트리거 실행됨 (월~금)');
    sendMessageToSlack();
});

/**
 * 테스트용 cron
 */
// export const startCron = () => nodeCron.schedule('0 * * * * *', () => {
//     console.log('매분 실행되는 작업');
//     sendMessageToSlack();
// });
