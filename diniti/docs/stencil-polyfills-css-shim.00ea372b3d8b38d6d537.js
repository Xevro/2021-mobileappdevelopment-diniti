(self.webpackChunkdiniti=self.webpackChunkdiniti||[]).push([[4952],{6866:()=>{var S=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function I(e){return d(function(e){var r=new S;r.start=0,r.end=e.length;for(var t=r,n=0,a=e.length;n<a;n++)if(e[n]===O){t.rules||(t.rules=[]);var s=t,i=s.rules[s.rules.length-1]||null;(t=new S).start=n+1,t.parent=s,t.previous=i,s.rules.push(t)}else e[n]===U&&(t.end=n+1,t=t.parent||r);return r}(e=function(e){return e.replace(c.comments,"").replace(c.port,"")}(e)),e)}function d(e,r){var t=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=t.trim(),e.parent){t=(t=(t=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){for(var r=arguments[1],t=6-r.length;t--;)r="0"+r;return"\\"+r})}(t=r.substring(e.previous?e.previous.end:e.parent.start,e.start-1))).replace(c.multipleSpaces," ")).substring(t.lastIndexOf(";")+1);var a=e.parsedSelector=e.selector=t.trim();e.atRule=0===a.indexOf(D),e.atRule?0===a.indexOf(T)?e.type=l.MEDIA_RULE:a.match(c.keyframesRule)&&(e.type=l.KEYFRAMES_RULE,e.keyframesName=e.selector.split(c.multipleSpaces).pop()):e.type=0===a.indexOf(G)?l.MIXIN_RULE:l.STYLE_RULE}var s=e.rules;if(s)for(var i=0,o=s.length,u=void 0;i<o&&(u=s[i]);i++)d(u,r);return e}var l={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},O="{",U="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},G="--",T="@media",D="@";function g(e,r,t){e.lastIndex=0;var n=r.substring(t).match(e);if(n){var a=t+n.index;return{start:a,end:a+n[0].length}}return null}var P=/\bvar\(/,F=/\B--[\w-]+\s*:/,$=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,j=/^[\t ]+\n/gm;function Y(e,r,t){var n=function(e,r){var t=g(P,e,r);if(!t)return null;var n=function(e,r){for(var t=0,n=r;n<e.length;n++){var a=e[n];if("("===a)t++;else if(")"===a&&--t<=0)return n+1}return n}(e,t.start),s=e.substring(t.end,n-1).split(","),i=s[0],o=s.slice(1);return{start:t.start,end:n,propName:i.trim(),fallback:o.length>0?o.join(",").trim():void 0}}(e,t);if(!n)return r.push(e.substring(t,e.length)),e.length;var a=n.propName,s=null!=n.fallback?p(n.fallback):void 0;return r.push(e.substring(t,n.start),function(i){return function(e,r,t){return e[r]?e[r]:t?f(t,e):""}(i,a,s)}),n.end}function f(e,r){for(var t="",n=0;n<e.length;n++){var a=e[n];t+="string"==typeof a?a:a(r)}return t}function q(e,r){for(var t=!1,n=!1,a=r;a<e.length;a++){var s=e[a];if(t)n&&'"'===s&&(t=!1),!n&&"'"===s&&(t=!1);else if('"'===s)t=!0,n=!0;else if("'"===s)t=!0,n=!1;else{if(";"===s)return a+1;if("}"===s)return a}}return a}function p(e){var r=0;e=function(e){for(var r="",t=0;;){var n=g(F,e,t),a=n?n.start:e.length;if(r+=e.substring(t,a),!n)break;t=q(e,a)}return r}(e=e.replace($,"")).replace(j,"");for(var t=[];r<e.length;)r=Y(e,t,r);return t}function y(e){var r={};e.forEach(function(o){o.declarations.forEach(function(u){r[u.prop]=u.value})});for(var t={},n=Object.entries(r),a=function(o){var u=!1;if(n.forEach(function(M){var L=M[0],k=f(M[1],t);k!==t[L]&&(t[L]=k,u=!0)}),!u)return"break"},s=0;s<10&&"break"!==a();s++);return t}function z(e,r){if(void 0===r&&(r=0),!e.rules)return[];var t=[];return e.rules.filter(function(n){return n.type===l.STYLE_RULE}).forEach(function(n){var a=function(e){for(var t,r=[];t=x.exec(e.trim());){var n=J(t[2]),a=n.value,s=n.important;r.push({prop:t[1].trim(),value:p(a),important:s})}return r}(n.cssText);a.length>0&&n.parsedSelector.split(",").forEach(function(s){s=s.trim(),t.push({selector:s,declarations:a,specificity:1,nu:r})}),r++}),t}var b="!important",x=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function J(e){var t=(e=e.replace(/\s+/gim," ").trim()).endsWith(b);return t&&(e=e.substr(0,e.length-b.length).trim()),{value:e,important:t}}function E(e){var r=[];return e.forEach(function(t){r.push.apply(r,t.selectors)}),r}function A(e){var r=I(e),t=p(e);return{original:e,template:t,selectors:z(r),usesCssVars:t.length>1}}function h(e,r){if(e.some(function(n){return n.styleEl===r}))return!1;var t=A(r.textContent);return t.styleEl=r,e.push(t),!0}function v(e){var t=y(E(e));e.forEach(function(n){n.usesCssVars&&(n.styleEl.textContent=f(n.template,t))})}function R(e,r,t){return function(e,r,t){return e.replace(new RegExp(r,"g"),t)}(e,"\\."+r,"."+t)}function C(e,r){return Array.from(e.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map(function(n){return h(r,n)}).some(Boolean)}function _(e,r,t){var n=t.href;return fetch(n).then(function(a){return a.text()}).then(function(a){if(function(e){return e.indexOf("var(")>-1||ue.test(e)}(a)&&t.parentNode){(function(e){return m.lastIndex=0,m.test(e)})(a)&&(a=function(e,r){var t=r.replace(/[^/]*$/,"");return e.replace(m,function(n,a){return n.replace(a,t+a)})}(a,n));var s=e.createElement("style");s.setAttribute("data-styles",""),s.textContent=a,h(r,s),t.parentNode.insertBefore(s,t),t.remove()}}).catch(function(a){console.error(a)})}var e,ue=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,m=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,pe=function(){function e(r,t){this.win=r,this.doc=t,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return e.prototype.i=function(){var r=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise(function(t){r.win.requestAnimationFrame(function(){(function(e,r){new MutationObserver(function(){C(e,r)&&v(r)}).observe(document.head,{childList:!0})})(r.doc,r.globalScopes),function(e,r){return C(e,r),function(e,r){for(var t=[],n=e.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),a=0;a<n.length;a++)t.push(_(e,r,n[a]));return Promise.all(t)}(e,r).then(function(){v(r)})}(r.doc,r.globalScopes).then(function(){return t()})})}))},e.prototype.addLink=function(r){var t=this;return _(this.doc,this.globalScopes,r).then(function(){t.updateGlobal()})},e.prototype.addGlobalStyle=function(r){h(this.globalScopes,r)&&this.updateGlobal()},e.prototype.createHostStyle=function(r,t,n,a){if(this.hostScopeMap.has(r))throw new Error("host style already created");var s=this.registerHostTemplate(n,t,a),i=this.doc.createElement("style");return i.setAttribute("data-no-shim",""),s.usesCssVars?a?(i["s-sc"]=t=s.scopeId+"-"+this.count,i.textContent="/*needs update*/",this.hostStyleMap.set(r,i),this.hostScopeMap.set(r,function(e,r){var t=e.template.map(function(a){return"string"==typeof a?R(a,e.scopeId,r):a}),n=e.selectors.map(function(a){return Object.assign(Object.assign({},a),{selector:R(a.selector,e.scopeId,r)})});return Object.assign(Object.assign({},e),{template:t,selectors:n,scopeId:r})}(s,t)),this.count++):(s.styleEl=i,s.usesCssVars||(i.textContent=f(s.template,{})),this.globalScopes.push(s),this.updateGlobal(),this.hostScopeMap.set(r,s)):i.textContent=n,i},e.prototype.removeHost=function(r){var t=this.hostStyleMap.get(r);t&&t.remove(),this.hostStyleMap.delete(r),this.hostScopeMap.delete(r)},e.prototype.updateHost=function(r){var t=this.hostScopeMap.get(r);if(t&&t.usesCssVars&&t.isScoped){var n=this.hostStyleMap.get(r);if(n){var s=y(function(e,r,t){var n=[],a=function(e,r){for(var t=[];r;){var n=e.get(r);n&&t.push(n),r=r.parentElement}return t}(r,e);return t.forEach(function(o){return n.push(o)}),a.forEach(function(o){return n.push(o)}),function(e){return e.sort(function(r,t){return r.specificity===t.specificity?r.nu-t.nu:r.specificity-t.specificity}),e}(E(n).filter(function(o){return function(e,r){return":root"===r||"html"===r||e.matches(r)}(e,o.selector)}))}(r,this.hostScopeMap,this.globalScopes));n.textContent=f(t.template,s)}}},e.prototype.updateGlobal=function(){v(this.globalScopes)},e.prototype.registerHostTemplate=function(r,t,n){var a=this.scopesMap.get(t);return a||((a=A(r)).scopeId=t,a.isScoped=n,this.scopesMap.set(t,a)),a},e}();(e="undefined"!=typeof window&&window)&&!e.__cssshim&&!(e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)"))&&(e.__cssshim=new pe(e,e.document))}}]);