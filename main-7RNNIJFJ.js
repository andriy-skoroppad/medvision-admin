import{$ as An,K as hn,N as gn,X as yn,Y as wn,Z as xn,_ as kn,a as We,aa as Sn,b as Ut,ba as In,c as qi,fa as Re,ga as _,ha as T,i as dn,ia as ct,ja as Cn,k as mn,ka as En,la as dt,ma as Wt,na as Tn,o as un,oa as Rn,p as Ce,pa as Mn,q as pn,qa as On,s as Gt,ta as Pn,ua as Ln}from"./chunk-BRNRCWMU.js";import{b as Ht,c as Vt,d as te,f as Dn}from"./chunk-RWWGM7DU.js";import{D as De,I as je,K as at,M as rt,O as Xi,P as Ji,Q as en,R as tn,V as nn,Y as an,ga as P,i as Ui,ia as rn,j as Gi,ja as on,ka as sn,l as Hi,la as ot,m as Vi,ma as ln,n as Wi,na as Q,oa as cn,p as ji,q as $i,qa as fn,r as nt,ra as Ee,s as Bt,sa as Te,t as Zi,ta as st,u as Ki,ua as bn,v as Yi,va as lt,w as Qi,wa as _n,y as ce,ya as vn}from"./chunk-WI4VRV4G.js";import{$b as w,A as Xe,Aa as Nt,Ab as I,B as Ue,Ba as ee,Bb as A,Cb as S,D as Tt,Da as F,Ea as Ci,Eb as Je,Ec as Ve,F as yi,Fb as et,G as wi,Gb as M,Gc as zi,H as Rt,Hb as c,I as xi,Ib as d,Ic as Fi,Ja as Ei,Jb as O,Mc as fe,Pc as be,Qb as he,Qc as Bi,R as Mt,Rb as Pi,S as ki,T as $,Ub as k,W as Ai,Wb as D,Xa as Ti,Xb as E,Y as Ot,Ya as m,Yb as f,Z as Se,Zb as le,_ as U,_b as ge,a as h,aa as Z,ab as Ri,ac as x,b as y,bb as zt,c as qe,ca as o,d as fi,da as Si,db as Mi,ea as Pt,eb as Ft,ec as Ge,fc as tt,gb as Oi,gc as v,h as J,hc as it,ia as ae,ic as p,ja as re,jc as B,ka as Lt,kc as He,lc as Li,ma as pe,mb as b,na as Ie,nb as G,o as bi,ob as H,p as Ae,qa as oe,ra as se,rb as K,s as Et,tc as Y,u as _i,ua as Ii,va as z,vc as Ni,wa as Di,z as vi}from"./chunk-CHN4MNQ3.js";var Na="@",za=(()=>{class e{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=o(pe);loadingSchedulerFn=o(Fa,{optional:!0});_engine;constructor(t,n,a,r,l){this.doc=t,this.delegate=n,this.zone=a,this.animationType=r,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-OHAV5DEI.js").then(a=>a),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(a=>{throw new Ai(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:r})=>{this._engine=a(this.animationType,this.doc);let l=new r(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,n){let a=this.delegate.createRenderer(t,n);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let r=new jt(a);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let N=l.createRenderer(t,n);r.use(N),this.scheduler??=this.injector.get(Di,null,{optional:!0}),this.scheduler?.notify(10)}).catch(l=>{r.use(a)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){Oi()};static \u0275prov=Se({token:e,factory:e.\u0275fac})}return e})(),jt=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let t of this.replay)t(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,t){return this.delegate.createElement(i,t)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,t){this.delegate.appendChild(i,t)}insertBefore(i,t,n,a){this.delegate.insertBefore(i,t,n,a)}removeChild(i,t,n,a){this.delegate.removeChild(i,t,n,a)}selectRootElement(i,t){return this.delegate.selectRootElement(i,t)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,t,n,a){this.delegate.setAttribute(i,t,n,a)}removeAttribute(i,t,n){this.delegate.removeAttribute(i,t,n)}addClass(i,t){this.delegate.addClass(i,t)}removeClass(i,t){this.delegate.removeClass(i,t)}setStyle(i,t,n,a){this.delegate.setStyle(i,t,n,a)}removeStyle(i,t,n){this.delegate.removeStyle(i,t,n)}setProperty(i,t,n){this.shouldReplay(t)&&this.replay.push(a=>a.setProperty(i,t,n)),this.delegate.setProperty(i,t,n)}setValue(i,t){this.delegate.setValue(i,t)}listen(i,t,n,a){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(i,t,n,a)),this.delegate.listen(i,t,n,a)}shouldReplay(i){return this.replay!==null&&i.startsWith(Na)}},Fa=new Z("");function Nn(e="animations"){return Ri("NgAsyncAnimations"),Si([{provide:Mi,useFactory:()=>new za(o(Ie),o(Ui),o(se),e)},{provide:Ei,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ba=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Ua=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function $t(e,i){let t=Array(e);for(let n=0;n<e;n++)t[n]=i(n);return t}var Ga=(()=>{class e extends Ut{_matDateLocale=o(We,{optional:!0});constructor(){super();let t=o(We,{optional:!0});t!==void 0&&(this._matDateLocale=t),super.setLocale(this._matDateLocale)}getYear(t){return t.getFullYear()}getMonth(t){return t.getMonth()}getDate(t){return t.getDate()}getDayOfWeek(t){return t.getDay()}getMonthNames(t){let n=new Intl.DateTimeFormat(this.locale,{month:t,timeZone:"utc"});return $t(12,a=>this._format(n,new Date(2017,a,1)))}getDateNames(){let t=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return $t(31,n=>this._format(t,new Date(2017,0,n+1)))}getDayOfWeekNames(t){let n=new Intl.DateTimeFormat(this.locale,{weekday:t,timeZone:"utc"});return $t(7,a=>this._format(n,new Date(2017,0,a+1)))}getYearName(t){let n=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(n,t)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let t=new Intl.Locale(this.locale),n=(t.getWeekInfo?.()||t.weekInfo)?.firstDay??0;return n===7?0:n}return 0}getNumDaysInMonth(t){return this.getDate(this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+1,0))}clone(t){return new Date(t.getTime())}createDate(t,n,a){let r=this._createDateWithOverflow(t,n,a);return r.getMonth()!=n,r}today(){return new Date}parse(t,n){return typeof t=="number"?new Date(t):t?new Date(Date.parse(t)):null}format(t,n){if(!this.isValid(t))throw Error("NativeDateAdapter: Cannot format invalid date.");let a=new Intl.DateTimeFormat(this.locale,y(h({},n),{timeZone:"utc"}));return this._format(a,t)}addCalendarYears(t,n){return this.addCalendarMonths(t,n*12)}addCalendarMonths(t,n){let a=this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+n,this.getDate(t));return this.getMonth(a)!=((this.getMonth(t)+n)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(t,n){return this._createDateWithOverflow(this.getYear(t),this.getMonth(t),this.getDate(t)+n)}toIso8601(t){return[t.getUTCFullYear(),this._2digit(t.getUTCMonth()+1),this._2digit(t.getUTCDate())].join("-")}deserialize(t){if(typeof t=="string"){if(!t)return null;if(Ba.test(t)){let n=new Date(t);if(this.isValid(n))return n}}return super.deserialize(t)}isDateInstance(t){return t instanceof Date}isValid(t){return!isNaN(t.getTime())}invalid(){return new Date(NaN)}setTime(t,n,a,r){let l=this.clone(t);return l.setHours(n,a,r,0),l}getHours(t){return t.getHours()}getMinutes(t){return t.getMinutes()}getSeconds(t){return t.getSeconds()}parseTime(t,n){if(typeof t!="string")return t instanceof Date?new Date(t.getTime()):null;let a=t.trim();if(a.length===0)return null;let r=this._parseTimeString(a);if(r===null){let l=a.replace(/[^0-9:(AM|PM)]/gi,"").trim();l.length>0&&(r=this._parseTimeString(l))}return r||this.invalid()}addSeconds(t,n){return new Date(t.getTime()+n*1e3)}_createDateWithOverflow(t,n,a){let r=new Date;return r.setFullYear(t,n,a),r.setHours(0,0,0,0),r}_2digit(t){return("00"+t).slice(-2)}_format(t,n){let a=new Date;return a.setUTCFullYear(n.getFullYear(),n.getMonth(),n.getDate()),a.setUTCHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),t.format(a)}_parseTimeString(t){let n=t.toUpperCase().match(Ua);if(n){let a=parseInt(n[1]),r=parseInt(n[2]),l=n[3]==null?void 0:parseInt(n[3]),N=n[4];if(a===12?a=N==="AM"?0:a:N==="PM"&&(a+=12),Zt(a,0,23)&&Zt(r,0,59)&&(l==null||Zt(l,0,59)))return this.setTime(this.today(),a,r,l||0)}return null}static \u0275fac=function(n){return new(n||e)};static \u0275prov=Se({token:e,factory:e.\u0275fac})}return e})();function Zt(e,i,t){return!isNaN(e)&&e>=i&&e<=t}var Ha={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function zn(e=Ha){return[{provide:Ut,useClass:Ga},{provide:qi,useValue:e}]}var Va=["*",[["mat-toolbar-row"]]],Wa=["*","mat-toolbar-row"],ja=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=H({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),Fn=(()=>{class e{_elementRef=o(F);_platform=o(ce);_document=o(Ie);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=b({type:e,selectors:[["mat-toolbar"]],contentQueries:function(n,a,r){if(n&1&&le(r,ja,5),n&2){let l;w(l=x())&&(a._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,a){n&2&&(it(a.color?"mat-"+a.color:""),v("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Wa,decls:2,vars:0,template:function(n,a){n&1&&(E(Va),f(0),f(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return e})();var Bn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=U({imports:[Q]})}return e})();var pt=["*"],Ka=["content"],Ya=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Qa=["mat-drawer","mat-drawer-content","*"];function qa(e,i){if(e&1){let t=he();c(0,"div",1),k("click",function(){ae(t);let a=D();return re(a._onBackdropClicked())}),d()}if(e&2){let t=D();v("mat-drawer-shown",t._isShowingBackdrop())}}function Xa(e,i){e&1&&(c(0,"mat-drawer-content"),f(1,2),d())}var Ja=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],er=["mat-sidenav","mat-sidenav-content","*"];function tr(e,i){if(e&1){let t=he();c(0,"div",1),k("click",function(){ae(t);let a=D();return re(a._onBackdropClicked())}),d()}if(e&2){let t=D();v("mat-drawer-shown",t._isShowingBackdrop())}}function ir(e,i){e&1&&(c(0,"mat-sidenav-content"),f(1,2),d())}var nr=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var ar=new Z("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Qt=new Z("MAT_DRAWER_CONTAINER"),mt=(()=>{class e extends Ce{_platform=o(ce);_changeDetectorRef=o(fe);_container=o(Yt);constructor(){let t=o(F),n=o(un),a=o(se);super(t,n,a)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:n}=this._container;return t!=null&&t.mode!=="over"&&t.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=b({type:e,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,a){n&2&&(tt("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px"),v("mat-drawer-content-hidden",a._shouldBeHidden()))},features:[Y([{provide:Ce,useExisting:e}]),K],ngContentSelectors:pt,decls:1,vars:0,template:function(n,a){n&1&&(E(),f(0))},encapsulation:2,changeDetection:0})}return e})(),Kt=(()=>{class e{_elementRef=o(F);_focusTrapFactory=o(tn);_focusMonitor=o(at);_platform=o(ce);_ngZone=o(se);_renderer=o(Ft);_interactivityChecker=o(en);_doc=o(Ie);_container=o(Qt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=P(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=P(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(P(t))}_opened=z(!1);_openedVia=null;_animationStarted=new J;_animationEnd=new J;openedChange=new oe(!0);_openedStream=this.openedChange.pipe(Ue(t=>t),Et(()=>{}));openedStart=this._animationStarted.pipe(Ue(()=>this.opened),Rt(void 0));_closedStream=this.openedChange.pipe(Ue(t=>!t),Et(()=>{}));closedStart=this._animationStarted.pipe(Ue(()=>!this.opened),Rt(void 0));_destroyed=new J;onPositionChanged=new oe;_content;_modeChanged=new J;_injector=o(pe);_changeDetectorRef=o(fe);constructor(){this.openedChange.pipe($(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,n=this._elementRef.nativeElement;return[t.listen(n,"keydown",a=>{a.keyCode===27&&!this.disableClose&&!nn(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),t.listen(n,"transitionend",this._handleTransitionEvent),t.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,n){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{r(),l(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",a),l=this._renderer.listen(t,"mousedown",a)})),t.focus(n)}_focusByCssSelector(t,n){let a=this._elementRef.nativeElement.querySelector(t);a&&this._forceFocus(a,n)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":zt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,n){t&&n&&(this._openedVia=n);let a=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),a}_setOpen(t,n,a){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&n&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(wi(1)).subscribe(l=>r(l?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,a=n.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),a.insertBefore(this._anchor,n)),a.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=t=>{let n=this._elementRef.nativeElement;t.target===n&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=b({type:e,selectors:[["mat-drawer"]],viewQuery:function(n,a){if(n&1&&ge(Ka,5),n&2){let r;w(r=x())&&(a._content=r.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,a){n&2&&(I("align",null)("tabIndex",a.mode!=="side"?"-1":null),tt("visibility",!a._container&&!a.opened?"hidden":null),v("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:pt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(E(),c(0,"div",1,0),f(2),d())},dependencies:[Ce],encapsulation:2,changeDetection:0})}return e})(),Yt=(()=>{class e{_dir=o(ln,{optional:!0});_element=o(F);_ngZone=o(se);_changeDetectorRef=o(fe);_animationDisabled=De();_transitionsEnabled=!1;_allDrawers;_drawers=new Ci;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=P(t)}_autosize=o(ar);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:P(t)}_backdropOverride=null;backdropClick=new oe;_start=null;_end=null;_left=null;_right=null;_destroyed=new J;_doCheckSubject=new J;_contentMargins={left:null,right:null};_contentMarginChanges=new J;get scrollable(){return this._userContent||this._content}_injector=o(pe);constructor(){let t=o(ce),n=o(pn);this._dir?.change.pipe($(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe($(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Mt(this._allDrawers),$(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Mt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(yi(10),$(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let a=this._left._getWidth();t+=a,n-=a}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let a=this._right._getWidth();n+=a,t-=a}}t=t||null,n=n||null,(t!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:t,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe($(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe($(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe($(this._drawers.changes)).subscribe(()=>{zt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe($(Xe(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let n=this._element.nativeElement.classList,a="mat-drawer-container-has-open";t?n.add(a):n.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=b({type:e,selectors:[["mat-drawer-container"]],contentQueries:function(n,a,r){if(n&1&&le(r,mt,5)(r,Kt,5),n&2){let l;w(l=x())&&(a._content=l.first),w(l=x())&&(a._allDrawers=l)}},viewQuery:function(n,a){if(n&1&&ge(mt,5),n&2){let r;w(r=x())&&(a._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,a){n&2&&v("mat-drawer-container-explicit-backdrop",a._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Y([{provide:Qt,useExisting:e}])],ngContentSelectors:Qa,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(E(Ya),A(0,qa,1,2,"div",0),f(1),f(2,1),A(3,Xa,2,0,"mat-drawer-content")),n&2&&(S(a.hasBackdrop?0:-1),m(3),S(a._content?-1:3))},dependencies:[mt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return e})(),ut=(()=>{class e extends mt{static \u0275fac=(()=>{let t;return function(a){return(t||(t=ee(e)))(a||e)}})();static \u0275cmp=b({type:e,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Y([{provide:Ce,useExisting:e}]),K],ngContentSelectors:pt,decls:1,vars:0,template:function(n,a){n&1&&(E(),f(0))},encapsulation:2,changeDetection:0})}return e})(),qt=(()=>{class e extends Kt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=P(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=je(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=je(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(a){return(t||(t=ee(e)))(a||e)}})();static \u0275cmp=b({type:e,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,a){n&2&&(I("tabIndex",a.mode!=="side"?"-1":null)("align",null),tt("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),v("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side")("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Y([{provide:Kt,useExisting:e}]),K],ngContentSelectors:pt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(E(),c(0,"div",1,0),f(2),d())},dependencies:[Ce],encapsulation:2,changeDetection:0})}return e})(),Un=(()=>{class e extends Yt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(a){return(t||(t=ee(e)))(a||e)}})();static \u0275cmp=b({type:e,selectors:[["mat-sidenav-container"]],contentQueries:function(n,a,r){if(n&1&&le(r,ut,5)(r,qt,5),n&2){let l;w(l=x())&&(a._content=l.first),w(l=x())&&(a._allDrawers=l)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,a){n&2&&v("mat-drawer-container-explicit-backdrop",a._backdropOverride)},exportAs:["matSidenavContainer"],features:[Y([{provide:Qt,useExisting:e},{provide:Yt,useExisting:e}]),K],ngContentSelectors:er,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(E(Ja),A(0,tr,1,2,"div",0),f(1),f(2,1),A(3,ir,2,0,"mat-sidenav-content")),n&2&&(S(a.hasBackdrop?0:-1),m(3),S(a._content?-1:3))},dependencies:[ut],styles:[nr],encapsulation:2,changeDetection:0})}return e})(),Gn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=U({imports:[Gt,Q,Gt]})}return e})();var Hn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=U({imports:[Q]})}return e})();var or=["*"],sr=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,lr=["unscopedContent"],cr=["text"],dr=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],mr=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ur=new Z("ListOption"),Jt=(()=>{class e{_elementRef=o(F);constructor(){}static \u0275fac=function(n){return new(n||e)};static \u0275dir=H({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),pr=(()=>{class e{_elementRef=o(F);constructor(){}static \u0275fac=function(n){return new(n||e)};static \u0275dir=H({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),hr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=H({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),Vn=(()=>{class e{_listOption=o(ur,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||e)};static \u0275dir=H({type:e,hostVars:4,hostBindings:function(n,a){n&2&&v("mdc-list-item__start",a._isAlignedAtStart())("mdc-list-item__end",!a._isAlignedAtStart())}})}return e})(),gr=(()=>{class e extends Vn{static \u0275fac=(()=>{let t;return function(a){return(t||(t=ee(e)))(a||e)}})();static \u0275dir=H({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[K]})}return e})(),ei=(()=>{class e extends Vn{static \u0275fac=(()=>{let t;return function(a){return(t||(t=ee(e)))(a||e)}})();static \u0275dir=H({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[K]})}return e})(),fr=new Z("MAT_LIST_CONFIG"),Xt=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=P(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(P(t))}_disabled=z(!1);_defaultOptions=o(fr,{optional:!0});static \u0275fac=function(n){return new(n||e)};static \u0275dir=H({type:e,hostVars:1,hostBindings:function(n,a){n&2&&I("aria-disabled",a.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),br=(()=>{class e{_elementRef=o(F);_ngZone=o(se);_listBase=o(Xt,{optional:!0});_platform=o(ce);_hostElement;_isButtonElement;_noopAnimations=De();_avatars;_icons;set lines(t){this._explicitLines=je(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=P(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(P(t))}_disabled=z(!1);_subscriptions=new fi;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){o(rt).load(ot);let t=o(on,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new rn(this,this._ngZone,this._hostElement,this._platform,o(pe)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Xe(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),a=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&n===1;a.classList.toggle("mdc-list-item__primary-text",r),a.classList.toggle("mdc-list-item__secondary-text",!r)}else a.classList.remove("mdc-list-item__primary-text"),a.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(n){return new(n||e)};static \u0275dir=H({type:e,contentQueries:function(n,a,r){if(n&1&&le(r,gr,4)(r,ei,4),n&2){let l;w(l=x())&&(a._avatars=l),w(l=x())&&(a._icons=l)}},hostVars:4,hostBindings:function(n,a){n&2&&(I("aria-disabled",a.disabled)("disabled",a._isButtonElement&&a.disabled||null),v("mdc-list-item--disabled",a.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var Wn=(()=>{class e extends br{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=P(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(a){return(t||(t=ee(e)))(a||e)}})();static \u0275cmp=b({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,a,r){if(n&1&&le(r,pr,5)(r,Jt,5)(r,hr,5),n&2){let l;w(l=x())&&(a._lines=l),w(l=x())&&(a._titles=l),w(l=x())&&(a._meta=l)}},viewQuery:function(n,a){if(n&1&&ge(lr,5)(cr,5),n&2){let r;w(r=x())&&(a._unscopedContent=r.first),w(r=x())&&(a._itemText=r.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,a){n&2&&(I("aria-current",a._getAriaCurrent()),v("mdc-list-item--activated",a.activated)("mdc-list-item--with-leading-avatar",a._avatars.length!==0)("mdc-list-item--with-leading-icon",a._icons.length!==0)("mdc-list-item--with-trailing-meta",a._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",a._hasBothLeadingAndTrailing())("_mat-animation-noopable",a._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[K],ngContentSelectors:mr,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,a){n&1&&(E(dr),f(0),c(1,"span",1),f(2,1),f(3,2),c(4,"span",2,0),k("cdkObserveContent",function(){return a._updateItemLines(!0)}),f(6,3),d()(),f(7,4),f(8,5),O(9,"div",3))},dependencies:[Xi],encapsulation:2,changeDetection:0})}return e})();var jn=(()=>{class e extends Xt{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(a){return(t||(t=ee(e)))(a||e)}})();static \u0275cmp=b({type:e,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Y([{provide:Xt,useExisting:e}]),K],ngContentSelectors:or,decls:1,vars:0,template:function(n,a){n&1&&(E(),f(0))},styles:[sr],encapsulation:2,changeDetection:0})}return e})();var $n=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=U({imports:[Ji,cn,dn,Q,Hn]})}return e})();var _e=[{label:"\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457",icon:"domain",route:"organizations",description:"\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043B\u0456\u043D\u0456\u043A \u0456\u0437 \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u043C \u0434\u0456\u0457 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438, \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u043C, \u0442\u0430\u0440\u0438\u0444\u043E\u043C \u0456 \u0431\u043E\u0440\u0433\u043E\u043C; \u043F\u043B\u0438\u0442\u043A\u0438 \xAB\u0441\u043F\u043B\u0438\u0432\u0430\u0454 \u0437\u0430 7 \u0434\u043D\u0456\u0432\xBB, \xAB\u043F\u0440\u043E\u0441\u0442\u0440\u043E\u0447\u0435\u043D\u0456\xBB, \xAB\u043D\u0430 \u0442\u0440\u0456\u0430\u043B\u0456\xBB.",task:"T14.3, T14.4"},{label:"\u0410\u043A\u0430\u0443\u043D\u0442\u0438",icon:"group",route:"accounts",description:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456, \u0437\u0433\u0440\u0443\u043F\u043E\u0432\u0430\u043D\u0456 \u043F\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F\u0445: \u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 (read-only + \u0435\u043A\u0441\u043F\u043E\u0440\u0442) \u0456 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0430 \u0432\u0445\u043E\u0434\u0443 \u043E\u043A\u0440\u0435\u043C\u043E\u043C\u0443 \u0430\u043A\u0430\u0443\u043D\u0442\u0443.",task:"T14.6"},{label:"\u0413\u0440\u0430\u043D\u0442\u0438",icon:"card_giftcard",route:"grants",description:"\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0443: \u0442\u0438\u043F, \u0434\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0439 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u2014 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0456; \u0440\u0435\u0454\u0441\u0442\u0440 \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0445 \u0433\u0440\u0430\u043D\u0442\u0456\u0432 \u0456 \u0434\u043E\u0441\u0442\u0440\u043E\u043A\u043E\u0432\u0435 \u0432\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u043D\u043D\u044F.",task:"T14.5"},{label:"\u0424\u0456\u043D\u0430\u043D\u0441\u0438",icon:"receipt_long",route:"finance",description:"\u0420\u0430\u0445\u0443\u043D\u043A\u0438, \u0440\u0443\u0447\u043D\u0435 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0431\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u043A\u0430\u0437\u0443 \u0437 \u0430\u0432\u0442\u043E\u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F\u043C \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438, \u043F\u043B\u0430\u0442\u0435\u0436\u0456 \u0442\u0430 \u043C\u0435\u0442\u0440\u0438\u043A\u0438 (MRR, \u0442\u0440\u0456\u0430\u043B\u0438, \u0432\u0456\u0434\u0442\u0456\u043A).",task:"T14.8\u2013T14.10"},{label:"\u0410\u0443\u0434\u0438\u0442",icon:"history",route:"audit",description:"Append-only \u0436\u0443\u0440\u043D\u0430\u043B \u043A\u0435\u0440\u0456\u0432\u043D\u0438\u0445 \u0434\u0456\u0439: \u0437\u043C\u0456\u043D\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0443, \u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F, \u0433\u0440\u0430\u043D\u0442\u0438, \u0440\u0443\u0447\u043D\u0456 \u043E\u043F\u043B\u0430\u0442\u0438, \u0432\u0445\u043E\u0434\u0438 \u0432 \u0431\u0435\u043A-\u043E\u0444\u0456\u0441.",task:"T14.7"},{label:"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0438",icon:"admin_panel_settings",route:"staff",description:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u0431\u0435\u043A-\u043E\u0444\u0456\u0441\u0443 \u0439 \u0440\u043E\u043B\u0456 SUPPORT / BILLING / OWNER, \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0430 2FA, \u0441\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044F \u0456\u043D\u0448\u0438\u043C OWNER.",task:"T14.11"}];var yr=e=>["/",e],wr=(e,i)=>i.route;function xr(e,i){if(e&1&&p(0),e&2){let t=D();He(" ",t.operatorName()," ")}}function kr(e,i){e&1&&(c(0,"div",8),p(1),d()),e&2&&(m(),He("\u0420\u043E\u043B\u044C: ",i))}function Ar(e,i){if(e&1&&(c(0,"span",16),p(1),d()),e&2){let t=D().$implicit;m(),B(t.label)}}function Sr(e,i){if(e&1){let t=he();c(0,"a",14),k("click",function(){ae(t);let a=D();return re(a.onNavigate())}),c(1,"mat-icon",15),p(2),d(),A(3,Ar,2,1,"span",16),d()}if(e&2){let t=i.$implicit,n=D();M("routerLink",Ni(4,yr,t.route))("matTooltip",n.collapsed()&&!n.isPhone()?t.label:""),m(2),B(t.icon),m(),S(!n.collapsed()||n.isPhone()?3:-1)}}var ht=class e{responsive=o(In);session=o(te);logoutService=o(Dn);menu=_e;isPhone=this.responsive.isPhone;collapsed=z(!1);mobileOpen=z(!1);opened=Ve(()=>this.isPhone()?this.mobileOpen():!0);operatorName=this.session.operatorName;operatorRole=Ve(()=>this.session.profile()?.role??null);logout(){this.logoutService.logout()}toggleMenu(){if(this.isPhone()){this.mobileOpen.update(i=>!i);return}this.collapsed.update(i=>!i)}onNavigate(){this.isPhone()&&this.mobileOpen.set(!1)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=b({type:e,selectors:[["admin-layout"]],decls:29,vars:9,consts:[["operatorMenu","matMenu"],[1,"admin-shell"],["color","primary",1,"admin-header"],["mat-icon-button","","type","button",3,"click"],[1,"admin-brand"],[1,"admin-brand__suffix"],[1,"admin-header__spacer"],["mat-button","","type","button",3,"matMenuTriggerFor"],[1,"admin-header__role","hint"],["mat-menu-item","","type","button",3,"click"],[1,"admin-body",3,"hasBackdrop"],[1,"admin-sidenav",3,"closedStart","mode","opened"],["mat-list-item","","routerLinkActive","active","matTooltipPosition","right",3,"routerLink","matTooltip"],[1,"admin-content"],["mat-list-item","","routerLinkActive","active","matTooltipPosition","right",3,"click","routerLink","matTooltip"],["matListItemIcon",""],["matListItemTitle",""]],template:function(t,n){if(t&1&&(c(0,"div",1)(1,"mat-toolbar",2)(2,"button",3),k("click",function(){return n.toggleMenu()}),c(3,"mat-icon"),p(4,"menu"),d()(),c(5,"span",4),p(6," Med\xA0Vision"),c(7,"span",5),p(8,"\u0431\u0435\u043A-\u043E\u0444\u0456\u0441"),d()(),O(9,"span",6),c(10,"button",7)(11,"mat-icon"),p(12,"account_circle"),d(),A(13,xr,1,1),d(),c(14,"mat-menu",null,0),A(16,kr,2,1,"div",8),c(17,"button",9),k("click",function(){return n.logout()}),c(18,"mat-icon"),p(19,"logout"),d(),c(20,"span"),p(21,"\u0412\u0438\u0439\u0442\u0438"),d()()()(),c(22,"mat-sidenav-container",10)(23,"mat-sidenav",11),k("closedStart",function(){return n.onNavigate()}),c(24,"mat-nav-list"),Je(25,Sr,4,6,"a",12,wr),d()(),c(27,"mat-sidenav-content",13),O(28,"router-outlet"),d()()()),t&2){let a,r=Ge(15);m(2),I("aria-label",n.collapsed()?"\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u043C\u0435\u043D\u044E":"\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u043C\u0435\u043D\u044E"),m(8),M("matMenuTriggerFor",r),m(3),S(n.isPhone()?-1:13),m(3),S((a=n.operatorRole())?16:-1,a),m(6),M("hasBackdrop",n.isPhone()),m(),v("admin-sidenav--collapsed",n.collapsed()&&!n.isPhone()),M("mode",n.isPhone()?"over":"side")("opened",n.opened()),m(2),et(n.menu)}},dependencies:[Zi,Ki,nt,Bn,Fn,Gn,qt,Un,ut,Te,Ee,lt,bn,st,$n,jn,Wn,ei,Jt,kn,wn,yn,xn,Sn,An],styles:["[_nghost-%COMP%]{display:block;height:100dvh}.admin-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.admin-header[_ngcontent-%COMP%]{flex:0 0 auto;gap:var(--mv-gap-sm);background:var(--mat-sys-primary);color:var(--mat-sys-on-primary)}.admin-brand[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;gap:var(--mv-gap-sm);font-size:16px;font-weight:500}.admin-brand__suffix[_ngcontent-%COMP%]{padding:2px 8px;border-radius:var(--mv-radius-sm);background:var(--mat-sys-tertiary);color:var(--mat-sys-on-tertiary);font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:.04em}.admin-header__spacer[_ngcontent-%COMP%]{flex:1 1 auto}.admin-header__role[_ngcontent-%COMP%]{padding:var(--mv-gap-xs) var(--mv-gap-lg)}.admin-body[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;background:var(--mat-sys-background)}.admin-sidenav[_ngcontent-%COMP%]{width:var(--mv-w-220);border-right:var(--mv-border);transition:width .15s ease}.admin-sidenav--collapsed[_ngcontent-%COMP%]{width:64px}.admin-sidenav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:var(--mat-sys-secondary-container);color:var(--mat-sys-on-secondary-container)}.admin-content[_ngcontent-%COMP%]{height:100%;overflow:auto}"]})};var Kn="MV_ADMIN_MOCK_MODE",de=class e{_mockMode=z(Ir());isMockModeActive=this._mockMode.asReadonly();setMockMode(i){this._mockMode.set(i),sessionStorage.setItem(Kn,JSON.stringify(i))}toggleMockMode(){this.setMockMode(!this._mockMode())}static \u0275fac=function(t){return new(t||e)};static \u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"})};function Ir(){let e=sessionStorage.getItem(Kn);return e===null?!0:e==="true"}function Dr(e,i){e&1&&(c(0,"p",4),p(1,"\u041C\u043E\u043A-\u0440\u0435\u0436\u0438\u043C \u0443\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E \u2014 \u0434\u0430\u043D\u0456 \u0432\u0456\u0434\u0434\u0430\u044E\u0442\u044C \u043C\u043E\u043A\u0438 \u0431\u0435\u043A-\u043E\u0444\u0456\u0441\u0443"),d())}var gt=class e{route=Fi.required();mockConfig=o(de);mockMode=this.mockConfig.isMockModeActive;item=Ve(()=>_e.find(i=>i.route===this.route()));static \u0275fac=function(t){return new(t||e)};static \u0275cmp=b({type:e,selectors:[["admin-section-stub"]],inputs:{route:[1,"route"]},decls:10,vars:5,consts:[[1,"stub"],[1,"stub__icon"],[1,"stub__text"],[1,"stub__task"],[1,"stub__mock"]],template:function(t,n){if(t&1&&(c(0,"section",0)(1,"mat-icon",1),p(2),d(),c(3,"h1"),p(4),d(),c(5,"p",2),p(6),d(),c(7,"p",3),p(8),d(),A(9,Dr,2,0,"p",4),d()),t&2){let a,r,l,N;m(2),B(((a=n.item())==null?null:a.icon)??"construction"),m(2),B(((r=n.item())==null?null:r.label)??"\u0420\u043E\u0437\u0434\u0456\u043B"),m(2),B((l=n.item())==null?null:l.description),m(2),He("\u041D\u0430\u043F\u043E\u0432\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0437\u0430\u0434\u0430\u0447\u0435\u044E ",(N=n.item())==null?null:N.task),m(),S(n.mockMode()?9:-1)}},dependencies:[Te,Ee],styles:[".stub[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--mv-gap-sm);height:100%;padding:var(--mv-pad-page);text-align:center;color:var(--mv-text-muted)}.stub__icon.mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:var(--mat-sys-outline)}.stub[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:var(--mat-sys-on-surface)}.stub__text[_ngcontent-%COMP%]{max-width:520px;margin:0}.stub__task[_ngcontent-%COMP%], .stub__mock[_ngcontent-%COMP%]{margin:0;font-size:12px}.stub__task[_ngcontent-%COMP%]{color:var(--mat-sys-primary)}"]})};var Yn=()=>{let e=o(te),i=o(Bt);return e.isAuthenticated()?(e.touch(),!0):i.createUrlTree(["/login"])},Qn=()=>{let e=o(te),i=o(Bt);return e.isAuthenticated()?i.createUrlTree(["/"]):!0};var Cr={organizations:()=>import("./chunk-AXUL4SCS.js").then(e=>e.ORGANIZATIONS_ROUTES)},qn=[{path:"login",canActivate:[Qn],loadChildren:()=>import("./chunk-SOTU23ZH.js").then(e=>e.ADMIN_AUTH_ROUTES)},{path:"",component:ht,canActivate:[Yn],children:[..._e.map(e=>{let i=Cr[e.route];return i?{path:e.route,loadChildren:i}:{path:e.route,component:gt,data:{route:e.route}}}),{path:"",pathMatch:"full",redirectTo:_e[0].route}]},{path:"**",redirectTo:""}];var Xn=[],Er=0;function Me(e){let i=y(h({},e),{id:`audit-${++Er}`,createdAt:e.createdAt??new Date().toISOString()});return Xn.push(i),i}function Tr(e){return Xn.filter(i=>{if(e.organizationId&&i.organizationId!==e.organizationId||e.actorId&&i.actorId!==e.actorId||e.action&&i.action!==e.action)return!1;let t=i.createdAt.slice(0,10);return!(e.from&&t<e.from||e.to&&t>e.to)}).reverse()}var Jn=[{method:"GET",pattern:/^\/api\/v1\/admin\/audit-events$/,handle:e=>({status:200,body:Tr({organizationId:e.params.get("organizationId"),actorId:e.params.get("actorId"),action:e.params.get("action"),from:e.params.get("from"),to:e.params.get("to")})})}];var ve="org-zir",Rr=ve;function me(){return Rr}function Mr(){return`branch-${Math.random().toString(36).slice(2,10)}`}function q(e){return{id:e.id??Mr(),organizationId:e.organizationId??ve,name:e.name,shortName:e.shortName??e.name,isMain:e.isMain??!1,isVirtual:e.isVirtual??!1,dataExchangeAt:e.dataExchangeAt??null,cardexExchangeAt:e.cardexExchangeAt??null,workStartGlassesAt:e.workStartGlassesAt??null,workStartMclAt:e.workStartMclAt??null,sendCardex:e.sendCardex??!1,receiveCardex:e.receiveCardex??!1,doNotSendAddresses:e.doNotSendAddresses??!1,stopWork:e.stopWork??!1,editDirectoriesMcl:e.editDirectoriesMcl??!1,editDirectoriesGlasses:e.editDirectoriesGlasses??!1,doNotEditCardex:e.doNotEditCardex??!1,downloadCatalogPath:e.downloadCatalogPath??"",uploadCatalogPath:e.uploadCatalogPath??"",address:e.address??"",access:e.access??"",workHoursMon:e.workHoursMon??0,workHoursTue:e.workHoursTue??0,workHoursWed:e.workHoursWed??0,workHoursThu:e.workHoursThu??0,workHoursFri:e.workHoursFri??0,workHoursSat:e.workHoursSat??0,workHoursSun:e.workHoursSun??0,notes:e.notes??"",isDeleted:e.isDeleted??!1}}var Oe=[q({id:"branch-main",name:"\u041A\u043B\u0456\u043D\u0456\u043A\u0430",shortName:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435",isMain:!0,dataExchangeAt:"2013-12-25T00:00:00.000Z",cardexExchangeAt:null,workStartMclAt:"2005-01-01T00:00:00.000Z",sendCardex:!1,editDirectoriesMcl:!0,editDirectoriesGlasses:!0,address:"\u0432\u0443\u043B. \u0413\u043E\u043B\u043E\u0432\u043D\u0430, 1",access:"\u041F\u043E\u0432\u043D\u0438\u0439",workHoursMon:8,workHoursTue:8,workHoursWed:8,workHoursThu:8,workHoursFri:8,workHoursSat:8,workHoursSun:0,notes:"\u0413\u043E\u043B\u043E\u0432\u043D\u0430 \u0444\u0456\u043B\u0456\u044F (\u0413\u0420\u041C) \u2014 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u043E\u0432\u0456\u0434\u043D\u0438\u043A\u0456\u0432 \u0456 \u0446\u0435\u043D\u0442\u0440 \u043E\u0431\u043C\u0456\u043D\u0443."}),q({id:"branch-optika",name:"\u041E\u043F\u0442\u0438\u043A\u0430",shortName:"\u041E\u041F\u0422",dataExchangeAt:"2018-11-23T14:34:29.000Z",cardexExchangeAt:"2018-11-23T14:34:29.000Z",workStartGlassesAt:"2010-06-01T00:00:00.000Z",sendCardex:!0,receiveCardex:!0,downloadCatalogPath:"C:\\ARMO\\exchange\\in",uploadCatalogPath:"C:\\ARMO\\exchange\\out",address:"\u0432\u0443\u043B. \u041E\u043F\u0442\u0438\u0447\u043D\u0430, 5",access:"\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u0438\u0439",workHoursMon:9,workHoursTue:9,workHoursWed:9,workHoursThu:9,workHoursFri:9,workHoursSat:5,workHoursSun:0}),q({id:"branch-astrakhan",name:"\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043D\u044C",shortName:"\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043D\u044C",dataExchangeAt:"2016-11-07T15:12:44.000Z",sendCardex:!0,stopWork:!0,address:"\u0432\u0443\u043B. \u041F\u0440\u0438\u043C\u043E\u0440\u0441\u044C\u043A\u0430, 12"}),q({id:"branch-volgograd",name:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434",shortName:"\u0412\u043E\u043B\u0433\u043E\u0433\u0440\u0430\u0434",dataExchangeAt:"2016-11-03T16:36:00.000Z",isVirtual:!0,doNotSendAddresses:!0,doNotEditCardex:!0}),q({id:"branch-optima-lviv",organizationId:"org-optima",name:"\u041E\u043F\u0442\u0438\u043C\u0430 \u041B\u044C\u0432\u0456\u0432",shortName:"\u041E\u041F\u0422-\u041B\u0412",isMain:!0,address:"\u043C. \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u041E\u043F\u0442\u0438\u0447\u043D\u0430, 5"}),q({id:"branch-vizor-odesa",organizationId:"org-vizor",name:"\u0412\u0456\u0437\u043E\u0440 \u041E\u0434\u0435\u0441\u0430",shortName:"\u0412\u0417\u0420-\u041E\u0414",isMain:!0,address:"\u043C. \u041E\u0434\u0435\u0441\u0430, \u0432\u0443\u043B. \u041F\u0440\u0438\u043C\u043E\u0440\u0441\u044C\u043A\u0430, 12"}),q({id:"branch-lumina-nauky",organizationId:"org-lumina",name:"\u041B\u044E\u043C\u0456\u043D\u0430 \u041D\u0430\u0443\u043A\u043E\u0432\u0430",shortName:"\u041B\u041C\u041D-\u041D\u041A",isMain:!0,address:"\u043C. \u0425\u0430\u0440\u043A\u0456\u0432, \u043F\u0440\u043E\u0441\u043F. \u041D\u0430\u0443\u043A\u0438, 42"}),q({id:"branch-lumina-center",organizationId:"org-lumina",name:"\u041B\u044E\u043C\u0456\u043D\u0430 \u0426\u0435\u043D\u0442\u0440",shortName:"\u041B\u041C\u041D-\u0426\u041D",address:"\u043C. \u0425\u0430\u0440\u043A\u0456\u0432, \u0432\u0443\u043B. \u0421\u0443\u043C\u0441\u044C\u043A\u0430, 3"}),q({id:"branch-fokus-sichova",organizationId:"org-fokus",name:"\u0424\u043E\u043A\u0443\u0441 \u0421\u0456\u0447\u043E\u0432\u0430",shortName:"\u0424\u041A\u0421-\u0421\u0427",isMain:!0,address:"\u043C. \u0414\u043D\u0456\u043F\u0440\u043E, \u0432\u0443\u043B. \u0421\u0456\u0447\u043E\u0432\u0430, 8"})];function ea(e){return{id:e.id,organizationId:e.organizationId,name:e.name,shortName:e.shortName,isMain:e.isMain,isVirtual:e.isVirtual,dataExchangeAt:e.dataExchangeAt,cardexExchangeAt:e.cardexExchangeAt,workStartGlassesAt:e.workStartGlassesAt,workStartMclAt:e.workStartMclAt,sendCardex:e.sendCardex,receiveCardex:e.receiveCardex,doNotSendAddresses:e.doNotSendAddresses,stopWork:e.stopWork,editDirectoriesMcl:e.editDirectoriesMcl,editDirectoriesGlasses:e.editDirectoriesGlasses,doNotEditCardex:e.doNotEditCardex,downloadCatalogPath:e.downloadCatalogPath,uploadCatalogPath:e.uploadCatalogPath,address:e.address,access:e.access,workHoursMon:e.workHoursMon,workHoursTue:e.workHoursTue,workHoursWed:e.workHoursWed,workHoursThu:e.workHoursThu,workHoursFri:e.workHoursFri,workHoursSat:e.workHoursSat,workHoursSun:e.workHoursSun,isDeleted:e.isDeleted}}function ta(e,i){e.name=i.name,e.shortName=i.shortName,e.isMain=i.isMain,e.isVirtual=i.isVirtual,e.dataExchangeAt=i.dataExchangeAt,e.cardexExchangeAt=i.cardexExchangeAt,e.workStartGlassesAt=i.workStartGlassesAt,e.workStartMclAt=i.workStartMclAt,e.sendCardex=i.sendCardex,e.receiveCardex=i.receiveCardex,e.doNotSendAddresses=i.doNotSendAddresses,e.stopWork=i.stopWork,e.editDirectoriesMcl=i.editDirectoriesMcl,e.editDirectoriesGlasses=i.editDirectoriesGlasses,e.doNotEditCardex=i.doNotEditCardex,e.downloadCatalogPath=i.downloadCatalogPath,e.uploadCatalogPath=i.uploadCatalogPath,e.address=i.address,e.access=i.access,e.workHoursMon=i.workHoursMon,e.workHoursTue=i.workHoursTue,e.workHoursWed=i.workHoursWed,e.workHoursThu=i.workHoursThu,e.workHoursFri=i.workHoursFri,e.workHoursSat=i.workHoursSat,e.workHoursSun=i.workHoursSun,e.notes=i.notes}function ia(e,i){for(let t of Oe)t.organizationId===e&&t.id!==i&&(t.isMain=!1)}function na(e){return e.organizationId===me()}var W={list(e){let i=e.search.trim().toLowerCase();return Oe.filter(t=>!(!na(t)||!e.includeDeleted&&t.isDeleted||i&&!`${t.name} ${t.shortName}`.toLowerCase().includes(i))).map(ea)},get(e){return Oe.find(i=>i.id===e&&na(i))},countByOrganization(e){return Oe.filter(i=>i.organizationId===e&&!i.isDeleted).length},listByOrganization(e,i=!1){return Oe.filter(t=>t.organizationId===e&&(i||!t.isDeleted)).map(ea)},create(e){let i=q({name:e.name,organizationId:me()});return ta(i,e),Oe.push(i),i.isMain&&ia(i.organizationId,i.id),i},update(e,i){let t=this.get(e);if(t)return ta(t,i),t.isMain&&ia(t.organizationId,t.id),t},setDeleted(e,i){let t=this.get(e);t&&(t.isDeleted=i)}};function Or(){return`org-${Math.random().toString(36).slice(2,10)}`}function Pe(e){return{id:e.id??Or(),name:e.name,legalName:e.legalName??e.name,edrpou:e.edrpou??"",vatNumber:e.vatNumber??"",legalAddress:e.legalAddress??"",iban:e.iban??"",contactPerson:e.contactPerson??"",contactEmail:e.contactEmail??"",contactPhone:e.contactPhone??"",status:e.status??"TRIAL",ownerUserId:e.ownerUserId??null,notes:e.notes??"",createdAt:e.createdAt??new Date().toISOString(),isDeleted:e.isDeleted??!1}}var ii=[Pe({id:ve,name:"\u041A\u043B\u0456\u043D\u0456\u043A\u0430 \u0417\u0456\u0440",legalName:"\u0422\u041E\u0412 \xAB\u041A\u043B\u0456\u043D\u0456\u043A\u0430 \u0417\u0456\u0440\xBB",edrpou:"40123456",vatNumber:"401234512345",legalAddress:"\u043C. \u041A\u0438\u0457\u0432, \u0432\u0443\u043B. \u0413\u043E\u043B\u043E\u0432\u043D\u0430, 1",iban:"UA213223130000026007233566001",contactPerson:"\u0406\u0432\u0430\u043D\u0435\u043D\u043A\u043E \u041E\u043B\u044C\u0433\u0430 \u041F\u0435\u0442\u0440\u0456\u0432\u043D\u0430",contactEmail:"office@zir.example",contactPhone:"+380 44 123-45-67",status:"ACTIVE",ownerUserId:"user-123",createdAt:"2025-03-14T09:00:00.000Z",notes:"\u041C\u0435\u0440\u0435\u0436\u0430 \u0437 \u0442\u0440\u044C\u043E\u0445 \u0444\u0456\u043B\u0456\u0439. \u0420\u0456\u0447\u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0430, \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u0438\u0441\u0442\u0430\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0443 \u0431\u0435\u0440\u0435\u0437\u043D\u0456."}),Pe({id:"org-optima",name:"\u041E\u043F\u0442\u0438\u043C\u0430 \u0412\u0438\u0436\u043D",legalName:"\u0424\u041E\u041F \u041F\u0435\u0442\u0440\u0435\u043D\u043A\u043E \u0406. \u0406.",edrpou:"3012345678",legalAddress:"\u043C. \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u041E\u043F\u0442\u0438\u0447\u043D\u0430, 5",contactPerson:"\u041F\u0435\u0442\u0440\u0435\u043D\u043A\u043E \u0406\u0432\u0430\u043D \u0406\u0432\u0430\u043D\u043E\u0432\u0438\u0447",contactEmail:"petrenko@optima.example",contactPhone:"+380 67 987-65-43",status:"TRIAL",createdAt:"2026-07-20T12:30:00.000Z",notes:"\u0422\u0440\u0456\u0430\u043B \u0441\u043F\u043B\u0438\u0432\u0430\u0454 \u0437\u0430 5 \u0434\u043D\u0456\u0432 (\u0434\u0430\u043D\u0456 \u0431\u0456\u043B\u0456\u043D\u0433\u0443 \u0432 \u043C\u043E\u043A\u0430\u0445 \u0440\u0430\u0445\u0443\u044E\u0442\u044C\u0441\u044F \u0432\u0456\u0434 \u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0457 \u0434\u0430\u0442\u0438), \u043E\u0434\u043D\u0430 \u0442\u043E\u0447\u043A\u0430."}),Pe({id:"org-vizor",name:"\u0412\u0456\u0437\u043E\u0440",legalName:"\u0422\u041E\u0412 \xAB\u0412\u0456\u0437\u043E\u0440 \u041F\u043B\u044E\u0441\xBB",edrpou:"39887766",legalAddress:"\u043C. \u041E\u0434\u0435\u0441\u0430, \u0432\u0443\u043B. \u041F\u0440\u0438\u043C\u043E\u0440\u0441\u044C\u043A\u0430, 12",contactPerson:"\u041A\u043E\u0432\u0430\u043B\u044C\u0447\u0443\u043A \u041C\u0430\u0440\u0456\u044F \u0421\u0435\u0440\u0433\u0456\u0457\u0432\u043D\u0430",contactEmail:"buh@vizor.example",contactPhone:"+380 48 555-11-22",status:"PAST_DUE",createdAt:"2024-11-02T08:15:00.000Z",notes:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u0437\u0430 \u043B\u0438\u043F\u0435\u043D\u044C \u043D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043E, \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E 28.07."}),Pe({id:"org-lumina",name:"\u041B\u044E\u043C\u0456\u043D\u0430",legalName:"\u0422\u041E\u0412 \xAB\u041B\u044E\u043C\u0456\u043D\u0430 \u041E\u043F\u0442\u0438\u043A\xBB",edrpou:"42556677",legalAddress:"\u043C. \u0425\u0430\u0440\u043A\u0456\u0432, \u043F\u0440\u043E\u0441\u043F. \u041D\u0430\u0443\u043A\u0438, 42",contactPerson:"\u0414\u043E\u0440\u043E\u0448\u0435\u043D\u043A\u043E \u041D\u0430\u0442\u0430\u043B\u0456\u044F \u0412\u0456\u043A\u0442\u043E\u0440\u0456\u0432\u043D\u0430",contactEmail:"admin@lumina.example",contactPhone:"+380 57 700-33-11",status:"ACTIVE",createdAt:"2026-02-10T10:20:00.000Z",notes:"\u041F\u0456\u043B\u043E\u0442 \u043D\u0430 \u0431\u0430\u0437\u0456 \u043A\u0430\u0444\u0435\u0434\u0440\u0438: \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434 \u0437\u0430 \u0434\u043E\u043C\u043E\u0432\u043B\u0435\u043D\u0456\u0441\u0442\u044E, \u0433\u0440\u0430\u043D\u0442 \u0456\u0437 \u043F\u0440\u0438\u0447\u0438\u043D\u043E\u044E."}),Pe({id:"org-fokus",name:"\u0424\u043E\u043A\u0443\u0441 \u041E\u043F\u0442\u0438\u043A",legalName:"\u0422\u041E\u0412 \xAB\u0424\u043E\u043A\u0443\u0441 \u041E\u043F\u0442\u0438\u043A\xBB",edrpou:"38221144",legalAddress:"\u043C. \u0414\u043D\u0456\u043F\u0440\u043E, \u0432\u0443\u043B. \u0421\u0456\u0447\u043E\u0432\u0430, 8",contactPerson:"\u041C\u0435\u043B\u044C\u043D\u0438\u043A \u0421\u0435\u0440\u0433\u0456\u0439 \u041E\u043B\u0435\u0433\u043E\u0432\u0438\u0447",contactEmail:"melnyk@fokus.example",contactPhone:"+380 56 444-22-99",status:"SUSPENDED",createdAt:"2023-05-18T07:45:00.000Z",notes:"\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043E \u043F\u0456\u0441\u043B\u044F grace. \u0427\u0438\u0442\u0430\u043D\u043D\u044F \u0439 \u0435\u043A\u0441\u043F\u043E\u0440\u0442 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C, \u0437\u043C\u0456\u043D\u0438 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u0456."})];function Pr(e){return{id:e.id,name:e.name,legalName:e.legalName,edrpou:e.edrpou,status:e.status,createdAt:e.createdAt,branchCount:W.countByOrganization(e.id),isDeleted:e.isDeleted}}function Lr(e){return{id:e.id,name:e.name,legalName:e.legalName,status:e.status}}function aa(e,i){e.name=i.name,e.legalName=i.legalName,e.edrpou=i.edrpou,e.vatNumber=i.vatNumber,e.legalAddress=i.legalAddress,e.iban=i.iban,e.contactPerson=i.contactPerson,e.contactEmail=i.contactEmail,e.contactPhone=i.contactPhone,e.notes=i.notes}var R={list(e){let i=e.search.trim().toLowerCase();return ii.filter(t=>!(!e.includeDeleted&&t.isDeleted||e.status&&t.status!==e.status||i&&!`${t.name} ${t.legalName} ${t.edrpou}`.toLowerCase().includes(i))).map(Pr)},get(e){return ii.find(i=>i.id===e)},current(){let e=this.get(me());return e?Lr(e):void 0},create(e){let i=Pe({name:e.name});return aa(i,e),ii.push(i),i},update(e,i){let t=this.get(e);if(t)return aa(t,i),t},setDeleted(e,i){let t=this.get(e);t&&(t.isDeleted=i)}};var ra=[{method:"GET",pattern:/^\/api\/v1\/admin\/organizations$/,handle:e=>({status:200,body:R.list({includeDeleted:e.params.get("includeDeleted")==="true",status:e.params.get("status")??null,search:e.params.get("search")??""})})},{method:"POST",pattern:/^\/api\/v1\/admin\/organizations$/,handle:e=>({status:201,body:R.create(e.body)})},{method:"GET",pattern:/^\/api\/v1\/admin\/organizations\/([^/]+)$/,handle:(e,i)=>{let t=R.get(i[1]);return t?{status:200,body:t}:{status:404,body:null}}},{method:"PUT",pattern:/^\/api\/v1\/admin\/organizations\/([^/]+)$/,handle:(e,i)=>{let t=R.update(i[1],e.body);return t?{status:200,body:t}:{status:404,body:null}}},{method:"DELETE",pattern:/^\/api\/v1\/admin\/organizations\/([^/]+)$/,handle:(e,i)=>W.countByOrganization(i[1])>0?{status:409,body:{message:"\u041E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044F \u043C\u0430\u0454 \u0444\u0456\u043B\u0456\u0457"}}:(R.setDeleted(i[1],!0),{status:204,body:null})},{method:"POST",pattern:/^\/api\/v1\/admin\/organizations\/([^/]+)\/restore$/,handle:(e,i)=>(R.setDeleted(i[1],!1),{status:204,body:null})}];var s={manageRoles:e=>e.management.manageRoles,manageUsers:e=>e.management.manageUsers,manageSettings:e=>e.management.manageSettings,managePaymentTypes:e=>e.management.managePaymentTypes,manageWorkplaces:e=>e.management.manageWorkplaces,storageLocations:e=>e.directories.general.storageLocations,counterparties:e=>e.directories.general.counterparties,glassesSunglasses:e=>e.directories.glasses.sunglasses,glassesFrames:e=>e.directories.glasses.frames,glassesLenses:e=>e.directories.glasses.lenses,glassesRelatedGoods:e=>e.directories.glasses.relatedGoods,glassesServices:e=>e.directories.glasses.services,contactLenses:e=>e.directories.lensesAndServices.contactLenses,clRelatedGoods:e=>e.directories.lensesAndServices.relatedGoods,clServices:e=>e.directories.lensesAndServices.services,managePriceLists:e=>e.management.managePriceLists,manageDiscountScale:e=>e.management.manageDiscountScale,discountCards:e=>e.management2.otherPermissions.workWithDiscountCards,templates:e=>e.directories.general.templateTypes,cardex:e=>e.cardex.allowAccess,messageTemplates:e=>e.directories.general.messageTemplates,schedule:e=>e.management.roomsSchedule,discountPrograms:e=>e.management2.otherPermissions.workWithDiscountCards,giftCertificates:e=>e.management2.otherPermissions.workWithGiftCertificates,internetServices:e=>e.management.internetServices,cashbox:e=>e.management.workWithEkka,nonFiscalModes:e=>e.management2.otherPermissions.allowNonFiscalModes,productionQueue:e=>e.management2.otherPermissions.productionQueue,peripherals:e=>e.management.barcodeScannerWork,smsMailing:e=>e.management.smsMailing,emailMailing:e=>e.management.emailMailing,reports:e=>!e.reports.hideReportsMenu,payroll:e=>e.management.salaryCalculation,timesheet:e=>e.management.workTimeTracking,importData:e=>e.management2.dataExchange.importData,exportTo1C:e=>e.management2.dataExchange.exportTo1C,viewGlassesDocuments:e=>e.general.direction==="GLASSES"||e.general.direction==="ALL",viewClDocuments:e=>e.general.direction==="LENSES_AND_SERVICES"||e.general.direction==="ALL"};var ni=e=>s.reports(e)&&(e.general.isPrivileged||e.reports.otherReports.cardexGeneral);var ai=e=>s.internetServices(e)&&s.schedule(e),oa=e=>s.schedule(e)&&s.cardex(e),yc=s.discountPrograms;var zr=[{id:"directories",title:"\u0414\u043E\u0432\u0456\u0434\u043D\u0438\u043A\u0438",icon:"menu_book",sections:[{title:"\u041E\u041A\u0423\u041B\u042F\u0420\u0418",items:[{label:"\u0421/\u0417 \u041E\u043A\u0443\u043B\u044F\u0440\u0438",icon:"visibility",externalRoute:"/directories/glasses/sunglasses",permission:s.glassesSunglasses},{label:"\u041E\u043F\u0440\u0430\u0432\u0438",icon:"eyeglasses",externalRoute:"/directories/glasses/frames",permission:s.glassesFrames},{label:"\u0421\u0443\u043F\u0443\u0442\u043D\u0456 \u0442\u043E\u0432\u0430\u0440\u0438",icon:"category",externalRoute:"/directories/glasses/related-goods",permission:s.glassesRelatedGoods},{label:"\u041F\u043E\u0441\u043B\u0443\u0433\u0438",icon:"design_services",externalRoute:"/directories/glasses/services",permission:s.glassesServices}]},{title:"\u041E\u043A\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043D\u0437\u0438",items:[{label:"\u041B\u0456\u043D\u0437\u0438",icon:"lens",externalRoute:"/directories/glasses/lenses",permission:s.glassesLenses},{label:"\u041C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438",icon:"science",externalRoute:"/directories/glasses/lens-materials",permission:s.glassesLenses},{label:"\u0406\u043D\u0434\u0435\u043A\u0441\u0438",icon:"straighten",externalRoute:"/directories/glasses/lens-indexes",permission:s.glassesLenses},{label:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438",icon:"palette",externalRoute:"/directories/glasses/lens-colors",permission:s.glassesLenses},{label:"\u041E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456",icon:"tune",externalRoute:"/directories/glasses/lens-features",permission:s.glassesLenses}]},{title:"\u041C\u041A\u041B",items:[{label:"\u041C\u043E\u0434\u0435\u043B\u0456 \u041C\u041A\u041B",icon:"blur_circular",externalRoute:"/directories/contact-lenses/models",permission:s.contactLenses},{label:"\u0421\u0443\u043F\u0443\u0442\u043D\u0456 \u0442\u043E\u0432\u0430\u0440\u0438",icon:"category",externalRoute:"/directories/contact-lenses/related-goods",permission:s.clRelatedGoods},{label:"\u041F\u043E\u0441\u043B\u0443\u0433\u0438",icon:"design_services",externalRoute:"/directories/contact-lenses/services",permission:s.clServices},{label:"\u0411\u0430\u0437\u043E\u0432\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438",icon:"gradient",externalRoute:"/directories/contact-lenses/base-colors",permission:s.contactLenses}]},{title:"\u0426\u0456\u043D\u0438 \u0442\u0430 \u0437\u043D\u0438\u0436\u043A\u0438",items:[{label:"\u0426\u0456\u043D\u0438 / \xAB\u0424\u043E\u0440\u043C\u0443\u043B\u0430\xBB",icon:"request_quote",externalRoute:"/directories/pricing/prices",permission:s.managePriceLists},{label:"\u0428\u043A\u0430\u043B\u0430 \u0437\u043D\u0438\u0436\u043E\u043A",icon:"percent",externalRoute:"/directories/pricing/discount-scale",permission:s.manageDiscountScale},{label:"\u0414\u0438\u0441\u043A\u043E\u043D\u0442\u043D\u0456 \u043A\u0430\u0440\u0442\u043A\u0438",icon:"card_membership",externalRoute:"/directories/pricing/discount-cards",permission:s.discountCards}]},{title:"\u0428\u0430\u0431\u043B\u043E\u043D\u0438",items:[{label:"\u0428\u0430\u0431\u043B\u043E\u043D\u0438 \u0442\u043E\u0432\u0430\u0440\u0456\u0432",icon:"inventory",externalRoute:"/directories/templates/product-templates",permission:s.templates},{label:"\u0422\u0438\u043F\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0456\u0432",icon:"category",externalRoute:"/directories/templates/types",permission:s.templates},{label:"\u0414\u0440\u0443\u043A\u0430\u0440\u0441\u044C\u043A\u0456 \u0444\u043E\u0440\u043C\u0438",icon:"print",externalRoute:"/directories/print-forms",permission:s.templates}]},{title:"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0456",items:[{label:"\u041C\u0456\u0441\u0446\u044F \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F",icon:"warehouse",externalRoute:"/administration/storage-locations",permission:s.storageLocations},{label:"\u0424\u0456\u043B\u0456\u0457",icon:"store",externalRoute:"/administration/branches",permission:s.manageWorkplaces},{label:"\u041F\u0456\u0434\u0440\u043E\u0437\u0434\u0456\u043B\u0438",icon:"account_tree",externalRoute:"/administration/subdivisions",permission:s.manageWorkplaces},{label:"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0438",icon:"handshake",externalRoute:"/administration/counterparties",permission:s.counterparties},{label:"\u0412\u0438\u0434\u0438 \u043E\u043F\u043B\u0430\u0442\u0438",icon:"payments",externalRoute:"/administration/payment-types",permission:s.managePaymentTypes},{label:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",icon:"settings",externalRoute:"/administration/settings",permission:s.manageSettings},{label:"\u0420\u043E\u043B\u0456",icon:"admin_panel_settings",externalRoute:"/administration/roles",permission:s.manageRoles},{label:"\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456",icon:"group",externalRoute:"/administration/users",permission:s.manageUsers}]}]},{id:"journals",title:"\u0416\u0443\u0440\u043D\u0430\u043B\u0438",icon:"menu_book",sections:[{title:"\u0416\u0443\u0440\u043D\u0430\u043B\u0438",items:[{label:"\u0416\u0443\u0440\u043D\u0430\u043B \u041E\u041A\u0423\u041B\u042F\u0420\u0418",icon:"book",externalRoute:"/journals/documents/glasses",permission:s.viewGlassesDocuments},{label:"\u0416\u0443\u0440\u043D\u0430\u043B \u041C\u041A\u041B",icon:"book",externalRoute:"/journals/documents/contact-lenses",permission:s.viewClDocuments},{label:"\u0417\u0430\u044F\u0432\u043A\u0438 \u041E\u041A\u0423\u041B\u042F\u0420\u0418",icon:"assignment",externalRoute:"/journals/requests/glasses",permission:s.viewGlassesDocuments},{label:"\u0417\u0430\u044F\u0432\u043A\u0438 \u041C\u041A\u041B",icon:"assignment",externalRoute:"/journals/requests/contact-lenses",permission:s.viewClDocuments},{label:"\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u041E\u041A\u0423\u041B\u042F\u0420\u0418",icon:"shopping_cart",externalRoute:"/journals/glasses-orders",permission:s.viewGlassesDocuments},{label:"\u041E\u0431\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F",icon:"medical_information",externalRoute:"/cardfile/exam-journal",permission:s.cardex}]},{title:"\u0416\u0443\u0440\u043D. \u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u043F\u043E \u043A\u0430\u0440\u0442\u043E\u0442\u0435\u0446\u0456",items:[{label:"\u0416\u0443\u0440\u043D\u0430\u043B \u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432",icon:"receipt_long",externalRoute:"/journals/sales",permission:s.cardex},{label:"\u0416\u0443\u0440\u043D\u0430\u043B \u0447\u0435\u043A\u0456\u0432",icon:"receipt",externalRoute:"/cashbox/receipts",permission:s.cashbox}]}]},{id:"production-menu",title:"\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E",icon:"precision_manufacturing",sections:[{title:"\u0426\u0435\u0445",items:[{label:"\u0427\u0435\u0440\u0433\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0430",icon:"precision_manufacturing",externalRoute:"/production",permission:s.productionQueue}]}]},{id:"cashbox-menu",title:"\u041A\u0430\u0441\u0430",icon:"point_of_sale",sections:[{title:"\u041A\u0430\u0441\u0430",items:[{label:"\u0420\u043E\u0431\u043E\u0442\u0430 \u0437 \u0415\u041A\u041A\u0420",icon:"point_of_sale",externalRoute:"/cashbox",permission:s.cashbox},{label:"\u0416\u0443\u0440\u043D\u0430\u043B \u0447\u0435\u043A\u0456\u0432",icon:"receipt",externalRoute:"/cashbox/receipts",permission:s.cashbox},{label:"\u041A\u0430\u0441\u043E\u0432\u0456 \u0430\u043F\u0430\u0440\u0430\u0442\u0438",icon:"devices_other",externalRoute:"/cashbox/registers",permission:s.cashbox}]}]},{id:"peripherals-menu",title:"\u041F\u0435\u0440\u0438\u0444\u0435\u0440\u0456\u044F",icon:"devices",sections:[{title:"\u0428\u0442\u0440\u0438\u0445-\u043A\u043E\u0434\u0438",items:[{label:"\u041F\u0440\u0438\u0432\u02BC\u044F\u0437\u043A\u0430 \u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434\u0456\u0432",icon:"qr_code_scanner",externalRoute:"/peripherals",permission:s.peripherals},{label:"\u0422\u0438\u043F\u0438 \u0448\u0442\u0440\u0438\u0445-\u043A\u043E\u0434\u0456\u0432",icon:"format_list_numbered",externalRoute:"/peripherals/barcode-types",permission:s.peripherals},{label:"\u041C\u0430\u043A\u0435\u0442\u0438 \u0435\u0442\u0438\u043A\u0435\u0442\u043E\u043A",icon:"label",externalRoute:"/peripherals/label-templates",permission:s.peripherals}]},{title:"\u041F\u0440\u0438\u0441\u0442\u0440\u043E\u0457",items:[{label:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F POS-\u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0430",icon:"receipt_long",externalRoute:"/peripherals/pos-printers",permission:s.cashbox}]}]},{id:"messaging-menu",title:"\u0420\u043E\u0437\u0441\u0438\u043B\u043A\u0430",icon:"campaign",sections:[{title:"\u0420\u043E\u0437\u0441\u0438\u043B\u043A\u0430",items:[{label:"\u0420\u043E\u0437\u0441\u0438\u043B\u043A\u0430 SMS/email",icon:"sms",externalRoute:"/messaging",permission:s.smsMailing},{label:"\u0428\u0430\u0431\u043B\u043E\u043D\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C",icon:"chat",externalRoute:"/messaging/templates",permission:s.smsMailing},{label:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0440\u043E\u0437\u0441\u0438\u043B\u043A\u0430",icon:"schedule_send",externalRoute:"/messaging/auto-rules",permission:s.smsMailing},{label:"\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0438",icon:"history",externalRoute:"/messaging/history",permission:s.smsMailing},{label:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0437\u0441\u0438\u043B\u043A\u0438",icon:"settings",externalRoute:"/messaging/settings",permission:s.smsMailing}]}]},{id:"cardex",title:"\u041A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0430",icon:"contacts",sections:[{title:"\u041A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0430",items:[{label:"\u041A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0430",icon:"contacts",externalRoute:"/cardfile",permission:s.cardex},{label:"\u0428\u0430\u0431\u043B\u043E\u043D\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C",icon:"sms",externalRoute:"/cardfile/message-templates",permission:s.messageTemplates},{label:"\u0428\u043A\u0430\u043B\u0430 \u0437\u043D\u0438\u0436\u043E\u043A",icon:"percent",externalRoute:"/directories/pricing/discount-scale",permission:s.manageDiscountScale}]},{title:"\u041B\u043E\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C",items:[{label:"\u0414\u0438\u0441\u043A\u043E\u043D\u0442\u043D\u0456 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438",icon:"loyalty",externalRoute:"/loyalty",permission:s.discountPrograms}]},{title:"\u0417\u0432\u0456\u0442\u0438",items:[{label:"\u041F\u0440\u043E\u0434\u0430\u0436\u0456 \u043F\u043E \u043A\u0430\u0440\u0442\u043E\u0442\u0435\u0446\u0456",icon:"insights",externalRoute:"/cardfile/reports/sales",permission:ni},{label:"\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u0456 \u0432\u0456\u0437\u0438\u0442\u0438",icon:"event_upcoming",externalRoute:"/cardfile/reports/expected-visits",permission:ni},{label:"\u0412\u0438\u0431\u0440\u0430\u043D\u0456 \u0437\u0432\u0456\u0442\u0438",icon:"star",externalRoute:"/reports/favorites",permission:s.reports}]}]},{id:"reports-menu",title:"\u0417\u0432\u0456\u0442\u0438",icon:"summarize",sections:[{title:"\u0417\u0432\u0456\u0442\u0438",items:[{label:"\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0437\u0432\u0456\u0442\u0456\u0432",icon:"summarize",externalRoute:"/reports",permission:s.reports},{label:"\u0412\u0438\u0431\u0440\u0430\u043D\u0456 \u0437\u0432\u0456\u0442\u0438",icon:"star",externalRoute:"/reports/favorites",permission:s.reports}]},{title:"\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0437\u0430\u0440\u043E\u0431\u0456\u0442\u043D\u043E\u0457 \u043F\u043B\u0430\u0442\u0438",items:[{label:"\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u043F\u0440\u0430\u0432\u0438\u043B",icon:"rule",externalRoute:"/payroll",permission:s.payroll},{label:"\u0420\u043E\u0437\u043F\u043E\u0434\u0456\u043B \u043F\u0440\u0430\u0432\u0438\u043B",icon:"account_tree",externalRoute:"/payroll/assignments",permission:s.payroll},{label:"\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0417\u041F",icon:"payments",externalRoute:"/payroll/calculate",permission:s.payroll},{label:"\u041E\u0431\u043B\u0456\u043A \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0447\u0430\u0441\u0443",icon:"schedule",externalRoute:"/payroll/timesheet",permission:s.timesheet}]}]},{id:"schedule-menu",title:"\u0420\u043E\u0437\u043A\u043B\u0430\u0434",icon:"calendar_month",sections:[{title:"\u0420\u043E\u0437\u043A\u043B\u0430\u0434",items:[{label:"\u0420\u043E\u0437\u043A\u043B\u0430\u0434",icon:"calendar_month",externalRoute:"/schedule",permission:s.schedule},{label:"\u041A\u0430\u0431\u0456\u043D\u0435\u0442\u0438 (\u043F\u043E\u0442\u043E\u043A\u0438)",icon:"meeting_room",externalRoute:"/schedule/rooms",permission:s.schedule},{label:"\u0421\u0445\u0435\u043C\u0438 \u043F\u0440\u0438\u0439\u043E\u043C\u0443",icon:"account_tree",externalRoute:"/schedule/schemes",permission:s.schedule},{label:"\u0416\u0443\u0440\u043D\u0430\u043B \u043F\u0440\u0438\u0439\u043E\u043C\u0443 \u043F\u0430\u0446\u0456\u0454\u043D\u0442\u0456\u0432",icon:"event_note",externalRoute:"/schedule/patient-journal",permission:s.schedule},{label:"\u0413\u0440\u0430\u0444\u0456\u043A \u0440\u043E\u0431\u043E\u0442\u0438 \u043B\u0456\u043A\u0430\u0440\u0456\u0432",icon:"badge",externalRoute:"/schedule/doctor-journal",permission:s.schedule}]},{title:"\u0420\u0435\u0446\u0435\u043F\u0446\u0456\u044F",items:[{label:"\u0420\u0435\u0446\u0435\u043F\u0446\u0456\u044F: \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",icon:"support_agent",externalRoute:"/reception",permission:oa}]},{title:"\u041E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441",items:[{label:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u0443",icon:"public",externalRoute:"/online-booking",permission:ai},{label:"\u0416\u0443\u0440\u043D\u0430\u043B \u043E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u0456\u0432",icon:"inbox",externalRoute:"/online-booking/journal",permission:ai}]}]},{id:"data-exchange-menu",title:"\u041E\u0431\u043C\u0456\u043D \u0434\u0430\u043D\u0438\u043C\u0438",icon:"swap_horiz",sections:[{title:"\u0421\u0435\u0440\u0432\u0456\u0441",items:[{label:"\u0406\u043C\u043F\u043E\u0440\u0442 \u0434\u0430\u043D\u0438\u0445 \u0437 XLS",icon:"table_view",externalRoute:"/data-exchange",permission:s.importData},{label:"\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0443 1\u0421",icon:"upload_file",externalRoute:"/data-exchange/export-1c",permission:s.exportTo1C}]}]},{id:"search",title:"\u041F\u043E\u0448\u0443\u043A",icon:"search",sections:[{title:"\u041F\u043E\u0448\u0443\u043A",items:[{label:"\u041B\u0456\u043D\u0437\u0438 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0456",icon:"inventory_2",externalRoute:"/search/lenses-in-stock",permission:s.viewGlassesDocuments},{label:"\u041C\u041A\u041B \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0456",icon:"inventory_2",externalRoute:"/search/contact-lenses-in-stock",permission:s.viewClDocuments},{label:"\u0412\u0441\u0456 \u043B\u0456\u043D\u0437\u0438",icon:"search",externalRoute:"/search/all-lenses",permission:s.viewGlassesDocuments},{label:"\u0412\u0441\u0456 \u041C\u041A\u041B",icon:"search",externalRoute:"/search/all-contact-lenses",permission:s.viewClDocuments}]}]}];var sa="/dashboard";function ri(){return`role-${Math.random().toString(36).slice(2,10)}`}function j(e,i){return{id:e,isDeleted:!1,general:{name:i,description:"",direction:"ALL",storageAccess:"WORKPLACE_LOCAL",administration:{manageDatabase:!1,reprocessPeriod:!1,viewDebugInfo:!1,backupDatabase:!1,restoreDatabase:!1},isPrivileged:!1,isCompactForm:!1,showUserInfoOnLogin:!1,startRoute:sa},directories:{general:{storageLocations:!1,ourCompanies:!1,counterparties:!1,overheadCosts:!1,localities:!1,colors:!1,currencies:!1,templateTypes:!1,messageTemplates:!1},lensesAndServices:{contactLenses:!1,relatedGoods:!1,services:!1},glasses:{sunglasses:!1,frames:!1,lenses:!1,relatedGoods:!1,services:!1}},documents:{viewScope:"OWN",restrictVisibilityAndEditing:!1,editDeleteScope:"OWN",allowedDocumentTypes:{receipt:!1,expense:!1,overheadCosts:!1,installment:!1,returnToSupplier:!1,return:!1,financialReceipt:!1,glassesOrder:!1,transfer:!1,writeOff:!1,financialExpense:!1,expiryUpdate:!1,correction:!1,advance:!1,inventory:!1,kit:!1,revaluation:!1,request:!1,advanceReturn:!1,clientReserve:!1,patientAdvanceBalance:!1,invoice:!1,enterBalances:!1},otherPermissions:{changeDocumentDate:!1,forbidEditingNonToday:!1,editExchangedDocuments:!1,createWithFutureDate:!1,allowGeneralDiscountOnOrder:!1,createReceiptForOtherWorkplaces:!1,createAnyDocumentsForOtherWorkplaces:!1},orders:{forbidChangeOrderStatus:!1,forbidChangeOrderedLenses:!1}},periods:{reportsPeriodScope:"CURRENT_DATE",documentJournalPeriodScope:"CURRENT_DATE"},cardex:{allowAccess:!1,editPermissions:{generalData:!1,historyAndDiagnosis:!1,examinations:!1,examinationDiary:!1,operations:!1,mainDoctors:!1,forbidDischargeForms:!1,hideDiary:!1,glassesSales:!1,lensesSales:!1,glassesDiscounts:!1,lensesDiscounts:!1,patientRequests:!1,glassesOrder:!1,hideClinicalData:!1},salesEditDeleteScope:"OWN_ONLY",forbidDeleteSales:!1,unlockVisits:!1,lockVisits:!1,editOnlyTodayVisits:!1,allowFutureVisits:!1,mergeAndDeleteCards:!1,skipNextVisitDatePrompt:!1,hideSalesInExamJournal:!1,forbidDeleteExamAfterDischarge:!1,allowSaleWithoutBarcode:!1},reports:{summaryReports:{byIncome:!1,byExpense:!1,byBalance:!1,revenueByDay:!1,consolidated:!1},detailedReports:{byIncome:!1,byExpense:!1,byBalance:!1},otherReports:{financialAndExpenseInvoices:!1,advanceReports:!1,correctionReports:!1,expensePriceControl:!1,cardexGeneral:!1,cardexAdmin:!1},allowSeeDifference:!1,hideReportsMenu:!1,detailedOwnDataOnly:!1,orderReportsOwnDataOnly:!1,allowExternalAppReports:!1},management:{manageSettings:!1,manageRoles:!1,manageUsers:!1,manageExternalUsers:!1,arrangeEkkaCodes:!1,workWithEkka:!1,barcodeScannerWork:!1,smsMailing:!1,emailMailing:!1,roomsSchedule:!1,internetServices:!1,telephony:!1,managePasswords:!1,manageWorkplaces:!1,managePaymentTypes:!1,manageDiscountScale:!1,managePriceLists:!1,manageReminders:!1,editHtml:!1,certificatesSetup:!1,bonusesSetup:!1,salaryCalculation:!1,workTimeTracking:!1},management2:{dataExchange:{exchangeData:!1,exchangeCardex:!1,exchangeDirectoriesAndFiles:!1,receiveOutOfOrderPackages:!1,allowDeletePackage:!1,exportCardex:!1,exportTo1C:!1,importData:!1},otherPermissions:{viewCostPrices:!1,forbidZeroPriceReceipt:!1,forbidZeroPriceSale:!1,printCardex:!1,unlockDocuments:!1,lockDocuments:!1,requestJournalsTemplatesMerge:!1,selectCashier:!1,archivePeriodsCleanup:!1,workWithBonuses:!1,hideUnavailableStoragePrices:!1,editPricesOnCorrection:!1,editAndCreateDiscountCards:!1,onlyCreateDiscountCards:!1,workWithDiscountCards:!1,scheduleSettings:!1,scheduleViewOnly:!1,scheduleEditPatientsOnly:!1,punchReceiptsTodayVisitsOnly:!1,workWithGiftCertificates:!1,allowNonFiscalModes:!1,productionQueue:!1}},counterparties:{allowAllGroups:!0,groupAccess:{}}}}function Fr(){let e=j("role-director","\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440");return e.general.description="\u043C\u043E\u0436\u043D\u0430 \u0432\u0441\u0435 !",e.general.direction="ALL",e.general.storageAccess="ALL",e.general.administration={manageDatabase:!0,reprocessPeriod:!0,viewDebugInfo:!0,backupDatabase:!0,restoreDatabase:!0},e.general.isPrivileged=!0,e.periods={reportsPeriodScope:"ANY_PERIOD",documentJournalPeriodScope:"ANY_PERIOD"},e.documents={viewScope:"ANY_WORKPLACE",restrictVisibilityAndEditing:!1,editDeleteScope:"ANY_WORKPLACE",allowedDocumentTypes:{receipt:!0,expense:!0,overheadCosts:!0,installment:!0,returnToSupplier:!0,return:!0,financialReceipt:!0,glassesOrder:!0,transfer:!0,writeOff:!0,financialExpense:!0,expiryUpdate:!0,correction:!0,advance:!0,inventory:!0,kit:!0,revaluation:!0,request:!0,advanceReturn:!0,clientReserve:!0,patientAdvanceBalance:!0,invoice:!0,enterBalances:!0},otherPermissions:{changeDocumentDate:!0,forbidEditingNonToday:!1,editExchangedDocuments:!1,createWithFutureDate:!0,allowGeneralDiscountOnOrder:!0,createReceiptForOtherWorkplaces:!0,createAnyDocumentsForOtherWorkplaces:!0},orders:{forbidChangeOrderStatus:!1,forbidChangeOrderedLenses:!1}},e.directories={general:{storageLocations:!0,ourCompanies:!0,counterparties:!0,overheadCosts:!0,localities:!0,colors:!0,currencies:!0,templateTypes:!0,messageTemplates:!0},lensesAndServices:{contactLenses:!0,relatedGoods:!0,services:!0},glasses:{sunglasses:!0,frames:!0,lenses:!0,relatedGoods:!0,services:!0}},e.cardex={allowAccess:!0,editPermissions:{generalData:!0,historyAndDiagnosis:!0,examinations:!0,examinationDiary:!0,operations:!0,mainDoctors:!0,forbidDischargeForms:!1,hideDiary:!1,glassesSales:!0,lensesSales:!0,glassesDiscounts:!0,lensesDiscounts:!0,patientRequests:!0,glassesOrder:!0,hideClinicalData:!1},salesEditDeleteScope:"ANY_ON_WORKPLACE",forbidDeleteSales:!1,unlockVisits:!0,lockVisits:!0,editOnlyTodayVisits:!1,allowFutureVisits:!0,mergeAndDeleteCards:!0,skipNextVisitDatePrompt:!0,hideSalesInExamJournal:!1,forbidDeleteExamAfterDischarge:!1,allowSaleWithoutBarcode:!0},e.reports={summaryReports:{byIncome:!0,byExpense:!0,byBalance:!0,revenueByDay:!0,consolidated:!0},detailedReports:{byIncome:!0,byExpense:!0,byBalance:!0},otherReports:{financialAndExpenseInvoices:!0,advanceReports:!0,correctionReports:!0,expensePriceControl:!0,cardexGeneral:!0,cardexAdmin:!0},allowSeeDifference:!0,hideReportsMenu:!1,detailedOwnDataOnly:!1,orderReportsOwnDataOnly:!1,allowExternalAppReports:!0},e.management={manageSettings:!0,manageRoles:!0,manageUsers:!0,manageExternalUsers:!0,arrangeEkkaCodes:!0,workWithEkka:!0,barcodeScannerWork:!0,smsMailing:!0,emailMailing:!0,roomsSchedule:!0,internetServices:!0,telephony:!0,managePasswords:!0,manageWorkplaces:!0,managePaymentTypes:!0,manageDiscountScale:!0,managePriceLists:!0,manageReminders:!0,editHtml:!0,certificatesSetup:!0,bonusesSetup:!0,salaryCalculation:!0,workTimeTracking:!0},e.management2={dataExchange:{exchangeData:!0,exchangeCardex:!0,exchangeDirectoriesAndFiles:!0,receiveOutOfOrderPackages:!0,allowDeletePackage:!0,exportCardex:!0,exportTo1C:!0,importData:!0},otherPermissions:{viewCostPrices:!0,forbidZeroPriceReceipt:!0,forbidZeroPriceSale:!0,printCardex:!0,unlockDocuments:!0,lockDocuments:!0,requestJournalsTemplatesMerge:!0,selectCashier:!0,archivePeriodsCleanup:!0,workWithBonuses:!0,hideUnavailableStoragePrices:!0,editPricesOnCorrection:!0,editAndCreateDiscountCards:!0,onlyCreateDiscountCards:!1,workWithDiscountCards:!0,scheduleSettings:!0,scheduleViewOnly:!1,scheduleEditPatientsOnly:!1,punchReceiptsTodayVisitsOnly:!1,workWithGiftCertificates:!0,allowNonFiscalModes:!0,productionQueue:!0}},e}function Br(){let e=j("role-seller","\u041F\u0440\u043E\u0434\u0430\u0432\u0435\u0446\u044C");return e.general.description="\u041F\u0440\u043E\u0434\u0430\u0436\u0456 \u0432 \u0441\u0430\u043B\u043E\u043D\u0456: \u0432\u0438\u0434\u0430\u0442\u043A\u043E\u0432\u0456, \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043E\u043A\u0443\u043B\u044F\u0440\u0456\u0432, \u043A\u0430\u0441\u0430.",e.directories.general.counterparties=!0,e.directories.lensesAndServices={contactLenses:!0,relatedGoods:!0,services:!0},e.directories.glasses={sunglasses:!0,frames:!0,lenses:!0,relatedGoods:!0,services:!0},e.documents.viewScope="CURRENT_WORKPLACE",e.documents.editDeleteScope="OWN",Object.assign(e.documents.allowedDocumentTypes,{expense:!0,return:!0,glassesOrder:!0,financialReceipt:!0,clientReserve:!0,advance:!0,invoice:!0}),e.cardex.allowAccess=!0,Object.assign(e.cardex.editPermissions,{generalData:!0,glassesSales:!0,lensesSales:!0,patientRequests:!0,glassesOrder:!0}),e.management.workWithEkka=!0,e.management.barcodeScannerWork=!0,e.reports.hideReportsMenu=!0,e.management2.otherPermissions.workWithDiscountCards=!0,e.management2.otherPermissions.workWithGiftCertificates=!0,e.counterparties={allowAllGroups:!1,groupAccess:{"cpg-external-clients":!0}},e}function Ur(){let e=j("role-manager","\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440");return e.general.description="\u041A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u043B\u043E\u043D\u043E\u043C: \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438, \u0434\u043E\u0432\u0456\u0434\u043D\u0438\u043A\u0438, \u0446\u0456\u043D\u0438, \u0440\u043E\u0437\u0441\u0438\u043B\u043A\u0438.",e.general.storageAccess="ALL",e.periods={reportsPeriodScope:"VISIBILITY_PERIOD",documentJournalPeriodScope:"ANY_PERIOD"},e.directories.general={storageLocations:!0,ourCompanies:!0,counterparties:!0,overheadCosts:!0,localities:!0,colors:!0,currencies:!0,templateTypes:!0,messageTemplates:!0},e.directories.lensesAndServices={contactLenses:!0,relatedGoods:!0,services:!0},e.directories.glasses={sunglasses:!0,frames:!0,lenses:!0,relatedGoods:!0,services:!0},e.documents.viewScope="ANY_WORKPLACE",e.documents.editDeleteScope="CURRENT_WORKPLACE",Object.keys(e.documents.allowedDocumentTypes).forEach(i=>{e.documents.allowedDocumentTypes[i]=!0}),e.documents.allowedDocumentTypes.enterBalances=!1,e.documents.otherPermissions.changeDocumentDate=!0,e.documents.otherPermissions.createReceiptForOtherWorkplaces=!0,e.cardex.allowAccess=!0,Object.assign(e.cardex.editPermissions,{generalData:!0,glassesSales:!0,lensesSales:!0,glassesDiscounts:!0,lensesDiscounts:!0,patientRequests:!0,glassesOrder:!0}),e.reports.summaryReports={byIncome:!0,byExpense:!0,byBalance:!0,revenueByDay:!0,consolidated:!0},e.reports.detailedReports={byIncome:!0,byExpense:!0,byBalance:!0},Object.assign(e.management,{barcodeScannerWork:!0,workWithEkka:!0,smsMailing:!0,emailMailing:!0,roomsSchedule:!0,internetServices:!0,managePaymentTypes:!0,manageDiscountScale:!0,managePriceLists:!0,manageReminders:!0,manageWorkplaces:!0}),Object.assign(e.management2.otherPermissions,{viewCostPrices:!0,workWithDiscountCards:!0,editAndCreateDiscountCards:!0,workWithGiftCertificates:!0,workWithBonuses:!0,scheduleSettings:!0,printCardex:!0}),e.management2.dataExchange.exchangeData=!0,e}function Gr(){let e=j("role-doctor","\u041B\u0456\u043A\u0430\u0440");return e.general.description="\u041F\u0440\u0438\u0439\u043E\u043C \u043F\u0430\u0446\u0456\u0454\u043D\u0442\u0456\u0432: \u043A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0430, \u043E\u0433\u043B\u044F\u0434\u0438, \u0432\u0438\u043F\u0438\u0441\u043A\u0438, \u0440\u043E\u0437\u043A\u043B\u0430\u0434.",e.directories.lensesAndServices={contactLenses:!0,relatedGoods:!1,services:!0},e.directories.glasses.lenses=!0,e.directories.glasses.frames=!0,e.documents.viewScope="OWN",e.documents.editDeleteScope="OWN",Object.assign(e.documents.allowedDocumentTypes,{glassesOrder:!0,request:!0}),e.cardex.allowAccess=!0,e.cardex.editPermissions={generalData:!0,historyAndDiagnosis:!0,examinations:!0,examinationDiary:!0,operations:!0,mainDoctors:!0,forbidDischargeForms:!1,hideDiary:!1,glassesSales:!1,lensesSales:!1,glassesDiscounts:!1,lensesDiscounts:!1,patientRequests:!0,glassesOrder:!0,hideClinicalData:!1},e.cardex.allowFutureVisits=!0,e.cardex.skipNextVisitDatePrompt=!0,e.management.roomsSchedule=!0,e.management.internetServices=!0,e.reports.hideReportsMenu=!0,e.management2.otherPermissions.printCardex=!0,e.management2.otherPermissions.scheduleEditPatientsOnly=!0,e}function Hr(){let e=j("role-auditor","\u0420\u0435\u0432\u0456\u0437\u043E\u0440");return e.general.description="\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C: \u0456\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0456\u0457, \u0437\u0430\u043B\u0438\u0448\u043A\u0438, \u0437\u0432\u0456\u0442\u0438 \u0431\u0435\u0437 \u043F\u0440\u0430\u0432\u0430 \u043F\u0440\u0430\u0432\u043A\u0438.",e.general.storageAccess="ALL",e.periods={reportsPeriodScope:"ANY_PERIOD",documentJournalPeriodScope:"ANY_PERIOD"},e.directories.general.storageLocations=!0,e.directories.general.counterparties=!0,e.documents.viewScope="ANY_WORKPLACE",e.documents.editDeleteScope="OWN",Object.assign(e.documents.allowedDocumentTypes,{inventory:!0,revaluation:!0,correction:!0,expiryUpdate:!0}),e.reports.summaryReports={byIncome:!0,byExpense:!0,byBalance:!0,revenueByDay:!0,consolidated:!0},e.reports.detailedReports={byIncome:!0,byExpense:!0,byBalance:!0},e.reports.otherReports={financialAndExpenseInvoices:!0,advanceReports:!0,correctionReports:!0,expensePriceControl:!0,cardexGeneral:!0,cardexAdmin:!1},e.reports.allowSeeDifference=!0,e.management2.otherPermissions.viewCostPrices=!0,e.management2.otherPermissions.lockDocuments=!0,e}function Vr(){let e=j("role-accountant","\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440");return e.general.description="\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438, \u0437\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C, \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0417\u041F, \u043E\u0431\u043C\u0456\u043D \u0437 1\u0421.",e.general.storageAccess="ALL",e.periods={reportsPeriodScope:"ANY_PERIOD",documentJournalPeriodScope:"ANY_PERIOD"},e.directories.general.counterparties=!0,e.directories.general.overheadCosts=!0,e.directories.general.ourCompanies=!0,e.directories.general.currencies=!0,e.documents.viewScope="ANY_WORKPLACE",e.documents.editDeleteScope="ANY_WORKPLACE",Object.assign(e.documents.allowedDocumentTypes,{financialReceipt:!0,financialExpense:!0,overheadCosts:!0,installment:!0,advance:!0,advanceReturn:!0,invoice:!0,enterBalances:!0,patientAdvanceBalance:!0}),e.documents.otherPermissions.changeDocumentDate=!0,e.reports.summaryReports={byIncome:!0,byExpense:!0,byBalance:!0,revenueByDay:!0,consolidated:!0},e.reports.detailedReports={byIncome:!0,byExpense:!0,byBalance:!0},e.reports.otherReports={financialAndExpenseInvoices:!0,advanceReports:!0,correctionReports:!0,expensePriceControl:!0,cardexGeneral:!1,cardexAdmin:!1},e.management.managePaymentTypes=!0,e.management.salaryCalculation=!0,e.management.workTimeTracking=!0,e.management2.dataExchange.exportTo1C=!0,e.management2.dataExchange.importData=!0,e.management2.otherPermissions.viewCostPrices=!0,e}function Wr(){let e=j("role-template-reception","\u0420\u0435\u0446\u0435\u043F\u0446\u0456\u044F");return e.general.description="\u0417\u0443\u0441\u0442\u0440\u0456\u0447 \u043F\u0430\u0446\u0456\u0454\u043D\u0442\u0456\u0432: \u0440\u043E\u0437\u043A\u043B\u0430\u0434, \u043E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441, \u043A\u0430\u0440\u0442\u043A\u0438, \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u044C, \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F.",e.general.startRoute="/reception",e.documents.viewScope="CURRENT_WORKPLACE",e.documents.editDeleteScope="OWN",e.cardex.allowAccess=!0,e.cardex.editPermissions.generalData=!0,e.cardex.editPermissions.patientRequests=!0,Object.assign(e.management,{roomsSchedule:!0,internetServices:!0,telephony:!0,smsMailing:!0,emailMailing:!0}),e.reports.hideReportsMenu=!0,e}function jr(){let e=j("role-template-workshop","\u0426\u0435\u0445");return e.general.description="\u0412\u0438\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043E\u043A\u0443\u043B\u044F\u0440\u0456\u0432: \u0447\u0435\u0440\u0433\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0430, \u0440\u0435\u0446\u0435\u043F\u0442 \u0456 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0447\u0456 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F.",e.general.startRoute="/production",e.general.direction="GLASSES",e.directories.glasses.lenses=!0,e.directories.glasses.frames=!0,e.documents.viewScope="CURRENT_WORKPLACE",e.documents.editDeleteScope="OWN",e.documents.orders.forbidChangeOrderStatus=!0,e.reports.hideReportsMenu=!0,e.management2.otherPermissions.productionQueue=!0,e}function $r(){let e=j("role-template-warehouse","\u0421\u043A\u043B\u0430\u0434");return e.general.description="\u0420\u0443\u0445 \u0442\u043E\u0432\u0430\u0440\u0443: \u043F\u0440\u0438\u0445\u0456\u0434, \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430, \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F, \u0456\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0456\u044F, \u0441\u043A\u0430\u043D\u0435\u0440 \u0456 \u0435\u0442\u0438\u043A\u0435\u0442\u043A\u0438.",e.general.storageAccess="ALL",e.directories.general.storageLocations=!0,e.directories.general.counterparties=!0,e.documents.viewScope="ANY_WORKPLACE",e.documents.editDeleteScope="CURRENT_WORKPLACE",Object.assign(e.documents.allowedDocumentTypes,{receipt:!0,transfer:!0,writeOff:!0,returnToSupplier:!0,expiryUpdate:!0,inventory:!0,kit:!0,request:!0}),e.documents.otherPermissions.createReceiptForOtherWorkplaces=!0,e.management.barcodeScannerWork=!0,e.reports.hideReportsMenu=!0,e}function Zr(){let e=j("role-template-marketing","\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433");return e.general.description="\u0420\u043E\u0431\u043E\u0442\u0430 \u0437 \u0431\u0430\u0437\u043E\u044E \u043F\u0430\u0446\u0456\u0454\u043D\u0442\u0456\u0432: \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0438, \u0440\u043E\u0437\u0441\u0438\u043B\u043A\u0438, \u043B\u043E\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C, \u0437\u0432\u0456\u0442\u0438 \u2014 \u0431\u0435\u0437 \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445.",e.periods.reportsPeriodScope="ANY_PERIOD",e.directories.general.messageTemplates=!0,e.cardex.allowAccess=!0,e.cardex.editPermissions.generalData=!0,e.cardex.editPermissions.hideClinicalData=!0,e.cardex.editPermissions.forbidDischargeForms=!0,e.cardex.editPermissions.hideDiary=!0,e.management.smsMailing=!0,e.management.emailMailing=!0,e.reports.otherReports.cardexGeneral=!0,e.management2.otherPermissions.workWithDiscountCards=!0,e}var la=[Wr(),jr(),$r(),Zr()].map(e=>{let a=e,{id:i,isDeleted:t}=a,n=qe(a,["id","isDeleted"]);return{id:i,name:e.general.name,description:e.general.description,roleConfig:n}}),ue=[Fr(),Br(),Ur(),Gr(),Hr(),Vr()],ft={list(e){return ue.filter(i=>e||!i.isDeleted)},get(e){return ue.find(i=>i.id===e)},create(e){let i=j(ri(),e);return ue.push(i),i},templates(){return la},createFromTemplate(e,i){let t=la.find(a=>a.id===e);if(!t)return;let n=y(h({},JSON.parse(JSON.stringify(t.roleConfig))),{id:ri(),isDeleted:!1});return n.general.name=i,ue.push(n),n},copy(e,i){let t=ft.get(e);if(!t)return;let n=y(h({},JSON.parse(JSON.stringify(t))),{id:ri()});return n.general.name=i,n.isDeleted=!1,ue.push(n),n},update(e,i){let t=ue.findIndex(n=>n.id===e);if(t!==-1)return ue[t]=y(h({},i),{id:e}),ue[t]},setDeleted(e,i){let t=ft.get(e);t&&(t.isDeleted=i)}};function Kr(){return`subdivision-${Math.random().toString(36).slice(2,10)}`}function Ze(e){return{id:e.id??Kr(),name:e.name,shortName:e.shortName??e.name,notes:e.notes??"",isDeleted:e.isDeleted??!1}}var $e=[Ze({id:"subdivision-1",name:"\u0412\u0438\u0440\u0442 1",shortName:"\u0412\u0438\u0440\u0442 1"}),Ze({id:"subdivision-2",name:"\u0432\u0438\u0440\u04422",shortName:"\u0432\u0438\u0440\u04422"}),Ze({id:"subdivision-3",name:"\u0432\u0438\u0440\u04423",shortName:"\u0432\u0438\u0440\u04423"}),Ze({id:"subdivision-antique",name:"\u0410\u043D\u0442\u0438\u0447\u043D\u0435",shortName:"\u0410\u043D\u0442\u0438\u0447\u043D\u0435"})];function Yr(e){return{id:e.id,name:e.name,shortName:e.shortName,isDeleted:e.isDeleted}}var bt={list(e){let i=e.search.trim().toLowerCase();return $e.filter(t=>!(!e.includeDeleted&&t.isDeleted||i&&!`${t.name} ${t.shortName}`.toLowerCase().includes(i))).map(Yr)},get(e){return $e.find(i=>i.id===e)},create(e){let i=Ze({name:e.name,shortName:e.shortName,notes:e.notes});return $e.push(i),i},update(e,i){let t=$e.find(n=>n.id===e);if(t)return t.name=i.name,t.shortName=i.shortName,t.notes=i.notes,t},setDeleted(e,i){let t=$e.find(n=>n.id===e);t&&(t.isDeleted=i)}};function Qr(){return`storage-${Math.random().toString(36).slice(2,10)}`}function ie(e){return{id:e.id??Qr(),name:e.name,branchId:e.branchId,subdivisionId:e.subdivisionId??null,usage:e.usage??"BOTH",priceType:e.priceType??1,company:e.company??"",address:e.address??"",phone:e.phone??"",notes:e.notes??"",isDeleted:e.isDeleted??!1}}var Le=[ie({id:"storage-mc-optika",name:"\u041C\u0426 \u041E\u043F\u0442\u0438\u043A\u0430",branchId:"branch-main",usage:"BOTH",priceType:1}),ie({id:"storage-feodosia",name:"\u0424\u0435\u043E\u0434\u043E\u0441\u0456\u044F",branchId:"branch-optika",usage:"BOTH",priceType:1}),ie({id:"storage-trade-hall",name:"\u0422\u043E\u0440\u0433\u043E\u0432\u0438\u0439 \u0437\u0430\u043B",branchId:"branch-main",usage:"BOTH",priceType:1}),ie({id:"storage-main-hall",name:'"\u0421\u041A\u041B\u0410\u0414 \u0433\u043B."',branchId:"branch-main",usage:"BOTH",priceType:1}),ie({id:"storage-alaevo",name:"\u0410\u043B\u0430\u0454\u0432\u043E",branchId:"branch-main",usage:"BOTH",priceType:1}),ie({id:"storage-velikovo",name:"\u0412\u0435\u043B\u0438\u043A\u043E\u0432\u043E",branchId:"branch-main",subdivisionId:"subdivision-1",usage:"GLASSES",priceType:2,company:"\u0422\u041E\u0412 \xAB\u041E\u043F\u0442\u0438\u043A\u0430\xBB"}),ie({id:"storage-opt",name:"\u041E\u041F\u0422",branchId:"branch-optika",usage:"BOTH",priceType:2}),ie({id:"storage-urm1",name:"\u0423\u0420\u041C-1",branchId:"branch-astrakhan",usage:"BOTH",priceType:1})],oi=[];function _t(){oi.length=0;for(let e of Le)e.isDeleted||oi.push({id:e.id,name:e.name})}_t();function ca(e){return W.get(e)?.name??""}function qr(e){return e?bt.get(e)?.name??null:null}function Xr(e){return{id:e.id,name:e.name,branchId:e.branchId,branchName:ca(e.branchId),subdivisionId:e.subdivisionId,subdivisionName:qr(e.subdivisionId),usage:e.usage,priceType:e.priceType,isDeleted:e.isDeleted}}var da={list(e){let i=e.search.trim().toLowerCase();return Le.filter(t=>!(!e.includeDeleted&&t.isDeleted||i&&!`${t.name} ${ca(t.branchId)}`.toLowerCase().includes(i))).map(Xr)},get(e){return Le.find(i=>i.id===e)},options(){return oi.map(e=>h({},e))},create(e){let i=ie(h({},e));return Le.push(i),_t(),i},update(e,i){let t=Le.find(n=>n.id===e);if(t)return t.name=i.name,t.branchId=i.branchId,t.subdivisionId=i.subdivisionId,t.usage=i.usage,t.priceType=i.priceType,t.company=i.company,t.address=i.address,t.phone=i.phone,t.notes=i.notes,_t(),t},setDeleted(e,i){let t=Le.find(n=>n.id===e);t&&(t.isDeleted=i),_t()}};function Jr(){return`user-${Math.random().toString(36).slice(2,10)}`}var fd=[{id:"DOCTOR",name:"\u041B\u0456\u043A\u0430\u0440"},{id:"NURSE",name:"\u041C\u0435\u0434\u0441\u0435\u0441\u0442\u0440\u0430"},{id:"ADMINISTRATOR",name:"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440"},{id:"SELLER",name:"\u041F\u0440\u043E\u0434\u0430\u0432\u0435\u0446\u044C"},{id:"MASTER",name:"\u041C\u0430\u0439\u0441\u0442\u0435\u0440"}];function X(e){return{id:e.id??Jr(),organizationId:e.organizationId??ve,login:e.login,fullName:e.fullName,roleId:e.roleId??null,specialty:e.specialty??null,isExternal:e.isExternal??!1,password:e.password??"",workplaceUnavailable:e.workplaceUnavailable??!1,pcName:e.pcName??"",residence:e.residence??"",phones:e.phones??"",email:e.email??"",medicalFacility:e.medicalFacility??"",color:e.color??"",taxId:e.taxId??"",tariff:e.tariff??0,subdivisionId:e.subdivisionId??null,storageLocationIds:e.storageLocationIds??[],mainStorageLocationId:e.mainStorageLocationId??null,workingHours:e.workingHours??"",isDeleted:e.isDeleted??!1}}var Ne=[X({id:"user-director",login:"\u0410\u043D\u0442\u0456\u043F\u043E\u0432",fullName:"\u0410\u043D\u0442\u0456\u043F\u043E\u0432 \u0421\u0435\u043C\u0435\u043D \u0421\u0435\u0440\u0433\u0456\u0439\u043E\u0432\u0438\u0447",roleId:"role-director",specialty:"ADMINISTRATOR",pcName:"PC-01",phones:"+380 67 000 00 01",email:"antipov@armo.ua",medicalFacility:"CLINICA",color:"#1e88e5",taxId:"1234567890",tariff:200,storageLocationIds:["storage-main-hall","storage-alaevo","storage-velikovo"],mainStorageLocationId:"storage-main-hall",workingHours:"\u041F\u043D-\u041F\u0442 9:00-18:00"}),X({id:"user-seller",login:"\u0410\u0433\u0430\u043F\u043E\u0432",fullName:"\u0410\u0433\u0430\u043F\u043E\u0432 \u0404.\u041D.",roleId:"role-seller",specialty:"SELLER",phones:"+380 67 000 00 02",email:"agapov@armo.ua",color:"#43a047",tariff:50,storageLocationIds:["storage-main-hall"],mainStorageLocationId:"storage-main-hall",workingHours:"\u041F\u043D-\u0421\u0431 10:00-19:00"}),X({id:"user-nurse",login:"\u0410\u0440\u043D\u0430",fullName:"\u0410\u0440\u043D\u0430\u0443\u0442 \u041D.\u0412.",roleId:"role-seller",specialty:"NURSE",residence:"\u043C.\u041B\u044C\u0432\u0456\u0432",phones:"+380 63 535 94 06",medicalFacility:"OPTICA",tariff:81.25,subdivisionId:"subdivision-1",storageLocationIds:["storage-velikovo"],mainStorageLocationId:"storage-velikovo",workingHours:"\u0412\u0442-\u041D\u0434 8:00-17:00"}),X({id:"user-external",login:"\u0410\u043B\u0456\u0454\u0432\u0430",fullName:"\u0410\u043B\u0456\u0454\u0432\u0430",roleId:null,specialty:"DOCTOR",isExternal:!0}),X({id:"user-optima-owner",organizationId:"org-optima",login:"\u041F\u0435\u0442\u0440\u0435\u043D\u043A\u043E",fullName:"\u041F\u0435\u0442\u0440\u0435\u043D\u043A\u043E \u0406\u0432\u0430\u043D \u0406\u0432\u0430\u043D\u043E\u0432\u0438\u0447",roleId:"role-director",specialty:"ADMINISTRATOR",phones:"+380 67 987 65 43",email:"petrenko@optima.example"}),X({id:"user-vizor-buh",organizationId:"org-vizor",login:"\u041A\u043E\u0432\u0430\u043B\u044C\u0447\u0443\u043A",fullName:"\u041A\u043E\u0432\u0430\u043B\u044C\u0447\u0443\u043A \u041C\u0430\u0440\u0456\u044F \u0421\u0435\u0440\u0433\u0456\u0457\u0432\u043D\u0430",roleId:"role-accountant",specialty:"ADMINISTRATOR",phones:"+380 48 555 11 22",email:"buh@vizor.example"}),X({id:"user-vizor-seller",organizationId:"org-vizor",login:"\u0413\u0440\u0438\u0446\u0435\u043D\u043A\u043E",fullName:"\u0413\u0440\u0438\u0446\u0435\u043D\u043A\u043E \u041E\u043B\u0435\u043D\u0430 \u0412\u0456\u043A\u0442\u043E\u0440\u0456\u0432\u043D\u0430",roleId:"role-seller",specialty:"SELLER",phones:"+380 48 555 11 23"}),X({id:"user-lumina-admin",organizationId:"org-lumina",login:"\u0414\u043E\u0440\u043E\u0448\u0435\u043D\u043A\u043E",fullName:"\u0414\u043E\u0440\u043E\u0448\u0435\u043D\u043A\u043E \u041D\u0430\u0442\u0430\u043B\u0456\u044F \u0412\u0456\u043A\u0442\u043E\u0440\u0456\u0432\u043D\u0430",roleId:"role-director",specialty:"ADMINISTRATOR",phones:"+380 57 700 33 11",email:"admin@lumina.example"}),X({id:"user-fokus-owner",organizationId:"org-fokus",login:"\u041C\u0435\u043B\u044C\u043D\u0438\u043A",fullName:"\u041C\u0435\u043B\u044C\u043D\u0438\u043A \u0421\u0435\u0440\u0433\u0456\u0439 \u041E\u043B\u0435\u0433\u043E\u0432\u0438\u0447",roleId:"role-director",specialty:"ADMINISTRATOR",phones:"+380 56 444 22 99",email:"melnyk@fokus.example"})];function eo(e){return e?ft.get(e)?.general.name??null:null}function to(e){return e?bt.get(e)?.name??null:null}function io(e){return e?da.get(e)?.name??null:null}function si(e){let a=e,{password:i,organizationId:t}=a;return qe(a,["password","organizationId"])}function no(e){return e.organizationId===me()}function ma(e){return{id:e.id,login:e.login,fullName:e.fullName,roleId:e.roleId,roleName:eo(e.roleId),specialty:e.specialty,isExternal:e.isExternal,workplaceUnavailable:e.workplaceUnavailable,pcName:e.pcName,residence:e.residence,phones:e.phones,email:e.email,medicalFacility:e.medicalFacility,color:e.color,taxId:e.taxId,tariff:e.tariff,subdivisionName:to(e.subdivisionId),mainStorageLocationName:io(e.mainStorageLocationId),isDeleted:e.isDeleted}}var ua={list(e){let i=e.search.trim().toLowerCase();return Ne.filter(t=>!(!no(t)||!e.includeDeleted&&t.isDeleted||e.type==="INTERNAL"&&t.isExternal||e.type==="EXTERNAL"&&!t.isExternal||e.specialty&&t.specialty!==e.specialty||i&&!`${t.login} ${t.fullName} ${t.phones} ${t.pcName} ${t.email} ${t.medicalFacility} ${t.taxId}`.toLowerCase().includes(i))).map(ma)},get(e){let i=Ne.find(t=>t.id===e);return i?si(i):void 0},listByOrganization(e,i=!1){return Ne.filter(t=>t.organizationId===e&&(i||!t.isDeleted)).map(ma)},create(e){let i=X({organizationId:me(),login:e.login,fullName:e.fullName,roleId:e.roleId,specialty:e.specialty,isExternal:e.isExternal,password:e.isExternal?"":e.password??"",workplaceUnavailable:e.workplaceUnavailable,pcName:e.pcName,residence:e.residence,phones:e.phones,email:e.email,medicalFacility:e.medicalFacility,color:e.color,taxId:e.taxId,tariff:e.tariff,subdivisionId:e.subdivisionId,storageLocationIds:e.storageLocationIds,mainStorageLocationId:e.mainStorageLocationId,workingHours:e.workingHours});return Ne.push(i),si(i)},update(e,i){let t=Ne.find(n=>n.id===e);if(t)return t.login=i.login,t.fullName=i.fullName,t.roleId=i.roleId,t.specialty=i.specialty,t.isExternal=i.isExternal,t.workplaceUnavailable=i.workplaceUnavailable,t.pcName=i.pcName,t.residence=i.residence,t.phones=i.phones,t.email=i.email,t.medicalFacility=i.medicalFacility,t.color=i.color,t.taxId=i.taxId,t.tariff=i.tariff,t.subdivisionId=i.subdivisionId,t.storageLocationIds=i.storageLocationIds,t.mainStorageLocationId=i.mainStorageLocationId,t.workingHours=i.workingHours,i.isExternal?t.password="":i.password!==void 0&&i.password!==""&&(t.password=i.password),si(t)},setDeleted(e,i){let t=Ne.find(n=>n.id===e);t&&(t.isDeleted=i)}};var ze=[{id:"staff-owner",login:"owner@medvision.ua",fullName:"\u0421\u043A\u043E\u0440\u043E\u043F\u0430\u0434 \u0410\u043D\u0434\u0440\u0456\u0439",role:"OWNER",password:"admin",mfaSecret:"JBSWY3DPEHPK3PXP",mustChangePassword:!1,isBlocked:!1,failedAttempts:0,lastLoginAt:"2026-08-17T08:12:00.000Z"},{id:"staff-billing",login:"billing@medvision.ua",fullName:"\u0413\u0440\u0438\u0446\u0435\u043D\u043A\u043E \u0406\u0440\u0438\u043D\u0430",role:"BILLING",password:"admin",mfaSecret:null,mustChangePassword:!1,isBlocked:!1,failedAttempts:0,lastLoginAt:null},{id:"staff-support",login:"support@medvision.ua",fullName:"\u041C\u0435\u043B\u044C\u043D\u0438\u043A \u0422\u0430\u0440\u0430\u0441",role:"SUPPORT",password:"temp-2026",mfaSecret:"KRSXG5CTMVRXEZLU",mustChangePassword:!0,isBlocked:!1,failedAttempts:0,lastLoginAt:null}],ha="123456",vt=new Map,di=new Map,li=new Map,ao=0;function ci(e){return`${e}-${++ao}-${Math.random().toString(36).slice(2,8)}`}var pa=600*1e3;function ga(e){let i=ci("admin-access"),t=ci("admin-refresh");return di.set(i,{staffId:e.id,expiresAt:Date.now()+pa}),li.set(t,e.id),{accessToken:i,refreshToken:t,expiresIn:pa/1e3}}function mi(e){let i=e.headers.get("Authorization");if(!i?.startsWith("Bearer "))return null;let t=di.get(i.slice(7));return!t||t.expiresAt<Date.now()?null:ze.find(n=>n.id===t.staffId)??null}function ro(e){return{id:e.id,login:e.login,fullName:e.fullName,role:e.role,mfaEnrolled:e.mfaSecret!==null,mustChangePassword:e.mustChangePassword,lastLoginAt:e.lastLoginAt}}function ne(e,i,t){Me({actorId:t.id,actorLogin:t.login,actorType:"SUPERADMIN",action:e,organizationId:null,targetType:"AdminStaff",targetId:t.id,before:null,after:null,ip:i.headers.get("X-Forwarded-For"),userAgent:i.headers.get("User-Agent")})}function ui(e,i){return h({sessionId:e,nextStep:null,stepData:null,authResult:null},i)}function L(e,i){return{status:e,body:{message:i}}}function oo(e){let{enabled:i,entries:t}=Vt.ipAllowlist;if(!i)return null;let n=e.headers.get("X-Forwarded-For");return n&&t.includes(n)?null:L(403,"\u0412\u0445\u0456\u0434 \u0456\u0437 \u0446\u0456\u0454\u0457 \u0430\u0434\u0440\u0435\u0441\u0438 \u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u0438\u0439")}function yt(e){return e.body??{}}function so(e){let i=oo(e);if(i)return i;let{payload:t}=yt(e),n=t?.login?.trim().toLowerCase()??"",a=ze.find(La=>La.login.toLowerCase()===n);if(!a)return ne("ADMIN_LOGIN_FAILED",e,{id:null,login:t?.login??null}),L(401,Ht);if(a.isBlocked)return ne("ADMIN_LOGIN_FAILED",e,{id:a.id,login:a.login}),L(423,"\u0410\u043A\u0430\u0443\u043D\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u043E. \u0417\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0430 \u0431\u0435\u043A-\u043E\u0444\u0456\u0441\u0443");if(a.password!==t?.password)return a.failedAttempts+=1,ne("ADMIN_LOGIN_FAILED",e,{id:a.id,login:a.login}),a.failedAttempts>=Vt.maxFailedLoginAttempts&&(a.isBlocked=!0,ne("ADMIN_ACCOUNT_LOCKED",e,{id:a.id,login:a.login})),L(401,Ht);a.failedAttempts=0;let r=ci("admin-session"),l=a.mfaSecret===null?ho():null;vt.set(r,{id:r,staffId:a.id,stage:"mfa",pendingSecret:l});let N={enrollment:l!==null,secret:l,otpauthUrl:l===null?null:`otpauth://totp/Med%20Vision%20Back%20Office:${encodeURIComponent(a.login)}?secret=${l}&issuer=Med%20Vision&algorithm=SHA1&digits=6&period=30`};return{status:200,body:ui(r,{status:"AWAITING_NEXT_STEP",nextStep:"mfa",stepData:N})}}function lo(e){let{sessionId:i,payload:t}=yt(e),n=i?vt.get(i):void 0;if(!n||n.stage!=="mfa")return L(401,"\u0421\u0435\u0441\u0456\u044F \u0432\u0445\u043E\u0434\u0443 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0430. \u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443");let a=ze.find(r=>r.id===n.staffId);return a?t?.code!==ha?(ne("ADMIN_MFA_FAILED",e,{id:a.id,login:a.login}),L(401,"\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 \u043A\u043E\u0434 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F")):(n.pendingSecret&&(a.mfaSecret=n.pendingSecret,n.pendingSecret=null,ne("ADMIN_MFA_ENROLLED",e,{id:a.id,login:a.login})),a.mustChangePassword?(n.stage="change-password",{status:200,body:ui(n.id,{status:"AWAITING_NEXT_STEP",nextStep:"change-password"})}):{status:200,body:fa(e,n,a)}):L(401,"\u0421\u0435\u0441\u0456\u044F \u0432\u0445\u043E\u0434\u0443 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0430. \u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443")}function co(e){let{sessionId:i,payload:t}=yt(e),n=i?vt.get(i):void 0;if(!n||n.stage!=="change-password")return L(401,"\u0421\u0435\u0441\u0456\u044F \u0432\u0445\u043E\u0434\u0443 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0430. \u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443");let a=ze.find(l=>l.id===n.staffId);if(!a)return L(401,"\u0421\u0435\u0441\u0456\u044F \u0432\u0445\u043E\u0434\u0443 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0430. \u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443");let r=t?.password??"";return r.length<12?L(422,"\u041F\u0430\u0440\u043E\u043B\u044C \u043C\u0430\u0454 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u0449\u043E\u043D\u0430\u0439\u043C\u0435\u043D\u0448\u0435 12 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432"):r===a.password?L(422,"\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u043C\u0430\u0454 \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0442\u0438\u0441\u044F \u0432\u0456\u0434 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u043E\u0433\u043E"):(a.password=r,a.mustChangePassword=!1,ne("ADMIN_PASSWORD_CHANGED",e,{id:a.id,login:a.login}),{status:200,body:fa(e,n,a)})}function fa(e,i,t){return vt.delete(i.id),t.lastLoginAt=new Date().toISOString(),ne("ADMIN_LOGIN_SUCCESS",e,{id:t.id,login:t.login}),ui(i.id,{status:"SUCCESS",authResult:ga(t)})}function mo(e){let{refreshToken:i}=yt(e),t=i?li.get(i):void 0,n=t?ze.find(a=>a.id===t):void 0;return!n||n.isBlocked?L(401,"\u0421\u0435\u0441\u0456\u044E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E"):(li.delete(i),{status:200,body:ga(n)})}function uo(e){let i=mi(e),t=e.headers.get("Authorization");return t?.startsWith("Bearer ")&&di.delete(t.slice(7)),i&&ne("ADMIN_LOGOUT",e,{id:i.id,login:i.login}),{status:204,body:null}}function po(e){let i=mi(e);return i?{status:200,body:ro(i)}:L(401,"\u0421\u0435\u0441\u0456\u044E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E")}function ho(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",i="";for(let t=0;t<16;t++)i+=e[Math.floor(Math.random()*e.length)];return i}var ba=[{method:"POST",pattern:/^\/api\/v1\/admin\/auth\/login$/,handle:e=>so(e)},{method:"POST",pattern:/^\/api\/v1\/admin\/auth\/mfa$/,handle:e=>lo(e)},{method:"POST",pattern:/^\/api\/v1\/admin\/auth\/change-password$/,handle:e=>co(e)},{method:"POST",pattern:/^\/api\/v1\/admin\/auth\/refresh$/,handle:e=>mo(e)},{method:"POST",pattern:/^\/api\/v1\/admin\/auth\/logout$/,handle:e=>uo(e)},{method:"GET",pattern:/^\/api\/v1\/admin\/auth\/me$/,handle:e=>po(e)}];function _a(){return ze.map(e=>({login:e.login,password:e.password,role:e.role,scenario:e.mustChangePassword?"\u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u2192 \u043F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u0430 \u0437\u043C\u0456\u043D\u0430":e.mfaSecret===null?"\u043F\u0435\u0440\u0448\u0438\u0439 \u0432\u0445\u0456\u0434 \u2192 enrollment \u0456\u0437 QR":"\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439 \u0432\u0445\u0456\u0434"}))}function Ke(e){let i=mi(e);return i?{id:i.id,login:i.login,fullName:i.fullName}:null}var va=ha;function C(e,i,t,n,a,r,l=null){let N=Ke(e);Me({actorId:N?.id??null,actorLogin:N?.login??null,actorType:"SUPERADMIN",action:i,organizationId:t,targetType:n,targetId:a,before:l,after:r,ip:null,userAgent:e.headers.get("User-Agent")})}function go(e,i=Re()){return e.revokedAt?!1:Cn(i,e.validFrom,e.validTo)}function fo(e,i=Re()){return e.filter(t=>go(t,i)).reduce((t,n)=>!t||n.validTo>t.validTo?n:t,null)}function ya(e){let i=e.today??Re(),t=e.subscription?.currentPeriodEnd??null,n=fo(e.grants,i),a=n?.validTo??null,r=_o(t,a);return{organizationId:e.organizationId,accessValidUntil:r,daysLeft:r===null?null:ct(i,r),source:bo(r,t,a),subscriptionValidUntil:t,grantValidUntil:a,activeGrantId:n?.id??null}}function bo(e,i,t){return e===null?"NONE":i===e?"SUBSCRIPTION":t===e?"GRANT":"NONE"}function _o(e,i){return e===null?i:i===null||e>=i?e:i}var vo=0;function ye(e){return`${e}-${++vo}`}var xt=[{id:"plan-start",code:"START",name:"\u0421\u0442\u0430\u0440\u0442",description:"\u041E\u0434\u0438\u043D \u043A\u0430\u0431\u0456\u043D\u0435\u0442, \u043E\u0434\u0438\u043D \u043D\u0430\u043F\u0440\u044F\u043C\u043E\u043A. \u0414\u043B\u044F \u043E\u043F\u0442\u0438\u043A\u0438, \u0449\u043E \u0442\u0456\u043B\u044C\u043A\u0438 \u0437\u0430\u0432\u043E\u0434\u0438\u0442\u044C \u043E\u0431\u043B\u0456\u043A.",features:["MODULE_GLASSES"],limits:{maxBranches:1,maxUsers:5,maxPatients:null},isPublic:!0,sortOrder:10,createdAt:"2025-01-15T09:00:00.000Z",isDeleted:!1},{id:"plan-clinic",code:"CLINIC",name:"\u041A\u043B\u0456\u043D\u0456\u043A\u0430",description:"\u041E\u0431\u0438\u0434\u0432\u0430 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0438 \u0442\u0430 \u043A\u0430\u0441\u0430. \u0422\u0438\u043F\u043E\u0432\u0438\u0439 \u0432\u0438\u0431\u0456\u0440 \u043A\u0430\u0431\u0456\u043D\u0435\u0442\u0443 \u0437 \u043F\u0440\u0438\u0439\u043E\u043C\u043E\u043C \u043B\u0456\u043A\u0430\u0440\u044F.",features:["MODULE_GLASSES","MODULE_MCL","MODULE_CASH"],limits:{maxBranches:3,maxUsers:20,maxPatients:null},isPublic:!0,sortOrder:20,createdAt:"2025-01-15T09:00:00.000Z",isDeleted:!1},{id:"plan-network",code:"NETWORK",name:"\u041C\u0435\u0440\u0435\u0436\u0430",description:"\u0423\u0441\u0456 \u043C\u043E\u0434\u0443\u043B\u0456, \u043E\u0431\u043C\u0456\u043D \u043C\u0456\u0436 \u0444\u0456\u043B\u0456\u044F\u043C\u0438 \u0442\u0430 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0456 \u0437\u0432\u0456\u0442\u0438.",features:["MODULE_GLASSES","MODULE_MCL","MODULE_CASH","REPORTS_ADVANCED","EXCHANGE"],limits:{maxBranches:null,maxUsers:null,maxPatients:null},isPublic:!0,sortOrder:30,createdAt:"2025-01-15T09:00:00.000Z",isDeleted:!1}];function we(e,i,t,n,a){return{id:e,planId:i,period:t,amount:n,pricePerBranch:a,currency:"UAH",isDeleted:!1}}var ke=[we("price-start-month","plan-start","MONTH",900,300),we("price-start-year","plan-start","YEAR",9e3,3e3),we("price-clinic-month","plan-clinic","MONTH",1800,600),we("price-clinic-year","plan-clinic","YEAR",18e3,6e3),we("price-network-month","plan-network","MONTH",3200,900),we("price-network-year","plan-network","YEAR",32e3,9e3)],g={zirPeriodEnd:_(207),optimaTrialEnd:_(5),vizorPeriodEnd:_(-18),luminaPeriodEnd:_(-40),luminaGrantFrom:_(-45),luminaGrantTo:_(100),fokusPeriodEnd:_(-95)},Be=[{id:"sub-zir",organizationId:"org-zir",planId:"plan-network",priceId:"price-network-year",status:"ACTIVE",period:"YEAR",currentPeriodStart:T(g.zirPeriodEnd,-12),currentPeriodEnd:g.zirPeriodEnd,trialEndsAt:null,cancelAtPeriodEnd:!1,quantity:4,priceSnapshot:{amount:32e3,pricePerBranch:9e3,currency:"UAH",period:"YEAR"},createdAt:"2025-03-14T09:30:00.000Z",isDeleted:!1},{id:"sub-optima",organizationId:"org-optima",planId:"plan-clinic",priceId:"price-clinic-month",status:"TRIALING",period:"MONTH",currentPeriodStart:_(-25),currentPeriodEnd:g.optimaTrialEnd,trialEndsAt:g.optimaTrialEnd,cancelAtPeriodEnd:!1,quantity:1,priceSnapshot:{amount:1800,pricePerBranch:600,currency:"UAH",period:"MONTH"},createdAt:"2026-07-20T12:35:00.000Z",isDeleted:!1},{id:"sub-vizor",organizationId:"org-vizor",planId:"plan-clinic",priceId:"price-clinic-month",status:"PAST_DUE",period:"MONTH",currentPeriodStart:T(g.vizorPeriodEnd,-1),currentPeriodEnd:g.vizorPeriodEnd,trialEndsAt:null,cancelAtPeriodEnd:!1,quantity:1,priceSnapshot:{amount:1800,pricePerBranch:600,currency:"UAH",period:"MONTH"},createdAt:"2024-11-02T08:20:00.000Z",isDeleted:!1},{id:"sub-lumina",organizationId:"org-lumina",planId:"plan-clinic",priceId:"price-clinic-month",status:"ACTIVE",period:"MONTH",currentPeriodStart:T(g.luminaPeriodEnd,-1),currentPeriodEnd:g.luminaPeriodEnd,trialEndsAt:null,cancelAtPeriodEnd:!1,quantity:2,priceSnapshot:{amount:1800,pricePerBranch:600,currency:"UAH",period:"MONTH"},createdAt:"2026-02-10T10:25:00.000Z",isDeleted:!1},{id:"sub-fokus",organizationId:"org-fokus",planId:"plan-start",priceId:"price-start-month",status:"SUSPENDED",period:"MONTH",currentPeriodStart:T(g.fokusPeriodEnd,-1),currentPeriodEnd:g.fokusPeriodEnd,trialEndsAt:null,cancelAtPeriodEnd:!0,quantity:1,priceSnapshot:{amount:900,pricePerBranch:300,currency:"UAH",period:"MONTH"},createdAt:"2023-05-18T07:50:00.000Z",isDeleted:!1}],wt=[{id:"grant-lumina-free",organizationId:"org-lumina",kind:"FREE_PERIOD",validFrom:g.luminaGrantFrom,validTo:g.luminaGrantTo,planIdOverride:null,discountPct:null,reason:"\u041F\u0456\u043B\u043E\u0442 \u043D\u0430 \u0431\u0430\u0437\u0456 \u043A\u0430\u0444\u0435\u0434\u0440\u0438 \u043E\u0444\u0442\u0430\u043B\u044C\u043C\u043E\u043B\u043E\u0433\u0456\u0457: \u0434\u043E\u043C\u043E\u0432\u043B\u0435\u043D\u0456\u0441\u0442\u044C \u0434\u043E \u043A\u0456\u043D\u0446\u044F \u043D\u0430\u0432\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u043E\u043A\u0443.",grantedByUserId:"staff-owner",grantedByName:"\u0421\u043A\u043E\u0440\u043E\u043F\u0430\u0434 \u0410\u043D\u0434\u0440\u0456\u0439",createdAt:"2026-07-04T11:15:00.000Z",revokedAt:null,revokedByUserId:null,revokeReason:null},{id:"grant-lumina-trial",organizationId:"org-lumina",kind:"TRIAL_EXTENSION",validFrom:_(-120),validTo:_(-60),planIdOverride:null,discountPct:null,reason:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u0442\u0440\u0456\u0430\u043B\u0443 \u043D\u0430 \u0447\u0430\u0441 \u0443\u0437\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u0437 \u0443\u043D\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u043E\u043C.",grantedByUserId:"staff-billing",grantedByName:"\u0413\u0440\u0438\u0446\u0435\u043D\u043A\u043E \u0406\u0440\u0438\u043D\u0430",createdAt:"2026-04-18T08:40:00.000Z",revokedAt:"2026-05-30T14:05:00.000Z",revokedByUserId:"staff-owner",revokeReason:"\u0417\u0430\u043C\u0456\u043D\u0435\u043D\u043E \u043E\u043A\u0440\u0435\u043C\u043E\u044E \u0434\u043E\u043C\u043E\u0432\u043B\u0435\u043D\u0456\u0441\u0442\u044E \u043F\u0440\u043E \u043F\u0456\u043B\u043E\u0442."},{id:"grant-vizor-grace",organizationId:"org-vizor",kind:"GRACE",validFrom:_(-17),validTo:_(-5),planIdOverride:null,discountPct:null,reason:"\u0412\u0456\u0434\u0442\u0435\u0440\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0434\u0432\u0430 \u0442\u0438\u0436\u043D\u0456: \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440 \u0443 \u0432\u0456\u0434\u043F\u0443\u0441\u0442\u0446\u0456, \u043E\u043F\u043B\u0430\u0442\u0443 \u043E\u0431\u0456\u0446\u044F\u044E\u0442\u044C.",grantedByUserId:"staff-billing",grantedByName:"\u0413\u0440\u0438\u0446\u0435\u043D\u043A\u043E \u0406\u0440\u0438\u043D\u0430",createdAt:"2026-07-30T09:10:00.000Z",revokedAt:null,revokedByUserId:null,revokeReason:null}];function xe(e,i,t,n){return{id:e,description:i,quantity:t,unitPrice:n,amount:t*n}}var Ye=[{id:"inv-zir-year",number:"MV-2026-0012",organizationId:"org-zir",subscriptionId:"sub-zir",periodFrom:T(g.zirPeriodEnd,-12),periodTo:g.zirPeriodEnd,lines:[xe("inv-zir-year-1","\u0422\u0430\u0440\u0438\u0444 \xAB\u041C\u0435\u0440\u0435\u0436\u0430\xBB, \u0440\u0456\u0447\u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0430",1,32e3),xe("inv-zir-year-2","\u0424\u0456\u043B\u0456\u0457, \u0440\u0456\u0447\u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0430",4,9e3)],subtotal:68e3,total:68e3,currency:"UAH",status:"PAID",issuedAt:`${T(g.zirPeriodEnd,-12)}T09:00:00.000Z`,dueDate:T(g.zirPeriodEnd,-12),paidAt:`${T(g.zirPeriodEnd,-12)}T14:22:00.000Z`,pdfUrl:null,publicToken:"pay-zir-2026",notes:""},{id:"inv-vizor-july",number:"MV-2026-0031",organizationId:"org-vizor",subscriptionId:"sub-vizor",periodFrom:T(g.vizorPeriodEnd,-1),periodTo:g.vizorPeriodEnd,lines:[xe("inv-vizor-july-1","\u0422\u0430\u0440\u0438\u0444 \xAB\u041A\u043B\u0456\u043D\u0456\u043A\u0430\xBB, \u043C\u0456\u0441\u044F\u0446\u044C",1,1800),xe("inv-vizor-july-2","\u0424\u0456\u043B\u0456\u0457, \u043C\u0456\u0441\u044F\u0446\u044C",1,600)],subtotal:2400,total:2400,currency:"UAH",status:"ISSUED",issuedAt:`${_(-25)}T10:00:00.000Z`,dueDate:_(-11),paidAt:null,pdfUrl:null,publicToken:"pay-vizor-july",notes:"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F; \u043E\u0431\u0456\u0446\u044F\u044E\u0442\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u043F\u0456\u0441\u043B\u044F \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430."},{id:"inv-fokus-may",number:"MV-2026-0004",organizationId:"org-fokus",subscriptionId:"sub-fokus",periodFrom:T(g.fokusPeriodEnd,-1),periodTo:g.fokusPeriodEnd,lines:[xe("inv-fokus-may-1","\u0422\u0430\u0440\u0438\u0444 \xAB\u0421\u0442\u0430\u0440\u0442\xBB, \u043C\u0456\u0441\u044F\u0446\u044C",1,900),xe("inv-fokus-may-2","\u0424\u0456\u043B\u0456\u0457, \u043C\u0456\u0441\u044F\u0446\u044C",1,300)],subtotal:1200,total:1200,currency:"UAH",status:"ISSUED",issuedAt:`${_(-102)}T08:30:00.000Z`,dueDate:_(-88),paidAt:null,pdfUrl:null,publicToken:"pay-fokus-may",notes:"\u0422\u0440\u0438 \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0435\u0437 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456. \u0414\u043E\u0441\u0442\u0443\u043F \u043F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0435\u043D\u043E, \u0434\u0430\u043D\u0456 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0456."}],Qe=[{id:"pay-zir-year",invoiceId:"inv-zir-year",organizationId:"org-zir",provider:"BANK_TRANSFER",providerRef:"\u0412\u0438\u043F\u0438\u0441\u043A\u0430, \u043F\u043B\u0430\u0442\u0456\u0436 \u21162214",amount:68e3,currency:"UAH",status:"SUCCEEDED",method:"\u041F\u0435\u0440\u0435\u043A\u0430\u0437 \u0437 \u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0430\u0445\u0443\u043D\u043A\u0443",paidAt:`${T(g.zirPeriodEnd,-12)}T14:22:00.000Z`,receiptUrl:null,confirmedByUserId:"staff-billing",comment:"\u0417\u0432\u0456\u0440\u0435\u043D\u043E \u0437 \u0432\u0438\u043F\u0438\u0441\u043A\u043E\u044E.",createdAt:`${T(g.zirPeriodEnd,-12)}T14:25:00.000Z`},{id:"pay-vizor-part",invoiceId:"inv-vizor-july",organizationId:"org-vizor",provider:"BANK_TRANSFER",providerRef:"\u0412\u0438\u043F\u0438\u0441\u043A\u0430, \u043F\u043B\u0430\u0442\u0456\u0436 \u211677",amount:1e3,currency:"UAH",status:"SUCCEEDED",method:"\u041F\u0435\u0440\u0435\u043A\u0430\u0437 \u0437 \u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0430\u0445\u0443\u043D\u043A\u0443",paidAt:`${_(-13)}T11:40:00.000Z`,receiptUrl:null,confirmedByUserId:"staff-billing",comment:"\u0427\u0430\u0441\u0442\u043A\u043E\u0432\u0430 \u043E\u043F\u043B\u0430\u0442\u0430, \u0440\u0435\u0448\u0442\u0443 \u043E\u0431\u0456\u0446\u044F\u044E\u0442\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u043C.",createdAt:`${_(-13)}T11:45:00.000Z`}];function At(e){return R.get(e)?.name??"\u2014"}function xa(e){return xt.find(i=>i.id===e)?.name??"\u2014"}function yo(e){return{id:e.id,code:e.code,name:e.name,features:e.features,limits:e.limits,isPublic:e.isPublic,sortOrder:e.sortOrder,isDeleted:e.isDeleted,prices:ke.filter(i=>i.planId===e.id&&!i.isDeleted),subscriptionCount:Be.filter(i=>i.planId===e.id&&!i.isDeleted).length}}function kt(e){let i=u.access(e.organizationId);return{id:e.id,organizationId:e.organizationId,organizationName:At(e.organizationId),planId:e.planId,planName:xa(e.planId),status:e.status,period:e.period,currentPeriodStart:e.currentPeriodStart,currentPeriodEnd:e.currentPeriodEnd,trialEndsAt:e.trialEndsAt,cancelAtPeriodEnd:e.cancelAtPeriodEnd,quantity:e.quantity,periodTotal:En(e),currency:e.priceSnapshot.currency,accessValidUntil:i.accessValidUntil,daysLeft:i.daysLeft,hasActiveGrant:i.activeGrantId!==null,isDeleted:e.isDeleted}}function wo(e,i){return{id:e.id,organizationId:e.organizationId,organizationName:At(e.organizationId),kind:e.kind,validFrom:e.validFrom,validTo:e.validTo,discountPct:e.discountPct,reason:e.reason,grantedByName:e.grantedByName,createdAt:e.createdAt,revokedAt:e.revokedAt,isActive:!e.revokedAt&&i>=e.validFrom&&i<=e.validTo}}function xo(e,i){return e.status!=="ISSUED"?e.status:e.dueDate<i?"OVERDUE":"ISSUED"}function ka(e){return Qe.filter(i=>i.invoiceId===e&&i.status==="SUCCEEDED").reduce((i,t)=>i+t.amount,0)}function ko(e){return Ye.filter(i=>i.organizationId===e&&i.status!=="VOID").reduce((i,t)=>i+Math.max(0,t.total-ka(t.id)),0)}function Ao(e){return Qe.filter(i=>i.organizationId===e&&i.status==="SUCCEEDED"&&i.paidAt!==null).reduce((i,t)=>!i||t.paidAt>i?t.paidAt:i,null)}function So(e,i){let t=xo(e,i);return{id:e.id,number:e.number,organizationId:e.organizationId,organizationName:At(e.organizationId),periodFrom:e.periodFrom,periodTo:e.periodTo,total:e.total,currency:e.currency,status:t,issuedAt:e.issuedAt,dueDate:e.dueDate,paidAt:e.paidAt,balanceDue:Math.max(0,e.total-ka(e.id)),daysOverdue:t==="OVERDUE"?ct(e.dueDate,i):0}}function Io(e){return{id:e.id,invoiceId:e.invoiceId,invoiceNumber:Ye.find(i=>i.id===e.invoiceId)?.number??"\u2014",organizationId:e.organizationId,organizationName:At(e.organizationId),provider:e.provider,providerRef:e.providerRef,amount:e.amount,currency:e.currency,status:e.status,method:e.method,paidAt:e.paidAt}}function wa(e,i){for(let t of i.prices){let n=t.id?ke.find(a=>a.id===t.id&&a.planId===e):void 0;if(n){n.period=t.period,n.amount=t.amount,n.pricePerBranch=t.pricePerBranch,n.currency=t.currency;continue}ke.push(we(ye("price"),e,t.period,t.amount,t.pricePerBranch))}}var Do=40;function Co(){return`MV-${new Date().getUTCFullYear()}-${String(++Do).padStart(4,"0")}`}var u={today(){return Re()},listPlans(e){let i=e.search.trim().toLowerCase();return xt.filter(t=>!(!e.includeDeleted&&t.isDeleted||i&&!`${t.code} ${t.name}`.toLowerCase().includes(i))).sort((t,n)=>t.sortOrder-n.sortOrder).map(yo)},getPlan(e){return xt.find(i=>i.id===e)},getPlanPrices(e){return ke.filter(i=>i.planId===e&&!i.isDeleted)},createPlan(e){let i={id:ye("plan"),code:e.code,name:e.name,description:e.description,features:[...e.features],limits:h({},e.limits),isPublic:e.isPublic,sortOrder:e.sortOrder,createdAt:new Date().toISOString(),isDeleted:!1};return xt.push(i),wa(i.id,e),i},updatePlan(e,i){let t=this.getPlan(e);if(t)return t.code=i.code,t.name=i.name,t.description=i.description,t.features=[...i.features],t.limits=h({},i.limits),t.isPublic=i.isPublic,t.sortOrder=i.sortOrder,wa(t.id,i),t},setPlanDeleted(e,i){let t=this.getPlan(e);t&&(t.isDeleted=i)},countPlanSubscriptions(e){return Be.filter(i=>i.planId===e&&!i.isDeleted).length},listSubscriptions(e){return Be.filter(i=>!(!e.includeDeleted&&i.isDeleted||e.organizationId&&i.organizationId!==e.organizationId||e.status&&i.status!==e.status)).map(kt)},getSubscription(e){return Be.find(i=>i.id===e)},subscriptionByOrganization(e){return Be.find(i=>i.organizationId===e&&!i.isDeleted)??null},createSubscription(e){let i=ke.find(n=>n.id===e.priceId);if(!i)return;let t={id:ye("sub"),organizationId:e.organizationId,planId:e.planId,priceId:e.priceId,status:e.status,period:i.period,currentPeriodStart:e.currentPeriodStart,currentPeriodEnd:e.currentPeriodEnd,trialEndsAt:e.trialEndsAt,cancelAtPeriodEnd:e.cancelAtPeriodEnd,quantity:W.countByOrganization(e.organizationId),priceSnapshot:dt(i),createdAt:new Date().toISOString(),isDeleted:!1};return Be.push(t),t},updateSubscription(e,i){let t=this.getSubscription(e),n=ke.find(a=>a.id===i.priceId);if(!(!t||!n))return t.planId=i.planId,t.priceId=i.priceId,t.status=i.status,t.period=n.period,t.currentPeriodStart=i.currentPeriodStart,t.currentPeriodEnd=i.currentPeriodEnd,t.trialEndsAt=i.trialEndsAt,t.cancelAtPeriodEnd=i.cancelAtPeriodEnd,t.priceSnapshot=dt(n),t},setSubscriptionDeleted(e,i){let t=this.getSubscription(e);t&&(t.isDeleted=i)},applyExtension(e,i){let t=this.getSubscription(e);if(t)return Object.assign(t,Mn(t,i,this.today())),t},applyPlanChange(e,i,t){let n=this.getSubscription(e),a=ke.find(r=>r.id===t&&r.planId===i&&!r.isDeleted);if(!(!n||!a))return n.planId=i,n.priceId=a.id,n.period=a.period,n.priceSnapshot=dt(a),n.quantity=W.countByOrganization(n.organizationId),n},applyCancellation(e,i){let t=this.getSubscription(e);if(t)return Object.assign(t,On(t,i,this.today())),t},listGrants(e){let i=this.today();return wt.filter(t=>!e.organizationId||t.organizationId===e.organizationId).map(t=>wo(t,i)).filter(t=>!e.activeOnly||t.isActive)},getGrant(e){return wt.find(i=>i.id===e)},grantsByOrganization(e){return wt.filter(i=>i.organizationId===e)},createGrant(e,i){let t={id:ye("grant"),organizationId:e.organizationId,kind:e.kind,validFrom:e.validFrom,validTo:e.validTo,planIdOverride:e.planIdOverride,discountPct:e.discountPct,reason:e.reason,grantedByUserId:i.id,grantedByName:i.fullName,createdAt:new Date().toISOString(),revokedAt:null,revokedByUserId:null,revokeReason:null};return wt.push(t),t},listInvoices(e){let i=this.today();return Ye.filter(t=>!e.organizationId||t.organizationId===e.organizationId).map(t=>So(t,i)).filter(t=>!e.status||t.status===e.status)},getInvoice(e){return Ye.find(i=>i.id===e)},createInvoice(e){let i=ye("inv"),t=e.lines.map((r,l)=>xe(`${i}-${l+1}`,r.description,r.quantity,r.unitPrice)),n=t.reduce((r,l)=>r+l.amount,0),a={id:i,number:Co(),organizationId:e.organizationId,subscriptionId:e.subscriptionId,periodFrom:e.periodFrom,periodTo:e.periodTo,lines:t,subtotal:n,total:n,currency:"UAH",status:"DRAFT",issuedAt:null,dueDate:e.dueDate,paidAt:null,pdfUrl:null,publicToken:ye("pay-token"),notes:e.notes};return Ye.push(a),a},listPayments(e){return Qe.filter(i=>!(e.organizationId&&i.organizationId!==e.organizationId||e.invoiceId&&i.invoiceId!==e.invoiceId)).map(Io)},getPayment(e){return Qe.find(i=>i.id===e)},createPayment(e,i){let t=this.getInvoice(e.invoiceId);if(!t)return;let n={id:ye("pay"),invoiceId:t.id,organizationId:t.organizationId,provider:e.provider,providerRef:e.providerRef,amount:e.amount,currency:t.currency,status:"SUCCEEDED",method:e.method,paidAt:e.paidAt,receiptUrl:null,confirmedByUserId:i,comment:e.comment,createdAt:new Date().toISOString()};return Qe.push(n),n},access(e){return ya({organizationId:e,subscription:this.subscriptionByOrganization(e),grants:this.grantsByOrganization(e),today:this.today()})},organizationSummary(e){let i=this.subscriptionByOrganization(e),t=this.access(e),n=t.activeGrantId?this.getGrant(t.activeGrantId):void 0;return{planName:i?xa(i.planId):null,subscriptionStatus:i?.status??null,accessValidUntil:t.accessValidUntil,daysLeft:t.daysLeft,lastPaymentAt:Ao(e),debt:ko(e),currency:i?.priceSnapshot.currency??"UAH",activeGrantKind:n?.kind??null}}};function Fe(e){return{status:e.status,planId:e.planId,period:e.period,currentPeriodEnd:e.currentPeriodEnd,cancelAtPeriodEnd:e.cancelAtPeriodEnd,quantity:e.quantity}}function pi(e){let i=e?.reason?.trim();return i||null}var hi={status:422,body:{message:"\u0414\u0456\u044F \u043D\u0430\u0434 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u043E\u044E \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454 \u043F\u0440\u0438\u0447\u0438\u043D\u0438"}},Eo=[{action:"INVOICE_MARKED_PAID",organizationId:"org-zir",targetType:"invoice",targetId:"inv-zir-year",actorId:"staff-billing",actorLogin:"billing@medvision.ua",actorType:"SUPERADMIN",createdAt:`${T(g.zirPeriodEnd,-12)}T14:25:00.000Z`,after:{status:"PAID",amount:68e3}},{action:"GRANT_REVOKED",organizationId:"org-lumina",targetType:"grant",targetId:"grant-lumina-trial",actorId:"staff-owner",actorLogin:"owner@medvision.ua",actorType:"SUPERADMIN",createdAt:"2026-05-30T14:05:00.000Z",after:{revokeReason:"\u0417\u0430\u043C\u0456\u043D\u0435\u043D\u043E \u043E\u043A\u0440\u0435\u043C\u043E\u044E \u0434\u043E\u043C\u043E\u0432\u043B\u0435\u043D\u0456\u0441\u0442\u044E \u043F\u0440\u043E \u043F\u0456\u043B\u043E\u0442."}},{action:"GRANT_ISSUED",organizationId:"org-lumina",targetType:"grant",targetId:"grant-lumina-free",actorId:"staff-owner",actorLogin:"owner@medvision.ua",actorType:"SUPERADMIN",createdAt:"2026-07-04T11:15:00.000Z",after:{kind:"FREE_PERIOD",validTo:g.luminaGrantTo}},{action:"INVOICE_ISSUED",organizationId:"org-vizor",targetType:"invoice",targetId:"inv-vizor-july",actorId:"staff-billing",actorLogin:"billing@medvision.ua",actorType:"SUPERADMIN",createdAt:`${_(-25)}T10:00:00.000Z`,after:{total:2400,dueDate:_(-11)}},{action:"PAYMENT_REGISTERED",organizationId:"org-vizor",targetType:"payment",targetId:"pay-vizor-part",actorId:"staff-billing",actorLogin:"billing@medvision.ua",actorType:"SUPERADMIN",createdAt:`${_(-13)}T11:45:00.000Z`,after:{amount:1e3,balanceDue:1400}},{action:"SUBSCRIPTION_STATUS_CHANGED",organizationId:"org-fokus",targetType:"subscription",targetId:"sub-fokus",actorId:null,actorLogin:null,actorType:"SYSTEM",createdAt:`${_(-81)}T00:05:00.000Z`,after:{status:"SUSPENDED",reason:"\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D\u043E \u043F\u0456\u0441\u043B\u044F grace"}}];for(let e of Eo)Me({actorId:e.actorId,actorLogin:e.actorLogin,actorType:e.actorType,action:e.action,organizationId:e.organizationId,targetType:e.targetType,targetId:e.targetId,before:null,after:e.after,ip:null,userAgent:null,createdAt:e.createdAt});var Aa=[{method:"GET",pattern:/^\/api\/v1\/admin\/plans$/,handle:e=>({status:200,body:u.listPlans({includeDeleted:e.params.get("includeDeleted")==="true",search:e.params.get("search")??""})})},{method:"POST",pattern:/^\/api\/v1\/admin\/plans$/,handle:e=>{let i=u.createPlan(e.body);return C(e,"PLAN_CREATED",null,"plan",i.id,i),{status:201,body:i}}},{method:"POST",pattern:/^\/api\/v1\/admin\/plans\/([^/]+)\/restore$/,handle:(e,i)=>(u.setPlanDeleted(i[1],!1),C(e,"PLAN_RESTORED",null,"plan",i[1],null),{status:204,body:null})},{method:"GET",pattern:/^\/api\/v1\/admin\/plans\/([^/]+)$/,handle:(e,i)=>{let t=u.getPlan(i[1]);return t?{status:200,body:y(h({},t),{prices:u.getPlanPrices(t.id)})}:{status:404,body:null}}},{method:"PUT",pattern:/^\/api\/v1\/admin\/plans\/([^/]+)$/,handle:(e,i)=>{let t=u.updatePlan(i[1],e.body);return t?(C(e,"PLAN_UPDATED",null,"plan",t.id,t),{status:200,body:t}):{status:404,body:null}}},{method:"DELETE",pattern:/^\/api\/v1\/admin\/plans\/([^/]+)$/,handle:(e,i)=>u.countPlanSubscriptions(i[1])>0?{status:409,body:{message:"\u0422\u0430\u0440\u0438\u0444 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0430\u043C\u0438"}}:(u.setPlanDeleted(i[1],!0),C(e,"PLAN_DELETED",null,"plan",i[1],null),{status:204,body:null})},{method:"GET",pattern:/^\/api\/v1\/admin\/subscriptions$/,handle:e=>({status:200,body:u.listSubscriptions({organizationId:e.params.get("organizationId"),status:e.params.get("status"),includeDeleted:e.params.get("includeDeleted")==="true"})})},{method:"POST",pattern:/^\/api\/v1\/admin\/subscriptions$/,handle:e=>{let i=u.createSubscription(e.body);return i?(C(e,"SUBSCRIPTION_CREATED",i.organizationId,"subscription",i.id,i),{status:201,body:i}):{status:422,body:{message:"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u0446\u0456\u043D\u0430 \u0442\u0430\u0440\u0438\u0444\u0443"}}}},{method:"POST",pattern:/^\/api\/v1\/admin\/subscriptions\/([^/]+)\/restore$/,handle:(e,i)=>(u.setSubscriptionDeleted(i[1],!1),{status:204,body:null})},{method:"POST",pattern:/^\/api\/v1\/admin\/subscriptions\/([^/]+)\/extend$/,handle:(e,i)=>{let t=pi(e.body);if(!t)return hi;let n=e.body;if(!Number.isInteger(n.periods)||n.periods<1||n.periods>Wt)return{status:422,body:{message:`\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0456\u043E\u0434\u0456\u0432 \u2014 \u0446\u0456\u043B\u0435 \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 1 \u0434\u043E ${Wt}`}};let a=u.getSubscription(i[1]);if(!a)return{status:404,body:null};if(!Tn(a))return{status:409,body:{message:"\u0421\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0443 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u043D\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u044E\u0442\u044C"}};let r=Fe(a);return u.applyExtension(a.id,n.periods),C(e,"SUBSCRIPTION_EXTENDED",a.organizationId,"subscription",a.id,y(h({},Fe(a)),{periods:n.periods,reason:t}),r),{status:200,body:kt(a)}}},{method:"POST",pattern:/^\/api\/v1\/admin\/subscriptions\/([^/]+)\/change-plan$/,handle:(e,i)=>{let t=pi(e.body);if(!t)return hi;let n=e.body,a=u.getSubscription(i[1]);if(!a)return{status:404,body:null};let r=Fe(a),l=u.applyPlanChange(a.id,n.planId,n.priceId);return l?(C(e,"SUBSCRIPTION_PLAN_CHANGED",l.organizationId,"subscription",l.id,y(h({},Fe(l)),{reason:t}),r),{status:200,body:kt(l)}):{status:422,body:{message:"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0430 \u0446\u0456\u043D\u0430 \u043E\u0431\u0440\u0430\u043D\u043E\u0433\u043E \u0442\u0430\u0440\u0438\u0444\u0443"}}}},{method:"POST",pattern:/^\/api\/v1\/admin\/subscriptions\/([^/]+)\/cancel$/,handle:(e,i)=>{let t=pi(e.body);if(!t)return hi;let n=e.body,a=u.getSubscription(i[1]);if(!a)return{status:404,body:null};if(!Rn(a))return{status:409,body:{message:"\u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0432\u0436\u0435 \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E"}};let r=Fe(a);return u.applyCancellation(a.id,n.immediate===!0),C(e,"SUBSCRIPTION_CANCELLED",a.organizationId,"subscription",a.id,y(h({},Fe(a)),{immediate:n.immediate===!0,reason:t}),r),{status:200,body:kt(a)}}},{method:"GET",pattern:/^\/api\/v1\/admin\/subscriptions\/([^/]+)$/,handle:(e,i)=>{let t=u.getSubscription(i[1]);return t?{status:200,body:t}:{status:404,body:null}}},{method:"PUT",pattern:/^\/api\/v1\/admin\/subscriptions\/([^/]+)$/,handle:(e,i)=>{let t=u.getSubscription(i[1])?.status??null,n=u.updateSubscription(i[1],e.body);return n?(C(e,t===n.status?"SUBSCRIPTION_UPDATED":"SUBSCRIPTION_STATUS_CHANGED",n.organizationId,"subscription",n.id,n),{status:200,body:n}):{status:404,body:null}}},{method:"DELETE",pattern:/^\/api\/v1\/admin\/subscriptions\/([^/]+)$/,handle:(e,i)=>(u.setSubscriptionDeleted(i[1],!0),{status:204,body:null})},{method:"GET",pattern:/^\/api\/v1\/admin\/grants$/,handle:e=>({status:200,body:u.listGrants({organizationId:e.params.get("organizationId"),activeOnly:e.params.get("activeOnly")==="true"})})},{method:"POST",pattern:/^\/api\/v1\/admin\/grants$/,handle:e=>{let i=e.body;if(!i.validTo||!i.reason?.trim())return{status:422,body:{message:"\u0413\u0440\u0430\u043D\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454 \u0434\u0430\u0442\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0439 \u043F\u0440\u0438\u0447\u0438\u043D\u0438"}};let t=Ke(e),n=u.createGrant(i,{id:t?.id??"staff-unknown",fullName:t?.fullName??"\u041D\u0435\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440"});return C(e,"GRANT_ISSUED",n.organizationId,"grant",n.id,n),{status:201,body:n}}},{method:"GET",pattern:/^\/api\/v1\/admin\/grants\/([^/]+)$/,handle:(e,i)=>{let t=u.getGrant(i[1]);return t?{status:200,body:t}:{status:404,body:null}}},{method:"GET",pattern:/^\/api\/v1\/admin\/invoices$/,handle:e=>({status:200,body:u.listInvoices({organizationId:e.params.get("organizationId"),status:e.params.get("status")})})},{method:"POST",pattern:/^\/api\/v1\/admin\/invoices$/,handle:e=>{let i=u.createInvoice(e.body);return C(e,"INVOICE_ISSUED",i.organizationId,"invoice",i.id,i),{status:201,body:i}}},{method:"GET",pattern:/^\/api\/v1\/admin\/invoices\/([^/]+)$/,handle:(e,i)=>{let t=u.getInvoice(i[1]);return t?{status:200,body:t}:{status:404,body:null}}},{method:"GET",pattern:/^\/api\/v1\/admin\/payments$/,handle:e=>({status:200,body:u.listPayments({organizationId:e.params.get("organizationId"),invoiceId:e.params.get("invoiceId")})})},{method:"POST",pattern:/^\/api\/v1\/admin\/payments$/,handle:e=>{let i=Ke(e),t=u.createPayment(e.body,i?.id??null);return t?(C(e,"PAYMENT_REGISTERED",t.organizationId,"payment",t.id,t),{status:201,body:t}):{status:404,body:{message:"\u0420\u0430\u0445\u0443\u043D\u043E\u043A \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"}}}},{method:"GET",pattern:/^\/api\/v1\/admin\/payments\/([^/]+)$/,handle:(e,i)=>{let t=u.getPayment(i[1]);return t?{status:200,body:t}:{status:404,body:null}}}];var Ia=/^\/api\/v1\/admin\/organizations$/,St=/^\/api\/v1\/admin\/organizations\/([^/]+)$/,To=[{method:"GET",pattern:Ia},{method:"GET",pattern:St},{method:"PUT",pattern:St}],Ro=ra.filter(e=>!To.some(i=>i.method===e.method&&i.pattern.source===e.pattern.source));function Mo(e){let i=e.get("expiresInDays");return{includeDeleted:e.get("includeDeleted")==="true",status:e.get("status")??null,search:e.get("search")??"",expiresInDays:i===null||i===""?null:Number(i),overdue:e.get("overdue")==="true",subscriptionStatus:e.get("subscriptionStatus")??null,onGrant:e.get("onGrant")==="true"}}function Da(e){return h(h({},e),u.organizationSummary(e.id))}function Sa(e){return y(h(y(h({},e),{branchCount:W.countByOrganization(e.id)}),u.organizationSummary(e.id)),{access:u.access(e.id)})}function Oo(e){return{id:e.id,name:e.name,shortName:e.shortName,isMain:e.isMain,isVirtual:e.isVirtual,address:e.address,stopWork:e.stopWork,isDeleted:e.isDeleted}}function Po(e){return{id:e.id,login:e.login,fullName:e.fullName,roleName:e.roleName,email:e.email,phones:e.phones,isExternal:e.isExternal,isDeleted:e.isDeleted}}function Lo(e=!1){return R.list({includeDeleted:e,status:null,search:""}).map(Da)}var Ca=[{method:"GET",pattern:/^\/api\/v1\/admin\/organizations\/summary$/,handle:()=>({status:200,body:Ln(Lo())})},{method:"GET",pattern:Ia,handle:e=>{let i=Mo(e.params);return{status:200,body:R.list({includeDeleted:i.includeDeleted,status:i.status,search:i.search}).map(Da).filter(n=>Pn(n,i))}}},{method:"GET",pattern:/^\/api\/v1\/admin\/organizations\/([^/]+)\/branches$/,handle:(e,i)=>({status:200,body:W.listByOrganization(i[1],e.params.get("includeDeleted")==="true").map(Oo)})},{method:"GET",pattern:/^\/api\/v1\/admin\/organizations\/([^/]+)\/users$/,handle:(e,i)=>({status:200,body:ua.listByOrganization(i[1],e.params.get("includeDeleted")==="true").map(Po)})},{method:"GET",pattern:St,handle:(e,i)=>{let t=R.get(i[1]);return t?{status:200,body:Sa(t)}:{status:404,body:null}}},{method:"PUT",pattern:St,handle:(e,i)=>{let t=R.get(i[1]);if(!t)return{status:404,body:null};let n=h({},t),a=R.update(i[1],e.body);return a?(C(e,"ORGANIZATION_UPDATED",a.id,"organization",a.id,a,n),{status:200,body:Sa(a)}):{status:404,body:null}}},...Ro];var No=[...ba,...Ca,...Aa,...Jn],Ea=400;function zo(e){return bi(e).pipe(xi(Ea))}function Fo(e){return vi(Ea).pipe(_i(()=>Ae(()=>e)))}function Bo(e){let i=e.url.split("?")[0];for(let t of No){if(t.method!==e.method)continue;let n=i.match(t.pattern);if(n)return t.handle(e,n)}return null}var Ta=(e,i)=>{if(!o(de).isMockModeActive())return i(e);let n=Bo(e);return n?(console.log(`[AdminMockInterceptor] ${e.method} ${e.url} -> \u043C\u043E\u043A`),n.status>=400?Fo(new Wi({error:n.body,status:n.status,statusText:"Error",url:e.url})):zo(new Vi({body:n.body,status:n.status,statusText:"OK"}))):i(e)};var Uo="/api/v1/admin/",Go=["/api/v1/admin/auth/login","/api/v1/admin/auth/mfa","/api/v1/admin/auth/change-password","/api/v1/admin/auth/refresh"],Ra=(e,i)=>{let t=o(te);if(!Ho(e.url))return i(e);let n=t.getAccessToken(),a=n?Ma(e,n):e;return i(a).pipe(Tt(r=>{let l=e.url.startsWith("/api/v1/admin/auth/refresh");return r.status===401&&n&&!l?Vo(e,i,t):Ae(()=>r)}))};function Ho(e){return e.startsWith(Uo)?!Go.some(i=>e.startsWith(i)):!1}function Ma(e,i){return e.clone({setHeaders:{Authorization:`Bearer ${i}`}})}function Vo(e,i,t){let n=t.getRefreshToken();return n?i(new Hi("POST","/api/v1/admin/auth/refresh",{refreshToken:n},{responseType:"json"})).pipe(ki(a=>{let r=a.body;return r?.accessToken?(t.saveTokens(r),i(Ma(e,r.accessToken))):i(e)}),Tt(a=>(t.expire("expired"),Ae(()=>a)))):(t.expire("expired"),Ae(()=>new Error("\u0421\u0435\u0441\u0456\u044E \u0431\u0435\u043A-\u043E\u0444\u0456\u0441\u0443 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E")))}function Wo(){return Pt(()=>{o(fn).setDefaultFontSetClass("material-symbols-outlined","mat-ligature-font")})}var jo=y(h({},new hn),{panelClass:"mv-dialog"});function $o(){return Pt(()=>o(te).startIdleWatch())}var Oa={providers:[Ii(),Yi(qn,Qi()),Nn(),zn(),{provide:We,useValue:"uk-UA"},{provide:gn,useValue:jo},Wo(),ji($i([Ra,Ta])),$o()]};var Zo=["switch"],Ko=["*"];function Yo(e,i){e&1&&(c(0,"span",11),Lt(),c(1,"svg",13),O(2,"path",14),d(),c(3,"svg",15),O(4,"path",16),d()())}var Qo=new Z("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),It=class{source;checked;constructor(i,t){this.source=i,this.checked=t}},gi=(()=>{class e{_elementRef=o(F);_focusMonitor=o(at);_changeDetectorRef=o(fe);defaults=o(Qo);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new It(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=De();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new oe;toggleChange=new oe;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){o(rt).load(ot);let t=o(new zi("tabindex"),{optional:!0}),n=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=n.color||"accent",this.id=this._uniqueId=o(an).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new It(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=b({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(n,a){if(n&1&&ge(Zo,5),n&2){let r;w(r=x())&&(a._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,a){n&2&&(Pi("id",a.id),I("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),it(a.color?"mat-"+a.color:""),v("mat-mdc-slide-toggle-focused",a._focused)("mat-mdc-slide-toggle-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",be],color:"color",disabled:[2,"disabled","disabled",be],disableRipple:[2,"disableRipple","disableRipple",be],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Bi(t)],checked:[2,"checked","checked",be],hideIcon:[2,"hideIcon","hideIcon",be],disabledInteractive:[2,"disabledInteractive","disabledInteractive",be]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Y([{provide:_n,useExisting:Ot(()=>e),multi:!0},{provide:vn,useExisting:e,multi:!0}]),Nt],ngContentSelectors:Ko,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,a){if(n&1&&(E(),c(0,"div",1)(1,"button",2,0),k("click",function(){return a._handleClick()}),O(3,"div",3)(4,"span",4),c(5,"span",5)(6,"span",6)(7,"span",7),O(8,"span",8),d(),c(9,"span",9),O(10,"span",10),d(),A(11,Yo,5,0,"span",11),d()()(),c(12,"label",12),k("click",function(l){return l.stopPropagation()}),f(13),d()()),n&2){let r=Ge(2);M("labelPosition",a.labelPosition),m(),v("mdc-switch--selected",a.checked)("mdc-switch--unselected",!a.checked)("mdc-switch--checked",a.checked)("mdc-switch--disabled",a.disabled)("mat-mdc-slide-toggle-disabled-interactive",a.disabledInteractive),M("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("disabled",a.disabled&&!a.disabledInteractive),I("id",a.buttonId)("name",a.name)("aria-label",a.ariaLabel)("aria-labelledby",a._getAriaLabelledBy())("aria-describedby",a.ariaDescribedby)("aria-required",a.required||null)("aria-checked",a.checked)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),m(9),M("matRippleTrigger",r)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),m(),S(a.hideIcon?-1:11),m(),M("for",a.buttonId),I("id",a._labelId)}},dependencies:[sn,mn],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return e})(),Pa=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=U({imports:[gi,Q]})}return e})();var Xo=(e,i)=>i.login;function Jo(e,i){e&1&&(p(0," \u0423\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u0438\u0439 \u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C: \u0431\u0435\u043A\u0435\u043D\u0434\u0430 "),c(1,"code"),p(2,"/api/v1/admin/*"),d(),p(3," \u0449\u0435 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454. "))}function es(e,i){e&1&&p(0," \u0412\u0438\u043C\u043A\u043D\u0435\u043D\u043E \u2014 \u0437\u0430\u043F\u0438\u0442\u0438 \u043F\u0456\u0434\u0443\u0442\u044C \u0443 \u043C\u0435\u0440\u0435\u0436\u0443. \u041F\u043E\u043A\u0438 \u0431\u0435\u043A\u0435\u043D\u0434\u0430 \u043D\u0435\u043C\u0430\u0454, \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043E\u043A \u043F\u043E\u043A\u0430\u0436\u0435 \u043F\u043E\u0440\u043E\u0436\u043D\u0456 \u0435\u043A\u0440\u0430\u043D\u0438 \u0439 \u043F\u043E\u043C\u0438\u043B\u043A\u0438 \u0432\u0445\u043E\u0434\u0443. ")}function ts(e,i){if(e&1&&(c(0,"div",10)(1,"code"),p(2),d(),c(3,"code"),p(4),d()(),c(5,"p",8),p(6),d()),e&2){let t=i.$implicit;m(2),B(t.login),m(2),B(t.password),m(2),Li("",t.role," \u2014 ",t.scenario)}}function is(e,i){if(e&1){let t=he();c(0,"aside",1)(1,"header",2)(2,"h2"),p(3,"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043A\u0456\u0432"),d(),c(4,"button",3),k("click",function(){ae(t);let a=D();return re(a.close())}),c(5,"mat-icon"),p(6,"close"),d()()(),c(7,"div",4)(8,"div",5),p(9,"\u0420\u0435\u0436\u0438\u043C \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0438"),d(),c(10,"div",6)(11,"span"),p(12,"\u041C\u043E\u043A-\u0440\u0435\u0436\u0438\u043C API"),d(),c(13,"mat-slide-toggle",7),k("change",function(){ae(t);let a=D();return re(a.toggleMock())}),d()(),c(14,"p",8),A(15,Jo,4,0)(16,es,1,0),d(),c(17,"div",5),p(18,"\u041C\u043E\u043A-\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0438"),d(),c(19,"div",9),Je(20,ts,7,4,null,null,Xo),d(),c(22,"div",10)(23,"span"),p(24,"\u041A\u043E\u0434 2FA"),d(),c(25,"code"),p(26),d()(),c(27,"p",8),p(28," \u041A\u043E\u0434 \u0444\u0456\u043A\u0441\u043E\u0432\u0430\u043D\u0438\u0439 \u043B\u0438\u0448\u0435 \u0432 \u043C\u043E\u043A\u0430\u0445; \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0440\u0430\u0445\u0443\u0454 TOTP \u0437\u0430 RFC 6238. \u0414\u0440\u0443\u0433\u0438\u0439 \u043A\u0440\u043E\u043A \u0432\u0445\u043E\u0434\u0443 \u043D\u0435 \u0432\u0438\u043C\u0438\u043A\u0430\u0454\u0442\u044C\u0441\u044F \u2014 \u0430\u043D\u0456 \u0442\u0443\u0442, \u0430\u043D\u0456 \u0440\u043E\u043B\u043B\u044E. "),d()()()}if(e&2){let t=D();m(13),M("checked",t.mockConfig.isMockModeActive()),m(2),S(t.mockConfig.isMockModeActive()?15:16),m(5),et(t.credentials),m(6),B(t.totpCode)}}var Dt=class e{mockConfig=o(de);credentials=_a();totpCode=va;isOpen=z(!1);toggle(){this.isOpen.update(i=>!i)}close(){this.isOpen.set(!1)}onEscape(){this.close()}toggleMock(){this.mockConfig.toggleMockMode()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=b({type:e,selectors:[["admin-config-panel"]],hostBindings:function(t,n){t&1&&k("keydown.escape",function(){return n.onEscape()},Ti)},decls:4,vars:5,consts:[["type","button","aria-label","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043A\u0456\u0432","title","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043A\u0456\u0432",1,"dev-panel-handle",3,"click"],["role","dialog","aria-label","\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u043A\u0456\u0432",1,"dev-panel"],[1,"dev-panel__header"],["mat-icon-button","","aria-label","\u0417\u0430\u043A\u0440\u0438\u0442\u0438",3,"click"],[1,"dev-panel__body"],[1,"dev-panel__section"],[1,"dev-panel__row"],[3,"change","checked"],[1,"dev-panel__hint"],[1,"dev-panel__creds"],[1,"dev-panel__cred"]],template:function(t,n){t&1&&(c(0,"button",0),k("click",function(){return n.toggle()}),c(1,"mat-icon"),p(2),d()(),A(3,is,29,3,"aside",1)),t&2&&(v("is-open",n.isOpen()),I("aria-expanded",n.isOpen()),m(2),B(n.isOpen()?"chevron_right":"chevron_left"),m(),S(n.isOpen()?3:-1))},dependencies:[lt,st,Te,Ee,Pa,gi],encapsulation:2})};var Ct=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=b({type:e,selectors:[["admin-root"]],decls:2,vars:0,template:function(t,n){t&1&&O(0,"admin-config-panel")(1,"router-outlet")},dependencies:[nt,Dt],styles:["[_nghost-%COMP%]{display:block;height:100dvh}"]})};Gi(Ct,Oa).catch(e=>console.error(e));
