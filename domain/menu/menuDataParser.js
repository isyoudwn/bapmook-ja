import { getKoreanTime } from "../../common/time.js"
import MenuError from "./MenuError.js";

const INFO = "소식";

/**
 * 오늘 메뉴를 가져온다
 * @param {Array} menuData 
 */
const getTodayMenu = async (menuData) => {
    const posts = getRecentPosts(menuData);
    const todayMenuPost = findTodayMenuPosts(...posts);

    if (todayMenuPost.length == 0) {
        throw new MenuError("no menu today");
    }

    const photos = todayMenuPost[0].media;
    const urls = photos.map((photo) => photo.url);

    return urls;
}

/**
 * 최근 포스트를 가져온다
 * @param {Array} menuData 
 * @returns array
 */
const getRecentPosts = (menuData) => {
    return menuData.cards
        .filter(card => card.title === INFO)
        .map(card => card.posts)
}

const dateRegex = (month, day) => {
    return new RegExp(
        `(?:${month}|0?${month})[\\.\\/월\\s]*0?${day}[일\\s]?`
    );
};

const dayOfWeekRegex = (dayOfWeek) => {
    return new RegExp(`\\(${dayOfWeek}\\)`);
};



/**
 * 오늘의 포스트를 가져온다
 * @param {Array} posts 
 * @returns array
 */
const findTodayMenuPosts = (posts) => {
    const now = getKoreanTime();
    const month = Number(now.month);
    const day = Number(now.day);
    const dayOfWeek = now.dayOfWeek;

    const regex = dateRegex(month, day);
    const dayRegex = dayOfWeekRegex(dayOfWeek);

    // 날짜로 먼저 필터링
    let todayPost = posts.filter(post => regex.test(post.title));

    // 날짜가 없으면 요일로 필터링
    if (todayPost.length === 0) {
        todayPost = posts.filter(post => dayRegex.test(post.title));
    }

    return todayPost;
};

export { getRecentPosts, getTodayMenu }
