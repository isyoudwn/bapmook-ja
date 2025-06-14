import { DateTime } from "luxon"

const TIME_ZONE = "Asia/Seoul";

const getKoreanTime = () => {
    return DateTime.now().setZone(TIME_ZONE);
};

export { getKoreanTime, TIME_ZONE }
