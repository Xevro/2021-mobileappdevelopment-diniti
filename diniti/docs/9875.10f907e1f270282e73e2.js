"use strict";(self.webpackChunkdiniti=self.webpackChunkdiniti||[]).push([[9875],{9875:(z,u,r)=>{r.r(u),r.d(u,{UserProfilePageModule:()=>F});var d=r(6274),_=r(4988),l=r(4683),g=r(4029),f=r(1855),m=r(3278),P=r(6733),e=r(7272),x=r(7046),h=r(3826),C=r(4071),M=r(145),v=r(9388);function O(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-buttons"),e.TgZ(1,"ion-button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().cancelEditUser()}),e.qZA(),e.qZA()}2&n&&(e.xp6(1),e.Q6J("textContent","Annuleer"))}function b(n,i){1&n&&e._UZ(0,"ion-back-button",7)}function Z(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-buttons"),e.TgZ(1,"ion-button",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().handleEditUserData()}),e.qZA(),e.qZA()}2&n&&(e.xp6(1),e.Q6J("textContent","Bewerk"))}function T(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-buttons"),e.TgZ(1,"ion-button",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().validateInput()}),e.qZA(),e.qZA()}2&n&&(e.xp6(1),e.Q6J("textContent","Bewaar"))}function U(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"img",17),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).removeProfilePicture()}),e.qZA()}}function A(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"img",18),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).changeProfilePicture()}),e.qZA()}}function E(n,i){1&n&&(e.TgZ(0,"p",19),e._uU(1,"Afbeelding aan het uploaden..."),e.qZA())}function D(n,i){if(1&n&&(e.TgZ(0,"div",20),e.TgZ(1,"div",21),e._UZ(2,"img",22),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"div",23),e._UZ(6,"img",24),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(4),e.Oqu(null==t.userData?null:t.userData.username),e.xp6(4),e.Oqu(null==t.userData?null:t.userData.userEmail)}}function I(n,i){1&n&&(e.TgZ(0,"div",20),e.TgZ(1,"div",21),e.TgZ(2,"p"),e._uU(3,"Gebruikersgegevens worden geladen"),e.qZA(),e.qZA(),e.qZA())}function N(n,i){if(1&n&&(e.TgZ(0,"div",29),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&n){const t=e.oxw(3);e.xp6(2),e.Oqu(t.firstNameErrorMessage)}}function w(n,i){if(1&n&&(e.TgZ(0,"div",29),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&n){const t=e.oxw(3);e.xp6(2),e.Oqu(t.lastNameErrorMessage)}}function q(n,i){if(1&n&&(e.TgZ(0,"div",29),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&n){const t=e.oxw(3);e.xp6(2),e.Oqu(t.userNameErrorMessage)}}function y(n,i){if(1&n&&(e.TgZ(0,"div",29),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&n){const t=e.oxw(3);e.xp6(2),e.Oqu(t.emailErrorMessage)}}function J(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",25),e.TgZ(1,"div",26),e.TgZ(2,"ion-label"),e._uU(3,"Voornaam"),e.qZA(),e.TgZ(4,"app-input-field",27),e.NdJ("onInputChange",function(a){return e.CHM(t),e.oxw(2).firstNameValueChanged(a)}),e.qZA(),e.YNc(5,N,3,1,"div",28),e.qZA(),e.TgZ(6,"div",26),e.TgZ(7,"ion-label"),e._uU(8,"Achternaam"),e.qZA(),e.TgZ(9,"app-input-field",27),e.NdJ("onInputChange",function(a){return e.CHM(t),e.oxw(2).lastNameValueChanged(a)}),e.qZA(),e.YNc(10,w,3,1,"div",28),e.qZA(),e.TgZ(11,"div",26),e.TgZ(12,"ion-label"),e._uU(13,"Gebruikersnaam"),e.qZA(),e.TgZ(14,"app-input-field",27),e.NdJ("onInputChange",function(a){return e.CHM(t),e.oxw(2).userNameValueChanged(a)}),e.qZA(),e.qZA(),e.YNc(15,q,3,1,"div",28),e.TgZ(16,"div",26),e.TgZ(17,"ion-label"),e._uU(18,"Email adres"),e.qZA(),e.TgZ(19,"app-input-field",27),e.NdJ("onInputChange",function(a){return e.CHM(t),e.oxw(2).emailValueChanged(a)}),e.qZA(),e.qZA(),e.YNc(20,y,3,1,"div",28),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(4),e.Q6J("fieldType",t.fieldTypes.text)("name","voornaam")("placeholder","Voornaam")("value",t.userData.firstname),e.xp6(1),e.Q6J("ngIf",t.firstNameErrorMessage),e.xp6(4),e.Q6J("fieldType",t.fieldTypes.text)("name","achternaam")("placeholder","Achternaam")("value",t.userData.lastname),e.xp6(1),e.Q6J("ngIf",t.lastNameErrorMessage),e.xp6(4),e.Q6J("fieldType",t.fieldTypes.text)("name","gebruikersnaam")("placeholder","Gebruikersnaam")("value",t.userData.username),e.xp6(1),e.Q6J("ngIf",t.userNameErrorMessage),e.xp6(4),e.Q6J("fieldType",t.fieldTypes.email)("name","email")("placeholder","Email")("value",t.userData.userEmail),e.xp6(1),e.Q6J("ngIf",t.emailErrorMessage)}}function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"app-button",30),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).logout()}),e.qZA(),e.qZA()}2&n&&(e.xp6(1),e.Q6J("buttonText","Log uit")("invertColor",!0))}function S(n,i){if(1&n&&(e.TgZ(0,"div",9),e.TgZ(1,"div",10),e.YNc(2,U,1,0,"img",11),e.YNc(3,A,1,0,"img",12),e._UZ(4,"img",13),e.qZA(),e.YNc(5,E,2,0,"p",14),e.TgZ(6,"h4"),e._uU(7),e.qZA(),e.YNc(8,D,9,2,"div",15),e.YNc(9,I,4,0,"div",15),e.YNc(10,J,21,20,"div",16),e.YNc(11,Q,2,2,"div",3),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.toggleEditView),e.xp6(1),e.Q6J("ngIf",t.toggleEditView),e.xp6(1),e.s9C("src",null==t.userData||null==t.userData.profilePicture?null:t.userData.profilePicture.url,e.LSH),e.xp6(1),e.Q6J("ngIf",t.loadingImage&&t.toggleEditView),e.xp6(2),e.Oqu((null==t.userData?null:t.userData.firstname)+" "+(null==t.userData?null:t.userData.lastname)),e.xp6(1),e.Q6J("ngIf",!t.toggleEditView&&t.userData),e.xp6(1),e.Q6J("ngIf",!t.toggleEditView&&!t.userData),e.xp6(1),e.Q6J("ngIf",t.toggleEditView),e.xp6(1),e.Q6J("ngIf",!t.toggleEditView)}}const V=[{path:"",component:(()=>{class n{constructor(t,o,a,s){this.router=t,this.authenticationService=o,this.userProxyService=a,this.photoService=s,this.editUserData=!1,this.toggleEditView=!1,this.cancelButton=!1,this.fieldTypes=P.U,this.submitted=!0,this.editButton=!0,this.loadingImage=!1,this.updatedData={},this.firstNameErrorMessage=null,this.lastNameErrorMessage=null,this.userNameErrorMessage=null,this.emailErrorMessage=null}ngOnInit(){}ionViewWillEnter(){this.getUserDataFromCloud()}getUserDataFromCloud(){const t=this.authenticationService.getObjectId();this.userProxyService.getUserDataAction(t).subscribe(o=>{this.userData=o,this.userData.email=o.userEmail,this.updatedData.firstname=o.firstname,this.updatedData.lastname=o.lastname,this.updatedData.email=o.userEmail,this.updatedData.userEmail=o.userEmail,this.updatedData.username=o.username,this.loadingImage=!1},o=>{})}logout(){this.authenticationService.logOut(),this.router.navigate(m.Z.onboarding)}cancelEditUser(){this.toggleEditView=!1,this.cancelButton=!1,this.editButton=!0}handleEditUserData(){this.cancelButton=!0,this.editButton=!1,this.toggleEditView=!0}validateInput(){""===this.updatedData.email||0===this.updatedData.email.length?(this.emailErrorMessage="Email adres mag niet leeg zijn",this.submitted=!1):/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.updatedData.email).toLowerCase())?this.emailErrorMessage="":(this.emailErrorMessage="Email adres is niet in het juiste formaat",this.submitted=!1),""===this.updatedData.firstname?(this.firstNameErrorMessage="Voornaam mag niet leeg zijn",this.submitted=!1):this.firstNameErrorMessage="",""===this.updatedData.lastname?(this.lastNameErrorMessage="Achternaam mag niet leeg zijn",this.submitted=!1):this.lastNameErrorMessage="",""===this.updatedData.username?(this.userNameErrorMessage="Gebruikersnaam mag niet leeg zijn",this.submitted=!1):this.userNameErrorMessage="",!this.emailErrorMessage&&!this.firstNameErrorMessage&&!this.lastNameErrorMessage&&!this.userNameErrorMessage&&this.updateUserData()}updateUserData(){this.updatedData.userEmail=this.updatedData.email,this.userProxyService.updateUserdataAction(this.updatedData,this.authenticationService.getObjectId()).subscribe(t=>{this.getUserDataFromCloud(),this.editUserData=!this.editUserData,this.cancelButton=!1,this.editButton=!0,this.toggleEditView=!1},t=>{location.reload(!0)})}removeProfilePicture(){return(0,f.mG)(this,void 0,void 0,function*(){this.loadingImage=!0;const t=window.location,o=t.protocol+"//"+t.host+"/assets/icon/DNTUserDARK.png",a=yield this.photoService.toDataURL(o).then(s=>this.photoService.dataURItoBlob(s));this.userProxyService.postImageAction(a).subscribe(s=>{this.userProxyService.updateUserImageAction({profilePicture:{name:s.name,url:s.url,__type:"File"}},this.authenticationService.getObjectId()).subscribe(p=>{this.getUserDataFromCloud()},p=>{location.reload(!0)})},s=>{location.reload(!0)})})}changeProfilePicture(){this.loadingImage=!0,this.photoService.capturePhoto().then(o=>(0,f.mG)(this,void 0,void 0,function*(){const a=yield this.photoService.toDataURL(o.webPath).then(s=>this.photoService.dataURItoBlob(s));this.userProxyService.postImageAction(a).subscribe(s=>{this.userProxyService.updateUserImageAction({profilePicture:{name:s.name,url:s.url,__type:"File"}},this.authenticationService.getObjectId()).subscribe(p=>{this.getUserDataFromCloud()},p=>{location.reload(!0)})},s=>{location.reload(!0)})}))}firstNameValueChanged(t){this.updatedData.firstname=t.trim()}lastNameValueChanged(t){this.updatedData.lastname=t.trim()}userNameValueChanged(t){this.updatedData.username=t.trim()}emailValueChanged(t){this.updatedData.email=t.trim()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0),e.Y36(x.$),e.Y36(h.Jc),e.Y36(C.TA))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-profile"]],decls:12,vars:5,consts:[[1,"profile-page-box"],[1,"ion-no-border"],[1,"profile-header"],[4,"ngIf"],["class","back-button","defaultHref","overview/orders","icon","","text","Terug",4,"ngIf"],["class","profile-page",4,"ngIf"],[1,"cancel-button",3,"textContent","click"],["defaultHref","overview/orders","icon","","text","Terug",1,"back-button"],[1,"header-edit-profile",3,"textContent","click"],[1,"profile-page"],[1,"profile-image-box"],["alt","Remove profile image","class","remove-icon","src","../../../../assets/icon/cancel-icon.svg",3,"click",4,"ngIf"],["alt","Edit profile image","class","edit-icon","src","../../../../assets/icon/edit-circle.svg",3,"click",4,"ngIf"],["alt","profile image",1,"profile-image",3,"src"],["class","image-upload-message",4,"ngIf"],["class","profile-data",4,"ngIf"],["class","edit-user-fields",4,"ngIf"],["alt","Remove profile image","src","../../../../assets/icon/cancel-icon.svg",1,"remove-icon",3,"click"],["alt","Edit profile image","src","../../../../assets/icon/edit-circle.svg",1,"edit-icon",3,"click"],[1,"image-upload-message"],[1,"profile-data"],[1,"username-box"],["alt","Username","src","../../../../assets/icon/user-icon.svg"],[1,"email-box"],["alt","Email","src","../../../../assets/icon/email-icon.svg"],[1,"edit-user-fields"],[1,"input-field"],[3,"fieldType","name","placeholder","value","onInputChange"],["class","error-message",4,"ngIf"],[1,"error-message"],[1,"logout-button",3,"buttonText","invertColor","click"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-content"),e.TgZ(1,"div",0),e.TgZ(2,"ion-header",1),e.TgZ(3,"ion-toolbar"),e.TgZ(4,"div",2),e.YNc(5,O,2,1,"ion-buttons",3),e.YNc(6,b,1,0,"ion-back-button",4),e.TgZ(7,"h2"),e._uU(8,"Profiel"),e.qZA(),e.YNc(9,Z,2,1,"ion-buttons",3),e.YNc(10,T,2,1,"ion-buttons",3),e.qZA(),e.qZA(),e.qZA(),e.YNc(11,S,12,9,"div",5),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngIf",o.cancelButton),e.xp6(1),e.Q6J("ngIf",!o.cancelButton),e.xp6(3),e.Q6J("ngIf",o.editButton),e.xp6(1),e.Q6J("ngIf",!o.editButton),e.xp6(1),e.Q6J("ngIf",o.userData))},directives:[l.W2,l.Gu,l.sr,d.O5,l.Sm,l.YG,l.oU,l.cs,l.Q$,M.q,v.r],styles:["ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]{margin-right:-5px;margin-left:-5px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]{background-color:var(--color-app-primary);margin:-20px 0 0;padding-top:20px;height:235px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]{position:absolute;--color: var(--color-app-secondary);margin-left:15px;margin-top:40px;text-transform:lowercase;font-size:1rem;font-weight:normal;text-decoration:none}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{position:absolute;--color: var(--color-app-secondary);margin-left:15px;margin-top:22px;text-transform:lowercase;font-size:1rem;font-weight:normal;text-decoration:none}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:30px;text-align:center;color:var(--color-app-secondary)}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .header-edit-profile[_ngcontent-%COMP%]{position:absolute;right:15px;top:-45px;--color: var(--color-app-secondary);text-transform:lowercase;font-size:1rem;font-weight:normal;text-decoration:none}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]{z-index:100;text-align:center;position:absolute;top:0;left:0;right:0;margin-top:85px;margin-left:auto;margin-right:auto}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .image-upload-message[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:bold}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-image-box[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:15px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-image-box[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;margin-top:28px;margin-left:calc(50% + 45px);margin-right:auto}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-image-box[_ngcontent-%COMP%]   .remove-icon[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;margin-top:28px;margin-right:calc(50% + 43px);margin-left:auto}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-image-box[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{border-radius:50%;width:150px;height:150px;border:6px solid #fff;background-color:#fff}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;font-style:normal;font-weight:600;font-size:2rem;text-align:center}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-data[_ngcontent-%COMP%]{display:inline-grid;margin-top:15px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-data[_ngcontent-%COMP%]   .username-box[_ngcontent-%COMP%]{display:inline-flex;text-align:center}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-data[_ngcontent-%COMP%]   .username-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;margin-left:10px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-data[_ngcontent-%COMP%]   .username-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:-12px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-data[_ngcontent-%COMP%]   .email-box[_ngcontent-%COMP%]{display:inline-flex;text-align:center}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-data[_ngcontent-%COMP%]   .email-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:0;margin-left:10px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .profile-data[_ngcontent-%COMP%]   .email-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:-12px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .edit-user-fields[_ngcontent-%COMP%]{width:300px;margin:35px auto 70px}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .edit-user-fields[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{font-size:.95rem;color:var(--color-app-primary)}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .edit-user-fields[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{margin-top:18px;text-align:left}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .edit-user-fields[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:bold}ion-content[_ngcontent-%COMP%]   .profile-page-box[_ngcontent-%COMP%]   .profile-page[_ngcontent-%COMP%]   .logout-button[_ngcontent-%COMP%]{width:20px}"]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(V)],g.Bz]}),n})();var Y=r(7952),B=r(9861);let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.ez,_.u5,l.Pc,k,Y.h,B.r]]}),n})()}}]);