import { WebClient } from "@slack/web-api"
import { getMenu } from "./menuController.js"
import { SLACK_TOKEN } from "./config.js";
import nodeCron from "node-cron";

const slackClient = new WebClient(SLACK_TOKEN);

const sendImageToSlack = async () => {
    const todayMenus = await getMenu();

    for (const menu of todayMenus) {
        const blocks = [
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: `🍇 오늘의 *${menu.branchName}* 지점 메뉴입니다`,
                },
            },
            ...menu.imageUrls.map((url) => ({
                type: 'image',
                image_url: url,
                alt_text: '메뉴 이미지',
            })),
        ];

        await slackClient.chat.postMessage({
            text : "오늘의 메뉴!",
            channel: '#bapmook-ja',
            blocks,
        });
    }
};

// export const startCron = () => nodeCron.schedule('0 10 * * 1-5', () => {
//     console.log('[10AM] 슬랙 전송 트리거 실행됨 (월~금)');
//     sendImageToSlack();
// });

export const startCron = () => nodeCron.schedule('* * * * *', () => {
    sendImageToSlack();
});
