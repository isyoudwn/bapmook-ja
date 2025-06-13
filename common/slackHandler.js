import { WebClient } from "@slack/web-api"
import { getMenu } from "../presentation/menuController.js"
import { SLACK_TOKEN } from "./config.js";

const slackClient = new WebClient(SLACK_TOKEN);

export const sendMessageToSlack = async () => {
    const todayMenus = await getMenu();

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
