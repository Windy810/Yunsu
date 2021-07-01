// H5地址(前端运行地址)
const hostUrl = "http://127.0.0.1:8000";

// 充值页面地址 用作微信H5获取code
const rechargeUrl = `${hostUrl}/pages/user/recharge`;

// 后台接口请求地址"http://demo.rageframe.com/api"
const baseUrl = "http://39.106.161.37/rageframe2/web/api/";
//"http://127.0.0.1/rageframe2/web/api";

// 微信公众号appid
const weixinAppId = "";

export {
    rechargeUrl,
    baseUrl,
    hostUrl,
    weixinAppId
}
