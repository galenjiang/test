!function(){function e(e,n){WeixinJSBridge.invoke("getBrandWCPayRequest",e,n)}wechat={},wechat.pay=function(n,t){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e),document.attachEvent("onWeixinJSBridgeReady",e)):e(n,t)},window.wechat=wechat}();