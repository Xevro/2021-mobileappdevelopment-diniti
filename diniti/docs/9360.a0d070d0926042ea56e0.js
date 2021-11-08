"use strict";(self.webpackChunkdiniti=self.webpackChunkdiniti||[]).push([[9360],{9360:(D,l,i)=>{i.r(l),i.d(l,{AdminAddProductPageModule:()=>U});var u=i(6274),m=i(4988),d=i(4683),g=i(4029),h=i(1855),p=i(3278),P=i(6733),e=i(7272),f=i(4071),A=i(3826),v=i(8895),_=i(145),M=i(9388);function Z(t,r){if(1&t&&(e.TgZ(0,"div",20),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.nameErrorMessage)}}function C(t,r){if(1&t&&(e.TgZ(0,"div",20),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.priceErrorMessage)}}function T(t,r){if(1&t&&(e.TgZ(0,"div",20),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.descriptionErrorMessage)}}function b(t,r){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Afbeelding aan het uploaden..."),e.qZA())}function x(t,r){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Klik op 'voeg toe' om het product toe te voegen"),e.qZA())}function I(t,r){1&t&&(e.TgZ(0,"p",21),e._uU(1,"Er is een fout opgetreden bij het ophalen van de afbeelding"),e.qZA())}function O(t,r){if(1&t&&(e.TgZ(0,"div",20),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.errorMessage)}}function y(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"app-button",18),e.NdJ("click",function(){return e.CHM(n),e.oxw().removeProductImage()}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("buttonText","Verwijder afbeelding")("disabled",n.loadingImage)("invertColor",!0)}}const E=[{path:"",component:(()=>{class t{constructor(n,o,s,a,c){this.router=n,this.photoService=o,this.productsProxyService=s,this.currencyPipe=a,this.uuidGenerator=c,this.fieldTypes=P.U,this.submitted=!0,this.loadingImage=!1,this.uploadingImageDone=!1,this.routes=p.Z,this.product={visibility:!1},this.nameErrorMessage=null,this.priceErrorMessage=null,this.descriptionErrorMessage=null,this.errorMessage=null,this.imageError=!1}ngOnInit(){}ionViewWillEnter(){this.product={visibility:!1,name:"",description:"",price:0}}changeVisibility(n){this.product.visibility=n.target.checked}goToProducts(){this.router.navigate(p.Z.adminProducts)}saveNewProduct(){this.product.name&&this.product.price?(this.errorMessage="",this.imageResultData?(this.product.image={name:this.imageResultData.name,url:this.imageResultData.url,__type:"File"},this.product.productId=this.uuidGenerator.generateUUID(),this.productsProxyService.postProductAction(this.product).subscribe(n=>{this.goToProducts()},n=>{this.errorMessage="Er is een onverwacht probleem opgetreden."})):(this.product.productId=this.uuidGenerator.generateUUID(),this.productsProxyService.postProductAction(this.product).subscribe(n=>{this.goToProducts()},n=>{this.errorMessage="Er is een onverwacht probleem opgetreden."}))):this.errorMessage="Naam en of prijs zijn niet ingevuld"}uploadProductImage(){this.loadingImage=!0,this.photoService.capturePhoto().then(o=>(0,h.mG)(this,void 0,void 0,function*(){const s=yield this.photoService.toDataURL(o.webPath).then(a=>this.photoService.dataURItoBlob(a));this.productsProxyService.postImageAction(s).subscribe(a=>{this.imageResultData=a,this.loadingImage=!1,this.uploadingImageDone=!0,this.imageError=!1},a=>{this.uploadingImageDone=!1,this.imageError=!0})}))}removeProductImage(){this.imageResultData=null,this.uploadingImageDone=!1}nameValueChanged(n){0!==n.trim().length?(this.product.name=n.trim(),this.nameErrorMessage=""):this.nameErrorMessage="Naam kan niet leeg zijn"}priceValueChanged(n){try{this.product.price=Number(this.currencyPipe.transform(n,"EUR").replace("\u20ac","").replace(",","")),this.priceErrorMessage=""}catch(o){this.priceErrorMessage="Geen geldig bedrag"}}descriptionValueChanged(n){const o=n.target.value;0!==o.length?(this.product.description=o,this.descriptionErrorMessage=""):this.descriptionErrorMessage="Beschrijving kan niet leeg zijn"}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.F0),e.Y36(f.TA),e.Y36(A.Hw),e.Y36(u.H9),e.Y36(v.AL))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-add-product"]],decls:30,vars:24,consts:[[3,"fullscreen"],[1,"ion-no-border"],[1,"product-header"],["routerDirection","back",1,"cancel",3,"routerLink","textContent"],[1,"header-product-add",3,"textContent","click"],[1,"add-product-box"],[1,"title"],[1,"input-fields"],["class","error-message",4,"ngIf"],[3,"fieldType","name","placeholder","value","onInputChange"],["inputmode","decimal",3,"fieldType","name","placeholder","value","onInputChange"],["placeholder","Beschrijving","name","description","rows","6","cols","20",3,"value","ionInput"],[1,"product-visibility"],[3,"click"],[1,"button",3,"ionChange"],["visibility",""],[1,"product-upload"],["class","image-upload-message",4,"ngIf"],[3,"buttonText","disabled","invertColor","click"],[3,"buttonText","disabled","invertColor","click",4,"ngIf"],[1,"error-message"],[1,"image-upload-message"]],template:function(n,o){if(1&n){const s=e.EpF();e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-header",1),e.TgZ(2,"ion-toolbar"),e.TgZ(3,"div",2),e.TgZ(4,"ion-buttons"),e._UZ(5,"ion-button",3),e.qZA(),e.TgZ(6,"ion-buttons"),e.TgZ(7,"ion-button",4),e.NdJ("click",function(){return o.saveNewProduct()}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"div",5),e.TgZ(9,"p",6),e._uU(10,"Voeg een product toe"),e.qZA(),e.TgZ(11,"div",7),e.YNc(12,Z,3,1,"div",8),e.TgZ(13,"app-input-field",9),e.NdJ("onInputChange",function(c){return o.nameValueChanged(c)}),e.qZA(),e.YNc(14,C,3,1,"div",8),e.TgZ(15,"app-input-field",10),e.NdJ("onInputChange",function(c){return o.priceValueChanged(c)}),e.qZA(),e.YNc(16,T,3,1,"div",8),e.TgZ(17,"ion-textarea",11),e.NdJ("ionInput",function(c){return o.descriptionValueChanged(c)}),e.qZA(),e.TgZ(18,"ion-item",12),e.TgZ(19,"ion-label",13),e.NdJ("click",function(){e.CHM(s);const c=e.MAs(22);return c.checked=!c.checked}),e._uU(20,"Zichtbaar voor klanten"),e.qZA(),e.TgZ(21,"ion-toggle",14,15),e.NdJ("ionChange",function(c){return o.changeVisibility(c)}),e.qZA(),e.qZA(),e.TgZ(23,"div",16),e.YNc(24,b,2,0,"p",17),e.YNc(25,x,2,0,"p",17),e.YNc(26,I,2,0,"p",17),e.YNc(27,O,3,1,"div",8),e.TgZ(28,"app-button",18),e.NdJ("click",function(){return o.uploadProductImage()}),e.qZA(),e.YNc(29,y,1,3,"app-button",19),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&n&&(e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("routerLink",o.routes.adminProducts)("textContent","Annuleer"),e.xp6(2),e.Q6J("textContent","Voeg toe"),e.xp6(5),e.Q6J("ngIf",o.nameErrorMessage),e.xp6(1),e.Q6J("fieldType",o.fieldTypes.text)("name","name")("placeholder","Naam")("value",null==o.product?null:o.product.name),e.xp6(1),e.Q6J("ngIf",o.priceErrorMessage),e.xp6(1),e.Q6J("fieldType",o.fieldTypes.text)("name","price")("placeholder","Prijs")("value",null==o.product?null:o.product.price),e.xp6(1),e.Q6J("ngIf",o.descriptionErrorMessage),e.xp6(1),e.s9C("value",null==o.product?null:o.product.description),e.xp6(7),e.Q6J("ngIf",o.loadingImage),e.xp6(1),e.Q6J("ngIf",!o.loadingImage&&o.uploadingImageDone),e.xp6(1),e.Q6J("ngIf",!o.loadingImage&&o.imageError),e.xp6(1),e.Q6J("ngIf",o.errorMessage),e.xp6(1),e.Q6J("buttonText","Voeg een product foto toe")("disabled",o.loadingImage)("invertColor",!0),e.xp6(1),e.Q6J("ngIf",o.imageResultData&&!o.loadingImage))},directives:[d.W2,d.Gu,d.sr,d.Sm,d.YG,d.YI,g.rH,u.O5,_.q,d.g2,d.j9,d.Ie,d.Q$,d.ho,d.w,M.r],styles:["ion-content[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{font-size:.95rem;color:var(--color-app-primary)}ion-content[_ngcontent-%COMP%]   .product-header[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{position:absolute;left:15px;top:0;--color: var(--color-app-primary);text-transform:lowercase;font-size:1rem;font-weight:normal;text-decoration:none}ion-content[_ngcontent-%COMP%]   .product-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:30px;text-align:center}ion-content[_ngcontent-%COMP%]   .product-header[_ngcontent-%COMP%]   .header-product-add[_ngcontent-%COMP%]{position:absolute;right:10px;top:0;--color: var(--color-app-primary);text-transform:lowercase;font-size:1rem;font-weight:normal;text-decoration:none}ion-content[_ngcontent-%COMP%]   .add-product-box[_ngcontent-%COMP%]{margin-top:70px;max-width:330px;margin-left:auto;margin-right:auto}ion-content[_ngcontent-%COMP%]   .add-product-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center}ion-content[_ngcontent-%COMP%]   .add-product-box[_ngcontent-%COMP%]   .input-fields[_ngcontent-%COMP%]   .product-upload[_ngcontent-%COMP%]{margin-top:10px;text-align:center}ion-content[_ngcontent-%COMP%]   .add-product-box[_ngcontent-%COMP%]   .input-fields[_ngcontent-%COMP%]   .product-upload[_ngcontent-%COMP%]   .image-upload-message[_ngcontent-%COMP%]{font-size:1rem;font-weight:bold}ion-content[_ngcontent-%COMP%]   .add-product-box[_ngcontent-%COMP%]   .input-fields[_ngcontent-%COMP%]   .product-visibility[_ngcontent-%COMP%]{left:-10px;margin:15px auto auto}ion-content[_ngcontent-%COMP%]   .add-product-box[_ngcontent-%COMP%]   .input-fields[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{margin-top:10px;background:var(--color-app-shade-white-1);border:1px solid var(--color-app-shade-white-2);box-sizing:border-box;border-radius:8px;--padding-start: 8px}"]}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(E)],g.Bz]}),t})();var N=i(9861),q=i(7952);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[u.H9],imports:[[u.ez,m.u5,d.Pc,J,N.r,q.h]]}),t})()}}]);