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
    }
};

export default Utils;