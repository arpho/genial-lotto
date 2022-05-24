"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5987],{5987:(Z,u,r)=>{r.r(u),r.d(u,{LoginPageModule:()=>C});var c=r(9808),t=r(4182),g=r(501),a=r(5649),p=r(655),d=r(2321),o=r(2096),h=r(9955);function v(e,l){1&e&&(o.TgZ(0,"ion-item",8)(1,"ion-label"),o._uU(2,"Please enter a valid email address."),o.qZA()())}function P(e,l){1&e&&(o.TgZ(0,"ion-item",8)(1,"ion-label"),o._uU(2,"Your password needs more than 6 characters."),o.qZA()())}const b=[{path:"",component:(()=>{class e{constructor(i,n,s,m,f){this.loadingCtrl=i,this.alertCtrl=n,this.authService=s,this.router=m,this.formBuilder=f,this.loginForm=this.formBuilder.group({email:["",t.kI.compose([t.kI.required,t.kI.email])],password:["",t.kI.compose([t.kI.required,t.kI.minLength(6)])]})}ngOnInit(){}onSubmit(){}loginUser(i){return(0,p.mG)(this,void 0,void 0,function*(){i.valid?(this.authService.loginUser(i.value.email,i.value.password).then(()=>{const m=(0,d.v0)();(0,d.Fb)(m,d.a$),this.loading.dismiss().then(()=>{this.router.navigateByUrl("home")})},m=>{this.loading.dismiss().then(()=>(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({message:m.message,buttons:[{text:"Ok",role:"cancel"}]})).present()}))}),this.loading=yield this.loadingCtrl.create(),yield this.loading.present()):console.log("Form is not valid yet, current value:",i.value)})}}return e.\u0275fac=function(i){return new(i||e)(o.Y36(a.HT),o.Y36(a.Br),o.Y36(h.e),o.Y36(g.F0),o.Y36(t.qu))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:17,vars:8,consts:[["novalidate","",3,"formGroup","ngSubmit"],["stacked",""],["formControlName","email","type","email","placeholder","Your email address"],["class","error-message",4,"ngIf"],["formControlName","password","type","password","placeholder","Your\n  password"],["expand","block",3,"disabled","click"],["expand","block","fill","clear","routerLink","/users/signup"],["expand","block","fill","clear","routerLink","/user/reset-password"],[1,"error-message"]],template:function(i,n){1&i&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return n.onSubmit()}),o.TgZ(1,"ion-item")(2,"ion-label",1),o._uU(3,"Email"),o.qZA(),o._UZ(4,"ion-input",2),o.qZA(),o.YNc(5,v,3,0,"ion-item",3),o.TgZ(6,"ion-item")(7,"ion-label",1),o._uU(8,"Password"),o.qZA(),o._UZ(9,"ion-input",4),o.qZA(),o.YNc(10,P,3,0,"ion-item",3),o.TgZ(11,"ion-button",5),o.NdJ("click",function(){return n.loginUser(n.loginForm)}),o._uU(12," Log In "),o.qZA()(),o.TgZ(13,"ion-button",6),o._uU(14," Create a new account\n"),o.qZA(),o.TgZ(15,"ion-button",7),o._uU(16," I forgot my password :(\n"),o.qZA()),2&i&&(o.Q6J("formGroup",n.loginForm),o.xp6(4),o.ekj("invalid",!n.loginForm.controls.email.valid&&n.loginForm.controls.email.touched),o.xp6(1),o.Q6J("ngIf",!n.loginForm.controls.email.valid&&n.loginForm.controls.email.touched),o.xp6(4),o.ekj("invalid",!n.loginForm.controls.password.valid&&n.loginForm.controls.password.touched),o.xp6(1),o.Q6J("ngIf",!n.loginForm.controls.password.valid&&n.loginForm.controls.password.touched),o.xp6(1),o.Q6J("disabled",!n.loginForm.valid))},directives:[t._Y,t.JL,t.sg,a.Ie,a.Q$,a.pK,a.j9,t.JJ,t.u,c.O5,a.YG,a.YI,g.rH],styles:["form[_ngcontent-%COMP%]{margin-bottom:32px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px!important}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0!important}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[c.ez,t.u5,a.Pc,t.UX,g.Bz.forChild(b)]]}),e})()}}]);