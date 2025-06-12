import { WebClient } from "@slack/web-api"
import { getMenu } from "./menuController.js"
import { SLACK_TOKEN } from "./config.js";
import nodeCron from "node-cron";

const slackClient = new WebClient(SLACK_TOKEN);

const sendImageToSlack = async () => {
    const imageUrls = await getMenu();
    
    await slackClient.chat.postMessage({
        channel: '#bapmook-ja',
        text: '오늘의 밥플러스 메뉴 입니다!',
        attachments: [
            {
                text: "hello",
                image_url: imageUrls[0],
                alt_text: '메뉴 이미지',
            },
        ],
    });
}


export const startCron = () => nodeCron.schedule('0 10 * * *', () => {
    console.log('[10AM] 슬랙 전송 트리거 실행됨');
    sendImageToSlack();
});
