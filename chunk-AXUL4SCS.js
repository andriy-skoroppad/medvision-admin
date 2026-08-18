import{$ as ie,A as to,B as Na,C as Aa,D as za,E as Pa,F as Ra,G as qa,H as Wo,I as Xo,J as eo,L as qe,M as He,O as Ha,P as Oe,Q as $e,R as Ue,S as We,T as Xe,U as Oa,V as $a,W as Ua,X as Ka,Y as Qa,Z as Ya,_ as Ja,aa as me,b as Wt,ba as xi,c as ze,ca as ki,d as La,da as xe,e as Fa,ea as Qo,f as ye,g as ba,h as Sa,j as Oo,k as Qi,l as Yi,m as Da,ma as cl,n as Va,na as al,oa as ll,p as Ma,q as Pe,r as Ga,ra as Jo,s as Ji,sa as tc,t as wa,u as $o,v as Uo,w as Ia,x as Re,y as ja,z as Ba}from"./chunk-BRNRCWMU.js";import{a as tl,b as oe,c as el,d as co,e as il,f as Yo,g as ao,h as ce,i as Pt,j as ol,k as Ke,l as Qe}from"./chunk-HUCXJYJ2.js";import{Aa as Zo,Ba as te,C as ya,Ca as Wa,D as Mt,Da as _e,Ea as Ko,Fa as at,G as Ro,Ga as Xa,H as _a,Ha as ue,Ia as Za,Ja as mi,K as qo,L as Zi,La as ee,M as Xt,N as Ki,O as ua,S as ma,T as xa,U as ka,V as Gt,W as va,X as Ca,Y as wt,Z as ga,_ as Ho,b as $i,c as ui,d as sa,f as Ui,g as Ae,h as Wi,ha,k as Ee,ka as Ve,la as de,ma as zt,na as bt,o as Xi,oa as Ta,pa as Ea,ra as St,s as pa,sa as Tt,t as fa,ta as se,ua as _t,va as it,wa as Ze,x as da,xa as io,y as De,ya as oo,za as lt}from"./chunk-WI4VRV4G.js";import{$b as G,A as Nt,Aa as yt,Ab as _,Ac as Hi,B as be,Ba as W,Bb as u,C as Zc,Cb as m,Cc as Oi,Da as X,Db as _i,Ea as ia,Eb as A,Ec as E,F as Kc,Fb as z,G as Bi,Gb as y,Gc as Ut,Hb as s,Hc as Be,Ib as r,Ic as N,Jb as L,K as Qc,Kb as J,Lb as tt,Lc as ra,Mb as b,Mc as et,Nb as Ie,Nc as Ne,Ob as je,Pb as Q,Pc as S,Q as Yc,Qb as P,Qc as gt,R as Ot,Rb as le,S as yi,T as rt,Ub as k,V as Jc,Vb as aa,Wb as p,Xb as H,Y as Se,Ya as n,Yb as B,Z as Lt,Zb as Vt,_ as ut,_b as ct,a as Fe,aa as K,ac as w,b as wi,ba as ta,bb as Ft,bc as la,ca as f,cb as mt,d as dt,dc as na,eb as Yt,ec as st,f as Hc,fc as kt,gb as oa,gc as j,h as ot,hb as Jt,hc as O,i as jo,ia as D,ic as d,ja as V,jc as F,k as Oc,ka as C,kc as q,l as $c,la as Te,lc as $t,m as Uc,ma as Dt,mb as g,mc as zo,na as Ni,nb as xt,nc as Ai,o as ae,ob as I,oc as zi,pc as Pi,q as Wc,qa as M,qc as ne,ra as At,rb as R,rc as re,s as Bo,sb as nt,sc as T,t as Ii,tb as Ao,tc as U,uc as Ri,va as h,wc as qi,x as ji,xc as Po,ya as No,yc as vt,z as Xc,za as ea,zb as ca,zc as Ct}from"./chunk-CHN4MNQ3.js";function vi(){let i=h(0);return{loading:E(()=>i()>0),track:c=>ji(()=>(i.update(t=>t+1),c)).pipe(Qc(()=>i.update(t=>Math.max(0,t-1))))}}var Rt=class i{http=f(Xi);getCard(c){return this.http.get(`/api/v1/admin/organizations/${c}`)}saveRequisites(c,t){return this.http.put(`/api/v1/admin/organizations/${c}`,t)}listBranches(c){return this.http.get(`/api/v1/admin/organizations/${c}/branches`)}listUsers(c){return this.http.get(`/api/v1/admin/organizations/${c}/users`)}listSubscriptions(c){return this.http.get("/api/v1/admin/subscriptions",{params:new Ee().set("organizationId",c)})}listPayments(c){return this.http.get("/api/v1/admin/payments",{params:new Ee().set("organizationId",c)})}listGrants(c){return this.http.get("/api/v1/admin/grants",{params:new Ee().set("organizationId",c)})}listAuditEvents(c){return this.http.get("/api/v1/admin/audit-events",{params:new Ee().set("organizationId",c)})}listPlans(){return this.http.get("/api/v1/admin/plans")}extendSubscription(c,t){return this.http.post(`/api/v1/admin/subscriptions/${c}/extend`,t)}changeSubscriptionPlan(c,t){return this.http.post(`/api/v1/admin/subscriptions/${c}/change-plan`,t)}cancelSubscription(c,t){return this.http.post(`/api/v1/admin/subscriptions/${c}/cancel`,t)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Lt({token:i,factory:i.\u0275fac,providedIn:"root"})};var nl=["subscription","requisites","branches","users","payments","grants","audit"],Ye=class i{api=f(Rt);cardTracker=vi();tabTracker=vi();cardLoading=this.cardTracker.loading;tabLoading=this.tabTracker.loading;organizationId=h("");card=h(null);subscription=h(null);branches=h([]);users=h([]);payments=h([]);grants=h([]);auditEvents=h([]);notFound=h(!1);loaded=h(new Set);activeGrants=E(()=>this.grants().filter(c=>c.isActive));init(c){this.organizationId.set(c),this.loadCard(),this.openTab("subscription")}loadCard(){this.cardTracker.track(this.api.getCard(this.organizationId())).subscribe({next:c=>{this.card.set(c),this.notFound.set(!1)},error:()=>this.notFound.set(!0)})}openTab(c){this.loaded().has(c)||this.reloadTab(c)}reloadTab(c){let t=this.organizationId();switch(c){case"subscription":this.track(this.api.listSubscriptions(t),e=>this.subscription.set(e[0]??null));break;case"requisites":break;case"branches":this.track(this.api.listBranches(t),e=>this.branches.set(e));break;case"users":this.track(this.api.listUsers(t),e=>this.users.set(e));break;case"payments":this.track(this.api.listPayments(t),e=>this.payments.set(e));break;case"grants":this.track(this.api.listGrants(t),e=>this.grants.set(e));break;case"audit":this.track(this.api.listAuditEvents(t),e=>this.auditEvents.set(e));break}this.loaded.update(e=>new Set(e).add(c))}refresh(){this.loadCard();for(let c of this.loaded())this.reloadTab(c)}saveRequisites(c){return this.cardTracker.track(this.api.saveRequisites(this.organizationId(),c)).pipe(Jc(()=>this.refresh()))}track(c,t){this.tabTracker.track(c).subscribe({next:t})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Lt({token:i,factory:i.\u0275fac})};var lo=[{key:"all",label:"\u0423\u0441\u0456 \u043A\u043B\u0456\u0454\u043D\u0442\u0438",hint:"\u041F\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439",count:i=>i.total,filters:{}},{key:"expiring7",label:`\u0421\u043F\u043B\u0438\u0432\u0430\u0454 \u0437\u0430 ${xe} \u0434\u043D\u0456\u0432`,hint:"\u0414\u043E\u0441\u0442\u0443\u043F \u0449\u0435 \u0434\u0456\u0454 \u2014 \u0447\u0430\u0441 \u043D\u0430\u0433\u0430\u0434\u0430\u0442\u0438 \u043F\u0440\u043E \u0440\u0430\u0445\u0443\u043D\u043E\u043A",count:i=>i.expiringIn7,filters:{expiresInDays:xe},warn:!0},{key:"expiring30",label:`\u0421\u043F\u043B\u0438\u0432\u0430\u0454 \u0437\u0430 ${Qo} \u0434\u043D\u0456\u0432`,hint:"\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442 \u043C\u0456\u0441\u044F\u0446\u044F, \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0442\u0438\u0436\u043D\u0435\u043C",count:i=>i.expiringIn30,filters:{expiresInDays:Qo}},{key:"overdue",label:"\u041F\u0440\u043E\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u0456",hint:"\u0422\u0435\u0440\u043C\u0456\u043D \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0432\u0436\u0435 \u043C\u0438\u043D\u0443\u0432",count:i=>i.overdue,filters:{overdue:!0},warn:!0},{key:"trial",label:"\u041D\u0430 \u0442\u0440\u0456\u0430\u043B\u0456",hint:"\u0429\u0435 \u043D\u0435 \u043F\u043B\u0430\u0442\u0438\u043B\u0438 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443",count:i=>i.trialing,filters:{subscriptionStatus:"TRIALING"}},{key:"suspended",label:"\u0417\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0456",hint:"\u0427\u0438\u0442\u0430\u043D\u043D\u044F \u0439 \u0435\u043A\u0441\u043F\u043E\u0440\u0442 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C, \u0437\u043C\u0456\u043D\u0438 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u0456",count:i=>i.suspended,filters:{status:"SUSPENDED"}},{key:"grant",label:"\u041D\u0430 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E\u043C\u0443 \u0433\u0440\u0430\u043D\u0442\u0456",hint:"\u0414\u043E\u0441\u0442\u0443\u043F \u0442\u0440\u0438\u043C\u0430\u0454 \u0433\u0440\u0430\u043D\u0442, \u0430 \u043D\u0435 \u043E\u043F\u043B\u0430\u0442\u0430",count:i=>i.onGrant,filters:{onGrant:!0}}],rl={includeDeleted:!1,status:null,search:"",expiresInDays:null,overdue:!1,subscriptionStatus:null,onGrant:!1};var no=class i{http=f(Xi);listOrganizations(c){let t=new Ee().set("includeDeleted",String(c.includeDeleted));return c.status&&(t=t.set("status",c.status)),c.search.trim()&&(t=t.set("search",c.search.trim())),c.expiresInDays!==null&&(t=t.set("expiresInDays",String(c.expiresInDays))),c.overdue&&(t=t.set("overdue","true")),c.subscriptionStatus&&(t=t.set("subscriptionStatus",c.subscriptionStatus)),c.onGrant&&(t=t.set("onGrant","true")),this.http.get("/api/v1/admin/organizations",{params:t})}getMonitoringSummary(){return this.http.get("/api/v1/admin/organizations/summary")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Lt({token:i,factory:i.\u0275fac,providedIn:"root"})};var An={total:0,expiringIn7:0,expiringIn30:0,overdue:0,trialing:0,suspended:0,onGrant:0,totalDebt:0,currency:"UAH"},Je=class i{api=f(no);listTracker=vi();listLoading=this.listTracker.loading;organizations=h([]);summary=h(An);preset=h("all");search=h("");includeDeleted=h(!1);selectedId=h(null);filters=E(()=>wi(Fe(Fe({},rl),lo.find(c=>c.key===this.preset())?.filters??{}),{includeDeleted:this.includeDeleted(),search:this.search()}));isFiltered=E(()=>this.preset()!=="all"||this.search().trim()!==""||this.includeDeleted());init(){this.loadOrganizations(),this.loadSummary()}loadOrganizations(){this.listTracker.track(this.api.listOrganizations(this.filters())).subscribe(c=>this.organizations.set(c))}loadSummary(){this.api.getMonitoringSummary().subscribe(c=>this.summary.set(c))}applyPreset(c){this.preset.set(c),this.loadOrganizations()}setSearch(c){this.search.set(c),this.loadOrganizations()}setIncludeDeleted(c){this.includeDeleted.set(c),this.loadOrganizations()}resetFilters(){this.preset.set("all"),this.search.set(""),this.includeDeleted.set(!1),this.loadOrganizations()}select(c){this.selectedId.set(c)}refresh(){this.loadOrganizations(),this.loadSummary()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Lt({token:i,factory:i.\u0275fac})};var ac=["*"];function zn(i,c){i&1&&B(0)}var Pn=["tabListContainer"],Rn=["tabList"],qn=["tabListInner"],Hn=["nextPaginator"],On=["previousPaginator"],$n=["content"];function Un(i,c){}var Wn=["tabBodyWrapper"],Xn=["tabHeader"];function Zn(i,c){}function Kn(i,c){if(i&1&&nt(0,Zn,0,0,"ng-template",12),i&2){let t=p().$implicit;y("cdkPortalOutlet",t.templateLabel)}}function Qn(i,c){if(i&1&&d(0),i&2){let t=p().$implicit;F(t.textLabel)}}function Yn(i,c){if(i&1){let t=P();s(0,"div",7,2),k("click",function(){let o=D(t),a=o.$implicit,l=o.$index,x=p(),v=st(1);return V(x._handleClick(a,v,l))})("cdkFocusChange",function(o){let a=D(t).$index,l=p();return V(l._tabFocusChanged(o,a))}),L(2,"span",8)(3,"div",9),s(4,"span",10)(5,"span",11),u(6,Kn,1,1,null,12)(7,Qn,1,1),r()()()}if(i&2){let t=c.$implicit,e=c.$index,o=st(1),a=p();O(t.labelClass),j("mdc-tab--active",a.selectedIndex===e),y("id",a._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",a.fitInkBarToContent),_("tabIndex",a._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(e))("aria-selected",a.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),n(3),y("matRippleTrigger",o)("matRippleDisabled",t.disabled||a.disableRipple),n(3),m(t.templateLabel?6:7)}}function Jn(i,c){i&1&&B(0)}function tr(i,c){if(i&1){let t=P();s(0,"mat-tab-body",13),k("_onCentered",function(){D(t);let o=p();return V(o._removeTabBodyWrapperHeight())})("_onCentering",function(o){D(t);let a=p();return V(a._setTabBodyWrapperHeight(o))})("_beforeCentering",function(o){D(t);let a=p();return V(a._bodyCentered(o))}),r()}if(i&2){let t=c.$implicit,e=c.$index,o=p();O(t.bodyClass),y("id",o._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",o.animationDuration)("preserveContent",o.preserveContent),_("tabindex",o.contentTabIndex!=null&&o.selectedIndex===e?o.contentTabIndex:null)("aria-labelledby",o._getTabLabelId(t,e))("aria-hidden",o.selectedIndex!==e)}}var er=new K("MatTabContent"),ir=(()=>{class i{template=f(mt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matTabContent",""]],features:[U([{provide:er,useExisting:i}])]})}return i})(),or=new K("MatTabLabel"),dl=new K("MAT_TAB"),cr=(()=>{class i extends Ia{_closestTab=f(dl,{optional:!0});static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[U([{provide:or,useExisting:i}]),R]})}return i})(),yl=new K("MAT_TAB_GROUP"),lc=(()=>{class i{_viewContainerRef=f(Jt);_closestTabGroup=f(yl,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ot;position=null;origin=null;isActive=!1;constructor(){f(Xt).load(de)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Uo(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab"]],contentQueries:function(e,o,a){if(e&1&&Vt(a,cr,5)(a,ir,7,mt),e&2){let l;G(l=w())&&(o.templateLabel=l.first),G(l=w())&&(o._explicitContent=l.first)}},viewQuery:function(e,o){if(e&1&&ct(mt,7),e&2){let a;G(a=w())&&(o._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,o){e&2&&_("id",null)},inputs:{disabled:[2,"disabled","disabled",S],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[U([{provide:dl,useExisting:i}]),yt],ngContentSelectors:ac,decls:1,vars:0,template:function(e,o){e&1&&(H(),Ao(0,zn,1,0,"ng-template"))},encapsulation:2})}return i})(),ec="mdc-tab-indicator--active",sl="mdc-tab-indicator--no-transition",ic=class{_items;_currentItem;constructor(c){this._items=c}hide(){this._items.forEach(c=>c.deactivateInkBar()),this._currentItem=void 0}alignToElement(c){let t=this._items.find(o=>o.elementRef.nativeElement===c),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let o=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(o),this._currentItem=t}}},ar=(()=>{class i{_elementRef=f(X);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(ec);return}let o=e.getBoundingClientRect(),a=t.width/o.width,l=t.left-o.left;e.classList.add(sl),this._inkBarContentElement.style.setProperty("transform",`translateX(${l}px) scaleX(${a})`),e.getBoundingClientRect(),e.classList.remove(sl),e.classList.add(ec),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ec)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),o=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",o.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",S]}})}return i})();var _l=(()=>{class i extends ar{elementRef=f(X);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,o){e&2&&(_("aria-disabled",!!o.disabled),j("mat-mdc-tab-disabled",o.disabled))},inputs:{disabled:[2,"disabled","disabled",S]},features:[R]})}return i})(),pl={passive:!0},lr=650,nr=100,rr=(()=>{class i{_elementRef=f(X);_changeDetectorRef=f(et);_viewportRuler=f(Pe);_dir=f(zt,{optional:!0});_ngZone=f(At);_platform=f(De);_sharedResizeObserver=f(tl);_injector=f(Dt);_renderer=f(Yt);_animationsDisabled=Mt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ot;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ot;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new M;indexFocused=new M;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),pl),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),pl))}ngAfterContentInit(){let t=this._dir?this._dir.change:ae("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Kc(32),rt(this._destroyed)),o=this._viewportRuler.change(150).pipe(rt(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ca(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Ft(a,{injector:this._injector}),Nt(t,o,e,this._items.changes,this._itemsResized()).pipe(rt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l)})}_itemsResized(){return typeof ResizeObserver!="function"?Uc:this._items.changes.pipe(Ot(this._items),yi(t=>new Hc(e=>this._ngZone.runOutsideAngular(()=>{let o=new ResizeObserver(a=>e.next(a));return t.forEach(a=>o.observe(a.elementRef.nativeElement)),()=>{o.disconnect()}}))),Yc(1),be(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Gt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,o=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+o)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let o=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:l}=e.elementRef.nativeElement,x,v;this._getLayoutDirection()=="ltr"?(x=a,v=x+l):(v=this._tabListInner.nativeElement.offsetWidth-a,x=v-l);let $=this.scrollDistance,Y=this.scrollDistance+o;x<$?this.scrollDistance-=$-x:v>Y&&(this.scrollDistance+=Math.min(v-Y,x-$))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,o=t-e>=5;o||(this.scrollDistance=0),o!==this._showPaginationControls&&(this._showPaginationControls=o,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Xc(lr,nr).pipe(rt(Nt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:o,distance:a}=this._scrollHeader(t);(a===0||a>=o)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",S],selectedIndex:[2,"selectedIndex","selectedIndex",gt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),sr=(()=>{class i extends rr{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ic(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-tab-header"]],contentQueries:function(e,o,a){if(e&1&&Vt(a,_l,4),e&2){let l;G(l=w())&&(o._items=l)}},viewQuery:function(e,o){if(e&1&&ct(Pn,7)(Rn,7)(qn,7)(Hn,5)(On,5),e&2){let a;G(a=w())&&(o._tabListContainer=a.first),G(a=w())&&(o._tabList=a.first),G(a=w())&&(o._tabListInner=a.first),G(a=w())&&(o._nextPaginator=a.first),G(a=w())&&(o._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,o){e&2&&j("mat-mdc-tab-header-pagination-controls-enabled",o._showPaginationControls)("mat-mdc-tab-header-rtl",o._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",S]},features:[R],ngContentSelectors:ac,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,o){e&1&&(H(),s(0,"div",5,0),k("click",function(){return o._handlePaginatorClick("before")})("mousedown",function(l){return o._handlePaginatorPress("before",l)})("touchend",function(){return o._stopInterval()}),L(2,"div",6),r(),s(3,"div",7,1),k("keydown",function(l){return o._handleKeydown(l)}),s(5,"div",8,2),k("cdkObserveContent",function(){return o._onContentChanges()}),s(7,"div",9,3),B(9),r()()(),s(10,"div",10,4),k("mousedown",function(l){return o._handlePaginatorPress("after",l)})("click",function(){return o._handlePaginatorClick("after")})("touchend",function(){return o._stopInterval()}),L(12,"div",6),r()),e&2&&(j("mat-mdc-tab-header-pagination-disabled",o._disableScrollBefore),y("matRippleDisabled",o._disableScrollBefore||o.disableRipple),n(3),j("_mat-animation-noopable",o._animationsDisabled),n(2),_("aria-label",o.ariaLabel||null)("aria-labelledby",o.ariaLabelledby||null),n(5),j("mat-mdc-tab-header-pagination-disabled",o._disableScrollAfter),y("matRippleDisabled",o._disableScrollAfter||o.disableRipple))},dependencies:[Ve,ua],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return i})(),pr=new K("MAT_TABS_CONFIG"),fl=(()=>{class i extends Re{_host=f(oc);_ngZone=f(At);_centeringSub=dt.EMPTY;_leavingSub=dt.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ot(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matTabBodyHost",""]],features:[R]})}return i})(),oc=(()=>{class i{_elementRef=f(X);_dir=f(zt,{optional:!0});_ngZone=f(At);_injector=f(Dt);_renderer=f(Yt);_diAnimationsDisabled=Mt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=dt.EMPTY;_position;_previousPosition;_onCentering=new M;_beforeCentering=new M;_afterLeavingCenter=new M;_onCentered=new M(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=f(et);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Ft(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=o=>{o.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),o.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",o=>{o.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Ft(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab-body"]],viewQuery:function(e,o){if(e&1&&ct(fl,5)($n,5),e&2){let a;G(a=w())&&(o._portalHost=a.first),G(a=w())&&(o._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,o){e&2&&_("inert",o._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,o){e&1&&(s(0,"div",1,0),nt(2,Un,0,0,"ng-template",2),r()),e&2&&j("mat-tab-body-content-left",o._position==="left")("mat-tab-body-content-right",o._position==="right")("mat-tab-body-content-can-animate",o._position==="center"||o._previousPosition==="center")},dependencies:[fl,Ma],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return i})(),ul=(()=>{class i{_elementRef=f(X);_changeDetectorRef=f(et);_ngZone=f(At);_tabsSubscription=dt.EMPTY;_tabLabelSubscription=dt.EMPTY;_tabBodySubscription=dt.EMPTY;_diAnimationsDisabled=Mt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ia;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new M;focusChange=new M;animationDone=new M;selectedTabChange=new M(!0);_groupId;_isServer=!f(De).isBrowser;constructor(){let t=f(pr,{optional:!0});this._groupId=f(wt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let o=this._tabBodyWrapper.nativeElement;o.style.minHeight=o.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((o,a)=>o.isActive=a===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,o)=>{e.position=o-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),o;for(let a=0;a<e.length;a++)if(e[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,o=e[a];break}!o&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ot(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new cc;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Nt(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,o){e.focusIndex=o,t.disabled||(this.selectedIndex=o)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,o)=>e._setActiveClass(o===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-tab-group"]],contentQueries:function(e,o,a){if(e&1&&Vt(a,lc,5),e&2){let l;G(l=w())&&(o._allTabs=l)}},viewQuery:function(e,o){if(e&1&&ct(Wn,5)(Xn,5)(oc,5),e&2){let a;G(a=w())&&(o._tabBodyWrapper=a.first),G(a=w())&&(o._tabHeader=a.first),G(a=w())&&(o._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,o){e&2&&(_("mat-align-tabs",o.alignTabs),O("mat-"+(o.color||"primary")),kt("--mat-tab-animation-duration",o.animationDuration),j("mat-mdc-tab-group-dynamic-height",o.dynamicHeight)("mat-mdc-tab-group-inverted-header",o.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",o.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",S],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",S],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",S],selectedIndex:[2,"selectedIndex","selectedIndex",gt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",gt],disablePagination:[2,"disablePagination","disablePagination",S],disableRipple:[2,"disableRipple","disableRipple",S],preserveContent:[2,"preserveContent","preserveContent",S],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[U([{provide:yl,useExisting:i}])],ngContentSelectors:ac,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,o){e&1&&(H(),s(0,"mat-tab-header",3,0),k("indexFocused",function(l){return o._focusChanged(l)})("selectFocusedIndex",function(l){return o.selectedIndex=l}),A(2,Yn,8,17,"div",4,_i),r(),u(4,Jn,1,0),s(5,"div",5,1),A(7,tr,1,10,"mat-tab-body",6,_i),r()),e&2&&(y("selectedIndex",o.selectedIndex||0)("disableRipple",o.disableRipple)("disablePagination",o.disablePagination),ca("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby),n(2),z(o._tabs),n(2),m(o._isServer?4:-1),n(),j("_mat-animation-noopable",o._animationsDisabled()),n(2),z(o._tabs))},dependencies:[sr,_l,Zi,Ve,Re,oc],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return i})(),cc=class{index;tab};var ml=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=xt({type:i});static \u0275inj=ut({imports:[bt]})}return i})();var dr=[[["caption"]],[["colgroup"],["col"]],"*"],yr=["caption","colgroup, col","*"];function _r(i,c){i&1&&B(0,2)}function ur(i,c){i&1&&(s(0,"thead",0),Q(1,1),r(),s(2,"tbody",0),Q(3,2)(4,3),r(),s(5,"tfoot",0),Q(6,4),r())}function mr(i,c){i&1&&Q(0,1)(1,2)(2,3)(3,4)}var Qt=new K("CDK_TABLE");var so=(()=>{class i{template=f(mt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),po=(()=>{class i{template=f(mt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),fo=(()=>{class i{template=f(mt);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),Me=(()=>{class i{_table=f(Qt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(t){this._setNameInput(t)}_name;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(t){t!==this._stickyEnd&&(this._stickyEnd=t,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,o,a){if(e&1&&Vt(a,so,5)(a,po,5)(a,fo,5),e&2){let l;G(l=w())&&(o.cell=l.first),G(l=w())&&(o.headerCell=l.first),G(l=w())&&(o.footerCell=l.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",S],stickyEnd:[2,"stickyEnd","stickyEnd",S]}})}return i})(),gi=class{constructor(c,t){t.nativeElement.classList.add(...c._columnCssClassName)}},vl=(()=>{class i extends gi{constructor(){super(f(Me),f(X))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[R]})}return i})(),Cl=(()=>{class i extends gi{constructor(){let t=f(Me),e=f(X);super(t,e);let o=t._table?._getCellRole();o&&e.nativeElement.setAttribute("role",o)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:[1,"cdk-footer-cell"],features:[R]})}return i})(),gl=(()=>{class i extends gi{constructor(){let t=f(Me),e=f(X);super(t,e);let o=t._table?._getCellRole();o&&e.nativeElement.setAttribute("role",o)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[R]})}return i})();var rc=(()=>{class i{template=f(mt);_differs=f(Ne);columns;_columnsDiffer;constructor(){}ngOnChanges(t){if(!this._columnsDiffer){let e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof hi?t.headerCell.template:this instanceof Li?t.footerCell.template:t.cell.template}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,features:[yt]})}return i})(),hi=(()=>{class i extends rc{_table=f(Qt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(f(mt),f(Ne))}ngOnChanges(t){super.ngOnChanges(t)}hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",S]},features:[R,yt]})}return i})(),Li=(()=>{class i extends rc{_table=f(Qt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(f(mt),f(Ne))}ngOnChanges(t){super.ngOnChanges(t)}hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",S]},features:[R,yt]})}return i})(),yo=(()=>{class i extends rc{_table=f(Qt,{optional:!0});when;constructor(){super(f(mt),f(Ne))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[R]})}return i})(),pe=(()=>{class i{_viewContainer=f(Jt);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),sc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){e&1&&Q(0,0)},dependencies:[pe],encapsulation:2})}return i})(),pc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){e&1&&Q(0,0)},dependencies:[pe],encapsulation:2})}return i})(),fc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){e&1&&Q(0,0)},dependencies:[pe],encapsulation:2})}return i})(),hl=(()=>{class i{templateRef=f(mt);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),xl=["top","bottom","left","right"],nc=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(c=>this._updateCachedSizes(c)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(c,t,e=!0,o=!0,a,l,x){this._isNativeHtmlTable=c,this._stickCellCss=t,this._isBrowser=e,this._needsPositionStickyOnElement=o,this.direction=a,this._positionListener=l,this._tableInjector=x,this._borderCellCss={top:`${t}-border-elem-top`,bottom:`${t}-border-elem-bottom`,left:`${t}-border-elem-left`,right:`${t}-border-elem-right`}}clearStickyPositioning(c,t){(t.includes("left")||t.includes("right"))&&this._removeFromStickyColumnReplayQueue(c);let e=[];for(let o of c)o.nodeType===o.ELEMENT_NODE&&e.push(o,...Array.from(o.children));Ft({write:()=>{for(let o of e)this._removeStickyStyle(o,t)}},{injector:this._tableInjector})}updateStickyColumns(c,t,e,o=!0,a=!0){if(!c.length||!this._isBrowser||!(t.some(Ht=>Ht)||e.some(Ht=>Ht))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let l=c[0],x=l.children.length,v=this.direction==="rtl",$=v?"right":"left",Y=v?"left":"right",Bt=t.lastIndexOf(!0),pt=e.indexOf(!0),ft,Pc,Rc;a&&this._updateStickyColumnReplayQueue({rows:[...c],stickyStartStates:[...t],stickyEndStates:[...e]}),Ft({earlyRead:()=>{ft=this._getCellWidths(l,o),Pc=this._getStickyStartColumnPositions(ft,t),Rc=this._getStickyEndColumnPositions(ft,e)},write:()=>{for(let Ht of c)for(let Et=0;Et<x;Et++){let qc=Ht.children[Et];t[Et]&&this._addStickyStyle(qc,$,Pc[Et],Et===Bt),e[Et]&&this._addStickyStyle(qc,Y,Rc[Et],Et===pt)}this._positionListener&&ft.some(Ht=>!!Ht)&&(this._positionListener.stickyColumnsUpdated({sizes:Bt===-1?[]:ft.slice(0,Bt+1).map((Ht,Et)=>t[Et]?Ht:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:pt===-1?[]:ft.slice(pt).map((Ht,Et)=>e[Et+pt]?Ht:null).reverse()}))}},{injector:this._tableInjector})}stickRows(c,t,e){if(!this._isBrowser)return;let o=e==="bottom"?c.slice().reverse():c,a=e==="bottom"?t.slice().reverse():t,l=[],x=[],v=[];Ft({earlyRead:()=>{for(let $=0,Y=0;$<o.length;$++){if(!a[$])continue;l[$]=Y;let Bt=o[$];v[$]=this._isNativeHtmlTable?Array.from(Bt.children):[Bt];let pt=this._retrieveElementSize(Bt).height;Y+=pt,x[$]=pt}},write:()=>{let $=a.lastIndexOf(!0);for(let Y=0;Y<o.length;Y++){if(!a[Y])continue;let Bt=l[Y],pt=Y===$;for(let ft of v[Y])this._addStickyStyle(ft,e,Bt,pt)}e==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:x,offsets:l,elements:v}):this._positionListener?.stickyFooterRowsUpdated({sizes:x,offsets:l,elements:v})}},{injector:this._tableInjector})}updateStickyFooterContainer(c,t){this._isNativeHtmlTable&&Ft({write:()=>{let e=c.querySelector("tfoot");e&&(t.some(o=>!o)?this._removeStickyStyle(e,["bottom"]):this._addStickyStyle(e,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(c,t){if(!c.classList.contains(this._stickCellCss))return;for(let o of t)c.style[o]="",c.classList.remove(this._borderCellCss[o]);xl.some(o=>t.indexOf(o)===-1&&c.style[o])?c.style.zIndex=this._getCalculatedZIndex(c):(c.style.zIndex="",this._needsPositionStickyOnElement&&(c.style.position=""),c.classList.remove(this._stickCellCss))}_addStickyStyle(c,t,e,o){c.classList.add(this._stickCellCss),o&&c.classList.add(this._borderCellCss[t]),c.style[t]=`${e}px`,c.style.zIndex=this._getCalculatedZIndex(c),this._needsPositionStickyOnElement&&(c.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(c){let t={top:100,bottom:10,left:1,right:1},e=0;for(let o of xl)c.style[o]&&(e+=t[o]);return e?`${e}`:""}_getCellWidths(c,t=!0){if(!t&&this._cachedCellWidths.length)return this._cachedCellWidths;let e=[],o=c.children;for(let a=0;a<o.length;a++){let l=o[a];e.push(this._retrieveElementSize(l).width)}return this._cachedCellWidths=e,e}_getStickyStartColumnPositions(c,t){let e=[],o=0;for(let a=0;a<c.length;a++)t[a]&&(e[a]=o,o+=c[a]);return e}_getStickyEndColumnPositions(c,t){let e=[],o=0;for(let a=c.length;a>0;a--)t[a]&&(e[a]=o,o+=c[a]);return e}_retrieveElementSize(c){let t=this._elemSizeCache.get(c);if(t)return t;let e=c.getBoundingClientRect(),o={width:e.width,height:e.height};return this._resizeObserver&&(this._elemSizeCache.set(c,o),this._resizeObserver.observe(c,{box:"border-box"})),o}_updateStickyColumnReplayQueue(c){this._removeFromStickyColumnReplayQueue(c.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(c)}_removeFromStickyColumnReplayQueue(c){let t=new Set(c);for(let e of this._updatedStickyColumnsParamsToReplay)e.rows=e.rows.filter(o=>!t.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(e=>!!e.rows.length)}_updateCachedSizes(c){let t=!1;for(let e of c){let o=e.borderBoxSize?.length?{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize}:{width:e.contentRect.width,height:e.contentRect.height};o.width!==this._elemSizeCache.get(e.target)?.width&&xr(e.target)&&(t=!0),this._elemSizeCache.set(e.target,o)}t&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let e of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(e.rows,e.stickyStartStates,e.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function xr(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(c=>i.classList.contains(c))}var Ci=new K("STICKY_POSITIONING_LISTENER");var dc=(()=>{class i{viewContainer=f(Jt);elementRef=f(X);constructor(){let t=f(Qt);t._rowOutlet=this,t._outletAssigned()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","rowOutlet",""]]})}return i})(),yc=(()=>{class i{viewContainer=f(Jt);elementRef=f(X);constructor(){let t=f(Qt);t._headerRowOutlet=this,t._outletAssigned()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),_c=(()=>{class i{viewContainer=f(Jt);elementRef=f(X);constructor(){let t=f(Qt);t._footerRowOutlet=this,t._outletAssigned()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),uc=(()=>{class i{viewContainer=f(Jt);elementRef=f(X);constructor(){let t=f(Qt);t._noDataRowOutlet=this,t._outletAssigned()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),mc=(()=>{class i{_differs=f(Ne);_changeDetectorRef=f(et);_elementRef=f(X);_dir=f(zt,{optional:!0});_platform=f(De);_viewRepeater;_viewportRuler=f(Pe);_injector=f(Dt);_virtualScrollViewport=f(Ga,{optional:!0,host:!0});_positionListener=f(Ci,{optional:!0})||f(Ci,{optional:!0,skipSelf:!0});_document=f(Ni);_data;_renderedRange;_onDestroy=new ot;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new ot;_footerRowStickyUpdates=new ot;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let t=this._elementRef.nativeElement.getAttribute("role");return t==="grid"||t==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(t){this._trackByFn=t}_trackByFn;get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&(this._switchDataSource(t),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new ot;_dataStream=new ot;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=t,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(t){this._fixedLayout=t,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new M;viewChange=new jo({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){f(new Ut("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((e,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(rt(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Va:new Ua,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(t=>{t?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Yi(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let t=this._dataDiffer.diff(this._renderRows);if(!t){this._updateNoDataRow(),this.contentChanged.next();return}let e=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(t,e,(o,a,l)=>this._getEmbeddedViewArgs(o.item,l),o=>o.item.data,o=>{o.operation===Da.INSERTED&&o.context&&this._renderCellTemplateForItem(o.record.item.rowDef,o.context)}),this._updateRowIndexContext(),t.forEachIdentityChange(o=>{let a=e.get(o.currentIndex);a.context.$implicit=o.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}setNoDataRow(t){this._customNoDataRow=t}updateStickyHeaderRowStyles(){let t=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=kl(this._headerRowOutlet,"thead");o&&(o.style.display=t.length?"":"none")}let e=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,e,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let t=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=kl(this._footerRowOutlet,"tfoot");o&&(o.style.display=t.length?"":"none")}let e=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,e,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,e),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let t=this._getRenderedRows(this._headerRowOutlet),e=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...t,...e,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),t.forEach((a,l)=>{this._addStickyColumnStyles([a],this._headerRowDefs[l])}),this._rowDefs.forEach(a=>{let l=[];for(let x=0;x<e.length;x++)this._renderRows[x].rowDef===a&&l.push(e[x]);this._addStickyColumnStyles(l,a)}),o.forEach((a,l)=>{this._addStickyColumnStyles([a],this._footerRowDefs[l])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(t){this._positionListener?.stickyColumnsUpdated(t)}stickyEndColumnsUpdated(t){this._positionListener?.stickyEndColumnsUpdated(t)}stickyHeaderRowsUpdated(t){this._headerRowStickyUpdates.next(t),this._positionListener?.stickyHeaderRowsUpdated(t)}stickyFooterRowsUpdated(t){this._footerRowStickyUpdates.next(t),this._positionListener?.stickyFooterRowsUpdated(t)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let e=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||e,this._forceRecalculateCellWidths=e,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let t=[],e=Math.min(this._data.length,this._renderedRange.end),o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<e;a++){let l=this._data[a],x=this._getRenderRowsForData(l,a,o.get(l));this._cachedRenderRowsMap.has(l)||this._cachedRenderRowsMap.set(l,new WeakMap);for(let v=0;v<x.length;v++){let $=x[v],Y=this._cachedRenderRowsMap.get($.data);Y.has($.rowDef)?Y.get($.rowDef).push($):Y.set($.rowDef,[$]),t.push($)}}return t}_getRenderRowsForData(t,e,o){return this._getRowDefs(t,e).map(l=>{let x=o&&o.has(l)?o.get(l):[];if(x.length){let v=x.shift();return v.dataIndex=e,v}else return{data:t,rowDef:l,dataIndex:e}})}_cacheColumnDefs(){this._columnDefsByName.clear(),ro(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(e=>{this._columnDefsByName.has(e.name),this._columnDefsByName.set(e.name,e)})}_cacheRowDefs(){this._headerRowDefs=ro(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=ro(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=ro(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let t=this._rowDefs.filter(e=>!e.when);this._defaultRowDef=t[0]}_renderUpdatedColumns(){let t=(l,x)=>{let v=!!x.getColumnsDiff();return l||v},e=this._rowDefs.reduce(t,!1);e&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(t,!1);o&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(t,!1);return a&&this._forceRenderFooterRows(),e||o||a}_switchDataSource(t){this._data=[],Yi(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;Yi(this.dataSource)?t=this.dataSource.connect(this):Wc(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=ae(this.dataSource)),this._renderChangeSubscription=Ii([t,this.viewChange]).pipe(rt(this._onDestroy)).subscribe(([e,o])=>{this._data=e||[],this._renderedRange=o,this._dataStream.next(e),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,e)=>this._renderRow(this._headerRowOutlet,t,e)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,e)=>this._renderRow(this._footerRowOutlet,t,e)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(t,e){let o=Array.from(e?.columns||[]).map(x=>{let v=this._columnDefsByName.get(x);return v}),a=o.map(x=>x.sticky),l=o.map(x=>x.stickyEnd);this._stickyStyler.updateStickyColumns(t,a,l,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(t){let e=[];for(let o=0;o<t.viewContainer.length;o++){let a=t.viewContainer.get(o);e.push(a.rootNodes[0])}return e}_getRowDefs(t,e){if(this._rowDefs.length===1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(a=>!a.when||a.when(e,t));else{let a=this._rowDefs.find(l=>l.when&&l.when(e,t))||this._defaultRowDef;a&&o.push(a)}return o.length,o}_getEmbeddedViewArgs(t,e){let o=t.rowDef,a={$implicit:t.data};return{templateRef:o.template,context:a,index:e}}_renderRow(t,e,o,a={}){let l=t.viewContainer.createEmbeddedView(e.template,a,o);return this._renderCellTemplateForItem(e,a),l}_renderCellTemplateForItem(t,e){for(let o of this._getCellTemplates(t))pe.mostRecentCellOutlet&&pe.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,e);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let t=this._rowOutlet.viewContainer;for(let e=0,o=t.length;e<o;e++){let l=t.get(e).context;l.count=o,l.first=e===0,l.last=e===o-1,l.even=e%2===0,l.odd=!l.even,this.multiTemplateDataRows?(l.dataIndex=this._renderRows[e].dataIndex,l.renderIndex=e):l.index=this._renderRows[e].dataIndex}}_getCellTemplates(t){return!t||!t.columns?[]:Array.from(t.columns,e=>{let o=this._columnDefsByName.get(e);return t.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let t=(e,o)=>e||o.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let t=this._dir?this._dir.value:"ltr",e=this._injector;this._stickyStyler=new nc(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,t,this,e),(this._dir?this._dir.change:ae()).pipe(rt(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_setupVirtualScrolling(t){let e=typeof requestAnimationFrame<"u"?$c:Oc;this.viewChange.next({start:0,end:0}),t.renderedRangeStream.pipe(Zc(0,e),rt(this._onDestroy)).subscribe(this.viewChange),t.attach({dataStream:this._dataStream,measureRangeSize:(o,a)=>this._measureRangeSize(o,a)}),Ii([t.renderedContentOffset,this._headerRowStickyUpdates]).pipe(rt(this._onDestroy)).subscribe(([o,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let l=0;l<a.elements.length;l++){let x=a.elements[l];if(x){let v=a.offsets[l],$=o!==0?Math.max(o-v,v):-v;for(let Y of x)Y.style.top=`${-$}px`}}}),Ii([t.renderedContentOffset,this._footerRowStickyUpdates]).pipe(rt(this._onDestroy)).subscribe(([o,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let l=0;l<a.elements.length;l++){let x=a.elements[l];if(x)for(let v of x)v.style.bottom=`${o+a.offsets[l]}px`}})}_getOwnDefs(t){return t.filter(e=>!e._table||e._table===this)}_updateNoDataRow(){let t=this._customNoDataRow||this._noDataRow;if(!t)return;let e=this._rowOutlet.viewContainer.length===0;if(e===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(e){let a=o.createEmbeddedView(t.templateRef),l=a.rootNodes[0];if(a.rootNodes.length===1&&l?.nodeType===this._document.ELEMENT_NODE){l.setAttribute("role","row"),l.classList.add(...t._contentClassNames);let x=l.querySelectorAll(t._cellSelector);for(let v=0;v<x.length;v++)x[v].classList.add(...t._cellClassNames)}}else o.clear();this._isShowingNoDataRow=e,this._changeDetectorRef.markForCheck()}_measureRangeSize(t,e){if(t.start>=t.end||e!=="vertical")return 0;let o=this.viewChange.value,a=this._rowOutlet.viewContainer;t.start<o.start||t.end>o.end;let l=t.start-o.start,x=t.end-t.start,v,$;for(let pt=0;pt<x;pt++){let ft=a.get(pt+l);if(ft&&ft.rootNodes.length){v=$=ft.rootNodes[0];break}}for(let pt=x-1;pt>-1;pt--){let ft=a.get(pt+l);if(ft&&ft.rootNodes.length){$=ft.rootNodes[ft.rootNodes.length-1];break}}let Y=v?.getBoundingClientRect?.(),Bt=$?.getBoundingClientRect?.();return Y&&Bt?Bt.bottom-Y.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,o,a){if(e&1&&Vt(a,hl,5)(a,Me,5)(a,yo,5)(a,hi,5)(a,Li,5),e&2){let l;G(l=w())&&(o._noDataRow=l.first),G(l=w())&&(o._contentColumnDefs=l),G(l=w())&&(o._contentRowDefs=l),G(l=w())&&(o._contentHeaderRowDefs=l),G(l=w())&&(o._contentFooterRowDefs=l)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,o){e&2&&j("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",S],fixedLayout:[2,"fixedLayout","fixedLayout",S],recycleRows:[2,"recycleRows","recycleRows",S]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[U([{provide:Qt,useExisting:i},{provide:Ci,useValue:null}])],ngContentSelectors:yr,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,o){e&1&&(H(dr),B(0),B(1,1),u(2,_r,1,0),u(3,ur,7,0)(4,mr,4,0)),e&2&&(n(2),m(o._isServer?2:-1),n(),m(o._isNativeHtmlTable?3:4))},dependencies:[yc,dc,uc,_c],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return i})();function ro(i,c){return i.concat(Array.from(c))}function kl(i,c){let t=c.toUpperCase(),e=i.viewContainer.element.nativeElement;for(;e;){let o=e.nodeType===1?e.nodeName:null;if(o===t)return e;if(o==="TABLE")break;e=e.parentNode}return null}var Ll=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=xt({type:i});static \u0275inj=ut({imports:[wa]})}return i})();var kr=[[["caption"]],[["colgroup"],["col"]],"*"],vr=["caption","colgroup, col","*"];function Cr(i,c){i&1&&B(0,2)}function gr(i,c){i&1&&(s(0,"thead",0),Q(1,1),r(),s(2,"tbody",2),Q(3,3)(4,4),r(),s(5,"tfoot",0),Q(6,5),r())}function hr(i,c){i&1&&Q(0,1)(1,3)(2,4)(3,5)}var Fl=(()=>{class i extends mc{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(e,o){e&2&&j("mat-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],features:[U([{provide:mc,useExisting:i},{provide:Qt,useExisting:i},{provide:Ci,useValue:null}]),R],ngContentSelectors:vr,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,o){e&1&&(H(kr),B(0),B(1,1),u(2,Cr,1,0),u(3,gr,7,0)(4,hr,4,0)),e&2&&(n(2),m(o._isServer?2:-1),n(),m(o._isNativeHtmlTable?3:4))},dependencies:[yc,dc,uc,_c],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return i})(),bl=(()=>{class i extends so{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","matCellDef",""]],features:[U([{provide:so,useExisting:i}]),R]})}return i})(),Sl=(()=>{class i extends po{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","matHeaderCellDef",""]],features:[U([{provide:po,useExisting:i}]),R]})}return i})(),Tl=(()=>{class i extends fo{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","matFooterCellDef",""]],features:[U([{provide:fo,useExisting:i}]),R]})}return i})(),El=(()=>{class i extends Me{get name(){return this._name}set name(t){this._setNameInput(t)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[U([{provide:Me,useExisting:i}]),R]})}return i})(),Dl=(()=>{class i extends vl{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[R]})}return i})(),Vl=(()=>{class i extends Cl{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["mat-footer-cell"],["td","mat-footer-cell",""]],hostAttrs:[1,"mat-mdc-footer-cell","mdc-data-table__cell"],features:[R]})}return i})(),Ml=(()=>{class i extends gl{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[R]})}return i})();var Gl=(()=>{class i extends hi{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",S]},features:[U([{provide:hi,useExisting:i}]),R]})}return i})(),wl=(()=>{class i extends Li{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","matFooterRowDef",""]],inputs:{columns:[0,"matFooterRowDef","columns"],sticky:[2,"matFooterRowDefSticky","sticky",S]},features:[U([{provide:Li,useExisting:i}]),R]})}return i})(),Il=(()=>{class i extends yo{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275dir=I({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[U([{provide:yo,useExisting:i}]),R]})}return i})(),jl=(()=>{class i extends sc{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[U([{provide:sc,useExisting:i}]),R],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){e&1&&Q(0,0)},dependencies:[pe],encapsulation:2})}return i})(),Bl=(()=>{class i extends pc{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-footer-row"],["tr","mat-footer-row",""]],hostAttrs:["role","row",1,"mat-mdc-footer-row","mdc-data-table__row"],exportAs:["matFooterRow"],features:[U([{provide:pc,useExisting:i}]),R],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){e&1&&Q(0,0)},dependencies:[pe],encapsulation:2})}return i})(),Nl=(()=>{class i extends fc{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[U([{provide:fc,useExisting:i}]),R],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){e&1&&Q(0,0)},dependencies:[pe],encapsulation:2})}return i})();var Al=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=xt({type:i});static \u0275inj=ut({imports:[Ll,bt]})}return i})();var Fr=["input"],br=["label"],Sr=["*"],xc={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Tr=new K("mat-checkbox-default-options",{providedIn:"root",factory:()=>xc}),ht=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(ht||{}),kc=class{source;checked},Fi=(()=>{class i{_elementRef=f(X);_changeDetectorRef=f(et);_ngZone=f(At);_animationsDisabled=Mt();_options=f(Tr,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(t){let e=new kc;return e.source=this,e.checked=t,e}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new M;indeterminateChange=new M;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=ht.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){f(Xt).load(de);let t=f(new Ut("tabindex"),{optional:!0});this._options=this._options||xc,this.color=this._options.color||xc.color,this.tabIndex=t==null?0:parseInt(t)||0,this.id=this._uniqueId=f(wt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(t){t.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(t){t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(t){let e=t!=this._indeterminate();this._indeterminate.set(t),e&&(t?this._transitionCheckState(ht.Indeterminate):this._transitionCheckState(this.checked?ht.Checked:ht.Unchecked),this.indeterminateChange.emit(t)),this._syncIndeterminate(t)}_indeterminate=h(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorChangeFn=t}_transitionCheckState(t){let e=this._currentCheckState,o=this._getAnimationTargetElement();if(!(e===t||!o)&&(this._currentAnimationClass&&o.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(e,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){o.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{o.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let t=this._options?.clickAction;!this.disabled&&t!=="noop"?(this.indeterminate&&t!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ht.Checked:ht.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&t==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(t){t.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(t,e){if(this._animationsDisabled)return"";switch(t){case ht.Init:if(e===ht.Checked)return this._animationClasses.uncheckedToChecked;if(e==ht.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ht.Unchecked:return e===ht.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ht.Checked:return e===ht.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ht.Indeterminate:return e===ht.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(t){let e=this._inputElement;e&&(e.nativeElement.indeterminate=t)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(t){t.target&&this._labelElement.nativeElement.contains(t.target)&&t.stopPropagation()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-checkbox"]],viewQuery:function(e,o){if(e&1&&ct(Fr,5)(br,5),e&2){let a;G(a=w())&&(o._inputElement=a.first),G(a=w())&&(o._labelElement=a.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(e,o){e&2&&(le("id",o.id),_("tabindex",null)("aria-label",null)("aria-labelledby",null),O(o.color?"mat-"+o.color:"mat-accent"),j("_mat-animation-noopable",o._animationsDisabled)("mdc-checkbox--disabled",o.disabled)("mat-mdc-checkbox-disabled",o.disabled)("mat-mdc-checkbox-checked",o.checked)("mat-mdc-checkbox-disabled-interactive",o.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",S],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",S],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",S],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?void 0:gt(t)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",S],checked:[2,"checked","checked",S],disabled:[2,"disabled","disabled",S],indeterminate:[2,"indeterminate","indeterminate",S]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[U([{provide:Ze,useExisting:Se(()=>i),multi:!0},{provide:oo,useExisting:i,multi:!0}]),yt],ngContentSelectors:Sr,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(e,o){if(e&1&&(H(),s(0,"div",3),k("click",function(l){return o._preventBubblingFromLabel(l)}),s(1,"div",4,0)(3,"div",5),k("click",function(){return o._onTouchTargetClick()}),r(),s(4,"input",6,1),k("blur",function(){return o._onBlur()})("click",function(){return o._onInputClick()})("change",function(l){return o._onInteractionEvent(l)}),r(),L(6,"div",7),s(7,"div",8),C(),s(8,"svg",9),L(9,"path",10),r(),Te(),L(10,"div",11),r(),L(11,"div",12),r(),s(12,"label",13,2),B(14),r()()),e&2){let a=st(2);y("labelPosition",o.labelPosition),n(4),j("mdc-checkbox--selected",o.checked),y("checked",o.checked)("indeterminate",o.indeterminate)("disabled",o.disabled&&!o.disabledInteractive)("id",o.inputId)("required",o.required)("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex),_("aria-label",o.ariaLabel||null)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-checked",o.indeterminate?"mixed":null)("aria-controls",o.ariaControls)("aria-disabled",o.disabled&&o.disabledInteractive?!0:null)("aria-expanded",o.ariaExpanded)("aria-owns",o.ariaOwns)("name",o.name)("value",o.value),n(7),y("matRippleTrigger",a)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),n(),y("for",o.inputId)}},dependencies:[Ve,Qi],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),_o=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=xt({type:i});static \u0275inj=ut({imports:[Fi,bt]})}return i})();var Er=["determinateSpinner"];function Dr(i,c){if(i&1&&(C(),s(0,"svg",11),L(1,"circle",12),r()),i&2){let t=p();_("viewBox",t._viewBox()),n(),kt("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeCircumference()/2,"px")("stroke-width",t._circleStrokeWidth(),"%"),_("r",t._circleRadius())}}var Vr=new K("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Pl})}),Pl=100,Mr=10,Rl=(()=>{class i{_elementRef=f(X);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";_determinateCircle;constructor(){let t=f(Vr),e=ya(),o=this._elementRef.nativeElement;this._noopAnimations=e==="di-disabled"&&!!t&&!t._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&e==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=Pl;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-Mr)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(e,o){if(e&1&&ct(Er,5),e&2){let a;G(a=w())&&(o._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(e,o){e&2&&(_("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),O("mat-"+o.color),kt("width",o.diameter,"px")("height",o.diameter,"px")("--mat-progress-spinner-size",o.diameter+"px")("--mat-progress-spinner-active-indicator-width",o.diameter+"px"),j("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",gt],diameter:[2,"diameter","diameter",gt],strokeWidth:[2,"strokeWidth","strokeWidth",gt]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(e,o){if(e&1&&(nt(0,Dr,2,8,"ng-template",null,0,Hi),s(2,"div",2,1),C(),s(4,"svg",3),L(5,"circle",4),r()(),Te(),s(6,"div",5)(7,"div",6)(8,"div",7),Q(9,8),r(),s(10,"div",9),Q(11,8),r(),s(12,"div",10),Q(13,8),r()()()),e&2){let a=st(1);n(4),_("viewBox",o._viewBox()),n(),kt("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),_("r",o._circleRadius()),n(4),y("ngTemplateOutlet",a),n(2),y("ngTemplateOutlet",a),n(2),y("ngTemplateOutlet",a)}},dependencies:[Ui],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var ql=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=xt({type:i});static \u0275inj=ut({imports:[bt]})}return i})();var wr=["*"];function Ir(i,c){if(i&1&&(s(0,"span",2),d(1),r()),i&2){let t=p(2);n(),F(t.message())}}function jr(i,c){if(i&1&&(s(0,"div",0),L(1,"mat-progress-spinner",1),u(2,Ir,2,1,"span",2),r()),i&2){let t=p();_("aria-label",t.message()||"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F"),n(),y("diameter",t.diameter()),n(),m(t.message()?2:-1)}}var bi=class i{loading=N.required();message=N("");diameter=N(36);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-section-loader"]],inputs:{loading:[1,"loading"],message:[1,"message"],diameter:[1,"diameter"]},ngContentSelectors:wr,decls:2,vars:1,consts:[["role","status","aria-live","polite",1,"section-loader"],["mode","indeterminate",3,"diameter"],[1,"section-loader__message"]],template:function(t,e){t&1&&(H(),B(0),u(1,jr,3,3,"div",0)),t&2&&(n(),m(e.loading()?1:-1))},dependencies:[ql,Rl],styles:["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;min-height:0;flex:1 1 auto}.section-loader[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border-radius:var(--section-loader-radius, var(--mv-radius));background:color-mix(in srgb,var(--mat-sys-surface) 66%,transparent);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);animation:_ngcontent-%COMP%_section-loader-in .18s ease .15s both}.section-loader__message[_ngcontent-%COMP%]{padding:0 8px;color:var(--mat-sys-on-surface-variant);font-size:12px;text-align:center}@keyframes _ngcontent-%COMP%_section-loader-in{0%{opacity:0}to{opacity:1}}@media(prefers-reduced-motion:reduce){.section-loader[_ngcontent-%COMP%]{animation-duration:.01ms}}"],changeDetection:0})};var Br=(i,c)=>c.icon+c.tooltip;function Nr(i,c){if(i&1){let t=P();s(0,"button",2),k("click",function(o){let a=D(t).$implicit,l=p();return o.stopPropagation(),V(a.run(l.row()))}),s(1,"mat-icon"),d(2),r()()}if(i&2){let t=c.$implicit,e=p();j("danger",t.danger),y("matTooltip",t.tooltip)("disabled",(t.disabled==null?null:t.disabled(e.row()))??!1),_("aria-label",e.ariaLabel(t)),n(2),F(t.icon)}}var Si=class i{actions=N([]);row=N.required();visibleActions(){let c=this.row();return this.actions().filter(t=>!t.hidden?.(c))}ariaLabel(c){return c.ariaLabel?.(this.row())??c.tooltip}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-row-actions"]],inputs:{actions:[1,"actions"],row:[1,"row"]},decls:3,vars:0,consts:[[1,"row-actions"],["mat-icon-button","","type","button",3,"danger","matTooltip","disabled"],["mat-icon-button","","type","button",3,"click","matTooltip","disabled"]],template:function(t,e){t&1&&(s(0,"span",0),A(1,Nr,3,6,"button",1,Br),r()),t&2&&(n(),z(e.visibleActions()))},dependencies:[it,se,Tt,St,me,ie],encapsulation:2,changeDetection:0})};var Hl=["lucideIcon",""],ke=[[["title"]],"*"],ve=["title","*"],Ce=(i,c)=>c[1].key??i;function Ar(i,c){i&1&&(J(0,"title"),d(1),tt()),i&2&&(n(),F(c))}function zr(i,c){if(i&1&&(C(),b(0,"path")),i&2){p();let t=T(0);_("class",t.class)("d",t.d)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Pr(i,c){if(i&1&&(C(),b(0,"line")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("vector-effect",t["vector-effect"])}}function Rr(i,c){if(i&1&&(C(),b(0,"polygon")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function qr(i,c){if(i&1&&(C(),b(0,"polyline")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function Hr(i,c){if(i&1&&(C(),b(0,"circle")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("r",t.r)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Or(i,c){if(i&1&&(C(),b(0,"ellipse")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function $r(i,c){if(i&1&&(C(),b(0,"rect")),i&2){p();let t=T(0);_("class",t.class)("x",t.x)("y",t.y)("id",t.id)("opacity",t.opacity)("width",t.width)("height",t.height)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Ur(i,c){if(i&1&&(ne(0),u(1,zr,1,9,":svg:path")(2,Pr,1,12,":svg:line")(3,Rr,1,9,":svg:polygon")(4,qr,1,9,":svg:polyline")(5,Hr,1,11,":svg:circle")(6,Or,1,12,":svg:ellipse")(7,$r,1,14,":svg:rect")),i&2){let t,e=c.$implicit;re(e[1]),n(),m((t=e[0])==="path"?1:t==="line"?2:t==="polygon"?3:t==="polyline"?4:t==="circle"?5:t==="ellipse"?6:t==="rect"?7:-1)}}var Wr=["lucideCircleCheck",""];function Xr(i,c){i&1&&(J(0,"title"),d(1),tt()),i&2&&(n(),F(c))}function Zr(i,c){if(i&1&&(C(),b(0,"path")),i&2){p();let t=T(0);_("class",t.class)("d",t.d)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Kr(i,c){if(i&1&&(C(),b(0,"line")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("vector-effect",t["vector-effect"])}}function Qr(i,c){if(i&1&&(C(),b(0,"polygon")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function Yr(i,c){if(i&1&&(C(),b(0,"polyline")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function Jr(i,c){if(i&1&&(C(),b(0,"circle")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("r",t.r)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function ts(i,c){if(i&1&&(C(),b(0,"ellipse")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function es(i,c){if(i&1&&(C(),b(0,"rect")),i&2){p();let t=T(0);_("class",t.class)("x",t.x)("y",t.y)("id",t.id)("opacity",t.opacity)("width",t.width)("height",t.height)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function is(i,c){if(i&1&&(ne(0),u(1,Zr,1,9,":svg:path")(2,Kr,1,12,":svg:line")(3,Qr,1,9,":svg:polygon")(4,Yr,1,9,":svg:polyline")(5,Jr,1,11,":svg:circle")(6,ts,1,12,":svg:ellipse")(7,es,1,14,":svg:rect")),i&2){let t,e=c.$implicit;re(e[1]),n(),m((t=e[0])==="path"?1:t==="line"?2:t==="polygon"?3:t==="polyline"?4:t==="circle"?5:t==="ellipse"?6:t==="rect"?7:-1)}}var os=["lucideInbox",""];function cs(i,c){i&1&&(J(0,"title"),d(1),tt()),i&2&&(n(),F(c))}function as(i,c){if(i&1&&(C(),b(0,"path")),i&2){p();let t=T(0);_("class",t.class)("d",t.d)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function ls(i,c){if(i&1&&(C(),b(0,"line")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("vector-effect",t["vector-effect"])}}function ns(i,c){if(i&1&&(C(),b(0,"polygon")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function rs(i,c){if(i&1&&(C(),b(0,"polyline")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function ss(i,c){if(i&1&&(C(),b(0,"circle")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("r",t.r)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function ps(i,c){if(i&1&&(C(),b(0,"ellipse")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function fs(i,c){if(i&1&&(C(),b(0,"rect")),i&2){p();let t=T(0);_("class",t.class)("x",t.x)("y",t.y)("id",t.id)("opacity",t.opacity)("width",t.width)("height",t.height)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function ds(i,c){if(i&1&&(ne(0),u(1,as,1,9,":svg:path")(2,ls,1,12,":svg:line")(3,ns,1,9,":svg:polygon")(4,rs,1,9,":svg:polyline")(5,ss,1,11,":svg:circle")(6,ps,1,12,":svg:ellipse")(7,fs,1,14,":svg:rect")),i&2){let t,e=c.$implicit;re(e[1]),n(),m((t=e[0])==="path"?1:t==="line"?2:t==="polygon"?3:t==="polyline"?4:t==="circle"?5:t==="ellipse"?6:t==="rect"?7:-1)}}var ys=["lucideListPlus",""];function _s(i,c){i&1&&(J(0,"title"),d(1),tt()),i&2&&(n(),F(c))}function us(i,c){if(i&1&&(C(),b(0,"path")),i&2){p();let t=T(0);_("class",t.class)("d",t.d)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function ms(i,c){if(i&1&&(C(),b(0,"line")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("vector-effect",t["vector-effect"])}}function xs(i,c){if(i&1&&(C(),b(0,"polygon")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function ks(i,c){if(i&1&&(C(),b(0,"polyline")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function vs(i,c){if(i&1&&(C(),b(0,"circle")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("r",t.r)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Cs(i,c){if(i&1&&(C(),b(0,"ellipse")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function gs(i,c){if(i&1&&(C(),b(0,"rect")),i&2){p();let t=T(0);_("class",t.class)("x",t.x)("y",t.y)("id",t.id)("opacity",t.opacity)("width",t.width)("height",t.height)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function hs(i,c){if(i&1&&(ne(0),u(1,us,1,9,":svg:path")(2,ms,1,12,":svg:line")(3,xs,1,9,":svg:polygon")(4,ks,1,9,":svg:polyline")(5,vs,1,11,":svg:circle")(6,Cs,1,12,":svg:ellipse")(7,gs,1,14,":svg:rect")),i&2){let t,e=c.$implicit;re(e[1]),n(),m((t=e[0])==="path"?1:t==="line"?2:t==="polygon"?3:t==="polyline"?4:t==="circle"?5:t==="ellipse"?6:t==="rect"?7:-1)}}var Ls=["lucideLock",""];function Fs(i,c){i&1&&(J(0,"title"),d(1),tt()),i&2&&(n(),F(c))}function bs(i,c){if(i&1&&(C(),b(0,"path")),i&2){p();let t=T(0);_("class",t.class)("d",t.d)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Ss(i,c){if(i&1&&(C(),b(0,"line")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("vector-effect",t["vector-effect"])}}function Ts(i,c){if(i&1&&(C(),b(0,"polygon")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function Es(i,c){if(i&1&&(C(),b(0,"polyline")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function Ds(i,c){if(i&1&&(C(),b(0,"circle")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("r",t.r)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Vs(i,c){if(i&1&&(C(),b(0,"ellipse")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Ms(i,c){if(i&1&&(C(),b(0,"rect")),i&2){p();let t=T(0);_("class",t.class)("x",t.x)("y",t.y)("id",t.id)("opacity",t.opacity)("width",t.width)("height",t.height)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Gs(i,c){if(i&1&&(ne(0),u(1,bs,1,9,":svg:path")(2,Ss,1,12,":svg:line")(3,Ts,1,9,":svg:polygon")(4,Es,1,9,":svg:polyline")(5,Ds,1,11,":svg:circle")(6,Vs,1,12,":svg:ellipse")(7,Ms,1,14,":svg:rect")),i&2){let t,e=c.$implicit;re(e[1]),n(),m((t=e[0])==="path"?1:t==="line"?2:t==="polygon"?3:t==="polyline"?4:t==="circle"?5:t==="ellipse"?6:t==="rect"?7:-1)}}var ws=["lucideMousePointerClick",""];function Is(i,c){i&1&&(J(0,"title"),d(1),tt()),i&2&&(n(),F(c))}function js(i,c){if(i&1&&(C(),b(0,"path")),i&2){p();let t=T(0);_("class",t.class)("d",t.d)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Bs(i,c){if(i&1&&(C(),b(0,"line")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("vector-effect",t["vector-effect"])}}function Ns(i,c){if(i&1&&(C(),b(0,"polygon")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function As(i,c){if(i&1&&(C(),b(0,"polyline")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function zs(i,c){if(i&1&&(C(),b(0,"circle")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("r",t.r)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Ps(i,c){if(i&1&&(C(),b(0,"ellipse")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Rs(i,c){if(i&1&&(C(),b(0,"rect")),i&2){p();let t=T(0);_("class",t.class)("x",t.x)("y",t.y)("id",t.id)("opacity",t.opacity)("width",t.width)("height",t.height)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function qs(i,c){if(i&1&&(ne(0),u(1,js,1,9,":svg:path")(2,Bs,1,12,":svg:line")(3,Ns,1,9,":svg:polygon")(4,As,1,9,":svg:polyline")(5,zs,1,11,":svg:circle")(6,Ps,1,12,":svg:ellipse")(7,Rs,1,14,":svg:rect")),i&2){let t,e=c.$implicit;re(e[1]),n(),m((t=e[0])==="path"?1:t==="line"?2:t==="polygon"?3:t==="polyline"?4:t==="circle"?5:t==="ellipse"?6:t==="rect"?7:-1)}}var Hs=["lucideSearchX",""];function Os(i,c){i&1&&(J(0,"title"),d(1),tt()),i&2&&(n(),F(c))}function $s(i,c){if(i&1&&(C(),b(0,"path")),i&2){p();let t=T(0);_("class",t.class)("d",t.d)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Us(i,c){if(i&1&&(C(),b(0,"line")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("vector-effect",t["vector-effect"])}}function Ws(i,c){if(i&1&&(C(),b(0,"polygon")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function Xs(i,c){if(i&1&&(C(),b(0,"polyline")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function Zs(i,c){if(i&1&&(C(),b(0,"circle")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("r",t.r)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Ks(i,c){if(i&1&&(C(),b(0,"ellipse")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Qs(i,c){if(i&1&&(C(),b(0,"rect")),i&2){p();let t=T(0);_("class",t.class)("x",t.x)("y",t.y)("id",t.id)("opacity",t.opacity)("width",t.width)("height",t.height)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function Ys(i,c){if(i&1&&(ne(0),u(1,$s,1,9,":svg:path")(2,Us,1,12,":svg:line")(3,Ws,1,9,":svg:polygon")(4,Xs,1,9,":svg:polyline")(5,Zs,1,11,":svg:circle")(6,Ks,1,12,":svg:ellipse")(7,Qs,1,14,":svg:rect")),i&2){let t,e=c.$implicit;re(e[1]),n(),m((t=e[0])==="path"?1:t==="line"?2:t==="polygon"?3:t==="polyline"?4:t==="circle"?5:t==="ellipse"?6:t==="rect"?7:-1)}}function Js(i,c){i&1&&(J(0,"title"),d(1),tt()),i&2&&(n(),F(c))}function tp(i,c){if(i&1&&(C(),b(0,"path")),i&2){p();let t=T(0);_("class",t.class)("d",t.d)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function ep(i,c){if(i&1&&(C(),b(0,"line")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("x1",t.x1)("x2",t.x2)("y1",t.y1)("y2",t.y2)("vector-effect",t["vector-effect"])}}function ip(i,c){if(i&1&&(C(),b(0,"polygon")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function op(i,c){if(i&1&&(C(),b(0,"polyline")),i&2){p();let t=T(0);_("class",t.class)("id",t.id)("opacity",t.opacity)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("points",t.points)("vector-effect",t["vector-effect"])}}function cp(i,c){if(i&1&&(C(),b(0,"circle")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("r",t.r)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function ap(i,c){if(i&1&&(C(),b(0,"ellipse")),i&2){p();let t=T(0);_("class",t.class)("cx",t.cx)("cy",t.cy)("id",t.id)("opacity",t.opacity)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function lp(i,c){if(i&1&&(C(),b(0,"rect")),i&2){p();let t=T(0);_("class",t.class)("x",t.x)("y",t.y)("id",t.id)("opacity",t.opacity)("width",t.width)("height",t.height)("rx",t.rx)("ry",t.ry)("stroke",t.stroke)("stroke-opacity",t["stroke-opacity"])("fill",t.fill)("fill-opacity",t["fill-opacity"])("vector-effect",t["vector-effect"])}}function np(i,c){if(i&1&&(ne(0),u(1,tp,1,9,":svg:path")(2,ep,1,12,":svg:line")(3,ip,1,9,":svg:polygon")(4,op,1,9,":svg:polyline")(5,cp,1,11,":svg:circle")(6,ap,1,12,":svg:ellipse")(7,lp,1,14,":svg:rect")),i&2){let t,e=c.$implicit;re(e[1]),n(),m((t=e[0])==="path"?1:t==="line"?2:t==="polygon"?3:t==="polyline"?4:t==="circle"?5:t==="ellipse"?6:t==="rect"?7:-1)}}var rp={color:"currentColor",size:24,strokeWidth:2,absoluteStrokeWidth:!1},sp=new K("Lucide icon config",{factory:()=>rp});var Ge=(()=>{class i{iconNodes=E(()=>{let t=this.icon()?.node??[];return this.absoluteStrokeWidth()?t.map(([e,o])=>[e,Fe({"vector-effect":"non-scaling-stroke"},o)]):t});iconClasses=E(()=>{let t=this.icon();if(!t)return"";let{name:e,aliases:o=[]}=t;return[e,...o].map(a=>`lucide-${a}`).join(" ")});iconConfig=f(sp);title=N();size=N(this.iconConfig.size,{transform:t=>t??this.iconConfig.size});color=N(this.iconConfig.color,{transform:t=>t??this.iconConfig.color});strokeWidth=N(this.iconConfig.strokeWidth,{transform:t=>t??this.iconConfig.strokeWidth});absoluteStrokeWidth=N(this.iconConfig.absoluteStrokeWidth,{transform:t=>t??this.iconConfig.absoluteStrokeWidth});static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["svg","lucideIcon",""]],hostAttrs:["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide"],hostVars:7,hostBindings:function(e,o){e&2&&(_("width",o.size())("height",o.size())("stroke",o.color())("stroke-width",o.strokeWidth())("aria-hidden",!o.title()),O(o.iconClasses()))},inputs:{title:[1,"title"],size:[1,"size"],color:[1,"color"],strokeWidth:[1,"strokeWidth"],absoluteStrokeWidth:[1,"absoluteStrokeWidth"]},attrs:Hl,ngContentSelectors:ve,decls:5,vars:1,template:function(e,o){if(e&1&&(H(ke),u(0,Ar,2,1,"title"),B(1),A(2,Ur,8,2,null,null,Ce),B(4,1)),e&2){let a;m((a=o.title())?0:-1,a),n(2),z(o.iconNodes())}},encapsulation:2})}return i})();var Ol=(()=>{class i extends Ge{static icon={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],aliases:["check-circle-2"]};icon=h(i.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["svg","lucideCircleCheck",""],["svg","lucideCheckCircle2",""]],features:[R],attrs:Wr,ngContentSelectors:ve,decls:5,vars:1,template:function(e,o){if(e&1&&(H(ke),u(0,Xr,2,1,"title"),B(1),A(2,is,8,2,null,null,Ce),B(4,1)),e&2){let a;m((a=o.title())?0:-1,a),n(2),z(o.iconNodes())}},encapsulation:2,changeDetection:0})}return i})();var $l=(()=>{class i extends Ge{static icon={name:"inbox",size:24,node:[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]};icon=h(i.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["svg","lucideInbox",""]],features:[R],attrs:os,ngContentSelectors:ve,decls:5,vars:1,template:function(e,o){if(e&1&&(H(ke),u(0,cs,2,1,"title"),B(1),A(2,ds,8,2,null,null,Ce),B(4,1)),e&2){let a;m((a=o.title())?0:-1,a),n(2),z(o.iconNodes())}},encapsulation:2,changeDetection:0})}return i})();var Ul=(()=>{class i extends Ge{static icon={name:"list-plus",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 19H3",key:"zzsher"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]};icon=h(i.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["svg","lucideListPlus",""]],features:[R],attrs:ys,ngContentSelectors:ve,decls:5,vars:1,template:function(e,o){if(e&1&&(H(ke),u(0,_s,2,1,"title"),B(1),A(2,hs,8,2,null,null,Ce),B(4,1)),e&2){let a;m((a=o.title())?0:-1,a),n(2),z(o.iconNodes())}},encapsulation:2,changeDetection:0})}return i})();var Wl=(()=>{class i extends Ge{static icon={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};icon=h(i.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["svg","lucideLock",""]],features:[R],attrs:Ls,ngContentSelectors:ve,decls:5,vars:1,template:function(e,o){if(e&1&&(H(ke),u(0,Fs,2,1,"title"),B(1),A(2,Gs,8,2,null,null,Ce),B(4,1)),e&2){let a;m((a=o.title())?0:-1,a),n(2),z(o.iconNodes())}},encapsulation:2,changeDetection:0})}return i})();var Xl=(()=>{class i extends Ge{static icon={name:"mouse-pointer-click",size:24,node:[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]};icon=h(i.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["svg","lucideMousePointerClick",""]],features:[R],attrs:ws,ngContentSelectors:ve,decls:5,vars:1,template:function(e,o){if(e&1&&(H(ke),u(0,Is,2,1,"title"),B(1),A(2,qs,8,2,null,null,Ce),B(4,1)),e&2){let a;m((a=o.title())?0:-1,a),n(2),z(o.iconNodes())}},encapsulation:2,changeDetection:0})}return i})();var Zl=(()=>{class i extends Ge{static icon={name:"search-x",size:24,node:[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]};icon=h(i.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["svg","lucideSearchX",""]],features:[R],attrs:Hs,ngContentSelectors:ve,decls:5,vars:1,template:function(e,o){if(e&1&&(H(ke),u(0,Os,2,1,"title"),B(1),A(2,Ys,8,2,null,null,Ce),B(4,1)),e&2){let a;m((a=o.title())?0:-1,a),n(2),z(o.iconNodes())}},encapsulation:2,changeDetection:0})}return i})();function Kl(i){return!!i&&typeof i=="object"&&"name"in i&&typeof i.name=="string"&&"node"in i&&Array.isArray(i.node)}function Ql(i){return i instanceof ea&&"icon"in i&&Kl(i.icon)}var Yl=new K("Lucide icons",{factory:()=>({})});function Jl(...i){return{provide:Yl,useValue:i.reduce((c,t)=>{let e=Ql(t)?t.icon:t;c[e.name]=e;for(let o of e.aliases??[])c[o]=e;return c},{})}}var tn=(()=>{class i extends Ge{icons=f(Yl);lucideIcon=N.required();icon=E(()=>{let t=this.lucideIcon();if(Kl(t))return t;if(Ql(t))return t.icon;if(typeof t=="string"){if(t in this.icons)return this.icons[t];throw new Error(`Unable to resolve icon '${t}'`)}return null});static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["svg","lucideIcon",""]],inputs:{lucideIcon:[1,"lucideIcon"]},features:[R],attrs:Hl,ngContentSelectors:ve,decls:5,vars:1,template:function(e,o){if(e&1&&(H(ke),u(0,Js,2,1,"title"),B(1),A(2,np,8,2,null,null,Ce),B(4,1)),e&2){let a;m((a=o.title())?0:-1,a),n(2),z(o.iconNodes())}},encapsulation:2,changeDetection:0})}return i})();function en(){return Jl($l,Zl,Xl,Ul,Wl,Ol)}var on={empty:"inbox",filtered:"search_off",pick:"touch_app",lines:"playlist_add",blocked:"lock",ok:"check_circle"},cn={empty:"inbox",filtered:"search-x",pick:"mouse-pointer-click",lines:"list-plus",blocked:"lock",ok:"circle-check"},pp="\u0417\u0430\u043F\u0438\u0441\u0456\u0432 \u043D\u0435\u043C\u0430\u0454";function Cc(i,c=pp){return i?typeof i=="string"?{kind:"empty",title:i}:i:{kind:"empty",title:c}}function fp(i,c){i&1&&(C(),L(0,"svg",2)),i&2&&y("lucideIcon",c)("size",28)}function dp(i,c){if(i&1&&(s(0,"mat-icon"),d(1),r()),i&2){let t=p();n(),F(t.icon())}}function yp(i,c){i&1&&(s(0,"p",4),d(1),r()),i&2&&(n(),F(c))}function _p(i,c){if(i&1){let t=P();s(0,"button",6),k("click",function(){let o=D(t);return V(o.run())}),s(1,"mat-icon"),d(2),r(),d(3),r()}if(i&2){let t=c;y("disabled",t.disabled??!1),n(2),F(t.icon??"add"),n(),q(" ",t.label," ")}}var Ti=class i{state=N.required();kind=E(()=>this.state().kind??"empty");icon=E(()=>this.state().icon??on[this.kind()]);lucide=E(()=>this.state().icon?null:cn[this.kind()]??null);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-empty-state"]],hostAttrs:[1,"app-empty-state"],inputs:{state:[1,"state"]},features:[U([en()])],decls:8,vars:6,consts:[[1,"empty-state","empty-state--rich"],[1,"empty-state-icon"],[1,"empty-state-lucide",3,"lucideIcon","size"],[1,"empty-state-title"],[1,"empty-state-text"],["mat-stroked-button","","type","button",1,"empty-state-action",3,"disabled"],["mat-stroked-button","","type","button",1,"empty-state-action",3,"click","disabled"]],template:function(t,e){if(t&1&&(s(0,"div",0)(1,"span",1),u(2,fp,1,2,":svg:svg",2)(3,dp,2,1,"mat-icon"),r(),s(4,"p",3),d(5),r(),u(6,yp,2,1,"p",4),u(7,_p,4,3,"button",5),r()),t&2){let o,a,l;O("empty-state--"+e.kind()),n(2),m((o=e.lucide())?2:3,o),n(3),F(e.state().title),n(),m((a=e.state().text)?6:-1,a),n(),m((l=e.state().action)?7:-1,l)}},dependencies:[it,_t,Tt,St,tn],encapsulation:2,changeDetection:0})};var Ei=class i{appCell=N.required();template=f(mt);static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["ng-template","appCell",""]],inputs:{appCell:[1,"appCell"]}})};var gc=(i,c,t)=>({column:i,row:c,index:t}),nn=(i,c,t,e)=>({$implicit:i,row:c,column:t,index:e});function up(i,c){return this.trackRow(c,i)}var uo=(i,c)=>c.key;function mp(i,c){if(i&1){let t=P();s(0,"mat-checkbox",15),k("click",function(o){return o.stopPropagation()})("change",function(){let o=D(t),a=p().$implicit;return V(o.toggle(a))}),r()}if(i&2){let t=c,e=p().$implicit;y("checked",t.isSelected(e))("disabled",(t.disabled==null?null:t.disabled(e))??!1)}}function xp(i,c){if(i&1&&Q(0,11),i&2){let t=p(),e=t.$implicit,o=t.$index;p(2);let a=st(6);y("ngTemplateOutlet",a)("ngTemplateOutletContext",qi(2,gc,c,e,o))}}function kp(i,c){if(i&1){let t=P();s(0,"button",16),k("click",function(o){D(t);let a=p().$implicit,l=p(2);return o.stopPropagation(),V(l.rowDblClick.emit(a))}),s(1,"mat-icon"),d(2,"chevron_right"),r()()}}function vp(i,c){if(i&1&&(s(0,"div",17)(1,"dt"),d(2),r(),s(3,"dd"),Q(4,11),r()()),i&2){let t=c.$implicit,e=c.$index,o=p(2).$implicit;p(2);let a=st(6);n(2),F(t.header),n(2),y("ngTemplateOutlet",a)("ngTemplateOutletContext",qi(3,gc,t,o,e))}}function Cp(i,c){if(i&1&&(s(0,"dl",13),A(1,vp,5,7,"div",17,uo),r()),i&2){let t=p(3);n(),z(t.cardLayout().summary)}}function gp(i,c){if(i&1&&(s(0,"div",17)(1,"dt"),d(2),r(),s(3,"dd"),Q(4,11),r()()),i&2){let t=c.$implicit,e=c.$index,o=p(3).$implicit;p(2);let a=st(6);n(2),F(t.header),n(2),y("ngTemplateOutlet",a)("ngTemplateOutletContext",qi(3,gc,t,o,e))}}function hp(i,c){if(i&1&&(s(0,"details",18)(1,"summary",20),k("click",function(e){return e.stopPropagation()}),d(2,"\u0414\u0435\u0442\u0430\u043B\u0456"),r(),s(3,"dl",21),A(4,gp,5,7,"div",17,uo),r()()),i&2){let t=p(4);n(4),z(t.cardLayout().details)}}function Lp(i,c){if(i&1&&L(0,"app-row-actions",19),i&2){let t=p(2).$implicit,e=p(2);y("actions",e.actions())("row",t)}}function Fp(i,c){if(i&1&&(s(0,"div",14),u(1,hp,6,0,"details",18),u(2,Lp,1,2,"app-row-actions",19),r()),i&2){let t=p(3);n(),m(t.cardLayout().details.length?1:-1),n(),m(t.actions().length?2:-1)}}function bp(i,c){if(i&1){let t=P();s(0,"li",7),k("click",function(o){let a=D(t).$implicit,l=p(2);return V(l.onRowClick(a,o))}),s(1,"div",8),u(2,mp,1,2,"mat-checkbox",9),s(3,"span",10),u(4,xp,1,6,"ng-container",11),r(),u(5,kp,3,0,"button",12),r(),u(6,Cp,3,0,"dl",13),u(7,Fp,3,2,"div",14),r()}if(i&2){let t,e,o=c.$implicit,a=p(2);y("ngClass",a.rowClasses(o)),n(2),m((t=a.selection())?2:-1,t),n(2),m((e=a.cardLayout().title)?4:-1,e),n(),m(a.showOpen()?5:-1),n(),m(a.cardLayout().summary.length?6:-1),n(),m(a.cardLayout().details.length||a.actions().length?7:-1)}}function Sp(i,c){if(i&1&&(s(0,"div",17)(1,"dt"),d(2),r(),s(3,"dd"),d(4),r()()),i&2){let t=c.$implicit,e=p(3);n(2),F(t.header),n(2),F(e.footerText(t))}}function Tp(i,c){if(i&1&&(s(0,"li",6)(1,"div",8)(2,"span",10),d(3),r()(),s(4,"dl",21),A(5,Sp,5,2,"div",17,uo),r()()),i&2){let t=p(2);n(3),F(t.footerTitle()),n(2),z(t.footerColumns())}}function Ep(i,c){if(i&1&&(s(0,"ul",2),A(1,bp,8,6,"li",5,up,!0),u(3,Tp,7,1,"li",6),r()),i&2){let t=p();n(),z(t.rows()),n(2),m(t.showFooterCard()?3:-1)}}function Dp(i,c){if(i&1){let t=P();s(0,"mat-checkbox",32),k("change",function(o){D(t);let a=p(2);return V(a.toggleAll(o.checked))}),r()}if(i&2){let t=p(2);y("checked",(t.allSelected==null?null:t.allSelected())??!1)("indeterminate",((t.someSelected==null?null:t.someSelected())??!1)&&!((t.allSelected==null?null:t.allSelected())??!1))}}function Vp(i,c){if(i&1&&(s(0,"th",30),u(1,Dp,1,2,"mat-checkbox",31),r()),i&2){let t=p();n(),m(t.toggleAll?1:-1)}}function Mp(i,c){if(i&1){let t=P();s(0,"td",33)(1,"mat-checkbox",15),k("click",function(o){return o.stopPropagation()})("change",function(){let o=D(t).$implicit,a=p();return V(a.toggle(o))}),r()()}if(i&2){let t=c.$implicit,e=p();n(),y("checked",e.isSelected(t))("disabled",(e.disabled==null?null:e.disabled(t))??!1)}}function Gp(i,c){i&1&&L(0,"td",34)}function wp(i,c){if(i&1&&(Ie(0,23),nt(1,Vp,2,1,"th",27)(2,Mp,2,2,"td",28)(3,Gp,1,0,"td",29),je()),i&2){let t=p(2);y("matColumnDef",t.selectColumn)}}function Ip(i,c){if(i&1&&(s(0,"th",38),d(1),r()),i&2){let t=p().$implicit,e=p(2);O(e.headerClasses(t)),kt("width",t.width),n(),q(" ",t.header," ")}}function jp(i,c){if(i&1&&Q(0,11),i&2){let t=p(),e=t.$implicit,o=t.index,a=p().$implicit;y("ngTemplateOutlet",c)("ngTemplateOutletContext",Po(2,nn,e,e,a,o))}}function Bp(i,c){if(i&1&&(s(0,"mat-icon",41),d(1),r()),i&2){let t=p(2).$implicit,e=p().$implicit;O((e.iconClass==null?null:e.iconClass(t))??""),n(),F(c)}}function Np(i,c){if(i&1&&u(0,Bp,2,3,"mat-icon",40),i&2){let t,e=p().$implicit,o=p().$implicit;m((t=o.icon(e))?0:-1,t)}}function Ap(i,c){if(i&1&&d(0),i&2){let t=p(),e=t.$implicit,o=t.index,a=p().$implicit,l=p(2);q(" ",l.display(a,e,o)," ")}}function zp(i,c){if(i&1&&(s(0,"td",39),u(1,jp,1,7,"ng-container",11)(2,Np,1,1)(3,Ap,1,1),r()),i&2){let t,e=c.$implicit,o=p().$implicit,a=p(2);O(a.cellClasses(o,e)),_("title",o.tooltip==null?null:o.tooltip(e)),n(),m((t=a.templateFor(o))?1:o.icon?2:3,t)}}function Pp(i,c){if(i&1&&(s(0,"td",34),d(1),r()),i&2){let t=p().$implicit,e=p(2);O(e.headerClasses(t)),n(),q(" ",e.footerText(t)," ")}}function Rp(i,c){if(i&1&&(Ie(0,23),nt(1,Ip,2,5,"th",35)(2,zp,4,4,"td",36)(3,Pp,2,3,"td",37),je()),i&2){let t=c.$implicit;y("matColumnDef",t.key)}}function qp(i,c){if(i&1&&(s(0,"th",30),d(1),r()),i&2){let t=p(3);n(),q(" ",t.config().actionsHeader??"\u0414\u0456\u0457"," ")}}function Hp(i,c){if(i&1&&(s(0,"td",33),L(1,"app-row-actions",19),r()),i&2){let t=c.$implicit,e=p(3);n(),y("actions",e.actions())("row",t)}}function Op(i,c){i&1&&L(0,"td",43)}function $p(i,c){if(i&1&&(Ie(0,23),nt(1,qp,2,1,"th",27)(2,Hp,2,2,"td",28)(3,Op,1,0,"td",42),je()),i&2){let t=p(2);y("matColumnDef",t.actionsColumn)}}function Up(i,c){i&1&&L(0,"tr",44)}function Wp(i,c){if(i&1){let t=P();s(0,"tr",45),k("click",function(o){let a=D(t).$implicit,l=p(2);return V(l.onRowClick(a,o))})("dblclick",function(){let o=D(t).$implicit,a=p(2);return V(a.rowDblClick.emit(o))}),r()}if(i&2){let t=c.$implicit,e=p(2);y("ngClass",e.rowClasses(t))}}function Xp(i,c){i&1&&L(0,"tr",26)}function Zp(i,c){if(i&1&&nt(0,Xp,1,0,"tr",46),i&2){let t=p(2);y("matFooterRowDef",t.displayedColumns())}}function Kp(i,c){if(i&1&&(s(0,"table",22),u(1,wp,4,1,"ng-container",23),A(2,Rp,4,1,"ng-container",23,uo),u(4,$p,4,1,"ng-container",23),nt(5,Up,1,0,"tr",24)(6,Wp,1,1,"tr",25),u(7,Zp,1,1,"tr",26),r()),i&2){let t,e=p();O(e.tableClass()),y("dataSource",e.rows()),n(),m((t=e.selection())?1:-1,t),n(),z(e.columns()),n(2),m(e.actions().length?4:-1),n(),y("matHeaderRowDef",e.displayedColumns())("matHeaderRowDefSticky",!0),n(),y("matRowDefColumns",e.displayedColumns()),n(),m(e.config().footer?7:-1)}}function Qp(i,c){if(i&1&&L(0,"app-empty-state",4),i&2){let t=p();y("state",t.emptyState())}}function Yp(i,c){if(i&1&&Q(0,11),i&2){let t=p(),e=t.column,o=t.row,a=t.index;y("ngTemplateOutlet",c)("ngTemplateOutletContext",Po(2,nn,o,o,e,a))}}function Jp(i,c){if(i&1&&(s(0,"mat-icon",41),d(1),r()),i&2){let t=p(2),e=t.column,o=t.row;O((e.iconClass==null?null:e.iconClass(o))??""),n(),F(c)}}function t0(i,c){if(i&1&&u(0,Jp,2,3,"mat-icon",40),i&2){let t,e=p(),o=e.column,a=e.row;m((t=o.icon(a))?0:-1,t)}}function e0(i,c){if(i&1&&d(0),i&2){let t=p(),e=t.column,o=t.row,a=t.index,l=p();q(" ",l.display(e,o,a)," ")}}function i0(i,c){if(i&1&&u(0,Yp,1,7,"ng-container",11)(1,t0,1,1)(2,e0,1,1),i&2){let t,e=c.column,o=p();m((t=o.templateFor(e))?0:e.icon?1:2,t)}}var an="__select",ln="__actions",o0=2,ei=class i{locale=f(Oi);responsive=f(xi);rows=N([]);config=N.required();selectedId=N(null);loading=N(!1);empty=N(null);rowClick=Be();rowDblClick=Be();cellTemplates=ra(Ei);columns=E(()=>this.config().columns.filter(c=>!c.hidden));actions=E(()=>this.config().actions??[]);displayedColumns=E(()=>{let c=this.columns().map(t=>t.key);return this.config().selection&&c.unshift(an),this.actions().length&&c.push(ln),c});wrapperClass=E(()=>{switch(this.config().wrapper??"list"){case"overflow":return"overflow-table-wrapper";case"content":return"table-wrapper";case"capped":return"table-wrapper table-wrapper--capped";default:return"list-wrapper"}});autoHeight=E(()=>{let c=this.config().wrapper??"list";return c==="content"||c==="capped"});tableClass=E(()=>this.config().tableClass??"list-table");showEmpty=E(()=>!this.loading()&&this.rows().length===0);emptyState=E(()=>Cc(this.empty()??this.config().empty));selection=E(()=>this.config().selection);selectColumn=an;actionsColumn=ln;mobileMode=E(()=>this.config().mobile??"cards");cardMode=E(()=>this.responsive.isPhone()&&this.mobileMode()==="cards");scrollMode=E(()=>this.responsive.isPhone()&&this.mobileMode()==="scroll");cardLayout=E(()=>{let c=this.columns().filter(v=>v.mobile!=="hide"),t=c.find(v=>v.mobile==="title")??c.find(v=>!v.mobile&&v.header&&!v.icon)??null,e=c.filter(v=>v!==t),o=e.filter(v=>v.mobile==="summary"),a=e.filter(v=>!v.mobile),l=o.length?o:[...a.filter(v=>v.numeric),...a.filter(v=>!v.numeric)].slice(0,o0),x=new Set(l);return t&&x.add(t),{title:t,summary:l,details:c.filter(v=>!x.has(v))}});showOpen=E(()=>(this.config().rowBaseClass??"list-row")!=="none");footerColumns=E(()=>this.columns().filter(c=>c.footer));footerTitle=E(()=>this.columns().find(c=>c.footerLabel)?.footerLabel??"\u0420\u0430\u0437\u043E\u043C");showFooterCard=E(()=>!!this.config().footer&&this.footerColumns().length>0);trackRow(c,t){return this.rowId(c)??t}onRowClick(c,t){let e=this.config().onRowClick;e?e(c,t):this.rowClick.emit(c)}rowId(c){let t=this.config().rowId;return t?t(c):c.id}rowClasses(c){let t=this.config(),e=t.deleted?t.deleted(c):!!c.isDeleted,o=t.rowBaseClass??"list-row",a={selected:this.rowId(c)===this.selectedId(),deleted:e};o!=="none"&&(a[o]=!0);let l=t.rowClass?.(c);if(typeof l=="string")for(let x of l.split(" ").filter(Boolean))a[x]=!0;else l&&Object.assign(a,l);return a}headerClasses(c){return[c.numeric?"num":"",c.headerClass??""].filter(Boolean).join(" ")}cellClasses(c,t){let e=typeof c.cellClass=="function"?c.cellClass(t):c.cellClass;return[c.numeric?"num":"",e??""].filter(Boolean).join(" ")}templateFor(c){let t=c.cell??c.key;return this.cellTemplates().find(e=>e.appCell()===t)?.template??null}display(c,t,e=0){let o=c.value?c.value(t,e):t[c.key];return this.format(o,c.format,c.blank,c.digits)}footerText(c){return c.footerLabel?c.footerLabel:c.footer?this.format(c.footer(this.rows()),c.format,"",c.digits):""}format(c,t,e="",o="1.2-2"){if(c==null||c==="")return e;switch(t){case"number":return ui(Number(c),this.locale,o);case"integer":return ui(Number(c),this.locale,"1.0-0");case"date":return $i(c,"dd.MM.yyyy",this.locale);case"datetime":return $i(c,"dd.MM.yyyy HH:mm",this.locale);case"time":return $i(c,"HH:mm",this.locale);case"bool":return c?"\u0422\u0430\u043A":"\u2014";default:return String(c)}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-data-table"]],contentQueries:function(t,e,o){t&1&&la(o,e.cellTemplates,Ei,4),t&2&&na()},hostAttrs:[1,"app-data-table"],hostVars:2,hostBindings:function(t,e){t&2&&j("app-data-table--auto",e.autoHeight())},inputs:{rows:[1,"rows"],config:[1,"config"],selectedId:[1,"selectedId"],loading:[1,"loading"],empty:[1,"empty"]},outputs:{rowClick:"rowClick",rowDblClick:"rowDblClick"},decls:7,vars:11,consts:[["cellValue",""],[3,"loading"],[1,"card-list"],["mat-table","",3,"dataSource","class"],[3,"state"],[1,"data-card",3,"ngClass"],[1,"data-card","data-card--footer"],[1,"data-card",3,"click","ngClass"],[1,"data-card-head"],[3,"checked","disabled"],[1,"data-card-title"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["mat-icon-button","","type","button","aria-label","\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438","matTooltip","\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438",1,"data-card-open"],[1,"data-card-summary"],[1,"data-card-foot"],[3,"click","change","checked","disabled"],["mat-icon-button","","type","button","aria-label","\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438","matTooltip","\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438",1,"data-card-open",3,"click"],[1,"data-card-pair"],[1,"data-card-details"],[3,"actions","row"],[3,"click"],[1,"data-card-pairs"],["mat-table","",3,"dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"ngClass","click","dblclick",4,"matRowDef","matRowDefColumns"],["mat-footer-row",""],["mat-header-cell","","class","actions-col",4,"matHeaderCellDef"],["mat-cell","","class","actions-col",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["mat-header-cell","",1,"actions-col"],[3,"checked","indeterminate"],[3,"change","checked","indeterminate"],["mat-cell","",1,"actions-col"],["mat-footer-cell",""],["mat-header-cell","",3,"class","width",4,"matHeaderCellDef"],["mat-cell","",3,"class",4,"matCellDef"],["mat-footer-cell","",3,"class",4,"matFooterCellDef"],["mat-header-cell",""],["mat-cell",""],[1,"flag-icon",3,"class"],[1,"flag-icon"],["mat-footer-cell","","class","actions-col",4,"matFooterCellDef"],["mat-footer-cell","",1,"actions-col"],["mat-header-row",""],["mat-row","",3,"click","dblclick","ngClass"],["mat-footer-row","",4,"matFooterRowDef"]],template:function(t,e){t&1&&(s(0,"app-section-loader",1)(1,"div"),u(2,Ep,4,1,"ul",2)(3,Kp,8,9,"table",3),u(4,Qp,1,1,"app-empty-state",4),r()(),nt(5,i0,3,1,"ng-template",null,0,Hi)),t&2&&(y("loading",e.loading()),n(),O(e.wrapperClass()),j("is-cards",e.cardMode())("is-scroll",e.scrollMode())("is-empty",e.showEmpty()),n(),m(e.cardMode()?2:3),n(2),m(e.showEmpty()?4:-1))},dependencies:[sa,Ui,Al,Fl,Sl,Gl,El,bl,Il,Tl,wl,Dl,Ml,Vl,jl,Nl,Bl,it,se,Tt,St,me,ie,_o,Fi,bi,Si,Ti],encapsulation:2,changeDetection:0})};function rn(i,c){return{label:"\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456",checked:i,run:c}}function sn(i,c,t="\u041F\u043E\u0448\u0443\u043A"){return{key:"search",kind:"text",label:t,value:i,set:e=>c(String(e??"")),width:"240px"}}var c0=(i,c)=>c.label;function a0(i,c){if(i&1&&(s(0,"mat-icon"),d(1),r()),i&2){let t=p().$implicit;n(),F(t.checked?"check_box":"check_box_outline_blank")}}function l0(i,c){if(i&1&&(s(0,"mat-icon"),d(1),r()),i&2){let t=p().$implicit;n(),F(t.icon)}}function n0(i,c){if(i&1){let t=P();s(0,"button",3),k("click",function(){let o=D(t).$implicit;return V(o.run())}),u(1,a0,2,1,"mat-icon")(2,l0,2,1,"mat-icon"),d(3),r()}if(i&2){let t=c.$implicit;y("disabled",t.disabled),n(),m(t.checked!==void 0?1:t.icon?2:-1),n(2),q(" ",t.label," ")}}function r0(i,c){if(i&1&&(s(0,"button",1)(1,"mat-icon"),d(2,"more_vert"),r()(),s(3,"mat-menu",null,0),A(5,n0,4,3,"button",2,c0),r()),i&2){let t=st(4),e=p();y("matMenuTriggerFor",t),_("aria-label",e.ariaLabel()?"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u0434\u0456\u0457 \u2014 "+e.ariaLabel():"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u0434\u0456\u0457"),n(5),z(e.items())}}var Di=class i{items=N([]);ariaLabel=N("");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-more-actions-menu"]],inputs:{items:[1,"items"],ariaLabel:[1,"ariaLabel"]},decls:1,vars:1,consts:[["menu","matMenu"],["mat-icon-button","","type","button","matTooltip","\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u0434\u0456\u0457",3,"matMenuTriggerFor"],["mat-menu-item","","type","button",3,"disabled"],["mat-menu-item","","type","button",3,"click","disabled"]],template:function(t,e){t&1&&u(0,r0,7,2),t&2&&m(e.items().length?0:-1)},dependencies:[it,se,Tt,St,Ja,Qa,Ka,Ya,me,ie],encapsulation:2,changeDetection:0})};var hc=class{registered=h([]);requested=h(null);steps=this.registered.asReadonly();stepped=E(()=>{let c=this.steps();return c.length>1&&c.some(t=>t.collapsible())});active=E(()=>{let c=this.steps(),t=this.requested();return t&&c.includes(t)?t:c[0]??null});get empty(){return this.registered().length===0}register(c){this.registered.update(t=>t.includes(c)?t:[...t,c])}unregister(c){this.registered.update(t=>t.filter(e=>e!==c)),this.requested()===c&&this.requested.set(null)}activate(c){!this.steps().includes(c)||this.active()===c||(this.requested.set(c),c.reveal())}advanceFrom(c){let t=this.neighbour(c,1);t&&this.activate(t)}previousOf(c){return this.neighbour(c,-1)}neighbour(c,t){let e=this.steps(),o=e.indexOf(c);return o<0?null:e[o+t]??null}},Lc=class i{groups=new Map;join(c,t){let e=this.groups.get(c);return e||(e=new hc,this.groups.set(c,e)),e.register(t),e}leave(c,t){let e=this.groups.get(c);e&&(e.unregister(t),e.empty&&this.groups.delete(c))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Lt({token:i,factory:i.\u0275fac,providedIn:"root"})};var s0=["*"];function p0(i,c){if(i&1&&(J(0,"span",0),d(1),tt()),i&2){let t=p();n(),F(t.badge())}}var ii=class i{title=N("");badge=N(null);inline=N(!1,{transform:S});static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-page-header"]],hostAttrs:[1,"page-header"],hostVars:2,hostBindings:function(t,e){t&2&&j("page-header--inline",e.inline())},inputs:{title:[1,"title"],badge:[1,"badge"],inline:[1,"inline"]},ngContentSelectors:s0,decls:4,vars:2,consts:[[1,"group-badge"]],template:function(t,e){t&1&&(H(),J(0,"h1"),d(1),tt(),u(2,p0,2,1,"span",0),B(3)),t&2&&(n(),F(e.title()),n(),m(e.badge()?2:-1))},encapsulation:2,changeDetection:0})};var d0=["trigger"],y0=["panel"],_0=[[["mat-select-trigger"]],"*"],u0=["mat-select-trigger","*"];function m0(i,c){if(i&1&&(s(0,"span",4),d(1),r()),i&2){let t=p();n(),F(t.placeholder)}}function x0(i,c){i&1&&B(0)}function k0(i,c){if(i&1&&(s(0,"span",11),d(1),r()),i&2){let t=p(2);n(),F(t.triggerValue)}}function v0(i,c){if(i&1&&(s(0,"span",5),u(1,x0,1,0)(2,k0,2,1,"span",11),r()),i&2){let t=p();n(),m(t.customTrigger?1:2)}}function C0(i,c){if(i&1){let t=P();s(0,"div",12,1),k("keydown",function(o){D(t);let a=p();return V(a._handleKeydown(o))}),B(2,1),r()}if(i&2){let t=p();O(t.panelClass),j("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",(t._parentFormField==null?null:t._parentFormField.color)==="primary")("mat-accent",(t._parentFormField==null?null:t._parentFormField.color)==="accent")("mat-warn",(t._parentFormField==null?null:t._parentFormField.color)==="warn")("mat-undefined",!(t._parentFormField!=null&&t._parentFormField.color)),_("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var g0=new K("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=f(Dt);return()=>to(i)}}),h0=new K("MAT_SELECT_CONFIG"),L0=new K("MatSelectTrigger"),Fc=class{source;value;constructor(c,t){this.source=c,this.value=t}},ai=(()=>{class i{_viewportRuler=f(Pe);_changeDetectorRef=f(et);_elementRef=f(X);_dir=f(zt,{optional:!0});_idGenerator=f(wt);_renderer=f(Yt);_parentFormField=f(ao,{optional:!0});ngControl=f(Zo,{self:!0,optional:!0});_liveAnnouncer=f(xa);_defaultOptions=f(h0,{optional:!0});_animationsDisabled=Mt();_popoverLocation;_initialized=new ot;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let o=this.panel.nativeElement,a=ba(t,this.options,this.optionGroups),l=e._getHostElement();t===0&&a===1?o.scrollTop=0:o.scrollTop=Sa(l.offsetTop,l.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Fc(this,t)}_scrollStrategyFactory=f(g0);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new ot;_errorStateTracker;stateChanges=new ot;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=h(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(lt.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ji(()=>{let t=this.options;return t?t.changes.pipe(Ot(t),yi(()=>Nt(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(yi(()=>this.optionSelectionChanges))});openedChange=new M;_openedStream=this.openedChange.pipe(be(t=>t),Bo(()=>{}));_closedStream=this.openedChange.pipe(be(t=>!t),Bo(()=>{}));selectionChange=new M;valueChange=new M;constructor(){let t=f(da),e=f(Ko,{optional:!0}),o=f(mi,{optional:!0}),a=f(new Ut("tabindex"),{optional:!0}),l=f(Ra,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ea(t,this.ngControl,o,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=l?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Oa(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(rt(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(rt(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(Ot(null),rt(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?o.setAttribute("aria-labelledby",t):o.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Bi(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let t=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=`${this.id}-panel`;this._trackedModal&&Ho(this._trackedModal,"aria-owns",e),ga(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(!this._trackedModal)return;let t=`${this.id}-panel`;Ho(this._trackedModal,"aria-owns",t),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(o),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,o=e===40||e===38||e===37||e===39,a=e===13||e===32,l=this._keyManager;if(!l.isTyping()&&a&&!Gt(t)||(this.multiple||t.altKey)&&o)t.preventDefault(),this.open();else if(!this.multiple){let x=this.selected;l.onKeydown(t);let v=this.selected;v&&x!==v&&this._liveAnnouncer.announce(v.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,o=t.keyCode,a=o===40||o===38,l=e.isTyping();if(a&&t.altKey)t.preventDefault(),this.close();else if(!l&&(o===13||o===32)&&e.activeItem&&!Gt(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!l&&this._multiple&&o===65&&t.ctrlKey){t.preventDefault();let x=this.options.some(v=>!v.disabled&&!v.selected);this.options.forEach(v=>{v.disabled||(x?v.select():v.deselect())})}else{let x=e.activeItemIndex;e.onKeydown(t),this._multiple&&a&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==x&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!Gt(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,t)}catch{return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof Wo?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new va(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=Nt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(rt(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Nt(...this.options.map(e=>e._stateChanges)).pipe(rt(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let o=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(o!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),o!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,o)=>this.sortComparator?this.sortComparator(e,o,t):t.indexOf(e)-t.indexOf(o)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(o=>o.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=_a(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-select"]],contentQueries:function(e,o,a){if(e&1&&Vt(a,L0,5)(a,ye,5)(a,Fa,5),e&2){let l;G(l=w())&&(o.customTrigger=l.first),G(l=w())&&(o.options=l),G(l=w())&&(o.optionGroups=l)}},viewQuery:function(e,o){if(e&1&&ct(d0,5)(y0,5)(Xo,5),e&2){let a;G(a=w())&&(o.trigger=a.first),G(a=w())&&(o.panel=a.first),G(a=w())&&(o._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(e,o){e&1&&k("keydown",function(l){return o._handleKeydown(l)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),e&2&&(_("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),j("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",S],disableRipple:[2,"disableRipple","disableRipple",S],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:gt(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",S],placeholder:"placeholder",required:[2,"required","required",S],multiple:[2,"multiple","multiple",S],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",S],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",gt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",S]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[U([{provide:Yo,useExisting:i},{provide:La,useExisting:i}]),yt],ngContentSelectors:u0,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(e,o){if(e&1&&(H(_0),s(0,"div",2,0),k("click",function(){return o.open()}),s(3,"div",3),u(4,m0,2,1,"span",4)(5,v0,3,1,"span",5),r(),s(6,"div",6)(7,"div",7),C(),s(8,"svg",8),L(9,"path",9),r()()()(),nt(10,C0,3,16,"ng-template",10),k("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(l){return o._handleOverlayKeydown(l)})),e&2){let a=st(1);n(3),_("id",o._valueId),n(),m(o.empty?4:5),n(6),y("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[Wo,Xo],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var li=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=xt({type:i});static \u0275inj=ut({imports:[eo,Oo,bt,Ji,Pt,Oo]})}return i})();var F0=["mat-calendar-body",""];function b0(i,c){return this._trackRow(c)}var mn=(i,c)=>c.id;function S0(i,c){if(i&1&&(J(0,"tr",0)(1,"td",3),d(2),tt()()),i&2){let t=p();n(),kt("padding-top",t._cellPadding)("padding-bottom",t._cellPadding),_("colspan",t.numCols),n(),q(" ",t.label," ")}}function T0(i,c){if(i&1&&(J(0,"td",3),d(1),tt()),i&2){let t=p(2);kt("padding-top",t._cellPadding)("padding-bottom",t._cellPadding),_("colspan",t._firstRowOffset),n(),q(" ",t._firstRowOffset>=t.labelMinRequiredCells?t.label:""," ")}}function E0(i,c){if(i&1){let t=P();J(0,"td",6)(1,"button",7),aa("click",function(o){let a=D(t).$implicit,l=p(2);return V(l._cellClicked(a,o))})("focus",function(o){let a=D(t).$implicit,l=p(2);return V(l._emitActiveDateChange(a,o))}),J(2,"span",8),d(3),tt(),b(4,"span",9),tt()()}if(i&2){let t=c.$implicit,e=c.$index,o=p().$index,a=p();kt("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),_("data-mat-row",o)("data-mat-col",e),n(),O(t.cssClasses),j("mat-calendar-body-disabled",!t.enabled)("mat-calendar-body-active",a._isActiveCell(o,e))("mat-calendar-body-range-start",a._isRangeStart(t.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(t.compareValue))("mat-calendar-body-in-range",a._isInRange(t.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(t.compareValue,o,e))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(t.compareValue,o,e))("mat-calendar-body-comparison-start",a._isComparisonStart(t.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(t.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(t.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(t.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(t.compareValue))("mat-calendar-body-in-preview",a._isInPreview(t.compareValue)),le("tabIndex",a._isActiveCell(o,e)?0:-1),_("aria-label",t.ariaLabel)("aria-disabled",!t.enabled||null)("aria-pressed",a._isSelected(t.compareValue))("aria-current",a.todayValue===t.compareValue?"date":null)("aria-describedby",a._getDescribedby(t.compareValue)),n(),j("mat-calendar-body-selected",a._isSelected(t.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(t.compareValue))("mat-calendar-body-today",a.todayValue===t.compareValue),n(),q(" ",t.displayValue," ")}}function D0(i,c){if(i&1&&(J(0,"tr",1),u(1,T0,2,6,"td",4),A(2,E0,5,49,"td",5,mn),tt()),i&2){let t=c.$implicit,e=c.$index,o=p();n(),m(e===0&&o._firstRowOffset?1:-1),n(),z(t)}}function V0(i,c){if(i&1&&(s(0,"th",2)(1,"span",6),d(2),r(),s(3,"span",3),d(4),r()()),i&2){let t=c.$implicit;n(2),F(t.long),n(2),F(t.narrow)}}var M0=["*"];function G0(i,c){}function w0(i,c){if(i&1){let t=P();s(0,"mat-month-view",4),Pi("activeDateChange",function(o){D(t);let a=p();return zi(a.activeDate,o)||(a.activeDate=o),V(o)}),k("_userSelection",function(o){D(t);let a=p();return V(a._dateSelected(o))})("dragStarted",function(o){D(t);let a=p();return V(a._dragStarted(o))})("dragEnded",function(o){D(t);let a=p();return V(a._dragEnded(o))}),r()}if(i&2){let t=p();Ai("activeDate",t.activeDate),y("selected",t.selected)("dateFilter",t.dateFilter)("maxDate",t.maxDate)("minDate",t.minDate)("dateClass",t.dateClass)("comparisonStart",t.comparisonStart)("comparisonEnd",t.comparisonEnd)("startDateAccessibleName",t.startDateAccessibleName)("endDateAccessibleName",t.endDateAccessibleName)("activeDrag",t._activeDrag)}}function I0(i,c){if(i&1){let t=P();s(0,"mat-year-view",5),Pi("activeDateChange",function(o){D(t);let a=p();return zi(a.activeDate,o)||(a.activeDate=o),V(o)}),k("monthSelected",function(o){D(t);let a=p();return V(a._monthSelectedInYearView(o))})("selectedChange",function(o){D(t);let a=p();return V(a._goToDateInView(o,"month"))}),r()}if(i&2){let t=p();Ai("activeDate",t.activeDate),y("selected",t.selected)("dateFilter",t.dateFilter)("maxDate",t.maxDate)("minDate",t.minDate)("dateClass",t.dateClass)}}function j0(i,c){if(i&1){let t=P();s(0,"mat-multi-year-view",6),Pi("activeDateChange",function(o){D(t);let a=p();return zi(a.activeDate,o)||(a.activeDate=o),V(o)}),k("yearSelected",function(o){D(t);let a=p();return V(a._yearSelectedInMultiYearView(o))})("selectedChange",function(o){D(t);let a=p();return V(a._goToDateInView(o,"year"))}),r()}if(i&2){let t=p();Ai("activeDate",t.activeDate),y("selected",t.selected)("dateFilter",t.dateFilter)("maxDate",t.maxDate)("minDate",t.minDate)("dateClass",t.dateClass)}}function B0(i,c){}var N0=["button"],A0=[[["","matDatepickerToggleIcon",""]]],z0=["[matDatepickerToggleIcon]"];function P0(i,c){i&1&&(C(),s(0,"svg",2),L(1,"path",3),r())}var si=(()=>{class i{changes=new ot;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(t,e){return`${t} \u2013 ${e}`}formatYearRangeLabel(t,e){return`${t} to ${e}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Lt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),R0=0,Mi=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=R0++;cssClasses;constructor(c,t,e,o,a,l=c,x){this.value=c,this.displayValue=t,this.ariaLabel=e,this.enabled=o,this.compareValue=l,this.rawValue=x,this.cssClasses=a instanceof Set?Array.from(a):a}},q0={passive:!1,capture:!0},xo={passive:!0,capture:!0},pn={passive:!0},ri=(()=>{class i{_elementRef=f(X);_ngZone=f(At);_platform=f(De);_intl=f(si);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new M;previewChange=new M;activeDateChange=new M;dragStarted=new M;dragEnded=new M;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=f(Dt);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=t=>t;constructor(){let t=f(Yt),e=f(wt);this._startDateLabelId=e.getId("mat-calendar-body-start-"),this._endDateLabelId=e.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=e.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=e.getId("mat-calendar-body-comparison-end-"),f(Xt).load(de),this._ngZone.runOutsideAngular(()=>{let o=this._elementRef.nativeElement,a=[t.listen(o,"touchmove",this._touchmoveHandler,q0),t.listen(o,"mouseenter",this._enterHandler,xo),t.listen(o,"focus",this._enterHandler,xo),t.listen(o,"mouseleave",this._leaveHandler,xo),t.listen(o,"blur",this._leaveHandler,xo),t.listen(o,"mousedown",this._mousedownHandler,pn),t.listen(o,"touchstart",this._mousedownHandler,pn)];this._platform.isBrowser&&a.push(t.listen("window","mouseup",this._mouseupHandler),t.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(t,e){this._didDragSinceMouseDown||t.enabled&&this.selectedValueChange.emit({value:t.value,event:e})}_emitActiveDateChange(t,e){t.enabled&&this.activeDateChange.emit({value:t.value,event:e})}_isSelected(t){return this.startValue===t||this.endValue===t}ngOnChanges(t){let e=t.numCols,{rows:o,numCols:a}=this;(t.rows||e)&&(this._firstRowOffset=o&&o.length&&o[0].length?a-o[0].length:0),(t.cellAspectRatio||e||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(e||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(t=>t())}_isActiveCell(t,e){let o=t*this.numCols+e;return t&&(o-=this._firstRowOffset),o==this.activeCell}_focusActiveCell(t=!0){Ft(()=>{setTimeout(()=>{let e=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");e&&(t||(this._skipNextFocus=!0),e.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(t){return Ec(t,this.startValue,this.endValue)}_isRangeEnd(t){return Dc(t,this.startValue,this.endValue)}_isInRange(t){return Vc(t,this.startValue,this.endValue,this.isRange)}_isComparisonStart(t){return Ec(t,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(t,e,o){if(!this._isComparisonStart(t)||this._isRangeStart(t)||!this._isInRange(t))return!1;let a=this.rows[e][o-1];if(!a){let l=this.rows[e-1];a=l&&l[l.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(t,e,o){if(!this._isComparisonEnd(t)||this._isRangeEnd(t)||!this._isInRange(t))return!1;let a=this.rows[e][o+1];if(!a){let l=this.rows[e+1];a=l&&l[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(t){return Dc(t,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(t){return Vc(t,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(t){return this.comparisonStart===this.comparisonEnd&&t===this.comparisonStart}_isPreviewStart(t){return Ec(t,this.previewStart,this.previewEnd)}_isPreviewEnd(t){return Dc(t,this.previewStart,this.previewEnd)}_isInPreview(t){return Vc(t,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(t){if(!this.isRange)return null;if(this.startValue===t&&this.endValue===t)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===t)return this._startDateLabelId;if(this.endValue===t)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(t===this.comparisonStart&&t===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(t===this.comparisonStart)return this._comparisonStartDateLabelId;if(t===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=t=>{if(this._skipNextFocus&&t.type==="focus"){this._skipNextFocus=!1;return}if(t.target&&this.isRange){let e=this._getCellFromElement(t.target);e&&this._ngZone.run(()=>this.previewChange.emit({value:e.enabled?e:null,event:t}))}};_touchmoveHandler=t=>{if(!this.isRange)return;let e=fn(t),o=e?this._getCellFromElement(e):null;e!==t.target&&(this._didDragSinceMouseDown=!0),Tc(t.target)&&t.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:o?.enabled?o:null,event:t}))};_leaveHandler=t=>{this.previewEnd!==null&&this.isRange&&(t.type!=="blur"&&(this._didDragSinceMouseDown=!0),t.target&&this._getCellFromElement(t.target)&&!(t.relatedTarget&&this._getCellFromElement(t.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:t})))};_mousedownHandler=t=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let e=t.target&&this._getCellFromElement(t.target);!e||!this._isInRange(e.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:e.rawValue,event:t})})};_mouseupHandler=t=>{if(!this.isRange)return;let e=Tc(t.target);if(!e){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:t})});return}e.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let o=this._getCellFromElement(e);this.dragEnded.emit({value:o?.rawValue??null,event:t})})};_touchendHandler=t=>{let e=fn(t);e&&this._mouseupHandler({target:e})};_getCellFromElement(t){let e=Tc(t);if(e){let o=e.getAttribute("data-mat-row"),a=e.getAttribute("data-mat-col");if(o&&a)return this.rows[parseInt(o)]?.[parseInt(a)]||null}return null}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[yt],attrs:F0,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(e,o){e&1&&(u(0,S0,3,6,"tr",0),A(1,D0,4,1,"tr",1,b0,!0),J(3,"span",2),d(4),tt(),J(5,"span",2),d(6),tt(),J(7,"span",2),d(8),tt(),J(9,"span",2),d(10),tt()),e&2&&(m(o._firstRowOffset<o.labelMinRequiredCells?0:-1),n(),z(o.rows),n(2),le("id",o._startDateLabelId),n(),q(" ",o.startDateAccessibleName,`
`),n(),le("id",o._endDateLabelId),n(),q(" ",o.endDateAccessibleName,`
`),n(),le("id",o._comparisonStartDateLabelId),n(),$t(" ",o.comparisonDateAccessibleName," ",o.startDateAccessibleName,`
`),n(),le("id",o._comparisonEndDateLabelId),n(),$t(" ",o.comparisonDateAccessibleName," ",o.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Sc(i){return i?.nodeName==="TD"}function Tc(i){let c;return Sc(i)?c=i:Sc(i.parentNode)?c=i.parentNode:Sc(i.parentNode?.parentNode)&&(c=i.parentNode.parentNode),c?.getAttribute("data-mat-row")!=null?c:null}function Ec(i,c,t){return t!==null&&c!==t&&i<t&&i===c}function Dc(i,c,t){return c!==null&&c!==t&&i>=c&&i===t}function Vc(i,c,t,e){return e&&c!==null&&t!==null&&c!==t&&i>=c&&i<=t}function fn(i){let c=i.changedTouches[0];return document.elementFromPoint(c.clientX,c.clientY)}var qt=class{start;end;_disableStructuralEquivalency;constructor(c,t){this.start=c,this.end=t}},Gi=(()=>{class i{selection;_adapter;_selectionChanged=new ot;selectionChanged=this._selectionChanged;constructor(t,e){this.selection=t,this._adapter=e,this.selection=t}updateSelection(t,e){let o=this.selection;this.selection=t,this._selectionChanged.next({selection:t,source:e,oldValue:o})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(t){return this._adapter.isDateInstance(t)&&this._adapter.isValid(t)}static \u0275fac=function(e){oa()};static \u0275prov=Lt({token:i,factory:i.\u0275fac})}return i})(),H0=(()=>{class i extends Gi{constructor(t){super(null,t)}add(t){super.updateSelection(t,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let t=new i(this._adapter);return t.updateSelection(this.selection,this),t}static \u0275fac=function(e){return new(e||i)(ta(Wt))};static \u0275prov=Lt({token:i,factory:i.\u0275fac})}return i})();var xn={provide:Gi,useFactory:()=>f(Gi,{optional:!0,skipSelf:!0})||new H0(f(Wt))};var kn=new K("MAT_DATE_RANGE_SELECTION_STRATEGY");var Mc=7,O0=0,dn=(()=>{class i{_changeDetectorRef=f(et);_dateFormats=f(ze,{optional:!0});_dateAdapter=f(Wt,{optional:!0});_dir=f(zt,{optional:!0});_rangeStrategy=f(kn,{optional:!0});_rerenderSubscription=dt.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(t){let e=this._activeDate,o=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(o,this.minDate,this.maxDate),this._hasSameMonthAndYear(e,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(t){t instanceof qt?this._selected=t:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(t){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(t){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new M;_userSelection=new M;dragStarted=new M;dragEnded=new M;activeDateChange=new M;_matCalendarBody;_monthLabel=h("");_weeks=h([]);_firstWeekOffset=h(0);_rangeStart=h(null);_rangeEnd=h(null);_comparisonRangeStart=h(null);_comparisonRangeEnd=h(null);_previewStart=h(null);_previewEnd=h(null);_isRange=h(!1);_todayDate=h(null);_weekdays=h([]);constructor(){f(Xt).load(Ki),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ot(null)).subscribe(()=>this._init())}ngOnChanges(t){let e=t.comparisonStart||t.comparisonEnd;e&&!e.firstChange&&this._setRanges(this.selected),t.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(t){let e=t.value,o=this._getDateFromDayOfMonth(e),a,l;this._selected instanceof qt?(a=this._getDateInCurrentMonth(this._selected.start),l=this._getDateInCurrentMonth(this._selected.end)):a=l=this._getDateInCurrentMonth(this._selected),(a!==e||l!==e)&&this.selectedChange.emit(o),this._userSelection.emit({value:o,event:t.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(t){let e=t.value,o=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(e),this._dateAdapter.compareDate(o,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(t){let e=this._activeDate,o=this._isRtl();switch(t.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,o?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,o?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=t.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=t.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&t.preventDefault();return;case 27:this._previewEnd()!=null&&!Gt(t)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:t}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:t})),t.preventDefault(),t.stopPropagation());return;default:return}this._dateAdapter.compareDate(e,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),t.preventDefault()}_handleCalendarBodyKeyup(t){(t.keyCode===32||t.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:t}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Mc+this._dateAdapter.getDayOfWeek(t)-this._dateAdapter.getFirstDayOfWeek())%Mc),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(t){this._matCalendarBody._focusActiveCell(t)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:t,value:e}){if(this._rangeStrategy){let o=e?e.rawValue:null,a=this._rangeStrategy.createPreview(o,this.selected,t);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&o){let l=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,o,t);l&&(this._previewStart.set(this._getCellCompareValue(l.start)),this._previewEnd.set(this._getCellCompareValue(l.end)))}}}_dragEnded(t){if(this.activeDrag)if(t.value){let e=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,t.value,t.event);this.dragEnded.emit({value:e??null,event:t.event})}else this.dragEnded.emit({value:null,event:t.event})}_getDateFromDayOfMonth(t){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),t)}_initWeekdays(){let t=this._dateAdapter.getFirstDayOfWeek(),e=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((l,x)=>({long:l,narrow:e[x],id:O0++}));this._weekdays.set(a.slice(t).concat(a.slice(0,t)))}_createWeekCells(){let t=this._dateAdapter.getNumDaysInMonth(this.activeDate),e=this._dateAdapter.getDateNames(),o=[[]];for(let a=0,l=this._firstWeekOffset();a<t;a++,l++){l==Mc&&(o.push([]),l=0);let x=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),v=this._shouldEnableDate(x),$=this._dateAdapter.format(x,this._dateFormats.display.dateA11yLabel),Y=this.dateClass?this.dateClass(x,"month"):void 0;o[o.length-1].push(new Mi(a+1,e[a],$,v,Y,this._getCellCompareValue(x),x))}this._weeks.set(o)}_shouldEnableDate(t){return!!t&&(!this.minDate||this._dateAdapter.compareDate(t,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(t,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(t))}_getDateInCurrentMonth(t){return t&&this._hasSameMonthAndYear(t,this.activeDate)?this._dateAdapter.getDate(t):null}_hasSameMonthAndYear(t,e){return!!(t&&e&&this._dateAdapter.getMonth(t)==this._dateAdapter.getMonth(e)&&this._dateAdapter.getYear(t)==this._dateAdapter.getYear(e))}_getCellCompareValue(t){if(t){let e=this._dateAdapter.getYear(t),o=this._dateAdapter.getMonth(t),a=this._dateAdapter.getDate(t);return new Date(e,o,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(t){t instanceof qt?(this._rangeStart.set(this._getCellCompareValue(t.start)),this._rangeEnd.set(this._getCellCompareValue(t.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(t)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(t){return!this.dateFilter||this.dateFilter(t)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-month-view"]],viewQuery:function(e,o){if(e&1&&ct(ri,5),e&2){let a;G(a=w())&&(o._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[yt],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(e,o){e&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),A(3,V0,5,2,"th",2,mn),r(),s(5,"tr",3),L(6,"th",4),r()(),s(7,"tbody",5),k("selectedValueChange",function(l){return o._dateSelected(l)})("activeDateChange",function(l){return o._updateActiveDate(l)})("previewChange",function(l){return o._previewChanged(l)})("dragStarted",function(l){return o.dragStarted.emit(l)})("dragEnded",function(l){return o._dragEnded(l)})("keyup",function(l){return o._handleCalendarBodyKeyup(l)})("keydown",function(l){return o._handleCalendarBodyKeydown(l)}),r()()),e&2&&(n(3),z(o._weekdays()),n(4),y("label",o._monthLabel())("rows",o._weeks())("todayValue",o._todayDate())("startValue",o._rangeStart())("endValue",o._rangeEnd())("comparisonStart",o._comparisonRangeStart())("comparisonEnd",o._comparisonRangeEnd())("previewStart",o._previewStart())("previewEnd",o._previewEnd())("isRange",o._isRange())("labelMinRequiredCells",3)("activeCell",o._dateAdapter.getDate(o.activeDate)-1)("startDateAccessibleName",o.startDateAccessibleName)("endDateAccessibleName",o.endDateAccessibleName))},dependencies:[ri],encapsulation:2,changeDetection:0})}return i})(),jt=24,Gc=4,yn=(()=>{class i{_changeDetectorRef=f(et);_dateAdapter=f(Wt,{optional:!0});_dir=f(zt,{optional:!0});_rerenderSubscription=dt.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(t){let e=this._activeDate,o=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(o,this.minDate,this.maxDate),vn(this._dateAdapter,e,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(t){t instanceof qt?this._selected=t:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t)),this._setSelectedYear(t)}_selected=null;get minDate(){return this._minDate}set minDate(t){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(t){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_maxDate=null;dateFilter;dateClass;selectedChange=new M;yearSelected=new M;activeDateChange=new M;_matCalendarBody;_years=h([]);_todayYear=h(0);_selectedYear=h(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ot(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let e=this._dateAdapter.getYear(this._activeDate)-Vi(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),o=[];for(let a=0,l=[];a<jt;a++)l.push(e+a),l.length==Gc&&(o.push(l.map(x=>this._createCellForYear(x))),l=[]);this._years.set(o),this._changeDetectorRef.markForCheck()}_yearSelected(t){let e=t.value,o=this._dateAdapter.createDate(e,0,1),a=this._getDateFromYear(e);this.yearSelected.emit(o),this.selectedChange.emit(a)}_updateActiveDate(t){let e=t.value,o=this._activeDate;this.activeDate=this._getDateFromYear(e),this._dateAdapter.compareDate(o,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(t){let e=this._activeDate,o=this._isRtl();switch(t.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,o?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,o?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Gc);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Gc);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Vi(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,jt-Vi(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t.altKey?-jt*10:-jt);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t.altKey?jt*10:jt);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(e,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),t.preventDefault()}_handleCalendarBodyKeyup(t){(t.keyCode===32||t.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:t}),this._selectionKeyPressed=!1)}_getActiveCell(){return Vi(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(t){let e=this._dateAdapter.getMonth(this.activeDate),o=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(t,e,1));return this._dateAdapter.createDate(t,e,Math.min(this._dateAdapter.getDate(this.activeDate),o))}_createCellForYear(t){let e=this._dateAdapter.createDate(t,0,1),o=this._dateAdapter.getYearName(e),a=this.dateClass?this.dateClass(e,"multi-year"):void 0;return new Mi(t,o,o,this._shouldEnableYear(t),a)}_shouldEnableYear(t){if(t==null||this.maxDate&&t>this._dateAdapter.getYear(this.maxDate)||this.minDate&&t<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let e=this._dateAdapter.createDate(t,0,1);for(let o=e;this._dateAdapter.getYear(o)==t;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(t){if(this._selectedYear.set(null),t instanceof qt){let e=t.start||t.end;e&&this._selectedYear.set(this._dateAdapter.getYear(e))}else t&&this._selectedYear.set(this._dateAdapter.getYear(t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(e,o){if(e&1&&ct(ri,5),e&2){let a;G(a=w())&&(o._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(e,o){e&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),L(3,"th",2),r()(),s(4,"tbody",3),k("selectedValueChange",function(l){return o._yearSelected(l)})("activeDateChange",function(l){return o._updateActiveDate(l)})("keyup",function(l){return o._handleCalendarBodyKeyup(l)})("keydown",function(l){return o._handleCalendarBodyKeydown(l)}),r()()),e&2&&(n(4),y("rows",o._years())("todayValue",o._todayYear())("startValue",o._selectedYear())("endValue",o._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",o._getActiveCell()))},dependencies:[ri],encapsulation:2,changeDetection:0})}return i})();function vn(i,c,t,e,o){let a=i.getYear(c),l=i.getYear(t),x=Cn(i,e,o);return Math.floor((a-x)/jt)===Math.floor((l-x)/jt)}function Vi(i,c,t,e){let o=i.getYear(c);return $0(o-Cn(i,t,e),jt)}function Cn(i,c,t){let e=0;return t?e=i.getYear(t)-jt+1:c&&(e=i.getYear(c)),e}function $0(i,c){return(i%c+c)%c}var _n=(()=>{class i{_changeDetectorRef=f(et);_dateFormats=f(ze,{optional:!0});_dateAdapter=f(Wt,{optional:!0});_dir=f(zt,{optional:!0});_rerenderSubscription=dt.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(t){let e=this._activeDate,o=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(o,this.minDate,this.maxDate),this._dateAdapter.getYear(e)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(t){t instanceof qt?this._selected=t:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t)),this._setSelectedMonth(t)}_selected=null;get minDate(){return this._minDate}set minDate(t){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(t){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_maxDate=null;dateFilter;dateClass;selectedChange=new M;monthSelected=new M;activeDateChange=new M;_matCalendarBody;_months=h([]);_yearLabel=h("");_todayMonth=h(null);_selectedMonth=h(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Ot(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(t){let e=t.value,o=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1);this.monthSelected.emit(o);let a=this._getDateFromMonth(e);this.selectedChange.emit(a)}_updateActiveDate(t){let e=t.value,o=this._activeDate;this.activeDate=this._getDateFromMonth(e),this._dateAdapter.compareDate(o,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(t){let e=this._activeDate,o=this._isRtl();switch(t.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,o?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,o?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(e,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),t.preventDefault()}_handleCalendarBodyKeyup(t){(t.keyCode===32||t.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:t}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let t=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(e=>e.map(o=>this._createCellForMonth(o,t[o])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(t){return t&&this._dateAdapter.getYear(t)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(t):null}_getDateFromMonth(t){let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1),o=this._dateAdapter.getNumDaysInMonth(e);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,Math.min(this._dateAdapter.getDate(this.activeDate),o))}_createCellForMonth(t,e){let o=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1),a=this._dateAdapter.format(o,this._dateFormats.display.monthYearA11yLabel),l=this.dateClass?this.dateClass(o,"year"):void 0;return new Mi(t,e.toLocaleUpperCase(),a,this._shouldEnableMonth(t),l)}_shouldEnableMonth(t){let e=this._dateAdapter.getYear(this.activeDate);if(t==null||this._isYearAndMonthAfterMaxDate(e,t)||this._isYearAndMonthBeforeMinDate(e,t))return!1;if(!this.dateFilter)return!0;let o=this._dateAdapter.createDate(e,t,1);for(let a=o;this._dateAdapter.getMonth(a)==t;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(t,e){if(this.maxDate){let o=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return t>o||t===o&&e>a}return!1}_isYearAndMonthBeforeMinDate(t,e){if(this.minDate){let o=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return t<o||t===o&&e<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(t){t instanceof qt?this._selectedMonth.set(this._getMonthInCurrentYear(t.start)||this._getMonthInCurrentYear(t.end)):this._selectedMonth.set(this._getMonthInCurrentYear(t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-year-view"]],viewQuery:function(e,o){if(e&1&&ct(ri,5),e&2){let a;G(a=w())&&(o._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(e,o){e&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),L(3,"th",2),r()(),s(4,"tbody",3),k("selectedValueChange",function(l){return o._monthSelected(l)})("activeDateChange",function(l){return o._updateActiveDate(l)})("keyup",function(l){return o._handleCalendarBodyKeyup(l)})("keydown",function(l){return o._handleCalendarBodyKeydown(l)}),r()()),e&2&&(n(4),y("label",o._yearLabel())("rows",o._months())("todayValue",o._todayMonth())("startValue",o._selectedMonth())("endValue",o._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",o._dateAdapter.getMonth(o.activeDate)))},dependencies:[ri],encapsulation:2,changeDetection:0})}return i})(),gn=(()=>{class i{_intl=f(si);calendar=f(wc);_dateAdapter=f(Wt,{optional:!0});_dateFormats=f(ze,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){f(Xt).load(Ki);let t=f(et);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),t.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-jt))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:jt))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let t=this.calendar,e=this._intl,o=this._dateAdapter;t.currentView==="month"?(this._periodButtonText=o.format(t.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=o.format(t.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=e.switchToMultiYearViewLabel,this._prevButtonLabel=e.prevMonthLabel,this._nextButtonLabel=e.nextMonthLabel):t.currentView==="year"?(this._periodButtonText=o.getYearName(t.activeDate),this._periodButtonDescription=o.getYearName(t.activeDate),this._periodButtonLabel=e.switchToMonthViewLabel,this._prevButtonLabel=e.prevYearLabel,this._nextButtonLabel=e.nextYearLabel):(this._periodButtonText=e.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=e.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=e.switchToMonthViewLabel,this._prevButtonLabel=e.prevMultiYearLabel,this._nextButtonLabel=e.nextMultiYearLabel)}_isSameView(t,e){return this.calendar.currentView=="month"?this._dateAdapter.getYear(t)==this._dateAdapter.getYear(e)&&this._dateAdapter.getMonth(t)==this._dateAdapter.getMonth(e):this.calendar.currentView=="year"?this._dateAdapter.getYear(t)==this._dateAdapter.getYear(e):vn(this._dateAdapter,t,e,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let e=this._dateAdapter.getYear(this.calendar.activeDate)-Vi(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),o=e+jt-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(e,0,1)),l=this._dateAdapter.getYearName(this._dateAdapter.createDate(o,0,1));return[a,l]}_periodButtonLabelId=f(wt).getId("mat-calendar-period-label-");static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:M0,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(e,o){e&1&&(H(),s(0,"div",0)(1,"div",1)(2,"span",2),d(3),r(),s(4,"button",3),k("click",function(){return o.currentPeriodClicked()}),s(5,"span",4),d(6),r(),C(),s(7,"svg",5),L(8,"polygon",6),r()(),Te(),L(9,"div",7),B(10),s(11,"button",8),k("click",function(){return o.previousClicked()}),C(),s(12,"svg",9),L(13,"path",10),r()(),Te(),s(14,"button",11),k("click",function(){return o.nextClicked()}),C(),s(15,"svg",9),L(16,"path",12),r()()()()),e&2&&(n(2),y("id",o._periodButtonLabelId),n(),F(o.periodButtonDescription),n(),_("aria-label",o.periodButtonLabel)("aria-describedby",o._periodButtonLabelId),n(2),F(o.periodButtonText),n(),j("mat-calendar-invert",o.calendar.currentView!=="month"),n(4),y("disabled",!o.previousEnabled())("matTooltip",o.prevButtonLabel),_("aria-label",o.prevButtonLabel),n(3),y("disabled",!o.nextEnabled())("matTooltip",o.nextButtonLabel),_("aria-label",o.nextButtonLabel))},dependencies:[_t,se,ie],encapsulation:2,changeDetection:0})}return i})(),wc=(()=>{class i{_dateAdapter=f(Wt,{optional:!0});_dateFormats=f(ze,{optional:!0});_changeDetectorRef=f(et);_elementRef=f(X);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(t){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_startAt=null;startView="month";get selected(){return this._selected}set selected(t){t instanceof qt?this._selected=t:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_selected=null;get minDate(){return this._minDate}set minDate(t){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(t){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new M;yearSelected=new M;monthSelected=new M;viewChanged=new M(!0);_userSelection=new M;_userDragDrop=new M;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(t){this._clampedActiveDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(t){let e=this._currentView!==t?t:null;this._currentView=t,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),e&&(this.stateChanges.next(),this.viewChanged.emit(e))}_currentView;_activeDrag=null;stateChanges=new ot;constructor(){this._intlChanges=f(si).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new $o(this.headerComponent||gn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(t){let e=t.minDate&&!this._dateAdapter.sameDate(t.minDate.previousValue,t.minDate.currentValue)?t.minDate:void 0,o=t.maxDate&&!this._dateAdapter.sameDate(t.maxDate.previousValue,t.maxDate.currentValue)?t.maxDate:void 0,a=e||o||t.dateFilter;if(a&&!a.firstChange){let l=this._getCurrentViewComponent();l&&(this._elementRef.nativeElement.contains(Ro())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),l._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(t){let e=t.value;(this.selected instanceof qt||e&&!this._dateAdapter.sameDate(e,this.selected))&&this.selectedChange.emit(e),this._userSelection.emit(t)}_yearSelectedInMultiYearView(t){this.yearSelected.emit(t)}_monthSelectedInYearView(t){this.monthSelected.emit(t)}_goToDateInView(t,e){this.activeDate=t,this.currentView=e}_dragStarted(t){this._activeDrag=t}_dragEnded(t){this._activeDrag&&(t.value&&this._userDragDrop.emit(t),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-calendar"]],viewQuery:function(e,o){if(e&1&&ct(dn,5)(_n,5)(yn,5),e&2){let a;G(a=w())&&(o.monthView=a.first),G(a=w())&&(o.yearView=a.first),G(a=w())&&(o.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[U([xn]),yt],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(e,o){if(e&1&&(nt(0,G0,0,0,"ng-template",0),s(1,"div",1),u(2,w0,1,11,"mat-month-view",2)(3,I0,1,6,"mat-year-view",3)(4,j0,1,6,"mat-multi-year-view",3),r()),e&2){let a;y("cdkPortalOutlet",o._calendarHeaderPortal),n(2),m((a=o.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[Re,Zi,dn,_n,yn],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),U0=new K("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=f(Dt);return()=>to(i)}}),hn=(()=>{class i{_elementRef=f(X);_animationsDisabled=Mt();_changeDetectorRef=f(et);_globalModel=f(Gi);_dateAdapter=f(Wt);_ngZone=f(At);_rangeSelectionStrategy=f(kn,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new ot;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(f(Xt).load(Ki),this._closeButtonText=f(si).closeCalendarLabel,!this._animationsDisabled){let t=this._elementRef.nativeElement,e=f(Yt);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[e.listen(t,"animationstart",this._handleAnimationEvent),e.listen(t,"animationend",this._handleAnimationEvent),e.listen(t,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(t=>t()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(t){let e=this._model.selection,o=t.value,a=e instanceof qt;if(a&&this._rangeSelectionStrategy){let l=this._rangeSelectionStrategy.selectionFinished(o,e,t.event);this._model.updateSelection(l,this)}else o&&(a||!this._dateAdapter.sameDate(o,e))&&this._model.add(o);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(t){this._model.updateSelection(t.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=t=>{let e=this._elementRef.nativeElement;t.target!==e||!t.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=t.type==="animationstart",e.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(t,e){this._model=t?this._globalModel.clone():this._globalModel,this._actionsPortal=t,e&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(e,o){if(e&1&&ct(wc,5),e&2){let a;G(a=w())&&(o._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(e,o){e&2&&(O(o.color?"mat-"+o.color:""),j("mat-datepicker-content-touch",o.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!o._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(e,o){e&1&&(s(0,"div",0)(1,"mat-calendar",1),k("yearSelected",function(l){return o.datepicker._selectYear(l)})("monthSelected",function(l){return o.datepicker._selectMonth(l)})("viewChanged",function(l){return o.datepicker._viewChanged(l)})("_userSelection",function(l){return o._handleUserSelection(l)})("_userDragDrop",function(l){return o._handleUserDragDrop(l)}),r(),nt(2,B0,0,0,"ng-template",2),s(3,"button",3),k("focus",function(){return o._closeButtonFocused=!0})("blur",function(){return o._closeButtonFocused=!1})("click",function(){return o.datepicker.close()}),d(4),r()()),e&2&&(j("mat-datepicker-content-container-with-custom-header",o.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",o._actionsPortal),_("aria-modal",!0)("aria-labelledby",o._dialogLabelId??void 0),n(),O(o.datepicker.panelClass),y("id",o.datepicker.id)("startAt",o.datepicker.startAt)("startView",o.datepicker.startView)("minDate",o.datepicker._getMinDate())("maxDate",o.datepicker._getMaxDate())("dateFilter",o.datepicker._getDateFilter())("headerComponent",o.datepicker.calendarHeaderComponent)("selected",o._getSelected())("dateClass",o.datepicker.dateClass)("comparisonStart",o.comparisonStart)("comparisonEnd",o.comparisonEnd)("startDateAccessibleName",o.startDateAccessibleName)("endDateAccessibleName",o.endDateAccessibleName),n(),y("cdkPortalOutlet",o._actionsPortal),n(),j("cdk-visually-hidden",!o._closeButtonFocused),y("color",o.color||"primary"),n(),F(o._closeButtonText))},dependencies:[ma,wc,Re,_t],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return i})(),un=(()=>{class i{_injector=f(Dt);_viewContainerRef=f(Jt);_dateAdapter=f(Wt,{optional:!0});_dir=f(zt,{optional:!0});_model=f(Gi);_animationsDisabled=Mt();_scrollStrategy=f(U0);_inputStateChanges=dt.EMPTY;_document=f(Ni);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(t){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(t){this._color=t}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(t){t!==this._disabled&&(this._disabled=t,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new M;monthSelected=new M;viewChanged=new M(!0);dateClass;openedStream=new M;closedStream=new M;get panelClass(){return this._panelClass}set panelClass(t){this._panelClass=ha(t)}_panelClass;get opened(){return this._opened}set opened(t){t?this.open():this.close()}_opened=!1;id=f(wt).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new ot;_changeDetectorRef=f(et);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(t){let e=t.xPosition||t.yPosition;if(e&&!e.firstChange&&this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;o instanceof za&&(this._setConnectedPositions(o),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(t){this._model.add(t)}_selectYear(t){this.yearSelected.emit(t)}_selectMonth(t){this.monthSelected.emit(t)}_viewChanged(t){this.viewChanged.emit(t)}registerInput(t){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=t,this._inputStateChanges=t.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(t){this._actionsPortal,this._actionsPortal=t,this._componentRef?.instance._assignActions(t,!0)}removeActions(t){t===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Ro(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let t=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",e=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:o,location:a}=this._componentRef;o._animationDone.pipe(Bi(1)).subscribe(()=>{let l=this._document.activeElement;t&&(!l||l===this._document.activeElement||a.nativeElement.contains(l))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),o._startExitAnimation()}t?setTimeout(e):e()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(t){t.datepicker=this,t.color=this.color,t._dialogLabelId=this.datepickerInput.getOverlayLabelId(),t._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let t=this.touchUi,e=new $o(hn,this._viewContainerRef),o=this._overlayRef=qa(this._injector,new Na({positionStrategy:t?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[t?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:t?Ba(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${t?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(o).subscribe(a=>{a&&a.preventDefault(),this.close()}),o.keydownEvents().subscribe(a=>{let l=a.keyCode;(l===38||l===40||l===37||l===39||l===33||l===34)&&a.preventDefault()}),this._componentRef=o.attach(e),this._forwardContentValues(this._componentRef.instance),t||Ft(()=>{o.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Pa(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let t=Aa(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(t)}_setConnectedPositions(t){let e=this.xPosition==="end"?"end":"start",o=e==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",l=a==="top"?"bottom":"top";return t.withPositions([{originX:e,originY:l,overlayX:e,overlayY:a},{originX:e,originY:a,overlayX:e,overlayY:l},{originX:o,originY:l,overlayX:o,overlayY:a},{originX:o,originY:a,overlayX:o,overlayY:l}])}_getCloseStream(t){let e=["ctrlKey","shiftKey","metaKey"];return Nt(t.backdropClick(),t.detachments(),t.keydownEvents().pipe(be(o=>o.keyCode===27&&!Gt(o)||this.datepickerInput&&Gt(o,"altKey")&&o.keyCode===38&&e.every(a=>!Gt(o,a)))))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",S],disabled:[2,"disabled","disabled",S],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",S],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",S]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[yt]})}return i})(),Ln=(()=>{class i extends un{static \u0275fac=(()=>{let t;return function(o){return(t||(t=W(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[U([xn,{provide:un,useExisting:i}]),R],decls:0,vars:0,template:function(e,o){},encapsulation:2,changeDetection:0})}return i})(),ni=class{target;targetElement;value=null;constructor(c,t){this.target=c,this.targetElement=t,this.value=this.target.value}},W0=(()=>{class i{_elementRef=f(X);_dateAdapter=f(Wt,{optional:!0});_dateFormats=f(ze,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(t){this._assignValueProgrammatically(t,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(t){let e=t,o=this._elementRef.nativeElement;this._disabled!==e&&(this._disabled=e,this.stateChanges.next(void 0)),e&&this._isInitialized&&o.blur&&o.blur()}_disabled;dateChange=new M;dateInput=new M;stateChanges=new ot;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=dt.EMPTY;_localeSubscription=dt.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=t=>{let e=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t.value));return!e||this._matchesFilter(e)?null:{matDatepickerFilter:!0}};_minValidator=t=>{let e=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t.value)),o=this._getMinDate();return!o||!e||this._dateAdapter.compareDate(o,e)<=0?null:{matDatepickerMin:{min:o,actual:e}}};_maxValidator=t=>{let e=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t.value)),o=this._getMaxDate();return!o||!e||this._dateAdapter.compareDate(o,e)>=0?null:{matDatepickerMax:{max:o,actual:e}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(t){this._model=t,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(e=>{if(this._shouldHandleChangeEvent(e)){let o=this._getValueFromModel(e.selection);this._lastValueValid=this._isValidValue(o),this._cvaOnChange(o),this._onTouched(),this._formatValue(o),this.dateInput.emit(new ni(this,this._elementRef.nativeElement)),this.dateChange.emit(new ni(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(t){X0(t,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(t){this._validatorOnChange=t}validate(t){return this._validator?this._validator(t):null}writeValue(t){this._assignValueProgrammatically(t,t!==this.value)}registerOnChange(t){this._cvaOnChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_onKeydown(t){let e=["ctrlKey","shiftKey","metaKey"];Gt(t,"altKey")&&t.keyCode===40&&e.every(a=>!Gt(t,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),t.preventDefault())}_onInput(t){let e=t.target.value,o=this._lastValueValid,a=this._dateAdapter.parse(e,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let l=!this._dateAdapter.sameDate(a,this.value);!a||l?this._cvaOnChange(a):(e&&!this.value&&this._cvaOnChange(a),o!==this._lastValueValid&&this._validatorOnChange()),l&&(this._assignValue(a),this.dateInput.emit(new ni(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new ni(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(t){this._elementRef.nativeElement.value=t!=null?this._dateAdapter.format(t,this._dateFormats.display.dateInput):""}_assignValue(t){this._model?(this._assignValueToModel(t),this._pendingValue=null):this._pendingValue=t}_isValidValue(t){return!t||this._dateAdapter.isValid(t)}_parentDisabled(){return!1}_assignValueProgrammatically(t,e){t=this._dateAdapter.deserialize(t),this._lastValueValid=this._isValidValue(t),t=this._dateAdapter.getValidDateOrNull(t),this._assignValue(t),e&&this._formatValue(t)}_matchesFilter(t){let e=this._getDateFilter();return!e||e(t)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",S]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[yt]})}return i})();function X0(i,c){let t=Object.keys(i);for(let e of t){let{previousValue:o,currentValue:a}=i[e];if(c.isDateInstance(o)&&c.isDateInstance(a)){if(!c.sameDate(o,a))return!0}else return!0}return!1}var Z0={provide:Ze,useExisting:Se(()=>pi),multi:!0},K0={provide:oo,useExisting:Se(()=>pi),multi:!0},pi=(()=>{class i extends W0{_formField=f(ao,{optional:!0});_closedSubscription=dt.EMPTY;_openedSubscription=dt.EMPTY;set matDatepicker(t){t&&(this._datepicker=t,this._ariaOwns.set(t.opened?t.id:null),this._closedSubscription=t.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=t.openedStream.subscribe(()=>{this._ariaOwns.set(t.id)}),this._registerModel(t.registerInput(this)))}_datepicker;_ariaOwns=h(null);get min(){return this._min}set min(t){let e=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t));this._dateAdapter.sameDate(e,this._min)||(this._min=e,this._validatorOnChange())}_min=null;get max(){return this._max}set max(t){let e=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(t));this._dateAdapter.sameDate(e,this._max)||(this._max=e,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(t){let e=this._matchesFilter(this.value);this._dateFilter=t,this._matchesFilter(this.value)!==e&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=lt.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(t){return t}_assignValueToModel(t){this._model&&this._model.updateSelection(t,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(t){return t.source!==this}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(e,o){e&1&&k("input",function(l){return o._onInput(l)})("change",function(){return o._onChange()})("blur",function(){return o._onBlur()})("keydown",function(l){return o._onKeydown(l)}),e&2&&(le("disabled",o.disabled),_("aria-haspopup",o._datepicker?"dialog":null)("aria-owns",o._ariaOwns())("min",o.min?o._dateAdapter.toIso8601(o.min):null)("max",o.max?o._dateAdapter.toIso8601(o.max):null)("data-mat-calendar",o._datepicker?o._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[U([Z0,K0,{provide:ol,useExisting:i}]),R]})}return i})(),Q0=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),Bc=(()=>{class i{_intl=f(si);_changeDetectorRef=f(et);_stateChanges=dt.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(t){this._disabled=t}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let t=f(new Ut("tabindex"),{optional:!0}),e=Number(t);this.tabIndex=e||e===0?e:null}ngOnChanges(t){t.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(t){this.datepicker&&!this.disabled&&(this.datepicker.open(),t.stopPropagation())}_watchStateChanges(){let t=this.datepicker?this.datepicker.stateChanges:ae(),e=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:ae(),o=this.datepicker?Nt(this.datepicker.openedStream,this.datepicker.closedStream):ae();this._stateChanges.unsubscribe(),this._stateChanges=Nt(this._intl.changes,t,e,o).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(e,o,a){if(e&1&&Vt(a,Q0,5),e&2){let l;G(l=w())&&(o._customIcon=l.first)}},viewQuery:function(e,o){if(e&1&&ct(N0,5),e&2){let a;G(a=w())&&(o._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(e,o){e&1&&k("click",function(l){return o._open(l)}),e&2&&(_("tabindex",null)("data-mat-calendar",o.datepicker?o.datepicker.id:null),j("mat-datepicker-toggle-active",o.datepicker&&o.datepicker.opened)("mat-accent",o.datepicker&&o.datepicker.color==="accent")("mat-warn",o.datepicker&&o.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",S],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[yt],ngContentSelectors:z0,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(e,o){e&1&&(H(A0),s(0,"button",1,0),u(2,P0,2,0,":svg:svg",2),B(3),r()),e&2&&(y("tabIndex",o.disabled?-1:o.tabIndex)("disabled",o.disabled)("disableRipple",o.disableRipple),_("aria-haspopup",o.datepicker?"dialog":null)("aria-label",o.ariaLabel||o._intl.openCalendarLabel)("aria-expanded",o.datepicker?o.datepicker.opened:null),n(2),m(o._customIcon?-1:2))},dependencies:[se],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Fn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=xt({type:i});static \u0275inj=ut({providers:[si],imports:[it,eo,ka,ja,hn,Bc,gn,bt,Ji]})}return i})();function bn(i){let c=t=>t.toString().padStart(2,"0");return`${i.getFullYear()}-${c(i.getMonth()+1)}-${c(i.getDate())}`}function Nc(){let i=new Date;return new Date(i.getFullYear(),i.getMonth(),i.getDate())}function Co(i){if(!i)return null;let[c,t,e]=i.split("-").map(Number);return!c||!t||!e?null:new Date(c,t-1,e)}function fi(i){return new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime()}function J0(i){return i?i instanceof Date?i:typeof i=="string"?Co(i):i.value??null:null}var go=class i{dateInput=f(pi);appDateRange=N(null);rangeRole=N("start");ngOnInit(){this.dateInput.dateFilter=t=>this.inScope(t);let c=this.dateInput._datepicker;c&&(c.dateClass=(t,e)=>this.cellClass(t,e))}bounds(){let c=this.dateInput.value,t=J0(this.appDateRange());return this.rangeRole()==="end"?{start:t,end:c}:{start:c,end:t}}inScope(c){if(!c)return!0;let{start:t,end:e}=this.bounds(),o=fi(c);return this.rangeRole()==="end"?!t||o>=fi(t):!e||o<=fi(e)}cellClass(c,t){if(t!=="month")return"";let{start:e,end:o}=this.bounds();if(!e||!o)return"";let a=fi(c),l=fi(e),x=fi(o);return l>x?"":a===l||a===x?"mv-range-edge":a>l&&a<x?"mv-range-in":""}static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["input","matDatepicker","","appDateRange",""]],inputs:{appDateRange:[1,"appDateRange"],rangeRole:[1,"rangeRole"]}})};var tf=["*"],Ac=()=>[],ef=(i,c)=>c.key,Tn=(i,c)=>c.value;function of(i,c){if(i&1){let t=P();s(0,"mat-checkbox",4),k("change",function(o){D(t);let a=p().$implicit,l=p();return V(l.update(a,o.checked))}),d(1),r()}if(i&2){let t=p().$implicit;y("checked",!!t.value)("disabled",t.disabled??!1),n(),q(" ",t.label," ")}}function cf(i,c){if(i&1&&(s(0,"span",5),d(1),r()),i&2){let t=p(2).$implicit;n(),F(t.label)}}function af(i,c){if(i&1&&(s(0,"mat-label"),d(1),r()),i&2){let t=p(2).$implicit;n(),F(t.label)}}function lf(i,c){if(i&1&&(s(0,"mat-option",14),d(1),r()),i&2){let t=p(3).$implicit;y("value",null),n(),F(t.emptyLabel??"\u0412\u0441\u0456")}}function nf(i,c){if(i&1&&(s(0,"mat-option",14),d(1),r()),i&2){let t=c.$implicit;y("value",t.value),n(),F(t.label)}}function rf(i,c){if(i&1){let t=P();s(0,"mat-select",13),k("selectionChange",function(o){D(t);let a=p(2).$implicit,l=p();return V(l.update(a,o.value))}),u(1,lf,2,2,"mat-option",14),A(2,nf,2,2,"mat-option",14,Tn),r()}if(i&2){let t=p(2).$implicit;y("value",t.value)("disabled",t.disabled??!1),_("aria-label",t.label),n(),m(t.emptyLabel!==null?1:-1),n(),z(t.options??Ri(4,Ac))}}function sf(i,c){if(i&1&&(s(0,"mat-option",14),d(1),r()),i&2){let t=c.$implicit;y("value",t.value),n(),F(t.label)}}function pf(i,c){if(i&1){let t=P();s(0,"mat-select",15),k("selectionChange",function(o){D(t);let a=p(2).$implicit,l=p();return V(l.update(a,o.value))}),A(1,sf,2,2,"mat-option",14,Tn),r()}if(i&2){let t=p(2).$implicit;y("value",t.value??Ri(4,Ac))("disabled",t.disabled??!1)("placeholder",t.emptyLabel??"\u043F\u043E \u0432\u0441\u0456\u043C"),_("aria-label",t.label),n(),z(t.options??Ri(5,Ac))}}function ff(i,c){if(i&1){let t=P();s(0,"input",16),k("dateChange",function(o){D(t);let a=p(2).$implicit,l=p();return V(l.updateDate(a,o.value))}),r()}if(i&2){p();let t=st(5),e=p().$implicit,o=p();y("matDatepicker",t)("appDateRange",o.rangeBound(e))("rangeRole",o.rangeRole(e))("max",e.noFuture?o.today:null)("value",o.dateValue(e))("disabled",e.disabled??!1),_("aria-label",e.label)}}function df(i,c){if(i&1){let t=P();s(0,"input",17),k("input",function(o){D(t);let a=p(2).$implicit,l=p();return V(l.updateNumber(a,o.target.value))}),r()}if(i&2){let t=p(2).$implicit;y("value",t.value??"")("disabled",t.disabled??!1),_("aria-label",t.label)}}function yf(i,c){if(i&1){let t=P();s(0,"input",18),k("input",function(o){D(t);let a=p(2).$implicit,l=p();return V(l.update(a,o.target.value))}),r()}if(i&2){let t=p(2).$implicit;y("value",t.value??"")("disabled",t.disabled??!1),_("aria-label",t.label)}}function _f(i,c){if(i&1&&L(0,"mat-datepicker-toggle",12),i&2){p();let t=st(5);y("for",t)}}function uf(i,c){if(i&1&&(s(0,"div",3),u(1,cf,2,1,"span",5),s(2,"mat-form-field",6),u(3,af,2,1,"mat-label"),L(4,"mat-datepicker",null,0),u(6,rf,4,5,"mat-select",7)(7,pf,3,6,"mat-select",8)(8,ff,1,7,"input",9)(9,df,1,3,"input",10)(10,yf,1,3,"input",11),u(11,_f,1,1,"mat-datepicker-toggle",12),r()()),i&2){let t,e=p().$implicit,o=p();n(),m(o.variant()==="panel"?1:-1),n(),O(e.widthClass??"field-medium"),kt("width",e.width),n(),m(o.variant()==="row"?3:-1),n(3),m((t=e.kind??"select")==="select"?6:t==="multiselect"?7:t==="date"?8:t==="number"?9:10),n(5),m(e.kind==="date"?11:-1)}}function mf(i,c){if(i&1&&u(0,of,2,3,"mat-checkbox",2)(1,uf,12,8,"div",3),i&2){let t=c.$implicit;m(t.kind==="checkbox"?0:1)}}function xf(i,c){if(i&1){let t=P();s(0,"button",19),k("click",function(){D(t);let o=p();return V(o.reset.emit())}),s(1,"mat-icon"),d(2,"close"),r(),d(3," \u0421\u043A\u0438\u043D\u0443\u0442\u0438 "),r()}}function kf(i){return i==="from"?{key:"to",role:"start"}:i==="to"?{key:"from",role:"end"}:/From$/.test(i)?{key:i.replace(/From$/,"To"),role:"start"}:/To$/.test(i)?{key:i.replace(/To$/,"From"),role:"end"}:null}var ho=class i{fields=N([]);variant=N("panel");resettable=N(!0,{transform:S});reset=Be();changed=Be();today=Nc();activeCount=E(()=>this.fields().filter(c=>this.isActive(c)).length);showReset=E(()=>this.resettable()&&this.activeCount()>0);update(c,t){c.set?.(t),this.changed.emit({key:c.key,value:t})}dateRanges=E(()=>{let c=this.fields().filter(o=>(o.kind??"select")==="date"),t=new Map(c.map(o=>[o.key,o])),e=new Map;for(let o of c){let a=kf(o.key),l=o.rangeWith??a?.key,x=l?t.get(l):void 0;if(!x)continue;let v=o.rangeWith?c.indexOf(o)<c.indexOf(x)?"start":"end":a?.role??"start";e.set(o.key,{bound:this.dateValue(x),role:v})}return e});rangeBound(c){return this.dateRanges().get(c.key)?.bound??null}rangeRole(c){return this.dateRanges().get(c.key)?.role??"start"}dateValue(c){return typeof c.value=="string"?Co(c.value):null}updateDate(c,t){this.update(c,t?bn(t):"")}updateNumber(c,t){let e=t.trim();this.update(c,e===""||Number.isNaN(Number(e))?null:Number(e))}isActive(c){if(Array.isArray(c.value))return c.value.length>0;let t="emptyValue"in c?c.emptyValue:null;return c.value===t?!1:c.value!==null&&c.value!==void 0&&c.value!==""&&c.value!==!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-filter-panel"]],hostAttrs:[1,"app-filter-panel"],inputs:{fields:[1,"fields"],variant:[1,"variant"],resettable:[1,"resettable"]},outputs:{reset:"reset",changed:"changed"},ngContentSelectors:tf,decls:5,vars:3,consts:[["picker",""],["mat-button","","type","button",1,"clear-filters"],[3,"checked","disabled"],[1,"filter-group"],[3,"change","checked","disabled"],[1,"filter-label"],["appearance","outline","subscriptSizing","dynamic"],[3,"value","disabled"],["multiple","",3,"value","disabled","placeholder"],["matInput","","appDateRange","",3,"matDatepicker","appDateRange","rangeRole","max","value","disabled"],["matInput","","type","number",3,"value","disabled"],["matInput","",3,"value","disabled"],["matIconSuffix","",3,"for"],[3,"selectionChange","value","disabled"],[3,"value"],["multiple","",3,"selectionChange","value","disabled","placeholder"],["matInput","","appDateRange","",3,"dateChange","matDatepicker","appDateRange","rangeRole","max","value","disabled"],["matInput","","type","number",3,"input","value","disabled"],["matInput","",3,"input","value","disabled"],["mat-button","","type","button",1,"clear-filters",3,"click"]],template:function(t,e){t&1&&(H(),s(0,"div"),A(1,mf,2,1,null,null,ef),B(3),u(4,xf,4,0,"button",1),r()),t&2&&(O(e.variant()==="panel"?"filter-panel":"toolbar-row filters-row"),n(),z(e.fields()),n(3),m(e.showReset()?4:-1))},dependencies:[it,_t,Tt,St,Pt,ce,oe,il,Qe,Ke,li,ai,ye,_o,Fi,Fn,Ln,pi,Bc,go],encapsulation:2,changeDetection:0})};var vf=["*"],Cf=(i,c)=>c.label;function gf(i,c){if(i&1&&(s(0,"mat-icon"),d(1),r()),i&2){let t=p(2).$implicit;n(),F(t.icon)}}function hf(i,c){if(i&1){let t=P();s(0,"button",2),k("click",function(){D(t);let o=p().$implicit;return V(o.run())}),u(1,gf,2,1,"mat-icon"),d(2),r()}if(i&2){let t=p().$implicit,e=p();j("btn-compact",e.compactable(t)),y("disabled",t.disabled??!1)("matTooltip",e.tooltipFor(t)),_("aria-label",t.label),n(),m(t.icon?1:-1),n(),q(" ",t.label," ")}}function Lf(i,c){if(i&1&&(s(0,"mat-icon"),d(1),r()),i&2){let t=p(2).$implicit;n(),F(t.icon)}}function Ff(i,c){if(i&1){let t=P();s(0,"button",3),k("click",function(){D(t);let o=p().$implicit;return V(o.run())}),u(1,Lf,2,1,"mat-icon"),d(2),r()}if(i&2){let t=p().$implicit,e=p();j("danger",t.danger)("btn-compact",e.compactable(t)),y("disabled",t.disabled??!1)("matTooltip",e.tooltipFor(t)),_("aria-label",t.label),n(),m(t.icon?1:-1),n(),q(" ",t.label," ")}}function bf(i,c){if(i&1&&u(0,hf,3,7,"button",0)(1,Ff,3,9,"button",1),i&2){let t=c.$implicit;m(t.primary?0:1)}}var di=class i{responsive=f(xi);actions=N([]);variant=N("inline");visibleActions=E(()=>this.actions().filter(c=>!c.hidden));compact=E(()=>this.responsive.isTablet());repeatedIcons=E(()=>{let c=new Set,t=new Set;for(let e of this.visibleActions())e.icon&&(c.has(e.icon)&&t.add(e.icon),c.add(e.icon));return t});compactable(c){return!!c.icon&&!c.keepLabel&&!this.repeatedIcons().has(c.icon)}tooltipFor(c){return c.tooltip??(this.compact()&&this.compactable(c)?c.label:"")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["app-action-bar"]],hostAttrs:[1,"app-action-bar"],hostVars:8,hostBindings:function(t,e){t&2&&j("actions",e.variant()==="inline")("actions-row",e.variant()==="right")("footer-row",e.variant()==="footer")("toolbar-row",e.variant()==="toolbar")},inputs:{actions:[1,"actions"],variant:[1,"variant"]},ngContentSelectors:vf,decls:3,vars:0,consts:[["mat-flat-button","","type","button",3,"btn-compact","disabled","matTooltip"],["mat-stroked-button","","type","button",3,"danger","btn-compact","disabled","matTooltip"],["mat-flat-button","","type","button",3,"click","disabled","matTooltip"],["mat-stroked-button","","type","button",3,"click","disabled","matTooltip"]],template:function(t,e){t&1&&(H(),A(0,bf,2,1,null,null,Cf),B(2)),t&2&&z(e.visibleActions())},dependencies:[it,_t,Tt,St,me,ie],encapsulation:2,changeDetection:0})};var En={ADMIN_LOGIN_SUCCESS:"\u0412\u0445\u0456\u0434 \u0443 \u0431\u0435\u043A-\u043E\u0444\u0456\u0441",ADMIN_LOGIN_FAILED:"\u041D\u0435\u0432\u0434\u0430\u043B\u0430 \u0441\u043F\u0440\u043E\u0431\u0430 \u0432\u0445\u043E\u0434\u0443",ADMIN_MFA_FAILED:"\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 \u043A\u043E\u0434 2FA",ADMIN_MFA_ENROLLED:"2FA \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0430",ADMIN_ACCOUNT_LOCKED:"\u0410\u043A\u0430\u0443\u043D\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u043E \u0437\u0430 \u043F\u0435\u0440\u0435\u0431\u0456\u0440",ADMIN_PASSWORD_CHANGED:"\u041F\u0430\u0440\u043E\u043B\u044C \u0437\u043C\u0456\u043D\u0435\u043D\u043E",ADMIN_LOGOUT:"\u0412\u0438\u0445\u0456\u0434 \u0456\u0437 \u0431\u0435\u043A-\u043E\u0444\u0456\u0441\u0443",PLAN_CREATED:"\u0422\u0430\u0440\u0438\u0444 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E",PLAN_UPDATED:"\u0422\u0430\u0440\u0438\u0444 \u0437\u043C\u0456\u043D\u0435\u043D\u043E",PLAN_DELETED:"\u0422\u0430\u0440\u0438\u0444 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E",PLAN_RESTORED:"\u0422\u0430\u0440\u0438\u0444 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043E",SUBSCRIPTION_CREATED:"\u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E",SUBSCRIPTION_UPDATED:"\u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0437\u043C\u0456\u043D\u0435\u043D\u043E",SUBSCRIPTION_STATUS_CHANGED:"\u0421\u0442\u0430\u043D \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438 \u0437\u043C\u0456\u043D\u0435\u043D\u043E",SUBSCRIPTION_EXTENDED:"\u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443",SUBSCRIPTION_PLAN_CHANGED:"\u0422\u0430\u0440\u0438\u0444 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438 \u0437\u043C\u0456\u043D\u0435\u043D\u043E",SUBSCRIPTION_CANCELLED:"\u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E",ORGANIZATION_UPDATED:"\u0420\u0435\u043A\u0432\u0456\u0437\u0438\u0442\u0438 \u0437\u043C\u0456\u043D\u0435\u043D\u043E",GRANT_ISSUED:"\u0412\u0438\u0434\u0430\u043D\u043E \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F",GRANT_REVOKED:"\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0432\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u043D\u043E",INVOICE_ISSUED:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u0438\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E",INVOICE_MARKED_PAID:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u043F\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u0438\u043C",PAYMENT_REGISTERED:"\u041F\u043B\u0430\u0442\u0456\u0436 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E"};var Fo={TRIAL:"\u0422\u0440\u0456\u0430\u043B",ACTIVE:"\u0410\u043A\u0442\u0438\u0432\u043D\u0430",PAST_DUE:"\u041F\u0440\u043E\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u043E",SUSPENDED:"\u0417\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0430",CANCELLED:"\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0430",ARCHIVED:"\u0410\u0440\u0445\u0456\u0432"},Dn={TRIALING:"\u0422\u0440\u0456\u0430\u043B",ACTIVE:"\u0410\u043A\u0442\u0438\u0432\u043D\u0430",PAST_DUE:"\u041F\u0440\u043E\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u043E",SUSPENDED:"\u041F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0435\u043D\u043E",CANCELLED:"\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E"},bo={MONTH:"\u041C\u0456\u0441\u044F\u0446\u044C",YEAR:"\u0420\u0456\u043A"},Vn={SUBSCRIPTION:"\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438",GRANT:"\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0433\u0440\u0430\u043D\u0442",NONE:"\u0414\u043E\u0441\u0442\u0443\u043F\u0443 \u043D\u0435\u043C\u0430\u0454 \u2014 \u043D\u0456 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438, \u043D\u0456 \u0433\u0440\u0430\u043D\u0442\u0430"},Mn={PENDING:"\u0412 \u043E\u0431\u0440\u043E\u0431\u0446\u0456",SUCCEEDED:"\u041F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043E",FAILED:"\u041D\u0435 \u043F\u0440\u043E\u0439\u0448\u043E\u0432",REFUNDED:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043E"},Gn={WAYFORPAY:"WayForPay",FONDY:"Fondy",BANK_TRANSFER:"\u0411\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u0430\u0437",MANUAL:"\u0412\u043D\u0435\u0441\u0435\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443"},So={TRIAL_EXTENSION:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u0442\u0440\u0456\u0430\u043B\u0443",FREE_PERIOD:"\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434",GRACE:"\u0412\u0456\u0434\u0442\u0435\u0440\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F",DISCOUNT:"\u0417\u043D\u0438\u0436\u043A\u0430",SPONSORED:"\u0421\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u0432\u0430\u043D\u0438\u0439"};var Tf=["input"],Ef=["formField"],Df=["*"],To=class{source;value;constructor(c,t){this.source=c,this.value=t}},Vf={provide:Ze,useExisting:Se(()=>zc),multi:!0},wn=new K("MatRadioGroup"),Mf=new K("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),zc=(()=>{class i{_changeDetector=f(et);_value=null;_name=f(wt).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new M;_radios;color;get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition=t==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=t,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(t=>t===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){let t=this._selected!==null&&this._selected.value===this._value;this._radios&&!t&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new To(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["mat-radio-group"]],contentQueries:function(e,o,a){if(e&1&&Vt(a,Eo,5),e&2){let l;G(l=w())&&(o._radios=l)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",S],required:[2,"required","required",S],disabledInteractive:[2,"disabledInteractive","disabledInteractive",S]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[U([Vf,{provide:wn,useExisting:i}])]})}return i})(),Eo=(()=>{class i{_elementRef=f(X);_changeDetector=f(et);_focusMonitor=f(qo);_radioDispatcher=f($a);_defaultOptions=f(Mf,{optional:!0});_ngZone=f(At);_renderer=f(Yt);_uniqueId=f(wt).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(t){this._setDisabled(t)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){t!==this._required&&this._changeDetector.markForCheck(),this._required=t}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(t){this._color=t}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new M;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Mt();_injector=f(Dt);constructor(){f(Xt).load(de);let t=f(wn,{optional:!0}),e=f(new Ut("tabindex"),{optional:!0});this.radioGroup=t,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,e&&(this.tabIndex=gt(e,0))}focus(t,e){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((t,e)=>{t!==this.id&&e===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new To(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){let e=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),e&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(t){this._onInputInteraction(t),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_onInputClick=t=>{this.disabled&&this.disabledInteractive&&t.preventDefault()};_updateTabIndex(){let t=this.radioGroup,e;if(!t||!t.selected||this.disabled?e=this.tabIndex:e=t.selected===this?this.tabIndex:-1,e!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",e+""),this._previousTabIndex=e,Ft(()=>{queueMicrotask(()=>{t&&t.selected&&t.selected!==this&&document.activeElement===o&&(t.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-radio-button"]],viewQuery:function(e,o){if(e&1&&ct(Tf,5)(Ef,7,X),e&2){let a;G(a=w())&&(o._inputElement=a.first),G(a=w())&&(o._rippleTrigger=a.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(e,o){e&1&&k("focus",function(){return o._inputElement.nativeElement.focus()}),e&2&&(_("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),j("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",S],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:gt(t)],checked:[2,"checked","checked",S],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",S],required:[2,"required","required",S],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",S]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Df,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(e,o){e&1&&(H(),s(0,"div",2,0)(2,"div",3)(3,"div",4),k("click",function(l){return o._onTouchTargetClick(l)}),r(),s(4,"input",5,1),k("change",function(l){return o._onInputInteraction(l)}),r(),s(6,"div",6),L(7,"div",7)(8,"div",8),r(),s(9,"div",9),L(10,"div",10),r()(),s(11,"label",11),B(12),r()()),e&2&&(y("labelPosition",o.labelPosition),n(2),j("mdc-radio--disabled",o.disabled),n(2),y("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),_("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),n(5),y("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0),n(2),y("for",o.inputId))},dependencies:[Ve,Qi],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),In=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=xt({type:i});static \u0275inj=ut({imports:[Ta,Eo,bt]})}return i})();function wf(i,c){if(i&1&&(s(0,"mat-error"),d(1),r()),i&2){let t=p();n(),q("\u041E\u043F\u0438\u0448\u0456\u0442\u044C \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u2014 \u0449\u043E\u043D\u0430\u0439\u043C\u0435\u043D\u0448\u0435 ",t.minLength," \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432.")}}var we=5,Le=class i{control=N.required();placeholder=N("\u0414\u043E\u043C\u043E\u0432\u043B\u0435\u043D\u0456\u0441\u0442\u044C \u0456\u0437 \u043A\u043B\u0456\u0454\u043D\u0442\u043E\u043C, \u2116 \u043B\u0438\u0441\u0442\u0430, \u0445\u0442\u043E \u043F\u043E\u0433\u043E\u0434\u0438\u0432");minLength=we;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["admin-command-reason"]],inputs:{control:[1,"control"],placeholder:[1,"placeholder"]},decls:7,vars:3,consts:[["appearance","outline"],["matInput","","rows","2",3,"formControl","placeholder"]],template:function(t,e){t&1&&(s(0,"mat-form-field",0)(1,"mat-label"),d(2,"\u041F\u0440\u0438\u0447\u0438\u043D\u0430"),r(),L(3,"textarea",1),s(4,"mat-hint"),d(5,"\u041F\u043E\u0431\u0430\u0447\u0438\u0442\u044C \u0442\u043E\u0439, \u0445\u0442\u043E \u0447\u0438\u0442\u0430\u0442\u0438\u043C\u0435 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u043A\u043B\u0456\u0454\u043D\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0440\u0456\u043A."),r(),u(6,wf,2,1,"mat-error"),r()),t&2&&(n(3),y("formControl",e.control())("placeholder",e.placeholder()),n(3),m(e.control().touched&&e.control().invalid?6:-1))},dependencies:[ee,io,te,ue,Pt,ce,oe,co,el,Qe,Ke],encapsulation:2})};function If(i,c){i&1&&(s(0,"p",5),d(1," \u0414\u043E\u0441\u0442\u0443\u043F \u0446\u0456\u0454\u0457 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0437\u0430\u0440\u0430\u0437 \u0442\u0440\u0438\u043C\u0430\u0454 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0433\u0440\u0430\u043D\u0442. \u0421\u043A\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438 \u0439\u043E\u0433\u043E \u043D\u0435 \u0432\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u0454 \u2014 \u043A\u043B\u0456\u0454\u043D\u0442 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u044C \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438 \u0434\u043E \u043A\u0456\u043D\u0446\u044F \u0433\u0440\u0430\u043D\u0442\u0430. "),r())}function jf(i,c){i&1&&(s(0,"p",7),d(1),r()),i&2&&(n(),F(c))}var Vo=class i{data=f(He);api=f(Rt);dialogRef=f(qe);saving=h(!1);error=h(null);form=new _e({immediate:new at(!1,{nonNullable:!0}),reason:new at("",{nonNullable:!0,validators:[lt.required,lt.minLength(we)]})});onSubmit(){this.form.markAllAsTouched(),!this.form.invalid&&(this.saving.set(!0),this.error.set(null),this.api.cancelSubscription(this.data.subscription.id,this.form.getRawValue()).subscribe({next:()=>this.dialogRef.close(!0),error:c=>{this.saving.set(!1),this.error.set(c.error?.message??"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443.")}}))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["admin-subscription-cancel-dialog"]],decls:21,vars:16,consts:[["mat-dialog-title",""],[1,"column--fields"],[1,"hint","hint--block"],[1,"column",3,"formControl"],[3,"value"],[1,"warn-banner"],["placeholder","\u0412\u0456\u0434\u043C\u043E\u0432\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0430, \u043F\u0435\u0440\u0435\u0445\u0456\u0434 \u043D\u0430 \u0456\u043D\u0448\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u0443, \u0437\u0430\u043A\u0440\u0438\u0442\u0442\u044F \u043A\u0430\u0431\u0456\u043D\u0435\u0442\u0443",3,"control"],[1,"hint","hint--error"],["align","end"],["mat-stroked-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","warn",3,"click","disabled"]],template:function(t,e){if(t&1&&(s(0,"h2",0),d(1,"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443"),r(),s(2,"mat-dialog-content")(3,"div",1)(4,"p",2),d(5),vt(6,"date"),r(),s(7,"mat-radio-group",3)(8,"mat-radio-button",4),d(9),vt(10,"date"),r(),s(11,"mat-radio-button",4),d(12,"\u041D\u0435\u0433\u0430\u0439\u043D\u043E \u2014 \u0434\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456"),r()(),u(13,If,2,0,"p",5),L(14,"admin-command-reason",6),u(15,jf,2,1,"p",7),r()(),s(16,"mat-dialog-actions",8)(17,"button",9),d(18,"\u041D\u0435 \u0441\u043A\u0430\u0441\u043E\u0432\u0443\u0432\u0430\u0442\u0438"),r(),s(19,"button",10),k("click",function(){return e.onSubmit()}),d(20," \u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 "),r()()),t&2){let o;n(5),$t(" ",e.data.subscription.planName," \xB7 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434 \u0434\u043E ",Ct(6,10,e.data.subscription.currentPeriodEnd,"dd.MM.yyyy")," "),n(2),y("formControl",e.form.controls.immediate),n(),y("value",!1),n(),q(" \u0423 \u043A\u0456\u043D\u0446\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0443 \u2014 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u0456\u0454 \u0434\u043E ",Ct(10,13,e.data.subscription.currentPeriodEnd,"dd.MM.yyyy")," "),n(2),y("value",!0),n(2),m(e.data.subscription.hasActiveGrant?13:-1),n(),y("control",e.form.controls.reason),n(),m((o=e.error())?15:-1,o),n(4),y("disabled",e.saving())}},dependencies:[ee,te,ue,Xe,Oe,$e,We,Ue,it,_t,In,zc,Eo,Le,Ae],encapsulation:2})};var Bn=(i,c)=>c.id;function Bf(i,c){if(i&1&&(s(0,"mat-option",5),d(1),r()),i&2){let t=c.$implicit;y("value",t.id),n(),F(t.name)}}function Nf(i,c){if(i&1&&(s(0,"mat-option",5),d(1),vt(2,"number"),vt(3,"number"),r()),i&2){let t=c.$implicit,e=p();y("value",t.id),n(),zo(" ",e.periodLabel[t.period]," \u2014 \u0431\u0430\u0437\u0430 ",Ct(2,4,t.amount,"1.0-2")," \u0433\u0440\u043D + ",Ct(3,7,t.pricePerBranch,"1.0-2")," \u0433\u0440\u043D \u0437\u0430 \u0444\u0456\u043B\u0456\u044E ")}}function Af(i,c){i&1&&(s(0,"p",9),d(1),r()),i&2&&(n(),F(c))}var Mo=class i{data=f(He);api=f(Rt);dialogRef=f(qe);periodLabel=bo;saving=h(!1);error=h(null);form=new _e({planId:new at(this.data.subscription.planId,{nonNullable:!0,validators:[lt.required]}),priceId:new at("",{nonNullable:!0,validators:[lt.required]}),reason:new at("",{nonNullable:!0,validators:[lt.required,lt.minLength(we)]})});planId=h(this.data.subscription.planId);prices=E(()=>this.data.plans.find(c=>c.id===this.planId())?.prices??[]);constructor(){this.selectPriceForCurrentPeriod()}onPlanChange(){this.planId.set(this.form.controls.planId.value),this.selectPriceForCurrentPeriod()}onSubmit(){this.form.markAllAsTouched(),!this.form.invalid&&(this.saving.set(!0),this.error.set(null),this.api.changeSubscriptionPlan(this.data.subscription.id,this.form.getRawValue()).subscribe({next:()=>this.dialogRef.close(!0),error:c=>{this.saving.set(!1),this.error.set(c.error?.message??"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0442\u0430\u0440\u0438\u0444.")}}))}selectPriceForCurrentPeriod(){let c=this.prices(),t=c.find(e=>e.period===this.data.subscription.period);this.form.controls.priceId.setValue(t?.id??c[0]?.id??"")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["admin-subscription-change-plan-dialog"]],decls:27,vars:9,consts:[["mat-dialog-title",""],[1,"column--fields"],[1,"hint","hint--block"],["appearance","outline"],[3,"selectionChange","formControl"],[3,"value"],[3,"formControl"],[1,"hint"],[3,"control"],[1,"hint","hint--error"],["align","end"],["mat-stroked-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","primary",3,"click","disabled"]],template:function(t,e){if(t&1&&(s(0,"h2",0),d(1,"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0442\u0430\u0440\u0438\u0444"),r(),s(2,"mat-dialog-content")(3,"div",1)(4,"p",2),d(5),r(),s(6,"mat-form-field",3)(7,"mat-label"),d(8,"\u0422\u0430\u0440\u0438\u0444"),r(),s(9,"mat-select",4),k("selectionChange",function(){return e.onPlanChange()}),A(10,Bf,2,2,"mat-option",5,Bn),r()(),s(12,"mat-form-field",3)(13,"mat-label"),d(14,"\u041F\u0435\u0440\u0456\u043E\u0434 \u0456 \u0446\u0456\u043D\u0430"),r(),s(15,"mat-select",6),A(16,Nf,4,10,"mat-option",5,Bn),r()(),s(18,"p",7),d(19),r(),L(20,"admin-command-reason",8),u(21,Af,2,1,"p",9),r()(),s(22,"mat-dialog-actions",10)(23,"button",11),d(24,"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),r(),s(25,"button",12),k("click",function(){return e.onSubmit()}),d(26," \u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0442\u0430\u0440\u0438\u0444 "),r()()),t&2){let o;n(5),zo(" \u0417\u0430\u0440\u0430\u0437: ",e.data.subscription.planName," \xB7 ",e.periodLabel[e.data.subscription.period]," \xB7 \u0444\u0456\u043B\u0456\u0439 \u0443 \u043F\u0456\u0434\u043F\u0438\u0441\u0446\u0456: ",e.data.subscription.quantity," "),n(4),y("formControl",e.form.controls.planId),n(),z(e.data.plans),n(5),y("formControl",e.form.controls.priceId),n(),z(e.prices()),n(3),q(" \u0424\u0456\u043B\u0456\u0439 \u0431\u0443\u0434\u0435 \u0432\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E: ",e.data.branchCount," \u2014 \u0447\u0438\u0441\u043B\u043E \u0431\u0435\u0440\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u0456\u0437 \u0436\u0438\u0432\u0438\u0445 \u0444\u0456\u043B\u0456\u0439 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457, \u0443 \u0442\u0456\u043B\u0456 \u0437\u0430\u043F\u0438\u0442\u0443 \u0439\u043E\u0433\u043E \u043D\u0435\u043C\u0430\u0454. "),n(),y("control",e.form.controls.reason),n(),m((o=e.error())?21:-1,o),n(4),y("disabled",e.saving())}},dependencies:[ee,te,ue,Xe,Oe,$e,We,Ue,it,_t,Pt,ce,oe,li,ai,ye,Le,Wi],encapsulation:2})};function zf(i,c){i&1&&(s(0,"span"),d(1," (\u0434\u0430\u0442\u0443 \u0442\u0440\u0438\u043C\u0430\u0454 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0433\u0440\u0430\u043D\u0442)"),r())}function Pf(i,c){if(i&1&&(s(0,"mat-option",5),d(1),r()),i&2){let t=c.$implicit,e=p();y("value",t),n(),$t("",t," \xD7 ",e.periodLabel)}}function Rf(i,c){i&1&&(s(0,"p",7),d(1),r()),i&2&&(n(),F(c))}var Go=class i{data=f(He);api=f(Rt);dialogRef=f(qe);periodOptions=Array.from({length:cl},(c,t)=>t+1);periodLabel=this.data.subscription.period==="YEAR"?"\u0440\u0456\u043A":"\u043C\u0456\u0441\u044F\u0446\u044C";saving=h(!1);error=h(null);form=new _e({periods:new at(1,{nonNullable:!0,validators:[lt.required]}),reason:new at("",{nonNullable:!0,validators:[lt.required,lt.minLength(we)]})});onSubmit(){this.form.markAllAsTouched(),!this.form.invalid&&(this.saving.set(!0),this.error.set(null),this.api.extendSubscription(this.data.subscription.id,this.form.getRawValue()).subscribe({next:()=>this.dialogRef.close(!0),error:c=>{this.saving.set(!1),this.error.set(c.error?.message??"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443.")}}))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["admin-subscription-extend-dialog"]],decls:21,vars:10,consts:[["mat-dialog-title",""],[1,"column--fields"],[1,"hint","hint--block"],["appearance","outline"],[3,"formControl"],[3,"value"],[3,"control"],[1,"hint","hint--error"],["align","end"],["mat-stroked-button","","type","button","mat-dialog-close",""],["mat-flat-button","","type","button","color","primary",3,"click","disabled"]],template:function(t,e){if(t&1&&(s(0,"h2",0),d(1,"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443"),r(),s(2,"mat-dialog-content")(3,"div",1)(4,"p",2),d(5),vt(6,"date"),u(7,zf,2,0,"span"),r(),s(8,"mat-form-field",3)(9,"mat-label"),d(10,"\u041D\u0430 \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438"),r(),s(11,"mat-select",4),A(12,Pf,2,3,"mat-option",5,_i),r()(),L(14,"admin-command-reason",6),u(15,Rf,2,1,"p",7),r()(),s(16,"mat-dialog-actions",8)(17,"button",9),d(18,"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),r(),s(19,"button",10),k("click",function(){return e.onSubmit()}),d(20," \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 "),r()()),t&2){let o;n(5),$t(" ",e.data.subscription.planName," \xB7 \u0437\u0430\u0440\u0430\u0437 \u0434\u0456\u0454 \u0434\u043E ",Ct(6,7,e.data.subscription.accessValidUntil,"dd.MM.yyyy")," "),n(2),m(e.data.subscription.hasActiveGrant?7:-1),n(4),y("formControl",e.form.controls.periods),n(),z(e.periodOptions),n(2),y("control",e.form.controls.reason),n(),m((o=e.error())?15:-1,o),n(4),y("disabled",e.saving())}},dependencies:[ee,te,ue,Xe,Oe,$e,We,Ue,it,_t,Pt,ce,oe,li,ai,ye,Le,Ae],encapsulation:2})};function qf(i,c){i&1&&(s(0,"p",3),d(1,"\u0422\u0430\u043A\u043E\u0457 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u043D\u0435\u043C\u0430\u0454 \u2014 \u043C\u043E\u0436\u043B\u0438\u0432\u043E, \u0457\u0457 \u0432\u0438\u0434\u0430\u043B\u0438\u043B\u0438."),r())}function Hf(i,c){i&1&&(s(0,"span",25),d(1," \u2014 \u0434\u043E\u0436\u0438\u0432\u0430\u0454 \u0434\u043E \u043A\u0456\u043D\u0446\u044F \u043F\u0435\u0440\u0456\u043E\u0434\u0443"),r())}function Of(i,c){if(i&1&&(s(0,"div",5)(1,"span"),d(2,"\u0422\u0440\u0456\u0430\u043B \u0434\u043E"),r(),s(3,"span",7),d(4),vt(5,"date"),r()()),i&2){let t=p();n(4),q(" ",Ct(5,1,t.trialEndsAt,"dd.MM.yyyy")," ")}}function $f(i,c){if(i&1&&(s(0,"p",3),d(1),vt(2,"date"),r()),i&2){let t=p();n(),q(" \u0414\u0430\u0442\u0443 \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0437\u0430\u0440\u0430\u0437 \u0442\u0440\u0438\u043C\u0430\u0454 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0433\u0440\u0430\u043D\u0442, \u0430 \u043D\u0435 \u043E\u043F\u043B\u0430\u0442\u0430: \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434 \u2014 \u0434\u043E ",Ct(2,1,t.currentPeriodEnd,"dd.MM.yyyy"),". \u0413\u0440\u0430\u043D\u0442\u0438 \u2014 \u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u0446\u0456 \xAB\u0413\u0440\u0430\u043D\u0442\u0438\xBB. ")}}function Uf(i,c){i&1&&(s(0,"p",25),d(1," \u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0443 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u043D\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u044E\u0442\u044C: \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0430 \u2014 \u0446\u0435 \u043D\u043E\u0432\u0430 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0430, \u0430 \u043D\u0435 \u0440\u0443\u0445 \u0434\u0430\u0442\u0438. "),r())}function Wf(i,c){if(i&1){let t=P();s(0,"div",4)(1,"div",5)(2,"span"),d(3,"\u0421\u0442\u0430\u043D \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438"),r(),s(4,"span",7),d(5),u(6,Hf,2,0,"span",25),r()(),s(7,"div",5)(8,"span"),d(9,"\u0422\u0430\u0440\u0438\u0444 \u0456 \u043F\u0435\u0440\u0456\u043E\u0434"),r(),s(10,"span",7),d(11),r()(),s(12,"div",5)(13,"span"),d(14,"\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434"),r(),s(15,"span",7),d(16),vt(17,"date"),vt(18,"date"),r()(),u(19,Of,6,4,"div",5),s(20,"div",5)(21,"span"),d(22,"\u0424\u0456\u043B\u0456\u0439 \u0443 \u043F\u0456\u0434\u043F\u0438\u0441\u0446\u0456"),r(),s(23,"span",7),d(24),r()(),s(25,"div",5)(26,"span"),d(27,"\u0421\u0443\u043C\u0430 \u0437\u0430 \u043F\u0435\u0440\u0456\u043E\u0434"),r(),s(28,"span",7),d(29),vt(30,"number"),r()()(),u(31,$f,3,4,"p",3),s(32,"div",26)(33,"button",27),k("click",function(){D(t);let o=p(2);return V(o.onExtend())}),s(34,"mat-icon"),d(35,"event_repeat"),r(),d(36," \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 "),r(),s(37,"button",35),k("click",function(){D(t);let o=p(2);return V(o.onChangePlan())}),s(38,"mat-icon"),d(39,"swap_horiz"),r(),d(40," \u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0442\u0430\u0440\u0438\u0444 "),r(),s(41,"button",28),k("click",function(){D(t);let o=p(2);return V(o.onCancel())}),s(42,"mat-icon"),d(43,"cancel"),r(),d(44," \u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 "),r()(),u(45,Uf,2,0,"p",25)}if(i&2){let t=c,e=p(2);n(5),q(" ",e.subscriptionStatusLabel[t.status]," "),n(),m(t.cancelAtPeriodEnd?6:-1),n(5),$t(" ",t.planName," \xB7 ",e.periodLabel[t.period]," "),n(5),$t(" ",Ct(17,13,t.currentPeriodStart,"dd.MM.yyyy")," \u2014 ",Ct(18,16,t.currentPeriodEnd,"dd.MM.yyyy")," "),n(3),m(t.trialEndsAt?19:-1),n(5),F(t.quantity),n(5),q(" ",Ct(30,19,t.periodTotal,"1.2-2")," \u0433\u0440\u043D "),n(2),m(t.hasActiveGrant?31:-1),n(2),y("disabled",!e.canExtendSubscription()),n(8),y("disabled",!e.canCancelSubscription()),n(4),m(e.canExtendSubscription()?-1:45)}}function Xf(i,c){i&1&&(s(0,"p",3),d(1," \u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0438 \u043D\u0435\u043C\u0430\u0454 \u2014 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u0449\u0435 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043A\u0443\u043F\u0443\u0432\u0430\u043B\u0430. \u0414\u043E\u0441\u0442\u0443\u043F \u0457\u0439 \u043C\u043E\u0436\u0435 \u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043B\u0438\u0448\u0435 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0433\u0440\u0430\u043D\u0442. "),r())}function Zf(i,c){i&1&&(s(0,"span",25),d(1,"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E \u2014 \u0437\u043C\u0456\u043D\u0443 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0432 \u0436\u0443\u0440\u043D\u0430\u043B."),r())}function Kf(i,c){if(i&1){let t=P();s(0,"div",4)(1,"div",5)(2,"span"),d(3,"\u0414\u0456\u0454 \u0434\u043E"),r(),s(4,"span",6),d(5),vt(6,"date"),r()(),s(7,"div",5)(8,"span"),d(9,"\u041B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0434\u043D\u0456\u0432"),r(),s(10,"span",6),d(11),r()(),s(12,"div",5)(13,"span"),d(14,"\u0422\u0430\u0440\u0438\u0444"),r(),s(15,"span",7),d(16),r()(),s(17,"div",5)(18,"span"),d(19,"\u0424\u0456\u043B\u0456\u0439"),r(),s(20,"span",7),d(21),r()(),s(22,"div",5)(23,"span"),d(24,"\u0411\u043E\u0440\u0433"),r(),s(25,"span",7),d(26),vt(27,"number"),r()(),s(28,"div",5)(29,"span"),d(30,"\u0414\u043E\u0441\u0442\u0443\u043F \u0442\u0440\u0438\u043C\u0430\u0454"),r(),s(31,"span",7),d(32),r()()(),L(33,"app-action-bar",8),s(34,"mat-tab-group",9),k("selectedIndexChange",function(o){D(t);let a=p();return V(a.onTabChange(o))}),s(35,"mat-tab",10)(36,"div",11),u(37,Wf,46,22)(38,Xf,2,0,"p",3),r()(),s(39,"mat-tab",12)(40,"div",11)(41,"form",13)(42,"mat-form-field",14)(43,"mat-label"),d(44,"\u0420\u043E\u0431\u043E\u0447\u0430 \u043D\u0430\u0437\u0432\u0430"),r(),L(45,"input",15),r(),s(46,"mat-form-field",14)(47,"mat-label"),d(48,"\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u043D\u0430\u0437\u0432\u0430"),r(),L(49,"input",16),r(),s(50,"mat-form-field",14)(51,"mat-label"),d(52,"\u0404\u0414\u0420\u041F\u041E\u0423 / \u0406\u041F\u041D"),r(),L(53,"input",17),r(),s(54,"mat-form-field",14)(55,"mat-label"),d(56,"\u0406\u041F\u041D \u043F\u043B\u0430\u0442\u043D\u0438\u043A\u0430 \u041F\u0414\u0412"),r(),L(57,"input",18),r(),s(58,"mat-form-field",14)(59,"mat-label"),d(60,"\u042E\u0440\u0438\u0434\u0438\u0447\u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0430"),r(),L(61,"input",19),r(),s(62,"mat-form-field",14)(63,"mat-label"),d(64,"IBAN"),r(),L(65,"input",20),r(),s(66,"mat-form-field",14)(67,"mat-label"),d(68,"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u043E\u0441\u043E\u0431\u0430"),r(),L(69,"input",21),r(),s(70,"mat-form-field",14)(71,"mat-label"),d(72,"\u041F\u043E\u0448\u0442\u0430"),r(),L(73,"input",22),r(),s(74,"mat-form-field",14)(75,"mat-label"),d(76,"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),r(),L(77,"input",23),r(),s(78,"mat-form-field",14)(79,"mat-label"),d(80,"\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456 \u043D\u043E\u0442\u0430\u0442\u043A\u0438"),r(),L(81,"textarea",24),s(82,"mat-hint"),d(83,"\u041A\u043B\u0456\u0454\u043D\u0442 \u0457\u0445 \u043D\u0435 \u0431\u0430\u0447\u0438\u0442\u044C."),r()()(),s(84,"p",25),d(85," \u0421\u0442\u0430\u0442\u0443\u0441 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0446\u0456\u0454\u044E \u0444\u043E\u0440\u043C\u043E\u044E \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454\u0442\u044C\u0441\u044F: \u043F\u0435\u0440\u0435\u0445\u0456\u0434 \u0441\u0442\u0430\u043D\u0443 \u2014 \u043E\u043A\u0440\u0435\u043C\u0430 \u0434\u0456\u044F \u0436\u0438\u0442\u0442\u0454\u0432\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0443, \u0430 \u043D\u0435 \u043F\u043E\u0431\u0456\u0447\u043D\u0438\u0439 \u0435\u0444\u0435\u043A\u0442 \u043F\u0440\u0430\u0432\u043A\u0438 \u0440\u0435\u043A\u0432\u0456\u0437\u0438\u0442\u0456\u0432. "),r(),s(86,"div",26)(87,"button",27),k("click",function(){D(t);let o=p();return V(o.onSaveRequisites())}),d(88," \u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 "),r(),s(89,"button",28),k("click",function(){D(t);let o=p();return V(o.onResetRequisites())}),d(90," \u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0437\u043C\u0456\u043D\u0438 "),r(),u(91,Zf,2,0,"span",25),r()()(),s(92,"mat-tab",29)(93,"div",11),L(94,"app-data-table",30),r()(),s(95,"mat-tab",31)(96,"div",11),L(97,"app-data-table",30),r()(),s(98,"mat-tab",32)(99,"div",11),L(100,"app-data-table",30),r()(),s(101,"mat-tab",33)(102,"div",11)(103,"p",25),d(104," \u0413\u0440\u0430\u043D\u0442 \u2014 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0437 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u043E\u044E \u0434\u0430\u0442\u043E\u044E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0439 \u043F\u0440\u0438\u0447\u0438\u043D\u043E\u044E. \u0412\u0456\u043D \u0441\u043F\u043B\u0438\u0432\u0430\u0454 \u0441\u0430\u043C \u0456 \u043D\u0435 \u0437\u043C\u0456\u043D\u044E\u0454 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443. \u0412\u0438\u0434\u0430\u0447\u0430 \u0439 \u0434\u043E\u0441\u0442\u0440\u043E\u043A\u043E\u0432\u0435 \u0432\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u043D\u043D\u044F \u2014 T14.5. "),r(),L(105,"app-data-table",30),r()(),s(106,"mat-tab",34)(107,"div",11),L(108,"app-data-table",30),r()()()}if(i&2){let t,e=c,o=p();n(4),O(o.accessTone()),n(),q(" ",e.accessValidUntil?Ct(6,36,e.accessValidUntil,"dd.MM.yyyy"):"\u2014"," "),n(5),O(o.accessTone()),n(),q(" ",e.daysLeft??"\u2014"," "),n(5),F(e.planName??"\u0411\u0435\u0437 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438"),n(5),F(e.branchCount),n(4),j("status",e.debt>0)("danger",e.debt>0),n(),q(" ",Ct(27,39,e.debt,"1.2-2")," \u0433\u0440\u043D "),n(6),F(o.accessSourceLabel[e.access.source]),n(),y("actions",o.pageActions()),n(4),m((t=o.state.subscription())?37:38,t),n(4),y("formGroup",o.requisitesForm),n(46),y("disabled",o.requisitesForm.pristine||o.state.cardLoading()),n(2),y("disabled",o.requisitesForm.pristine),n(2),m(o.requisitesSaved()?91:-1),n(),y("label","\u0424\u0456\u043B\u0456\u0457 \xB7 "+e.branchCount),n(2),y("rows",o.state.branches())("config",o.branchesTable)("loading",o.state.tabLoading()),n(3),y("rows",o.state.users())("config",o.usersTable)("loading",o.state.tabLoading()),n(3),y("rows",o.state.payments())("config",o.paymentsTable)("loading",o.state.tabLoading()),n(5),y("rows",o.state.grants())("config",o.grantsTable)("loading",o.state.tabLoading()),n(3),y("rows",o.state.auditEvents())("config",o.auditTable)("loading",o.state.tabLoading())}}var wo=class i{id=N.required();state=f(Ye);api=f(Rt);dialog=f(Ha);statusLabel=Fo;subscriptionStatusLabel=Dn;periodLabel=bo;accessSourceLabel=Vn;plans=h([]);requisitesSaved=h(!1);requisitesForm=new _e({name:new at("",{nonNullable:!0,validators:[lt.required]}),legalName:new at("",{nonNullable:!0,validators:[lt.required]}),edrpou:new at("",{nonNullable:!0}),vatNumber:new at("",{nonNullable:!0}),legalAddress:new at("",{nonNullable:!0}),iban:new at("",{nonNullable:!0}),contactPerson:new at("",{nonNullable:!0}),contactEmail:new at("",{nonNullable:!0,validators:[lt.email]}),contactPhone:new at("",{nonNullable:!0}),notes:new at("",{nonNullable:!0})});accessTone=E(()=>{let c=this.state.card()?.daysLeft??null;return c===null?"":c<0?"danger":c<=xe?"warn":"ok"});canExtendSubscription=E(()=>{let c=this.state.subscription();return c!==null&&al(c)});canCancelSubscription=E(()=>{let c=this.state.subscription();return c!==null&&ll(c)});pageActions=E(()=>[{label:"\u041E\u043D\u043E\u0432\u0438\u0442\u0438",icon:"refresh",run:()=>this.state.refresh()}]);constructor(){No(()=>this.state.init(this.id())),No(()=>{let c=this.state.card();c&&this.requisitesForm.reset({name:c.name,legalName:c.legalName,edrpou:c.edrpou,vatNumber:c.vatNumber,legalAddress:c.legalAddress,iban:c.iban,contactPerson:c.contactPerson,contactEmail:c.contactEmail,contactPhone:c.contactPhone,notes:c.notes})})}onTabChange(c){this.state.openTab(nl[c])}onExtend(){let c=this.state.subscription();c&&this.dialog.open(Go,{data:{subscription:c}}).afterClosed().subscribe(t=>this.afterCommand(t))}onChangePlan(){let c=this.state.subscription(),t=this.state.card();if(!c||!t)return;let e=o=>this.dialog.open(Mo,{data:{subscription:c,plans:o,branchCount:t.branchCount}}).afterClosed().subscribe(a=>this.afterCommand(a));if(this.plans().length>0){e(this.plans());return}this.api.listPlans().subscribe(o=>{let a=o.filter(l=>!l.isDeleted);this.plans.set(a),e(a)})}onCancel(){let c=this.state.subscription();c&&this.dialog.open(Vo,{data:{subscription:c}}).afterClosed().subscribe(t=>this.afterCommand(t))}onSaveRequisites(){this.requisitesForm.markAllAsTouched(),!this.requisitesForm.invalid&&(this.requisitesSaved.set(!1),this.state.saveRequisites(this.requisitesForm.getRawValue()).subscribe(()=>this.requisitesSaved.set(!0)))}onResetRequisites(){this.requisitesSaved.set(!1),this.state.loadCard()}afterCommand(c){c&&this.state.refresh()}branchesTable={wrapper:"overflow",rowBaseClass:"none",empty:{kind:"empty",title:"\u0424\u0456\u043B\u0456\u0439 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454",text:"\u0424\u0456\u043B\u0456\u0457 \u0437\u0430\u0432\u043E\u0434\u0438\u0442\u044C \u0441\u0430\u043C\u0430 \u043A\u043B\u0456\u043D\u0456\u043A\u0430; \u0432\u0456\u0434 \u0457\u0445 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456 \u0440\u0430\u0445\u0443\u0454\u0442\u044C\u0441\u044F \u0441\u0443\u043C\u0430 \u0437\u0430 \u043F\u0435\u0440\u0456\u043E\u0434."},columns:[{key:"name",header:"\u0424\u0456\u043B\u0456\u044F",mobile:"title"},{key:"shortName",header:"\u0421\u043A\u043E\u0440\u043E\u0447\u0435\u043D\u043E",blank:"\u2014"},{key:"address",header:"\u0410\u0434\u0440\u0435\u0441\u0430",blank:"\u2014"},{key:"isMain",header:"\u0413\u043E\u043B\u043E\u0432\u043D\u0430",icon:c=>c.isMain?"check":null},{key:"isVirtual",header:"\u0412\u0456\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u0430",icon:c=>c.isVirtual?"check":null},{key:"stopWork",header:"\u0420\u043E\u0431\u043E\u0442\u0430 \u0437\u0443\u043F\u0438\u043D\u0435\u043D\u0430",icon:c=>c.stopWork?"check":null,iconClass:()=>"warn"}]};usersTable={wrapper:"overflow",rowBaseClass:"none",empty:{kind:"empty",title:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454",text:"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0437\u0430\u0432\u043E\u0434\u0438\u0442\u044C \u043A\u043B\u0456\u043D\u0456\u043A\u0430 \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043A\u0443."},columns:[{key:"fullName",header:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447",mobile:"title"},{key:"login",header:"\u041B\u043E\u0433\u0456\u043D"},{key:"roleName",header:"\u0420\u043E\u043B\u044C",blank:"\u2014"},{key:"email",header:"\u041F\u043E\u0448\u0442\u0430",blank:"\u2014"},{key:"phones",header:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",blank:"\u2014"},{key:"isExternal",header:"\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439",icon:c=>c.isExternal?"check":null}]};paymentsTable={wrapper:"overflow",rowBaseClass:"none",empty:{kind:"empty",title:"\u041F\u043B\u0430\u0442\u0435\u0436\u0456\u0432 \u0449\u0435 \u043D\u0435 \u0431\u0443\u043B\u043E",text:"\u0421\u044E\u0434\u0438 \u043F\u043E\u0442\u0440\u0430\u043F\u043B\u044F\u044E\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043A\u0430\u043C\u0438 \u2014 \u0456 \u0431\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u0456, \u0456 \u0432\u043D\u0435\u0441\u0435\u043D\u0456 \u0432\u0440\u0443\u0447\u043D\u0443."},columns:[{key:"paidAt",header:"\u0414\u0430\u0442\u0430",format:"date",blank:"\u2014",mobile:"summary"},{key:"invoiceNumber",header:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A",mobile:"title"},{key:"amount",header:"\u0421\u0443\u043C\u0430",format:"number",numeric:!0,mobile:"summary"},{key:"provider",header:"\u041A\u0430\u043D\u0430\u043B",value:c=>Gn[c.provider]},{key:"method",header:"\u0421\u043F\u043E\u0441\u0456\u0431",blank:"\u2014"},{key:"status",header:"\u0421\u0442\u0430\u043D",value:c=>Mn[c.status]}]};grantsTable={wrapper:"overflow",rowBaseClass:"none",empty:{kind:"empty",title:"\u0413\u0440\u0430\u043D\u0442\u0456\u0432 \u043D\u0435 \u0432\u0438\u0434\u0430\u0432\u0430\u043B\u0438",text:"\u0413\u0440\u0430\u043D\u0442 \u2014 \u0446\u0435 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0437 \u043F\u0440\u0438\u0447\u0438\u043D\u043E\u044E \u0439 \u0434\u0430\u0442\u043E\u044E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F."},deleted:c=>!c.isActive,columns:[{key:"kind",header:"\u0412\u0438\u0434",value:c=>So[c.kind]},{key:"validFrom",header:"\u0414\u0456\u0454 \u0437",format:"date"},{key:"validTo",header:"\u0414\u0456\u0454 \u0434\u043E",format:"date",mobile:"summary"},{key:"isActive",header:"\u0427\u0438\u043D\u043D\u0438\u0439",icon:c=>c.isActive?"check":null,iconClass:()=>"ok"},{key:"reason",header:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430",mobile:"title"},{key:"grantedByName",header:"\u0412\u0438\u0434\u0430\u0432"},{key:"revokedAt",header:"\u0412\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u043D\u043E",format:"date",blank:"\u2014"}]};auditTable={wrapper:"overflow",rowBaseClass:"none",empty:{kind:"empty",title:"\u041F\u043E\u0434\u0456\u0439 \u043F\u043E \u0446\u044C\u043E\u043C\u0443 \u043A\u043B\u0456\u0454\u043D\u0442\u0443 \u043D\u0435\u043C\u0430\u0454",text:"\u0421\u044E\u0434\u0438 \u043F\u0438\u0448\u0435\u0442\u044C\u0441\u044F \u043A\u043E\u0436\u043D\u0430 \u043A\u0435\u0440\u0456\u0432\u043D\u0430 \u0434\u0456\u044F: \u0437\u043C\u0456\u043D\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438, \u0433\u0440\u0430\u043D\u0442\u0438, \u043E\u043F\u043B\u0430\u0442\u0438."},columns:[{key:"createdAt",header:"\u041A\u043E\u043B\u0438",format:"datetime",mobile:"summary"},{key:"action",header:"\u0414\u0456\u044F",value:c=>En[c.action],mobile:"title"},{key:"actor",header:"\u0425\u0442\u043E",value:c=>c.actorLogin??(c.actorType==="SYSTEM"?"\u0421\u0438\u0441\u0442\u0435\u043C\u0430":"\u2014")},{key:"reason",header:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430",value:c=>Qf(c),blank:"\u2014"},{key:"targetType",header:"\u041E\u0431'\u0454\u043A\u0442",blank:"\u2014"}]};organizationStatus=ki;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["admin-organization-card"]],inputs:{id:[1,"id"]},decls:8,vars:3,consts:[[1,"page","page--fill"],[3,"title","badge"],["mat-stroked-button","","routerLink","/organizations"],[1,"hint","hint--block"],[1,"dash-list"],[1,"dash-list__row"],[1,"dash-list__value","status"],[1,"dash-list__value"],["variant","right",3,"actions"],[1,"tabs","tabs--fill",3,"selectedIndexChange"],["label","\u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0430"],[1,"tab-body"],["label","\u0420\u0435\u043A\u0432\u0456\u0437\u0438\u0442\u0438"],[1,"form-grid",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","name"],["matInput","","formControlName","legalName"],["matInput","","formControlName","edrpou"],["matInput","","formControlName","vatNumber"],["matInput","","formControlName","legalAddress"],["matInput","","formControlName","iban"],["matInput","","formControlName","contactPerson"],["matInput","","type","email","formControlName","contactEmail"],["matInput","","formControlName","contactPhone"],["matInput","","rows","2","formControlName","notes"],[1,"hint"],[1,"actions-row"],["mat-flat-button","","type","button","color","primary",3,"click","disabled"],["mat-stroked-button","","type","button",3,"click","disabled"],[3,"label"],[3,"rows","config","loading"],["label","\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"],["label","\u041F\u043B\u0430\u0442\u0435\u0436\u0456"],["label","\u0413\u0440\u0430\u043D\u0442\u0438"],["label","\u0410\u0443\u0434\u0438\u0442"],["mat-stroked-button","","type","button",3,"click"]],template:function(t,e){if(t&1&&(s(0,"div",0)(1,"app-page-header",1)(2,"a",2)(3,"mat-icon"),d(4,"arrow_back"),r(),d(5," \u0414\u043E \u0441\u043F\u0438\u0441\u043A\u0443 "),r()(),u(6,qf,2,0,"p",3)(7,Kf,109,42),r()),t&2){let o,a;n(),y("title",((o=e.state.card())==null?null:o.name)??"\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F")("badge",e.state.card()?e.statusLabel[e.state.card().status]:null),n(5),m(e.state.notFound()?6:(a=e.state.card())?7:-1,a)}},dependencies:[fa,ee,Xa,io,te,Wa,mi,Za,it,_t,Pt,ce,oe,co,Tt,St,Qe,Ke,ml,lc,ul,ii,di,ei,Ae,Wi],encapsulation:2})};function Qf(i){return i.after?.reason??null}var Yf=(i,c)=>c.key;function Jf(i,c){if(i&1){let t=P();s(0,"button",8),k("click",function(){let o=D(t).$implicit,a=p();return V(a.state.applyPreset(o.key))}),s(1,"span",9),d(2),r(),s(3,"span",10),d(4),r(),s(5,"span",11),d(6),r()()}if(i&2){let t=c.$implicit,e=p();j("dash-tile--warn",t.warn)("is-active",e.state.preset()===t.key),_("aria-pressed",e.state.preset()===t.key),n(2),F(t.label),n(2),F(t.value),n(2),F(t.hint)}}var Io=class i{state=f(Je);router=f(pa);locale=f(Oi);presets=lo;tiles=E(()=>{let c=this.state.summary();return this.presets.map(t=>wi(Fe({},t),{value:t.count(c),hint:t.key==="all"?`\u0411\u043E\u0440\u0433 \u0440\u0430\u0437\u043E\u043C: ${ui(c.totalDebt,this.locale,"1.2-2")} \u0433\u0440\u043D`:t.hint}))});table={wrapper:"overflow",empty:{kind:"filtered",title:"\u0422\u0430\u043A\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u043D\u0435\u043C\u0430\u0454",text:"\u0416\u043E\u0434\u043D\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u043D\u0435 \u043F\u0456\u0434\u043F\u0430\u0434\u0430\u0454 \u043F\u0456\u0434 \u0432\u0438\u0431\u0440\u0430\u043D\u0443 \u043F\u043B\u0438\u0442\u043A\u0443 \u0439 \u043F\u043E\u0448\u0443\u043A.",action:{label:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438",icon:"restart_alt",run:()=>this.state.resetFilters()}},rowClass:c=>({"is-danger":tc(c),"is-expiring":Jo(c,xe)}),columns:[{key:"name",header:"\u041A\u043B\u0456\u043D\u0456\u043A\u0430",mobile:"title"},{key:"status",header:"\u0421\u0442\u0430\u0442\u0443\u0441",value:c=>Fo[c.status],cellClass:c=>`status ${td(c)}`},{key:"planName",header:"\u0422\u0430\u0440\u0438\u0444",blank:"\u2014"},{key:"branchCount",header:"\u0424\u0456\u043B\u0456\u0439",format:"integer",numeric:!0},{key:"accessValidUntil",header:"\u0414\u0456\u0454 \u0434\u043E",format:"date",blank:"\u2014",mobile:"summary",tooltip:c=>c.activeGrantKind?"\u0414\u0430\u0442\u0443 \u0442\u0440\u0438\u043C\u0430\u0454 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0433\u0440\u0430\u043D\u0442":void 0},{key:"daysLeft",header:"\u041B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0434\u043D\u0456\u0432",format:"integer",numeric:!0,blank:"\u2014",mobile:"summary",cellClass:c=>`status ${ed(c)}`},{key:"lastPaymentAt",header:"\u041E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043F\u043B\u0430\u0442\u0456\u0436",format:"date",blank:"\u2014"},{key:"debt",header:"\u0411\u043E\u0440\u0433",format:"number",numeric:!0,cellClass:c=>c.debt>0?"status danger":""},{key:"activeGrantKind",header:"\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439 \u0433\u0440\u0430\u043D\u0442",value:c=>c.activeGrantKind?So[c.activeGrantKind]:null,blank:"\u2014"}]};headerFilters=E(()=>[sn(this.state.search(),c=>this.state.setSearch(c),"\u041A\u043B\u0456\u043D\u0456\u043A\u0430 \u0430\u0431\u043E \u0404\u0414\u0420\u041F\u041E\u0423")]);pageActions=E(()=>[{label:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440\u0438",icon:"restart_alt",disabled:!this.state.isFiltered(),run:()=>this.state.resetFilters()},{label:"\u041E\u043D\u043E\u0432\u0438\u0442\u0438",icon:"refresh",run:()=>this.state.refresh()}]);pageMenu=E(()=>[rn(this.state.includeDeleted(),()=>this.state.setIncludeDeleted(!this.state.includeDeleted()))]);ngOnInit(){this.state.init()}openCard(c){this.state.select(c.id),this.router.navigate(["/organizations",c.id])}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["admin-organizations-page"]],decls:9,vars:8,consts:[[1,"directory-page"],["title","\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457"],["variant","row",3,"fields","resettable"],[1,"dash-grid","dash-grid--rail"],["type","button",1,"dash-tile",3,"dash-tile--warn","is-active"],["variant","right",3,"actions"],[3,"items"],[3,"rowClick","rowDblClick","rows","config","selectedId","loading"],["type","button",1,"dash-tile",3,"click"],[1,"dash-tile__label"],[1,"dash-tile__value"],[1,"dash-tile__hint"]],template:function(t,e){t&1&&(s(0,"div",0)(1,"app-page-header",1),L(2,"app-filter-panel",2),r(),s(3,"div",3),A(4,Jf,7,8,"button",4,Yf),r(),s(6,"app-action-bar",5),L(7,"app-more-actions-menu",6),r(),s(8,"app-data-table",7),k("rowClick",function(a){return e.state.select(a.id)})("rowDblClick",function(a){return e.openCard(a)}),r()()),t&2&&(n(2),y("fields",e.headerFilters())("resettable",!1),n(2),z(e.tiles()),n(2),y("actions",e.pageActions()),n(),y("items",e.pageMenu()),n(),y("rows",e.state.organizations())("config",e.table)("selectedId",e.state.selectedId())("loading",e.state.listLoading()))},dependencies:[ii,ho,di,Di,ei],encapsulation:2})};function td(i){switch(i.status){case"ACTIVE":return"ok";case"PAST_DUE":case"SUSPENDED":case"ARCHIVED":return"danger";default:return"warn"}}function ed(i){return tc(i)?"danger":Jo(i,xe)?"warn":""}var pk=[{path:"",component:Io,providers:[Je]},{path:":id",component:wo,providers:[Ye]}];export{pk as ORGANIZATIONS_ROUTES};
