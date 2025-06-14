import { WebClient } from "@slack/web-api"
import { SLACK_TOKEN } from "./config.js";

const slackClient = new WebClient(SLACK_TOKEN);

const sendMessageToSlack = async (todayMenus) => {
    for (const menu of todayMenus) {
        const blocks = [
            {
                type: 'header',
                text: {
                    type: 'plain_text',
                    text: `🍽️ 오늘의 ${menu.branchName} 메뉴`,
                    emoji: true,
                },
            },
            ...menu.imageUrls.map((url) => ({
                type: 'image',
                image_url: url,
                alt_text: '메뉴 이미지',
            })),
        ];

        await slackClient.chat.postMessage({
            text: "밥묵자!",
            channel: '#bapmook-ja',
            blocks,
        });
    }
};

export { sendMessageToSlack }
