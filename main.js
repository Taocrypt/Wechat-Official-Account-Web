// 改进vh
const vh = window.innerHeight * 1;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 1;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('DOMContentLoaded', (event) => {
  // 获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const replyText = urlParams.get('replyText');

  // 检测是否有replyText参数
  if (replyText) {
    document.getElementById('wechat-need-reply').style.display = 'flex';
    document.getElementById('wechat-need-reply-text').textContent = replyText;
  } else {
    document.getElementById('wechat-need-reply').style.display = 'none';
  }
  
  document.getElementById('wechat-need-reply-copybtn').addEventListener('click', function() {
    var textToCopy = document.getElementById('wechat-need-reply-text').innerText;
    navigator.clipboard.writeText(textToCopy).then(function() {
      console.log('Text copied to clipboard');
      var replyBackElement = document.getElementById('wechat-need-reply-back');
      replyBackElement.innerText = '复制成功';
      replyBackElement.style.color = 'green';
    })
    .catch(function(err) {
      console.error('Could not copy text: ', err);
    });
  });

  // 卡片点击：跳微信公众号
  const card = document.querySelector('.wechatOA-card');
  if (card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      const isWechat = /MicroMessenger/i.test(navigator.userAgent);
      if (isWechat) {
        // 微信内：直接打开公众号网页
        window.location.href = officialAccountWebUrl;
      } else {
        // 外部：唤起微信
        window.location.href = wechatScheme;
        // 超时提示（防止唤起失败）
        setTimeout(() => {
          alert('请在微信中打开，或直接打开微信搜索公众号：' + oa_name);
        }, 1200);
      }
    });
  }
});