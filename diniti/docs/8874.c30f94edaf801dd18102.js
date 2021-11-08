"use strict";(self.webpackChunkdiniti=self.webpackChunkdiniti||[]).push([[8874],{8874:(A,P,i)=>{i.r(P),i.d(P,{AdminOverviewPageModule:()=>u});var p=i(6274),h=i(4988),a=i(4683),v=i(4029),t=i(7272),m=i(3826),O=i(2269);function f(s,l){if(1&s&&t._UZ(0,"app-order-list",6),2&s){const c=t.oxw();t.Q6J("orders",c.orders)}}function S(s,l){1&s&&(t.TgZ(0,"div",7),t.TgZ(1,"p"),t._uU(2,"Bestellingen laden..."),t.qZA(),t.qZA())}function r(s,l){1&s&&(t.TgZ(0,"div",8),t.TgZ(1,"p"),t._uU(2,"Geen bestellingen gevonden"),t.qZA(),t.qZA())}const e=[{path:"",component:(()=>{class s{constructor(c,d){this.router=c,this.ordersProxyService=d,this.loading=!1}ngOnInit(){this.loading=!0,this.ordersProxyService.getAllOrdersAction().subscribe(c=>{this.orders=c,this.loading=!1},c=>{})}}return s.\u0275fac=function(c){return new(c||s)(t.Y36(v.F0),t.Y36(m.mT))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-admin-overview"]],decls:8,vars:4,consts:[[3,"fullscreen"],[1,"title-box"],[1,"orders-list"],[3,"orders",4,"ngIf"],["class","orders-loading",4,"ngIf"],["class","no-orders",4,"ngIf"],[3,"orders"],[1,"orders-loading"],[1,"no-orders"]],template:function(c,d){1&c&&(t.TgZ(0,"ion-content",0),t.TgZ(1,"div",1),t.TgZ(2,"h2"),t._uU(3,"Bestellingen"),t.qZA(),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,f,1,1,"app-order-list",3),t.YNc(6,S,3,0,"div",4),t.YNc(7,r,3,0,"div",5),t.qZA(),t.qZA()),2&c&&(t.Q6J("fullscreen",!0),t.xp6(5),t.Q6J("ngIf",(null==d.orders||null==d.orders.results?null:d.orders.results.length)>0&&!d.loading),t.xp6(1),t.Q6J("ngIf",d.loading),t.xp6(1),t.Q6J("ngIf",0===(null==d.orders||null==d.orders.results?null:d.orders.results.length)&&!d.loading))},directives:[a.W2,p.O5,O.W],styles:["ion-content[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   .list-title[_ngcontent-%COMP%]{max-width:var(--list-width);position:relative;margin-left:auto;margin-right:auto;padding-left:18px}ion-content[_ngcontent-%COMP%]   .orders-list[_ngcontent-%COMP%]{margin-top:100px}ion-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:30px;text-align:center}ion-content[_ngcontent-%COMP%]   .no-orders[_ngcontent-%COMP%]{text-align:center;margin:auto}ion-content[_ngcontent-%COMP%]   .orders-loading[_ngcontent-%COMP%]{text-align:center;margin:auto}"]}),s})()}];let n=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[v.Bz.forChild(e)],v.Bz]}),s})();var o=i(8524);let u=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[p.ez,h.u5,a.Pc,n,o.C]]}),s})()},3826:(A,P,i)=>{i.d(P,{mT:()=>m,Hw:()=>O,Gz:()=>S,Jc:()=>f});var p=i(8895),h=i(4766),a=i(7272),v=i(1887),t=i(7046);let m=(()=>{class r extends p.Zx{constructor(e,n){super(e),this.authenticationService=n,this.api=h.N.api}getAllOrdersAction(){const e={"X-Parse-Session-Token":this.authenticationService.getSessionToken(),"X-skip-request":"true"};return this.getRequest("classes/Orders",e)}getOrdersAction(e){const n={"X-Parse-Session-Token":this.authenticationService.getSessionToken()};return this.getRequest(`classes/Orders?where={"userId":{"__type":"Pointer","className":"_User","objectId":"${e}"}}`,n)}getOrderByIdAction(e){const n={"X-Parse-Session-Token":this.authenticationService.getSessionToken()};return this.getRequest(`classes/Orders?where={"orderUuid":"${e}"}`,n)}postOrderAction(e){return this.postRequest("classes/Orders",e)}updateOrderAction(e,n){return this.putRequest(`classes/Orders/${n}`,{status:e},{"Content-Type":"application/json"})}}return r.\u0275fac=function(e){return new(e||r)(a.LFG(v.eN),a.LFG(t.$))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),O=(()=>{class r extends p.Zx{constructor(e,n){super(e),this.authenticationService=n,this.api=h.N.api}getAllProductsAction(){const e={"X-Parse-Session-Token":this.authenticationService.getSessionToken(),"X-skip-request":"true"};return this.getRequest("classes/Products",e)}getProductsWithVisibilityAction(e){const n={"X-Parse-Session-Token":this.authenticationService.getSessionToken()};return this.getRequest(`classes/Products?where={"visibility":${e}}`,n)}getProductByIdAction(e){const n={"X-Parse-Session-Token":this.authenticationService.getSessionToken(),"X-skip-request":"true"};return this.getRequest(`classes/Products?where={"productId":"${e}"}`,n)}updateProductVisibilityAction(e,n){return this.putRequest(`classes/Products/${n}`,{visibility:e},{"Content-Type":"application/json"})}updateProductAction(e,n){return this.putRequest(`classes/Products/${n}`,e,{"Content-Type":"application/json"})}deleteProductsAction(e){return this.deleteRequest(`classes/Products/${e}`)}postImageAction(e){return this.postRequest("files/product-image.png",e,{"Content-Type":"image/png"})}updateProductImageAction(e,n){const o="classes/Products/"+n,u={"Content-Type":"application/json","X-Parse-Session-Token":this.authenticationService.getSessionToken()};return this.putRequest(o,e,u)}postProductAction(e){return this.postRequest("classes/Products",e)}}return r.\u0275fac=function(e){return new(e||r)(a.LFG(v.eN),a.LFG(t.$))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),f=(()=>{class r extends p.Zx{constructor(e,n){super(e),this.authenticationService=n,this.api=h.N.api}getUserDataAction(e){return this.getRequest(`users/${e}`,{"X-skip-request":"true"})}postImageAction(e){return this.postRequest("files/userProfilePicture.png",e,{"Content-Type":"image/png"})}updateUserImageAction(e,n){const o="users/"+n,u={"Content-Type":"application/json","X-Parse-Session-Token":this.authenticationService.getSessionToken()};return this.putRequest(o,e,u)}updateUserdataAction(e,n){const o=`users/${n}`,u={"X-Parse-Session-Token":this.authenticationService.getSessionToken()};return this.putRequest(o,e,u)}}return r.\u0275fac=function(e){return new(e||r)(a.LFG(v.eN),a.LFG(t.$))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),S=(()=>{class r extends p.Fn{constructor(){super(),this.storageName="products"}setProductsData(e){this.saveToStorage(e)}getProductsData(){return this.getStoredData()}removeProductsData(){return this.removeStoredData()}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);