"use strict";
/**
 * 获取随机密码
 */
function getPassword(length = 4) {
    const randomNum = Number(Math.random().toString().substr(2));
    const randomStr = randomNum.toString(16);
    return randomStr.substr(0, length);
}
module.exports = getPassword;
