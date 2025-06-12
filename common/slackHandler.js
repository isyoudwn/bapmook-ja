import { WebClient } from "@slack/web-api"
import { getMenu } from "./menuController.js"
import { SLACK_TOKEN } from "./config.js";

const slackClient = new WebClient(SLACK_TOKEN);

export const sendMessageToSlack = async () => {
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
