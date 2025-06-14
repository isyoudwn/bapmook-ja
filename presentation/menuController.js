import { todayMenu } from "../domain/menu/menuService.js";
import { SUNG_SOO_6, SUNG_SOO_STATION } from "../common/config.js";

/**
 * 성수역 menu 가져오기
 */
const getMenu = async () => {
    const stationBranchMenu = await todayMenu(SUNG_SOO_STATION);
    const sixthBranchMenu = await todayMenu(SUNG_SOO_6);

    return [
        {
            "branchName": "성수역",
            "imageUrls": stationBranchMenu,
        },
        {
            "branchName": "6호점",
            "imageUrls": sixthBranchMenu

        }
    ]

}

export { getMenu }
