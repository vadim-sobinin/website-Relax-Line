(()=>{var t={945:function(t,e,o){var i,n;n=void 0!==o.g?o.g:"undefined"!=typeof window?window:this,i=function(){return function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},r=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(r('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,m=function(r,f,m,y){if(!l("body"))return!1;e||p.Notify.init({});var u=c(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof y&&!Array.isArray(y)){var x={};"object"==typeof m?x=m:"object"==typeof y&&(x=y),e=c(!0,e,x)}var h,v,b=e[r.toLocaleLowerCase("en")];d++,"string"!=typeof f&&(f="Notiflix "+r),e.plainText&&(h=f,(v=t.document.createElement("div")).innerHTML=h,f=v.textContent||v.innerText||""),!e.plainText&&f.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),e.cssAnimation||(e.cssAnimationDuration=0);var g=t.document.getElementById(s.wrapID)||t.document.createElement("div");if(g.id=s.wrapID,g.style.width=e.width,g.style.zIndex=e.zindex,g.style.opacity=e.opacity,"center-center"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.top=e.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===e.position?(g.style.left=e.distance,g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===e.position?(g.style.right=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.left="auto"):"left-top"===e.position?(g.style.left=e.distance,g.style.top=e.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===e.position?(g.style.left=e.distance,g.style.bottom=e.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=e.distance,g.style.top=e.distance,g.style.left="auto",g.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(s.overlayID)||t.document.createElement("div");w.id=s.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=b.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(s.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(s.wrapID)||t.document.body.appendChild(g);var k=t.document.createElement("div");k.id=e.ID+"-"+d,k.className=e.className+" "+b.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof m?"nx-with-close-button":"")+" "+("function"==typeof m?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=b.textColor,k.style.background=b.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof m&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"");else{var S="";r===o?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':r===i?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':r===n?S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':r===a&&(S='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=S+'<span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+f+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var _=t.document.getElementById(s.wrapID);_.insertBefore(k,_.firstChild)}else t.document.getElementById(s.wrapID).appendChild(k);var C=t.document.getElementById(k.id);if(C){var I,E,z=function(){C.classList.add("nx-remove");var e=t.document.getElementById(s.overlayID);e&&g.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(I)},A=function(){if(C&&null!==C.parentNode&&C.parentNode.removeChild(C),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var e=t.document.getElementById(s.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof m&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof m||e.clickToClose)&&C.addEventListener("click",(function(){"function"==typeof m&&m(),z();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof m){var W=function(){I=setTimeout((function(){z()}),e.timeout),E=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};W(),e.pauseOnHover&&(C.addEventListener("mouseenter",(function(){C.classList.add("nx-paused"),clearTimeout(I),clearTimeout(E)})),C.addEventListener("mouseleave",(function(){C.classList.remove("nx-paused"),W()})))}}if(e.showOnlyTheLastOne&&d>0)for(var L=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+d+"])"),T=0;T<L.length;T++){var B=L[T];null!==B.parentNode&&B.parentNode.removeChild(B)}e=c(!0,e,u)},p={Notify:{init:function(o){e=c(!0,s,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(f,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return r("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){m(o,t,e,i)},failure:function(t,e,o){m(i,t,e,o)},warning:function(t,e,o){m(n,t,e,o)},info:function(t,e,o){m(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}}(n)}.apply(e,[]),void 0===i||(t.exports=i)}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";const t=()=>{const t=document.body;t.style.overflow="hidden";const e=i();t.style.marginRight=`${e}px`},e=()=>{const t=document.body;t.style.overflow="auto",t.style.marginRight="0"},i=()=>{let t=document.createElement("div");t.style.width="500px",t.style.height="500px",t.style.overflowY="scroll",t.style.visibility="hidden",document.body.appendChild(t);let e=t.offsetWidth-t.clientWidth;return t.remove(),e},n=t=>{const e=document.getElementById("tbody");e.innerHTML="",t.forEach((t=>{e.insertAdjacentHTML("beforeend",`\n      <tr class="table__row">\n      <td class="table__id table__cell">${t.id}</td>\n      <td class="table-type table__cell">\n        ${t.type}\n      </td>\n      <td class="table-name table__cell">\n        ${t.name}\n      </td>\n      <td class="table-units table__cell">${t.units}</td>\n      <td class="table-cost table__cell">${t.cost} руб</td>\n      <td>\n        <div class="table__actions table__cell">\n          <button class="button action-change">\n            <span class="svg_ui"\n              ><svg class="action-icon_change">\n                <use\n                  xlink:href="./img/sprite.svg#change"\n                ></use></svg></span\n            ><span>Изменить</span>\n          </button>\n          <button class="button action-remove">\n            <span class="svg_ui"\n              ><svg class="action-icon_remove">\n                <use\n                  xlink:href="./img/sprite.svg#remove"\n                ></use></svg></span\n            ><span>Удалить</span>\n          </button>\n        </div>\n      </td>\n    </tr>\n    `)}))};var a=o(945);const s=async()=>{const t=document.querySelector("#typeItem");t.innerHTML='<option value=Все услуги">Все услуги</option>';let e=await([]);await fetch("https://json-server-relax-line.vercel.app/data").then((t=>t.json())).then((t=>t.forEach((t=>e.includes(t.type)?null:e.push(t.type))))).then((()=>e.forEach((e=>{t.insertAdjacentHTML("beforeEnd",`\n          <option value="${e}">\n          ${e}\n        </option>\n    `)}))))};class r{getUsers(){return fetch("https://json-server-relax-line.vercel.app/users").then((t=>t.json()))}getServices(){return fetch("https://json-server-relax-line.vercel.app/data").then((t=>t.json()))}addServices(t){return fetch("https://json-server-relax-line.vercel.app/data",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((t=>t.json))}removeService(t){return fetch(`https://json-server-relax-line.vercel.app/data/${t}`,{method:"DELETE"}).then((t=>t.json))}editService(t,e){return fetch(`https://json-server-relax-line.vercel.app/data/${t}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((t=>t.json))}filterServices(t){return fetch(`https://json-server-relax-line.vercel.app/data${t}`).then((t=>t.json()))}sortServices(t){return fetch(`https://json-server-relax-line.vercel.app/data${t}`).then((t=>t.json()))}}document.cookie?(window.userServices=new r,userServices.getServices().then((t=>{n(t)})),document.querySelector(".back-to-site").addEventListener("click",(()=>window.location.replace("http://localhost:8080/"))),document.getElementById("tbody").addEventListener("click",(t=>{if(t.target.closest(".action-remove")){const e=t.target.closest(".table__row").children[0].textContent;userServices.removeService(e).then((()=>userServices.getServices())).then((t=>n(t))).then((()=>s()))}})),(()=>{const o=document.querySelector(".btn-addItem"),i=document.getElementById("modal"),r=i.querySelector("form");o.addEventListener("click",(()=>{i.style.display="flex",t(),r.dataset.action="add"})),i.addEventListener("click",(t=>{(t.target.closest(".button__close")||!t.target.closest(".modal")||t.target.closest(".cancel-button"))&&(i.style.display="none",e(),r.reset(),delete r.dataset.action)}));const l=t=>{const e=r.querySelector(t);return 0==e.value.length?(e.style.borderBottomColor="red",!1):(e.style.borderBottomColor="#c8c5d1",!0)};r.querySelector(".cancel-button").disabled=!0,r.addEventListener("submit",(t=>{if(t.preventDefault(),"add"==r.dataset.action)if(isNaN(r.querySelector(".input__cost").value))a.Notify.failure('В поле "цена" можно вводить только цифры!');else if(l(".input__type")&&l(".input__name")&&l(".input__units")&&l(".input__cost")){const t={name:r.querySelector(".input__name").value,type:r.querySelector(".input__type").value,units:r.querySelector(".input__units").value,cost:+r.querySelector(".input__cost").value};userServices.addServices(t).then((()=>userServices.getServices())).then((t=>n(t))).then((()=>{s(),r.reset,i.style.display="none",e(),delete r.dataset.action}))}}))})(),(()=>{const o=document.getElementById("modal"),i=o.querySelector("form"),r=document.getElementById("tbody");let l;o.addEventListener("click",(t=>{(t.target.closest(".button__close")||!t.target.closest(".modal")||t.target.closest(".cancel-button"))&&(o.style.display="none",o.querySelector(".modal__header").textContent="Добавление новой услуги",e(),i.reset(),delete i.dataset.action)})),r.addEventListener("click",(e=>{if(e.target.closest(".action-change")){const n=e.target.closest(".table__row").children;l=n[0].textContent,i.querySelector("#type").value=n[1].textContent.trim(),i.querySelector("#name").value=n[2].textContent.trim(),i.querySelector("#units").value=n[3].textContent.trim(),i.querySelector("#cost").value=n[4].textContent.split(" ")[0],o.querySelector(".modal__header").textContent="Редактировать услугу",o.style.display="flex",t(),i.dataset.action="edit",i.querySelector(".cancel-button").disabled=!0}}));const c=t=>{const e=i.querySelector(t);return 0==e.value.length?(e.style.borderBottomColor="red",!1):(e.style.borderBottomColor="#c8c5d1",!0)};i.addEventListener("submit",(t=>{if(t.preventDefault(),"edit"==i.dataset.action)if(isNaN(i.querySelector(".input__cost").value))a.Notify.failure('В поле "цена" можно вводить только цифры!');else if(c(".input__type")&&c(".input__name")&&c(".input__units")&&c(".input__cost")){const t={name:i.querySelector(".input__name").value,type:i.querySelector(".input__type").value,units:i.querySelector(".input__units").value,cost:+i.querySelector(".input__cost").value};i.reset(),userServices.editService(l,t).then((()=>userServices.getServices())).then((t=>n(t))).then((()=>{s(),i.reset,o.style.display="none",e(),delete i.dataset.action}))}}))})(),(()=>{const t=document.querySelector("#typeItem");s(),t.addEventListener("change",(()=>{if("Все"==t.value)userServices.getServices().then((t=>{n(t)}));else{const e=`?type=${t.value}`;userServices.filterServices(e).then((t=>n(t)))}}))})(),(()=>{const t=document.querySelector("thead"),e=t.querySelector(".th-id>span>.icon-sort"),o=t.querySelector(".th-type>span>.icon-sort"),i=t.querySelector(".th-name>span>.icon-sort"),a=t.querySelector(".th-units>span>.icon-sort");e.style.display="none",o.style.display="none",i.style.display="none",a.style.display="none",t.addEventListener("click",(t=>{t.target.closest(".th-id")&&("none"==e.style.display?(s(e),e.style.display="block",userServices.sortServices("?_sort=id&_order=asc").then((t=>n(t)))):"rotate(180deg)"==e.style.transform?(e.style.transform="",e.style.display="none",userServices.getServices().then((t=>n(t)))):(e.style.transform="rotate(180deg)",userServices.sortServices("?_sort=id&_order=desc").then((t=>n(t))))),t.target.closest(".th-type")&&("none"==o.style.display?(s(o),o.style.display="block",userServices.sortServices("?_sort=type&_order=asc").then((t=>n(t)))):"rotate(180deg)"==o.style.transform?(o.style.transform="",o.style.display="none",userServices.getServices().then((t=>n(t)))):(o.style.transform="rotate(180deg)",userServices.sortServices("?_sort=type&_order=desc").then((t=>n(t))))),t.target.closest(".th-name")&&("none"==i.style.display?(s(i),i.style.display="block",userServices.sortServices("?_sort=name&_order=asc").then((t=>n(t)))):"rotate(180deg)"==i.style.transform?(i.style.transform="",i.style.display="none",userServices.getServices().then((t=>n(t)))):(i.style.transform="rotate(180deg)",userServices.sortServices("?_sort=name&_order=desc").then((t=>n(t))))),t.target.closest(".th-units")&&("none"==a.style.display?(s(a),a.style.display="block",userServices.sortServices("?_sort=units&_order=asc").then((t=>n(t)))):"rotate(180deg)"==a.style.transform?(a.style.transform="",a.style.display="none",userServices.getServices().then((t=>n(t)))):(a.style.transform="rotate(180deg)",userServices.sortServices("?_sort=units&_order=desc").then((t=>n(t)))))}));const s=t=>{t!=e&&(e.style.display="none",e.style.transform=""),t!=o&&(o.style.display="none",o.style.transform=""),t!=i&&(i.style.display="none",i.style.transform=""),t!=a&&(a.style.display="none",a.style.transform="")}})()):window.location.replace("http://localhost:8080/admin/index.html")})()})();