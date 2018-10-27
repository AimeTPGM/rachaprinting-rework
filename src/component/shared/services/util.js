import * as appContants from '../../../appConstants';

const Utils = {
    getProductImage(key) {
        return appContants.imagePath.products[key];
    }
};

export default Utils;