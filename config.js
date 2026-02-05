const oa_name = "03de自留地";
const oa_description = "感谢您的关注！";
const homepage = "Taocryptの个人主页";

// 公众号跳转配置
const officialAccountRawId = "gh_90e99e064e84";
const officialAccountWebUrl = "http://weixin.qq.com/r/mp/zxeguJfEYcoerdPb90Ld/";
// 自动生成跳转链接
const wechatScheme = `weixin://profile/${officialAccountRawId}`;

function replaceText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
    element.innerText = newText;
  } else {
    console.log("Element with ID '" + elementId + "' not found.");
  }
}

replaceText('wechatOA-name', oa_name);
replaceText('wechatOA-description', oa_description);
replaceText('homepage', homepage);