!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=(window.__sw__.assetPath + '/bundles/gallyplugin/'),n(n.s="vJb3")}({vJb3:function(e,t,n){"use strict";n.r(t);Shopware.Component.register("gally-alert",{template:'<sw-alert :variant="variant">\n    {{ text }}\n</sw-alert>\n',props:{text:{type:String,required:!0,default:"button"},variant:{type:String,required:!1,default:"info"}}});function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=i.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(a)?a:String(a)),i)}var o,a}Shopware.Component.register("gally-button",{template:'<div class="sw-field">\n    <sw-button @click="runAction" :isLoading="isLoading">\n        {{ $tc(name) }}\n    </sw-button>\n</div>\n',inject:{gallyAction:"gally-action"},mixins:[Shopware.Mixin.getByName("notification")],props:{name:{type:String,required:!0,default:"button"},action:{type:String,required:!0,default:"test"},isLoading:{type:Boolean,default:!1,required:!1}},methods:{runAction:function(){var e=this;this.isLoading=!0,this.gallyAction[this.action]().then((function(t){200!==t.status||t.data.error?e.createNotificationError({message:t.data.message}):e.createNotificationSuccess({message:t.data.message}),e.isLoading=!1})).catch((function(t){e.createNotificationError({message:t.message}),e.isLoading=!1}))}}});var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.httpClient=t,this.loginService=n}var t,n,r;return t=e,(n=[{key:"test",value:function(){return this.callApi("/gally/test",{baseUrl:document.getElementById("GallyPlugin.config.baseurl").value,user:document.getElementById("GallyPlugin.config.user").value,password:document.getElementById("GallyPlugin.config.password").value})}},{key:"sync",value:function(){return this.callApi("/gally/synchronize")}},{key:"index",value:function(){return this.callApi("/gally/index")}},{key:"callApi",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.salesChannelId=this.getCurrentSalesChannelId(),this.httpClient.post(e,t,{headers:{Accept:"application/vnd.api+json",Authorization:"Bearer ".concat(this.loginService.getToken())}})}},{key:"getCurrentSalesChannelId",value:function(){return document.querySelector(".sw-sales-channel-switch").__vue__.salesChannelId}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();Shopware.Module.register("gally",{}),Shopware.Service().register("gally-action",(function(e){var t=Shopware.Application.getContainer("init");return new o(t.httpClient,e.loginService)}))}});