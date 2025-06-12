import { getSungsu6Menu } from "./menuService.js";

/**
 * 성수역 menu 가져오기
 */
export const getMenu = async () => {
    return await getSungsu6Menu();
}
