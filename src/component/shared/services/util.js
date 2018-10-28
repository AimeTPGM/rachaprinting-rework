import * as appContants from '../../../appConstants';

const Utils = {
    getProductImg(key) {
        return appContants.imgPath.products[key];
    },
    getLeaderboardBannerImg(key) {
        return appContants.imgPath.leaderBoards[key];
    },
    getPopupBannerImg(img) {
        return appContants.imgPath.popupBanner;
    },
    getQueryParamFromPath(url) {
        const urlParams = url.split('?')[1];
        if (!urlParams) return {};
        const params = urlParams.split('&');
        let result = {};
        params.forEach(param => {
            const keyAndValue = param.split('=');
            result[keyAndValue[0]] = keyAndValue[1];
        });
        return result;
    }
};

export default Utils;