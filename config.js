const oa_name = "Taocrypt";
const oa_description = "雲在青天水在瓶";
const homepage = "Taocryptの个人主页";

function replaceText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
      element.innerText = newText;
  } else {
      console.log("Element with ID '" + elementId + "' not found.");
  }
}

replaceText('wechatOA-name', oa_name);
replaceText('wechatOA-description', oa_description)
replaceText('homepage', web_beian)