/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return $(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=document.body,t=document.documentElement,o=r(10)&&getComputedStyle(t);return{height:h('Height',e,t,o),width:h('Width',e,t,o)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c():{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(a.top=$(a.top,0),a.left=$(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var y=parseFloat(m.marginTop,10),w=parseFloat(m.marginLeft,10);b.top-=h-y,b.bottom-=h-y,b.left-=c-w,b.right-=c-w,b.marginTop=y,b.marginLeft=w}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=$(o.clientWidth,window.innerWidth||0),r=$(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function w(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||w(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=y(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!w(d)){var m=c(),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function F(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function K(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function G(e){return'end'===e?'start':'start'===e?'end':e}function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}function V(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?$(document.documentElement.clientHeight,window.innerHeight||0):$(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function _(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function X(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:_(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var J=Math.min,Q=Math.round,Z=Math.floor,$=Math.max,ee='undefined'!=typeof window&&'undefined'!=typeof document,te=['Edge','Trident','Firefox'],oe=0,ne=0;ne<te.length;ne+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ne])){oe=1;break}var i=ee&&window.Promise,ie=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=ee&&!!(window.MSInputMethodContext&&document.documentMode),pe=ee&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3),he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return F.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=fe,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:X,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=$(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=J(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=$(J(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,Q(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=z(n);break;case he.COUNTERCLOCKWISE:p=z(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=G(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h={left:Z(i.left),top:Q(i.top),bottom:Q(i.bottom),right:Z(i.right)},c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==g?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==g?-1:1;m[c]=d*y,m[g]=s*w,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ce});
//# sourceMappingURL=popper.min.js.map
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,h){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,h=h&&h.hasOwnProperty("default")?h.default:h;var r,n,o,a,c,u,f,d,g,_,m,p,v,y,E,C,T,b,S,I,A,D,w,N,O,k,P,j,H,L,R,x,W,U,q,F,K,M,Q,B,V,Y,z,J,Z,G,$,X,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ut,ft,dt,gt,_t,mt,pt,vt,yt,Et,Ct,Tt,bt,St,It,At,Dt,wt,Nt,Ot,kt,Pt,jt,Ht,Lt,Rt,xt,Wt,Ut,qt,Ft,Kt,Mt,Qt,Bt,Vt,Yt,zt,Jt,Zt,Gt,$t,Xt,te,ee,ne,ie,re,oe,se,ae,le,ce,he,ue,fe,de,ge,_e,me,pe,ve,ye,Ee,Ce,Te,be,Se,Ie,Ae,De,we,Ne,Oe,ke,Pe,je,He,Le,Re,xe,We,Ue,qe,Fe,Ke,Me,Qe,Be,Ve,Ye,ze,Je,Ze,Ge,$e,Xe,tn,en,nn,rn,on,sn,an,ln,cn,hn,un,fn,dn,gn,_n,mn,pn,vn,yn,En,Cn,Tn,bn,Sn,In,An,Dn,wn,Nn,On,kn,Pn,jn,Hn,Ln,Rn,xn,Wn,Un,qn,Fn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),Kn=(n="alert",a="."+(o="bs.alert"),c=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",g="show",_=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=Fn.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(g),r(e).hasClass(d)){var t=Fn.getTransitionDurationFromElement(e);r(e).one(Fn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),r.fn[n]=_._jQueryInterface,r.fn[n].Constructor=_,r.fn[n].noConflict=function(){return r.fn[n]=c,_._jQueryInterface},_),Mn=(p="button",y="."+(v="bs.button"),E=".data-api",C=(m=e).fn[p],T="active",b="btn",I='[data-toggle^="button"]',A='[data-toggle="buttons"]',D="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:(S="focus")+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(A)[0];if(n){var i=this._element.querySelector(D);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))t=!1;else{var r=n.querySelector(w);r&&m(r).removeClass(T)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(T),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),t&&m(this._element).toggleClass(T)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),n}(),m(document).on(O.CLICK_DATA_API,I,function(t){t.preventDefault();var e=t.target;m(e).hasClass(b)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,I,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(S,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=C,k._jQueryInterface},k),Qn=(j="carousel",L="."+(H="bs.carousel"),R=".data-api",x=(P=e).fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},q="next",F="prev",K="left",M="right",Q={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+R,CLICK_DATA_API:"click"+L+R},B="carousel",V="active",Y="slide",z="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",G="carousel-item-prev",$=".active",X=".active.carousel-item",tt=".carousel-item",et=".carousel-item-next, .carousel-item-prev",nt=".carousel-indicators",it="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',ot=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=this._element.querySelector(nt),this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(q)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(et)&&(Fn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(X);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?q:F;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(L),P.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),Fn.typeCheckConfig(j,t,U),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===q,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(X)),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));P(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&P(n).addClass(V)}},t._slide=function(t,e){var n,i,r,o=this,s=this._element.querySelector(X),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===q?(n=J,i=Z,r=K):(n=z,i=G,r=M),l&&P(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(P(this._element).hasClass(Y)){P(l).addClass(i),Fn.reflow(l),P(s).addClass(n),P(l).addClass(n);var f=Fn.getTransitionDurationFromElement(s);P(s).one(Fn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(V),P(s).removeClass(V+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return P(o._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(s).removeClass(V),P(l).addClass(V),this._isSliding=!1,P(this._element).trigger(u);h&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(H),e=l({},W,P(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),P(this).data(H,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=Fn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=l({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(P(n),i),r&&P(n).data(H).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return W}}]),o}(),P(document).on(Q.CLICK_DATA_API,it,ot._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=P(t[e]);ot._jQueryInterface.call(i,i.data())}}),P.fn[j]=ot._jQueryInterface,P.fn[j].Constructor=ot,P.fn[j].noConflict=function(){return P.fn[j]=x,ot._jQueryInterface},ot),Bn=(at="collapse",ct="."+(lt="bs.collapse"),ht=(st=e).fn[at],ut={toggle:!0,parent:""},ft={toggle:"boolean",parent:"(string|element)"},dt={SHOW:"show"+ct,SHOWN:"shown"+ct,HIDE:"hide"+ct,HIDDEN:"hidden"+ct,CLICK_DATA_API:"click"+ct+".data-api"},gt="show",_t="collapse",mt="collapsing",pt="collapsed",vt="width",yt="height",Et=".show, .collapsing",Ct='[data-toggle="collapse"]',Tt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Ct)),i=0,r=n.length;i<r;i++){var o=n[i],s=Fn.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){st(this._element).hasClass(gt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!st(this._element).hasClass(gt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Et)).filter(function(t){return t.getAttribute("data-parent")===n._config.parent})).length&&(t=null),!(t&&(e=st(t).not(this._selector).data(lt))&&e._isTransitioning))){var i=st.Event(dt.SHOW);if(st(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(st(t).not(this._selector),"hide"),e||st(t).data(lt,null));var r=this._getDimension();st(this._element).removeClass(_t).addClass(mt),this._element.style[r]=0,this._triggerArray.length&&st(this._triggerArray).removeClass(pt).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){st(n._element).removeClass(mt).addClass(_t).addClass(gt),n._element.style[r]="",n.setTransitioning(!1),st(n._element).trigger(dt.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&st(this._element).hasClass(gt)){var e=st.Event(dt.HIDE);if(st(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Fn.reflow(this._element),st(this._element).addClass(mt).removeClass(_t).removeClass(gt);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=Fn.getSelectorFromElement(o);if(null!==s)st([].slice.call(document.querySelectorAll(s))).hasClass(gt)||st(o).addClass(pt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){t.setTransitioning(!1),st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){st.removeData(this._element,lt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ut,t)).toggle=Boolean(t.toggle),Fn.typeCheckConfig(at,t,ft),t},t._getDimension=function(){return st(this._element).hasClass(vt)?vt:yt},t._getParent=function(){var n=this,t=null;Fn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return st(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=st(t).hasClass(gt);e.length&&st(e).toggleClass(pt,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Fn.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=st(this),e=t.data(lt),n=l({},ut,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(lt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ut}}]),a}(),st(document).on(dt.CLICK_DATA_API,Ct,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=st(this),e=Fn.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));st(i).each(function(){var t=st(this),e=t.data(lt)?"toggle":n.data();Tt._jQueryInterface.call(t,e)})}),st.fn[at]=Tt._jQueryInterface,st.fn[at].Constructor=Tt,st.fn[at].noConflict=function(){return st.fn[at]=ht,Tt._jQueryInterface},Tt),Vn=(St="dropdown",At="."+(It="bs.dropdown"),Dt=".data-api",wt=(bt=e).fn[St],Nt=new RegExp("38|40|27"),Ot={HIDE:"hide"+At,HIDDEN:"hidden"+At,SHOW:"show"+At,SHOWN:"shown"+At,CLICK:"click"+At,CLICK_DATA_API:"click"+At+Dt,KEYDOWN_DATA_API:"keydown"+At+Dt,KEYUP_DATA_API:"keyup"+At+Dt},kt="disabled",Pt="show",jt="dropup",Ht="dropright",Lt="dropleft",Rt="dropdown-menu-right",xt="position-static",Wt='[data-toggle="dropdown"]',Ut=".dropdown form",qt=".dropdown-menu",Ft=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Mt="top-start",Qt="top-end",Bt="bottom-start",Vt="bottom-end",Yt="right-start",zt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Gt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!bt(this._element).hasClass(kt)){var t=c._getParentFromElement(this._element),e=bt(this._menu).hasClass(Pt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=bt.Event(Ot.SHOW,n);if(bt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof h)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Fn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&bt(t).addClass(xt),this._popper=new h(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===bt(t).closest(Ft).length&&bt(document.body).children().on("mouseover",null,bt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),bt(this._menu).toggleClass(Pt),bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN,n))}}}},t.dispose=function(){bt.removeData(this._element,It),bt(this._element).off(At),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;bt(this._element).on(Ot.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,bt(this._element).data(),t),Fn.typeCheckConfig(St,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=bt(this._element.parentNode),e=Bt;return t.hasClass(jt)?(e=Mt,bt(this._menu).hasClass(Rt)&&(e=Qt)):t.hasClass(Ht)?e=Yt:t.hasClass(Lt)?e=zt:bt(this._menu).hasClass(Rt)&&(e=Vt),e},t._detectNavbar=function(){return 0<bt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=bt(this).data(It);if(t||(t=new c(this,"object"==typeof e?e:null),bt(this).data(It,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Wt)),n=0,i=e.length;n<i;n++){var r=c._getParentFromElement(e[n]),o=bt(e[n]).data(It),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),o){var a=o._menu;if(bt(r).hasClass(Pt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&bt.contains(r,t.target))){var l=bt.Event(Ot.HIDE,s);bt(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&bt(document.body).children().off("mouseover",null,bt.noop),e[n].setAttribute("aria-expanded","false"),bt(a).removeClass(Pt),bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=Fn.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||bt(t.target).closest(qt).length)):Nt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!bt(this).hasClass(kt))){var e=c._getParentFromElement(this),n=bt(e).hasClass(Pt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=e.querySelector(Wt);bt(o).trigger("focus")}bt(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}(),bt(document).on(Ot.KEYDOWN_DATA_API,Wt,Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API,qt,Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API+" "+Ot.KEYUP_DATA_API,Gt._clearMenus).on(Ot.CLICK_DATA_API,Wt,function(t){t.preventDefault(),t.stopPropagation(),Gt._jQueryInterface.call(bt(this),"toggle")}).on(Ot.CLICK_DATA_API,Ut,function(t){t.stopPropagation()}),bt.fn[St]=Gt._jQueryInterface,bt.fn[St].Constructor=Gt,bt.fn[St].noConflict=function(){return bt.fn[St]=wt,Gt._jQueryInterface},Gt),Yn=(Xt="modal",ee="."+(te="bs.modal"),ne=($t=e).fn[Xt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},re={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},oe={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){$t(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=$t.Event(oe.SHOW,{relatedTarget:t});$t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),$t(document.body).addClass(le),this._setEscapeEvent(),this._setResizeEvent(),$t(this._element).on(oe.CLICK_DISMISS,de,function(t){return e.hide(t)}),$t(this._dialog).on(oe.MOUSEDOWN_DISMISS,function(){$t(e._element).one(oe.MOUSEUP_DISMISS,function(t){$t(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=$t.Event(oe.HIDE);if($t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=$t(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),$t(document).off(oe.FOCUSIN),$t(this._element).removeClass(he),$t(this._element).off(oe.CLICK_DISMISS),$t(this._dialog).off(oe.MOUSEDOWN_DISMISS),i){var r=Fn.getTransitionDurationFromElement(this._element);$t(this._element).one(Fn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){$t.removeData(this._element,te),$t(window,document,this._element,this._backdrop).off(ee),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),Fn.typeCheckConfig(Xt,t,re),t},t._showElement=function(t){var e=this,n=$t(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Fn.reflow(this._element),$t(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=$t.Event(oe.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,$t(e._element).trigger(i)};if(n){var o=Fn.getTransitionDurationFromElement(this._element);$t(this._dialog).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===$t(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?$t(this._element).on(oe.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||$t(this._element).off(oe.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?$t(window).on(oe.RESIZE,function(t){return e.handleUpdate(t)}):$t(window).off(oe.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){$t(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),$t(t._element).trigger(oe.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&($t(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=$t(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),$t(this._backdrop).appendTo(document.body),$t(this._element).on(oe.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Fn.reflow(this._backdrop),$t(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){$t(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if($t(this._element).hasClass(ce)){var o=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));$t(t).each(function(t,e){var n=e.style.paddingRight,i=$t(e).css("padding-right");$t(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),$t(e).each(function(t,e){var n=e.style.marginRight,i=$t(e).css("margin-right");$t(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=$t(document.body).css("padding-right");$t(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));$t(t).each(function(t,e){var n=$t(e).data("padding-right");$t(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));$t(e).each(function(t,e){var n=$t(e).data("margin-right");"undefined"!=typeof n&&$t(e).css("margin-right",n).removeData("margin-right")});var n=$t(document.body).data("padding-right");$t(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=$t(this).data(te),e=l({},ie,$t(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),$t(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ie}}]),r}(),$t(document).on(oe.CLICK_DATA_API,fe,function(t){var e,n=this,i=Fn.getSelectorFromElement(this);i&&(e=document.querySelector(i));var r=$t(e).data(te)?"toggle":l({},$t(e).data(),$t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=$t(e).one(oe.SHOW,function(t){t.isDefaultPrevented()||o.one(oe.HIDDEN,function(){$t(n).is(":visible")&&n.focus()})});me._jQueryInterface.call($t(e),r,this)}),$t.fn[Xt]=me._jQueryInterface,$t.fn[Xt].Constructor=me,$t.fn[Xt].noConflict=function(){return $t.fn[Xt]=ne,me._jQueryInterface},me),zn=(ve="tooltip",Ee="."+(ye="bs.tooltip"),Ce=(pe=e).fn[ve],Te="bs-tooltip",be=new RegExp("(^|\\s)"+Te+"\\S+","g"),Ae={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Ie={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},we="out",Ne={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:(De="show")+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Oe="fade",ke="show",Pe=".tooltip-inner",je=".arrow",He="hover",Le="focus",Re="click",xe="manual",We=function(){function i(t,e){if("undefined"==typeof h)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=pe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(pe(this.getTipElement()).hasClass(ke))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),pe.removeData(this.element,this.constructor.DATA_KEY),pe(this.element).off(this.constructor.EVENT_KEY),pe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&pe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===pe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=pe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){pe(this.element).trigger(t);var n=pe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Fn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&pe(i).addClass(Oe);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:pe(document).find(this.config.container);pe(i).data(this.constructor.DATA_KEY,this),pe.contains(this.element.ownerDocument.documentElement,this.tip)||pe(i).appendTo(a),pe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new h(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:je},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),pe(i).addClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().on("mouseover",null,pe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,pe(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(pe(this.tip).hasClass(Oe)){var c=Fn.getTransitionDurationFromElement(this.tip);pe(this.tip).one(Fn.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=pe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),pe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(pe(this.element).trigger(i),!i.isDefaultPrevented()){if(pe(n).removeClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().off("mouseover",null,pe.noop),this._activeTrigger[Re]=!1,this._activeTrigger[Le]=!1,this._activeTrigger[He]=!1,pe(this.tip).hasClass(Oe)){var o=Fn.getTransitionDurationFromElement(n);pe(n).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){pe(this.getTipElement()).addClass(Te+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||pe(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(pe(t.querySelectorAll(Pe)),this.getTitle()),pe(t).removeClass(Oe+" "+ke)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?pe(e).parent().is(t)||t.empty().append(e):t.text(pe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return Ie[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)pe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==xe){var e=t===He?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===He?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;pe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}pe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Le:He]=!0),pe(e.getTipElement()).hasClass(ke)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Le:He]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,pe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Fn.typeCheckConfig(ve,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=pe(this.getTipElement()),e=t.attr("class").match(be);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(pe(t).removeClass(Oe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=pe(this).data(ye),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),pe(this).data(ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ae}},{key:"NAME",get:function(){return ve}},{key:"DATA_KEY",get:function(){return ye}},{key:"Event",get:function(){return Ne}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}(),pe.fn[ve]=We._jQueryInterface,pe.fn[ve].Constructor=We,pe.fn[ve].noConflict=function(){return pe.fn[ve]=Ce,We._jQueryInterface},We),Jn=(qe="popover",Ke="."+(Fe="bs.popover"),Me=(Ue=e).fn[qe],Qe="bs-popover",Be=new RegExp("(^|\\s)"+Qe+"\\S+","g"),Ve=l({},zn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ye=l({},zn.DefaultType,{content:"(string|element|function)"}),ze="fade",Ze=".popover-header",Ge=".popover-body",$e={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:(Je="show")+Ke,SHOWN:"shown"+Ke,INSERTED:"inserted"+Ke,CLICK:"click"+Ke,FOCUSIN:"focusin"+Ke,FOCUSOUT:"focusout"+Ke,MOUSEENTER:"mouseenter"+Ke,MOUSELEAVE:"mouseleave"+Ke},Xe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Ue(this.getTipElement()).addClass(Qe+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Ue(this.config.template)[0],this.tip},r.setContent=function(){var t=Ue(this.getTipElement());this.setElementContent(t.find(Ze),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ge),e),t.removeClass(ze+" "+Je)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Ue(this.getTipElement()),e=t.attr("class").match(Be);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Ue(this).data(Fe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Ue(this).data(Fe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ve}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Fe}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Ke}},{key:"DefaultType",get:function(){return Ye}}]),i}(zn),Ue.fn[qe]=Xe._jQueryInterface,Ue.fn[qe].Constructor=Xe,Ue.fn[qe].noConflict=function(){return Ue.fn[qe]=Me,Xe._jQueryInterface},Xe),Zn=(en="scrollspy",rn="."+(nn="bs.scrollspy"),on=(tn=e).fn[en],sn={offset:10,method:"auto",target:""},an={offset:"number",method:"string",target:"(string|element)"},ln={ACTIVATE:"activate"+rn,SCROLL:"scroll"+rn,LOAD_DATA_API:"load"+rn+".data-api"},cn="dropdown-item",hn="active",un='[data-spy="scroll"]',fn=".active",dn=".nav, .list-group",gn=".nav-link",_n=".nav-item",mn=".list-group-item",pn=".dropdown",vn=".dropdown-item",yn=".dropdown-toggle",En="offset",Cn="position",Tn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+gn+","+this._config.target+" "+mn+","+this._config.target+" "+vn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn(this._scrollElement).on(ln.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?En:Cn,r="auto"===this._config.method?t:this._config.method,o=r===Cn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=Fn.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[tn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){tn.removeData(this._element,nn),tn(this._scrollElement).off(rn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},sn,"object"==typeof t&&t?t:{})).target){var e=tn(t.target).attr("id");e||(e=Fn.getUID(en),tn(t.target).attr("id",e)),t.target="#"+e}return Fn.typeCheckConfig(en,t,an),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=tn([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(cn)?(n.closest(pn).find(yn).addClass(hn),n.addClass(hn)):(n.addClass(hn),n.parents(dn).prev(gn+", "+mn).addClass(hn),n.parents(dn).prev(_n).children(gn).addClass(hn)),tn(this._scrollElement).trigger(ln.ACTIVATE,{relatedTarget:e})},t._clear=function(){var t=[].slice.call(document.querySelectorAll(this._selector));tn(t).filter(fn).removeClass(hn)},n._jQueryInterface=function(e){return this.each(function(){var t=tn(this).data(nn);if(t||(t=new n(this,"object"==typeof e&&e),tn(this).data(nn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return sn}}]),n}(),tn(window).on(ln.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(un)),e=t.length;e--;){var n=tn(t[e]);Tn._jQueryInterface.call(n,n.data())}}),tn.fn[en]=Tn._jQueryInterface,tn.fn[en].Constructor=Tn,tn.fn[en].noConflict=function(){return tn.fn[en]=on,Tn._jQueryInterface},Tn),Gn=(In="."+(Sn="bs.tab"),An=(bn=e).fn.tab,Dn={HIDE:"hide"+In,HIDDEN:"hidden"+In,SHOW:"show"+In,SHOWN:"shown"+In,CLICK_DATA_API:"click"+In+".data-api"},wn="dropdown-menu",Nn="active",On="disabled",kn="fade",Pn="show",jn=".dropdown",Hn=".nav, .list-group",Ln=".active",Rn="> li > .active",xn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wn=".dropdown-toggle",Un="> .dropdown-menu .active",qn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&bn(this._element).hasClass(Nn)||bn(this._element).hasClass(On))){var t,i,e=bn(this._element).closest(Hn)[0],r=Fn.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?Rn:Ln;i=(i=bn.makeArray(bn(e).find(o)))[i.length-1]}var s=bn.Event(Dn.HIDE,{relatedTarget:this._element}),a=bn.Event(Dn.SHOW,{relatedTarget:i});if(i&&bn(i).trigger(s),bn(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,e);var l=function(){var t=bn.Event(Dn.HIDDEN,{relatedTarget:n._element}),e=bn.Event(Dn.SHOWN,{relatedTarget:i});bn(i).trigger(t),bn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){bn.removeData(this._element,Sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?bn(e).find(Rn):bn(e).children(Ln))[0],o=n&&r&&bn(r).hasClass(kn),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=Fn.getTransitionDurationFromElement(r);bn(r).one(Fn.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){bn(e).removeClass(Pn+" "+Nn);var i=bn(e.parentNode).find(Un)[0];i&&bn(i).removeClass(Nn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(bn(t).addClass(Nn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Fn.reflow(t),bn(t).addClass(Pn),t.parentNode&&bn(t.parentNode).hasClass(wn)){var r=bn(t).closest(jn)[0];if(r){var o=[].slice.call(r.querySelectorAll(Wn));bn(o).addClass(Nn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=bn(this),e=t.data(Sn);if(e||(e=new i(this),t.data(Sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),bn(document).on(Dn.CLICK_DATA_API,xn,function(t){t.preventDefault(),qn._jQueryInterface.call(bn(this),"show")}),bn.fn.tab=qn._jQueryInterface,bn.fn.tab.Constructor=qn,bn.fn.tab.noConflict=function(){return bn.fn.tab=An,qn._jQueryInterface},qn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Fn,t.Alert=Kn,t.Button=Mn,t.Carousel=Qn,t.Collapse=Bn,t.Dropdown=Vn,t.Modal=Yn,t.Popover=Jn,t.Scrollspy=Zn,t.Tab=Gn,t.Tooltip=zn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
!function(){for(var t,e=function(){},i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=i.length,n=window.console=window.console||{};o--;)n[t=i[o]]||(n[t]=e)}(),function(t){"use strict";t.fn.counterUp=function(e){var i=t.extend({time:400,delay:10},e);return this.each(function(){var e=t(this),o=i;e.waypoint(function(){var t=[],i=o.time/o.delay,n=e.text(),r=/[0-9]+,[0-9]+/.test(n);n=n.replace(/,/g,"");/^[0-9]+$/.test(n);for(var s=/^[0-9]+\.[0-9]+$/.test(n),a=s?(n.split(".")[1]||[]).length:0,l=i;l>=1;l--){var c=parseInt(n/i*l);if(s&&(c=parseFloat(n/i*l).toFixed(a)),r)for(;/(\d+)(\d{3})/.test(c.toString());)c=c.toString().replace(/(\d+)(\d{3})/,"$1,$2");t.unshift(c)}e.data("counterup-nums",t),e.text("0");e.data("counterup-func",function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),o.delay):(e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))}),setTimeout(e.data("counterup-func"),o.delay)},{offset:"100%",triggerOnce:!0})})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,o,n){return jQuery.easing[jQuery.easing.def](t,e,i,o,n)},easeInQuad:function(t,e,i,o,n){return o*(e/=n)*e+i},easeOutQuad:function(t,e,i,o,n){return-o*(e/=n)*(e-2)+i},easeInOutQuad:function(t,e,i,o,n){return(e/=n/2)<1?o/2*e*e+i:-o/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,o,n){return o*(e/=n)*e*e+i},easeOutCubic:function(t,e,i,o,n){return o*((e=e/n-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,o,n){return(e/=n/2)<1?o/2*e*e*e+i:o/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,o,n){return o*(e/=n)*e*e*e+i},easeOutQuart:function(t,e,i,o,n){return-o*((e=e/n-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,o,n){return(e/=n/2)<1?o/2*e*e*e*e+i:-o/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,o,n){return o*(e/=n)*e*e*e*e+i},easeOutQuint:function(t,e,i,o,n){return o*((e=e/n-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,o,n){return(e/=n/2)<1?o/2*e*e*e*e*e+i:o/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,o,n){return-o*Math.cos(e/n*(Math.PI/2))+o+i},easeOutSine:function(t,e,i,o,n){return o*Math.sin(e/n*(Math.PI/2))+i},easeInOutSine:function(t,e,i,o,n){return-o/2*(Math.cos(Math.PI*e/n)-1)+i},easeInExpo:function(t,e,i,o,n){return 0==e?i:o*Math.pow(2,10*(e/n-1))+i},easeOutExpo:function(t,e,i,o,n){return e==n?i+o:o*(1-Math.pow(2,-10*e/n))+i},easeInOutExpo:function(t,e,i,o,n){return 0==e?i:e==n?i+o:(e/=n/2)<1?o/2*Math.pow(2,10*(e-1))+i:o/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,o,n){return-o*(Math.sqrt(1-(e/=n)*e)-1)+i},easeOutCirc:function(t,e,i,o,n){return o*Math.sqrt(1-(e=e/n-1)*e)+i},easeInOutCirc:function(t,e,i,o,n){return(e/=n/2)<1?-o/2*(Math.sqrt(1-e*e)-1)+i:o/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,o,n){var r=1.70158,s=0,a=o;if(0==e)return i;if(1==(e/=n))return i+o;if(s||(s=.3*n),a<Math.abs(o)){a=o;r=s/4}else r=s/(2*Math.PI)*Math.asin(o/a);return-a*Math.pow(2,10*(e-=1))*Math.sin((e*n-r)*(2*Math.PI)/s)+i},easeOutElastic:function(t,e,i,o,n){var r=1.70158,s=0,a=o;if(0==e)return i;if(1==(e/=n))return i+o;if(s||(s=.3*n),a<Math.abs(o)){a=o;r=s/4}else r=s/(2*Math.PI)*Math.asin(o/a);return a*Math.pow(2,-10*e)*Math.sin((e*n-r)*(2*Math.PI)/s)+o+i},easeInOutElastic:function(t,e,i,o,n){var r=1.70158,s=0,a=o;if(0==e)return i;if(2==(e/=n/2))return i+o;if(s||(s=n*(.3*1.5)),a<Math.abs(o)){a=o;r=s/4}else r=s/(2*Math.PI)*Math.asin(o/a);return 1>e?a*Math.pow(2,10*(e-=1))*Math.sin((e*n-r)*(2*Math.PI)/s)*-.5+i:a*Math.pow(2,-10*(e-=1))*Math.sin((e*n-r)*(2*Math.PI)/s)*.5+o+i},easeInBack:function(t,e,i,o,n,r){return null==r&&(r=1.70158),o*(e/=n)*e*((r+1)*e-r)+i},easeOutBack:function(t,e,i,o,n,r){return null==r&&(r=1.70158),o*((e=e/n-1)*e*((r+1)*e+r)+1)+i},easeInOutBack:function(t,e,i,o,n,r){return null==r&&(r=1.70158),(e/=n/2)<1?o/2*(e*e*((1+(r*=1.525))*e-r))+i:o/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+i},easeInBounce:function(t,e,i,o,n){return o-jQuery.easing.easeOutBounce(t,n-e,0,o,n)+i},easeOutBounce:function(t,e,i,o,n){return(e/=n)<1/2.75?o*(7.5625*e*e)+i:2/2.75>e?o*(7.5625*(e-=1.5/2.75)*e+.75)+i:2.5/2.75>e?o*(7.5625*(e-=2.25/2.75)*e+.9375)+i:o*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,o,n){return n/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,o,n)+i:.5*jQuery.easing.easeOutBounce(t,2*e-n,0,o,n)+.5*o+i}}),function(t,e,i,o){function n(e,i){this.settings=null,this.options=t.extend({},n.Defaults,i),this.$element=t(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy(function(e,i){this._handlers[i]=t.proxy(this[i],this)},this)),t.each(n.Plugins,t.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(n.Workers,t.proxy(function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})},this)),this.setup(),this.initialize()}n.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},n.Width={Default:"default",Inner:"inner",Outer:"outer"},n.Type={Event:"event",State:"state"},n.Plugins={},n.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,o=this.settings.rtl,n={width:"auto","margin-left":o?e:"","margin-right":o?"":e};!i&&this.$stage.children().css(n),t.css=n}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,o=this._items.length,n=!this.settings.autoWidth,r=[];for(t.items={merge:!1,width:e};o--;)i=this._mergers[o],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=i>1||t.items.merge,r[o]=n?e*i:this._items[o].width();this._widths=r}},{filter:["items","settings"],run:function(){var e=[],i=this._items,o=this.settings,n=Math.max(2*o.items,4),r=2*Math.ceil(i.length/2),s=o.loop&&i.length?o.rewind?n:Math.max(n,r):0,a="",l="";for(s/=2;s--;)e.push(this.normalize(e.length/2,!0)),a+=i[e[e.length-1]][0].outerHTML,e.push(this.normalize(i.length-1-(e.length-1)/2,!0)),l=i[e[e.length-1]][0].outerHTML+l;this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(l).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,o=0,n=0,r=[];++i<e;)o=r[i-1]||0,n=this._widths[this.relative(i)]+this.settings.margin,r.push(o+n*t);this._coordinates=r}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,o=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],o.eq(e).css(t.css);else i&&(t.css.width=t.items.width,o.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,o,n=this.settings.rtl?1:-1,r=2*this.settings.stagePadding,s=this.coordinates(this.current())+r,a=s+this.width()*n,l=[];for(i=0,o=this._coordinates.length;i<o;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+r*n,(this.op(t,"<=",s)&&this.op(t,">",a)||this.op(e,"<",s)&&this.op(e,">",a))&&l.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],n.prototype.initialize=function(){var e,i,n;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(e=this.$element.find("img"),i=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:o,n=this.$element.children(i).width(),e.length&&n<=0&&this.preloadAutoWidthImages(e));this.$element.addClass(this.options.loadingClass),this.$stage=t("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},n.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,o=-1,n=null;i?(t.each(i,function(t){t<=e&&t>o&&(o=Number(t))}),"function"==typeof(n=t.extend({},this.options,i[o])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+o))):n=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=o,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},n.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},n.prototype.prepare=function(e){var i=this.trigger("prepare",{content:e});return i.data||(i.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:i.data}),i.data},n.prototype.update=function(){for(var e=0,i=this._pipe.length,o=t.proxy(function(t){return this[t]},this._invalidated),n={};e<i;)(this._invalidated.all||t.grep(this._pipe[e].filter,o).length>0)&&this._pipe[e].run(n),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},n.prototype.width=function(t){switch(t=t||n.Width.Default){case n.Width.Inner:case n.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},n.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},n.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},n.prototype.onResize=function(){return!!this._items.length&&this._width!==this.$element.width()&&!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))},n.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},n.prototype.onDragStart=function(e){var o=null;3!==e.which&&(t.support.transform?o={x:(o=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===o.length?12:4],y:o[16===o.length?13:5]}:(o=this.$stage.position(),o={x:this.settings.rtl?o.left+this.$stage.width()-this.width()+this.settings.margin:o.left,y:o.top}),this.is("animating")&&(t.support.transform?this.animate(o.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=o,this._drag.stage.current=o,this._drag.pointer=this.pointer(e),t(i).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(i).one("mousemove.owl.core touchmove.owl.core",t.proxy(function(e){var o=this.difference(this._drag.pointer,this.pointer(e));t(i).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(o.x)<Math.abs(o.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},n.prototype.onDragMove=function(t){var e=null,i=null,o=null,n=this.difference(this._drag.pointer,this.pointer(t)),r=this.difference(this._drag.stage.start,n);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,r.x=((r.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),o=this.settings.pullDrag?-1*n.x/5:0,r.x=Math.max(Math.min(r.x,e+o),i+o)),this._drag.stage.current=r,this.animate(r.x))},n.prototype.onDragEnd=function(e){var o=this.difference(this._drag.pointer,this.pointer(e)),n=this._drag.stage.current,r=o.x>0^this.settings.rtl?"left":"right";t(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==o.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(n.x,0!==o.x?r:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=r,(Math.abs(o.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},n.prototype.closest=function(e,i){var o=-1,n=this.width(),r=this.coordinates();return this.settings.freeDrag||t.each(r,t.proxy(function(t,s){return"left"===i&&e>s-30&&e<s+30?o=t:"right"===i&&e>s-n-30&&e<s-n+30?o=t+1:this.op(e,"<",s)&&this.op(e,">",r[t+1]||s-n)&&(o="left"===i?t+1:t),-1===o},this)),this.settings.loop||(this.op(e,">",r[this.minimum()])?o=e=this.minimum():this.op(e,"<",r[this.maximum()])&&(o=e=this.maximum())),o},n.prototype.animate=function(e){var i=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"}):i?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},n.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},n.prototype.current=function(t){if(t===o)return this._current;if(0===this._items.length)return o;if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});e.data!==o&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},n.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,function(t,e){return e})},n.prototype.reset=function(t){(t=this.normalize(t))!==o&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},n.prototype.normalize=function(t,e){var i=this._items.length,n=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=o:(t<0||t>=i+n)&&(t=((t-n/2)%i+i)%i+n/2),t},n.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},n.prototype.maximum=function(t){var e,i,o,n=this.settings,r=this._coordinates.length;if(n.loop)r=this._clones.length/2+this._items.length-1;else if(n.autoWidth||n.merge){for(e=this._items.length,i=this._items[--e].width(),o=this.$element.width();e--&&!((i+=this._items[e].width()+this.settings.margin)>o););r=e+1}else r=n.center?this._items.length-1:this._items.length-n.items;return t&&(r-=this._clones.length/2),Math.max(r,0)},n.prototype.minimum=function(t){return t?0:this._clones.length/2},n.prototype.items=function(t){return t===o?this._items.slice():(t=this.normalize(t,!0),this._items[t])},n.prototype.mergers=function(t){return t===o?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},n.prototype.clones=function(e){var i=this._clones.length/2,n=i+this._items.length,r=function(t){return t%2==0?n+t/2:i-(t+1)/2};return e===o?t.map(this._clones,function(t,e){return r(e)}):t.map(this._clones,function(t,i){return t===e?r(i):null})},n.prototype.speed=function(t){return t!==o&&(this._speed=t),this._speed},n.prototype.coordinates=function(e){var i,n=1,r=e-1;return e===o?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(n=-1,r=e+1),i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[r]||0))/2*n):i=this._coordinates[r]||0,i=Math.ceil(i))},n.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},n.prototype.to=function(t,e){var i=this.current(),o=null,n=t-this.relative(i),r=(n>0)-(n<0),s=this._items.length,a=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(n)>s/2&&(n+=-1*r*s),(o=(((t=i+n)-a)%s+s)%s+a)!==t&&o-n<=l&&o-n>0&&(i=o-n,t=o,this.reset(i))):this.settings.rewind?t=(t%(l+=1)+l)%l:t=Math.max(a,Math.min(l,t)),this.speed(this.duration(i,t,e)),this.current(t),this.$element.is(":visible")&&this.update()},n.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},n.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},n.prototype.onTransitionEnd=function(t){if(t!==o&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},n.prototype.viewport=function(){var o;return this.options.responsiveBaseElement!==e?o=t(this.options.responsiveBaseElement).width():e.innerWidth?o=e.innerWidth:i.documentElement&&i.documentElement.clientWidth?o=i.documentElement.clientWidth:console.warn("Can not detect viewport width."),o},n.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},n.prototype.add=function(e,i){var n=this.relative(this._current);i=i===o?this._items.length:this.normalize(i,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:i}),e=this.prepare(e),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[i-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(e),this._items.splice(i,0,e),this._mergers.splice(i,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[n]&&this.reset(this._items[n].index()),this.invalidate("items"),this.trigger("added",{content:e,position:i})},n.prototype.remove=function(t){(t=this.normalize(t,!0))!==o&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},n.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy(function(e,i){this.enter("pre-loading"),i=t(i),t(new Image).one("load",t.proxy(function(t){i.attr("src",t.target.src),i.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",i.attr("src")||i.attr("data-src")||i.attr("data-src-retina"))},this))},n.prototype.destroy=function(){for(var o in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[o].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},n.prototype.op=function(t,e,i){var o=this.settings.rtl;switch(e){case"<":return o?t>i:t<i;case">":return o?t<i:t>i;case">=":return o?t<=i:t>=i;case"<=":return o?t>=i:t<=i}},n.prototype.on=function(t,e,i,o){t.addEventListener?t.addEventListener(e,i,o):t.attachEvent&&t.attachEvent("on"+e,i)},n.prototype.off=function(t,e,i,o){t.removeEventListener?t.removeEventListener(e,i,o):t.detachEvent&&t.detachEvent("on"+e,i)},n.prototype.trigger=function(e,i,o,r,s){var a={item:{count:this._items.length,index:this.current()}},l=t.camelCase(t.grep(["on",e,o],function(t){return t}).join("-").toLowerCase()),c=t.Event([e,"owl",o||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,i));return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(c)}),this.register({type:n.Type.Event,name:e}),this.$element.trigger(c),this.settings&&"function"==typeof this.settings[l]&&this.settings[l].call(this,c)),c},n.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]===o&&(this._states.current[e]=0),this._states.current[e]++},this))},n.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]--},this))},n.prototype.register=function(e){if(e.type===n.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return!i||!i.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:i.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===n.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(function(i,o){return t.inArray(i,this._states.tags[e.name])===o},this)))},n.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},n.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},n.prototype.pointer=function(t){var i={x:null,y:null};return(t=(t=t.originalEvent||t||e.event).touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(i.x=t.pageX,i.y=t.pageY):(i.x=t.clientX,i.y=t.clientY),i},n.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},n.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},t.fn.owlCarousel=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var o=t(this),r=o.data("owl.carousel");r||(r=new n(this,"object"==typeof e&&e),o.data("owl.carousel",r),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,i){r.register({type:n.Type.Event,name:i}),r.$element.on(i+".owl.carousel.core",t.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([i]),r[i].apply(this,[].slice.call(arguments,1)),this.release([i]))},r))})),"string"==typeof e&&"_"!==e.charAt(0)&&r[e].apply(r,i)})},t.fn.owlCarousel.Constructor=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){var n=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoRefresh:!0,autoRefreshInterval:500},n.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},n.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},n.prototype.destroy=function(){var t,i;for(t in e.clearInterval(this._interval),this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){var n=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type))for(var i=this._core.settings,o=i.center&&Math.ceil(i.items/2)||i.items,n=i.center&&-1*o||0,r=(e.property&&void 0!==e.property.value?e.property.value:this._core.current())+n,s=this._core.clones().length,a=t.proxy(function(t,e){this.load(e)},this);n++<o;)this.load(s/2+this._core.relative(r)),s&&t.each(this._core.clones(this._core.relative(r)),a),r++},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={lazyLoad:!1},n.prototype.load=function(i){var o=this._core.$stage.children().eq(i),n=o&&o.find(".owl-lazy");!n||t.inArray(o.get(0),this._loaded)>-1||(n.each(t.proxy(function(i,o){var n,r=t(o),s=e.devicePixelRatio>1&&r.attr("data-src-retina")||r.attr("data-src");this._core.trigger("load",{element:r,url:s},"lazy"),r.is("img")?r.one("load.owl.lazy",t.proxy(function(){r.css("opacity",1),this._core.trigger("loaded",{element:r,url:s},"lazy")},this)).attr("src",s):((n=new Image).onload=t.proxy(function(){r.css({"background-image":'url("'+s+'")',opacity:"1"}),this._core.trigger("loaded",{element:r,url:s},"lazy")},this),n.src=s)},this)),this._loaded.push(o.get(0)))},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){var n=function(e){this._core=e,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"==t.property.name&&this.update()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var e,i=this._core._current,o=i+this._core.settings.items,n=this._core.$stage.children().toArray().slice(i,o),r=[];t.each(n,function(e,i){r.push(t(i).height())}),e=Math.max.apply(null,r),this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){var n=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find(".owl-video");i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))};n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",o=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),n=t.attr("data-width")||this._core.settings.videoWidth,r=t.attr("data-height")||this._core.settings.videoHeight,s=t.attr("href");if(!s)throw new Error("Missing video URL.");if((o=s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")>-1)i="youtube";else if(o[3].indexOf("vimeo")>-1)i="vimeo";else{if(!(o[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");i="vzaar"}o=o[6],this._videos[s]={type:i,id:o,width:n,height:r},e.attr("data-video",s),this.thumbnail(t,this._videos[s])},n.prototype.thumbnail=function(e,i){var o,n,r=i.width&&i.height?'style="width:'+i.width+"px;height:"+i.height+'px;"':"",s=e.find("img"),a="src",l="",c=this._core.settings,u=function(t){'<div class="owl-video-play-icon"></div>',o=c.lazyLoad?'<div class="owl-video-tn '+l+'" '+a+'="'+t+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+t+')"></div>',e.after(o),e.after('<div class="owl-video-play-icon"></div>')};if(e.wrap('<div class="owl-video-wrapper"'+r+"></div>"),this._core.settings.lazyLoad&&(a="data-src",l="owl-lazy"),s.length)return u(s.attr(a)),s.remove(),!1;"youtube"===i.type?(n="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",u(n)):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t[0].thumbnail_large,u(n)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t.framegrab_url,u(n)}})},n.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},n.prototype.play=function(e){var i,o=t(e.target).closest("."+this._core.settings.itemClass),n=this._videos[o.attr("data-video")],r=n.width||"100%",s=n.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),o=this._core.items(this._core.relative(o.index())),this._core.reset(o.index()),"youtube"===n.type?i='<iframe width="'+r+'" height="'+s+'" src="//www.youtube.com/embed/'+n.id+"?autoplay=1&rel=0&v="+n.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===n.type?i='<iframe src="//player.vimeo.com/video/'+n.id+'?autoplay=1" width="'+r+'" height="'+s+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===n.type&&(i='<iframe frameborder="0"height="'+s+'"width="'+r+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+n.id+'/player?autoplay=true"></iframe>'),t('<div class="owl-video-frame">'+i+"</div>").insertAfter(o.find(".owl-video")),this._playing=o.addClass("owl-video-playing"))},n.prototype.isInFullScreen=function(){var e=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement;return e&&t(e).parent().hasClass("owl-video-frame")},n.prototype.destroy=function(){var t,e;for(t in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){var n=function(e){this.core=e,this.core.options=t.extend({},n.Defaults,this.core.options),this.swapping=!0,this.previous=o,this.next=o,this.handlers={"change.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":t.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};n.Defaults={animateOut:!1,animateIn:!1},n.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0);var e,i=t.proxy(this.clear,this),o=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),r=this.core.settings.animateIn,s=this.core.settings.animateOut;this.core.current()!==this.previous&&(s&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),o.one(t.support.animation.end,i).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(s)),r&&n.one(t.support.animation.end,i).addClass("animated owl-animated-in").addClass(r))}},n.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){var n=function(e){this._core=e,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},n.Defaults,this._core.options)};n.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},n.prototype.play=function(t,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},n.prototype._getNextTimeout=function(o,n){return this._timeout&&e.clearTimeout(this._timeout),e.setTimeout(t.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||i.hidden||this._core.next(n||this._core.settings.autoplaySpeed)},this),o||this._core.settings.autoplayTimeout)},n.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},n.prototype.stop=function(){this._core.is("rotating")&&(e.clearTimeout(this._timeout),this._core.leave("rotating"))},n.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},n.prototype.destroy=function(){var t,e;for(t in this.stop(),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){"use strict";var n=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers)};n.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},n.prototype.initialize=function(){var e,i=this._core.settings;for(e in this._controls.$relative=(i.navContainer?t(i.navContainer):t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=t("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?t(i.dotsContainer):t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",t.proxy(function(e){var o=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(o,i.dotsSpeed)},this)),this._overrides)this._core[e]=t.proxy(this[e],this)},n.prototype.destroy=function(){var t,e,i,o;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)this._controls[e].remove();for(o in this.overides)this._core[o]=this._overrides[o];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},n.prototype.update=function(){var t,e,i=this._core.clones().length/2,o=i+this._core.items().length,n=this._core.maximum(!0),r=this._core.settings,s=r.center||r.autoWidth||r.dotsData?1:r.dotsEach||r.items;if("page"!==r.slideBy&&(r.slideBy=Math.min(r.slideBy,r.items)),r.dots||"page"==r.slideBy)for(this._pages=[],t=i,e=0,0;t<o;t++){if(e>=s||0===e){if(this._pages.push({start:Math.min(n,t-i),end:t-i+s-1}),Math.min(n,t-i)===n)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},n.prototype.draw=function(){var e,i=this._core.settings,o=this._core.items().length<=i.items,n=this._core.relative(this._core.current()),r=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||o),i.nav&&(this._controls.$previous.toggleClass("disabled",!r&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!r&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||o),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},n.prototype.onTrigger=function(e){var i=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},n.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy(function(t,i){return t.start<=e&&t.end>=e},this)).pop()},n.prototype.getPosition=function(e){var i,o,n=this._core.settings;return"page"==n.slideBy?(i=t.inArray(this.current(),this._pages),o=this._pages.length,e?++i:--i,i=this._pages[(i%o+o)%o].start):(i=this._core.relative(this._core.current()),o=this._core.items().length,e?i+=n.slideBy:i-=n.slideBy),i},n.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},n.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},n.prototype.to=function(e,i,o){var n;!o&&this._pages.length?(n=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%n+n)%n].start,i)):t.proxy(this._overrides.to,this._core)(e,i)},t.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){"use strict";var n=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(i){i.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var i=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!i)return;this._hashes[i]=e.content}},this),"changed.owl.carousel":t.proxy(function(i){if(i.namespace&&"position"===i.property.name){var o=this._core.items(this._core.relative(this._core.current())),n=t.map(this._hashes,function(t,e){return t===o?e:null}).join();if(!n||e.location.hash.slice(1)===n)return;e.location.hash=n}},this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(t){var i=e.location.hash.substring(1),o=this._core.$stage.children(),n=this._hashes[i]&&o.index(this._hashes[i]);void 0!==n&&n!==this._core.current()&&this._core.to(this._core.relative(n),!1,!0)},this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=function(){var i,o;for(i in t(e).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(i,this._handlers[i]);for(o in Object.getOwnPropertyNames(this))"function"!=typeof this[o]&&(this[o]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,o){function n(e,i){var n=!1,r=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+a.join(r+" ")+r).split(" "),function(t,e){if(s[e]!==o)return n=!i||e,!1}),n}function r(t){return n(t,!0)}var s=t("<support>").get(0).style,a="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},c=function(){return!!n("transform")},u=function(){return!!n("perspective")},d=function(){return!!n("animation")};(function(){return!!n("transition")})()&&(t.support.transition=new String(r("transition")),t.support.transition.end=l.transition.end[t.support.transition]),d()&&(t.support.animation=new String(r("animation")),t.support.animation.end=l.animation.end[t.support.animation]),c()&&(t.support.transform=new String(r("transform")),t.support.transform3d=u())}(window.Zepto||window.jQuery,window,document),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(t){var e,i,o,n,r,s,a="Close",l="BeforeClose",c="MarkupParse",u="Open",d="Change",h="mfp",p="."+h,f="mfp-ready",m="mfp-removing",g="mfp-prevent-close",v=function(){},y=!!window.jQuery,w=t(window),b=function(t,i){e.ev.on(h+t+p,i)},x=function(e,i,o,n){var r=document.createElement("div");return r.className="mfp-"+e,o&&(r.innerHTML=o),n?i&&i.appendChild(r):(r=t(r),i&&r.appendTo(i)),r},_=function(i,o){e.ev.triggerHandler(h+i,o),e.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),e.st.callbacks[i]&&e.st.callbacks[i].apply(e,t.isArray(o)?o:[o]))},C=function(i){return i===s&&e.currTemplate.closeBtn||(e.currTemplate.closeBtn=t(e.st.closeMarkup.replace("%title%",e.st.tClose)),s=i),e.currTemplate.closeBtn},k=function(){t.magnificPopup.instance||((e=new v).init(),t.magnificPopup.instance=e)};v.prototype={constructor:v,init:function(){var i=navigator.appVersion;e.isLowIE=e.isIE8=document.all&&!document.addEventListener,e.isAndroid=/android/gi.test(i),e.isIOS=/iphone|ipad|ipod/gi.test(i),e.supportsTransition=function(){var t=document.createElement("p").style,e=["ms","O","Moz","Webkit"];if(void 0!==t.transition)return!0;for(;e.length;)if(e.pop()+"Transition"in t)return!0;return!1}(),e.probablyMobile=e.isAndroid||e.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=t(document),e.popupsCache={}},open:function(i){var n;if(!1===i.isObj){e.items=i.items.toArray(),e.index=0;var s,a=i.items;for(n=0;n<a.length;n++)if((s=a[n]).parsed&&(s=s.el[0]),s===i.el[0]){e.index=n;break}}else e.items=t.isArray(i.items)?i.items:[i.items],e.index=i.index||0;if(!e.isOpen){e.types=[],r="",i.mainEl&&i.mainEl.length?e.ev=i.mainEl.eq(0):e.ev=o,i.key?(e.popupsCache[i.key]||(e.popupsCache[i.key]={}),e.currTemplate=e.popupsCache[i.key]):e.currTemplate={},e.st=t.extend(!0,{},t.magnificPopup.defaults,i),e.fixedContentPos="auto"===e.st.fixedContentPos?!e.probablyMobile:e.st.fixedContentPos,e.st.modal&&(e.st.closeOnContentClick=!1,e.st.closeOnBgClick=!1,e.st.showCloseBtn=!1,e.st.enableEscapeKey=!1),e.bgOverlay||(e.bgOverlay=x("bg").on("click"+p,function(){e.close()}),e.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(t){e._checkIfClose(t.target)&&e.close()}),e.container=x("container",e.wrap)),e.contentContainer=x("content"),e.st.preloader&&(e.preloader=x("preloader",e.container,e.st.tLoading));var l=t.magnificPopup.modules;for(n=0;n<l.length;n++){var d=l[n];d=d.charAt(0).toUpperCase()+d.slice(1),e["init"+d].call(e)}_("BeforeOpen"),e.st.showCloseBtn&&(e.st.closeBtnInside?(b(c,function(t,e,i,o){i.close_replaceWith=C(o.type)}),r+=" mfp-close-btn-in"):e.wrap.append(C())),e.st.alignTop&&(r+=" mfp-align-top"),e.fixedContentPos?e.wrap.css({overflow:e.st.overflowY,overflowX:"hidden",overflowY:e.st.overflowY}):e.wrap.css({top:w.scrollTop(),position:"absolute"}),(!1===e.st.fixedBgPos||"auto"===e.st.fixedBgPos&&!e.fixedContentPos)&&e.bgOverlay.css({height:o.height(),position:"absolute"}),e.st.enableEscapeKey&&o.on("keyup"+p,function(t){27===t.keyCode&&e.close()}),w.on("resize"+p,function(){e.updateSize()}),e.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&e.wrap.addClass(r);var h=e.wH=w.height(),m={};if(e.fixedContentPos&&e._hasScrollBar(h)){var g=e._getScrollbarSize();g&&(m.marginRight=g)}e.fixedContentPos&&(e.isIE7?t("body, html").css("overflow","hidden"):m.overflow="hidden");var v=e.st.mainClass;return e.isIE7&&(v+=" mfp-ie7"),v&&e._addClassToMFP(v),e.updateItemHTML(),_("BuildControls"),t("html").css(m),e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo||t(document.body)),e._lastFocusedEl=document.activeElement,setTimeout(function(){e.content?(e._addClassToMFP(f),e._setFocus()):e.bgOverlay.addClass(f),o.on("focusin"+p,e._onFocusIn)},16),e.isOpen=!0,e.updateSize(h),_(u),i}e.updateItemHTML()},close:function(){e.isOpen&&(_(l),e.isOpen=!1,e.st.removalDelay&&!e.isLowIE&&e.supportsTransition?(e._addClassToMFP(m),setTimeout(function(){e._close()},e.st.removalDelay)):e._close())},_close:function(){_(a);var i=m+" "+f+" ";if(e.bgOverlay.detach(),e.wrap.detach(),e.container.empty(),e.st.mainClass&&(i+=e.st.mainClass+" "),e._removeClassFromMFP(i),e.fixedContentPos){var n={marginRight:""};e.isIE7?t("body, html").css("overflow",""):n.overflow="",t("html").css(n)}o.off("keyup.mfp focusin"+p),e.ev.off(p),e.wrap.attr("class","mfp-wrap").removeAttr("style"),e.bgOverlay.attr("class","mfp-bg"),e.container.attr("class","mfp-container"),!e.st.showCloseBtn||e.st.closeBtnInside&&!0!==e.currTemplate[e.currItem.type]||e.currTemplate.closeBtn&&e.currTemplate.closeBtn.detach(),e.st.autoFocusLast&&e._lastFocusedEl&&t(e._lastFocusedEl).focus(),e.currItem=null,e.content=null,e.currTemplate=null,e.prevHeight=0,_("AfterClose")},updateSize:function(t){if(e.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,o=window.innerHeight*i;e.wrap.css("height",o),e.wH=o}else e.wH=t||w.height();e.fixedContentPos||e.wrap.css("height",e.wH),_("Resize")},updateItemHTML:function(){var i=e.items[e.index];e.contentContainer.detach(),e.content&&e.content.detach(),i.parsed||(i=e.parseEl(e.index));var o=i.type;if(_("BeforeChange",[e.currItem?e.currItem.type:"",o]),e.currItem=i,!e.currTemplate[o]){var r=!!e.st[o]&&e.st[o].markup;_("FirstMarkupParse",r),e.currTemplate[o]=!r||t(r)}n&&n!==i.type&&e.container.removeClass("mfp-"+n+"-holder");var s=e["get"+o.charAt(0).toUpperCase()+o.slice(1)](i,e.currTemplate[o]);e.appendContent(s,o),i.preloaded=!0,_(d,i),n=i.type,e.container.prepend(e.contentContainer),_("AfterChange")},appendContent:function(t,i){e.content=t,t?e.st.showCloseBtn&&e.st.closeBtnInside&&!0===e.currTemplate[i]?e.content.find(".mfp-close").length||e.content.append(C()):e.content=t:e.content="",_("BeforeAppend"),e.container.addClass("mfp-"+i+"-holder"),e.contentContainer.append(e.content)},parseEl:function(i){var o,n=e.items[i];if(n.tagName?n={el:t(n)}:(o=n.type,n={data:n,src:n.src}),n.el){for(var r=e.types,s=0;s<r.length;s++)if(n.el.hasClass("mfp-"+r[s])){o=r[s];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||e.st.type||"inline",n.index=i,n.parsed=!0,e.items[i]=n,_("ElementParse",n),e.items[i]},addGroup:function(t,i){var o=function(o){o.mfpEl=this,e._openClick(o,t,i)};i||(i={});var n="click.magnificPopup";i.mainEl=t,i.items?(i.isObj=!0,t.off(n).on(n,o)):(i.isObj=!1,i.delegate?t.off(n).on(n,i.delegate,o):(i.items=t,t.off(n).on(n,o)))},_openClick:function(i,o,n){if((void 0!==n.midClick?n.midClick:t.magnificPopup.defaults.midClick)||!(2===i.which||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){var r=void 0!==n.disableOn?n.disableOn:t.magnificPopup.defaults.disableOn;if(r)if(t.isFunction(r)){if(!r.call(e))return!0}else if(w.width()<r)return!0;i.type&&(i.preventDefault(),e.isOpen&&i.stopPropagation()),n.el=t(i.mfpEl),n.delegate&&(n.items=o.find(n.delegate)),e.open(n)}},updateStatus:function(t,o){if(e.preloader){i!==t&&e.container.removeClass("mfp-s-"+i),o||"loading"!==t||(o=e.st.tLoading);var n={status:t,text:o};_("UpdateStatus",n),t=n.status,o=n.text,e.preloader.html(o),e.preloader.find("a").on("click",function(t){t.stopImmediatePropagation()}),e.container.addClass("mfp-s-"+t),i=t}},_checkIfClose:function(i){if(!t(i).hasClass(g)){var o=e.st.closeOnContentClick,n=e.st.closeOnBgClick;if(o&&n)return!0;if(!e.content||t(i).hasClass("mfp-close")||e.preloader&&i===e.preloader[0])return!0;if(i===e.content[0]||t.contains(e.content[0],i)){if(o)return!0}else if(n&&t.contains(document,i))return!0;return!1}},_addClassToMFP:function(t){e.bgOverlay.addClass(t),e.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t),e.wrap.removeClass(t)},_hasScrollBar:function(t){return(e.isIE7?o.height():document.body.scrollHeight)>(t||w.height())},_setFocus:function(){(e.st.focus?e.content.find(e.st.focus).eq(0):e.wrap).focus()},_onFocusIn:function(i){return i.target===e.wrap[0]||t.contains(e.wrap[0],i.target)?void 0:(e._setFocus(),!1)},_parseMarkup:function(e,i,o){var n;o.data&&(i=t.extend(o.data,i)),_(c,[e,i,o]),t.each(i,function(i,o){if(void 0===o||!1===o)return!0;if((n=i.split("_")).length>1){var r=e.find(p+"-"+n[0]);if(r.length>0){var s=n[1];"replaceWith"===s?r[0]!==o[0]&&r.replaceWith(o):"img"===s?r.is("img")?r.attr("src",o):r.replaceWith(t("<img>").attr("src",o).attr("class",r.attr("class"))):r.attr(n[1],o)}}else e.find(p+"-"+i).html(o)})},_getScrollbarSize:function(){if(void 0===e.scrollbarSize){var t=document.createElement("div");t.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t),e.scrollbarSize=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return e.scrollbarSize}},t.magnificPopup={instance:null,proto:v.prototype,modules:[],open:function(e,i){return k(),(e=e?t.extend(!0,{},e):{}).isObj=!0,e.index=i||0,this.instance.open(e)},close:function(){return t.magnificPopup.instance&&t.magnificPopup.instance.close()},registerModule:function(e,i){i.options&&(t.magnificPopup.defaults[e]=i.options),t.extend(this.proto,i.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},t.fn.magnificPopup=function(i){k();var o=t(this);if("string"==typeof i)if("open"===i){var n,r=y?o.data("magnificPopup"):o[0].magnificPopup,s=parseInt(arguments[1],10)||0;r.items?n=r.items[s]:(n=o,r.delegate&&(n=n.find(r.delegate)),n=n.eq(s)),e._openClick({mfpEl:n},o,r)}else e.isOpen&&e[i].apply(e,Array.prototype.slice.call(arguments,1));else i=t.extend(!0,{},i),y?o.data("magnificPopup",i):o[0].magnificPopup=i,e.addGroup(o,i);return o};var S,T,z,E="inline",I=function(){z&&(T.after(z.addClass(S)).detach(),z=null)};t.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){e.types.push(E),b(a+"."+E,function(){I()})},getInline:function(i,o){if(I(),i.src){var n=e.st.inline,r=t(i.src);if(r.length){var s=r[0].parentNode;s&&s.tagName&&(T||(S=n.hiddenClass,T=x(S),S="mfp-"+S),z=r.after(T).detach().removeClass(S)),e.updateStatus("ready")}else e.updateStatus("error",n.tNotFound),r=t("<div>");return i.inlineElement=r,r}return e.updateStatus("ready"),e._parseMarkup(o,{},i),o}}});var M,P="ajax",O=function(){M&&t(document.body).removeClass(M)},L=function(){O(),e.req&&e.req.abort()};t.magnificPopup.registerModule(P,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){e.types.push(P),M=e.st.ajax.cursor,b(a+"."+P,L),b("BeforeChange."+P,L)},getAjax:function(i){M&&t(document.body).addClass(M),e.updateStatus("loading");var o=t.extend({url:i.src,success:function(o,n,r){var s={data:o,xhr:r};_("ParseAjax",s),e.appendContent(t(s.data),P),i.finished=!0,O(),e._setFocus(),setTimeout(function(){e.wrap.addClass(f)},16),e.updateStatus("ready"),_("AjaxContentAdded")},error:function(){O(),i.finished=i.loadError=!0,e.updateStatus("error",e.st.ajax.tError.replace("%url%",i.src))}},e.st.ajax.settings);return e.req=t.ajax(o),""}}});var H,N=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var o=e.st.image.titleSrc;if(o){if(t.isFunction(o))return o.call(e,i);if(i.el)return i.el.attr(o)||""}return""};t.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var i=e.st.image,o=".image";e.types.push("image"),b(u+o,function(){"image"===e.currItem.type&&i.cursor&&t(document.body).addClass(i.cursor)}),b(a+o,function(){i.cursor&&t(document.body).removeClass(i.cursor),w.off("resize"+p)}),b("Resize"+o,e.resizeImage),e.isLowIE&&b("AfterChange",e.resizeImage)},resizeImage:function(){var t=e.currItem;if(t&&t.img&&e.st.image.verticalFit){var i=0;e.isLowIE&&(i=parseInt(t.img.css("padding-top"),10)+parseInt(t.img.css("padding-bottom"),10)),t.img.css("max-height",e.wH-i)}},_onImageHasSize:function(t){t.img&&(t.hasSize=!0,H&&clearInterval(H),t.isCheckingImgSize=!1,_("ImageHasSize",t),t.imgHidden&&(e.content&&e.content.removeClass("mfp-loading"),t.imgHidden=!1))},findImageSize:function(t){var i=0,o=t.img[0],n=function(r){H&&clearInterval(H),H=setInterval(function(){return o.naturalWidth>0?void e._onImageHasSize(t):(i>200&&clearInterval(H),void(3===++i?n(10):40===i?n(50):100===i&&n(500)))},r)};n(1)},getImage:function(i,o){var n=0,r=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===e.currItem&&(e._onImageHasSize(i),e.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,_("ImageLoadComplete")):200>++n?setTimeout(r,100):s())},s=function(){i&&(i.img.off(".mfploader"),i===e.currItem&&(e._onImageHasSize(i),e.updateStatus("error",a.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},a=e.st.image,l=o.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",i.el&&i.el.find("img").length&&(c.alt=i.el.find("img").attr("alt")),i.img=t(c).on("load.mfploader",r).on("error.mfploader",s),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),(c=i.img[0]).naturalWidth>0?i.hasSize=!0:c.width||(i.hasSize=!1)}return e._parseMarkup(o,{title:N(i),img_replaceWith:i.img},i),e.resizeImage(),i.hasSize?(H&&clearInterval(H),i.loadError?(o.addClass("mfp-loading"),e.updateStatus("error",a.tError.replace("%url%",i.src))):(o.removeClass("mfp-loading"),e.updateStatus("ready")),o):(e.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,o.addClass("mfp-loading"),e.findImageSize(i)),o)}}});var A;t.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t,i=e.st.zoom,o=".zoom";if(i.enabled&&e.supportsTransition){var n,r,s=i.duration,c=function(t){var e=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),o="all "+i.duration/1e3+"s "+i.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return n["-webkit-"+r]=n["-moz-"+r]=n["-o-"+r]=n[r]=o,e.css(n),e},u=function(){e.content.css("visibility","visible")};b("BuildControls"+o,function(){if(e._allowZoom()){if(clearTimeout(n),e.content.css("visibility","hidden"),!(t=e._getItemToZoom()))return void u();(r=c(t)).css(e._getOffset()),e.wrap.append(r),n=setTimeout(function(){r.css(e._getOffset(!0)),n=setTimeout(function(){u(),setTimeout(function(){r.remove(),t=r=null,_("ZoomAnimationEnded")},16)},s)},16)}}),b(l+o,function(){if(e._allowZoom()){if(clearTimeout(n),e.st.removalDelay=s,!t){if(!(t=e._getItemToZoom()))return;r=c(t)}r.css(e._getOffset(!0)),e.wrap.append(r),e.content.css("visibility","hidden"),setTimeout(function(){r.css(e._getOffset())},16)}}),b(a+o,function(){e._allowZoom()&&(u(),r&&r.remove(),t=null)})}},_allowZoom:function(){return"image"===e.currItem.type},_getItemToZoom:function(){return!!e.currItem.hasSize&&e.currItem.img},_getOffset:function(i){var o,n=(o=i?e.currItem.img:e.st.zoom.opener(e.currItem.el||e.currItem)).offset(),r=parseInt(o.css("padding-top"),10),s=parseInt(o.css("padding-bottom"),10);n.top-=t(window).scrollTop()-r;var a={width:o.width(),height:(y?o.innerHeight():o[0].offsetHeight)-s-r};return void 0===A&&(A=void 0!==document.createElement("p").style.MozTransform),A?a["-moz-transform"]=a.transform="translate("+n.left+"px,"+n.top+"px)":(a.left=n.left,a.top=n.top),a}}});var B="iframe",$=function(t){if(e.currTemplate[B]){var i=e.currTemplate[B].find("iframe");i.length&&(t||(i[0].src="//about:blank"),e.isIE8&&i.css("display",t?"block":"none"))}};t.magnificPopup.registerModule(B,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"https://player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){e.types.push(B),b("BeforeChange",function(t,e,i){e!==i&&(e===B?$():i===B&&$(!0))}),b(a+"."+B,function(){$()})},getIframe:function(i,o){var n=i.src,r=e.st.iframe;t.each(r.patterns,function(){return n.indexOf(this.index)>-1?(this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1):void 0});var s={};return r.srcAction&&(s[r.srcAction]=n),e._parseMarkup(o,s,i),e.updateStatus("ready"),o}}});var j=function(t){var i=e.items.length;return t>i-1?t-i:0>t?i+t:t},W=function(t,e,i){return t.replace(/%curr%/gi,e+1).replace(/%total%/gi,i)};t.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=e.st.gallery,n=".mfp-gallery";return e.direction=!0,!(!i||!i.enabled)&&(r+=" mfp-gallery",b(u+n,function(){i.navigateByImgClick&&e.wrap.on("click"+n,".mfp-img",function(){return e.items.length>1?(e.next(),!1):void 0}),o.on("keydown"+n,function(t){37===t.keyCode?e.prev():39===t.keyCode&&e.next()})}),b("UpdateStatus"+n,function(t,i){i.text&&(i.text=W(i.text,e.currItem.index,e.items.length))}),b(c+n,function(t,o,n,r){var s=e.items.length;n.counter=s>1?W(i.tCounter,r.index,s):""}),b("BuildControls"+n,function(){if(e.items.length>1&&i.arrows&&!e.arrowLeft){var o=i.arrowMarkup,n=e.arrowLeft=t(o.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass(g),r=e.arrowRight=t(o.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass(g);n.click(function(){e.prev()}),r.click(function(){e.next()}),e.container.append(n.add(r))}}),b(d+n,function(){e._preloadTimeout&&clearTimeout(e._preloadTimeout),e._preloadTimeout=setTimeout(function(){e.preloadNearbyImages(),e._preloadTimeout=null},16)}),void b(a+n,function(){o.off(n),e.wrap.off("click"+n),e.arrowRight=e.arrowLeft=null}))},next:function(){e.direction=!0,e.index=j(e.index+1),e.updateItemHTML()},prev:function(){e.direction=!1,e.index=j(e.index-1),e.updateItemHTML()},goTo:function(t){e.direction=t>=e.index,e.index=t,e.updateItemHTML()},preloadNearbyImages:function(){var t,i=e.st.gallery.preload,o=Math.min(i[0],e.items.length),n=Math.min(i[1],e.items.length);for(t=1;t<=(e.direction?n:o);t++)e._preloadItem(e.index+t);for(t=1;t<=(e.direction?o:n);t++)e._preloadItem(e.index-t)},_preloadItem:function(i){if(i=j(i),!e.items[i].preloaded){var o=e.items[i];o.parsed||(o=e.parseEl(i)),_("LazyLoad",o),"image"===o.type&&(o.img=t('<img class="mfp-img" />').on("load.mfploader",function(){o.hasSize=!0}).on("error.mfploader",function(){o.hasSize=!0,o.loadError=!0,_("LazyLoadError",o)}).attr("src",o.src)),o.preloaded=!0}}}});var D="retina";t.magnificPopup.registerModule(D,{options:{replaceSrc:function(t){return t.src.replace(/\.\w+$/,function(t){return"@2x"+t})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var t=e.st.retina,i=t.ratio;(i=isNaN(i)?i():i)>1&&(b("ImageHasSize."+D,function(t,e){e.img.css({"max-width":e.img[0].naturalWidth/i,width:"100%"})}),b("ElementParse."+D,function(e,o){o.src=t.replaceSrc(o,i)}))}}}}),k()}),function(t,e,i){"use strict";t.fn.scrollUp=function(e){t.data(i.body,"scrollUp")||(t.data(i.body,"scrollUp",!0),t.fn.scrollUp.init(e))},t.fn.scrollUp.init=function(o){var n,r,s,a,l,c,u=t.fn.scrollUp.settings=t.extend({},t.fn.scrollUp.defaults,o),d=!1;switch(c=u.scrollTrigger?t(u.scrollTrigger):t("<a/>",{id:u.scrollName,href:"#top"}),u.scrollTitle&&c.attr("title",u.scrollTitle),c.appendTo("body"),u.scrollImg||u.scrollTrigger||c.html(u.scrollText),c.css({display:"none",position:"fixed",zIndex:u.zIndex}),u.activeOverlay&&t("<div/>",{id:u.scrollName+"-active"}).css({position:"absolute",top:u.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+u.activeOverlay,zIndex:u.zIndex}).appendTo("body"),u.animation){case"fade":n="fadeIn",r="fadeOut",s=u.animationSpeed;break;case"slide":n="slideDown",r="slideUp",s=u.animationSpeed;break;default:n="show",r="hide",s=0}a="top"===u.scrollFrom?u.scrollDistance:t(i).height()-t(e).height()-u.scrollDistance,t(e).scroll(function(){t(e).scrollTop()>a?d||(c[n](s),d=!0):d&&(c[r](s),d=!1)}),u.scrollTarget?"number"==typeof u.scrollTarget?l=u.scrollTarget:"string"==typeof u.scrollTarget&&(l=Math.floor(t(u.scrollTarget).offset().top)):l=0,c.click(function(e){e.preventDefault(),t("html, body").animate({scrollTop:l},u.scrollSpeed,u.easingType)})},t.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},t.fn.scrollUp.destroy=function(o){t.removeData(i.body,"scrollUp"),t("#"+t.fn.scrollUp.settings.scrollName).remove(),t("#"+t.fn.scrollUp.settings.scrollName+"-active").remove(),t.fn.jquery.split(".")[1]>=7?t(e).off("scroll",o):t(e).unbind("scroll",o)},t.scrollUp=t.fn.scrollUp}(jQuery,window,document),function(){var t=[].indexOf||function(t){for(var e=0,i=this.length;e<i;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(i){return e(i,t)}):e(t.jQuery,t)}(this,function(i,o){var n,r,s,a,l,c,u,d,h,p,f,m,g,v,y,w;return n=i(o),d=t.call(o,"ontouchstart")>=0,a={horizontal:{},vertical:{}},l=1,u={},c="waypoints-context-id",f="resize.waypoints",m="scroll.waypoints",g=1,v="waypoints-waypoint-ids",y="waypoint",w="waypoints",r=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+l++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},t.data(c,this.id),u[this.id]=this,t.bind(m,function(){var t;if(!e.didScroll&&!d)return e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},o.setTimeout(t,i[w].settings.scrollThrottle)}),t.bind(f,function(){var t;if(!e.didResize)return e.didResize=!0,t=function(){return i[w]("refresh"),e.didResize=!1},o.setTimeout(t,i[w].settings.resizeThrottle)})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!d||t.vertical.oldScroll&&t.vertical.newScroll||i[w]("refresh"),i.each(t,function(t,o){var n,r,s;return s=[],r=o.newScroll>o.oldScroll,n=r?o.forward:o.backward,i.each(e.waypoints[t],function(t,e){var i,n;return o.oldScroll<(i=e.offset)&&i<=o.newScroll?s.push(e):o.newScroll<(n=e.offset)&&n<=o.oldScroll?s.push(e):void 0}),s.sort(function(t,e){return t.offset-e.offset}),r||s.reverse(),i.each(s,function(t,e){if(e.options.continuous||t===s.length-1)return e.trigger([n])})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,o,n=this;return o=i.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:o?0:e.left,contextScroll:o?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:o?0:e.top,contextScroll:o?0:this.oldScroll.y,contextDimension:o?i[w]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},i.each(t,function(t,e){return i.each(n.waypoints[t],function(t,o){var n,r,s,a,l;if(n=o.options.offset,s=o.offset,r=i.isWindow(o.element)?0:o.$element.offset()[e.offsetProp],i.isFunction(n)?n=n.apply(o.element):"string"==typeof n&&(n=parseFloat(n),o.options.offset.indexOf("%")>-1&&(n=Math.ceil(e.contextDimension*n/100))),o.offset=r-e.contextOffset+e.contextScroll-n,(!o.options.onlyOnScroll||null==s)&&o.enabled)return null!==s&&s<(a=e.oldScroll)&&a<=o.offset?o.trigger([e.backward]):null!==s&&s>(l=e.oldScroll)&&l>=o.offset?o.trigger([e.forward]):null===s&&e.oldScroll>=o.offset?o.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){if(i.isEmptyObject(this.waypoints.horizontal)&&i.isEmptyObject(this.waypoints.vertical))return this.$element.unbind([f,m].join(" ")),delete u[this.id]},t}(),s=function(){function t(t,e,o){var n,r;"bottom-in-view"===(o=i.extend({},i.fn[y].defaults,o)).offset&&(o.offset=function(){var t;return t=i[w]("viewportHeight"),i.isWindow(e.element)||(t=e.$element.height()),t-i(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=o.horizontal?"horizontal":"vertical",this.callback=o.handler,this.context=e,this.enabled=o.enabled,this.id="waypoints"+g++,this.offset=null,this.options=o,e.waypoints[this.axis][this.id]=this,a[this.axis][this.id]=this,(n=null!=(r=t.data(v))?r:[]).push(this.id),t.data(v,n)}return t.prototype.trigger=function(t){if(this.enabled)return null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete a[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,o;return(o=i(t).data(v))?(e=i.extend({},a.horizontal,a.vertical),i.map(o,function(t){return e[t]})):[]},t}(),p={init:function(t,e){return null==e&&(e={}),null==e.handler&&(e.handler=t),this.each(function(){var t,o,n,a;return t=i(this),n=null!=(a=e.context)?a:i.fn[y].defaults.context,i.isWindow(n)||(n=t.closest(n)),n=i(n),(o=u[n.data(c)])||(o=new r(n)),new s(t,o,e)}),i[w]("refresh"),this},disable:function(){return p._invoke(this,"disable")},enable:function(){return p._invoke(this,"enable")},destroy:function(){return p._invoke(this,"destroy")},prev:function(t,e){return p._traverse.call(this,t,e,function(t,e,i){if(e>0)return t.push(i[e-1])})},next:function(t,e){return p._traverse.call(this,t,e,function(t,e,i){if(e<i.length-1)return t.push(i[e+1])})},_traverse:function(t,e,n){var r,s;return null==t&&(t="vertical"),null==e&&(e=o),s=h.aggregate(e),r=[],this.each(function(){var e;return e=i.inArray(this,s[t]),n(r,e,s[t])}),this.pushStack(r)},_invoke:function(t,e){return t.each(function(){var t;return t=s.getWaypointsByElement(this),i.each(t,function(t,i){return i[e](),!0})}),this}},i.fn[y]=function(){var t,o;return o=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],p[o]?p[o].apply(this,t):i.isFunction(o)?p.init.apply(this,arguments):i.isPlainObject(o)?p.init.apply(this,[null,o]):o?i.error("The "+o+" method does not exist in jQuery Waypoints."):i.error("jQuery Waypoints needs a callback function or handler option.")},i.fn[y].defaults={context:o,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},h={refresh:function(){return i.each(u,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=o.innerHeight)?t:n.height()},aggregate:function(t){var e,o,n;return e=a,t&&(e=null!=(n=u[i(t).data(c)])?n.waypoints:void 0),e?(o={horizontal:[],vertical:[]},i.each(o,function(t,n){return i.each(e[t],function(t,e){return n.push(e)}),n.sort(function(t,e){return t.offset-e.offset}),o[t]=i.map(n,function(t){return t.element}),o[t]=i.unique(o[t])}),o):[]},above:function(t){return null==t&&(t=o),h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=o),h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=o),h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=o),h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return p[t]=e},_invoke:function(t){var e;return e=i.extend({},a.vertical,a.horizontal),i.each(e,function(e,i){return i[t](),!0})},_filter:function(t,e,o){var n,r;return(n=u[i(t).data(c)])?(r=[],i.each(n.waypoints[e],function(t,e){if(o(n,e))return r.push(e)}),r.sort(function(t,e){return t.offset-e.offset}),i.map(r,function(t){return t.element})):[]}},i[w]=function(){var t,i;return i=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],h[i]?h[i].apply(null,t):h.aggregate.call(null,i)},i[w].settings={resizeThrottle:100,scrollThrottle:30},n.load(function(){return i[w]("refresh")})})}.call(this),function(){var t,e,i,o,n,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var i,o;for(i in e)o=e[i],null==t[i]&&(t[i]=o);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,i,o){var n;return null==e&&(e=!1),null==i&&(i=!1),null==o&&(o=null),null!=document.createEvent?(n=document.createEvent("CustomEvent")).initCustomEvent(t,e,i,o):null!=document.createEventObject?(n=document.createEventObject()).eventType=t:n.eventName=t,n},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,i){return null!=t.addEventListener?t.addEventListener(e,i,!1):null!=t.attachEvent?t.attachEvent("on"+e,i):t[e]=i},t.prototype.removeEvent=function(t,e,i){return null!=t.removeEventListener?t.removeEventListener(e,i,!1):null!=t.detachEvent?t.detachEvent("on"+e,i):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),i=this.WeakMap||this.MozWeakMap||(i=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,o,n;for(e=i=0,o=(n=this.keys).length;o>i;e=++i)if(n[e]===t)return this.values[e]},t.prototype.set=function(t,e){var i,o,n,r;for(i=o=0,n=(r=this.keys).length;n>o;i=++o)if(r[i]===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),o=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var i;return"float"===e&&(e="styleFloat"),n.test(e)&&e.replace(n,function(t,e){return e.toUpperCase()}),(null!=(i=t.currentStyle)?i[e]:void 0)||null},this},n=/(\-([a-z]){1})/g,this.WOW=function(){function n(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new i,this.wowEvent=this.util().createEvent(this.config.boxClass)}return n.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},n.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},n.prototype.start=function(){var e,i,o,n;if(this.stopped=!1,this.boxes=function(){var t,i,o,n;for(n=[],t=0,i=(o=this.element.querySelectorAll("."+this.config.boxClass)).length;i>t;t++)e=o[t],n.push(e);return n}.call(this),this.all=function(){var t,i,o,n;for(n=[],t=0,i=(o=this.boxes).length;i>t;t++)e=o[t],n.push(e);return n}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(i=0,o=(n=this.boxes).length;o>i;i++)e=n[i],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var i,o,n,r,s;for(s=[],i=0,o=e.length;o>i;i++)r=e[i],s.push(function(){var t,e,i,o;for(o=[],t=0,e=(i=r.addedNodes||[]).length;e>t;t++)n=i[t],o.push(this.doSync(n));return o}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},n.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},n.prototype.sync=function(e){return t.notSupported?this.doSync(this.element):void 0},n.prototype.doSync=function(t){var e,i,o,n,r;if(null==t&&(t=this.element),1===t.nodeType){for(r=[],i=0,o=(n=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;o>i;i++)e=n[i],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},n.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},n.prototype.applyStyle=function(t,e){var i,o,n,r;return o=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),n=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,o,i,n)}))},n.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},n.prototype.resetStyle=function(){var t,e,i,o,n;for(n=[],e=0,i=(o=this.boxes).length;i>e;e++)t=o[e],n.push(t.style.visibility="visible");return n},n.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim():void 0},n.prototype.customStyle=function(t,e,i,o,n){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),o&&this.vendorSet(t.style,{animationDelay:o}),n&&this.vendorSet(t.style,{animationIterationCount:n}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},n.prototype.vendors=["moz","webkit"],n.prototype.vendorSet=function(t,e){var i,o,n,r;for(i in o=[],e)n=e[i],t[""+i]=n,o.push(function(){var e,o,s,a;for(a=[],e=0,o=(s=this.vendors).length;o>e;e++)r=s[e],a.push(t[""+r+i.charAt(0).toUpperCase()+i.substr(1)]=n);return a}.call(this));return o},n.prototype.vendorCSS=function(t,e){var i,n,r,s,a,l;for(s=(a=o(t)).getPropertyCSSValue(e),i=0,n=(r=this.vendors).length;n>i;i++)l=r[i],s=s||a.getPropertyCSSValue("-"+l+"-"+e);return s},n.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=o(t).getPropertyValue("animation-name")}return"none"===e?"":e},n.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},n.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},n.prototype.scrollHandler=function(){return this.scrolled=!0},n.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,i,o,n;for(n=[],e=0,i=(o=this.boxes).length;i>e;e++)(t=o[e])&&(this.isVisible(t)?this.show(t):n.push(t));return n}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},n.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},n.prototype.isVisible=function(t){var e,i,o,n,r;return i=t.getAttribute("data-wow-offset")||this.config.offset,n=(r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-i,e=(o=this.offsetTop(t))+t.clientHeight,n>=o&&e>=r},n.prototype.util=function(){return null!=this._util?this._util:this._util=new e},n.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},n}()}.call(this),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(t){var e,i,o,n,r,s,a="Close",l="BeforeClose",c="MarkupParse",u="Open",d="Change",h="mfp",p="."+h,f="mfp-ready",m="mfp-removing",g="mfp-prevent-close",v=function(){},y=!!window.jQuery,w=t(window),b=function(t,i){e.ev.on(h+t+p,i)},x=function(e,i,o,n){var r=document.createElement("div");return r.className="mfp-"+e,o&&(r.innerHTML=o),n?i&&i.appendChild(r):(r=t(r),i&&r.appendTo(i)),r},_=function(i,o){e.ev.triggerHandler(h+i,o),e.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),e.st.callbacks[i]&&e.st.callbacks[i].apply(e,t.isArray(o)?o:[o]))},C=function(i){return i===s&&e.currTemplate.closeBtn||(e.currTemplate.closeBtn=t(e.st.closeMarkup.replace("%title%",e.st.tClose)),s=i),e.currTemplate.closeBtn},k=function(){t.magnificPopup.instance||((e=new v).init(),t.magnificPopup.instance=e)};v.prototype={constructor:v,init:function(){var i=navigator.appVersion;e.isLowIE=e.isIE8=document.all&&!document.addEventListener,e.isAndroid=/android/gi.test(i),e.isIOS=/iphone|ipad|ipod/gi.test(i),e.supportsTransition=function(){var t=document.createElement("p").style,e=["ms","O","Moz","Webkit"];if(void 0!==t.transition)return!0;for(;e.length;)if(e.pop()+"Transition"in t)return!0;return!1}(),e.probablyMobile=e.isAndroid||e.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=t(document),e.popupsCache={}},open:function(i){var n;if(!1===i.isObj){e.items=i.items.toArray(),e.index=0;var s,a=i.items;for(n=0;n<a.length;n++)if((s=a[n]).parsed&&(s=s.el[0]),s===i.el[0]){e.index=n;break}}else e.items=t.isArray(i.items)?i.items:[i.items],e.index=i.index||0;if(!e.isOpen){e.types=[],r="",i.mainEl&&i.mainEl.length?e.ev=i.mainEl.eq(0):e.ev=o,i.key?(e.popupsCache[i.key]||(e.popupsCache[i.key]={}),e.currTemplate=e.popupsCache[i.key]):e.currTemplate={},e.st=t.extend(!0,{},t.magnificPopup.defaults,i),e.fixedContentPos="auto"===e.st.fixedContentPos?!e.probablyMobile:e.st.fixedContentPos,e.st.modal&&(e.st.closeOnContentClick=!1,e.st.closeOnBgClick=!1,e.st.showCloseBtn=!1,e.st.enableEscapeKey=!1),e.bgOverlay||(e.bgOverlay=x("bg").on("click"+p,function(){e.close()}),e.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(t){e._checkIfClose(t.target)&&e.close()}),e.container=x("container",e.wrap)),e.contentContainer=x("content"),e.st.preloader&&(e.preloader=x("preloader",e.container,e.st.tLoading));var l=t.magnificPopup.modules;for(n=0;n<l.length;n++){var d=l[n];d=d.charAt(0).toUpperCase()+d.slice(1),e["init"+d].call(e)}_("BeforeOpen"),e.st.showCloseBtn&&(e.st.closeBtnInside?(b(c,function(t,e,i,o){i.close_replaceWith=C(o.type)}),r+=" mfp-close-btn-in"):e.wrap.append(C())),e.st.alignTop&&(r+=" mfp-align-top"),e.fixedContentPos?e.wrap.css({overflow:e.st.overflowY,overflowX:"hidden",overflowY:e.st.overflowY}):e.wrap.css({top:w.scrollTop(),position:"absolute"}),(!1===e.st.fixedBgPos||"auto"===e.st.fixedBgPos&&!e.fixedContentPos)&&e.bgOverlay.css({height:o.height(),position:"absolute"}),e.st.enableEscapeKey&&o.on("keyup"+p,function(t){27===t.keyCode&&e.close()}),w.on("resize"+p,function(){e.updateSize()}),e.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&e.wrap.addClass(r);var h=e.wH=w.height(),m={};if(e.fixedContentPos&&e._hasScrollBar(h)){var g=e._getScrollbarSize();g&&(m.marginRight=g)}e.fixedContentPos&&(e.isIE7?t("body, html").css("overflow","hidden"):m.overflow="hidden");var v=e.st.mainClass;return e.isIE7&&(v+=" mfp-ie7"),v&&e._addClassToMFP(v),e.updateItemHTML(),_("BuildControls"),t("html").css(m),e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo||t(document.body)),e._lastFocusedEl=document.activeElement,setTimeout(function(){e.content?(e._addClassToMFP(f),e._setFocus()):e.bgOverlay.addClass(f),o.on("focusin"+p,e._onFocusIn)},16),e.isOpen=!0,e.updateSize(h),_(u),i}e.updateItemHTML()},close:function(){e.isOpen&&(_(l),e.isOpen=!1,e.st.removalDelay&&!e.isLowIE&&e.supportsTransition?(e._addClassToMFP(m),setTimeout(function(){e._close()},e.st.removalDelay)):e._close())},_close:function(){_(a);var i=m+" "+f+" ";if(e.bgOverlay.detach(),e.wrap.detach(),e.container.empty(),e.st.mainClass&&(i+=e.st.mainClass+" "),e._removeClassFromMFP(i),e.fixedContentPos){var n={marginRight:""};e.isIE7?t("body, html").css("overflow",""):n.overflow="",t("html").css(n)}o.off("keyup.mfp focusin"+p),e.ev.off(p),e.wrap.attr("class","mfp-wrap").removeAttr("style"),e.bgOverlay.attr("class","mfp-bg"),e.container.attr("class","mfp-container"),!e.st.showCloseBtn||e.st.closeBtnInside&&!0!==e.currTemplate[e.currItem.type]||e.currTemplate.closeBtn&&e.currTemplate.closeBtn.detach(),e.st.autoFocusLast&&e._lastFocusedEl&&t(e._lastFocusedEl).focus(),e.currItem=null,e.content=null,e.currTemplate=null,e.prevHeight=0,_("AfterClose")},updateSize:function(t){if(e.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,o=window.innerHeight*i;e.wrap.css("height",o),e.wH=o}else e.wH=t||w.height();e.fixedContentPos||e.wrap.css("height",e.wH),_("Resize")},updateItemHTML:function(){var i=e.items[e.index];e.contentContainer.detach(),e.content&&e.content.detach(),i.parsed||(i=e.parseEl(e.index));var o=i.type;if(_("BeforeChange",[e.currItem?e.currItem.type:"",o]),e.currItem=i,!e.currTemplate[o]){var r=!!e.st[o]&&e.st[o].markup;_("FirstMarkupParse",r),e.currTemplate[o]=!r||t(r)}n&&n!==i.type&&e.container.removeClass("mfp-"+n+"-holder");var s=e["get"+o.charAt(0).toUpperCase()+o.slice(1)](i,e.currTemplate[o]);e.appendContent(s,o),i.preloaded=!0,_(d,i),n=i.type,e.container.prepend(e.contentContainer),_("AfterChange")},appendContent:function(t,i){e.content=t,t?e.st.showCloseBtn&&e.st.closeBtnInside&&!0===e.currTemplate[i]?e.content.find(".mfp-close").length||e.content.append(C()):e.content=t:e.content="",_("BeforeAppend"),e.container.addClass("mfp-"+i+"-holder"),e.contentContainer.append(e.content)},parseEl:function(i){var o,n=e.items[i];if(n.tagName?n={el:t(n)}:(o=n.type,n={data:n,src:n.src}),n.el){for(var r=e.types,s=0;s<r.length;s++)if(n.el.hasClass("mfp-"+r[s])){o=r[s];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||e.st.type||"inline",n.index=i,n.parsed=!0,e.items[i]=n,_("ElementParse",n),e.items[i]},addGroup:function(t,i){var o=function(o){o.mfpEl=this,e._openClick(o,t,i)};i||(i={});var n="click.magnificPopup";i.mainEl=t,i.items?(i.isObj=!0,t.off(n).on(n,o)):(i.isObj=!1,i.delegate?t.off(n).on(n,i.delegate,o):(i.items=t,t.off(n).on(n,o)))},_openClick:function(i,o,n){if((void 0!==n.midClick?n.midClick:t.magnificPopup.defaults.midClick)||!(2===i.which||i.ctrlKey||i.metaKey||i.altKey||i.shiftKey)){var r=void 0!==n.disableOn?n.disableOn:t.magnificPopup.defaults.disableOn;if(r)if(t.isFunction(r)){if(!r.call(e))return!0}else if(w.width()<r)return!0;i.type&&(i.preventDefault(),e.isOpen&&i.stopPropagation()),n.el=t(i.mfpEl),n.delegate&&(n.items=o.find(n.delegate)),e.open(n)}},updateStatus:function(t,o){if(e.preloader){i!==t&&e.container.removeClass("mfp-s-"+i),o||"loading"!==t||(o=e.st.tLoading);var n={status:t,text:o};_("UpdateStatus",n),t=n.status,o=n.text,e.preloader.html(o),e.preloader.find("a").on("click",function(t){t.stopImmediatePropagation()}),e.container.addClass("mfp-s-"+t),i=t}},_checkIfClose:function(i){if(!t(i).hasClass(g)){var o=e.st.closeOnContentClick,n=e.st.closeOnBgClick;if(o&&n)return!0;if(!e.content||t(i).hasClass("mfp-close")||e.preloader&&i===e.preloader[0])return!0;if(i===e.content[0]||t.contains(e.content[0],i)){if(o)return!0}else if(n&&t.contains(document,i))return!0;return!1}},_addClassToMFP:function(t){e.bgOverlay.addClass(t),e.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t),e.wrap.removeClass(t)},_hasScrollBar:function(t){return(e.isIE7?o.height():document.body.scrollHeight)>(t||w.height())},_setFocus:function(){(e.st.focus?e.content.find(e.st.focus).eq(0):e.wrap).focus()},_onFocusIn:function(i){return i.target===e.wrap[0]||t.contains(e.wrap[0],i.target)?void 0:(e._setFocus(),!1)},_parseMarkup:function(e,i,o){var n;o.data&&(i=t.extend(o.data,i)),_(c,[e,i,o]),t.each(i,function(i,o){if(void 0===o||!1===o)return!0;if((n=i.split("_")).length>1){var r=e.find(p+"-"+n[0]);if(r.length>0){var s=n[1];"replaceWith"===s?r[0]!==o[0]&&r.replaceWith(o):"img"===s?r.is("img")?r.attr("src",o):r.replaceWith(t("<img>").attr("src",o).attr("class",r.attr("class"))):r.attr(n[1],o)}}else e.find(p+"-"+i).html(o)})},_getScrollbarSize:function(){if(void 0===e.scrollbarSize){var t=document.createElement("div");t.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t),e.scrollbarSize=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return e.scrollbarSize}},t.magnificPopup={instance:null,proto:v.prototype,modules:[],open:function(e,i){return k(),(e=e?t.extend(!0,{},e):{}).isObj=!0,e.index=i||0,this.instance.open(e)},close:function(){return t.magnificPopup.instance&&t.magnificPopup.instance.close()},registerModule:function(e,i){i.options&&(t.magnificPopup.defaults[e]=i.options),t.extend(this.proto,i.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},t.fn.magnificPopup=function(i){k();var o=t(this);if("string"==typeof i)if("open"===i){var n,r=y?o.data("magnificPopup"):o[0].magnificPopup,s=parseInt(arguments[1],10)||0;r.items?n=r.items[s]:(n=o,r.delegate&&(n=n.find(r.delegate)),n=n.eq(s)),e._openClick({mfpEl:n},o,r)}else e.isOpen&&e[i].apply(e,Array.prototype.slice.call(arguments,1));else i=t.extend(!0,{},i),y?o.data("magnificPopup",i):o[0].magnificPopup=i,e.addGroup(o,i);return o};var S,T,z,E="inline",I=function(){z&&(T.after(z.addClass(S)).detach(),z=null)};t.magnificPopup.registerModule(E,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){e.types.push(E),b(a+"."+E,function(){I()})},getInline:function(i,o){if(I(),i.src){var n=e.st.inline,r=t(i.src);if(r.length){var s=r[0].parentNode;s&&s.tagName&&(T||(S=n.hiddenClass,T=x(S),S="mfp-"+S),z=r.after(T).detach().removeClass(S)),e.updateStatus("ready")}else e.updateStatus("error",n.tNotFound),r=t("<div>");return i.inlineElement=r,r}return e.updateStatus("ready"),e._parseMarkup(o,{},i),o}}});var M,P="ajax",O=function(){M&&t(document.body).removeClass(M)},L=function(){O(),e.req&&e.req.abort()};t.magnificPopup.registerModule(P,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){e.types.push(P),M=e.st.ajax.cursor,b(a+"."+P,L),b("BeforeChange."+P,L)},getAjax:function(i){M&&t(document.body).addClass(M),e.updateStatus("loading");var o=t.extend({url:i.src,success:function(o,n,r){var s={data:o,xhr:r};_("ParseAjax",s),e.appendContent(t(s.data),P),i.finished=!0,O(),e._setFocus(),setTimeout(function(){e.wrap.addClass(f)},16),e.updateStatus("ready"),_("AjaxContentAdded")},error:function(){O(),i.finished=i.loadError=!0,e.updateStatus("error",e.st.ajax.tError.replace("%url%",i.src))}},e.st.ajax.settings);return e.req=t.ajax(o),""}}});var H,N=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var o=e.st.image.titleSrc;if(o){if(t.isFunction(o))return o.call(e,i);if(i.el)return i.el.attr(o)||""}return""};t.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var i=e.st.image,o=".image";e.types.push("image"),b(u+o,function(){"image"===e.currItem.type&&i.cursor&&t(document.body).addClass(i.cursor)}),b(a+o,function(){i.cursor&&t(document.body).removeClass(i.cursor),w.off("resize"+p)}),b("Resize"+o,e.resizeImage),e.isLowIE&&b("AfterChange",e.resizeImage)},resizeImage:function(){var t=e.currItem;if(t&&t.img&&e.st.image.verticalFit){var i=0;e.isLowIE&&(i=parseInt(t.img.css("padding-top"),10)+parseInt(t.img.css("padding-bottom"),10)),t.img.css("max-height",e.wH-i)}},_onImageHasSize:function(t){t.img&&(t.hasSize=!0,H&&clearInterval(H),t.isCheckingImgSize=!1,_("ImageHasSize",t),t.imgHidden&&(e.content&&e.content.removeClass("mfp-loading"),t.imgHidden=!1))},findImageSize:function(t){var i=0,o=t.img[0],n=function(r){H&&clearInterval(H),H=setInterval(function(){return o.naturalWidth>0?void e._onImageHasSize(t):(i>200&&clearInterval(H),void(3===++i?n(10):40===i?n(50):100===i&&n(500)))},r)};n(1)},getImage:function(i,o){var n=0,r=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===e.currItem&&(e._onImageHasSize(i),e.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,_("ImageLoadComplete")):200>++n?setTimeout(r,100):s())},s=function(){i&&(i.img.off(".mfploader"),i===e.currItem&&(e._onImageHasSize(i),e.updateStatus("error",a.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},a=e.st.image,l=o.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",i.el&&i.el.find("img").length&&(c.alt=i.el.find("img").attr("alt")),i.img=t(c).on("load.mfploader",r).on("error.mfploader",s),c.src=i.src,l.is("img")&&(i.img=i.img.clone()),(c=i.img[0]).naturalWidth>0?i.hasSize=!0:c.width||(i.hasSize=!1)}return e._parseMarkup(o,{title:N(i),img_replaceWith:i.img},i),e.resizeImage(),i.hasSize?(H&&clearInterval(H),i.loadError?(o.addClass("mfp-loading"),e.updateStatus("error",a.tError.replace("%url%",i.src))):(o.removeClass("mfp-loading"),e.updateStatus("ready")),o):(e.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,o.addClass("mfp-loading"),e.findImageSize(i)),o)}}});var A;t.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t,i=e.st.zoom,o=".zoom";if(i.enabled&&e.supportsTransition){var n,r,s=i.duration,c=function(t){var e=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),o="all "+i.duration/1e3+"s "+i.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return n["-webkit-"+r]=n["-moz-"+r]=n["-o-"+r]=n[r]=o,e.css(n),e},u=function(){e.content.css("visibility","visible")};b("BuildControls"+o,function(){if(e._allowZoom()){if(clearTimeout(n),e.content.css("visibility","hidden"),!(t=e._getItemToZoom()))return void u();(r=c(t)).css(e._getOffset()),e.wrap.append(r),n=setTimeout(function(){r.css(e._getOffset(!0)),n=setTimeout(function(){u(),setTimeout(function(){r.remove(),t=r=null,_("ZoomAnimationEnded")},16)},s)},16)}}),b(l+o,function(){if(e._allowZoom()){if(clearTimeout(n),e.st.removalDelay=s,!t){if(!(t=e._getItemToZoom()))return;r=c(t)}r.css(e._getOffset(!0)),e.wrap.append(r),e.content.css("visibility","hidden"),setTimeout(function(){r.css(e._getOffset())},16)}}),b(a+o,function(){e._allowZoom()&&(u(),r&&r.remove(),t=null)})}},_allowZoom:function(){return"image"===e.currItem.type},_getItemToZoom:function(){return!!e.currItem.hasSize&&e.currItem.img},_getOffset:function(i){var o,n=(o=i?e.currItem.img:e.st.zoom.opener(e.currItem.el||e.currItem)).offset(),r=parseInt(o.css("padding-top"),10),s=parseInt(o.css("padding-bottom"),10);n.top-=t(window).scrollTop()-r;var a={width:o.width(),height:(y?o.innerHeight():o[0].offsetHeight)-s-r};return void 0===A&&(A=void 0!==document.createElement("p").style.MozTransform),A?a["-moz-transform"]=a.transform="translate("+n.left+"px,"+n.top+"px)":(a.left=n.left,a.top=n.top),a}}});var B="iframe",$=function(t){if(e.currTemplate[B]){var i=e.currTemplate[B].find("iframe");i.length&&(t||(i[0].src="//about:blank"),e.isIE8&&i.css("display",t?"block":"none"))}};t.magnificPopup.registerModule(B,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){e.types.push(B),b("BeforeChange",function(t,e,i){e!==i&&(e===B?$():i===B&&$(!0))}),b(a+"."+B,function(){$()})},getIframe:function(i,o){var n=i.src,r=e.st.iframe;t.each(r.patterns,function(){return n.indexOf(this.index)>-1?(this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1):void 0});var s={};return r.srcAction&&(s[r.srcAction]=n),e._parseMarkup(o,s,i),e.updateStatus("ready"),o}}});var j=function(t){var i=e.items.length;return t>i-1?t-i:0>t?i+t:t},W=function(t,e,i){return t.replace(/%curr%/gi,e+1).replace(/%total%/gi,i)};t.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=e.st.gallery,n=".mfp-gallery";return e.direction=!0,!(!i||!i.enabled)&&(r+=" mfp-gallery",b(u+n,function(){i.navigateByImgClick&&e.wrap.on("click"+n,".mfp-img",function(){return e.items.length>1?(e.next(),!1):void 0}),o.on("keydown"+n,function(t){37===t.keyCode?e.prev():39===t.keyCode&&e.next()})}),b("UpdateStatus"+n,function(t,i){i.text&&(i.text=W(i.text,e.currItem.index,e.items.length))}),b(c+n,function(t,o,n,r){var s=e.items.length;n.counter=s>1?W(i.tCounter,r.index,s):""}),b("BuildControls"+n,function(){if(e.items.length>1&&i.arrows&&!e.arrowLeft){var o=i.arrowMarkup,n=e.arrowLeft=t(o.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass(g),r=e.arrowRight=t(o.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass(g);n.click(function(){e.prev()}),r.click(function(){e.next()}),e.container.append(n.add(r))}}),b(d+n,function(){e._preloadTimeout&&clearTimeout(e._preloadTimeout),e._preloadTimeout=setTimeout(function(){e.preloadNearbyImages(),e._preloadTimeout=null},16)}),void b(a+n,function(){o.off(n),e.wrap.off("click"+n),e.arrowRight=e.arrowLeft=null}))},next:function(){e.direction=!0,e.index=j(e.index+1),e.updateItemHTML()},prev:function(){e.direction=!1,e.index=j(e.index-1),e.updateItemHTML()},goTo:function(t){e.direction=t>=e.index,e.index=t,e.updateItemHTML()},preloadNearbyImages:function(){var t,i=e.st.gallery.preload,o=Math.min(i[0],e.items.length),n=Math.min(i[1],e.items.length);for(t=1;t<=(e.direction?n:o);t++)e._preloadItem(e.index+t);for(t=1;t<=(e.direction?o:n);t++)e._preloadItem(e.index-t)},_preloadItem:function(i){if(i=j(i),!e.items[i].preloaded){var o=e.items[i];o.parsed||(o=e.parseEl(i)),_("LazyLoad",o),"image"===o.type&&(o.img=t('<img class="mfp-img" />').on("load.mfploader",function(){o.hasSize=!0}).on("error.mfploader",function(){o.hasSize=!0,o.loadError=!0,_("LazyLoadError",o)}).attr("src",o.src)),o.preloaded=!0}}}});var D="retina";t.magnificPopup.registerModule(D,{options:{replaceSrc:function(t){return t.src.replace(/\.\w+$/,function(t){return"@2x"+t})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var t=e.st.retina,i=t.ratio;(i=isNaN(i)?i():i)>1&&(b("ImageHasSize."+D,function(t,e){e.img.css({"max-width":e.img[0].naturalWidth/i,width:"100%"})}),b("ElementParse."+D,function(e,o){o.src=t.replaceSrc(o,i)}))}}}}),k()}),function(t){t.fn.classyNav=function(e){var i=t(".classy-nav-container"),o=t(".classynav ul"),n=t(".classynav > ul > li"),r=t(".classy-navbar-toggler"),s=t(".classycloseIcon"),a=t(".navbarToggler"),l=t(".classy-menu"),c=t(window),u=t.extend({theme:"light",breakpoint:991,openCloseSpeed:350,megaopenCloseSpeed:700,alwaysHidden:!1,openMobileMenu:"left",dropdownRtl:!1,stickyNav:!1,stickyFooterNav:!1},e);return this.each(function(){function e(){window.innerWidth<=u.breakpoint?i.removeClass("breakpoint-off").addClass("breakpoint-on"):i.removeClass("breakpoint-on").addClass("breakpoint-off")}"light"!==u.theme&&"dark"!==u.theme||i.addClass(u.theme),"left"!==u.openMobileMenu&&"right"!==u.openMobileMenu||i.addClass(u.openMobileMenu),!0===u.dropdownRtl&&i.addClass("dropdown-rtl"),r.on("click",function(){a.toggleClass("active"),l.toggleClass("menu-on")}),s.on("click",function(){l.removeClass("menu-on"),a.removeClass("active")}),n.has(".dropdown").addClass("cn-dropdown-item"),n.has(".megamenu").addClass("megamenu-item"),o.find("li a").each(function(){t(this).next().length>0&&t(this).parent("li").addClass("has-down").append('<span class="dd-trigger"></span>')}),o.find("li .dd-trigger").on("click",function(e){e.preventDefault(),t(this).parent("li").children("ul").stop(!0,!0).slideToggle(u.openCloseSpeed),t(this).parent("li").toggleClass("active")}),t(".megamenu-item").removeClass("has-down"),o.find("li .dd-trigger").on("click",function(e){e.preventDefault(),t(this).parent("li").children(".megamenu").slideToggle(u.megaopenCloseSpeed)}),e(),c.on("resize",function(){e()}),!0===u.alwaysHidden&&i.addClass("breakpoint-on").removeClass("breakpoint-off"),!0===u.stickyNav&&c.on("scroll",function(){c.scrollTop()>0?i.addClass("classy-sticky"):i.removeClass("classy-sticky")}),!0===u.stickyFooterNav&&i.addClass("classy-sticky-footer")})}}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=Array.prototype.slice,i=Array.prototype.splice,o={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"inherit"},n=t(window),r=t(document),s=[],a=n.height(),l=function(){for(var e=n.scrollTop(),i=r.height(),o=i-a,l=e>o?o-e:0,c=0,u=s.length;c<u;c++){var d=s[c],h=d.stickyWrapper.offset().top-d.topSpacing-l;if(d.stickyWrapper.css("height",d.stickyElement.outerHeight()),e<=h)null!==d.currentTop&&(d.stickyElement.css({width:"",position:"",top:"","z-index":""}),d.stickyElement.parent().removeClass(d.className),d.stickyElement.trigger("sticky-end",[d]),d.currentTop=null);else{var p,f=i-d.stickyElement.outerHeight()-d.topSpacing-d.bottomSpacing-e-l;if(f<0?f+=d.topSpacing:f=d.topSpacing,d.currentTop!==f)d.getWidthFrom?(padding=d.stickyElement.innerWidth()-d.stickyElement.width(),p=t(d.getWidthFrom).width()-padding||null):d.widthFromWrapper&&(p=d.stickyWrapper.width()),null==p&&(p=d.stickyElement.width()),d.stickyElement.css("width",p).css("position","fixed").css("top",f).css("z-index",d.zIndex),d.stickyElement.parent().addClass(d.className),null===d.currentTop?d.stickyElement.trigger("sticky-start",[d]):d.stickyElement.trigger("sticky-update",[d]),d.currentTop===d.topSpacing&&d.currentTop>f||null===d.currentTop&&f<d.topSpacing?d.stickyElement.trigger("sticky-bottom-reached",[d]):null!==d.currentTop&&f===d.topSpacing&&d.currentTop<f&&d.stickyElement.trigger("sticky-bottom-unreached",[d]),d.currentTop=f;var m=d.stickyWrapper.parent();d.stickyElement.offset().top+d.stickyElement.outerHeight()>=m.offset().top+m.outerHeight()&&d.stickyElement.offset().top<=d.topSpacing?d.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):d.stickyElement.css("position","fixed").css("top",f).css("bottom","").css("z-index",d.zIndex)}}},c=function(){a=n.height();for(var e=0,i=s.length;e<i;e++){var o=s[e],r=null;o.getWidthFrom?o.responsiveWidth&&(r=t(o.getWidthFrom).width()):o.widthFromWrapper&&(r=o.stickyWrapper.width()),null!=r&&o.stickyElement.css("width",r)}},u={init:function(e){return this.each(function(){var i=t.extend({},o,e),n=t(this),r=n.attr("id"),a=r?r+"-"+o.wrapperClassName:o.wrapperClassName,l=t("<div></div>").attr("id",a).addClass(i.wrapperClassName);n.wrapAll(function(){if(0==t(this).parent("#"+a).length)return l});var c=n.parent();i.center&&c.css({width:n.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===n.css("float")&&n.css({float:"none"}).parent().css({float:"right"}),i.stickyElement=n,i.stickyWrapper=c,i.currentTop=null,s.push(i),u.setWrapperHeight(this),u.setupChangeListeners(this)})},setWrapperHeight:function(e){var i=t(e),o=i.parent();o&&o.css("height",i.outerHeight())},setupChangeListeners:function(t){window.MutationObserver?new window.MutationObserver(function(e){(e[0].addedNodes.length||e[0].removedNodes.length)&&u.setWrapperHeight(t)}).observe(t,{subtree:!0,childList:!0}):window.addEventListener?(t.addEventListener("DOMNodeInserted",function(){u.setWrapperHeight(t)},!1),t.addEventListener("DOMNodeRemoved",function(){u.setWrapperHeight(t)},!1)):window.attachEvent&&(t.attachEvent("onDOMNodeInserted",function(){u.setWrapperHeight(t)}),t.attachEvent("onDOMNodeRemoved",function(){u.setWrapperHeight(t)}))},update:l,unstick:function(e){return this.each(function(){for(var e=t(this),o=-1,n=s.length;n-- >0;)s[n].stickyElement.get(0)===this&&(i.call(s,n,1),o=n);-1!==o&&(e.unwrap(),e.css({width:"",position:"",top:"",float:"","z-index":""}))})}};window.addEventListener?(window.addEventListener("scroll",l,!1),window.addEventListener("resize",c,!1)):window.attachEvent&&(window.attachEvent("onscroll",l),window.attachEvent("onresize",c)),t.fn.sticky=function(i){return u[i]?u[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):u.init.apply(this,arguments)},t.fn.unstick=function(i){return u[i]?u[i].apply(this,e.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sticky"):u.unstick.apply(this,arguments)},t(function(){setTimeout(l,0)})}),function(t){t.simpleTicker=function(e,i){var o={speed:1e3,delay:3e3,easing:"swing",effectType:"slide"},n={ul:"",li:"",initList:"",ulWidth:"",liHeight:"",tickerHook:"tickerHook",effect:{}},r=this;r.settings={},t(e),e=e,r.init=function(){switch(r.settings=t.extend({},o,i),n.ul=e.children("ul"),n.li=e.find("li"),n.initList=e.find("li:first"),n.ulWidth=n.ul.width(),n.liHeight=n.li.height(),e.css({height:n.liHeight}),n.li.css({top:"0",left:"0",position:"absolute"}),r.settings.effectType){case"fade":r.effect.fade();break;case"roll":r.effect.roll();break;case"slide":r.effect.slide()}r.effect.exec()},r.effect={},r.effect.exec=function(){n.initList.css(n.effect.init.css).animate(n.effect.init.animate,r.settings.speed,r.settings.easing).addClass(n.tickerHook),e.find(n.li).length>1&&setInterval(function(){e.find("."+n.tickerHook).animate(n.effect.start.animate,r.settings.speed,r.settings.easing).next().css(n.effect.next.css).animate(n.effect.next.animate,r.settings.speed,r.settings.easing).addClass(n.tickerHook).end().appendTo(n.ul).css(n.effect.end.css).removeClass(n.tickerHook)},r.settings.delay)},r.effect.fade=function(){n.effect={init:{css:{display:"block",opacity:"0"},animate:{opacity:"1",zIndex:"98"}},start:{animate:{opacity:"0"}},next:{css:{display:"block",opacity:"0",zIndex:"99"},animate:{opacity:"1"}},end:{css:{display:"none",zIndex:"98"}}}},r.effect.roll=function(){n.effect={init:{css:{top:"3em",display:"block",opacity:"0"},animate:{top:"0",opacity:"1",zIndex:"98"}},start:{animate:{top:"-3em",opacity:"0"}},next:{css:{top:"3em",display:"block",opacity:"0",zIndex:"99"},animate:{top:"0",opacity:"1"}},end:{css:{zIndex:"98"}}}},r.effect.slide=function(){n.effect={init:{css:{left:200,display:"block",opacity:"0"},animate:{left:"0",opacity:"1",zIndex:"98"}},start:{animate:{left:-200,opacity:"0"}},next:{css:{left:n.ulWidth,display:"block",opacity:"0",zIndex:"99"},animate:{left:"0",opacity:"1"}},end:{css:{zIndex:"98"}}}},r.init()},t.fn.simpleTicker=function(e){return this.each(function(){if(null==t(this).data("simpleTicker")){var i=new t.simpleTiecker(this,e);t(this).data("simpleTicker",i)}})}}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";var e=!1,i=!1,o=0,n=2e3,r=0,s=t,a=document,l=window,c=s(l),u=[],d=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.mozRequestAnimationFrame||!1,h=l.cancelAnimationFrame||l.webkitCancelAnimationFrame||l.mozCancelAnimationFrame||!1;if(d)l.cancelAnimationFrame||(h=function(t){});else{var p=0;d=function(t,e){var i=(new Date).getTime(),o=Math.max(0,16-(i-p)),n=l.setTimeout(function(){t(i+o)},o);return p=i+o,n},h=function(t){l.clearTimeout(t)}}var f=l.MutationObserver||l.WebKitMutationObserver||!1,m=Date.now||function(){return(new Date).getTime()},g={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"6px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:40,mousescrollstep:27,touchbehavior:!1,emulatetouch:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:function(){var t=a.currentScript||function(){var t=a.getElementsByTagName("script");return!!t.length&&t[t.length-1]}(),e=t?t.src.split("?")[0]:"";return e.split("/").length>0?e.split("/").slice(0,-1).join("/")+"/":""}(),preventmultitouchscrolling:!0,disablemutationobserver:!1,enableobserver:!0,scrollbarid:!1},v=!1,y=function(){if(v)return v;var t=a.createElement("DIV"),e=t.style,i=navigator.userAgent,o=navigator.platform,n={};return n.haspointerlock="pointerLockElement"in a||"webkitPointerLockElement"in a||"mozPointerLockElement"in a,n.isopera="opera"in l,n.isopera12=n.isopera&&"getUserMedia"in navigator,n.isoperamini="[object OperaMini]"===Object.prototype.toString.call(l.operamini),n.isie="all"in a&&"attachEvent"in t&&!n.isopera,n.isieold=n.isie&&!("msInterpolationMode"in e),n.isie7=n.isie&&!n.isieold&&(!("documentMode"in a)||7===a.documentMode),n.isie8=n.isie&&"documentMode"in a&&8===a.documentMode,n.isie9=n.isie&&"performance"in l&&9===a.documentMode,n.isie10=n.isie&&"performance"in l&&10===a.documentMode,n.isie11="msRequestFullscreen"in t&&a.documentMode>=11,n.ismsedge="msCredentials"in l,n.ismozilla="MozAppearance"in e,n.iswebkit=!n.ismsedge&&"WebkitAppearance"in e,n.ischrome=n.iswebkit&&"chrome"in l,n.ischrome38=n.ischrome&&"touchAction"in e,n.ischrome22=!n.ischrome38&&n.ischrome&&n.haspointerlock,n.ischrome26=!n.ischrome38&&n.ischrome&&"transition"in e,n.cantouch="ontouchstart"in a.documentElement||"ontouchstart"in l,n.hasw3ctouch=!!l.PointerEvent&&(navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),n.hasmstouch=!n.hasw3ctouch&&(l.MSPointerEvent||!1),n.ismac=/^mac$/i.test(o),n.isios=n.cantouch&&/iphone|ipad|ipod/i.test(o),n.isios4=n.isios&&!("seal"in Object),n.isios7=n.isios&&"webkitHidden"in a,n.isios8=n.isios&&"hidden"in a,n.isios10=n.isios&&l.Proxy,n.isandroid=/android/i.test(i),n.haseventlistener="addEventListener"in t,n.trstyle=!1,n.hastransform=!1,n.hastranslate3d=!1,n.transitionstyle=!1,n.hastransition=!1,n.transitionend=!1,n.trstyle="transform",n.hastransform="transform"in e||function(){for(var t=["msTransform","webkitTransform","MozTransform","OTransform"],i=0,o=t.length;i<o;i++)if(void 0!==e[t[i]]){n.trstyle=t[i];break}n.hastransform=!!n.trstyle}(),n.hastransform&&(e[n.trstyle]="translate3d(1px,2px,3px)",n.hastranslate3d=/translate3d/.test(e[n.trstyle])),n.transitionstyle="transition",n.prefixstyle="",n.transitionend="transitionend",n.hastransition="transition"in e||function(){n.transitionend=!1;for(var t=["webkitTransition","msTransition","MozTransition","OTransition","OTransition","KhtmlTransition"],i=["-webkit-","-ms-","-moz-","-o-","-o","-khtml-"],o=["webkitTransitionEnd","msTransitionEnd","transitionend","otransitionend","oTransitionEnd","KhtmlTransitionEnd"],r=0,s=t.length;r<s;r++)if(t[r]in e){n.transitionstyle=t[r],n.prefixstyle=i[r],n.transitionend=o[r];break}n.ischrome26&&(n.prefixstyle=i[1]),n.hastransition=n.transitionstyle}(),n.cursorgrabvalue=function(){var t=["grab","-webkit-grab","-moz-grab"];(n.ischrome&&!n.ischrome38||n.isie)&&(t=[]);for(var i=0,o=t.length;i<o;i++){var r=t[i];if(e.cursor=r,e.cursor==r)return r}return"url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"}(),n.hasmousecapture="setCapture"in t,n.hasMutationObserver=!1!==f,t=null,v=n,n},w=function(t,p){function v(){var t=k.doc.css(M.trstyle);return!(!t||"matrix"!=t.substr(0,6))&&t.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/)}function w(t,e,i){var o=t.css(e),n=parseFloat(o);if(isNaN(n)){var r=3==(n=L[o]||0)?i?k.win.outerHeight()-k.win.innerHeight():k.win.outerWidth()-k.win.innerWidth():1;return k.isie8&&n&&(n+=1),r?n:0}return n}function x(t,e,i,o){k._bind(t,e,function(o){var n={original:o=o||l.event,target:o.target||o.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==o.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){return o.preventDefault?o.preventDefault():o.returnValue=!1,!1},stopImmediatePropagation:function(){o.stopImmediatePropagation?o.stopImmediatePropagation():o.cancelBubble=!0}};return"mousewheel"==e?(o.wheelDeltaX&&(n.deltaX=-.025*o.wheelDeltaX),o.wheelDeltaY&&(n.deltaY=-.025*o.wheelDeltaY),!n.deltaY&&!n.deltaX&&(n.deltaY=-.025*o.wheelDelta)):n.deltaY=o.detail,i.call(t,n)},o)}function _(t,e,i,o){k.scrollrunning||(k.newscrolly=k.getScrollTop(),k.newscrollx=k.getScrollLeft(),j=m());var n=m()-j;if(j=m(),n>350?W=1:W+=(2-W)/10,e=e*W|0,t=t*W|0){if(o)if(t<0){if(k.getScrollLeft()>=k.page.maxw)return!0}else if(k.getScrollLeft()<=0)return!0;var r=t>0?1:-1;$!==r&&(k.scrollmom&&k.scrollmom.stop(),k.newscrollx=k.getScrollLeft(),$=r),k.lastdeltax-=t}if(e){if(function(){var t=k.getScrollTop();if(e<0){if(t>=k.page.maxh)return!0}else if(t<=0)return!0}()){if(T.nativeparentscrolling&&i&&!k.ispage&&!k.zoomactive)return!0;var s=k.view.h>>1;k.newscrolly<-s?(k.newscrolly=-s,e=-1):k.newscrolly>k.page.maxh+s?(k.newscrolly=k.page.maxh+s,e=1):e=0}var a=e>0?1:-1;B!==a&&(k.scrollmom&&k.scrollmom.stop(),k.newscrolly=k.getScrollTop(),B=a),k.lastdeltay-=e}(e||t)&&k.synched("relativexy",function(){var t=k.lastdeltay+k.newscrolly;k.lastdeltay=0;var e=k.lastdeltax+k.newscrollx;k.lastdeltax=0,k.rail.drag||k.doScrollPos(e,t)})}function C(t,e,i){var o,n;return!(i||!D)||(0===t.deltaMode?(o=-t.deltaX*(T.mousescrollstep/54)|0,n=-t.deltaY*(T.mousescrollstep/54)|0):1===t.deltaMode&&(o=-t.deltaX*T.mousescrollstep*50/80|0,n=-t.deltaY*T.mousescrollstep*50/80|0),e&&T.oneaxismousemode&&0===o&&n&&(o=n,n=0,i&&(o<0?k.getScrollLeft()>=k.page.maxw:k.getScrollLeft()<=0)&&(n=o,o=0)),k.isrtlmode&&(o=-o),_(o,n,i,!0)?void(i&&(D=!0)):(D=!1,t.stopImmediatePropagation(),t.preventDefault()))}var k=this;this.version="3.7.6",this.name="nicescroll",this.me=p;var S=s("body"),T=this.opt={doc:S,win:!1};if(s.extend(T,g),T.snapbackspeed=80,t)for(var z in T)void 0!==t[z]&&(T[z]=t[z]);if(T.disablemutationobserver&&(f=!1),this.doc=T.doc,this.iddoc=this.doc&&this.doc[0]&&this.doc[0].id||"",this.ispage=/^BODY|HTML/.test(T.win?T.win[0].nodeName:this.doc[0].nodeName),this.haswrapper=!1!==T.win,this.win=T.win||(this.ispage?c:this.doc),this.docscroll=this.ispage&&!this.haswrapper?c:this.win,this.body=S,this.viewport=!1,this.isfixed=!1,this.iframe=!1,this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName,this.istextarea="TEXTAREA"==this.win[0].nodeName,this.forcescreen=!1,this.canshowonmouseevent="scroll"!=T.autohidemode,this.onmousedown=!1,this.onmouseup=!1,this.onmousemove=!1,this.onmousewheel=!1,this.onkeypress=!1,this.ongesturezoom=!1,this.onclick=!1,this.onscrollstart=!1,this.onscrollend=!1,this.onscrollcancel=!1,this.onzoomin=!1,this.onzoomout=!1,this.view=!1,this.page=!1,this.scroll={x:0,y:0},this.scrollratio={x:0,y:0},this.cursorheight=20,this.scrollvaluemax=0,"auto"==T.rtlmode){var E=this.win[0]==l?this.body:this.win,I=E.css("writing-mode")||E.css("-webkit-writing-mode")||E.css("-ms-writing-mode")||E.css("-moz-writing-mode");"horizontal-tb"==I||"lr-tb"==I||""===I?(this.isrtlmode="rtl"==E.css("direction"),this.isvertical=!1):(this.isrtlmode="vertical-rl"==I||"tb"==I||"tb-rl"==I||"rl-tb"==I,this.isvertical="vertical-rl"==I||"tb"==I||"tb-rl"==I)}else this.isrtlmode=!0===T.rtlmode,this.isvertical=!1;if(this.scrollrunning=!1,this.scrollmom=!1,this.observer=!1,this.observerremover=!1,this.observerbody=!1,!1!==T.scrollbarid)this.id=T.scrollbarid;else do{this.id="ascrail"+n++}while(a.getElementById(this.id));this.rail=!1,this.cursor=!1,this.cursorfreezed=!1,this.selectiondrag=!1,this.zoom=!1,this.zoomactive=!1,this.hasfocus=!1,this.hasmousefocus=!1,this.railslocked=!1,this.locked=!1,this.hidden=!1,this.cursoractive=!0,this.wheelprevented=!1,this.overflowx=T.overflowx,this.overflowy=T.overflowy,this.nativescrollingarea=!1,this.checkarea=0,this.events=[],this.saved={},this.delaylist={},this.synclist={},this.lastdeltax=0,this.lastdeltay=0,this.detected=y();var M=s.extend({},this.detected);this.canhwscroll=M.hastransform&&T.hwacceleration,this.ishwscroll=this.canhwscroll&&k.haswrapper,this.isrtlmode?this.isvertical?this.hasreversehr=!(M.iswebkit||M.isie||M.isie11):this.hasreversehr=!(M.iswebkit||M.isie&&!M.isie10&&!M.isie11):this.hasreversehr=!1,this.istouchcapable=!1,(M.cantouch||!M.hasw3ctouch&&!M.hasmstouch)&&(!M.cantouch||M.isios||M.isandroid||!M.iswebkit&&!M.ismozilla)||(this.istouchcapable=!0),T.enablemouselockapi||(M.hasmousecapture=!1,M.haspointerlock=!1),this.debounced=function(t,e,i){k&&(k.delaylist[t]||(k.delaylist[t]={h:d(function(){k.delaylist[t].fn.call(k),k.delaylist[t]=!1},i)},e.call(k)),k.delaylist[t].fn=e)},this.synched=function(t,e){k.synclist[t]?k.synclist[t]=e:(k.synclist[t]=e,d(function(){k&&(k.synclist[t]&&k.synclist[t].call(k),k.synclist[t]=null)}))},this.unsynched=function(t){k.synclist[t]&&(k.synclist[t]=!1)},this.css=function(t,e){for(var i in e)k.saved.css.push([t,i,t.css(i)]),t.css(i,e[i])},this.scrollTop=function(t){return void 0===t?k.getScrollTop():k.setScrollTop(t)},this.scrollLeft=function(t){return void 0===t?k.getScrollLeft():k.setScrollLeft(t)};var P=function(t,e,i,o,n,r,s){this.st=t,this.ed=e,this.spd=i,this.p1=o||0,this.p2=n||1,this.p3=r||0,this.p4=s||1,this.ts=m(),this.df=e-t};if(P.prototype={B2:function(t){return 3*(1-t)*(1-t)*t},B3:function(t){return 3*(1-t)*t*t},B4:function(t){return t*t*t},getPos:function(){return(m()-this.ts)/this.spd},getNow:function(){var t=(m()-this.ts)/this.spd,e=this.B2(t)+this.B3(t)+this.B4(t);return t>=1?this.ed:this.st+this.df*e|0},update:function(t,e){return this.st=this.getNow(),this.ed=t,this.spd=e,this.ts=m(),this.df=this.ed-this.st,this}},this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"},M.hastranslate3d&&M.isios&&this.doc.css("-webkit-backface-visibility","hidden"),this.getScrollTop=function(t){if(!t){var e=v();if(e)return 16==e.length?-e[13]:-e[5];if(k.timerscroll&&k.timerscroll.bz)return k.timerscroll.bz.getNow()}return k.doc.translate.y},this.getScrollLeft=function(t){if(!t){var e=v();if(e)return 16==e.length?-e[12]:-e[4];if(k.timerscroll&&k.timerscroll.bh)return k.timerscroll.bh.getNow()}return k.doc.translate.x},this.notifyScrollEvent=function(t){var e=a.createEvent("UIEvents");e.initUIEvent("scroll",!1,!1,l,1),e.niceevent=!0,t.dispatchEvent(e)};var O=this.isrtlmode?1:-1;M.hastranslate3d&&T.enabletranslate3d?(this.setScrollTop=function(t,e){k.doc.translate.y=t,k.doc.translate.ty=-1*t+"px",k.doc.css(M.trstyle,"translate3d("+k.doc.translate.tx+","+k.doc.translate.ty+",0)"),e||k.notifyScrollEvent(k.win[0])},this.setScrollLeft=function(t,e){k.doc.translate.x=t,k.doc.translate.tx=t*O+"px",k.doc.css(M.trstyle,"translate3d("+k.doc.translate.tx+","+k.doc.translate.ty+",0)"),e||k.notifyScrollEvent(k.win[0])}):(this.setScrollTop=function(t,e){k.doc.translate.y=t,k.doc.translate.ty=-1*t+"px",k.doc.css(M.trstyle,"translate("+k.doc.translate.tx+","+k.doc.translate.ty+")"),e||k.notifyScrollEvent(k.win[0])},this.setScrollLeft=function(t,e){k.doc.translate.x=t,k.doc.translate.tx=t*O+"px",k.doc.css(M.trstyle,"translate("+k.doc.translate.tx+","+k.doc.translate.ty+")"),e||k.notifyScrollEvent(k.win[0])})}else this.getScrollTop=function(){return k.docscroll.scrollTop()},this.setScrollTop=function(t){k.docscroll.scrollTop(t)},this.getScrollLeft=function(){return k.hasreversehr?k.detected.ismozilla?k.page.maxw-Math.abs(k.docscroll.scrollLeft()):k.page.maxw-k.docscroll.scrollLeft():k.docscroll.scrollLeft()},this.setScrollLeft=function(t){return setTimeout(function(){if(k)return k.hasreversehr&&(t=k.detected.ismozilla?-(k.page.maxw-t):k.page.maxw-t),k.docscroll.scrollLeft(t)},1)};this.getTarget=function(t){return!!t&&(t.target?t.target:!!t.srcElement&&t.srcElement)},this.hasParent=function(t,e){if(!t)return!1;for(var i=t.target||t.srcElement||t||!1;i&&i.id!=e;)i=i.parentNode||!1;return!1!==i};var L={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:l.pageYOffset||a.documentElement.scrollTop,left:l.pageXOffset||a.documentElement.scrollLeft}},this.getOffset=function(){if(k.isfixed){var t=k.win.offset(),e=k.getDocumentScrollOffset();return t.top-=e.top,t.left-=e.left,t}var i=k.win.offset();if(!k.viewport)return i;var o=k.viewport.offset();return{top:i.top-o.top,left:i.left-o.left}},this.updateScrollBar=function(t){var e,i;if(k.ishwscroll)k.rail.css({height:k.win.innerHeight()-(T.railpadding.top+T.railpadding.bottom)}),k.railh&&k.railh.css({width:k.win.innerWidth()-(T.railpadding.left+T.railpadding.right)});else{var o=k.getOffset();if((e={top:o.top,left:o.left-(T.railpadding.left+T.railpadding.right)}).top+=w(k.win,"border-top-width",!0),e.left+=k.rail.align?k.win.outerWidth()-w(k.win,"border-right-width")-k.rail.width:w(k.win,"border-left-width"),(i=T.railoffset)&&(i.top&&(e.top+=i.top),i.left&&(e.left+=i.left)),k.railslocked||k.rail.css({top:e.top,left:e.left,height:(t?t.h:k.win.innerHeight())-(T.railpadding.top+T.railpadding.bottom)}),k.zoom&&k.zoom.css({top:e.top+1,left:1==k.rail.align?e.left-20:e.left+k.rail.width+4}),k.railh&&!k.railslocked){e={top:o.top,left:o.left},(i=T.railhoffset)&&(i.top&&(e.top+=i.top),i.left&&(e.left+=i.left));var n=k.railh.align?e.top+w(k.win,"border-top-width",!0)+k.win.innerHeight()-k.railh.height:e.top+w(k.win,"border-top-width",!0),r=e.left+w(k.win,"border-left-width");k.railh.css({top:n-(T.railpadding.top+T.railpadding.bottom),left:r,width:k.railh.width})}}},this.doRailClick=function(t,e,i){var o,n,r,s;k.railslocked||(k.cancelEvent(t),"pageY"in t||(t.pageX=t.clientX+a.documentElement.scrollLeft,t.pageY=t.clientY+a.documentElement.scrollTop),e?(o=i?k.doScrollLeft:k.doScrollTop,r=i?(t.pageX-k.railh.offset().left-k.cursorwidth/2)*k.scrollratio.x:(t.pageY-k.rail.offset().top-k.cursorheight/2)*k.scrollratio.y,k.unsynched("relativexy"),o(0|r)):(o=i?k.doScrollLeftBy:k.doScrollBy,r=i?k.scroll.x:k.scroll.y,s=i?t.pageX-k.railh.offset().left:t.pageY-k.rail.offset().top,n=i?k.view.w:k.view.h,o(r>=s?n:-n)))},k.newscrolly=k.newscrollx=0,k.hasanimationframe="requestAnimationFrame"in l,k.hascancelanimationframe="cancelAnimationFrame"in l,k.hasborderbox=!1,this.init=function(){if(k.saved.css=[],M.isoperamini)return!0;if(M.isandroid&&!("hidden"in a))return!0;T.emulatetouch=T.emulatetouch||T.touchbehavior,k.hasborderbox=l.getComputedStyle&&"border-box"===l.getComputedStyle(a.body)["box-sizing"];var t={"overflow-y":"hidden"};if((M.isie11||M.isie10)&&(t["-ms-overflow-style"]="none"),k.ishwscroll&&(this.doc.css(M.transitionstyle,M.prefixstyle+"transform 0ms ease-out"),M.transitionend&&k.bind(k.doc,M.transitionend,k.onScrollTransitionEnd,!1)),k.zindex="auto",k.ispage||"auto"!=T.zindex?k.zindex=T.zindex:k.zindex=function(){var t=k.win;if("zIndex"in t)return t.zIndex();for(;t.length>0;){if(9==t[0].nodeType)return!1;var e=t.css("zIndex");if(!isNaN(e)&&0!==e)return parseInt(e);t=t.parent()}return!1}()||"auto",!k.ispage&&"auto"!=k.zindex&&k.zindex>r&&(r=k.zindex),k.isie&&0===k.zindex&&"auto"==T.zindex&&(k.zindex="auto"),!k.ispage||!M.isieold){var n=k.docscroll;k.ispage&&(n=k.haswrapper?k.win:k.doc),k.css(n,t),k.ispage&&(M.isie11||M.isie)&&k.css(s("html"),t),!M.isios||k.ispage||k.haswrapper||k.css(S,{"-webkit-overflow-scrolling":"touch"});var u=s(a.createElement("div"));u.css({position:"relative",top:0,float:"right",width:T.cursorwidth,height:0,"background-color":T.cursorcolor,border:T.cursorborder,"background-clip":"padding-box","-webkit-border-radius":T.cursorborderradius,"-moz-border-radius":T.cursorborderradius,"border-radius":T.cursorborderradius}),u.addClass("nicescroll-cursors"),k.cursor=u;var d=s(a.createElement("div"));d.attr("id",k.id),d.addClass("nicescroll-rails nicescroll-rails-vr");var h,p,m=["left","right","top","bottom"];for(var g in m)p=m[g],(h=T.railpadding[p]||0)&&d.css("padding-"+p,h+"px");d.append(u),d.width=Math.max(parseFloat(T.cursorwidth),u.outerWidth()),d.css({width:d.width+"px",zIndex:k.zindex,background:T.background,cursor:"default"}),d.visibility=!0,d.scrollable=!0,d.align="left"==T.railalign?0:1,k.rail=d,k.rail.drag=!1;var v,y=!1;if(!T.boxzoom||k.ispage||M.isieold||(y=a.createElement("div"),k.bind(y,"click",k.doZoom),k.bind(y,"mouseenter",function(){k.zoom.css("opacity",T.cursoropacitymax)}),k.bind(y,"mouseleave",function(){k.zoom.css("opacity",T.cursoropacitymin)}),k.zoom=s(y),k.zoom.css({cursor:"pointer",zIndex:k.zindex,backgroundImage:"url("+T.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0 0"}),T.dblclickzoom&&k.bind(k.win,"dblclick",k.doZoom),M.cantouch&&T.gesturezoom&&(k.ongesturezoom=function(t){return t.scale>1.5&&k.doZoomIn(t),t.scale<.8&&k.doZoomOut(t),k.cancelEvent(t)},k.bind(k.win,"gestureend",k.ongesturezoom))),k.railh=!1,T.horizrailenabled&&(k.css(n,{overflowX:"hidden"}),(u=s(a.createElement("div"))).css({position:"absolute",top:0,height:T.cursorwidth,width:0,backgroundColor:T.cursorcolor,border:T.cursorborder,backgroundClip:"padding-box","-webkit-border-radius":T.cursorborderradius,"-moz-border-radius":T.cursorborderradius,"border-radius":T.cursorborderradius}),M.isieold&&u.css("overflow","hidden"),u.addClass("nicescroll-cursors"),k.cursorh=u,(v=s(a.createElement("div"))).attr("id",k.id+"-hr"),v.addClass("nicescroll-rails nicescroll-rails-hr"),v.height=Math.max(parseFloat(T.cursorwidth),u.outerHeight()),v.css({height:v.height+"px",zIndex:k.zindex,background:T.background}),v.append(u),v.visibility=!0,v.scrollable=!0,v.align="top"==T.railvalign?0:1,k.railh=v,k.railh.drag=!1),k.ispage)d.css({position:"fixed",top:0,height:"100%"}),d.css(d.align?{right:0}:{left:0}),k.body.append(d),k.railh&&(v.css({position:"fixed",left:0,width:"100%"}),v.css(v.align?{bottom:0}:{top:0}),k.body.append(v));else{if(k.ishwscroll){"static"==k.win.css("position")&&k.css(k.win,{position:"relative"});var w="HTML"==k.win[0].nodeName?k.body:k.win;s(w).scrollTop(0).scrollLeft(0),k.zoom&&(k.zoom.css({position:"absolute",top:1,right:0,"margin-right":d.width+4}),w.append(k.zoom)),d.css({position:"absolute",top:0}),d.css(d.align?{right:0}:{left:0}),w.append(d),v&&(v.css({position:"absolute",left:0,bottom:0}),v.css(v.align?{bottom:0}:{top:0}),w.append(v))}else{k.isfixed="fixed"==k.win.css("position");var x=k.isfixed?"fixed":"absolute";k.isfixed||(k.viewport=k.getViewport(k.win[0])),k.viewport&&(k.body=k.viewport,/fixed|absolute/.test(k.viewport.css("position"))||k.css(k.viewport,{position:"relative"})),d.css({position:x}),k.zoom&&k.zoom.css({position:x}),k.updateScrollBar(),k.body.append(d),k.zoom&&k.body.append(k.zoom),k.railh&&(v.css({position:x}),k.body.append(v))}M.isios&&k.css(k.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),T.disableoutline&&(M.isie&&k.win.attr("hideFocus","true"),M.iswebkit&&k.win.css("outline","none"))}if(!1===T.autohidemode?(k.autohidedom=!1,k.rail.css({opacity:T.cursoropacitymax}),k.railh&&k.railh.css({opacity:T.cursoropacitymax})):!0===T.autohidemode||"leave"===T.autohidemode?(k.autohidedom=s().add(k.rail),M.isie8&&(k.autohidedom=k.autohidedom.add(k.cursor)),k.railh&&(k.autohidedom=k.autohidedom.add(k.railh)),k.railh&&M.isie8&&(k.autohidedom=k.autohidedom.add(k.cursorh))):"scroll"==T.autohidemode?(k.autohidedom=s().add(k.rail),k.railh&&(k.autohidedom=k.autohidedom.add(k.railh))):"cursor"==T.autohidemode?(k.autohidedom=s().add(k.cursor),k.railh&&(k.autohidedom=k.autohidedom.add(k.cursorh))):"hidden"==T.autohidemode&&(k.autohidedom=!1,k.hide(),k.railslocked=!1),M.cantouch||k.istouchcapable||T.emulatetouch||M.hasmstouch){k.scrollmom=new b(k),k.ontouchstart=function(t){if(k.locked)return!1;if(t.pointerType&&("mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))return!1;if(k.hasmoving=!1,k.scrollmom.timer&&(k.triggerScrollEnd(),k.scrollmom.stop()),!k.railslocked){var e=k.getTarget(t);if(e&&/INPUT/i.test(e.nodeName)&&/range/i.test(e.type))return k.stopPropagation(t);var i="mousedown"===t.type;if(!("clientX"in t)&&"changedTouches"in t&&(t.clientX=t.changedTouches[0].clientX,t.clientY=t.changedTouches[0].clientY),k.forcescreen){var o=t;(t={original:t.original?t.original:t}).clientX=o.screenX,t.clientY=o.screenY}if(k.rail.drag={x:t.clientX,y:t.clientY,sx:k.scroll.x,sy:k.scroll.y,st:k.getScrollTop(),sl:k.getScrollLeft(),pt:2,dl:!1,tg:e},k.ispage||!T.directionlockdeadzone)k.rail.drag.dl="f";else{var n={w:c.width(),h:c.height()},r=k.getContentSize(),a=r.h-n.h,l=r.w-n.w;k.rail.scrollable&&!k.railh.scrollable?k.rail.drag.ck=a>0&&"v":!k.rail.scrollable&&k.railh.scrollable?k.rail.drag.ck=l>0&&"h":k.rail.drag.ck=!1}if(T.emulatetouch&&k.isiframe&&M.isie){var u=k.win.position();k.rail.drag.x+=u.left,k.rail.drag.y+=u.top}if(k.hasmoving=!1,k.lastmouseup=!1,k.scrollmom.reset(t.clientX,t.clientY),e&&i){if(!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(e.nodeName))return M.hasmousecapture&&e.setCapture(),T.emulatetouch?(e.onclick&&!e._onclick&&(e._onclick=e.onclick,e.onclick=function(t){if(k.hasmoving)return!1;e._onclick.call(this,t)}),k.cancelEvent(t)):k.stopPropagation(t);/SUBMIT|CANCEL|BUTTON/i.test(s(e).attr("type"))&&(k.preventclick={tg:e,click:!1})}}},k.ontouchend=function(t){if(!k.rail.drag)return!0;if(2==k.rail.drag.pt){if(t.pointerType&&("mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))return!1;k.rail.drag=!1;var e="mouseup"===t.type;if(k.hasmoving&&(k.scrollmom.doMomentum(),k.lastmouseup=!0,k.hideCursor(),M.hasmousecapture&&a.releaseCapture(),e))return k.cancelEvent(t)}else if(1==k.rail.drag.pt)return k.onmouseup(t)};var _=T.emulatetouch&&k.isiframe&&!M.hasmousecapture,C=.3*T.directionlockdeadzone|0;k.ontouchmove=function(t,e){if(!k.rail.drag)return!0;if(t.targetTouches&&T.preventmultitouchscrolling&&t.targetTouches.length>1)return!0;if(t.pointerType&&("mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))return!0;if(2==k.rail.drag.pt){var i,o;if("changedTouches"in t&&(t.clientX=t.changedTouches[0].clientX,t.clientY=t.changedTouches[0].clientY),o=i=0,_&&!e){var n=k.win.position();o=-n.left,i=-n.top}var r=t.clientY+i,s=r-k.rail.drag.y,l=t.clientX+o,c=l-k.rail.drag.x,u=k.rail.drag.st-s;if(k.ishwscroll&&T.bouncescroll)u<0?u=Math.round(u/2):u>k.page.maxh&&(u=k.page.maxh+Math.round((u-k.page.maxh)/2));else if(u<0?(u=0,r=0):u>k.page.maxh&&(u=k.page.maxh,r=0),0===r&&!k.hasmoving)return k.ispage||(k.rail.drag=!1),!0;var d=k.getScrollLeft();if(k.railh&&k.railh.scrollable&&(d=k.isrtlmode?c-k.rail.drag.sl:k.rail.drag.sl-c,k.ishwscroll&&T.bouncescroll?d<0?d=Math.round(d/2):d>k.page.maxw&&(d=k.page.maxw+Math.round((d-k.page.maxw)/2)):(d<0&&(d=0,l=0),d>k.page.maxw&&(d=k.page.maxw,l=0))),!k.hasmoving){if(k.rail.drag.y===t.clientY&&k.rail.drag.x===t.clientX)return k.cancelEvent(t);var h=Math.abs(s),p=Math.abs(c),f=T.directionlockdeadzone;if(k.rail.drag.ck?"v"==k.rail.drag.ck?p>f&&h<=C?k.rail.drag=!1:h>f&&(k.rail.drag.dl="v"):"h"==k.rail.drag.ck&&(h>f&&p<=C?k.rail.drag=!1:p>f&&(k.rail.drag.dl="h")):h>f&&p>f?k.rail.drag.dl="f":h>f?k.rail.drag.dl=p>C?"f":"v":p>f&&(k.rail.drag.dl=h>C?"f":"h"),!k.rail.drag.dl)return k.cancelEvent(t);k.triggerScrollStart(t.clientX,t.clientY,0,0,0),k.hasmoving=!0}return k.preventclick&&!k.preventclick.click&&(k.preventclick.click=k.preventclick.tg.onclick||!1,k.preventclick.tg.onclick=k.onpreventclick),k.rail.drag.dl&&("v"==k.rail.drag.dl?d=k.rail.drag.sl:"h"==k.rail.drag.dl&&(u=k.rail.drag.st)),k.synched("touchmove",function(){k.rail.drag&&2==k.rail.drag.pt&&(k.prepareTransition&&k.resetTransition(),k.rail.scrollable&&k.setScrollTop(u),k.scrollmom.update(l,r),k.railh&&k.railh.scrollable?(k.setScrollLeft(d),k.showCursor(u,d)):k.showCursor(u),M.isie10&&a.selection.clear())}),k.cancelEvent(t)}return 1==k.rail.drag.pt?k.onmousemove(t):void 0},k.ontouchstartCursor=function(t,e){if(!k.rail.drag||3==k.rail.drag.pt){if(k.locked)return k.cancelEvent(t);k.cancelScroll(),k.rail.drag={x:t.touches[0].clientX,y:t.touches[0].clientY,sx:k.scroll.x,sy:k.scroll.y,pt:3,hr:!!e};var i=k.getTarget(t);return!k.ispage&&M.hasmousecapture&&i.setCapture(),k.isiframe&&!M.hasmousecapture&&(k.saved.csspointerevents=k.doc.css("pointer-events"),k.css(k.doc,{"pointer-events":"none"})),k.cancelEvent(t)}},k.ontouchendCursor=function(t){if(k.rail.drag){if(M.hasmousecapture&&a.releaseCapture(),k.isiframe&&!M.hasmousecapture&&k.doc.css("pointer-events",k.saved.csspointerevents),3!=k.rail.drag.pt)return;return k.rail.drag=!1,k.cancelEvent(t)}},k.ontouchmoveCursor=function(t){if(k.rail.drag){if(3!=k.rail.drag.pt)return;if(k.cursorfreezed=!0,k.rail.drag.hr){k.scroll.x=k.rail.drag.sx+(t.touches[0].clientX-k.rail.drag.x),k.scroll.x<0&&(k.scroll.x=0);var e=k.scrollvaluemaxw;k.scroll.x>e&&(k.scroll.x=e)}else{k.scroll.y=k.rail.drag.sy+(t.touches[0].clientY-k.rail.drag.y),k.scroll.y<0&&(k.scroll.y=0);var i=k.scrollvaluemax;k.scroll.y>i&&(k.scroll.y=i)}return k.synched("touchmove",function(){k.rail.drag&&3==k.rail.drag.pt&&(k.showCursor(),k.rail.drag.hr?k.doScrollLeft(Math.round(k.scroll.x*k.scrollratio.x),T.cursordragspeed):k.doScrollTop(Math.round(k.scroll.y*k.scrollratio.y),T.cursordragspeed))}),k.cancelEvent(t)}}}if(k.onmousedown=function(t,e){if(!k.rail.drag||1==k.rail.drag.pt){if(k.railslocked)return k.cancelEvent(t);k.cancelScroll(),k.rail.drag={x:t.clientX,y:t.clientY,sx:k.scroll.x,sy:k.scroll.y,pt:1,hr:e||!1};var i=k.getTarget(t);return M.hasmousecapture&&i.setCapture(),k.isiframe&&!M.hasmousecapture&&(k.saved.csspointerevents=k.doc.css("pointer-events"),k.css(k.doc,{"pointer-events":"none"})),k.hasmoving=!1,k.cancelEvent(t)}},k.onmouseup=function(t){if(k.rail.drag)return 1!=k.rail.drag.pt||(M.hasmousecapture&&a.releaseCapture(),k.isiframe&&!M.hasmousecapture&&k.doc.css("pointer-events",k.saved.csspointerevents),k.rail.drag=!1,k.cursorfreezed=!1,k.hasmoving&&k.triggerScrollEnd(),k.cancelEvent(t))},k.onmousemove=function(t){if(k.rail.drag){if(1!==k.rail.drag.pt)return;if(M.ischrome&&0===t.which)return k.onmouseup(t);if(k.cursorfreezed=!0,k.hasmoving||k.triggerScrollStart(t.clientX,t.clientY,0,0,0),k.hasmoving=!0,k.rail.drag.hr){k.scroll.x=k.rail.drag.sx+(t.clientX-k.rail.drag.x),k.scroll.x<0&&(k.scroll.x=0);var e=k.scrollvaluemaxw;k.scroll.x>e&&(k.scroll.x=e)}else{k.scroll.y=k.rail.drag.sy+(t.clientY-k.rail.drag.y),k.scroll.y<0&&(k.scroll.y=0);var i=k.scrollvaluemax;k.scroll.y>i&&(k.scroll.y=i)}return k.synched("mousemove",function(){k.cursorfreezed&&(k.showCursor(),k.rail.drag.hr?k.scrollLeft(Math.round(k.scroll.x*k.scrollratio.x)):k.scrollTop(Math.round(k.scroll.y*k.scrollratio.y)))}),k.cancelEvent(t)}k.checkarea=0},M.cantouch||T.emulatetouch)k.onpreventclick=function(t){if(k.preventclick)return k.preventclick.tg.onclick=k.preventclick.click,k.preventclick=!1,k.cancelEvent(t)},k.onclick=!M.isios&&function(t){return!k.lastmouseup||(k.lastmouseup=!1,k.cancelEvent(t))},T.grabcursorenabled&&M.cursorgrabvalue&&(k.css(k.ispage?k.doc:k.win,{cursor:M.cursorgrabvalue}),k.css(k.rail,{cursor:M.cursorgrabvalue}));else{var z=function(t){if(k.selectiondrag){if(t){var e=k.win.outerHeight(),i=t.pageY-k.selectiondrag.top;i>0&&i<e&&(i=0),i>=e&&(i-=e),k.selectiondrag.df=i}if(0!==k.selectiondrag.df){var o=-2*k.selectiondrag.df/6|0;k.doScrollBy(o),k.debounced("doselectionscroll",function(){z()},50)}}};k.hasTextSelected="getSelection"in a?function(){return a.getSelection().rangeCount>0}:"selection"in a?function(){return"None"!=a.selection.type}:function(){return!1},k.onselectionstart=function(t){k.ispage||(k.selectiondrag=k.win.offset())},k.onselectionend=function(t){k.selectiondrag=!1},k.onselectiondrag=function(t){k.selectiondrag&&k.hasTextSelected()&&k.debounced("selectionscroll",function(){z(t)},250)}}if(M.hasw3ctouch?(k.css(k.ispage?s("html"):k.win,{"touch-action":"none"}),k.css(k.rail,{"touch-action":"none"}),k.css(k.cursor,{"touch-action":"none"}),k.bind(k.win,"pointerdown",k.ontouchstart),k.bind(a,"pointerup",k.ontouchend),k.delegate(a,"pointermove",k.ontouchmove)):M.hasmstouch?(k.css(k.ispage?s("html"):k.win,{"-ms-touch-action":"none"}),k.css(k.rail,{"-ms-touch-action":"none"}),k.css(k.cursor,{"-ms-touch-action":"none"}),k.bind(k.win,"MSPointerDown",k.ontouchstart),k.bind(a,"MSPointerUp",k.ontouchend),k.delegate(a,"MSPointerMove",k.ontouchmove),k.bind(k.cursor,"MSGestureHold",function(t){t.preventDefault()}),k.bind(k.cursor,"contextmenu",function(t){t.preventDefault()})):M.cantouch&&(k.bind(k.win,"touchstart",k.ontouchstart,!1,!0),k.bind(a,"touchend",k.ontouchend,!1,!0),k.bind(a,"touchcancel",k.ontouchend,!1,!0),k.delegate(a,"touchmove",k.ontouchmove,!1,!0)),T.emulatetouch&&(k.bind(k.win,"mousedown",k.ontouchstart,!1,!0),k.bind(a,"mouseup",k.ontouchend,!1,!0),k.bind(a,"mousemove",k.ontouchmove,!1,!0)),(T.cursordragontouch||!M.cantouch&&!T.emulatetouch)&&(k.rail.css({cursor:"default"}),k.railh&&k.railh.css({cursor:"default"}),k.jqbind(k.rail,"mouseenter",function(){if(!k.ispage&&!k.win.is(":visible"))return!1;k.canshowonmouseevent&&k.showCursor(),k.rail.active=!0}),k.jqbind(k.rail,"mouseleave",function(){k.rail.active=!1,k.rail.drag||k.hideCursor()}),T.sensitiverail&&(k.bind(k.rail,"click",function(t){k.doRailClick(t,!1,!1)}),k.bind(k.rail,"dblclick",function(t){k.doRailClick(t,!0,!1)}),k.bind(k.cursor,"click",function(t){k.cancelEvent(t)}),k.bind(k.cursor,"dblclick",function(t){k.cancelEvent(t)})),k.railh&&(k.jqbind(k.railh,"mouseenter",function(){if(!k.ispage&&!k.win.is(":visible"))return!1;k.canshowonmouseevent&&k.showCursor(),k.rail.active=!0}),k.jqbind(k.railh,"mouseleave",function(){k.rail.active=!1,k.rail.drag||k.hideCursor()}),T.sensitiverail&&(k.bind(k.railh,"click",function(t){k.doRailClick(t,!1,!0)}),k.bind(k.railh,"dblclick",function(t){k.doRailClick(t,!0,!0)}),k.bind(k.cursorh,"click",function(t){k.cancelEvent(t)}),k.bind(k.cursorh,"dblclick",function(t){k.cancelEvent(t)})))),T.cursordragontouch&&(this.istouchcapable||M.cantouch)&&(k.bind(k.cursor,"touchstart",k.ontouchstartCursor),k.bind(k.cursor,"touchmove",k.ontouchmoveCursor),k.bind(k.cursor,"touchend",k.ontouchendCursor),k.cursorh&&k.bind(k.cursorh,"touchstart",function(t){k.ontouchstartCursor(t,!0)}),k.cursorh&&k.bind(k.cursorh,"touchmove",k.ontouchmoveCursor),k.cursorh&&k.bind(k.cursorh,"touchend",k.ontouchendCursor)),T.emulatetouch||M.isandroid||M.isios?(k.bind(M.hasmousecapture?k.win:a,"mouseup",k.ontouchend),k.onclick&&k.bind(a,"click",k.onclick),T.cursordragontouch?(k.bind(k.cursor,"mousedown",k.onmousedown),k.bind(k.cursor,"mouseup",k.onmouseup),k.cursorh&&k.bind(k.cursorh,"mousedown",function(t){k.onmousedown(t,!0)}),k.cursorh&&k.bind(k.cursorh,"mouseup",k.onmouseup)):(k.bind(k.rail,"mousedown",function(t){t.preventDefault()}),k.railh&&k.bind(k.railh,"mousedown",function(t){t.preventDefault()}))):(k.bind(M.hasmousecapture?k.win:a,"mouseup",k.onmouseup),k.bind(a,"mousemove",k.onmousemove),k.onclick&&k.bind(a,"click",k.onclick),k.bind(k.cursor,"mousedown",k.onmousedown),k.bind(k.cursor,"mouseup",k.onmouseup),k.railh&&(k.bind(k.cursorh,"mousedown",function(t){k.onmousedown(t,!0)}),k.bind(k.cursorh,"mouseup",k.onmouseup)),!k.ispage&&T.enablescrollonselection&&(k.bind(k.win[0],"mousedown",k.onselectionstart),k.bind(a,"mouseup",k.onselectionend),k.bind(k.cursor,"mouseup",k.onselectionend),k.cursorh&&k.bind(k.cursorh,"mouseup",k.onselectionend),k.bind(a,"mousemove",k.onselectiondrag)),k.zoom&&(k.jqbind(k.zoom,"mouseenter",function(){k.canshowonmouseevent&&k.showCursor(),k.rail.active=!0}),k.jqbind(k.zoom,"mouseleave",function(){k.rail.active=!1,k.rail.drag||k.hideCursor()}))),T.enablemousewheel&&(k.isiframe||k.mousewheel(M.isie&&k.ispage?a:k.win,k.onmousewheel),k.mousewheel(k.rail,k.onmousewheel),k.railh&&k.mousewheel(k.railh,k.onmousewheelhr)),k.ispage||M.cantouch||/HTML|^BODY/.test(k.win[0].nodeName)||(k.win.attr("tabindex")||k.win.attr({tabindex:++o}),k.bind(k.win,"focus",function(t){e=k.getTarget(t).id||k.getTarget(t)||!1,k.hasfocus=!0,k.canshowonmouseevent&&k.noticeCursor()}),k.bind(k.win,"blur",function(t){e=!1,k.hasfocus=!1}),k.bind(k.win,"mouseenter",function(t){i=k.getTarget(t).id||k.getTarget(t)||!1,k.hasmousefocus=!0,k.canshowonmouseevent&&k.noticeCursor()}),k.bind(k.win,"mouseleave",function(t){i=!1,k.hasmousefocus=!1,k.rail.drag||k.hideCursor()})),k.onkeypress=function(t){if(k.railslocked&&0===k.page.maxh)return!0;t=t||l.event;var o=k.getTarget(t);if(o&&/INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)&&(!o.getAttribute("type")&&!o.type||!/submit|button|cancel/i.tp))return!0;if(s(o).attr("contenteditable"))return!0;if(k.hasfocus||k.hasmousefocus&&!e||k.ispage&&!e&&!i){var n=t.keyCode;if(k.railslocked&&27!=n)return k.cancelEvent(t);var r=t.ctrlKey||!1,a=t.shiftKey||!1,c=!1;switch(n){case 38:case 63233:k.doScrollBy(72),c=!0;break;case 40:case 63235:k.doScrollBy(-72),c=!0;break;case 37:case 63232:k.railh&&(r?k.doScrollLeft(0):k.doScrollLeftBy(72),c=!0);break;case 39:case 63234:k.railh&&(r?k.doScrollLeft(k.page.maxw):k.doScrollLeftBy(-72),c=!0);break;case 33:case 63276:k.doScrollBy(k.view.h),c=!0;break;case 34:case 63277:k.doScrollBy(-k.view.h),c=!0;break;case 36:case 63273:k.railh&&r?k.doScrollPos(0,0):k.doScrollTo(0),c=!0;break;case 35:case 63275:k.railh&&r?k.doScrollPos(k.page.maxw,k.page.maxh):k.doScrollTo(k.page.maxh),c=!0;break;case 32:T.spacebarenabled&&(a?k.doScrollBy(k.view.h):k.doScrollBy(-k.view.h),c=!0);break;case 27:k.zoomactive&&(k.doZoom(),c=!0)}if(c)return k.cancelEvent(t)}},T.enablekeyboard&&k.bind(a,M.isopera&&!M.isopera12?"keypress":"keydown",k.onkeypress),k.bind(a,"keydown",function(t){t.ctrlKey&&(k.wheelprevented=!0)}),k.bind(a,"keyup",function(t){t.ctrlKey||(k.wheelprevented=!1)}),k.bind(l,"blur",function(t){k.wheelprevented=!1}),k.bind(l,"resize",k.onscreenresize),k.bind(l,"orientationchange",k.onscreenresize),k.bind(l,"load",k.lazyResize),M.ischrome&&!k.ispage&&!k.haswrapper){var E=k.win.attr("style"),I=parseFloat(k.win.css("width"))+1;k.win.css("width",I),k.synched("chromefix",function(){k.win.attr("style",E)})}if(k.onAttributeChange=function(t){k.lazyResize(k.isieold?250:30)},T.enableobserver&&(k.isie11||!1===f||(k.observerbody=new f(function(t){if(t.forEach(function(t){if("attributes"==t.type)return S.hasClass("modal-open")&&S.hasClass("modal-dialog")&&!s.contains(s(".modal-dialog")[0],k.doc[0])?k.hide():k.show()}),k.me.clientWidth!=k.page.width||k.me.clientHeight!=k.page.height)return k.lazyResize(30)}),k.observerbody.observe(a.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]})),!k.ispage&&!k.haswrapper)){var P=k.win[0];!1!==f?(k.observer=new f(function(t){t.forEach(k.onAttributeChange)}),k.observer.observe(P,{childList:!0,characterData:!1,attributes:!0,subtree:!1}),k.observerremover=new f(function(t){t.forEach(function(t){if(t.removedNodes.length>0)for(var e in t.removedNodes)if(k&&t.removedNodes[e]===P)return k.remove()})}),k.observerremover.observe(P.parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(k.bind(P,M.isie&&!M.isie9?"propertychange":"DOMAttrModified",k.onAttributeChange),M.isie9&&P.attachEvent("onpropertychange",k.onAttributeChange),k.bind(P,"DOMNodeRemoved",function(t){t.target===P&&k.remove()}))}!k.ispage&&T.boxzoom&&k.bind(l,"resize",k.resizeZoom),k.istextarea&&(k.bind(k.win,"keydown",k.lazyResize),k.bind(k.win,"mouseup",k.lazyResize)),k.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var O=function(){var e;k.iframexd=!1;try{(e="contentDocument"in this?this.contentDocument:this.contentWindow._doc).domain}catch(t){k.iframexd=!0,e=!1}if(k.iframexd)return"console"in l&&console.log("NiceScroll error: policy restriced iframe"),!0;if(k.forcescreen=!0,k.isiframe&&(k.iframe={doc:s(e),html:k.doc.contents().find("html")[0],body:k.doc.contents().find("body")[0]},k.getContentSize=function(){return{w:Math.max(k.iframe.html.scrollWidth,k.iframe.body.scrollWidth),h:Math.max(k.iframe.html.scrollHeight,k.iframe.body.scrollHeight)}},k.docscroll=s(k.iframe.body)),!M.isios&&T.iframeautoresize&&!k.isiframe){k.win.scrollTop(0),k.doc.height("");var i=Math.max(e.getElementsByTagName("html")[0].scrollHeight,e.body.scrollHeight);k.doc.height(i)}k.lazyResize(30),k.css(s(k.iframe.body),t),M.isios&&k.haswrapper&&k.css(s(e.body),{"-webkit-transform":"translate3d(0,0,0)"}),"contentWindow"in this?k.bind(this.contentWindow,"scroll",k.onscroll):k.bind(e,"scroll",k.onscroll),T.enablemousewheel&&k.mousewheel(e,k.onmousewheel),T.enablekeyboard&&k.bind(e,M.isopera?"keypress":"keydown",k.onkeypress),M.cantouch?(k.bind(e,"touchstart",k.ontouchstart),k.bind(e,"touchmove",k.ontouchmove)):T.emulatetouch&&(k.bind(e,"mousedown",k.ontouchstart),k.bind(e,"mousemove",function(t){return k.ontouchmove(t,!0)}),T.grabcursorenabled&&M.cursorgrabvalue&&k.css(s(e.body),{cursor:M.cursorgrabvalue})),k.bind(e,"mouseup",k.ontouchend),k.zoom&&(T.dblclickzoom&&k.bind(e,"dblclick",k.doZoom),k.ongesturezoom&&k.bind(e,"gestureend",k.ongesturezoom))};this.doc[0].readyState&&"complete"===this.doc[0].readyState&&setTimeout(function(){O.call(k.doc[0],!1)},500),k.bind(this.doc,"load",O)}},this.showCursor=function(t,e){if(k.cursortimeout&&(clearTimeout(k.cursortimeout),k.cursortimeout=0),k.rail){if(k.autohidedom&&(k.autohidedom.stop().css({opacity:T.cursoropacitymax}),k.cursoractive=!0),k.rail.drag&&1==k.rail.drag.pt||(void 0!==t&&!1!==t&&(k.scroll.y=t/k.scrollratio.y|0),void 0!==e&&(k.scroll.x=e/k.scrollratio.x|0)),k.cursor.css({height:k.cursorheight,top:k.scroll.y}),k.cursorh){var i=k.hasreversehr?k.scrollvaluemaxw-k.scroll.x:k.scroll.x;k.cursorh.css({width:k.cursorwidth,left:!k.rail.align&&k.rail.visibility?i+k.rail.width:i}),k.cursoractive=!0}k.zoom&&k.zoom.stop().css({opacity:T.cursoropacitymax})}},this.hideCursor=function(t){k.cursortimeout||k.rail&&k.autohidedom&&(k.hasmousefocus&&"leave"===T.autohidemode||(k.cursortimeout=setTimeout(function(){k.rail.active&&k.showonmouseevent||(k.autohidedom.stop().animate({opacity:T.cursoropacitymin}),k.zoom&&k.zoom.stop().animate({opacity:T.cursoropacitymin}),k.cursoractive=!1),k.cursortimeout=0},t||T.hidecursordelay)))},this.noticeCursor=function(t,e,i){k.showCursor(e,i),k.rail.active||k.hideCursor(t)},this.getContentSize=k.ispage?function(){return{w:Math.max(a.body.scrollWidth,a.documentElement.scrollWidth),h:Math.max(a.body.scrollHeight,a.documentElement.scrollHeight)}}:k.haswrapper?function(){return{w:k.doc[0].offsetWidth,h:k.doc[0].offsetHeight}}:function(){return{w:k.docscroll[0].scrollWidth,h:k.docscroll[0].scrollHeight}},this.onResize=function(t,e){if(!k||!k.win)return!1;var i=k.page.maxh,o=k.page.maxw,n=k.view.h,r=k.view.w;if(k.view={w:k.ispage?k.win.width():k.win[0].clientWidth,h:k.ispage?k.win.height():k.win[0].clientHeight},k.page=e||k.getContentSize(),k.page.maxh=Math.max(0,k.page.h-k.view.h),k.page.maxw=Math.max(0,k.page.w-k.view.w),k.page.maxh==i&&k.page.maxw==o&&k.view.w==r&&k.view.h==n){if(k.ispage)return k;var s=k.win.offset();if(k.lastposition){var a=k.lastposition;if(a.top==s.top&&a.left==s.left)return k}k.lastposition=s}return 0===k.page.maxh?(k.hideRail(),k.scrollvaluemax=0,k.scroll.y=0,k.scrollratio.y=0,k.cursorheight=0,k.setScrollTop(0),k.rail&&(k.rail.scrollable=!1)):(k.page.maxh-=T.railpadding.top+T.railpadding.bottom,k.rail.scrollable=!0),0===k.page.maxw?(k.hideRailHr(),k.scrollvaluemaxw=0,k.scroll.x=0,k.scrollratio.x=0,k.cursorwidth=0,k.setScrollLeft(0),k.railh&&(k.railh.scrollable=!1)):(k.page.maxw-=T.railpadding.left+T.railpadding.right,k.railh&&(k.railh.scrollable=T.horizrailenabled)),k.railslocked=k.locked||0===k.page.maxh&&0===k.page.maxw,k.railslocked?(k.ispage||k.updateScrollBar(k.view),!1):(k.hidden||(k.rail.visibility||k.showRail(),k.railh&&!k.railh.visibility&&k.showRailHr()),k.istextarea&&k.win.css("resize")&&"none"!=k.win.css("resize")&&(k.view.h-=20),k.cursorheight=Math.min(k.view.h,Math.round(k.view.h*(k.view.h/k.page.h))),k.cursorheight=T.cursorfixedheight?T.cursorfixedheight:Math.max(T.cursorminheight,k.cursorheight),k.cursorwidth=Math.min(k.view.w,Math.round(k.view.w*(k.view.w/k.page.w))),k.cursorwidth=T.cursorfixedheight?T.cursorfixedheight:Math.max(T.cursorminheight,k.cursorwidth),k.scrollvaluemax=k.view.h-k.cursorheight-(T.railpadding.top+T.railpadding.bottom),k.hasborderbox||(k.scrollvaluemax-=k.cursor[0].offsetHeight-k.cursor[0].clientHeight),k.railh&&(k.railh.width=k.page.maxh>0?k.view.w-k.rail.width:k.view.w,k.scrollvaluemaxw=k.railh.width-k.cursorwidth-(T.railpadding.left+T.railpadding.right)),k.ispage||k.updateScrollBar(k.view),k.scrollratio={x:k.page.maxw/k.scrollvaluemaxw,y:k.page.maxh/k.scrollvaluemax},k.getScrollTop()>k.page.maxh?k.doScrollTop(k.page.maxh):(k.scroll.y=k.getScrollTop()/k.scrollratio.y|0,k.scroll.x=k.getScrollLeft()/k.scrollratio.x|0,k.cursoractive&&k.noticeCursor()),k.scroll.y&&0===k.getScrollTop()&&k.doScrollTo(k.scroll.y*k.scrollratio.y|0),k)},this.resize=k.onResize;var H=0;this.onscreenresize=function(t){clearTimeout(H);var e=!k.ispage&&!k.haswrapper;e&&k.hideRails(),H=setTimeout(function(){k&&(e&&k.showRails(),k.resize()),H=0},120)},this.lazyResize=function(t){return clearTimeout(H),t=isNaN(t)?240:t,H=setTimeout(function(){k&&k.resize(),H=0},t),k},this.jqbind=function(t,e,i){k.events.push({e:t,n:e,f:i,q:!0}),s(t).on(e,i)},this.mousewheel=function(t,e,i){var o="jquery"in t?t[0]:t;if("onwheel"in a.createElement("div"))k._bind(o,"wheel",e,i||!1);else{var n=void 0!==a.onmousewheel?"mousewheel":"DOMMouseScroll";x(o,n,e,i||!1),"DOMMouseScroll"==n&&x(o,"MozMousePixelScroll",e,i||!1)}};var N=!1;if(M.haseventlistener){try{var A=Object.defineProperty({},"passive",{get:function(){N=!0}});l.addEventListener("test",null,A)}catch(t){}this.stopPropagation=function(t){return!!t&&((t=t.original?t.original:t).stopPropagation(),!1)},this.cancelEvent=function(t){return t.cancelable&&t.preventDefault(),t.stopImmediatePropagation(),t.preventManipulation&&t.preventManipulation(),!1}}else Event.prototype.preventDefault=function(){this.returnValue=!1},Event.prototype.stopPropagation=function(){this.cancelBubble=!0},l.constructor.prototype.addEventListener=a.constructor.prototype.addEventListener=Element.prototype.addEventListener=function(t,e,i){this.attachEvent("on"+t,e)},l.constructor.prototype.removeEventListener=a.constructor.prototype.removeEventListener=Element.prototype.removeEventListener=function(t,e,i){this.detachEvent("on"+t,e)},this.cancelEvent=function(t){return(t=t||l.event)&&(t.cancelBubble=!0,t.cancel=!0,t.returnValue=!1),!1},this.stopPropagation=function(t){return(t=t||l.event)&&(t.cancelBubble=!0),!1};this.delegate=function(t,e,i,o,n){var r=u[e]||!1;r||(r={a:[],l:[],f:function(t){for(var e=r.l,i=!1,o=e.length-1;o>=0;o--)if(!1===(i=e[o].call(t.target,t)))return!1;return i}},k.bind(t,e,r.f,o,n),u[e]=r),k.ispage?(r.a=[k.id].concat(r.a),r.l=[i].concat(r.l)):(r.a.push(k.id),r.l.push(i))},this.undelegate=function(t,e,i,o,n){var r=u[e]||!1;if(r&&r.l)for(var s=0,a=r.l.length;s<a;s++)r.a[s]===k.id&&(r.a.splice(s),r.l.splice(s),0===r.a.length&&(k._unbind(t,e,r.l.f),u[e]=null))},this.bind=function(t,e,i,o,n){var r="jquery"in t?t[0]:t;k._bind(r,e,i,o||!1,n||!1)},this._bind=function(t,e,i,o,n){k.events.push({e:t,n:e,f:i,b:o,q:!1}),N&&n?t.addEventListener(e,i,{passive:!1,capture:o}):t.addEventListener(e,i,o||!1)},this._unbind=function(t,e,i,o){u[e]?k.undelegate(t,e,i,o):t.removeEventListener(e,i,o)},this.unbindAll=function(){for(var t=0;t<k.events.length;t++){var e=k.events[t];e.q?e.e.unbind(e.n,e.f):k._unbind(e.e,e.n,e.f,e.b)}},this.showRails=function(){return k.showRail().showRailHr()},this.showRail=function(){return 0===k.page.maxh||!k.ispage&&"none"==k.win.css("display")||(k.rail.visibility=!0,k.rail.css("display","block")),k},this.showRailHr=function(){return k.railh&&(0===k.page.maxw||!k.ispage&&"none"==k.win.css("display")||(k.railh.visibility=!0,k.railh.css("display","block"))),k},this.hideRails=function(){return k.hideRail().hideRailHr()},this.hideRail=function(){return k.rail.visibility=!1,k.rail.css("display","none"),k},this.hideRailHr=function(){return k.railh&&(k.railh.visibility=!1,k.railh.css("display","none")),k},this.show=function(){return k.hidden=!1,k.railslocked=!1,k.showRails()},this.hide=function(){return k.hidden=!0,k.railslocked=!0,k.hideRails()},this.toggle=function(){return k.hidden?k.show():k.hide()},this.remove=function(){for(var t in k.stop(),k.cursortimeout&&clearTimeout(k.cursortimeout),k.delaylist)k.delaylist[t]&&h(k.delaylist[t].h);k.doZoomOut(),k.unbindAll(),M.isie9&&k.win[0].detachEvent("onpropertychange",k.onAttributeChange),!1!==k.observer&&k.observer.disconnect(),!1!==k.observerremover&&k.observerremover.disconnect(),!1!==k.observerbody&&k.observerbody.disconnect(),k.events=null,k.cursor&&k.cursor.remove(),k.cursorh&&k.cursorh.remove(),k.rail&&k.rail.remove(),k.railh&&k.railh.remove(),k.zoom&&k.zoom.remove();for(var e=0;e<k.saved.css.length;e++){var i=k.saved.css[e];i[0].css(i[1],void 0===i[2]?"":i[2])}k.saved=!1,k.me.data("__nicescroll","");var o=s.nicescroll;for(var n in o.each(function(t){if(this&&this.id===k.id){delete o[t];for(var e=++t;e<o.length;e++,t++)o[t]=o[e];--o.length&&delete o[o.length]}}),k)k[n]=null,delete k[n];k=null},this.scrollstart=function(t){return this.onscrollstart=t,k},this.scrollend=function(t){return this.onscrollend=t,k},this.scrollcancel=function(t){return this.onscrollcancel=t,k},this.zoomin=function(t){return this.onzoomin=t,k},this.zoomout=function(t){return this.onzoomout=t,k},this.isScrollable=function(t){var e=t.target?t.target:t;if("OPTION"==e.nodeName)return!0;for(;e&&1==e.nodeType&&e!==this.me[0]&&!/^BODY|HTML/.test(e.nodeName);){var i=s(e),o=i.css("overflowY")||i.css("overflowX")||i.css("overflow")||"";if(/scroll|auto/.test(o))return e.clientHeight!=e.scrollHeight;e=!!e.parentNode&&e.parentNode}return!1},this.getViewport=function(t){for(var e=!(!t||!t.parentNode)&&t.parentNode;e&&1==e.nodeType&&!/^BODY|HTML/.test(e.nodeName);){var i=s(e);if(/fixed|absolute/.test(i.css("position")))return i;var o=i.css("overflowY")||i.css("overflowX")||i.css("overflow")||"";if(/scroll|auto/.test(o)&&e.clientHeight!=e.scrollHeight)return i;if(i.getNiceScroll().length>0)return i;e=!!e.parentNode&&e.parentNode}return!1},this.triggerScrollStart=function(t,e,i,o,n){if(k.onscrollstart){var r={type:"scrollstart",current:{x:t,y:e},request:{x:i,y:o},end:{x:k.newscrollx,y:k.newscrolly},speed:n};k.onscrollstart.call(k,r)}},this.triggerScrollEnd=function(){if(k.onscrollend){var t=k.getScrollLeft(),e=k.getScrollTop(),i={type:"scrollend",current:{x:t,y:e},end:{x:t,y:e}};k.onscrollend.call(k,i)}};var B=0,$=0,j=0,W=1,D=!1;if(this.onmousewheel=function(t){if(k.wheelprevented||k.locked)return!1;if(k.railslocked)return k.debounced("checkunlock",k.resize,250),!1;if(k.rail.drag)return k.cancelEvent(t);if("auto"===T.oneaxismousemode&&0!==t.deltaX&&(T.oneaxismousemode=!1),T.oneaxismousemode&&0===t.deltaX&&!k.rail.scrollable)return!k.railh||!k.railh.scrollable||k.onmousewheelhr(t);var e=m(),i=!1;if(T.preservenativescrolling&&k.checkarea+600<e&&(k.nativescrollingarea=k.isScrollable(t),i=!0),k.checkarea=e,k.nativescrollingarea)return!0;var o=C(t,!1,i);return o&&(k.checkarea=0),o},this.onmousewheelhr=function(t){if(!k.wheelprevented){if(k.railslocked||!k.railh.scrollable)return!0;if(k.rail.drag)return k.cancelEvent(t);var e=m(),i=!1;return T.preservenativescrolling&&k.checkarea+600<e&&(k.nativescrollingarea=k.isScrollable(t),i=!0),k.checkarea=e,!!k.nativescrollingarea||(k.railslocked?k.cancelEvent(t):C(t,!0,i))}},this.stop=function(){return k.cancelScroll(),k.scrollmon&&k.scrollmon.stop(),k.cursorfreezed=!1,k.scroll.y=Math.round(k.getScrollTop()*(1/k.scrollratio.y)),k.noticeCursor(),k},this.getTransitionSpeed=function(t){return 80+t/72*T.scrollspeed|0},T.smoothscroll)if(k.ishwscroll&&M.hastransition&&T.usetransition&&T.smoothscroll){var F="";this.resetTransition=function(){F="",k.doc.css(M.prefixstyle+"transition-duration","0ms")},this.prepareTransition=function(t,e){var i=e?t:k.getTransitionSpeed(t),o=i+"ms";return F!==o&&(F=o,k.doc.css(M.prefixstyle+"transition-duration",o)),i},this.doScrollLeft=function(t,e){var i=k.scrollrunning?k.newscrolly:k.getScrollTop();k.doScrollPos(t,i,e)},this.doScrollTop=function(t,e){var i=k.scrollrunning?k.newscrollx:k.getScrollLeft();k.doScrollPos(i,t,e)},this.cursorupdate={running:!1,start:function(){var t=this;if(!t.running){t.running=!0;var e=function(){t.running&&d(e),k.showCursor(k.getScrollTop(),k.getScrollLeft()),k.notifyScrollEvent(k.win[0])};d(e)}},stop:function(){this.running=!1}},this.doScrollPos=function(t,e,i){var o=k.getScrollTop(),n=k.getScrollLeft();if(((k.newscrolly-o)*(e-o)<0||(k.newscrollx-n)*(t-n)<0)&&k.cancelScroll(),T.bouncescroll?(e<0?e=e/2|0:e>k.page.maxh&&(e=k.page.maxh+(e-k.page.maxh)/2|0),t<0?t=t/2|0:t>k.page.maxw&&(t=k.page.maxw+(t-k.page.maxw)/2|0)):(e<0?e=0:e>k.page.maxh&&(e=k.page.maxh),t<0?t=0:t>k.page.maxw&&(t=k.page.maxw)),k.scrollrunning&&t==k.newscrollx&&e==k.newscrolly)return!1;k.newscrolly=e,k.newscrollx=t;var r=k.getScrollTop(),s=k.getScrollLeft(),a={};a.x=t-s,a.y=e-r;var l=0|Math.sqrt(a.x*a.x+a.y*a.y),c=k.prepareTransition(l);k.scrollrunning||(k.scrollrunning=!0,k.triggerScrollStart(s,r,t,e,c),k.cursorupdate.start()),k.scrollendtrapped=!0,M.transitionend||(k.scrollendtrapped&&clearTimeout(k.scrollendtrapped),k.scrollendtrapped=setTimeout(k.onScrollTransitionEnd,c)),k.setScrollTop(k.newscrolly),k.setScrollLeft(k.newscrollx)},this.cancelScroll=function(){if(!k.scrollendtrapped)return!0;var t=k.getScrollTop(),e=k.getScrollLeft();return k.scrollrunning=!1,M.transitionend||clearTimeout(M.transitionend),k.scrollendtrapped=!1,k.resetTransition(),k.setScrollTop(t),k.railh&&k.setScrollLeft(e),k.timerscroll&&k.timerscroll.tm&&clearInterval(k.timerscroll.tm),k.timerscroll=!1,k.cursorfreezed=!1,k.cursorupdate.stop(),k.showCursor(t,e),k},this.onScrollTransitionEnd=function(){if(k.scrollendtrapped){var t=k.getScrollTop(),e=k.getScrollLeft();if(t<0?t=0:t>k.page.maxh&&(t=k.page.maxh),e<0?e=0:e>k.page.maxw&&(e=k.page.maxw),t!=k.newscrolly||e!=k.newscrollx)return k.doScrollPos(e,t,T.snapbackspeed);k.scrollrunning&&k.triggerScrollEnd(),k.scrollrunning=!1,k.scrollendtrapped=!1,k.resetTransition(),k.timerscroll=!1,k.setScrollTop(t),k.railh&&k.setScrollLeft(e),k.cursorupdate.stop(),k.noticeCursor(!1,t,e),k.cursorfreezed=!1}}}else this.doScrollLeft=function(t,e){var i=k.scrollrunning?k.newscrolly:k.getScrollTop();k.doScrollPos(t,i,e)},this.doScrollTop=function(t,e){var i=k.scrollrunning?k.newscrollx:k.getScrollLeft();k.doScrollPos(i,t,e)},this.doScrollPos=function(t,e,i){var o=k.getScrollTop(),n=k.getScrollLeft();((k.newscrolly-o)*(e-o)<0||(k.newscrollx-n)*(t-n)<0)&&k.cancelScroll();var r=!1;if(k.bouncescroll&&k.rail.visibility||(e<0?(e=0,r=!0):e>k.page.maxh&&(e=k.page.maxh,r=!0)),k.bouncescroll&&k.railh.visibility||(t<0?(t=0,r=!0):t>k.page.maxw&&(t=k.page.maxw,r=!0)),k.scrollrunning&&k.newscrolly===e&&k.newscrollx===t)return!0;k.newscrolly=e,k.newscrollx=t,k.dst={},k.dst.x=t-n,k.dst.y=e-o,k.dst.px=n,k.dst.py=o;var s=0|Math.sqrt(k.dst.x*k.dst.x+k.dst.y*k.dst.y),a=k.getTransitionSpeed(s);k.bzscroll={};var l=r?1:.58;k.bzscroll.x=new P(n,k.newscrollx,a,0,0,l,1),k.bzscroll.y=new P(o,k.newscrolly,a,0,0,l,1),m();var c=function(){if(k.scrollrunning){var t=k.bzscroll.y.getPos();k.setScrollLeft(k.bzscroll.x.getNow()),k.setScrollTop(k.bzscroll.y.getNow()),t<=1?k.timer=d(c):(k.scrollrunning=!1,k.timer=0,k.triggerScrollEnd())}};k.scrollrunning||(k.triggerScrollStart(n,o,t,e,a),k.scrollrunning=!0,k.timer=d(c))},this.cancelScroll=function(){return k.timer&&h(k.timer),k.timer=0,k.bzscroll=!1,k.scrollrunning=!1,k};else this.doScrollLeft=function(t,e){var i=k.getScrollTop();k.doScrollPos(t,i,e)},this.doScrollTop=function(t,e){var i=k.getScrollLeft();k.doScrollPos(i,t,e)},this.doScrollPos=function(t,e,i){var o=t>k.page.maxw?k.page.maxw:t;o<0&&(o=0);var n=e>k.page.maxh?k.page.maxh:e;n<0&&(n=0),k.synched("scroll",function(){k.setScrollTop(n),k.setScrollLeft(o)})},this.cancelScroll=function(){};this.doScrollBy=function(t,e){_(0,t)},this.doScrollLeftBy=function(t,e){_(t,0)},this.doScrollTo=function(t,e){var i=e?Math.round(t*k.scrollratio.y):t;i<0?i=0:i>k.page.maxh&&(i=k.page.maxh),k.cursorfreezed=!1,k.doScrollTop(t)},this.checkContentSize=function(){var t=k.getContentSize();t.h==k.page.h&&t.w==k.page.w||k.resize(!1,t)},k.onscroll=function(t){k.rail.drag||k.cursorfreezed||k.synched("scroll",function(){k.scroll.y=Math.round(k.getScrollTop()/k.scrollratio.y),k.railh&&(k.scroll.x=Math.round(k.getScrollLeft()/k.scrollratio.x)),k.noticeCursor()})},k.bind(k.docscroll,"scroll",k.onscroll),this.doZoomIn=function(t){if(!k.zoomactive){k.zoomactive=!0,k.zoomrestore={style:{}};var e=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"],i=k.win[0].style;for(var o in e){var n=e[o];k.zoomrestore.style[n]=void 0!==i[n]?i[n]:""}k.zoomrestore.style.width=k.win.css("width"),k.zoomrestore.style.height=k.win.css("height"),k.zoomrestore.padding={w:k.win.outerWidth()-k.win.width(),h:k.win.outerHeight()-k.win.height()},M.isios4&&(k.zoomrestore.scrollTop=c.scrollTop(),c.scrollTop(0)),k.win.css({position:M.isios4?"absolute":"fixed",top:0,left:0,zIndex:r+100,margin:0});var s=k.win.css("backgroundColor");return(""===s||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s))&&k.win.css("backgroundColor","#fff"),k.rail.css({zIndex:r+101}),k.zoom.css({zIndex:r+102}),k.zoom.css("backgroundPosition","0 -18px"),k.resizeZoom(),k.onzoomin&&k.onzoomin.call(k),k.cancelEvent(t)}},this.doZoomOut=function(t){if(k.zoomactive)return k.zoomactive=!1,k.win.css("margin",""),k.win.css(k.zoomrestore.style),M.isios4&&c.scrollTop(k.zoomrestore.scrollTop),k.rail.css({"z-index":k.zindex}),k.zoom.css({"z-index":k.zindex}),k.zoomrestore=!1,k.zoom.css("backgroundPosition","0 0"),k.onResize(),k.onzoomout&&k.onzoomout.call(k),k.cancelEvent(t)},this.doZoom=function(t){return k.zoomactive?k.doZoomOut(t):k.doZoomIn(t)},this.resizeZoom=function(){if(k.zoomactive){var t=k.getScrollTop();k.win.css({width:c.width()-k.zoomrestore.padding.w+"px",height:c.height()-k.zoomrestore.padding.h+"px"}),k.onResize(),k.setScrollTop(Math.min(k.page.maxh,t))}},this.init(),s.nicescroll.push(this)},b=function(t){var e=this;this.nc=t,this.lastx=0,this.lasty=0,this.speedx=0,this.speedy=0,this.lasttime=0,this.steptime=0,this.snapx=!1,this.snapy=!1,this.demulx=0,this.demuly=0,this.lastscrollx=-1,this.lastscrolly=-1,this.chkx=0,this.chky=0,this.timer=0,this.reset=function(t,i){e.stop(),e.steptime=0,e.lasttime=m(),e.speedx=0,e.speedy=0,e.lastx=t,e.lasty=i,e.lastscrollx=-1,e.lastscrolly=-1},this.update=function(t,i){var o=m();e.steptime=o-e.lasttime,e.lasttime=o;var n=i-e.lasty,r=t-e.lastx,s=e.nc.getScrollTop()+n,a=e.nc.getScrollLeft()+r;e.snapx=a<0||a>e.nc.page.maxw,e.snapy=s<0||s>e.nc.page.maxh,e.speedx=r,e.speedy=n,e.lastx=t,e.lasty=i},this.stop=function(){e.nc.unsynched("domomentum2d"),e.timer&&clearTimeout(e.timer),e.timer=0,e.lastscrollx=-1,e.lastscrolly=-1},this.doSnapy=function(t,i){var o=!1;i<0?(i=0,o=!0):i>e.nc.page.maxh&&(i=e.nc.page.maxh,o=!0),t<0?(t=0,o=!0):t>e.nc.page.maxw&&(t=e.nc.page.maxw,o=!0),o?e.nc.doScrollPos(t,i,e.nc.opt.snapbackspeed):e.nc.triggerScrollEnd()},this.doMomentum=function(t){var i=m(),o=t?i+t:e.lasttime,n=e.nc.getScrollLeft(),r=e.nc.getScrollTop(),s=e.nc.page.maxh,a=e.nc.page.maxw;e.speedx=a>0?Math.min(60,e.speedx):0,e.speedy=s>0?Math.min(60,e.speedy):0;var l=o&&i-o<=60;(r<0||r>s||n<0||n>a)&&(l=!1);var c=!(!e.speedy||!l)&&e.speedy,u=!(!e.speedx||!l)&&e.speedx;if(c||u){var d=Math.max(16,e.steptime);if(d>50){var h=d/50;e.speedx*=h,e.speedy*=h,d=50}e.demulxy=0,e.lastscrollx=e.nc.getScrollLeft(),e.chkx=e.lastscrollx,e.lastscrolly=e.nc.getScrollTop(),e.chky=e.lastscrolly;var p=e.lastscrollx,f=e.lastscrolly,g=function(){var t=m()-i>600?.04:.02;e.speedx&&(p=Math.floor(e.lastscrollx-e.speedx*(1-e.demulxy)),e.lastscrollx=p,(p<0||p>a)&&(t=.1)),e.speedy&&(f=Math.floor(e.lastscrolly-e.speedy*(1-e.demulxy)),e.lastscrolly=f,(f<0||f>s)&&(t=.1)),e.demulxy=Math.min(1,e.demulxy+t),e.nc.synched("domomentum2d",function(){e.speedx&&(e.nc.getScrollLeft(),e.chkx=p,e.nc.setScrollLeft(p)),e.speedy&&(e.nc.getScrollTop(),e.chky=f,e.nc.setScrollTop(f)),e.timer||(e.nc.hideCursor(),e.doSnapy(p,f))}),e.demulxy<1?e.timer=setTimeout(g,d):(e.stop(),e.nc.hideCursor(),e.doSnapy(p,f))};g()}else e.doSnapy(e.nc.getScrollLeft(),e.nc.getScrollTop())}},x=t.fn.scrollTop;t.cssHooks.pageYOffset={get:function(t,e,i){var o=s.data(t,"__nicescroll")||!1;return o&&o.ishwscroll?o.getScrollTop():x.call(t)},set:function(t,e){var i=s.data(t,"__nicescroll")||!1;return i&&i.ishwscroll?i.setScrollTop(parseInt(e)):x.call(t,e),this}},t.fn.scrollTop=function(t){if(void 0===t){var e=!!this[0]&&(s.data(this[0],"__nicescroll")||!1);return e&&e.ishwscroll?e.getScrollTop():x.call(this)}return this.each(function(){var e=s.data(this,"__nicescroll")||!1;e&&e.ishwscroll?e.setScrollTop(parseInt(t)):x.call(s(this),t)})};var _=t.fn.scrollLeft;s.cssHooks.pageXOffset={get:function(t,e,i){var o=s.data(t,"__nicescroll")||!1;return o&&o.ishwscroll?o.getScrollLeft():_.call(t)},set:function(t,e){var i=s.data(t,"__nicescroll")||!1;return i&&i.ishwscroll?i.setScrollLeft(parseInt(e)):_.call(t,e),this}},t.fn.scrollLeft=function(t){if(void 0===t){var e=!!this[0]&&(s.data(this[0],"__nicescroll")||!1);return e&&e.ishwscroll?e.getScrollLeft():_.call(this)}return this.each(function(){var e=s.data(this,"__nicescroll")||!1;e&&e.ishwscroll?e.setScrollLeft(parseInt(t)):_.call(s(this),t)})};var C=function(t){var e=this;if(this.length=0,this.name="nicescrollarray",this.each=function(t){return s.each(e,t),e},this.push=function(t){e[e.length]=t,e.length++},this.eq=function(t){return e[t]},t)for(var i=0;i<t.length;i++){var o=s.data(t[i],"__nicescroll")||!1;o&&(this[this.length]=o,this.length++)}return this};!function(t,e,i){for(var o=0,n=e.length;o<n;o++)i(t,e[o])}(C.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"],function(t,e){t[e]=function(){var t=arguments;return this.each(function(){this[e].apply(this,t)})}}),t.fn.getNiceScroll=function(t){return void 0===t?new C(this):this[t]&&s.data(this[t],"__nicescroll")||!1},(t.expr.pseudos||t.expr[":"]).nicescroll=function(t){return void 0!==s.data(t,"__nicescroll")},s.fn.niceScroll=function(t,e){void 0!==e||"object"!=typeof t||"jquery"in t||(e=t,t=!1);var i=new C;return this.each(function(){var o=s(this),n=s.extend({},e);if(t){var r=s(t);n.doc=r.length>1?s(t,o):r,n.win=o}!("doc"in n)||"win"in n||(n.win=o);var a=o.data("__nicescroll")||!1;a||(n.doc=n.doc||o,a=new w(n,o),o.data("__nicescroll",a)),i.push(a)}),1===i.length?i[0]:i},l.NiceScroll={getjQuery:function(){return t}},s.nicescroll||(s.nicescroll=new C,s.nicescroll.options=g)});
!function(e){"use strict";var a=e(window);a.on("load",function(){e(".preloader").fadeOut("slow",function(){e(this).remove()})}),e.fn.classyNav&&e("#vizewNav").classyNav(),e.fn.simpleTicker&&e.simpleTicker(e("#breakingNewsTicker"),{speed:1e3,delay:3e3,easing:"swing",effectType:"roll"}),e.fn.sticky&&e("#sticker").sticky({topSpacing:0}),e.fn.owlCarousel&&(e(".twitter-slides").owlCarousel({items:1,margin:0,loop:!0,dots:!1,autoplay:!0,autoplayTimeout:4e3,smartSpeed:1e3}),e(".featured-post-slides").owlCarousel({items:1,margin:0,loop:!0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,autoplay:!0,autoplayTimeout:4e3,smartSpeed:1e3}),e(".sport-video-slides").owlCarousel({items:1,margin:0,loop:!0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,autoplay:!0,autoplayTimeout:4e3,smartSpeed:1e3}),e(".business-video-slides").owlCarousel({items:1,margin:0,loop:!0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,autoplay:!0,autoplayTimeout:4e3,smartSpeed:1e3})),e.fn.niceScroll&&e(".vizew-nav-tab").niceScroll({cursorcolor:"#838586",cursorwidth:"6px",cursorborder:"none"}),e.fn.scrollUp&&a.scrollUp({scrollSpeed:1500,scrollText:'<i class="ti-angle-up"></i>'}),e.fn.tooltip&&e('[data-toggle="tooltip"]').tooltip(),e.fn.counterUp&&e(".counter").counterUp({delay:10,time:3e3}),e('a[href="#"]').on("click",function(e){e.preventDefault()}),a.width()>767&&(new WOW).init()}(jQuery);
/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.validateDelegate( ":submit", "click", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}
				// allow suppressing validation by adding a cancel class to the submit button
				if ( $( event.target ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( event.target ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
			});
		}
		return valid;
	},
	// attributes: space separated list of attributes to retrieve and remove
	removeAttrs: function( attributes ) {
		var result = {},
			$element = this;
		$.each( attributes.split( /\s/ ), function( index, value ) {
			result[ value ] = $element.attr( value );
			$element.removeAttr( value );
		});
		return result;
	},
	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				});
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param });
		}

		return data;
	}
});

// Custom selectors
$.extend( $.expr[ ":" ], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		return !!$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		});
	});
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {
			if ( event.which === 9 && this.elementValue( element ) === "" ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element( element );
			}
		},
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date ( ISO ).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				});
			});
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			});

			function delegate( event ) {
				var validator = $.data( this[ 0 ].form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !this.is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this[ 0 ], event );
				}
			}
			$( this.currentForm )
				.validateDelegate( ":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'], [type='radio'], [type='checkbox']",
					"focusin focusout keyup", delegate)
				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).bind( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend({}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if ( result ) {
					delete this.invalid[ checkElement.name ];
				} else {
					this.invalid[ checkElement.name ] = true;
				}
			}
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[ name ],
						element: this.findByName( name )[ 0 ]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements()
					.removeClass( this.settings.errorClass )
					.removeData( "previousValue" )
					.removeAttr( "aria-invalid" );
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
					.filter( ":visible" )
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea" )
			.not( ":submit, :reset, :image, [disabled], [readonly]" )
			.not( this.settings.ignore )
			.filter( function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ this.name ] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var val,
				$element = $( element ),
				type = element.type;

			if ( type === "radio" || type === "checkbox" ) {
				return $( "input[name='" + element.name + "']:checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? false : $element.val();
			}

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				}).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {

					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[ method ],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			});

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var place, group, errorID,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );
			if ( error.length ) {
				// refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				error.html( message );
			} else {
				// create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement( place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {
					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );
				} else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby

					errorID = error.attr( "id" ).replace( /(:|\.|\[|\])/g, "\\$1");
					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						$.each( this.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + name + "']", this.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						});
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.idOrName( element ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// aria-describedby should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
			}
			return this
				.errors()
				.filter( selector );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + name + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ]);
				}
			});
		}
		return rules;
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}
				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			// convert the value to a number for number inputs, and for text for backwards compability
			// allows type="date" and others to be compared as strings
			if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
				value = Number( value );
			}

			if ( value || value === 0 ) {
				rules[ method ] = value;
			} else if ( type === method && type !== "range" ) {
				// exception: the jquery validate 'range' method
				// does not test for the html5 'range' type
				rules[ method ] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var method, value,
			rules = {}, $element = $( element );
		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			if ( value !== undefined ) {
				rules[ method ] = value;
			}
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each( rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[ prop ];
				}
			}
		});

		// evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
		});

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		});
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return $.trim( value ).length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional( element ) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn/
		creditcard: function( value, element ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test( value ) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace( /\D/g, "" );

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			}

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt( n );
				nDigit = parseInt( cDigit, 10 );
				if ( bEven ) {
					if ( ( nDigit *= 2 ) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return ( nCheck % 10 ) === 0;
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $( param );
			if ( this.settings.onfocusout ) {
				target.unbind( ".validate-equalTo" ).bind( "blur.validate-equalTo", function() {
					$( element ).valid();
				});
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue( element ),
				validator, data;

			if (!this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = this.settings.messages[ element.name ].remote;
			this.settings.messages[ element.name ].remote = previous.message;

			param = typeof param === "string" && { url: param } || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						delete validator.invalid[ element.name ];
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, "remote" );
						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}

	}

});

$.format = function deprecated() {
	throw "$.format has been deprecated. Please use $.validator.format instead.";
};

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter(function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = xhr;
		}
	});
} else {
	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = ajax.apply(this, arguments);
			return pendingRequests[port];
		}
		return ajax.apply(this, arguments);
	};
}

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target

$.extend($.fn, {
	validateDelegate: function( delegate, type, handler ) {
		return this.bind(type, function( event ) {
			var target = $(event.target);
			if ( target.is(delegate) ) {
				return handler.apply(target, arguments);
			}
		});
	}
});

}));
/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

(function() {

	function stripHtml(value) {
		// remove html tags and space chars
		return value.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ")
		// remove punctuation
		.replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "");
	}

	$.validator.addMethod("maxWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length <= params;
	}, $.validator.format("Please enter {0} words or less."));

	$.validator.addMethod("minWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length >= params;
	}, $.validator.format("Please enter at least {0} words."));

	$.validator.addMethod("rangeWords", function(value, element, params) {
		var valueStripped = stripHtml(value),
			regex = /\b\w+\b/g;
		return this.optional(element) || valueStripped.match(regex).length >= params[0] && valueStripped.match(regex).length <= params[1];
	}, $.validator.format("Please enter between {0} and {1} words."));

}());

// Accept a value from a file input based on a required mimetype
$.validator.addMethod("accept", function(value, element, param) {
	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
	optionalValue = this.optional(element),
	i, file;

	// Element is optional
	if (optionalValue) {
		return optionalValue;
	}

	if ($(element).attr("type") === "file") {
		// If we are using a wildcard, make it regex friendly
		typeParam = typeParam.replace(/\*/g, ".*");

		// Check if the element has a FileList before checking each file
		if (element.files && element.files.length) {
			for (i = 0; i < element.files.length; i++) {
				file = element.files[i];

				// Grab the mimetype from the loaded file, verify it matches
				if (!file.type.match(new RegExp( ".?(" + typeParam + ")$", "i"))) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format("Please enter a value with a valid mimetype."));

$.validator.addMethod("alphanumeric", function(value, element) {
	return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, and underscores only please");

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod("bankaccountNL", function(value, element) {
	if (this.optional(element)) {
		return true;
	}
	if (!(/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(value))) {
		return false;
	}
	// now '11 check'
	var account = value.replace(/ /g, ""), // remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring(pos, pos + 1);
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number");

$.validator.addMethod("bankorgiroaccountNL", function(value, element) {
	return this.optional(element) ||
			($.validator.methods.bankaccountNL.call(this, value, element)) ||
			($.validator.methods.giroaccountNL.call(this, value, element));
}, "Please specify a valid bank or giro account number");

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or one of the following digits ('0' for test (therefore not allowed), '1' for passive participant and '2' for active participant)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod("bic", function(value, element) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value );
}, "Please specify a valid BIC code");

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 */
$.validator.addMethod( "cifES", function( value ) {
	"use strict";

	var num = [],
		controlDigit, sum, i, count, tmp, secondDigit;

	value = value.toUpperCase();

	// Quick format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	for ( i = 0; i < 9; i++ ) {
		num[ i ] = parseInt( value.charAt( i ), 10 );
	}

	// Algorithm for checking CIF codes
	sum = num[ 2 ] + num[ 4 ] + num[ 6 ];
	for ( count = 1; count < 8; count += 2 ) {
		tmp = ( 2 * num[ count ] ).toString();
		secondDigit = tmp.charAt( 1 );

		sum += parseInt( tmp.charAt( 0 ), 10 ) + ( secondDigit === "" ? 0 : parseInt( secondDigit, 10 ) );
	}

	/* The first (position 1) is a letter following the following criteria:
	 *	A. Corporations
	 *	B. LLCs
	 *	C. General partnerships
	 *	D. Companies limited partnerships
	 *	E. Communities of goods
	 *	F. Cooperative Societies
	 *	G. Associations
	 *	H. Communities of homeowners in horizontal property regime
	 *	J. Civil Societies
	 *	K. Old format
	 *	L. Old format
	 *	M. Old format
	 *	N. Nonresident entities
	 *	P. Local authorities
	 *	Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
	 *	R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
	 *	S. Organs of State Administration and regions
	 *	V. Agrarian Transformation
	 *	W. Permanent establishments of non-resident in Spain
	 */
	if ( /^[ABCDEFGHJNPQRSUVW]{1}/.test( value ) ) {
		sum += "";
		controlDigit = 10 - parseInt( sum.charAt( sum.length - 1 ), 10 );
		value += controlDigit;
		return ( num[ 8 ].toString() === String.fromCharCode( 64 + controlDigit ) || num[ 8 ].toString() === value.charAt( value.length - 1 ) );
	}

	return false;

}, "Please specify a valid CIF number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod("creditcardtypes", function(value, element, param) {
	if (/[^0-9\-]+/.test(value)) {
		return false;
	}

	value = value.replace(/\D/g, "");

	var validTypes = 0x0000;

	if (param.mastercard) {
		validTypes |= 0x0001;
	}
	if (param.visa) {
		validTypes |= 0x0002;
	}
	if (param.amex) {
		validTypes |= 0x0004;
	}
	if (param.dinersclub) {
		validTypes |= 0x0008;
	}
	if (param.enroute) {
		validTypes |= 0x0010;
	}
	if (param.discover) {
		validTypes |= 0x0020;
	}
	if (param.jcb) {
		validTypes |= 0x0040;
	}
	if (param.unknown) {
		validTypes |= 0x0080;
	}
	if (param.all) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if (validTypes & 0x0001 && /^(5[12345])/.test(value)) { //mastercard
		return value.length === 16;
	}
	if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
		return value.length === 16;
	}
	if (validTypes & 0x0004 && /^(3[47])/.test(value)) { //amex
		return value.length === 15;
	}
	if (validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test(value)) { //dinersclub
		return value.length === 14;
	}
	if (validTypes & 0x0010 && /^(2(014|149))/.test(value)) { //enroute
		return value.length === 15;
	}
	if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
		return value.length === 16;
	}
	if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
		return value.length === 16;
	}
	if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
		return value.length === 15;
	}
	if (validTypes & 0x0080) { //unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number.");

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod("currency", function(value, element, param) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[0],
        soft = isParamString ? true : param[1],
        regex;

    symbol = symbol.replace(/,/g, "");
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp(regex);
    return this.optional(element) || regex.test(value);

}, "Please specify a valid currency");

$.validator.addMethod("dateFA", function(value, element) {
	return this.optional(element) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(value);
}, "Please enter a correct date");

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("dateITA", function(value, element) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test(value)) {
		adata = value.split("/");
		gg = parseInt(adata[0], 10);
		mm = parseInt(adata[1], 10);
		aaaa = parseInt(adata[2], 10);
		xdata = new Date(aaaa, mm - 1, gg, 12, 0, 0, 0);
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth () === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional(element) || check;
}, "Please enter a correct date");

$.validator.addMethod("dateNL", function(value, element) {
	return this.optional(element) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(value);
}, "Please enter a correct date");

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod("extension", function(value, element, param) {
	param = typeof param === "string" ? param.replace(/,/g, "|") : "png|jpe?g|gif";
	return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
}, $.validator.format("Please enter a value with a valid extension."));

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod("giroaccountNL", function(value, element) {
	return this.optional(element) || /^[0-9]{1,7}$/.test(value);
}, "Please specify a valid giro account number");

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 */
$.validator.addMethod("iban", function(value, element) {
	// some quick simple tests to prevent needless work
	if (this.optional(element)) {
		return true;
	}

	// remove spaces and to upper case
	var iban = value.replace(/ /g, "").toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	if (!(/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(iban))) {
		return false;
	}

	// check the country code and find the country specific format
	countrycode = iban.substring(0, 2);
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[countrycode];
	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if (typeof bbanpattern !== "undefined") {
		ibanregexp = new RegExp("^[A-Z]{2}\\d{2}" + bbanpattern + "$", "");
		if (!(ibanregexp.test(iban))) {
			return false; // invalid country specific format
		}
	}

	// now check the checksum, first convert to digits
	ibancheck = iban.substring(4, iban.length) + iban.substring(0, 4);
	for (i = 0; i < ibancheck.length; i++) {
		charAt = ibancheck.charAt(i);
		if (charAt !== "0") {
			leadingZeroes = false;
		}
		if (!leadingZeroes) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(charAt);
		}
	}

	// calculate the result of: ibancheckdigits % 97
	for (p = 0; p < ibancheckdigits.length; p++) {
		cChar = ibancheckdigits.charAt(p);
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN");

$.validator.addMethod("integer", function(value, element) {
	return this.optional(element) || /^-?\d+$/.test(value);
}, "A positive or negative non-decimal number please");

$.validator.addMethod("ipv4", function(value, element) {
	return this.optional(element) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value);
}, "Please enter a valid IP v4 address.");

$.validator.addMethod("ipv6", function(value, element) {
	return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
}, "Please enter a valid IP v6 address.");

$.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please");

$.validator.addMethod("letterswithbasicpunc", function(value, element) {
	return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
}, "Letters or punctuation only please");

$.validator.addMethod("mobileNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(value);
}, "Please specify a valid mobile number");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod("mobileUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/);
}, "Please specify a valid mobile number");

/*
 * The número de identidad de extranjero ( NIE )is a code used to identify the non-nationals in Spain
 */
$.validator.addMethod( "nieES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIE
	//T
	if ( /^[T]{1}/.test( value ) ) {
		return ( value[ 8 ] === /^[T]{1}[A-Z0-9]{8}$/.test( value ) );
	}

	//XYZ
	if ( /^[XYZ]{1}/.test( value ) ) {
		return (
			value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
				value.replace( "X", "0" )
					.replace( "Y", "1" )
					.replace( "Z", "2" )
					.substring( 0, 8 ) % 23
			)
		);
	}

	return false;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}
	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === String.fromCharCode( 64 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

$.validator.addMethod("nowhitespace", function(value, element) {
	return this.optional(element) || /^\S+$/i.test(value);
}, "No white space please");

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod("pattern", function(value, element, param) {
	if (this.optional(element)) {
		return true;
	}
	if (typeof param === "string") {
		param = new RegExp("^(?:" + param + ")$");
	}
	return param.test(value);
}, "Invalid format.");

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod("phoneNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(value);
}, "Please specify a valid phone number.");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod("phoneUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/);
}, "Please specify a valid phone number");

/**
 * matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod("phoneUS", function(phone_number, element) {
	phone_number = phone_number.replace(/\s+/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/);
}, "Please specify a valid phone number");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
//Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod("phonesUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/);
}, "Please specify a valid uk phone number");

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test( value );
}, "Please specify a valid postal code" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod("postalcodeBR", function(cep_value, element) {
	return this.optional(element) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido.");

/* Matches Italian postcode (CAP) */
$.validator.addMethod("postalcodeIT", function(value, element) {
	return this.optional(element) || /^\d{5}$/.test(value);
}, "Please specify a valid postal code");

$.validator.addMethod("postalcodeNL", function(value, element) {
	return this.optional(element) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
}, "Please specify a valid postal code");

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod("postcodeUK", function(value, element) {
	return this.optional(element) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(value);
}, "Please specify a valid UK postcode");

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod("require_from_group", function(value, element, options) {
	var $fields = $(options[1], element.form),
		$fieldsFirst = $fields.eq(0),
		validator = $fieldsFirst.data("valid_req_grp") ? $fieldsFirst.data("valid_req_grp") : $.extend({}, this),
		isValid = $fields.filter(function() {
			return validator.elementValue(this);
		}).length >= options[0];

	// Store the cloned validator for future validation
	$fieldsFirst.data("valid_req_grp", validator);

	// If element isn't being validated, run each require_from_group field's validation rules
	if (!$(element).data("being_validated")) {
		$fields.data("being_validated", true);
		$fields.each(function() {
			validator.element(this);
		});
		$fields.data("being_validated", false);
	}
	return isValid;
}, $.validator.format("Please fill at least {0} of these fields."));

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod("skip_or_fill_minimum", function(value, element, options) {
	var $fields = $(options[1], element.form),
		$fieldsFirst = $fields.eq(0),
		validator = $fieldsFirst.data("valid_skip") ? $fieldsFirst.data("valid_skip") : $.extend({}, this),
		numberFilled = $fields.filter(function() {
			return validator.elementValue(this);
		}).length,
		isValid = numberFilled === 0 || numberFilled >= options[0];

	// Store the cloned validator for future validation
	$fieldsFirst.data("valid_skip", validator);

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if (!$(element).data("being_validated")) {
		$fields.data("being_validated", true);
		$fields.each(function() {
			validator.element(this);
		});
		$fields.data("being_validated", false);
	}
	return isValid;
}, $.validator.format("Please either skip these fields or fill at least {0} of them."));

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 *
 *
 */

jQuery.validator.addMethod("stateUS", function(value, element, options) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if (!includeTerritories && !includeMilitary) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if (includeTerritories && includeMilitary) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if (includeTerritories) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp(regex) : new RegExp(regex, "i");
	return this.optional(element) || regex.test(value);
},
"Please specify a valid state");

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod("strippedminlength", function(value, element, param) {
	return $(value).text().length >= param;
}, $.validator.format("Please enter at least {0} characters"));

$.validator.addMethod("time", function(value, element) {
	return this.optional(element) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(value);
}, "Please enter a valid time, between 00:00 and 23:59");

$.validator.addMethod("time12h", function(value, element) {
	return this.optional(element) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(value);
}, "Please enter a valid time in 12-hour am/pm format");

// same as url, but TLD is optional
$.validator.addMethod("url2", function(value, element) {
	return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}, $.validator.messages.url);

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("vinUS", function(v) {
	if (v.length !== 17) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for (i = 0; i < 17; i++) {
		f = FL[i];
		d = v.slice(i, i + 1);
		if (i === 8) {
			cdv = d;
		}
		if (!isNaN(d)) {
			d *= f;
		} else {
			for (n = 0; n < LL.length; n++) {
				if (d.toUpperCase() === LL[n]) {
					d = VL[n];
					d *= f;
					if (isNaN(cdv) && n === 8) {
						cdv = LL[n];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if (cd === 10) {
		cd = "X";
	}
	if (cd === cdv) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid.");

$.validator.addMethod("zipcodeUS", function(value, element) {
	return this.optional(element) || /^\d{5}(-\d{4})?$/.test(value);
}, "The specified US ZIP Code is invalid");

$.validator.addMethod("ziprange", function(value, element) {
	return this.optional(element) || /^90[2-5]\d\{2\}-\d{4}$/.test(value);
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx");

}));
(function(){var c;c=jQuery;c.bootstrapGrowl=function(f,a){var b,e,d;a=c.extend({},c.bootstrapGrowl.default_options,a);b=c("<div>");b.attr("class","bootstrap-growl alert");a.type&&b.addClass("alert-"+a.type);a.allow_dismiss&&(b.addClass("alert-dismissible"),b.append('<button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'));b.append(f);a.top_offset&&(a.offset={from:"top",amount:a.top_offset});d=a.offset.amount;c(".bootstrap-growl").each(function(){return d= Math.max(d,parseInt(c(this).css(a.offset.from))+c(this).outerHeight()+a.stackup_spacing)});e={position:"body"===a.ele?"fixed":"absolute",margin:0,"z-index":"9999",display:"none"};e[a.offset.from]=d+"px";b.css(e);"auto"!==a.width&&b.css("width",a.width+"px");c(a.ele).append(b);switch(a.align){case "center":b.css({left:"50%","margin-left":"-"+b.outerWidth()/2+"px"});break;case "left":b.css("left","20px");break;default:b.css("right","20px")}b.fadeIn();0<a.delay&&b.delay(a.delay).fadeOut(function(){return c(this).alert("close")}); return b};c.bootstrapGrowl.default_options={ele:"body",type:"info",offset:{from:"top",amount:20},align:"right",width:250,delay:4E3,allow_dismiss:!0,stackup_spacing:10}}).call(this);
