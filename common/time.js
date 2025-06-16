import { DateTime } from "luxon"

const TIME_ZONE = "Asia/Seoul";

const getKoreanTime = () => {
    const now = DateTime.now().setZone(TIME_ZONE);
    const dayOfWeekMap = ['월', '화', '수', '목', '금', '토', '일'];
    const dayOfWeek = dayOfWeekMap[now.weekday - 1];

    return {
        year: now.year,
        month: now.month,
        day: now.day,
        dayOfWeek,
        dateTime: now,
    };
};



export { getKoreanTime, TIME_ZONE }
