"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2931],{2931:(q,d,l)=>{l.r(d),l.d(d,{UsersPageModule:()=>S});var c=l(9808),g=l(4182),m=l(501),o=l(5649),f=l(8504),t=l(2096),h=l(3497),p=l(655);let v=(()=>{class i{constructor(e){this.alertCtrl=e}ngOnChanges(e){}ngOnInit(){this.Item&&this.Item.load()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(o.Br))},i.\u0275cmp=t.Xpm({type:i,selectors:[["my-item"]],inputs:{Item:"Item",Service:"Service"},features:[t.TTD],decls:5,vars:2,consts:[["slot","start"],["slot","start",1,"note"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-item")(1,"p",0),t._uU(2),t.qZA(),t.TgZ(3,"p",1),t._uU(4),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(null==n.Item?null:n.Item.title),t.xp6(2),t.Oqu(null==n.Item?null:n.Item.getNote().value))},directives:[o.Ie],styles:["p.note[_ngcontent-%COMP%]{font-style:italic;color:#f0f8ff;background-color:#d3d3d3;font-size:.7em;top:17px;position:relative}article[_ngcontent-%COMP%]{display:flex;border-radius:1em;background-color:#f3f4f7;border:solid #f4f5f8 1px;flex:1 1 0%;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:hidden;box-sizing:border-box}"],changeDetection:0}),i})();var _=l(4263);function C(i,s){1&i&&t._UZ(0,"p",2)}let I=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-show-value"]],inputs:{value:"value"},decls:5,vars:3,consts:[[3,"ngSwitch"],["slot","start",4,"ngSwitchCase"],["slot","start"]],template:function(e,n){1&e&&(t.TgZ(0,"div")(1,"span",0),t.YNc(2,C,1,0,"p",1),t.TgZ(3,"p"),t._uU(4),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngSwitch",null==n.value?null:n.value.value),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(2),t.hij(" ",null==n.value?null:n.value.value," "))},directives:[c.RF,c.n9],styles:[""]}),i})();function b(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"ion-fab-button")(1,"ion-icon",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).doAction(a)}),t.qZA()()}if(2&i){const e=s.$implicit;t.xp6(1),t.s9C("name",null==e?null:e.getIcon())}}function x(i,s){if(1&i&&(t.TgZ(0,"div")(1,"ion-fab",9)(2,"ion-fab-button",10),t._UZ(3,"ion-icon",11),t.qZA(),t.TgZ(4,"ion-fab-list",12),t.YNc(5,b,2,1,"ion-fab-button",13),t.qZA()()()),2&i){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",null==e.Item?null:e.Item.quickActions)}}function P(i,s){1&i&&t._UZ(0,"p")}function Z(i,s){1&i&&t._UZ(0,"p")}let M=(()=>{class i extends v{constructor(e,n,r,a){super(e),this.alertCtrl=e,this.router=n,this.ref=r,this.modal=a,this.Note=new _.B({label:"note",value:this.note})}ngOnInit(){this.Item&&this.setValue()}setValue(){this.title=String(this.Item?this.Item.getTitle().value:""),this.note=String(this.Item?this.Item.getNote().value:""),this.value2=this.Item.getValue2(),this.value3=this.Item.getValue3(),this.value4=this.Item.getValue4()}doAction(e){e.getAction()({alertCtrl:this.alertCtrl,router:this.router,Service:this.Service,modal:this.modal})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(o.Br),t.Y36(m.F0),t.Y36(t.sBO),t.Y36(o.IN))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-page-item"]],inputs:{Item:"Item"},features:[t.qOj],decls:16,vars:9,consts:[[1,"value3"],["slot","start",1,"itemTitle"],[3,"value"],[1,"note",3,"value"],[1,"value2",3,"value"],["slot","start",1,"value4",2,"white-space","nowrap"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["vertical","bottom","horizontal","end"],["size","small"],["name","flash","color","energetic"],["side","start"],[4,"ngFor","ngForOf"],[3,"name","click"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-item")(1,"article")(2,"p",0),t._uU(3),t.qZA(),t.TgZ(4,"h1",1),t._uU(5),t.qZA(),t._UZ(6,"app-show-value",2),t.TgZ(7,"div"),t._UZ(8,"app-show-value",3),t.qZA(),t._UZ(9,"app-show-value",4)(10,"span",5),t.TgZ(11,"div")(12,"span",6),t.YNc(13,x,6,1,"div",7),t.YNc(14,P,1,0,"p",7),t.YNc(15,Z,1,0,"p",8),t.qZA()()()()),2&e&&(t.xp6(3),t.AsE(" ",null==n.value3?null:n.value3.label," ",null==n.value3?null:n.value3.value," "),t.xp6(2),t.Oqu(null==n.Item?null:n.Item.getTitle().value),t.xp6(1),t.Q6J("value",n.Note),t.xp6(2),t.Q6J("value",n.Note),t.xp6(1),t.Q6J("value",n.value2),t.xp6(3),t.Q6J("ngSwitch",null==n.Item?null:n.Item.hasQuickActions()),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1))},directives:[o.Ie,I,c.RF,c.n9,o.IJ,o.W4,o.gu,o.zq,c.sg,c.ED],styles:[".note[_ngcontent-%COMP%]{font-style:italic;background-color:#d3d3d3;font-size:.7em;top:17px;position:relative}p.itemTitle[_ngcontent-%COMP%]{font-weight:700;font-style:oblique}ion-fab.fab-horizontal-end.fab-vertical-bottom.hydrated[_ngcontent-%COMP%]{top:0px}p.note[_ngcontent-%COMP%]{font-style:italic;font-size:large}p.value3[_ngcontent-%COMP%]{position:relative}span.value2[_ngcontent-%COMP%]{position:absolute;top:3em}span.value4[_ngcontent-%COMP%]{position:relative}p.note[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}div.input-wrapper[_ngcontent-%COMP%]{padding-left:unset;padding-right:unset;padding-inline-start:16px;padding-inline-end:16px}article[_ngcontent-%COMP%]{display:flex;border-radius:1em;box-shadow:2px 2px beige;border:solid #f4f5f8 1px;flex:1 1 0%;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:hidden;box-sizing:border-box}p.value3[_ngcontent-%COMP%]{font-size:10px;top:-.35em;right:-1em}.value2[_ngcontent-%COMP%]{position:relative;left:1em;top:.5em}app-show-value.value2[_ngcontent-%COMP%]{position:relative;left:11em;top:3.5em;font-size:10px}"],changeDetection:0}),i})();var y=l(3682),T=l(3413);function w(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item-sliding",null,8),t._UZ(2,"app-page-item",9),t.TgZ(3,"ion-item-options",10)(4,"ion-button",11),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.MAs(1);return t.oxw().deleteItem(a,u)}),t._UZ(5,"ion-icon",12),t._uU(6," Elimina "),t.qZA()(),t.TgZ(7,"ion-item-options",13)(8,"ion-button",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.MAs(1);return t.oxw().updateItem(a,u)}),t._UZ(9,"ion-icon",15),t._uU(10," Modifica "),t.qZA()()()}if(2&i){const e=s.$implicit;t.xp6(2),t.Q6J("Item",e)}}let O=(()=>{class i{constructor(e,n,r,a){this.alertCtrl=e,this.router=n,this.modalController=r,this.ref=a,this.showSpinner=!0,this.filterFunction=u=>!0}getMultiplicityText(){var e=this.dummyItem.getCountingText().plural;return 1==this.countItems()&&(e=this.dummyItem.getCountingText().singular),e}createItem(){return(0,p.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:this.createModalPage})).present()})}ngOnInit(){if(this.filterFunction||(this.filterFunction=this.filterFunction?this.filterFunction:e=>!0),this.sorterFunction||(this.sorterFunction=(e,n)=>0),this.service&&(this.dummyItem=this.service.getEmptyItem(),this.items_list)){const e=()=>{this.ref.markForCheck()};this.items_list.forEach(n=>{n&&n.load(e)})}}updateItem(e,n){return(0,p.mG)(this,void 0,void 0,function*(){const r=yield this.modalController.create({component:this.editModalPage,componentProps:{item:e}});return n.close(),yield r.present()})}deleteItem(e,n){return(0,p.mG)(this,void 0,void 0,function*(){n.close();const r=this.service.getEmptyItem().getElement();yield(yield this.alertCtrl.create({message:` vuoi davvero cancellare quest${r.genere} ${r.element}?(${e.title})`,buttons:[{text:"Annulla",role:"cancel",handler:()=>{}},{text:"Cancella",handler:()=>{this.service.deleteItem(e.key)}}]})).present()})}ngOnChanges(e){this.service&&this.service._items&&this.service._items.subscribe(n=>{n&&(this.showSpinner=!1,this.secondSpinner=!1)}),e.items_list&&e.items_list.currentValue&&(this.items_list=e.items_list.currentValue,this.showSpinner=!1),e.filterFunction&&(this.filterFunction=e.filterFunction.currentValue)}countItems(){var e;return this.service&&this.service._items.subscribe(n=>{e=n.filter(this.filterFunction).length}),e||"loading"}editItem(e){this.router.navigate([this.editModalPage,e.key])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(o.Br),t.Y36(m.F0),t.Y36(o.IN),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-page-items-list"]],inputs:{items_list:"items_list",secondSpinner:"secondSpinner",service:"service",editModalPage:"editModalPage",filterFunction:"filterFunction",sorterFunction:"sorterFunction",createModalPage:"createModalPage"},features:[t.TTD],decls:13,vars:13,consts:[[1,"counter"],[1,"spinner"],[1,"dot1"],[1,"dot2"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed",1,"addItem"],[3,"click"],["name","add"],["sliding_item",""],[3,"Item"],["side","start"],["ion-button","","danger","","color","danger",3,"click"],["name","trash"],["side","end"],["ion-button","",3,"click"],["name","eye"]],template:function(e,n){1&e&&(t.TgZ(0,"p",0),t._uU(1),t.qZA(),t.TgZ(2,"ion-list")(3,"div",1),t._UZ(4,"div",2)(5,"div",3),t.qZA(),t.YNc(6,w,11,1,"ion-item-sliding",4),t.ALo(7,"sorterItems"),t.ALo(8,"filterItems"),t.ALo(9,"async"),t.qZA(),t.TgZ(10,"ion-fab",5)(11,"ion-fab-button",6),t.NdJ("click",function(){return n.createItem()}),t._UZ(12,"ion-icon",7),t.qZA()()),2&e&&(t.xp6(1),t.AsE("",n.countItems()," ",n.getMultiplicityText(),""),t.xp6(2),t.Udp("display",n.showSpinner?"block":"none"),t.xp6(3),t.Q6J("ngForOf",t.xi3(7,5,t.xi3(8,8,t.lcZ(9,11,null==n.service?null:n.service.items),n.filterFunction),n.sorterFunction)))},directives:[o.q_,c.sg,o.td,M,o.IK,o.YG,o.gu,o.IJ,o.W4],pipes:[y.T,T.M,c.Ov],styles:[".calm[_ngcontent-%COMP%]{color:green}.danger[_ngcontent-%COMP%]{background-color:red}.addItem[_ngcontent-%COMP%]{position:fixed;bottom:0em}.counter[_ngcontent-%COMP%]{font-size:xx-small;font-style:oblique;border-radius:10px;width:-moz-fit-content}.container[_ngcontent-%COMP%]{align-items:flex-start;overflow:scroll}.spinner[_ngcontent-%COMP%]{margin:100px auto;width:40px;height:40px;position:relative;text-align:center;animation:sk-rotate 2s infinite linear}.fab-button[_ngcontent-%COMP%]{position:sticky;top:4rem;background-color:#1976d2;border:0;border-radius:30px;width:37px;height:37px;color:#fff;left:2em;line-height:-167px;text-align:center}.dot1[_ngcontent-%COMP%], .dot2[_ngcontent-%COMP%]{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:#333;border-radius:100%;animation:sk-bounce 2s infinite ease-in-out}.dot2[_ngcontent-%COMP%]{top:auto;bottom:0;animation-delay:-1s}@keyframes sk-rotate{to{transform:rotate(360deg);-webkit-transform:rotate(360deg)}}@keyframes sk-bounce{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}"],changeDetection:0}),i})(),A=(()=>{class i{constructor(e){this.service=e,this.editModalPage=f.t}ngOnInit(){console.log("utenti page initialized")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.f))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-users"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","/home",1,"button-clear","ion-chevron-left"],[1,"welcome-card"],[3,"service","editModalPage"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"utenti"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-card",2)(8,"ion-card-header")(9,"ion-card-subtitle"),t._uU(10,"Get Started"),t.qZA(),t.TgZ(11,"ion-card-title"),t._uU(12,"Welcome to Ionic"),t.qZA()(),t._UZ(13,"ion-card-content"),t.qZA(),t._UZ(14,"app-page-items-list",3),t.qZA()),2&e&&(t.xp6(14),t.Q6J("service",n.service)("editModalPage",n.editModalPage))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.W2,o.PM,o.Zi,o.tO,o.Dq,o.FN,O],styles:[""]}),i})();var F=l(9355);const U=[{path:"",component:A}];let S=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,g.u5,F.A,o.Pc,m.Bz.forChild(U)]]}),i})()}}]);