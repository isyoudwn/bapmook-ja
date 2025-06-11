import { DateTime } from "luxon"

const TIME_ZONE = "Asia/Seoul";

export const getKoreanTime = () => {
    return DateTime.now().setZone(TIME_ZONE);
};
