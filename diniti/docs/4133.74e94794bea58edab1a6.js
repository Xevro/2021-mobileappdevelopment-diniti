"use strict";(self.webpackChunkdiniti=self.webpackChunkdiniti||[]).push([[4133],{4133:($t,X,f)=>{f.r(X),f.d(X,{ion_datetime:()=>dt,ion_picker:()=>pt,ion_picker_column:()=>ut});var w=f(1921),s=f(5133),E=f(4973),M=f(5392),k=f(1092),N=f(9046),T=f(6760),z=f(6887);const G=(t,e,i,n)=>{if(t!==S&&t!==L){if(t===O)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===_)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===W||t===B||t===U||t===K||t===Y||t===P)return u(e);if(t===V)return H(e);if(t===j)return(n.monthNames?n.monthNames:Et)[e-1];if(t===$)return(n.monthShortNames?n.monthShortNames:Dt)[e-1];if(t===y||t===C){if(0===e)return"12";if(e>12&&(e-=12),t===y&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===S?(n.dayNames?n.dayNames:_t)[e]:(n.dayShortNames?n.dayShortNames:At)[e]}catch(o){}},R=(t,e,i,n=0,o=0)=>parseInt(`1${H(t)}${u(e)}${u(i)}${u(n)}${u(o)}`,10),Q=t=>R(t.year,t.month,t.day,t.hour,t.minute),wt=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,Mt=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,I=t=>{let e=null;if(null!=t&&""!==t&&(e=Mt.exec(t),e?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=wt.exec(t)),null===e)return;for(let n=1;n<8;n++)e[n]=void 0!==e[n]?parseInt(e[n],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}},q=(t,e)=>{const i=new Date(t.toLocaleString("en-US",{timeZone:"utc"})),n=new Date(t.toLocaleString("en-US",{timeZone:e}));return i.getTime()-n.getTime()},tt=(t,e)=>e===O||e===_?t.hour<12?"am":"pm":e===y||e===C?t.hour>12?t.hour-12:0===t.hour?12:t.hour:t[et(e)],et=t=>{for(const e in A)if(A[e].f===t)return A[e].k},it=t=>{let e="";return void 0!==t.year?(e=H(t.year),void 0!==t.month&&(e+="-"+u(t.month),void 0!==t.day&&(e+="-"+u(t.day),void 0!==t.hour&&(e+=`T${u(t.hour)}:${u(t.minute)}:${u(t.second)}`,t.millisecond>0&&(e+="."+ot(t.millisecond)),e+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+u(Math.floor(Math.abs(t.tzOffset/60)))+":"+u(t.tzOffset%60))))):void 0!==t.hour&&(e=u(t.hour)+":"+u(t.minute),void 0!==t.second&&(e+=":"+u(t.second),void 0!==t.millisecond&&(e+="."+ot(t.millisecond)))),e},v=(t,e)=>{if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(n=>n.toString().trim())),(void 0===i||0===i.length)&&console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i},nt=(t,e)=>{let i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),i=Array.isArray(t)?t.map(n=>parseInt(n,10)).filter(isFinite):[t],0===i.length&&console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`),i},u=t=>("0"+(void 0!==t?Math.abs(t):"0")).slice(-2),ot=t=>("00"+(void 0!==t?Math.abs(t):"0")).slice(-3),H=t=>("000"+(void 0!==t?Math.abs(t):"0")).slice(-4),V="YYYY",W="YY",j="MMMM",$="MMM",B="MM",S="DDDD",L="DDD",U="DD",K="HH",y="hh",C="h",Y="mm",P="ss",O="A",_="a",A=[{f:V,k:"year"},{f:j,k:"month"},{f:S,k:"day"},{f:$,k:"month"},{f:L,k:"day"},{f:W,k:"year"},{f:B,k:"month"},{f:U,k:"day"},{f:K,k:"hour"},{f:y,k:"hour"},{f:Y,k:"minute"},{f:P,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:C,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:O,k:"ampm"},{f:_,k:"ampm"}],_t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],At=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Et=["January","February","March","April","May","June","July","August","September","October","November","December"],Dt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ft=[y,C,Y,"m",P,"s"],dt=class{constructor(t){(0,s.r)(this,t),this.ionCancel=(0,s.e)(this,"ionCancel",7),this.ionChange=(0,s.e)(this,"ionChange",7),this.ionFocus=(0,s.e)(this,"ionFocus",7),this.ionBlur=(0,s.e)(this,"ionBlur",7),this.ionStyle=(0,s.e)(this,"ionStyle",7),this.inputId="ion-dt-"+Pt++,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onClick=()=>{this.setFocus(),this.open()},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.locale={monthNames:v(this.monthNames,"monthNames"),monthShortNames:v(this.monthShortNames,"monthShortNames"),dayNames:v(this.dayNames,"dayNames"),dayShortNames:v(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}open(){var t=this;return(0,w.Z)(function*(){if(t.disabled||t.isExpanded)return;const e=t.generatePickerOptions(),i=yield k.p.create(e);t.isExpanded=!0,i.onDidDismiss().then(()=>{t.isExpanded=!1,t.setFocus()}),(0,M.a)(i,"ionPickerColChange",function(){var n=(0,w.Z)(function*(o){const r=o.detail,a={};a[r.name]={value:r.options[r.selectedIndex].value},"ampm"!==r.name&&void 0!==t.datetimeValue.ampm&&(a.ampm={value:t.datetimeValue.ampm}),t.updateDatetimeValue(a),i.columns=t.generateColumns()});return function(o){return n.apply(this,arguments)}}()),yield i.present()})()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateDatetimeValue(t){((t,e,i)=>{if(!e||"string"==typeof e){const n=((t="",e="")=>{null==t&&(t=""),(10===t.length||7===t.length||4===t.length)&&(t+=" ");const i="string"==typeof t&&t.length>0?new Date(t):new Date,n=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return e&&e.length>0?new Date(i.getTime()-q(n,e)):n})(e,i);Number.isNaN(n.getTime())||(e=n.toISOString())}if(e&&""!==e){if("string"==typeof e){if(e=I(e))return Object.assign(t,e),!0}else{if(e.year||e.hour||e.month||e.day||e.minute||e.second){void 0!==e.ampm&&void 0!==e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const n of Object.keys(e))t[n]=e[n].value;return!0}if(e.ampm)return e.hour={value:e.hour?e.hour.value:"pm"===e.ampm.value?t.hour<12?t.hour+12:t.hour:t.hour>=12?t.hour-12:t.hour},t.hour=e.hour.value,t.ampm=e.ampm.value,!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const n in t)t.hasOwnProperty(n)&&delete t[n]})(this.datetimeValue,t,this.displayTimezone)}generatePickerOptions(){const t=(0,E.b)(this);this.locale={monthNames:v(this.monthNames,"monthNames"),monthShortNames:v(this.monthShortNames,"monthShortNames"),dayNames:v(this.dayNames,"dayNames"),dayShortNames:v(this.dayShortNames,"dayShortNames")};const e=Object.assign(Object.assign({mode:t},this.pickerOptions),{columns:this.generateColumns()}),i=e.buttons;return(!i||0===i.length)&&(e.buttons=[{text:this.cancelText,role:"cancel",handler:()=>{this.updateDatetimeValue(this.value),this.ionCancel.emit()}},{text:this.doneText,handler:n=>{this.updateDatetimeValue(n);const o=new Date(it(this.datetimeValue));this.datetimeValue.tzOffset=void 0!==this.displayTimezone&&this.displayTimezone.length>0?q(o,this.displayTimezone)/1e3/60*-1:-1*o.getTimezoneOffset(),this.value=it(this.datetimeValue)}}]),e}generateColumns(){let t=this.pickerFormat||this.displayFormat||lt;if(0===t.length)return[];this.calcMinMax(),t=t.replace("DDDD","{~}").replace("DDD","{~}"),-1===t.indexOf("D")&&(t=t.replace("{~}","D")),t=t.replace(/{~}/g,"");const e=(t=>{const e=[];t=t.replace(/[^\w\s]/gi," "),A.forEach(n=>{n.f.length>1&&t.indexOf(n.f)>-1&&t.indexOf(n.f+n.f.charAt(0))<0&&(t=t.replace(n.f," "+n.f+" "))});const i=t.split(" ").filter(n=>n.length>0);return i.forEach((n,o)=>{A.forEach(r=>{if(n===r.f){if((n===O||n===_)&&(e.indexOf(C)<0&&e.indexOf(y)<0||-1===Ft.indexOf(i[o-1])))return;e.push(n)}})}),e})(t).map(o=>{const r=et(o);let d;d=this[r+"Values"]?nt(this[r+"Values"],r):((t,e,i)=>{const n=[];if(t===V||t===W){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(let o=i.year;o>=e.year;o--)n.push(o)}else if(t===j||t===$||t===B||"M"===t||t===y||t===C)for(let o=1;o<13;o++)n.push(o);else if(t===S||t===L||t===U||"D"===t)for(let o=1;o<32;o++)n.push(o);else if(t===K||"H"===t)for(let o=0;o<24;o++)n.push(o);else if(t===Y||"m"===t)for(let o=0;o<60;o++)n.push(o);else if(t===P||"s"===t)for(let o=0;o<60;o++)n.push(o);else(t===O||t===_)&&n.push("am","pm");return n})(o,this.datetimeMin,this.datetimeMax);const a=d.map(c=>({value:c,text:G(o,c,void 0,this.locale)})),h=((t,e)=>{const i=tt(t,e);if(void 0!==i)return(e===O||e===_)&&(t.ampm=i),i;const n=I((new Date).toISOString());return tt(n,e)})(this.datetimeValue,o),p=a.findIndex(c=>c.value===h);return{name:r,selectedIndex:p>=0?p:0,options:a}}),i=this.datetimeMin,n=this.datetimeMax;return["month","day","hour","minute"].filter(o=>!e.find(r=>r.name===o)).forEach(o=>{i[o]=0,n[o]=0}),this.validateColumns(Yt(e))}validateColumns(t){const e=new Date,i=Q(this.datetimeMin),n=Q(this.datetimeMax),o=t.find(p=>"year"===p.name);let r=e.getFullYear();if(o){o.options.find(c=>c.value===e.getFullYear())||(r=o.options[0].value);const p=o.selectedIndex;if(void 0!==p){const c=o.options[p];c&&(r=c.value)}}const d=this.validateColumn(t,"month",1,i,n,[r,0,0,0,0],[r,12,31,23,59]),l=((t,e)=>4===t||6===t||9===t||11===t?30:2===t?(t=>t%4==0&&t%100!=0||t%400==0)(e)?29:28:31)(d,r),a=this.validateColumn(t,"day",2,i,n,[r,d,0,0,0],[r,d,l,23,59]),h=this.validateColumn(t,"hour",3,i,n,[r,d,a,0,0],[r,d,a,23,59]);return this.validateColumn(t,"minute",4,i,n,[r,d,a,h,0],[r,d,a,h,59]),t}calcMinMax(){const t=(new Date).getFullYear();if(void 0!==this.yearValues){const n=nt(this.yearValues,"year");void 0===this.min&&(this.min=Math.min(...n).toString()),void 0===this.max&&(this.max=Math.max(...n).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());const e=this.datetimeMin=I(this.min),i=this.datetimeMax=I(this.max);e.year=e.year||t,i.year=i.year||t,e.month=e.month||1,i.month=i.month||12,e.day=e.day||1,i.day=i.day||31,e.hour=e.hour||0,i.hour=void 0===i.hour?23:i.hour,e.minute=e.minute||0,i.minute=void 0===i.minute?59:i.minute,e.second=e.second||0,i.second=void 0===i.second?59:i.second,e.year>i.year&&(console.error("min.year > max.year"),e.year=i.year-100),e.year===i.year&&(e.month>i.month?(console.error("min.month > max.month"),e.month=1):e.month===i.month&&e.day>i.day&&(console.error("min.day > max.day"),e.day=1))}validateColumn(t,e,i,n,o,r,d){const l=t.find(m=>m.name===e);if(!l)return 0;const a=r.slice(),h=d.slice(),p=l.options;let c=p.length-1,g=0;for(let m=0;m<p.length;m++){const x=p[m],F=x.value;a[i]=x.value,h[i]=x.value,(x.disabled=F<r[i]||F>d[i]||R(h[0],h[1],h[2],h[3],h[4])<n||R(a[0],a[1],a[2],a[3],a[4])>o)||(c=Math.min(c,m),g=Math.max(g,m))}const b=l.selectedIndex=(0,M.j)(c,l.selectedIndex,g),D=l.options[b];return D?D.value:0}get text(){if(null!=this.value&&0!==this.value.length)return((t,e,i)=>{if(void 0===e)return;const n=[];let o=!1;if(A.forEach((r,d)=>{if(t.indexOf(r.f)>-1){const l="{"+d+"}",a=G(r.f,e[r.k],e,i);!o&&void 0!==a&&null!=e[r.k]&&(o=!0),n.push(l,a||""),t=t.replace(r.f,l)}}),o){for(let r=0;r<n.length;r+=2)t=t.replace(n[r],n[r+1]);return t}})(this.displayFormat||this.pickerFormat||lt,this.datetimeValue,this.locale)}hasValue(){return void 0!==this.text}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,text:e,disabled:i,readonly:n,isExpanded:o,el:r,placeholder:d}=this,l=(0,E.b)(this),a=t+"-lbl",h=(0,M.h)(r),p=void 0===e&&null!=d,c=void 0===e?null!=d?d:"":e,g=void 0===e?null!=d?"placeholder":void 0:"text";return h&&(h.id=a),(0,M.e)(!0,r,this.name,this.value,this.disabled),(0,s.h)(s.H,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-expanded":`${o}`,"aria-haspopup":"true","aria-labelledby":h?a:null,class:{[l]:!0,"datetime-disabled":i,"datetime-readonly":n,"datetime-placeholder":p,"in-item":(0,N.h)("ion-item",r)}},(0,s.h)("div",{class:"datetime-text",part:g},c),(0,s.h)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:b=>this.buttonEl=b}))}get el(){return(0,s.i)(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}},Yt=t=>{const e=[];let i,n;for(let o=0;o<t.length;o++){i=t[o],e.push(0);for(const r of i.options)n=r.text.length,n>e[o]&&(e[o]=n)}return 2===e.length?(n=Math.max(e[0],e[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=17*n+"px"):3===e.length&&(n=Math.max(e[0],e[2]),t[0].align="right",t[1].columnWidth=17*e[1]+"px",t[0].optionsWidth=t[2].optionsWidth=17*n+"px",t[2].align="left"),t},lt="MMM D, YYYY";let Pt=0;dt.style={ios:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400, #999999);--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}",md:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"};const ct=t=>{const e=(0,T.c)(),i=(0,T.c)(),n=(0,T.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(t.querySelector(".picker-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,n])},ht=t=>{const e=(0,T.c)(),i=(0,T.c)(),n=(0,T.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",.01),n.addElement(t.querySelector(".picker-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,n])},pt=class{constructor(t){(0,s.r)(this,t),this.didPresent=(0,s.e)(this,"ionPickerDidPresent",7),this.willPresent=(0,s.e)(this,"ionPickerWillPresent",7),this.willDismiss=(0,s.e)(this,"ionPickerWillDismiss",7),this.didDismiss=(0,s.e)(this,"ionPickerDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,k.B)},this.dispatchCancelHandler=e=>{if((0,k.i)(e.detail.role)){const n=this.buttons.find(o=>"cancel"===o.role);this.callButtonHandler(n)}}}connectedCallback(){(0,k.e)(this.el)}present(){var t=this;return(0,w.Z)(function*(){yield(0,k.d)(t,"pickerEnter",ct,ct,void 0),t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(),t.duration))})()}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,k.f)(this,t,e,"pickerLeave",ht,ht)}onDidDismiss(){return(0,k.g)(this.el,"ionPickerDidDismiss")}onWillDismiss(){return(0,k.g)(this.el,"ionPickerWillDismiss")}getColumn(t){return Promise.resolve(this.columns.find(e=>e.name===t))}buttonClick(t){var e=this;return(0,w.Z)(function*(){const i=t.role;return(0,k.i)(i)?e.dismiss(void 0,i):(yield e.callButtonHandler(t))?e.dismiss(e.getSelected(),t.role):Promise.resolve()})()}callButtonHandler(t){var e=this;return(0,w.Z)(function*(){return!(t&&!1===(yield(0,k.s)(t.handler,e.getSelected())))})()}getSelected(){const t={};return this.columns.forEach((e,i)=>{const n=void 0!==e.selectedIndex?e.options[e.selectedIndex]:void 0;t[e.name]={text:n?n.text:void 0,value:n?n.value:void 0,columnIndex:i}}),t}render(){const{htmlAttributes:t}=this,e=(0,E.b)(this);return(0,s.h)(s.H,Object.assign({"aria-modal":"true",tabindex:"-1"},t,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[e]:!0,[`picker-${e}`]:!0},(0,N.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonPickerWillDismiss:this.dispatchCancelHandler}),(0,s.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,s.h)("div",{tabindex:"0"}),(0,s.h)("div",{class:"picker-wrapper ion-overlay-wrapper",role:"dialog"},(0,s.h)("div",{class:"picker-toolbar"},this.buttons.map(i=>(0,s.h)("div",{class:Rt(i)},(0,s.h)("button",{type:"button",onClick:()=>this.buttonClick(i),class:Ht(i)},i.text)))),(0,s.h)("div",{class:"picker-columns"},(0,s.h)("div",{class:"picker-above-highlight"}),this.presented&&this.columns.map(i=>(0,s.h)("ion-picker-column",{col:i})),(0,s.h)("div",{class:"picker-below-highlight"}))),(0,s.h)("div",{tabindex:"0"}))}get el(){return(0,s.i)(this)}},Rt=t=>({[`picker-toolbar-${t.role}`]:void 0!==t.role,"picker-toolbar-button":!0}),Ht=t=>Object.assign({"picker-button":!0,"ion-activatable":!0},(0,N.g)(t.cssClass));pt.style={ios:".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}",md:".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}"};const ut=class{constructor(t){(0,s.r)(this,t),this.ionPickerColChange=(0,s.e)(this,"ionPickerColChange",7),this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0}colChanged(){this.refresh()}connectedCallback(){var t=this;return(0,w.Z)(function*(){let e=0,i=.81;"ios"===(0,E.b)(t)&&(e=-.46,i=1),t.rotateFactor=e,t.scaleFactor=i,t.gesture=(yield Promise.resolve().then(f.bind(f,4366))).createGesture({el:t.el,gestureName:"picker-swipe",gesturePriority:100,threshold:0,passive:!1,onStart:o=>t.onStart(o),onMove:o=>t.onMove(o),onEnd:o=>t.onEnd(o)}),t.gesture.enable(),t.tmrId=setTimeout(()=>{t.noAnimate=!1,t.refresh(!0)},250)})()}componentDidLoad(){const t=this.optsEl;t&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh()}disconnectedCallback(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(t,e){const i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0),this.emitColChange()}update(t,e,i){if(!this.optsEl)return;let n=0,o=0;const{col:r,rotateFactor:d}=this,l=r.selectedIndex=this.indexForY(-t),a=0===e?"":e+"ms",h=`scale(${this.scaleFactor})`,p=this.optsEl.children;for(let c=0;c<p.length;c++){const g=p[c],b=r.options[c],D=c*this.optHeight+t;let m="";if(0!==d){const F=D*d;Math.abs(F)<=90?(n=0,o=90,m=`rotateX(${F}deg) `):n=-9999}else o=0,n=D;const x=l===c;m+=`translate3d(0px,${n}px,${o}px) `,1!==this.scaleFactor&&!x&&(m+=h),this.noAnimate?(b.duration=0,g.style.transitionDuration=""):e!==b.duration&&(b.duration=e,g.style.transitionDuration=a),m!==b.transform&&(b.transform=m,g.style.transform=m),x!==b.selected&&(b.selected=x,x?g.classList.add(mt):g.classList.remove(mt))}this.col.prevSelected=l,i&&(this.y=t),this.lastIndex!==l&&((0,z.b)(),this.lastIndex=l)}decelerate(){if(0!==this.velocity){this.velocity*=jt,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame(()=>this.decelerate()):(this.velocity=0,this.emitColChange(),(0,z.h)())}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.cancelable&&t.event.preventDefault(),t.event.stopPropagation(),(0,z.a)(),cancelAnimationFrame(this.rafId);const e=this.col.options;let i=e.length-1,n=0;for(let o=0;o<e.length;o++)e[o].disabled||(i=Math.min(i,o),n=Math.max(n,o));this.minY=-i*this.optHeight,this.maxY=-n*this.optHeight}onMove(t){t.event.cancelable&&t.event.preventDefault(),t.event.stopPropagation();let e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)}onEnd(t){if(this.bounceFrom>0)return this.update(this.minY,100,!0),void this.emitColChange();if(this.bounceFrom<0)return this.update(this.maxY,100,!0),void this.emitColChange();if(this.velocity=(0,M.j)(-ft,23*t.velocityY,ft),0===this.velocity&&0===t.deltaY){const e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),gt)}else{if(this.y+=t.deltaY,Math.abs(t.velocityY)<.05){const e=t.deltaY>0,i=Math.abs(this.y)%this.optHeight/this.optHeight;e&&i>.5?this.velocity=-1*Math.abs(this.velocity):!e&&i<=.5&&(this.velocity=Math.abs(this.velocity))}this.decelerate()}}refresh(t){let e=this.col.options.length-1,i=0;const n=this.col.options;for(let r=0;r<n.length;r++)n[r].disabled||(e=Math.min(e,r),i=Math.max(i,r));if(0!==this.velocity)return;const o=(0,M.j)(e,this.col.selectedIndex||0,i);if(this.col.prevSelected!==o||t){const r=o*this.optHeight*-1;this.velocity=0,this.update(r,gt,!0)}}render(){const t=this.col,i=(0,E.b)(this);return(0,s.h)(s.H,{class:{[i]:!0,"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}},t.prefix&&(0,s.h)("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),(0,s.h)("div",{class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:n=>this.optsEl=n},t.options.map((n,o)=>(0,s.h)("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!n.disabled},"opt-index":o},n.text))),t.suffix&&(0,s.h)("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix))}get el(){return(0,s.i)(this)}static get watchers(){return{col:["colChanged"]}}},mt="picker-opt-selected",jt=.97,ft=90,gt=150;ut.style={ios:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}",md:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}"}}}]);