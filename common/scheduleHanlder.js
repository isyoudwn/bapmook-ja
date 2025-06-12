import nodeCron from "node-cron";
import { sendMessageToSlack } from "./slackHandler.js";

export const startCron = () => nodeCron.schedule('0 10 * * 1-5', () => {
    console.log('[10AM] 슬랙 전송 트리거 실행됨 (월~금)');
    sendMessageToSlack();
});
