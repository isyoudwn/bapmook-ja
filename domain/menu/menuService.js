import { getTodayMenu } from "../../dataParser.js";

/**
 * 밥플러스 성수의 메뉴를 가져온다
 */
export const todayMenu = async (url) => {
    const response = await fetch(url, {
        "headers": {
            "accept": "*/*",
            "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "webid=6c84fd1130f049c086e79412a394b8ba; webid_ts=1736928849678; _ga=GA1.1.1421434957.1737341349; _ga_MS10Z6SM95=GS1.1.1745460486.9.1.1745462359.60.0.0; _kau=eb2e046f69bd038c0e96fdef2b4f524978603e9612f6a9cbc2bd17a8e7a12721dc851306d2a8c84e0545b54fc14bbf31ffc4e026536e1a3d8dd0bbea44a1825d672c45be360bc5d00da33d6c91f0159ee6320875020911cde04b23299b6980380d038ff8fcbd312981d090ae5fb231d588dc67c7722758edee31f514df4534353939303935303936363437373236323331313430333830323438383035335f9dd3573ab50f9cd5ff160b958f5b75; __T_=1; __T_SECURE=1; _T_ANO=CvMvredtpkeQq8E5Ry3oAjWiqsqvewA3d0oRBEj193AmcAXlOjUN+/QEQfXsiy/xD1cAoj5h14+RKvq3nqtfUFfZHTM0dR3PQXUlKMfWR4P+IcrDTjZnbQ35wod2lhJPEXkKyFgaFVxbYowu1xz/fad6dxf/ImudhRszP+MEfUcypy7Bhbzn9zrWHtCPvZVqksvnJuOm44ZfE7kdRR7SGah42pi2FXmMWLn+QlIUYPuI+0J3i1binOwchHfSneSNOFcfiP0/cgzmAJ5quOFB3C0nRiu6py4GpPOLhaU+RfeJ/AsQjDzqAUQ5EJRCvYGrQwS1O/9WpRxQBv1Vwm8slg==",
            "Referer": "https://pf.kakao.com/_Kyxlxbn/109679396",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });

    const postData = await response.json();
    const todayMenu = await getTodayMenu(postData);

    return todayMenu;
}
