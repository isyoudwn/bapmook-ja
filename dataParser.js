import { getKoreanTime } from "./time.js"

const INFO = "소식";

/**
 * 최근 포스트를 가져온다
 * @param {Array} menuData 
 * @returns array
 */
export const getRecentPosts = (menuData) => {
    return menuData.cards
        .filter(card => card.title === INFO)
        .map(card => card.posts)
}

/**
 * 오늘의 포스트를 가져온다
 * @param {Array} posts 
 * @returns array
 */
const findTodayMenuPosts = (posts) => {
    const now = getKoreanTime();
    const month = Number(now.month);
    const day = Number(now.day);

    const dateRegex = (month, day) => {
        return new RegExp(
            `(?:${month}|0?${month})[\\.\\/월\\s]*0?${day}[일\\s]?`,
        );
    };

    const regex = dateRegex(month, day);

    const todayPost = [];

    posts.filter(post => {
        if (regex.test(post.title)) {
            todayPost.push(post);
        }
    });

    return todayPost;
}

/**
 * 오늘 메뉴를 가져온다
 * @param {Array} menuData 
 */
export const getTodayMenu = async (menuData) => {
    const posts = getRecentPosts(menuData);
    const todayMenuPost = findTodayMenuPosts(...posts);

    console.log(todayMenuPost);
}
