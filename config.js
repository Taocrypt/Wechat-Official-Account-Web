const oa_name = "03de自留地";
const oa_description = "感谢您的关注！";
const homepage = "个人主页";
const officialAccountWebUrl = "https://mp.weixin.qq.com/s/m-69oMHz8Z5QftXdU3M2-g";

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