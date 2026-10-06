const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/scenePanel.CK3Ea41q.js","_astro/FrontPageScreen.Dl0tLXbp.js","_astro/runtime-dom.esm-bundler.Cv_extU5.js","_astro/consent.BtCuQJDF.js","_astro/_plugin-vue_export-helper.DlAUqK2U.js","_astro/index.DK1JIGCq.css"])))=>i.map(i=>d[i]);
import{r as rs,D as Nr,H as Xc,w as jh,_ as _l,c as tu}from"./FrontPageScreen.Dl0tLXbp.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="186",eu=0,vl=1,nu=2,vr=1,iu=2,_s=3,pi=0,Ye=1,rn=2,Gn=0,Ms=1,wr=2,xl=3,Sl=4,su=5,ki=100,ru=101,au=102,ou=103,lu=104,cu=200,hu=201,uu=202,fu=203,qc=204,Yc=205,du=206,pu=207,mu=208,gu=209,_u=210,vu=211,xu=212,Su=213,Mu=214,Na=0,Fa=1,Oa=2,Ts=3,Ba=4,za=5,Ga=6,Ha=7,Uo=0,yu=1,bu=2,xn=0,Zc=1,Kc=2,Jc=3,$c=4,Qc=5,jc=6,th=7,eh=300,mi=301,ji=302,kr=303,Wr=304,Fr=306,Va=1e3,Bn=1001,ka=1002,Ce=1003,Eu=1004,Bs=1005,Ge=1006,Xr=1007,ei=1008,je=1009,nh=1010,ih=1011,As=1012,No=1013,Ln=1014,hn=1015,Sn=1016,Fo=1017,Oo=1018,Rs=1020,sh=35902,rh=35899,ah=1021,oh=1022,un=1023,Vn=1026,fi=1027,Bo=1028,zo=1029,gi=1030,Go=1031,Ho=1033,xr=33776,Sr=33777,Mr=33778,yr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ka=37492,Ja=37496,$a=37488,Qa=37489,Tr=37490,ja=37491,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,_o=36495,vo=36283,xo=36284,Ar=36285,So=36286,wu=3200,Rr=0,Tu=1,ti="",Je="srgb",Cr="srgb-linear",Pr="linear",ue="srgb",qr=7680,Au=519,Ru=512,Cu=513,Pu=514,Vo=515,Lu=516,Du=517,ko=518,Iu=519,lh=35044,Ml="300 es",Cn=2e3,Cs=2001;function Uu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nu(){const s=Lr("canvas");return s.style.display="block",s}const yl={};function Dr(...s){const t="THREE."+s.shift();console.log(t,...s)}function ch(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ht(...s){s=ch(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ie(...s){s=ch(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ki(...s){const t=s.join(" ");t in yl||(yl[t]=!0,Ht(...s))}function Fu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ou={[Na]:Fa,[Oa]:Ga,[Ba]:Ha,[Ts]:za,[Fa]:Na,[Ga]:Oa,[Ha]:Ba,[za]:Ts};class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const Ji=Math.PI/180,Ps=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[s&255]+Oe[s>>8&255]+Oe[s>>16&255]+Oe[s>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Xt(s,t,e){return Math.max(t,Math.min(e,s))}function Wo(s,t){return(s%t+t)%t}function Bu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function zu(s,t,e){return s!==t?(e-s)/(t-s):0}function ys(s,t,e){return(1-e)*s+e*t}function Gu(s,t,e,n){return ys(s,t,1-Math.exp(-e*n))}function Hu(s,t=1){return t-Math.abs(Wo(s,t*2)-t)}function Vu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ku(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Wu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Xu(s,t){return s+Math.random()*(t-s)}function qu(s){return s*(.5-Math.random())}function Yu(s){s!==void 0&&(bl=s);let t=bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zu(s){return s*Ji}function Ku(s){return s*Ps}function Ju(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function $u(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ju(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ze={DEG2RAD:Ji,RAD2DEG:Ps,generateUUID:Pn,clamp:Xt,euclideanModulo:Wo,mapLinear:Bu,inverseLerp:zu,lerp:ys,damp:Gu,pingpong:Hu,smoothstep:Vu,smootherstep:ku,randInt:Wu,randFloat:Xu,randFloatSpread:qu,seededRandom:Yu,degToRad:Zu,radToDeg:Ku,isPowerOfTwo:Ju,ceilPowerOfTwo:$u,floorPowerOfTwo:Qu,setQuaternionFromProperEuler:ju,normalize:fe,denormalize:_n};class st{static{st.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*v;g<0&&(u=-u,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const E=Math.acos(g),y=Math.sin(E);p=Math.sin(p*E)/y,o=Math.sin(o*E)/y,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+v*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+v*o;const E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{C.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new C,El=new tn;class kt{static{kt.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],E=i[1],y=i[4],S=i[7],w=i[2],b=i[5],R=i[8];return r[0]=a*v+o*E+l*w,r[3]=a*g+o*y+l*b,r[6]=a*p+o*S+l*R,r[1]=c*v+h*E+f*w,r[4]=c*g+h*y+f*b,r[7]=c*p+h*S+f*R,r[2]=u*v+d*E+m*w,r[5]=u*g+d*y+m*b,r[8]=u*p+d*S+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new kt,wl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tf(){const s={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?Pr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cr]:{primaries:t,whitePoint:n,transfer:Pr,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:wl,fromXYZ:Tl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),s}const ne=tf();function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ei;class ef{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ei===void 0&&(Ei=Lr("canvas")),Ei.width=t.width,Ei.height=t.height;const i=Ei.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ei}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class Xo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Kr(i[a].image)):r.push(Kr(i[a]))}else r=Kr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ef.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let sf=0;const Jr=new C;class He extends xi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Bn,i=Bn,r=Ge,a=ei,o=un,l=je,c=He.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Pn(),this.name="",this.source=new Xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=eh;He.DEFAULT_ANISOTROPY=1;class ee{static{ee.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,S=(d+1)/2,w=(p+1)/2,b=(h+u)/4,R=(f+v)/4,x=(m+g)/4;return y>S&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=b/n,r=R/n):S>w?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=b/i,r=x/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=x/r),this.set(n,i,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(f-v)/E,this.z=(u-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new He(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Xo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends rf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hh extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Nt{static{Nt.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,f,u,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,d,m,v,g)}set(t,e,n,i,r,a,o,l,c,h,f,u,d,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,m=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,v=c*f;e[0]=u+v*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,m=o*h,v=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-v*f}else if(t.order==="XZY"){const u=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(of,t,lf)}lookAt(t,e,n){const i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),qn.crossVectors(n,nn),qn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),qn.crossVectors(n,nn)),qn.normalize(),zs.crossVectors(nn,qn),i[0]=qn.x,i[4]=zs.x,i[8]=nn.x,i[1]=qn.y,i[5]=zs.y,i[9]=nn.y,i[2]=qn.z,i[6]=zs.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],E=n[3],y=n[7],S=n[11],w=n[15],b=i[0],R=i[4],x=i[8],T=i[12],P=i[1],L=i[5],F=i[9],z=i[13],D=i[2],O=i[6],W=i[10],X=i[14],it=i[3],q=i[7],Q=i[11],et=i[15];return r[0]=a*b+o*P+l*D+c*it,r[4]=a*R+o*L+l*O+c*q,r[8]=a*x+o*F+l*W+c*Q,r[12]=a*T+o*z+l*X+c*et,r[1]=h*b+f*P+u*D+d*it,r[5]=h*R+f*L+u*O+d*q,r[9]=h*x+f*F+u*W+d*Q,r[13]=h*T+f*z+u*X+d*et,r[2]=m*b+v*P+g*D+p*it,r[6]=m*R+v*L+g*O+p*q,r[10]=m*x+v*F+g*W+p*Q,r[14]=m*T+v*z+g*X+p*et,r[3]=E*b+y*P+S*D+w*it,r[7]=E*R+y*L+S*O+w*q,r[11]=E*x+y*F+S*W+w*Q,r[15]=E*T+y*z+S*X+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15],E=l*d-c*u,y=o*d-c*f,S=o*u-l*f,w=a*d-c*h,b=a*u-l*h,R=a*f-o*h;return e*(v*E-g*y+p*S)-n*(m*E-g*w+p*b)+i*(m*y-v*w+p*R)-r*(m*S-v*b+g*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],E=e*o-n*a,y=e*l-i*a,S=e*c-r*a,w=n*l-i*o,b=n*c-r*o,R=i*c-r*l,x=h*v-f*m,T=h*g-u*m,P=h*p-d*m,L=f*g-u*v,F=f*p-d*v,z=u*p-d*g,D=E*z-y*F+S*L+w*P-b*T+R*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return t[0]=(o*z-l*F+c*L)*O,t[1]=(i*F-n*z-r*L)*O,t[2]=(v*R-g*b+p*w)*O,t[3]=(u*b-f*R-d*w)*O,t[4]=(l*P-a*z-c*T)*O,t[5]=(e*z-i*P+r*T)*O,t[6]=(g*S-m*R-p*y)*O,t[7]=(h*R-u*S+d*y)*O,t[8]=(a*F-o*P+c*x)*O,t[9]=(n*P-e*F-r*x)*O,t[10]=(m*b-v*S+p*E)*O,t[11]=(f*S-h*b-d*E)*O,t[12]=(o*T-a*L-l*x)*O,t[13]=(e*L-n*T+i*x)*O,t[14]=(v*y-m*w-g*E)*O,t[15]=(h*w-f*y+u*E)*O,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,v=a*h,g=a*f,p=o*f,E=l*c,y=l*h,S=l*f,w=n.x,b=n.y,R=n.z;return i[0]=(1-(v+p))*w,i[1]=(d+S)*w,i[2]=(m-y)*w,i[3]=0,i[4]=(d-S)*b,i[5]=(1-(u+p))*b,i[6]=(g+E)*b,i[7]=0,i[8]=(m+y)*R,i[9]=(g-E)*R,i[10]=(1-(u+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=wi.set(i[0],i[1],i[2]).length();const o=wi.set(i[4],i[5],i[6]).length(),l=wi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),pn.copy(this);const c=1/a,h=1/o,f=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Cn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===Cn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Cs)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Cn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===Cn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Cs)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new C,pn=new Nt,of=new C(0,0,0),lf=new C(1,1,1),qn=new C,zs=new C,nn=new C,Al=new Nt,Rl=new tn;class qe{constructor(t=0,e=0,n=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cf=0;const Cl=new C,Ti=new tn,In=new Nt,Gs=new C,as=new C,hf=new C,uf=new tn,Pl=new C(1,0,0),Ll=new C(0,1,0),Dl=new C(0,0,1),Il={type:"added"},ff={type:"removed"},Ai={type:"childadded",child:null},$r={type:"childremoved",child:null};class Ne extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new C,e=new qe,n=new tn,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new kt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(as,Gs,this.up):In.lookAt(Gs,as,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(In),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Il),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ff),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Il),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new C(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vs extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const df={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(df)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function jr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Wo(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=jr(a,r,t+1/3),this.g=jr(a,r,t),this.b=jr(a,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ne.workingToColorSpace(Be.copy(this),t),Math.round(Xt(Be.r*255,0,255))*65536+Math.round(Xt(Be.g*255,0,255))*256+Math.round(Xt(Be.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,r=Be.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Je){ne.workingToColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Hs);const n=ys(Yn.h,Hs.h,e),i=ys(Yn.s,Hs.s,e),r=ys(Yn.l,Hs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Vt;Vt.NAMES=uh;class Yo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new Yo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Or extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const mn=new C,Un=new C,ta=new C,Nn=new C,Ri=new C,Ci=new C,Ul=new C,ea=new C,na=new C,ia=new C,sa=new ee,ra=new ee,aa=new ee;class cn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){mn.subVectors(i,e),Un.subVectors(n,e),ta.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Un),l=mn.dot(ta),c=Un.dot(Un),h=Un.dot(ta),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return sa.setScalar(0),ra.setScalar(0),aa.setScalar(0),sa.fromBufferAttribute(t,e),ra.fromBufferAttribute(t,n),aa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(sa,r.x),a.addScaledVector(ra,r.y),a.addScaledVector(aa,r.z),a}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),Un.subVectors(t,e),mn.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ri.subVectors(i,n),Ci.subVectors(r,n),ea.subVectors(t,n);const l=Ri.dot(ea),c=Ci.dot(ea);if(l<=0&&c<=0)return e.copy(n);na.subVectors(t,i);const h=Ri.dot(na),f=Ci.dot(na);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ri,a);ia.subVectors(t,r);const d=Ri.dot(ia),m=Ci.dot(ia);if(m>=0&&d<=m)return e.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ci,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Ul.subVectors(r,i),o=(f-h)/(f-h+(d-m)),e.copy(i).addScaledVector(Ul,o);const p=1/(g+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Mn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),ks.subVectors(this.max,os),Pi.subVectors(t.a,os),Li.subVectors(t.b,os),Di.subVectors(t.c,os),Zn.subVectors(Li,Pi),Kn.subVectors(Di,Li),si.subVectors(Pi,Di);let e=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-si.z,si.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,si.z,0,-si.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-si.y,si.x,0];return!oa(e,Pi,Li,Di,ks)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,Pi,Li,Di,ks))?!1:(Ws.crossVectors(Zn,Kn),e=[Ws.x,Ws.y,Ws.z],oa(e,Pi,Li,Di,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fn=[new C,new C,new C,new C,new C,new C,new C,new C],gn=new C,Vs=new Mn,Pi=new C,Li=new C,Di=new C,Zn=new C,Kn=new C,si=new C,os=new C,ks=new C,Ws=new C,ri=new C;function oa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ri.fromArray(s,r);const o=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const we=new C,Xs=new st;let pf=0;class fn extends xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class fh extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dh extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const mf=new Mn,ls=new C,la=new C;class Si{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(la)),this.expandByPoint(ls.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let gf=0;const on=new Nt,ca=new Ne,Ii=new C,sn=new Mn,cs=new Mn,Re=new C;class Pe extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uu(t)?dh:fh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(sn.min,cs.min),sn.expandByPoint(Re),Re.addVectors(sn.max,cs.max),sn.expandByPoint(Re)):(sn.expandByPoint(cs.min),sn.expandByPoint(cs.max))}sn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(t,c),Re.add(Ii)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new C,l[x]=new C;const c=new C,h=new C,f=new C,u=new st,d=new st,m=new st,v=new C,g=new C;function p(x,T,P){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,P),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[x].add(v),o[T].add(v),o[P].add(v),l[x].add(g),l[T].add(g),l[P].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,T=E.length;x<T;++x){const P=E[x],L=P.start,F=P.count;for(let z=L,D=L+F;z<D;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new C,S=new C,w=new C,b=new C;function R(x){w.fromBufferAttribute(i,x),b.copy(w);const T=o[x];y.copy(T),y.sub(w.multiplyScalar(w.dot(T))).normalize(),S.crossVectors(b,T);const L=S.dot(l[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,L)}for(let x=0,T=E.length;x<T;++x){const P=E[x],L=P.start,F=P.count;for(let z=L,D=L+F;z<D;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new fn(u,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _f{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const ke=new C;class ni{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ni(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ha=new C,vf=new C,xf=new kt;class jn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ha.subVectors(n,e).cross(vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xf.getNormalMatrix(t),i=this.coplanarPoint(ha).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Sf=0;class ns extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Ms,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const On=new C,ua=new C,qs=new C,Ys=new C;class ph{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ua.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),Ys.copy(this.origin).sub(ua);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qs),o=Ys.dot(this.direction),l=-Ys.dot(qs),c=Ys.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ua).addScaledVector(qs,u),d}intersectSphere(t,e){if(t.radius<0)return null;On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=n.x-a.x,E=n.y-a.y,y=n.z-a.z,S=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let R,x,T,P,L,F,z,D,O,W,X,it;if(S>=w&&S>=b?(T=l,F=f,O=m,it=p,l>=0?(R=c,x=h,P=u,L=d,z=v,D=g,W=E,X=y):(R=h,x=c,P=d,L=u,z=g,D=v,W=y,X=E)):w>=b?(T=c,F=u,O=v,it=E,c>=0?(R=h,x=l,P=d,L=f,z=g,D=m,W=y,X=p):(R=l,x=h,P=f,L=d,z=m,D=g,W=p,X=y)):(T=h,F=d,O=g,it=y,h>=0?(R=l,x=c,P=f,L=u,z=m,D=v,W=p,X=E):(R=c,x=l,P=u,L=f,z=v,D=m,W=E,X=p)),T===0)return null;const q=R/T,Q=x/T,et=1/T,Ct=P-q*F,Et=L-Q*F,ae=z-q*O,$t=D-Q*O,se=W-q*it,K=X-Q*it,j=se*$t-K*ae,_t=Ct*K-Et*se,Bt=ae*Et-$t*Ct;if(i){if(j<0||_t<0||Bt<0)return null}else if((j<0||_t<0||Bt<0)&&(j>0||_t>0||Bt>0))return null;const Mt=j+_t+Bt;if(Mt===0)return null;const zt=et*(j*F+_t*O+Bt*it);return(Mt>0?zt<0:zt>0)?null:this.at(zt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Nl=new Nt,ai=new ph,Zs=new Si,Fl=new C,Ks=new C,Js=new C,$s=new C,fa=new C,Qs=new C,Ol=new C,js=new C;class te extends Ne{constructor(t=new Pe,e=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(fa.fromBufferAttribute(f,t),a?Qs.addScaledVector(fa,h):Qs.addScaledVector(fa.sub(e),h))}e.add(Qs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(Zs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Zs,Fl)===null||ai.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=a[g.materialIndex],E=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=E,w=y;S<w;S+=3){const b=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);i=tr(this,p,t,n,c,h,f,b,R,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const E=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);i=tr(this,a,t,n,c,h,f,E,y,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=a[g.materialIndex],E=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=E,w=y;S<w;S+=3){const b=S,R=S+1,x=S+2;i=tr(this,p,t,n,c,h,f,b,R,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const E=g,y=g+1,S=g+2;i=tr(this,a,t,n,c,h,f,E,y,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Mf(s,t,e,n,i,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===pi,o),l===null)return null;js.copy(o),js.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(js);return c<e.near||c>e.far?null:{distance:c,point:js.clone(),object:s}}function tr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ks),s.getVertexPosition(l,Js),s.getVertexPosition(c,$s);const h=Mf(s,t,e,n,Ks,Js,$s,Ol);if(h){const f=new C;cn.getBarycoord(Ol,Ks,Js,$s,f),i&&(h.uv=cn.getInterpolatedAttribute(i,o,l,c,f,new st)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,l,c,f,new st)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};cn.getNormal(Ks,Js,$s,u.normal),h.face=u,h.barycoord=f}return h}class Zo extends He{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ce,h=Ce,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir extends fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ui=new Nt,Bl=new Nt,er=[],zl=new Mn,yf=new Nt,hs=new te,us=new Si;class bf extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),zl.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),us.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ui),Bl.multiplyMatrices(n,Ui),hs.matrixWorld=Bl,hs.raycast(t,er);for(let a=0,o=er.length;a<o;a++){const l=er[a];l.instanceId=r,l.object=this,e.push(l)}er.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zo(new Float32Array(i*this.count),i,this.count,Bo,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oi=new Si,Ef=new st(.5,.5),nr=new C;class Ko{constructor(t=new jn,e=new jn,n=new jn,i=new jn,r=new jn,a=new jn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],E=r[12],y=r[13],S=r[14],w=r[15];if(i[0].setComponents(c-a,d-h,p-m,w-E).normalize(),i[1].setComponents(c+a,d+h,p+m,w+E).normalize(),i[2].setComponents(c+o,d+f,p+v,w+y).normalize(),i[3].setComponents(c-o,d-f,p-v,w-y).normalize(),n)i[4].setComponents(l,u,g,S).normalize(),i[5].setComponents(c-l,d-u,p-g,w-S).normalize();else if(i[4].setComponents(c-l,d-u,p-g,w-S).normalize(),e===Cn)i[5].setComponents(c+l,d+u,p+g,w+S).normalize();else if(e===Cs)i[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){oi.center.set(0,0,0);const e=Ef.distanceTo(t.center);return oi.radius=.7071067811865476+e,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(nr.x=i.normal.x>0?t.max.x:t.min.x,nr.y=i.normal.y>0?t.max.y:t.min.y,nr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mh extends He{constructor(t=[],e=mi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wf extends He{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _i extends He{constructor(t,e,n=Ln,i,r,a,o=Ce,l=Ce,c,h=Vn,f=1){if(h!==Vn&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Tf extends _i{constructor(t,e=Ln,n=mi,i,r,a=Ce,o=Ce,l,c=Vn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gh extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vn extends Pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2));function m(v,g,p,E,y,S,w,b,R,x,T){const P=S/R,L=w/x,F=S/2,z=w/2,D=b/2,O=R+1,W=x+1;let X=0,it=0;const q=new C;for(let Q=0;Q<W;Q++){const et=Q*L-z;for(let Ct=0;Ct<O;Ct++){const Et=Ct*P-F;q[v]=Et*E,q[g]=et*y,q[p]=D,c.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[p]=b>0?1:-1,h.push(q.x,q.y,q.z),f.push(Ct/R),f.push(1-Q/x),X+=1}}for(let Q=0;Q<x;Q++)for(let et=0;et<R;et++){const Ct=u+et+O*Q,Et=u+et+O*(Q+1),ae=u+(et+1)+O*(Q+1),$t=u+(et+1)+O*Q;l.push(Ct,Et,$t),l.push(Et,ae,$t),it+=6}o.addGroup(d,it,T),d+=it,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jo extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qi extends Pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const v=[],g=n/2;let p=0;E(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(d,2));function E(){const S=new C,w=new C;let b=0;const R=(e-t)/n;for(let x=0;x<=r;x++){const T=[],P=x/r,L=P*(e-t)+t;for(let F=0;F<=i;F++){const z=F/i,D=z*l+o,O=Math.sin(D),W=Math.cos(D);w.x=L*O,w.y=-P*n+g,w.z=L*W,f.push(w.x,w.y,w.z),S.set(O,R,W).normalize(),u.push(S.x,S.y,S.z),d.push(z,1-P),T.push(m++)}v.push(T)}for(let x=0;x<i;x++)for(let T=0;T<r;T++){const P=v[T][x],L=v[T+1][x],F=v[T+1][x+1],z=v[T][x+1];(t>0||T!==0)&&(h.push(P,L,z),b+=3),(e>0||T!==r-1)&&(h.push(L,F,z),b+=3)}c.addGroup(p,b,0),p+=b}function y(S){const w=m,b=new st,R=new C;let x=0;const T=S===!0?t:e,P=S===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,g*P,0),u.push(0,P,0),d.push(.5,.5),m++;const L=m;for(let F=0;F<=i;F++){const D=F/i*l+o,O=Math.cos(D),W=Math.sin(D);R.x=T*W,R.y=g*P,R.z=T*O,f.push(R.x,R.y,R.z),u.push(0,P,0),b.x=O*.5+.5,b.y=W*.5*P+.5,d.push(b.x,b.y),m++}for(let F=0;F<i;F++){const z=w+F,D=L+F;S===!0?h.push(D,D+1,z):h.push(D+1,D,z),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const ir=new C,sr=new C,da=new C,rr=new cn;class Af extends Pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Ji*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:g,c:p}=rr;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),rr.getNormal(da),f[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,f[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,f[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const y=(E+1)%3,S=f[E],w=f[y],b=rr[h[E]],R=rr[h[y]],x=`${S}_${w}`,T=`${w}_${S}`;T in u&&u[T]?(da.dot(u[T].normal)<=r&&(d.push(b.x,b.y,b.z),d.push(R.x,R.y,R.z)),u[T]=null):x in u||(u[x]={index0:c[E],index1:c[y],normal:da.clone()})}}for(const m in u)if(u[m]){const{index0:v,index1:g}=u[m];ir.fromBufferAttribute(o,v),sr.fromBufferAttribute(o,g),d.push(ir.x,ir.y,ir.z),d.push(sr.x,sr.y,sr.z)}this.setAttribute("position",new de(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,i=[],r=[],a=[],o=new C,l=new Nt;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Xt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Xt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $o extends Dn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Rf extends $o{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Qo(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Gl=new C,Hl=new C,pa=new Qo,ma=new Qo,ga=new Qo;class Cf extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Hl.subVectors(i[0],i[1]).add(i[0]),c=Hl);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Gl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Gl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),pa.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,g),ma.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,g),ga.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ma.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ga.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(pa.calc(l),ma.calc(l),ga.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Pf(s,t){const e=1-s;return e*e*t}function Lf(s,t){return 2*(1-s)*s*t}function Df(s,t){return s*s*t}function bs(s,t,e,n){return Pf(s,t)+Lf(s,e)+Df(s,n)}function If(s,t){const e=1-s;return e*e*e*t}function Uf(s,t){const e=1-s;return 3*e*e*s*t}function Nf(s,t){return 3*(1-s)*s*s*t}function Ff(s,t){return s*s*s*t}function Es(s,t,e,n,i){return If(s,t)+Uf(s,e)+Nf(s,n)+Ff(s,i)}class _h extends Dn{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Es(t,i.x,r.x,a.x,o.x),Es(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Of extends Dn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Es(t,i.x,r.x,a.x,o.x),Es(t,i.y,r.y,a.y,o.y),Es(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vh extends Dn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bf extends Dn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xh extends Dn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(bs(t,i.x,r.x,a.x),bs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Dn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(bs(t,i.x,r.x,a.x),bs(t,i.y,r.y,a.y),bs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sh extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Vl(o,l.x,c.x,h.x,f.x),Vl(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var Mo=Object.freeze({__proto__:null,ArcCurve:Rf,CatmullRomCurve3:Cf,CubicBezierCurve:_h,CubicBezierCurve3:Of,EllipseCurve:$o,LineCurve:vh,LineCurve3:Bf,QuadraticBezierCurve:xh,QuadraticBezierCurve3:zf,SplineCurve:Sh});class Gf extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Mo[i.type]().fromJSON(i))}return this}}class Ur extends Gf{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new xh(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new _h(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new $o(t,e,n,i,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ls extends Ur{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ur().fromJSON(i))}return this}}function Hf(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Mh(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=qf(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,f=l;for(let u=e;u<i;u+=e){const d=s[u],m=s[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ds(r,a,e,o,l,c,0),a}function Mh(s,t,e,n,i){let r;if(i===id(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=kl(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=kl(a/n|0,s[a],s[a+1],r);return r&&ts(r,r.next)&&(Us(r),r=r.next),r}function vi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ts(e,e.next)||Se(e.prev,e,e.next)===0)){if(Us(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ds(s,t,e,n,i,r,a){if(!s)return;!a&&r&&$f(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?kf(s,n,i,r):Vf(s)){t.push(l.i,s.i,c.i),Us(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Wf(vi(s),t),Ds(s,t,e,n,i,r,2)):a===2&&Xf(s,t,e,n,i,r):Ds(vi(s),t,e,n,i,r,1);break}}}function Vf(s){const t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),f=Math.min(o,l,c),u=Math.max(i,r,a),d=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&xs(i,o,r,l,a,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function kf(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Se(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),v=Math.max(o,l,c),g=Math.max(h,f,u),p=yo(d,m,t,e,n),E=yo(v,g,t,e,n);let y=s.prevZ,S=s.nextZ;for(;y&&y.z>=p&&S&&S.z<=E;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&xs(o,h,l,f,c,u,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=d&&S.x<=v&&S.y>=m&&S.y<=g&&S!==i&&S!==a&&xs(o,h,l,f,c,u,S.x,S.y)&&Se(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&xs(o,h,l,f,c,u,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=E;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=g&&S!==i&&S!==a&&xs(o,h,l,f,c,u,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Wf(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ts(n,i)&&bh(n,e,e.next,i)&&Is(n,i)&&Is(i,n)&&(t.push(n.i,e.i,i.i),Us(e),Us(e.next),e=s=i),e=e.next}while(e!==s);return vi(e)}function Xf(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&td(a,o)){let l=Eh(a,o);a=vi(a,a.next),l=vi(l,l.next),Ds(a,t,e,n,i,r,0),Ds(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function qf(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Mh(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(jf(c))}i.sort(Yf);for(let r=0;r<i.length;r++)e=Zf(i[r],e);return e}function Yf(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Zf(s,t){const e=Kf(s,t);if(!e)return t;const n=Eh(e,s);return vi(n,n.next),vi(e,e.next)}function Kf(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(ts(s,e))return e;do{if(ts(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&yh(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const f=Math.abs(i-e.y)/(n-e.x);Is(e,s)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Jf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Jf(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function $f(s,t,e,n){let i=s;do i.z===0&&(i.z=yo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Qf(i)}function Qf(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function yo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function jf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function yh(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function xs(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&yh(s,t,e,n,i,r,a,o)}function td(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ed(s,t)&&(Is(s,t)&&Is(t,s)&&nd(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||ts(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ts(s,t){return s.x===t.x&&s.y===t.y}function bh(s,t,e,n){const i=or(Se(s,t,e)),r=or(Se(s,t,n)),a=or(Se(e,n,s)),o=or(Se(e,n,t));return!!(i!==r&&a!==o||i===0&&ar(s,e,t)||r===0&&ar(s,n,t)||a===0&&ar(e,s,n)||o===0&&ar(e,t,n))}function ar(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function or(s){return s>0?1:s<0?-1:0}function ed(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&bh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Is(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function nd(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Eh(s,t){const e=bo(s.i,s.x,s.y),n=bo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kl(s,t,e,n){const i=bo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Us(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function id(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class sd{static triangulate(t,e,n=2){return Hf(t,e,n)}}class zn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return zn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Wl(t),Xl(n,t);let a=t.length;e.forEach(Wl);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Xl(n,e[l]);const o=sd.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Wl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Xl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class jo extends Pe{constructor(t=new Ls([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:rd;let y,S=!1,w,b,R,x;if(p){y=p.getSpacedPoints(h),S=!0,u=!1;const tt=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,tt),b=new C,R=new C,x=new C}u||(g=0,d=0,m=0,v=0);const T=o.extractPoints(c);let P=T.shape;const L=T.holes;if(!zn.isClockWise(P)){P=P.reverse();for(let tt=0,rt=L.length;tt<rt;tt++){const at=L[tt];zn.isClockWise(at)&&(L[tt]=at.reverse())}}function z(tt){const at=10000000000000001e-36;let ot=tt[0];for(let ht=1;ht<=tt.length;ht++){const Ft=ht%tt.length,It=tt[Ft],Gt=It.x-ot.x,Wt=It.y-ot.y,I=Gt*Gt+Wt*Wt,oe=Math.max(Math.abs(It.x),Math.abs(It.y),Math.abs(ot.x),Math.abs(ot.y)),Qt=at*oe*oe;if(I<=Qt){tt.splice(Ft,1),ht--;continue}ot=It}}z(P),L.forEach(z);const D=L.length,O=P;for(let tt=0;tt<D;tt++){const rt=L[tt];P=P.concat(rt)}function W(tt,rt,at){return rt||ie("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(rt,at)}const X=P.length;function it(tt,rt,at){let ot,ht,Ft;const It=tt.x-rt.x,Gt=tt.y-rt.y,Wt=at.x-tt.x,I=at.y-tt.y,oe=It*It+Gt*Gt,Qt=It*I-Gt*Wt;if(Math.abs(Qt)>Number.EPSILON){const A=Math.sqrt(oe),_=Math.sqrt(Wt*Wt+I*I),B=rt.x-Gt/A,V=rt.y+It/A,Y=at.x-I/_,lt=at.y+Wt/_,ct=((Y-B)*I-(lt-V)*Wt)/(It*I-Gt*Wt);ot=B+It*ct-tt.x,ht=V+Gt*ct-tt.y;const Z=ot*ot+ht*ht;if(Z<=2)return new st(ot,ht);Ft=Math.sqrt(Z/2)}else{let A=!1;It>Number.EPSILON?Wt>Number.EPSILON&&(A=!0):It<-Number.EPSILON?Wt<-Number.EPSILON&&(A=!0):Math.sign(Gt)===Math.sign(I)&&(A=!0),A?(ot=-Gt,ht=It,Ft=Math.sqrt(oe)):(ot=It,ht=Gt,Ft=Math.sqrt(oe/2))}return new st(ot/Ft,ht/Ft)}const q=[];for(let tt=0,rt=O.length,at=rt-1,ot=tt+1;tt<rt;tt++,at++,ot++)at===rt&&(at=0),ot===rt&&(ot=0),q[tt]=it(O[tt],O[at],O[ot]);const Q=[];let et,Ct=q.concat();for(let tt=0,rt=D;tt<rt;tt++){const at=L[tt];et=[];for(let ot=0,ht=at.length,Ft=ht-1,It=ot+1;ot<ht;ot++,Ft++,It++)Ft===ht&&(Ft=0),It===ht&&(It=0),et[ot]=it(at[ot],at[Ft],at[It]);Q.push(et),Ct=Ct.concat(et)}let Et;if(g===0)Et=zn.triangulateShape(O,L);else{const tt=[],rt=[];for(let at=0;at<g;at++){const ot=at/g,ht=d*Math.cos(ot*Math.PI/2),Ft=m*Math.sin(ot*Math.PI/2)+v;for(let It=0,Gt=O.length;It<Gt;It++){const Wt=W(O[It],q[It],Ft);_t(Wt.x,Wt.y,-ht),ot===0&&tt.push(Wt)}for(let It=0,Gt=D;It<Gt;It++){const Wt=L[It];et=Q[It];const I=[];for(let oe=0,Qt=Wt.length;oe<Qt;oe++){const A=W(Wt[oe],et[oe],Ft);_t(A.x,A.y,-ht),ot===0&&I.push(A)}ot===0&&rt.push(I)}}Et=zn.triangulateShape(tt,rt)}const ae=Et.length,$t=m+v;for(let tt=0;tt<X;tt++){const rt=u?W(P[tt],Ct[tt],$t):P[tt];S?(R.copy(w.normals[0]).multiplyScalar(rt.x),b.copy(w.binormals[0]).multiplyScalar(rt.y),x.copy(y[0]).add(R).add(b),_t(x.x,x.y,x.z)):_t(rt.x,rt.y,0)}for(let tt=1;tt<=h;tt++)for(let rt=0;rt<X;rt++){const at=u?W(P[rt],Ct[rt],$t):P[rt];S?(R.copy(w.normals[tt]).multiplyScalar(at.x),b.copy(w.binormals[tt]).multiplyScalar(at.y),x.copy(y[tt]).add(R).add(b),_t(x.x,x.y,x.z)):_t(at.x,at.y,f/h*tt)}for(let tt=g-1;tt>=0;tt--){const rt=tt/g,at=d*Math.cos(rt*Math.PI/2),ot=m*Math.sin(rt*Math.PI/2)+v;for(let ht=0,Ft=O.length;ht<Ft;ht++){const It=W(O[ht],q[ht],ot);_t(It.x,It.y,f+at)}for(let ht=0,Ft=L.length;ht<Ft;ht++){const It=L[ht];et=Q[ht];for(let Gt=0,Wt=It.length;Gt<Wt;Gt++){const I=W(It[Gt],et[Gt],ot);S?_t(I.x,I.y+y[h-1].y,y[h-1].x+at):_t(I.x,I.y,f+at)}}}se(),K();function se(){const tt=i.length/3;if(u){let rt=0,at=X*rt;for(let ot=0;ot<ae;ot++){const ht=Et[ot];Bt(ht[2]+at,ht[1]+at,ht[0]+at)}rt=h+g*2,at=X*rt;for(let ot=0;ot<ae;ot++){const ht=Et[ot];Bt(ht[0]+at,ht[1]+at,ht[2]+at)}}else{for(let rt=0;rt<ae;rt++){const at=Et[rt];Bt(at[2],at[1],at[0])}for(let rt=0;rt<ae;rt++){const at=Et[rt];Bt(at[0]+X*h,at[1]+X*h,at[2]+X*h)}}n.addGroup(tt,i.length/3-tt,0)}function K(){const tt=i.length/3;let rt=0;j(O,rt),rt+=O.length;for(let at=0,ot=L.length;at<ot;at++){const ht=L[at];j(ht,rt),rt+=ht.length}n.addGroup(tt,i.length/3-tt,1)}function j(tt,rt){let at=tt.length;for(;--at>=0;){const ot=at;let ht=at-1;ht<0&&(ht=tt.length-1);for(let Ft=0,It=h+g*2;Ft<It;Ft++){const Gt=X*Ft,Wt=X*(Ft+1),I=rt+ot+Gt,oe=rt+ht+Gt,Qt=rt+ht+Wt,A=rt+ot+Wt;Mt(I,oe,Qt,A)}}}function _t(tt,rt,at){l.push(tt),l.push(rt),l.push(at)}function Bt(tt,rt,at){zt(tt),zt(rt),zt(at);const ot=i.length/3,ht=E.generateTopUV(n,i,ot-3,ot-2,ot-1);he(ht[0]),he(ht[1]),he(ht[2])}function Mt(tt,rt,at,ot){zt(tt),zt(rt),zt(ot),zt(rt),zt(at),zt(ot);const ht=i.length/3,Ft=E.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);he(Ft[0]),he(Ft[1]),he(Ft[3]),he(Ft[1]),he(Ft[2]),he(Ft[3])}function zt(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function he(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ad(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Mo[i.type]().fromJSON(i)),new jo(n,t.options)}}const rd={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],m=t[i*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-f),new st(u,1-m),new st(v,1-p)]:[new st(o,1-l),new st(h,1-f),new st(d,1-m),new st(g,1-p)]}};function ad(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class is extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const E=p*u-a;for(let y=0;y<c;y++){const S=y*f-r;m.push(S,-E,0),v.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const y=E+c*p,S=E+c*(p+1),w=E+1+c*(p+1),b=E+1+c*p;d.push(y,S,b),d.push(S,w,b)}this.setIndex(d),this.setAttribute("position",new de(m,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.widthSegments,t.heightSegments)}}class ws extends Pe{constructor(t=new Ls([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new de(i,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(a,2));function c(h){const f=i.length/3,u=h.extractPoints(e);let d=u.shape;const m=u.holes;zn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const E=m[g];zn.isClockWise(E)===!0&&(m[g]=E.reverse())}const v=zn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const E=m[g];d=d.concat(E)}for(let g=0,p=d.length;g<p;g++){const E=d[g];i.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let g=0,p=v.length;g<p;g++){const E=v[g],y=E[0]+f,S=E[1]+f,w=E[2]+f;n.push(y,S,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return od(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new ws(n,t.curveSegments)}}function od(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class tl extends Pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new C,u=new C,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const E=[],y=p/n,S=a+y*o,w=t*Math.cos(S),b=Math.sqrt(t*t-w*w);let R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){const T=x/e,P=i+T*r;f.x=-b*Math.cos(P),f.y=w,f.z=b*Math.sin(P),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(T+R,1-y),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const y=h[p][E+1],S=h[p][E],w=h[p+1][E],b=h[p+1][E+1];(p!==0||a>0)&&d.push(y,S,b),(p!==n-1||l<Math.PI)&&d.push(S,w,b)}this.setIndex(d),this.setAttribute("position",new de(m,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ld extends Pe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new C,r=new C;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],u=f.start,d=f.count;for(let m=u,v=u+d;m<v;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),E=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,E),ql(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),ql(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new de(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ql(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}function es(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Yl(i))i.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Yl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function We(s){const t={};for(let e=0;e<s.length;e++){const n=es(s[e]);for(const i in n)t[i]=n[i]}return t}function Yl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function cd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function wh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const el={clone:es,merge:We};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(i.value);break;case"v2":this.uniforms[n].value=new st().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Nt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class fd extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Eo extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dd extends ns{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Uo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pd extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class md extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nl extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const _a=new Nt,Zl=new C,Kl=new C;class Th{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_a,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lr=new C,cr=new tn,En=new C;class il extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lr,cr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,En.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(lr,cr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new C,Jl=new st,$l=new st;class $e extends il{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,$l),e.subVectors($l,Jl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ji*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class gd extends Th{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}}class _d extends nl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Br extends il{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class vd extends Th{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xd extends nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new vd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Sd extends nl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Md extends Pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Ni=-90,Fi=1;class yd extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Ni,Fi,t,e);i.layers=this.layers,this.add(i);const r=new $e(Ni,Fi,t,e);r.layers=this.layers,this.add(r);const a=new $e(Ni,Fi,t,e);a.layers=this.layers,this.add(a);const o=new $e(Ni,Fi,t,e);o.layers=this.layers,this.add(o);const l=new $e(Ni,Fi,t,e);l.layers=this.layers,this.add(l);const c=new $e(Ni,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bd extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ed{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=wd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function wd(){this._document.hidden===!1&&this.reset()}class wo extends _f{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Ql=new Nt;class Td{constructor(t,e,n=0,i=1/0){this.ray=new ph(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ql.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ql),this}intersectObject(t,e=!0,n=[]){return To(t,this,n,e),n.sort(jl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)To(t[i],this,n,e);return n.sort(jl),n}}function jl(s,t){return s.distance-t.distance}function To(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)To(r[a],t,e,!0)}}class Ah{static{Ah.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const tc=new C,hr=new C,Oi=new C,Bi=new C,va=new C,Ad=new C,Rd=new C;class Cd{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){tc.subVectors(t,this.start),hr.subVectors(this.end,this.start);const n=hr.dot(hr);if(n===0)return 0;let r=hr.dot(tc)/n;return e&&(r=Xt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Ad,n=Rd){const i=10000000000000001e-32;let r,a;const o=this.start,l=t.start,c=this.end,h=t.end;Oi.subVectors(c,o),Bi.subVectors(h,l),va.subVectors(o,l);const f=Oi.dot(Oi),u=Bi.dot(Bi),d=Bi.dot(va);if(f<=i&&u<=i)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(f<=i)r=0,a=d/u,a=Xt(a,0,1);else{const m=Oi.dot(va);if(u<=i)a=0,r=Xt(-m/f,0,1);else{const v=Oi.dot(Bi),g=f*u-v*v;g!==0?r=Xt((v*d-m*u)/g,0,1):r=0,a=(v*r+d)/u,a<0?(a=0,r=Xt(-m/f,0,1)):a>1&&(a=1,r=Xt((v-m)/f,0,1))}}return e.copy(o).addScaledVector(Oi,r),n.copy(l).addScaledVector(Bi,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function ec(s,t,e,n){const i=Pd(n);switch(e){case ah:return s*t;case Bo:return s*t/i.components*i.byteLength;case zo:return s*t/i.components*i.byteLength;case gi:return s*t*2/i.components*i.byteLength;case Go:return s*t*2/i.components*i.byteLength;case oh:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case Ho:return s*t*4/i.components*i.byteLength;case xr:case Sr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mr:case yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(s,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(s,8)*Math.max(t,8)/2;case Za:case Ka:case $a:case Qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Tr:case ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case mo:case go:case _o:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vo:case xo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ar:case So:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pd(s){switch(s){case je:case nh:return{byteLength:1,components:1};case As:case ih:case Sn:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Ln:case No:case hn:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rh(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ld(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Am=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Dd,alphahash_pars_fragment:Id,alphamap_fragment:Ud,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:Bd,aomap_pars_fragment:zd,batching_pars_vertex:Gd,batching_vertex:Hd,begin_vertex:Vd,beginnormal_vertex:kd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Jd,color_fragment:$d,color_pars_fragment:Qd,color_pars_vertex:jd,color_vertex:tp,common:ep,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:sp,displacementmap_vertex:rp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:hp,envmap_common_pars_fragment:up,envmap_pars_fragment:fp,envmap_pars_vertex:dp,envmap_physical_pars_fragment:Ep,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:_p,fog_pars_fragment:vp,gradientmap_pars_fragment:xp,lightmap_pars_fragment:Sp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:yp,lights_pars_begin:bp,lights_toon_fragment:wp,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ap,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Ip,lightprobes_pars_fragment:Up,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Bp,map_fragment:zp,map_pars_fragment:Gp,map_particle_fragment:Hp,map_particle_pars_fragment:Vp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:Zp,morphtarget_vertex:Kp,normal_fragment_begin:Jp,normal_fragment_maps:$p,normal_pars_fragment:Qp,normal_pars_vertex:jp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:fm,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:_m,skinbase_vertex:vm,skinning_pars_vertex:xm,skinning_vertex:Sm,skinnormal_vertex:Mm,specularmap_fragment:ym,specularmap_pars_fragment:bm,tonemapping_fragment:Em,tonemapping_pars_fragment:wm,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Dm,background_frag:Im,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:Fm,cube_frag:Om,depth_vert:Bm,depth_frag:zm,distance_vert:Gm,distance_frag:Hm,equirect_vert:Vm,equirect_frag:km,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:Zm,meshlambert_frag:Km,meshmatcap_vert:Jm,meshmatcap_frag:$m,meshnormal_vert:Qm,meshnormal_frag:jm,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:a0,points_frag:o0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},ut={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Qe={basic:{uniforms:We([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:We([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:We([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:We([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:We([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:We([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:We([ut.points,ut.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:We([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:We([ut.common,ut.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:We([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:We([ut.sprite,ut.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:We([ut.common,ut.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:We([ut.lights,ut.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Qe.physical={uniforms:We([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const ur={r:0,b:0,g:0},f0=new Nt,Ch=new kt;Ch.set(-1,0,0,0,1,0,0,0,1);function d0(s,t,e,n,i,r){const a=new Vt(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(E){let y=E.isScene===!0?E.background:null;if(y&&y.isTexture){const S=E.backgroundBlurriness>0;y=t.get(y,S)}return y}function m(E){let y=!1;const S=d(E);S===null?g(a,o):S&&S.isColor&&(g(S,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(E,y){const S=d(y);S&&(S.isCubeTexture||S.mapping===Fr)?(c===void 0&&(c=new te(new vn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:es(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ch),c.material.toneMapped=ne.getTransfer(S.colorSpace)!==ue,(h!==S||f!==S.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new te(new is(2,2),new en({name:"BackgroundMaterial",uniforms:es(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ne.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,y){E.getRGB(ur,wh(s)),e.buffers.color.setClear(ur.r,ur.g,ur.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:m,addToRenderList:v,dispose:p}}function p0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(L,F,z,D,O){let W=!1;const X=f(L,D,z,F);r!==X&&(r=X,c(r.object)),W=d(L,D,z,O),W&&m(L,D,z,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(L,F,z,D),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function f(L,F,z,D){const O=D.wireframe===!0;let W=n[F.id];W===void 0&&(W={},n[F.id]=W);const X=L.isInstancedMesh===!0?L.id:0;let it=W[X];it===void 0&&(it={},W[X]=it);let q=it[z.id];q===void 0&&(q={},it[z.id]=q);let Q=q[O];return Q===void 0&&(Q=u(l()),q[O]=Q),Q}function u(L){const F=[],z=[],D=[];for(let O=0;O<e;O++)F[O]=0,z[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:D,object:L,attributes:{},index:null}}function d(L,F,z,D){const O=r.attributes,W=F.attributes;let X=0;const it=z.getAttributes();for(const q in it)if(it[q].location>=0){const et=O[q];let Ct=W[q];if(Ct===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),et===void 0||et.attribute!==Ct||Ct&&et.data!==Ct.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function m(L,F,z,D){const O={},W=F.attributes;let X=0;const it=z.getAttributes();for(const q in it)if(it[q].location>=0){let et=W[q];et===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const Ct={};Ct.attribute=et,et&&et.data&&(Ct.data=et.data),O[q]=Ct,X++}r.attributes=O,r.attributesNum=X,r.index=D}function v(){const L=r.newAttributes;for(let F=0,z=L.length;F<z;F++)L[F]=0}function g(L){p(L,0)}function p(L,F){const z=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;z[L]=1,D[L]===0&&(s.enableVertexAttribArray(L),D[L]=1),O[L]!==F&&(s.vertexAttribDivisor(L,F),O[L]=F)}function E(){const L=r.newAttributes,F=r.enabledAttributes;for(let z=0,D=F.length;z<D;z++)F[z]!==L[z]&&(s.disableVertexAttribArray(z),F[z]=0)}function y(L,F,z,D,O,W,X){X===!0?s.vertexAttribIPointer(L,F,z,O,W):s.vertexAttribPointer(L,F,z,D,O,W)}function S(L,F,z,D){v();const O=D.attributes,W=z.getAttributes(),X=F.defaultAttributeValues;for(const it in W){const q=W[it];if(q.location>=0){let Q=O[it];if(Q===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const et=Q.normalized,Ct=Q.itemSize,Et=t.get(Q);if(Et===void 0)continue;const ae=Et.buffer,$t=Et.type,se=Et.bytesPerElement,K=$t===s.INT||$t===s.UNSIGNED_INT||Q.gpuType===No;if(Q.isInterleavedBufferAttribute){const j=Q.data,_t=j.stride,Bt=Q.offset;if(j.isInstancedInterleavedBuffer){for(let Mt=0;Mt<q.locationSize;Mt++)p(q.location+Mt,j.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)g(q.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Mt=0;Mt<q.locationSize;Mt++)y(q.location+Mt,Ct/q.locationSize,$t,et,_t*se,(Bt+Ct/q.locationSize*Mt)*se,K)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,Q.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<q.locationSize;j++)g(q.location+j);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let j=0;j<q.locationSize;j++)y(q.location+j,Ct/q.locationSize,$t,et,Ct*se,Ct/q.locationSize*j*se,K)}}else if(X!==void 0){const et=X[it];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(q.location,et);break;case 3:s.vertexAttrib3fv(q.location,et);break;case 4:s.vertexAttrib4fv(q.location,et);break;default:s.vertexAttrib1fv(q.location,et)}}}}E()}function w(){T();for(const L in n){const F=n[L];for(const z in F){const D=F[z];for(const O in D){const W=D[O];for(const X in W)h(W[X].object),delete W[X];delete D[O]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const z in F){const D=F[z];for(const O in D){const W=D[O];for(const X in W)h(W[X].object),delete W[X];delete D[O]}}delete n[L.id]}function R(L){for(const F in n){const z=n[F];for(const D in z){const O=z[D];if(O[L.id]===void 0)continue;const W=O[L.id];for(const X in W)h(W[X].object),delete W[X];delete O[L.id]}}}function x(L){for(const F in n){const z=n[F],D=L.isInstancedMesh===!0?L.id:0,O=z[D];if(O!==void 0){for(const W in O){const X=O[W];for(const it in X)h(X[it].object),delete X[it];delete O[W]}delete z[D],Object.keys(z).length===0&&delete n[F]}}}function T(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function m0(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function g0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==un&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==je&&R!==hn&&!x&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:S,maxSamples:w,samples:b}}function _0(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new jn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const E=r?0:n,y=E*4;let S=p.clippingState||null;l.value=S,S=h(m,u,y,d);for(let w=0;w!==y;++w)S[w]=e[w];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,S=d;y!==v;++y,S+=4)a.copy(f[y]).applyMatrix4(E,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}const Yi=4,v0=6,x0=20,S0=256,fs=new Br,nc=new Vt;let xa=null,Sa=0,Ma=0,ya=!1;const M0=new C,li=new C;class Ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=M0}=r;xa=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xa,Sa,Ma),this._renderer.xr.enabled=ya,t.scissorTest=!1,zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xa=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Sn,format:un,colorSpace:Cr,depthBuffer:!1},i=ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=y0(r)),this._blurMaterial=E0(r,t,e),this._ggxMaterial=b0(r,t,e)}return i}_compileMaterial(t){const e=new te(new Pe,t);this._renderer.compile(e,fs)}_sceneToCubeUV(t,e,n,i,r){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(nc),f.toneMapping=xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new te(new vn,new Qi({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,p=!0):(g.color.copy(nc),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const w=this._cubeSize;zi(i,S*w,y>2?w:0,w,w),f.setRenderTarget(i),p&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===mi||t.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;zi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-Yi?n-m+Yi:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,zi(r,g,p,3*v,2*v),i.setRenderTarget(r),i.render(o,fs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,zi(t,g,p,3*v,2*v),i.setRenderTarget(t),i.render(o,fs)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],f=3*h*(i>this._lodMax-Yi?i-this._lodMax+Yi:0),u=4*(this._cubeSize-h);zi(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,fs)}}function y0(s){const t=[],e=[];let n=s;const i=s-Yi+1+v0;for(let r=0;r<i;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let p=0;p<f;p++){const E=p%3*2/3-1,y=p>2?0:-1,S=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];m.set(S,d*u*p);for(let w=0;w<u;w++){const b=h[w*2]*2-1,R=h[w*2+1]*2-1;p===0?li.set(1,R,b):p===1?li.set(-b,1,-R):p===2?li.set(-b,R,1):p===3?li.set(-1,R,-b):p===4?li.set(-b,-1,R):li.set(b,R,-1),li.toArray(v,(p*u+w)*d)}}const g=new Pe;g.setAttribute("position",new fn(m,d)),g.setAttribute("outputDirection",new fn(v,d)),e.push(new te(g,null)),n>Yi&&n--}return{lodMeshes:e,sizeLods:t}}function ic(s,t,e){const n=new Ze(s,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function b0(s,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:S0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function E0(s,t,e){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:x0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function sc(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function rc(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function zr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ph extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new mh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Gn});r.uniforms.tEquirect.value=e;const a=new te(i,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=Ge),new yd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function w0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===kr||d===Wr)if(t.has(u)){const m=t.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new Ph(m.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,m=d===kr||d===Wr,v=d===mi||d===ji;if(m||v){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ao(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const E=u.image;return m&&E&&E.height>0||v&&E&&l(E)?(n===null&&(n=new Ao(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===kr?u.mapping=mi:d===Wr&&(u.mapping=ji),u}function l(u){let d=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function T0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ki("WebGLRenderer: "+n+" extension not supported."),i}}}function A0(s,t,e,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(d!==null){const E=d.array;v=d.version;for(let y=0,S=E.length;y<S;y+=3){const w=E[y+0],b=E[y+1],R=E[y+2];u.push(w,b,b,R,R,w)}}else{const E=m.array;v=m.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const w=y+0,b=y+1,R=y+2;u.push(w,b,b,R,R,w)}}const g=new(m.count>=65535?dh:fh)(u,1);g.version=v;const p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function R0(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g];e.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function C0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function P0(s,t,e){const n=new WeakMap,i=new ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let S=o.attributes.position.count*y,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const b=new Float32Array(S*w*4*f),R=new hh(b,S,w,f);R.type=hn,R.needsUpdate=!0;const x=y*4;for(let P=0;P<f;P++){const L=g[P],F=p[P],z=E[P],D=S*w*4*P;for(let O=0;O<L.count;O++){const W=O*x;d===!0&&(i.fromBufferAttribute(L,O),b[D+W+0]=i.x,b[D+W+1]=i.y,b[D+W+2]=i.z,b[D+W+3]=0),m===!0&&(i.fromBufferAttribute(F,O),b[D+W+4]=i.x,b[D+W+5]=i.y,b[D+W+6]=i.z,b[D+W+7]=0),v===!0&&(i.fromBufferAttribute(z,O),b[D+W+8]=i.x,b[D+W+9]=i.y,b[D+W+10]=i.z,b[D+W+11]=z.itemSize===4?i.w:1)}}u={count:f,texture:R,size:new st(S,w)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function L0(s,t,e,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const D0={[Zc]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[$c]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function I0(s,t,e,n,i,r){const a=new Ze(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Pe;c.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new de([0,2,0,0,2,0],2));const h=new fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new te(c,h),u=new Br(-1,1,1,-1,0,1);let d=null,m=null,v=!1,g,p=null,E=[],y=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let b=0;b<E.length;b++){const R=E[b];R.setSize&&R.setSize(S,w)}},this.setEffects=function(S){E=S,y=E.length>0&&E[0].isRenderPass===!0;const w=a.width,b=a.height;E.length>0&&o===null&&(o=new Ze(w,b,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new Ze(w,b,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){const x=E[R];x.setSize&&x.setSize(w,b)}},this.begin=function(S,w){if(v||S.toneMapping===xn&&E.length===0)return!1;if(p=w,w!==null){const b=w.width,R=w.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return y===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=xn,!0},this.hasRenderPass=function(){return y},this.end=function(S,w){S.toneMapping=g,v=!0;let b=a,R=o;for(let x=0;x<E.length;x++){const T=E[x];T.enabled!==!1&&(T.render(S,R,b,w),T.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(d!==S.outputColorSpace||m!==S.toneMapping){d=S.outputColorSpace,m=S.toneMapping,h.defines={},ne.getTransfer(d)===ue&&(h.defines.SRGB_TRANSFER="");const x=D0[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(p),S.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Lh=new He,Ro=new _i(1,1),Dh=new hh,Ih=new af,Uh=new mh,ac=[],oc=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function ss(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ac[i];if(r===void 0&&(r=new Float32Array(i),ac[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Te(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gr(s,t){let e=oc[t];e===void 0&&(e=new Int32Array(t),oc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function U0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function N0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function F0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function O0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function B0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;hc.set(n),s.uniformMatrix2fv(this.addr,!1,hc),Ae(e,n)}}function z0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;cc.set(n),s.uniformMatrix3fv(this.addr,!1,cc),Ae(e,n)}}function G0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;lc.set(n),s.uniformMatrix4fv(this.addr,!1,lc),Ae(e,n)}}function H0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function V0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function k0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function W0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function X0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function Y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function Z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function K0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ro.compareFunction=e.isReversedDepthBuffer()?ko:Vo,r=Ro):r=Lh,e.setTexture2D(t||r,i)}function J0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ih,i)}function $0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uh,i)}function Q0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Dh,i)}function j0(s){switch(s){case 5126:return U0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return G0;case 5124:case 35670:return H0;case 35667:case 35671:return V0;case 35668:case 35672:return k0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Q0}}function tg(s,t){s.uniform1fv(this.addr,t)}function eg(s,t){const e=ss(t,this.size,2);s.uniform2fv(this.addr,e)}function ng(s,t){const e=ss(t,this.size,3);s.uniform3fv(this.addr,e)}function ig(s,t){const e=ss(t,this.size,4);s.uniform4fv(this.addr,e)}function sg(s,t){const e=ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function rg(s,t){const e=ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ag(s,t){const e=ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function og(s,t){s.uniform1iv(this.addr,t)}function lg(s,t){s.uniform2iv(this.addr,t)}function cg(s,t){s.uniform3iv(this.addr,t)}function hg(s,t){s.uniform4iv(this.addr,t)}function ug(s,t){s.uniform1uiv(this.addr,t)}function fg(s,t){s.uniform2uiv(this.addr,t)}function dg(s,t){s.uniform3uiv(this.addr,t)}function pg(s,t){s.uniform4uiv(this.addr,t)}function mg(s,t,e){const n=this.cache,i=t.length,r=Gr(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ro:a=Lh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function gg(s,t,e){const n=this.cache,i=t.length,r=Gr(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ih,r[a])}function _g(s,t,e){const n=this.cache,i=t.length,r=Gr(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Uh,r[a])}function vg(s,t,e){const n=this.cache,i=t.length,r=Gr(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Dh,r[a])}function xg(s){switch(s){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}class Sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j0(e.type)}}class Mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}}class yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function uc(s,t){s.seq.push(t),s.map[t.id]=t}function bg(s,t,e){const n=s.name,i=n.length;for(ba.lastIndex=0;;){const r=ba.exec(n),a=ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uc(e,c===void 0?new Sg(o,s,t):new Mg(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new yg(o),uc(e,f)),e=f}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);bg(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function fc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Eg=37297;let wg=0;function Tg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const dc=new kt;function Ag(s){ne._getMatrix(dc,ne.workingColorSpace,s);const t=`mat3( ${dc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Pr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Tg(s.getShaderSource(t),o)}else return r}function Rg(s,t){const e=Ag(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Cg={[Zc]:"Linear",[Kc]:"Reinhard",[Jc]:"Cineon",[$c]:"ACESFilmic",[jc]:"AgX",[th]:"Neutral",[Qc]:"Custom"};function Pg(s,t){const e=Cg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fr=new C;function Lg(){ne.getLuminanceCoefficients(fr);const s=fr.x.toFixed(4),t=fr.y.toFixed(4),e=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Ig(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ss(s){return s!==""}function mc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(s){return s.replace(Ng,Og)}const Fg=new Map;function Og(s,t){let e=Kt[t];if(e===void 0){const n=Fg.get(t);if(n!==void 0)e=Kt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Co(e)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(s){return s.replace(Bg,zg)}function zg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Gg={[vr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function Hg(s){return Gg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Vg={[mi]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function kg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Vg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Wg={[ji]:"ENVMAP_MODE_REFRACTION"};function Xg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Wg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qg={[Uo]:"ENVMAP_BLENDING_MULTIPLY",[yu]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Yg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":qg[s.combine]||"ENVMAP_BLENDING_NONE"}function Zg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kg(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Hg(e),c=kg(e),h=Xg(e),f=Yg(e),u=Zg(e),d=Dg(e),m=Ig(r),v=i.createProgram();let g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ss).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(g=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==xn?Pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Rg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Co(a),a=mc(a,e),a=gc(a,e),o=Co(o),o=mc(o,e),o=gc(o,e),a=_c(a),o=_c(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+g+a,S=E+p+o,w=fc(i,i.VERTEX_SHADER,y),b=fc(i,i.FRAGMENT_SHADER,S);i.attachShader(v,w),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(v)||"",z=i.getShaderInfoLog(w)||"",D=i.getShaderInfoLog(b)||"",O=F.trim(),W=z.trim(),X=D.trim();let it=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,w,b);else{const Q=pc(i,w,"vertex"),et=pc(i,b,"fragment");ie("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+Q+`
`+et)}else O!==""?Ht("WebGLProgram: Program Info Log:",O):(W===""||X==="")&&(q=!1);q&&(L.diagnostics={runnable:it,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:X,prefix:p}})}i.deleteShader(w),i.deleteShader(b),x=new br(i,v),T=Ug(i,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(v,Eg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=b,this}let Jg=0;class $g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qg(t),e.set(t,n)),n}}class Qg{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}}function jg(s){return s===gi||s===Tr||s===Ar}function t_(s,t,e,n,i,r){const a=new qo,o=new $g,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,P,L,F,z){const D=L.fog,O=F.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||W,X),q=it&&it.mapping===Fr?it.image.height:null,Q=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ct=et!==void 0?et.length:0;let Et=0;O.morphAttributes.position!==void 0&&(Et=1),O.morphAttributes.normal!==void 0&&(Et=2),O.morphAttributes.color!==void 0&&(Et=3);let ae,$t,se,K;if(Q){const _e=Qe[Q];ae=_e.vertexShader,$t=_e.fragmentShader}else{ae=x.vertexShader,$t=x.fragmentShader;const _e=o.getVertexShaderStage(x),le=o.getFragmentShaderStage(x);o.update(x,_e,le),se=_e.id,K=le.id}const j=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,Mt=F.isBatchedMesh===!0,zt=!!x.map,he=!!x.matcap,tt=!!it,rt=!!x.aoMap,at=!!x.lightMap,ot=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,Ft=!!x.displacementMap,It=!!x.emissiveMap,Gt=!!x.metalnessMap,Wt=!!x.roughnessMap,I=x.anisotropy>0,oe=x.clearcoat>0,Qt=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,B=x.sheen>0,V=x.transmission>0,Y=I&&!!x.anisotropyMap,lt=oe&&!!x.clearcoatMap,ct=oe&&!!x.clearcoatNormalMap,Z=oe&&!!x.clearcoatRoughnessMap,$=_&&!!x.iridescenceMap,ft=_&&!!x.iridescenceThicknessMap,Pt=B&&!!x.sheenColorMap,gt=B&&!!x.sheenRoughnessMap,dt=!!x.specularMap,Lt=!!x.specularColorMap,Ot=!!x.specularIntensityMap,qt=V&&!!x.transmissionMap,N=V&&!!x.thicknessMap,pt=!!x.gradientMap,J=!!x.alphaMap,mt=x.alphaTest>0,St=!!x.alphaHash,nt=!!x.extensions;let Dt=xn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const At={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:$t,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:he,envMap:tt,envMapMode:tt&&it.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:at,bumpMap:ot,normalMap:ht,displacementMap:Ft,emissiveMap:It,normalMapObjectSpace:ht&&x.normalMapType===Tu,normalMapTangentSpace:ht&&x.normalMapType===Rr,packedNormalMap:ht&&x.normalMapType===Rr&&jg(x.normalMap.format),metalnessMap:Gt,roughnessMap:Wt,anisotropy:I,anisotropyMap:Y,clearcoat:oe,clearcoatMap:lt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Z,dispersion:Qt,retroreflection:A,iridescence:_,iridescenceMap:$,iridescenceThicknessMap:ft,sheen:B,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:dt,specularColorMap:Lt,specularIntensityMap:Ot,transmission:V,transmissionMap:qt,thicknessMap:N,gradientMap:pt,opaque:x.transparent===!1&&x.blending===Ms&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:mt,alphaHash:St,combine:x.combine,mapUv:zt&&m(x.map.channel),aoMapUv:rt&&m(x.aoMap.channel),lightMapUv:at&&m(x.lightMap.channel),bumpMapUv:ot&&m(x.bumpMap.channel),normalMapUv:ht&&m(x.normalMap.channel),displacementMapUv:Ft&&m(x.displacementMap.channel),emissiveMapUv:It&&m(x.emissiveMap.channel),metalnessMapUv:Gt&&m(x.metalnessMap.channel),roughnessMapUv:Wt&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:lt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&m(x.sheenRoughnessMap.channel),specularMapUv:dt&&m(x.specularMap.channel),specularColorMapUv:Lt&&m(x.specularColorMap.channel),specularIntensityMapUv:Ot&&m(x.specularIntensityMap.channel),transmissionMapUv:qt&&m(x.transmissionMap.channel),thicknessMapUv:N&&m(x.thicknessMap.channel),alphaMapUv:J&&m(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ht||I),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(zt||J),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:It&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),E(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){const T=d[x.type];let P;if(T){const L=Qe[T];P=el.clone(L.uniforms)}else P=x.uniforms;return P}function S(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Kg(s,T,x,i),c.push(P),h.set(T,P)),P}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:R}}function e_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function n_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function xc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,v,g,p){let E=s[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},s[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=m,E.materialVariant=a(u),E.groupOrder=v,E.renderOrder=u.renderOrder,E.z=g,E.group=p),t++,E}function l(u,d,m,v,g,p,E){E.reversedDepth===!0&&(g=-g);const y=o(u,d,m,v,g,p);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):e.push(y)}function c(u,d,m,v,g,p){const E=o(u,d,m,v,g,p);m.transmission>0?n.unshift(E):m.transparent===!0?i.unshift(E):e.unshift(E)}function h(u,d){e.length>1&&e.sort(u||n_),n.length>1&&n.sort(d||xc),i.length>1&&i.sort(d||xc)}function f(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function i_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Sc,s.set(n,[a])):i>=r.length?(a=new Sc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function s_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Vt};break;case"SpotLight":e={position:new C,direction:new C,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function r_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let a_=0;function o_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function l_(s){const t=new s_,e=r_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Nt,a=new Nt;function o(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,E=0,y=0,S=0,w=0,b=0,R=0,x=0,T=0,P=0;c.sort(o_);for(let F=0,z=c.length;F<z;F++){const D=c[F],O=D.color,W=D.intensity,X=D.distance;let it=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===gi?it=D.shadow.map.texture:it=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*W,f+=O.g*W,u+=O.b*W;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],W);P++}else if(D.isSunLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=it;const Ct=Q.getViewportCount();for(let Et=0;Et<Ct;Et++)n.sunShadowMatrix[v+Et]=Q.getMatrix(Et),n.sunShadowCascade[v+Et]=Q._cascadeData[Et];v+=Ct,m++}n.sun[d]=q,d++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=D.shadow.matrix,w++}n.directional[g]=q,g++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(O).multiplyScalar(W),q.distance=X,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[E]=q;const Q=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,Q.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[E]=Q.matrix,D.castShadow){const et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.spotShadow[E]=et,n.spotShadowMap[E]=it,R++}E++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(O).multiplyScalar(W),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=q,y++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Q=D.shadow,et=e.get(D);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=D.shadow.matrix,b++}n.point[p]=q,p++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(W),q.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[S]=q,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==E||L.rectAreaLength!==y||L.hemiLength!==S||L.numSunShadows!==m||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==R||L.numSpotMaps!==x||L.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=g,n.spot.length=E,n.rectArea.length=y,n.point.length=p,n.hemi.length=S,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,L.sunLength=d,L.directionalLength=g,L.pointLength=p,L.spotLength=E,L.rectAreaLength=y,L.hemiLength=S,L.numSunShadows=m,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=R,L.numSpotMaps=x,L.numLightProbes=P,n.version=a_++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0,g=0;const p=h.matrixWorldInverse;for(let E=0,y=c.length;E<y;E++){const S=c[E];if(S.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(S.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Mc(s){const t=new l_(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function c_(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Mc(s),t.set(i,[o])):r>=a.length?(o=new Mc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,f_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],d_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],yc=new Nt,ds=new C,Ea=new C;function p_(s,t,e){let n=new Ko;const i=new st,r=new st,a=new ee,o=new pd,l=new md,c={},h=e.maxTextureSize,f={[pi]:Ye,[Ye]:pi,[rn]:rn},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Pe;m.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new te(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let p=this.type;this.render=function(b,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===iu&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vr);const T=s.getRenderTarget(),P=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Gn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=b.length;D<O;D++){const W=b[D],X=W.shadow;if(X===void 0){Ht("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const it=X.getFrameExtents();i.multiply(it),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,X.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===_s){if(W.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ze(i.x,i.y,{format:gi,type:Sn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new _i(i.x,i.y,hn),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=Vn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ce,X.map.depthTexture.magFilter=Ce}else W.isPointLight?(X.map=new Ph(i.x),X.map.depthTexture=new Tf(i.x,Ln)):(X.map=new Ze(i.x,i.y),X.map.depthTexture=new _i(i.x,i.y,Ln)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=Vn,this.type===vr?(X.map.depthTexture.compareFunction=q?ko:Vo,X.map.depthTexture.minFilter=Ge,X.map.depthTexture.magFilter=Ge):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ce,X.map.depthTexture.magFilter=Ce);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);const Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,x);for(let et=0;et<Q;et++){const Ct=X.getCamera(et);if(W.isPointLight){const Et=X.camera,ae=X.matrix,$t=W.distance||Et.far;$t!==Et.far&&(Et.far=$t,Et.updateProjectionMatrix()),ds.setFromMatrixPosition(W.matrixWorld),Et.position.copy(ds),Ea.copy(Et.position),Ea.add(f_[et]),Et.up.copy(d_[et]),Et.lookAt(Ea),Et.updateMatrixWorld(),ae.makeTranslation(-ds.x,-ds.y,-ds.z),yc.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),X._frustum.setFromProjectionMatrix(yc,Et.coordinateSystem,Et.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,et),s.clear();else{et===0&&(s.setRenderTarget(X.map),s.clear());const Et=X.getViewport(et);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),F.viewport(a)}n=X.getFrustum(et),S(R,x,Ct,W,this.type)}X.isPointLightShadow!==!0&&this.type===_s&&E(X,x),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,P,L)};function E(b,R){const x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ze(i.x,i.y,{format:gi,type:Sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(R,null,x,u,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(R,null,x,d,v,null)}function y(b,R,x,T){let P=null;const L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=P.uuid,z=R.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let O=D[z];O===void 0&&(O=P.clone(),D[z]=O,R.addEventListener("dispose",w)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,T===_s?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=s.properties.get(P);F.light=x}return P}function S(b,R,x,T,P){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===_s)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const z=t.update(b),D=b.material;if(Array.isArray(D)){const O=z.groups;for(let W=0,X=O.length;W<X;W++){const it=O[W],q=D[it.materialIndex];if(q&&q.visible){const Q=y(b,q,T,P);b.onBeforeShadow(s,b,R,x,z,Q,it),s.renderBufferDirect(x,null,z,Q,b,it),b.onAfterShadow(s,b,R,x,z,Q,it)}}}else if(D.visible){const O=y(b,D,T,P);b.onBeforeShadow(s,b,R,x,z,O,null),s.renderBufferDirect(x,null,z,O,b,null),b.onAfterShadow(s,b,R,x,z,O,null)}}const F=b.children;for(let z=0,D=F.length;z<D;z++)S(F[z],R,x,T,P)}function w(b){b.target.removeEventListener("dispose",w);for(const x in c){const T=c[x],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function m_(s,t){function e(){let N=!1;const pt=new ee;let J=null;const mt=new ee(0,0,0,0);return{setMask:function(St){J!==St&&!N&&(s.colorMask(St,St,St,St),J=St)},setLocked:function(St){N=St},setClear:function(St,nt,Dt,At,_e){_e===!0&&(St*=At,nt*=At,Dt*=At),pt.set(St,nt,Dt,At),mt.equals(pt)===!1&&(s.clearColor(St,nt,Dt,At),mt.copy(pt))},reset:function(){N=!1,J=null,mt.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,J=null,mt=null,St=null;return{setReversed:function(nt){if(pt!==nt){const Dt=t.get("EXT_clip_control");nt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),pt=nt;const At=St;St=null,this.setClear(At)}},getReversed:function(){return pt},setTest:function(nt){nt?j(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(nt){J!==nt&&!N&&(s.depthMask(nt),J=nt)},setFunc:function(nt){if(pt&&(nt=Ou[nt]),mt!==nt){switch(nt){case Na:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case Oa:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Ba:s.depthFunc(s.EQUAL);break;case za:s.depthFunc(s.GEQUAL);break;case Ga:s.depthFunc(s.GREATER);break;case Ha:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=nt}},setLocked:function(nt){N=nt},setClear:function(nt){St!==nt&&(St=nt,pt&&(nt=1-nt),s.clearDepth(nt))},reset:function(){N=!1,J=null,mt=null,St=null,pt=!1}}}function i(){let N=!1,pt=null,J=null,mt=null,St=null,nt=null,Dt=null,At=null,_e=null;return{setTest:function(le){N||(le?j(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(le){pt!==le&&!N&&(s.stencilMask(le),pt=le)},setFunc:function(le,dn,yn){(J!==le||mt!==dn||St!==yn)&&(s.stencilFunc(le,dn,yn),J=le,mt=dn,St=yn)},setOp:function(le,dn,yn){(nt!==le||Dt!==dn||At!==yn)&&(s.stencilOp(le,dn,yn),nt=le,Dt=dn,At=yn)},setLocked:function(le){N=le},setClear:function(le){_e!==le&&(s.clearStencil(le),_e=le)},reset:function(){N=!1,pt=null,J=null,mt=null,St=null,nt=null,Dt=null,At=null,_e=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,E=null,y=null,S=null,w=null,b=null,R=null,x=new Vt(0,0,0),T=0,P=!1,L=null,F=null,z=null,D=null,O=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,it=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=it>=2);let Q=null,et={};const Ct=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),ae=new ee().fromArray(Ct),$t=new ee().fromArray(Et);function se(N,pt,J,mt){const St=new Uint8Array(4),nt=s.createTexture();s.bindTexture(N,nt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<J;Dt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(pt+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return nt}const K={};K[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(Ts),ot(!1),ht(vl),j(s.CULL_FACE),rt(Gn);function j(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function _t(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Bt(N,pt){return u[N]!==pt?(s.bindFramebuffer(N,pt),u[N]=pt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function Mt(N,pt){let J=m,mt=!1;if(N){J=d.get(pt),J===void 0&&(J=[],d.set(pt,J));const St=N.textures;if(J.length!==St.length||J[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,Dt=St.length;nt<Dt;nt++)J[nt]=s.COLOR_ATTACHMENT0+nt;J.length=St.length,mt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,mt=!0);mt&&s.drawBuffers(J)}function zt(N){return v!==N?(s.useProgram(N),v=N,!0):!1}const he={[ki]:s.FUNC_ADD,[ru]:s.FUNC_SUBTRACT,[au]:s.FUNC_REVERSE_SUBTRACT};he[ou]=s.MIN,he[lu]=s.MAX;const tt={[cu]:s.ZERO,[hu]:s.ONE,[uu]:s.SRC_COLOR,[qc]:s.SRC_ALPHA,[_u]:s.SRC_ALPHA_SATURATE,[mu]:s.DST_COLOR,[du]:s.DST_ALPHA,[fu]:s.ONE_MINUS_SRC_COLOR,[Yc]:s.ONE_MINUS_SRC_ALPHA,[gu]:s.ONE_MINUS_DST_COLOR,[pu]:s.ONE_MINUS_DST_ALPHA,[vu]:s.CONSTANT_COLOR,[xu]:s.ONE_MINUS_CONSTANT_COLOR,[Su]:s.CONSTANT_ALPHA,[Mu]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(N,pt,J,mt,St,nt,Dt,At,_e,le){if(N===Gn){g===!0&&(_t(s.BLEND),g=!1);return}if(g===!1&&(j(s.BLEND),g=!0),N!==su){if(N!==p||le!==P){if((E!==ki||w!==ki)&&(s.blendEquation(s.FUNC_ADD),E=ki,w=ki),le)switch(N){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wr:s.blendFunc(s.ONE,s.ONE);break;case xl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ie("WebGLState: Invalid blending: ",N);break}else switch(N){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xl:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",N);break}y=null,S=null,b=null,R=null,x.set(0,0,0),T=0,p=N,P=le}return}St=St||pt,nt=nt||J,Dt=Dt||mt,(pt!==E||St!==w)&&(s.blendEquationSeparate(he[pt],he[St]),E=pt,w=St),(J!==y||mt!==S||nt!==b||Dt!==R)&&(s.blendFuncSeparate(tt[J],tt[mt],tt[nt],tt[Dt]),y=J,S=mt,b=nt,R=Dt),(At.equals(x)===!1||_e!==T)&&(s.blendColor(At.r,At.g,At.b,_e),x.copy(At),T=_e),p=N,P=!1}function at(N,pt){N.side===rn?_t(s.CULL_FACE):j(s.CULL_FACE);let J=N.side===Ye;pt&&(J=!J),ot(J),N.blending===Ms&&N.transparent===!1?rt(Gn):rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const mt=N.stencilWrite;o.setTest(mt),mt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),It(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function ht(N){N!==eu?(j(s.CULL_FACE),N!==F&&(N===vl?s.cullFace(s.BACK):N===nu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),F=N}function Ft(N){N!==z&&(X&&s.lineWidth(N),z=N)}function It(N,pt,J){N?(j(s.POLYGON_OFFSET_FILL),(D!==pt||O!==J)&&(D=pt,O=J,a.getReversed()&&(pt=-pt),s.polygonOffset(pt,J))):_t(s.POLYGON_OFFSET_FILL)}function Gt(N){N?j(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function Wt(N){N===void 0&&(N=s.TEXTURE0+W-1),Q!==N&&(s.activeTexture(N),Q=N)}function I(N,pt,J){J===void 0&&(Q===null?J=s.TEXTURE0+W-1:J=Q);let mt=et[J];mt===void 0&&(mt={type:void 0,texture:void 0},et[J]=mt),(mt.type!==N||mt.texture!==pt)&&(Q!==J&&(s.activeTexture(J),Q=J),s.bindTexture(N,pt||K[N]),mt.type=N,mt.texture=pt)}function oe(){const N=et[Q];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Qt(){try{s.compressedTexImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function _(){try{s.texSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function B(){try{s.texSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function lt(){try{s.texStorage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function ct(){try{s.texStorage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function Z(){try{s.texImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function $(){try{s.texImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function ft(N){return f[N]!==void 0?f[N]:s.getParameter(N)}function Pt(N,pt){f[N]!==pt&&(s.pixelStorei(N,pt),f[N]=pt)}function gt(N){ae.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function dt(N){$t.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function Lt(N,pt){let J=c.get(pt);J===void 0&&(J=new WeakMap,c.set(pt,J));let mt=J.get(N);mt===void 0&&(mt=s.getUniformBlockIndex(pt,N.name),J.set(N,mt))}function Ot(N,pt){const mt=c.get(pt).get(N);l.get(pt)!==mt&&(s.uniformBlockBinding(pt,mt,N.__bindingPointIndex),l.set(pt,mt))}function qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,et={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,E=null,y=null,S=null,w=null,b=null,R=null,x=new Vt(0,0,0),T=0,P=!1,L=null,F=null,z=null,D=null,O=null,ae.set(0,0,s.canvas.width,s.canvas.height),$t.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:_t,bindFramebuffer:Bt,drawBuffers:Mt,useProgram:zt,setBlending:rt,setMaterial:at,setFlipSided:ot,setCullFace:ht,setLineWidth:Ft,setPolygonOffset:It,setScissorTest:Gt,activeTexture:Wt,bindTexture:I,unbindTexture:oe,compressedTexImage2D:Qt,compressedTexImage3D:A,texImage2D:Z,texImage3D:$,pixelStorei:Pt,getParameter:ft,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:lt,texStorage3D:ct,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:gt,viewport:dt,reset:qt}}function g_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return m?new OffscreenCanvas(A,_):Lr("canvas")}function g(A,_,B){let V=1;const Y=Qt(A);if((Y.width>B||Y.height>B)&&(V=B/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const lt=Math.floor(V*Y.width),ct=Math.floor(V*Y.height);u===void 0&&(u=v(lt,ct));const Z=_?v(lt,ct):u;return Z.width=lt,Z.height=ct,Z.getContext("2d").drawImage(A,0,0,lt,ct),Ht("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+lt+"x"+ct+")."),Z}else return"data"in A&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function p(A){return A.generateMipmaps}function E(A){s.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(A,_,B,V,Y,lt=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;V&&(ct=t.get("EXT_texture_norm16"),ct||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===s.RED&&(B===s.FLOAT&&(Z=s.R32F),B===s.HALF_FLOAT&&(Z=s.R16F),B===s.UNSIGNED_BYTE&&(Z=s.R8),B===s.UNSIGNED_SHORT&&ct&&(Z=ct.R16_EXT),B===s.SHORT&&ct&&(Z=ct.R16_SNORM_EXT)),_===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.R8UI),B===s.UNSIGNED_SHORT&&(Z=s.R16UI),B===s.UNSIGNED_INT&&(Z=s.R32UI),B===s.BYTE&&(Z=s.R8I),B===s.SHORT&&(Z=s.R16I),B===s.INT&&(Z=s.R32I)),_===s.RG&&(B===s.FLOAT&&(Z=s.RG32F),B===s.HALF_FLOAT&&(Z=s.RG16F),B===s.UNSIGNED_BYTE&&(Z=s.RG8),B===s.UNSIGNED_SHORT&&ct&&(Z=ct.RG16_EXT),B===s.SHORT&&ct&&(Z=ct.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RG8UI),B===s.UNSIGNED_SHORT&&(Z=s.RG16UI),B===s.UNSIGNED_INT&&(Z=s.RG32UI),B===s.BYTE&&(Z=s.RG8I),B===s.SHORT&&(Z=s.RG16I),B===s.INT&&(Z=s.RG32I)),_===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),B===s.UNSIGNED_INT&&(Z=s.RGB32UI),B===s.BYTE&&(Z=s.RGB8I),B===s.SHORT&&(Z=s.RGB16I),B===s.INT&&(Z=s.RGB32I)),_===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),B===s.UNSIGNED_INT&&(Z=s.RGBA32UI),B===s.BYTE&&(Z=s.RGBA8I),B===s.SHORT&&(Z=s.RGBA16I),B===s.INT&&(Z=s.RGBA32I)),_===s.RGB&&(B===s.UNSIGNED_SHORT&&ct&&(Z=ct.RGB16_EXT),B===s.SHORT&&ct&&(Z=ct.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),_===s.RGBA){const $=lt?Pr:ne.getTransfer(Y);B===s.FLOAT&&(Z=s.RGBA32F),B===s.HALF_FLOAT&&(Z=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Z=$===ue?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ct&&(Z=ct.RGBA16_EXT),B===s.SHORT&&ct&&(Z=ct.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function w(A,_){let B;return A?_===null||_===Ln||_===Rs?B=s.DEPTH24_STENCIL8:_===hn?B=s.DEPTH32F_STENCIL8:_===As&&(B=s.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ln||_===Rs?B=s.DEPTH_COMPONENT24:_===hn?B=s.DEPTH_COMPONENT32F:_===As&&(B=s.DEPTH_COMPONENT16),B}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ce&&A.minFilter!==Ge?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),L(_)}function T(A){const _=n.get(A);if(_.__webglInit===void 0)return;const B=A.source,V=d.get(B);if(V){const Y=V[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(A),Object.keys(V).length===0&&d.delete(B)}n.remove(A)}function P(A){const _=n.get(A);s.deleteTexture(_.__webglTexture);const B=A.source,V=d.get(B);delete V[_.__cacheKey],a.memory.textures--}function L(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Y=0;Y<_.__webglFramebuffer[V].length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[V][Y]);else s.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)s.deleteFramebuffer(_.__webglFramebuffer[V]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=A.textures;for(let V=0,Y=B.length;V<Y;V++){const lt=n.get(B[V]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(B[V])}n.remove(A)}let F=0;function z(){F=0}function D(){return F}function O(A){F=A}function W(){const A=F;return A>=i.maxTextures&&Ht("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,A}function X(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function it(A,_){const B=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const V=A.image;if(V===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+_)}function q(A,_){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_t(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+_)}function Q(A,_){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_t(B,A,_);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+_)}function et(A,_){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Bt(B,A,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+_)}const Ct={[Va]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[ka]:s.MIRRORED_REPEAT},Et={[Ce]:s.NEAREST,[Eu]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[Xr]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},ae={[Ru]:s.NEVER,[Iu]:s.ALWAYS,[Cu]:s.LESS,[Vo]:s.LEQUAL,[Pu]:s.EQUAL,[ko]:s.GEQUAL,[Lu]:s.GREATER,[Du]:s.NOTEQUAL};function $t(A,_){if(_.type===hn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===Xr||_.magFilter===Bs||_.magFilter===ei||_.minFilter===Ge||_.minFilter===Xr||_.minFilter===Bs||_.minFilter===ei)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ct[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ct[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ct[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Et[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ae[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ce||_.minFilter!==Bs&&_.minFilter!==ei||_.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function se(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const V=_.source;let Y=d.get(V);Y===void 0&&(Y={},d.set(V,Y));const lt=X(_);if(lt!==A.__cacheKey){Y[lt]===void 0&&(Y[lt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[lt].usedTimes++;const ct=Y[A.__cacheKey];ct!==void 0&&(Y[A.__cacheKey].usedTimes--,ct.usedTimes===0&&P(_)),A.__cacheKey=lt,A.__webglTexture=Y[lt].texture}return B}function K(A,_,B){return Math.floor(Math.floor(A/B)/_)}function j(A,_,B,V){const lt=A.updateRanges;if(lt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,B,V,_.data);else{lt.sort((Pt,gt)=>Pt.start-gt.start);let ct=0;for(let Pt=1;Pt<lt.length;Pt++){const gt=lt[ct],dt=lt[Pt],Lt=gt.start+gt.count,Ot=K(dt.start,_.width,4),qt=K(gt.start,_.width,4);dt.start<=Lt+1&&Ot===qt&&K(dt.start+dt.count-1,_.width,4)===Ot?gt.count=Math.max(gt.count,dt.start+dt.count-gt.start):(++ct,lt[ct]=dt)}lt.length=ct+1;const Z=e.getParameter(s.UNPACK_ROW_LENGTH),$=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,gt=lt.length;Pt<gt;Pt++){const dt=lt[Pt],Lt=Math.floor(dt.start/4),Ot=Math.ceil(dt.count/4),qt=Lt%_.width,N=Math.floor(Lt/_.width),pt=Ot,J=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,qt,N,pt,J,B,V,_.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,$),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function _t(A,_,B){let V=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=s.TEXTURE_3D);const Y=se(A,_),lt=_.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+B);const ct=n.get(lt);if(lt.version!==ct.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const J=ne.getPrimaries(ne.workingColorSpace),mt=_.colorSpace===ti?null:ne.getPrimaries(_.colorSpace),St=_.colorSpace===ti||J===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let $=g(_.image,!1,i.maxTextureSize);$=oe(_,$);const ft=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type);let gt=S(_.internalFormat,ft,Pt,_.normalized,_.colorSpace,_.isVideoTexture);$t(V,_);let dt;const Lt=_.mipmaps,Ot=_.isVideoTexture!==!0,qt=ct.__version===void 0||Y===!0,N=lt.dataReady,pt=b(_,$);if(_.isDepthTexture)gt=w(_.format===fi,_.type),qt&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,gt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,gt,$.width,$.height,0,ft,Pt,null));else if(_.isDataTexture)if(Lt.length>0){Ot&&qt&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Lt[0].width,Lt[0].height);for(let J=0,mt=Lt.length;J<mt;J++)dt=Lt[J],Ot?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,dt.width,dt.height,ft,Pt,dt.data):e.texImage2D(s.TEXTURE_2D,J,gt,dt.width,dt.height,0,ft,Pt,dt.data);_.generateMipmaps=!1}else Ot?(qt&&e.texStorage2D(s.TEXTURE_2D,pt,gt,$.width,$.height),N&&j(_,$,ft,Pt)):e.texImage2D(s.TEXTURE_2D,0,gt,$.width,$.height,0,ft,Pt,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,Lt[0].width,Lt[0].height,$.depth);for(let J=0,mt=Lt.length;J<mt;J++)if(dt=Lt[J],_.format!==un)if(ft!==null)if(Ot){if(N)if(_.layerUpdates.size>0){const St=ec(dt.width,dt.height,_.format,_.type);for(const nt of _.layerUpdates){const Dt=dt.data.subarray(nt*St/dt.data.BYTES_PER_ELEMENT,(nt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,nt,dt.width,dt.height,1,ft,Dt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,$.depth,ft,dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,gt,dt.width,dt.height,$.depth,0,dt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,$.depth,ft,Pt,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,gt,dt.width,dt.height,$.depth,0,ft,Pt,dt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ot&&qt&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Lt[0].width,Lt[0].height);for(let J=0,mt=Lt.length;J<mt;J++)dt=Lt[J],_.format!==un?ft!==null?Ot?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,J,gt,dt.width,dt.height,0,dt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,dt.width,dt.height,ft,Pt,dt.data):e.texImage2D(s.TEXTURE_2D,J,gt,dt.width,dt.height,0,ft,Pt,dt.data)}else if(_.isDataArrayTexture)if(Ot){if(qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,$.width,$.height,$.depth),N)if(_.layerUpdates.size>0){const J=ec($.width,$.height,_.format,_.type);for(const mt of _.layerUpdates){const St=$.data.subarray(mt*J/$.data.BYTES_PER_ELEMENT,(mt+1)*J/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,$.width,$.height,1,ft,Pt,St)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,Pt,$.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,$.width,$.height,$.depth,0,ft,Pt,$.data);else if(_.isData3DTexture)Ot?(qt&&e.texStorage3D(s.TEXTURE_3D,pt,gt,$.width,$.height,$.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,Pt,$.data)):e.texImage3D(s.TEXTURE_3D,0,gt,$.width,$.height,$.depth,0,ft,Pt,$.data);else if(_.isFramebufferTexture){if(qt)if(Ot)e.texStorage2D(s.TEXTURE_2D,pt,gt,$.width,$.height);else{let J=$.width,mt=$.height;for(let St=0;St<pt;St++)e.texImage2D(s.TEXTURE_2D,St,gt,J,mt,0,ft,Pt,null),J>>=1,mt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){const J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),f.add(_),J.onpaint=mt=>{const St=mt.changedElements;for(const nt of f)St.includes(nt.image)&&(nt.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{const St=s.RGBA,nt=s.RGBA,Dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,St,nt,Dt,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Ot&&qt){const J=Qt(Lt[0]);e.texStorage2D(s.TEXTURE_2D,pt,gt,J.width,J.height)}for(let J=0,mt=Lt.length;J<mt;J++)dt=Lt[J],Ot?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,ft,Pt,dt):e.texImage2D(s.TEXTURE_2D,J,gt,ft,Pt,dt);_.generateMipmaps=!1}else if(Ot){if(qt){const J=Qt($);e.texStorage2D(s.TEXTURE_2D,pt,gt,J.width,J.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Pt,$)}else e.texImage2D(s.TEXTURE_2D,0,gt,ft,Pt,$);p(_)&&E(V),ct.__version=lt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Bt(A,_,B){if(_.image.length!==6)return;const V=se(A,_),Y=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const lt=n.get(Y);if(Y.version!==lt.__version||V===!0){e.activeTexture(s.TEXTURE0+B);const ct=ne.getPrimaries(ne.workingColorSpace),Z=_.colorSpace===ti?null:ne.getPrimaries(_.colorSpace),$=_.colorSpace===ti||ct===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ft=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let nt=0;nt<6;nt++)!ft&&!Pt?gt[nt]=g(_.image[nt],!0,i.maxCubemapSize):gt[nt]=Pt?_.image[nt].image:_.image[nt],gt[nt]=oe(_,gt[nt]);const dt=gt[0],Lt=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),qt=S(_.internalFormat,Lt,Ot,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,pt=lt.__version===void 0||V===!0,J=Y.dataReady;let mt=b(_,dt);$t(s.TEXTURE_CUBE_MAP,_);let St;if(ft){N&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,qt,dt.width,dt.height);for(let nt=0;nt<6;nt++){St=gt[nt].mipmaps;for(let Dt=0;Dt<St.length;Dt++){const At=St[Dt];_.format!==un?Lt!==null?N?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,At.width,At.height,Lt,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,qt,At.width,At.height,0,At.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,At.width,At.height,Lt,Ot,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,qt,At.width,At.height,0,Lt,Ot,At.data)}}}else{if(St=_.mipmaps,N&&pt){St.length>0&&mt++;const nt=Qt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,qt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Pt){N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,gt[nt].width,gt[nt].height,Lt,Ot,gt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,qt,gt[nt].width,gt[nt].height,0,Lt,Ot,gt[nt].data);for(let Dt=0;Dt<St.length;Dt++){const _e=St[Dt].image[nt].image;N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,_e.width,_e.height,Lt,Ot,_e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,qt,_e.width,_e.height,0,Lt,Ot,_e.data)}}else{N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,Ot,gt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,qt,Lt,Ot,gt[nt]);for(let Dt=0;Dt<St.length;Dt++){const At=St[Dt];N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,Lt,Ot,At.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,qt,Lt,Ot,At.image[nt])}}}p(_)&&E(s.TEXTURE_CUBE_MAP),lt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Mt(A,_,B,V,Y,lt){const ct=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),$=S(B.internalFormat,ct,Z,B.normalized,B.colorSpace),ft=n.get(_),Pt=n.get(B);if(Pt.__renderTarget=_,!ft.__hasExternalTextures){const gt=Math.max(1,_.width>>lt),dt=Math.max(1,_.height>>lt);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,lt,$,gt,dt,_.depth,0,ct,Z,null):e.texImage2D(Y,lt,$,gt,dt,0,ct,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Wt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Y,Pt.__webglTexture,0,Gt(_)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Y,Pt.__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(A,_,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const V=_.depthTexture,Y=V&&V.isDepthTexture?V.type:null,lt=w(_.stencilBuffer,Y),ct=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Wt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(_),lt,_.width,_.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(_),lt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,lt,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,A)}else{const V=_.textures;for(let Y=0;Y<V.length;Y++){const lt=V[Y],ct=r.convert(lt.format,lt.colorSpace),Z=r.convert(lt.type),$=S(lt.internalFormat,ct,Z,lt.normalized,lt.colorSpace);Wt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt(_),$,_.width,_.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt(_),$,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,$,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(A,_,B){const V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),$t(s.TEXTURE_CUBE_MAP,_.depthTexture);const ft=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type);let gt;_.depthTexture.format===Vn?gt=s.DEPTH_COMPONENT24:_.depthTexture.format===fi&&(gt=s.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,gt,_.width,_.height,0,ft,Pt,null)}}else it(_.depthTexture,0);const lt=Y.__webglTexture,ct=Gt(_),Z=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,$=_.depthTexture.format===fi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Vn)Wt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,lt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,lt,0);else if(_.depthTexture.format===fi)Wt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,lt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(A){const _=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=V}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)he(_.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?he(_.__webglFramebuffer[0],A,0):he(_.__webglFramebuffer,A,0)}else if(B){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=s.createRenderbuffer(),zt(_.__webglDepthbuffer[V],A,!1);else{const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,lt)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),zt(_.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,lt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(A,_,B){const V=n.get(A);_!==void 0&&Mt(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&tt(A)}function at(A){const _=A.texture,B=n.get(A),V=n.get(_);A.addEventListener("dispose",x);const Y=A.textures,lt=A.isWebGLCubeRenderTarget===!0,ct=Y.length>1;if(ct||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=_.version,a.memory.textures++),lt){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let $=0;$<_.mipmaps.length;$++)B.__webglFramebuffer[Z][$]=s.createFramebuffer()}else B.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)B.__webglFramebuffer[Z]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ct)for(let Z=0,$=Y.length;Z<$;Z++){const ft=n.get(Y[Z]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Wt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){const $=Y[Z];B.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const ft=r.convert($.format,$.colorSpace),Pt=r.convert($.type),gt=S($.internalFormat,ft,Pt,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),dt=Gt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,gt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),$t(s.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)Mt(B.__webglFramebuffer[Z][$],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else Mt(B.__webglFramebuffer[Z],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(_)&&E(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Z=0,$=Y.length;Z<$;Z++){const ft=Y[Z],Pt=n.get(ft);let gt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,Pt.__webglTexture),$t(gt,ft),Mt(B.__webglFramebuffer,A,ft,s.COLOR_ATTACHMENT0+Z,gt,0),p(ft)&&E(gt)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),$t(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)Mt(B.__webglFramebuffer[$],A,_,s.COLOR_ATTACHMENT0,Z,$);else Mt(B.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,Z,0);p(_)&&E(Z),e.unbindTexture()}A.depthBuffer&&tt(A)}function ot(A){const _=A.textures;for(let B=0,V=_.length;B<V;B++){const Y=_[B];if(p(Y)){const lt=y(A),ct=n.get(Y).__webglTexture;e.bindTexture(lt,ct),E(lt),e.unbindTexture()}}}const ht=[],Ft=[];function It(A){if(A.samples>0){if(Wt(A)===!1){const _=A.textures,B=A.width,V=A.height;let Y=s.COLOR_BUFFER_BIT;const lt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(A),Z=_.length>1;if(Z)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const $=A.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);const Pt=n.get(_[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,B,V,0,0,B,V,Y,s.NEAREST),l===!0&&(ht.length=0,Ft.length=0,ht.push(s.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ht.push(lt),Ft.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ft)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,ct.__webglColorRenderbuffer[ft]);const Pt=n.get(_[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Gt(A){return Math.min(i.maxSamples,A.samples)}function Wt(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function oe(A,_){const B=A.colorSpace,V=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Cr&&B!==ti&&(ne.getTransfer(B)===ue?(V!==un||Y!==je)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",B)),_}function Qt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=rt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function __(s,t){function e(n,i=ti){let r;const a=ne.getTransfer(i);if(n===je)return s.UNSIGNED_BYTE;if(n===Fo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return s.BYTE;if(n===ih)return s.SHORT;if(n===As)return s.UNSIGNED_SHORT;if(n===No)return s.INT;if(n===Ln)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Sn)return s.HALF_FLOAT;if(n===ah)return s.ALPHA;if(n===oh)return s.RGB;if(n===un)return s.RGBA;if(n===Vn)return s.DEPTH_COMPONENT;if(n===fi)return s.DEPTH_STENCIL;if(n===Bo)return s.RED;if(n===zo)return s.RED_INTEGER;if(n===gi)return s.RG;if(n===Go)return s.RG_INTEGER;if(n===Ho)return s.RGBA_INTEGER;if(n===xr||n===Sr||n===Mr||n===yr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===Ja||n===$a||n===Qa||n===Tr||n===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ka)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$a)return r.COMPRESSED_R11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Tr)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===_o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===xo||n===Ar||n===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new en({vertexShader:v_,fragmentShader:x_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M_ extends xi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new S_,p={},E=e.getContextAttributes();let y=null,S=null;const w=[],b=[],R=new st;let x=null,T=null;const P=new $e;P.viewport=new ee;const L=new $e;L.viewport=new ee;const F=[P,L],z=new bd;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=w[K];return j===void 0&&(j=new Qr,w[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=w[K];return j===void 0&&(j=new Qr,w[K]=j),j.getGripSpace()},this.getHand=function(K){let j=w[K];return j===void 0&&(j=new Qr,w[K]=j),j.getHandSpace()};function W(K){const j=b.indexOf(K.inputSource);if(j===-1)return;const _t=w[j];_t!==void 0&&(_t.update(K.inputSource,K.frame,c||a),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",it);for(let K=0;K<w.length;K++){const j=b[K];j!==null&&(b[K]=null,w[K].disconnect(j))}D=null,O=null,g.reset();for(const K in p)delete p[K];if(t.setRenderTarget(y),d=null,u=null,f=null,i=null,S=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",X),i.addEventListener("inputsourceschange",it),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Bt=null,Mt=null;E.depth&&(Mt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=E.stencil?fi:Vn,Bt=E.stencil?Rs:Ln);const zt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(zt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Ze(u.textureWidth,u.textureHeight,{format:un,type:je,depthTexture:new _i(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ze(d.framebufferWidth,d.framebufferHeight,{format:un,type:je,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(K){for(let j=0;j<K.removed.length;j++){const _t=K.removed[j],Bt=b.indexOf(_t);Bt>=0&&(b[Bt]=null,w[Bt].disconnect(_t))}for(let j=0;j<K.added.length;j++){const _t=K.added[j];let Bt=b.indexOf(_t);if(Bt===-1){for(let zt=0;zt<w.length;zt++)if(zt>=b.length){b.push(_t),Bt=zt;break}else if(b[zt]===null){b[zt]=_t,Bt=zt;break}if(Bt===-1)break}const Mt=w[Bt];Mt&&Mt.connect(_t)}}const q=new C,Q=new C;function et(K,j,_t){q.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);const Bt=q.distanceTo(Q),Mt=j.projectionMatrix.elements,zt=_t.projectionMatrix.elements,he=Mt[14]/(Mt[10]-1),tt=Mt[14]/(Mt[10]+1),rt=(Mt[9]+1)/Mt[5],at=(Mt[9]-1)/Mt[5],ot=(Mt[8]-1)/Mt[0],ht=(zt[8]+1)/zt[0],Ft=he*ot,It=he*ht,Gt=Bt/(-ot+ht),Wt=Gt*-ot;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Wt),K.translateZ(Gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Mt[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const I=he+Gt,oe=tt+Gt,Qt=Ft-Wt,A=It+(Bt-Wt),_=rt*tt/oe*I,B=at*tt/oe*I;K.projectionMatrix.makePerspective(Qt,A,_,B,I,oe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ct(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let j=K.near,_t=K.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),z.near=L.near=P.near=j,z.far=L.far=P.far=_t,(D!==z.near||O!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,O=z.far),z.layers.mask=K.layers.mask|6,P.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const Bt=K.parent,Mt=z.cameras;Ct(z,Bt);for(let zt=0;zt<Mt.length;zt++)Ct(Mt[zt],Bt);Mt.length===2?et(z,P,L):z.projectionMatrix.copy(P.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Et(K,z,Bt)};function Et(K,j,_t){_t===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(K){return p[K]};let ae=null;function $t(K,j){if(h=j.getViewerPose(c||a),m=j,h!==null){const _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Bt=!1;_t.length!==z.cameras.length&&(z.cameras.length=0,Bt=!0);for(let tt=0;tt<_t.length;tt++){const rt=_t[tt];let at=null;if(d!==null)at=d.getViewport(rt);else{const ht=f.getViewSubImage(u,rt);at=ht.viewport,tt===0&&(t.setRenderTargetTextures(S,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(S))}let ot=F[tt];ot===void 0&&(ot=new $e,ot.layers.enable(tt),ot.viewport=new ee,F[tt]=ot),ot.matrix.fromArray(rt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(rt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(at.x,at.y,at.width,at.height),tt===0&&(z.matrix.copy(ot.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Bt===!0&&z.cameras.push(ot)}const Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const tt=f.getDepthInformation(_t[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,i.renderState)}if(Mt&&Mt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let tt=0;tt<_t.length;tt++){const rt=_t[tt].camera;if(rt){let at=p[rt];at||(at=new gh,p[rt]=at);const ot=f.getCameraImage(rt);at.sourceTexture=ot}}}}for(let _t=0;_t<w.length;_t++){const Bt=b[_t],Mt=w[_t];Bt!==null&&Mt!==void 0&&Mt.update(Bt,j,c||a)}ae&&ae(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const se=new Rh;se.setAnimationLoop($t),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}}const y_=new Nt,Nh=new kt;Nh.set(-1,0,0,0,1,0,0,0,1);function b_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,E,y,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,E,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ye&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ye&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=t.get(p),y=E.envMap,S=E.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(y_.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function E_(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const b=w.program;n.uniformBlockBinding(S,b)}function c(S,w){let b=i[S.id];b===void 0&&(g(S),b=h(S),i[S.id]=b,S.addEventListener("dispose",E));const R=w.program;n.updateUBOMapping(S,R);const x=t.render.frame;r[S.id]!==x&&(u(S),r[S.id]=x)}function h(S){const w=f();S.__bindingPointIndex=w;const b=s.createBuffer(),R=S.__size,x=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,b),b}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=i[S.id],b=S.uniforms,R=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let x=0,T=b.length;x<T;x++){const P=b[x];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)d(P[L],x,L,R);else d(P,x,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,w,b,R){if(v(S,w,b,R)===!0){const x=S.__offset,T=S.value;if(Array.isArray(T)){let P=0;for(let L=0;L<T.length;L++){const F=T[L],z=p(F);m(F,S.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,S.__data)}}function m(S,w,b){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,b)}function v(S,w,b,R){const x=S.value,T=w+"_"+b;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{const P=R[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(S){const w=S.uniforms;let b=0;const R=16;for(let T=0,P=w.length;T<P;T++){const L=Array.isArray(w[T])?w[T]:[w[T]];for(let F=0,z=L.length;F<z;F++){const D=L[F],O=Array.isArray(D.value)?D.value:[D.value];for(let W=0,X=O.length;W<X;W++){const it=O[W],q=p(it),Q=b%R,et=Q%q.boundary,Ct=Q+et;b+=et,Ct!==0&&R-Ct<q.storage&&(b+=R-Ct),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=q.storage}}}const x=b%R;return x>0&&(b+=R-x),S.__size=b,S.__cache={},this}function p(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",S),w}function E(S){const w=S.target;w.removeEventListener("dispose",E);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function y(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:y}}const w_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function T_(){return wn===null&&(wn=new Zo(w_,16,16,gi,Sn),wn.name="DFG_LUT",wn.minFilter=Ge,wn.magFilter=Ge,wn.wrapS=Bn,wn.wrapT=Bn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class A_{constructor(t={}){const{canvas:e=Nu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=je}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=d,g=new Set([Ho,Go,zo]),p=new Set([je,Ln,As,Rs,Fo,Oo]),E=new Uint32Array(4),y=new Int32Array(4),S=new C;let w=null,b=null;const R=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,z=null,D=null,O=null;this._outputColorSpace=Je;let W=0,X=0,it=null,q=-1,Q=null;const et=new ee,Ct=new ee;let Et=null;const ae=new Vt(0);let $t=0,se=e.width,K=e.height,j=1,_t=null,Bt=null;const Mt=new ee(0,0,se,K),zt=new ee(0,0,se,K);let he=!1;const tt=new Ko;let rt=!1,at=!1;const ot=new Nt,ht=new C,Ft=new ee,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Wt(){return it===null?j:1}let I=n;function oe(M,U){return e.getContext(M,U)}let Qt,A,_,B,V,Y,lt,ct,Z,$,ft,Pt,gt,dt,Lt,Ot,qt,N,pt,J,mt,St,nt;try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Io}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",dn,!1),I===null){const U="webgl2";if(I=oe(U,M),I===null)throw oe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(M){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",dn,!1),ie("WebGLRenderer: "+M.message),M}function Dt(){Qt=new T0(I),Qt.init(),mt=new __(I,Qt),A=new g0(I,Qt,t,mt),_=new m_(I,Qt),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),z=I.createFramebuffer(),D=I.createFramebuffer(),O=I.createFramebuffer(),B=new C0(I),V=new e_,Y=new g_(I,Qt,_,V,A,mt,B),lt=new w0(P),ct=new Ld(I),St=new p0(I,ct),Z=new A0(I,ct,B,St),$=new L0(I,Z,ct,St,B),N=new P0(I,A,Y),Lt=new _0(V),ft=new t_(P,lt,Qt,A,St,Lt),Pt=new b_(P,V),gt=new i_,dt=new c_(Qt),qt=new d0(P,lt,_,$,m,l),Ot=new p_(P,$,A),nt=new E_(I,B,A,_),pt=new m0(I,Qt,B),J=new R0(I,Qt,B),B.programs=ft.programs,P.capabilities=A,P.extensions=Qt,P.properties=V,P.renderLists=gt,P.shadowMap=Ot,P.state=_,P.info=B}v!==je&&(T=new I0(v,e.width,e.height,o,i,r));const At=new M_(P,I);this.xr=At,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Qt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Qt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(se,K,!1))},this.getSize=function(M){return M.set(se,K)},this.setSize=function(M,U,k=!0){if(At.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}se=M,K=U,e.width=Math.floor(M*j),e.height=Math.floor(U*j),k===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(se*j,K*j).floor()},this.setDrawingBufferSize=function(M,U,k){se=M,K=U,j=k,e.width=Math.floor(M*k),e.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(v===je){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(Mt)},this.setViewport=function(M,U,k,G){M.isVector4?Mt.set(M.x,M.y,M.z,M.w):Mt.set(M,U,k,G),_.viewport(et.copy(Mt).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(zt)},this.setScissor=function(M,U,k,G){M.isVector4?zt.set(M.x,M.y,M.z,M.w):zt.set(M,U,k,G),_.scissor(Ct.copy(zt).multiplyScalar(j).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(M){_.setScissorTest(he=M)},this.setOpaqueSort=function(M){_t=M},this.setTransparentSort=function(M){Bt=M},this.getClearColor=function(M){return M.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,k=!0){let G=0;if(M){let H=!1;if(it!==null){const xt=it.texture.format;H=g.has(xt)}if(H){const xt=it.texture.type,bt=p.has(xt),vt=qt.getClearColor(),wt=qt.getClearAlpha(),Rt=vt.r,Yt=vt.g,jt=vt.b;bt?(E[0]=Rt,E[1]=Yt,E[2]=jt,E[3]=wt,I.clearBufferuiv(I.COLOR,0,E)):(y[0]=Rt,y[1]=Yt,y[2]=jt,y[3]=wt,I.clearBufferiv(I.COLOR,0,y))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",dn,!1),qt.dispose(),gt.dispose(),dt.dispose(),V.dispose(),lt.dispose(),$.dispose(),St.dispose(),nt.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",ll),At.removeEventListener("sessionend",cl),ii.stop()};function _e(M){M.preventDefault(),Dr("WebGLRenderer: Context Lost."),L=!0}function le(){Dr("WebGLRenderer: Context Restored."),L=!1;const M=B.autoReset,U=Ot.enabled,k=Ot.autoUpdate,G=Ot.needsUpdate,H=Ot.type;Dt(),B.autoReset=M,Ot.enabled=U,Ot.autoUpdate=k,Ot.needsUpdate=G,Ot.type=H}function dn(M){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function yn(M){const U=M.target;U.removeEventListener("dispose",yn),qh(U)}function qh(M){Yh(M),V.remove(M)}function Yh(M){const U=V.get(M).programs;U!==void 0&&(U.forEach(function(k){ft.releaseProgram(k)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,G,H,xt){U===null&&(U=It);const bt=H.isMesh&&H.matrixWorld.determinantAffine()<0,vt=Jh(M,U,k,G,H);_.setMaterial(G,bt);let wt=k.index,Rt=1;if(G.wireframe===!0){if(wt=Z.getWireframeAttribute(k),wt===void 0)return;Rt=2}const Yt=k.drawRange,jt=k.attributes.position;let Tt=Yt.start*Rt,ce=(Yt.start+Yt.count)*Rt;xt!==null&&(Tt=Math.max(Tt,xt.start*Rt),ce=Math.min(ce,(xt.start+xt.count)*Rt)),wt!==null?(Tt=Math.max(Tt,0),ce=Math.min(ce,wt.count)):jt!=null&&(Tt=Math.max(Tt,0),ce=Math.min(ce,jt.count));const Ee=ce-Tt;if(Ee<0||Ee===1/0)return;St.setup(H,G,vt,k,wt);let xe,ge=pt;if(wt!==null&&(xe=ct.get(wt),ge=J,ge.setIndex(xe)),H.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*Wt()),ge.setMode(I.LINES)):ge.setMode(I.TRIANGLES);else if(H.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),_.setLineWidth(Fe*Wt()),H.isLineSegments?ge.setMode(I.LINES):H.isLineLoop?ge.setMode(I.LINE_LOOP):ge.setMode(I.LINE_STRIP)}else H.isPoints?ge.setMode(I.POINTS):H.isSprite&&ge.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))ge.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Fe=H._multiDrawStarts,yt=H._multiDrawCounts,Ve=H._multiDrawCount,re=wt?ct.get(wt).bytesPerElement:1,an=V.get(G).currentProgram.getUniforms();for(let bn=0;bn<Ve;bn++)an.setValue(I,"_gl_DrawID",bn),ge.render(Fe[bn]/re,yt[bn])}else if(H.isInstancedMesh)ge.renderInstances(Tt,Ee,H.count);else if(k.isInstancedBufferGeometry){const Fe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,yt=Math.min(k.instanceCount,Fe);ge.renderInstances(Tt,Ee,yt)}else ge.render(Tt,Ee)};function ol(M,U,k,G){F!==null&&M.isNodeMaterial&&F.setObject(G,M),rt===!0&&Lt.setState(M,k,!1),M.transparent===!0&&M.side===rn&&M.forceSinglePass===!1?(M.side=Ye,M.needsUpdate=!0,Os(M,U,G),M.side=pi,M.needsUpdate=!0,Os(M,U,G),M.side=rn):Os(M,U,G)}this.compile=function(M,U,k=null){k===null&&(k=M),F!==null&&F.renderStart(M,U,k),b=dt.get(k),b.init(U),x.push(b),k.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),M!==k&&M.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),at=this.localClippingEnabled,rt=Lt.init(this.clippingPlanes,at),rt===!0&&Lt.setGlobalState(this.clippingPlanes,U),F!==null&&Ot.render(b.state.shadowsArray,k,U);const G=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xt=H.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){const vt=xt[bt];ol(vt,k,U,H),G.add(vt)}else ol(xt,k,U,H),G.add(xt)}),b=x.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(M,U,k=null){const G=this.compile(M,U,k);return new Promise(H=>{function xt(){if(G.forEach(function(bt){const wt=V.get(bt).currentProgram;(wt===void 0||wt.isReady())&&G.delete(bt)}),G.size===0){H(M);return}setTimeout(xt,10)}Qt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Hr=null;function Zh(M){Hr&&Hr(M)}function ll(){ii.stop()}function cl(){ii.start()}const ii=new Rh;ii.setAnimationLoop(Zh),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(M){Hr=M,At.setAnimationLoop(M),M===null?ii.stop():ii.start()},At.addEventListener("sessionstart",ll),At.addEventListener("sessionend",cl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(M,U);const k=At.enabled===!0&&At.isPresenting===!0,G=T!==null&&(it===null||k)&&T.begin(P,it);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(U),U=At.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,it),b=dt.get(M,x.length),b.init(U),b.state.textureUnits=Y.getTextureUnits(),x.push(b),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(ot,Cn,U.reversedDepth),at=this.localClippingEnabled,rt=Lt.init(this.clippingPlanes,at),w=gt.get(M,R.length),w.init(),R.push(w),At.enabled===!0&&At.isPresenting===!0){const bt=P.xr.getDepthSensingMesh();bt!==null&&Vr(bt,U,-1/0,P.sortObjects)}Vr(M,U,0,P.sortObjects),w.finish(),F!==null&&F.updateLights(b.state.lightsArray),P.sortObjects===!0&&w.sort(_t,Bt),Gt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Gt&&qt.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Lt.beginShadows();const H=b.state.shadowsArray;if(Ot.render(H,M,U),rt===!0&&Lt.endShadows(),(G&&T.hasRenderPass())===!1){const bt=w.opaque,vt=w.transmissive;if(b.setupLights(),U.isArrayCamera){const wt=U.cameras;if(vt.length>0)for(let Rt=0,Yt=wt.length;Rt<Yt;Rt++){const jt=wt[Rt];ul(bt,vt,M,jt)}Gt&&qt.render(M);for(let Rt=0,Yt=wt.length;Rt<Yt;Rt++){const jt=wt[Rt];hl(w,M,jt,jt.viewport)}}else vt.length>0&&ul(bt,vt,M,U),Gt&&qt.render(M),hl(w,M,U)}it!==null&&X===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),G&&T.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),St.resetDefaultState(),q=-1,Q=null,x.pop(),x.length>0?(b=x[x.length-1],Y.setTextureUnits(b.state.textureUnits),rt===!0&&Lt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function Vr(M,U,k,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(tt)){G&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ot);const bt=$.update(M),vt=M.material;vt.visible&&w.push(M,bt,vt,k,Ft.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(tt))){const bt=$.update(M),vt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ft.copy(bt.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(ot)),Array.isArray(vt)){const wt=bt.groups;for(let Rt=0,Yt=wt.length;Rt<Yt;Rt++){const jt=wt[Rt],Tt=vt[jt.materialIndex];Tt&&Tt.visible&&w.push(M,bt,Tt,k,Ft.z,jt,U)}}else vt.visible&&w.push(M,bt,vt,k,Ft.z,null,U)}}const xt=M.children;for(let bt=0,vt=xt.length;bt<vt;bt++)Vr(xt[bt],U,k,G)}function hl(M,U,k,G){const{opaque:H,transmissive:xt,transparent:bt}=M;b.setupLightsView(k),rt===!0&&Lt.setGlobalState(P.clippingPlanes,k),G&&_.viewport(et.copy(G)),H.length>0&&Fs(H,U,k),xt.length>0&&Fs(xt,U,k),bt.length>0&&Fs(bt,U,k),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ul(M,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Tt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Ze(1,1,{generateMipmaps:!0,type:Tt?Sn:je,minFilter:ei,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const xt=b.state.transmissionRenderTarget[G.id],bt=G.viewport||et;xt.setSize(bt.z*P.transmissionResolutionScale,bt.w*P.transmissionResolutionScale);const vt=P.getRenderTarget(),wt=P.getActiveCubeFace(),Rt=P.getActiveMipmapLevel();P.setRenderTarget(xt),P.getClearColor(ae),$t=P.getClearAlpha(),$t<1&&P.setClearColor(16777215,.5),P.clear(),Gt&&qt.render(k);const Yt=P.toneMapping;P.toneMapping=xn;const jt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),rt===!0&&Lt.setGlobalState(P.clippingPlanes,G),Fs(M,k,G),Y.updateMultisampleRenderTarget(xt),Y.updateRenderTargetMipmap(xt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let ce=0,Ee=U.length;ce<Ee;ce++){const xe=U[ce],{object:ge,geometry:Fe,material:yt,group:Ve}=xe;if(yt.side===rn&&ge.layers.test(G.layers)){const re=yt.side;yt.side=Ye,yt.needsUpdate=!0,fl(ge,k,G,Fe,yt,Ve),yt.side=re,yt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Y.updateMultisampleRenderTarget(xt),Y.updateRenderTargetMipmap(xt))}P.setRenderTarget(vt,wt,Rt),P.setClearColor(ae,$t),jt!==void 0&&(G.viewport=jt),P.toneMapping=Yt}function Fs(M,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let H=0,xt=M.length;H<xt;H++){const bt=M[H],{object:vt,geometry:wt,group:Rt}=bt;let Yt=bt.material;Yt.allowOverride===!0&&G!==null&&(Yt=G),vt.layers.test(k.layers)&&fl(vt,U,k,wt,Yt,Rt)}}function fl(M,U,k,G,H,xt){F!==null&&H.isNodeMaterial&&F.setObject(M,H),M.onBeforeRender(P,U,k,G,H,xt),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(P,U,k,G,M,xt),H.transparent===!0&&H.side===rn&&H.forceSinglePass===!1?(H.side=Ye,H.needsUpdate=!0,P.renderBufferDirect(k,U,G,H,M,xt),H.side=pi,H.needsUpdate=!0,P.renderBufferDirect(k,U,G,H,M,xt),H.side=rn):P.renderBufferDirect(k,U,G,H,M,xt),M.onAfterRender(P,U,k,G,H,xt)}function Os(M,U,k){U.isScene!==!0&&(U=It);const G=V.get(M),H=b.state.lights,xt=b.state.shadowsArray,bt=H.state.version,vt=ft.getParameters(M,H.state,xt,U,k,b.state.lightProbeGridArray),wt=ft.getProgramCacheKey(vt);let Rt=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Yt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=lt.get(M.envMap||G.environment,Yt),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",yn),Rt=new Map,G.programs=Rt);let jt=Rt.get(wt);if(jt!==void 0){if(G.currentProgram===jt&&G.lightsStateVersion===bt)return pl(M,vt),jt}else vt.uniforms=ft.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,k,vt),M.onBeforeCompile(vt,P),jt=ft.acquireProgram(vt,wt),Rt.set(wt,jt),G.uniforms=vt.uniforms;const Tt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=Lt.uniform),pl(M,vt),G.needsLights=Qh(M),G.lightsStateVersion=bt,G.needsLights&&(Tt.ambientLightColor.value=H.state.ambient,Tt.lightProbe.value=H.state.probe,Tt.sunLights.value=H.state.sun,Tt.sunLightShadows.value=H.state.sunShadow,Tt.directionalLights.value=H.state.directional,Tt.directionalLightShadows.value=H.state.directionalShadow,Tt.spotLights.value=H.state.spot,Tt.spotLightShadows.value=H.state.spotShadow,Tt.rectAreaLights.value=H.state.rectArea,Tt.ltc_1.value=H.state.rectAreaLTC1,Tt.ltc_2.value=H.state.rectAreaLTC2,Tt.pointLights.value=H.state.point,Tt.pointLightShadows.value=H.state.pointShadow,Tt.hemisphereLights.value=H.state.hemi,Tt.sunShadowMatrix.value=H.state.sunShadowMatrix,Tt.sunShadowCascade.value=H.state.sunShadowCascade,Tt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Tt.spotLightMatrix.value=H.state.spotLightMatrix,Tt.spotLightMap.value=H.state.spotLightMap,Tt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=jt,G.uniformsList=null,jt}function dl(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=br.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function pl(M,U){const k=V.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Kh(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let k=0,G=M.length;k<G;k++){const H=M[k];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function Jh(M,U,k,G,H){U.isScene!==!0&&(U=It),Y.resetTextureUnits();const xt=U.fog,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,vt=it===null?P.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ne.workingColorSpace,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Rt=lt.get(G.envMap||bt,wt),Yt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,jt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!k.morphAttributes.position,ce=!!k.morphAttributes.normal,Ee=!!k.morphAttributes.color;let xe=xn;G.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(xe=P.toneMapping);const ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Fe=ge!==void 0?ge.length:0,yt=V.get(G),Ve=b.state.lights;if(rt===!0&&(at===!0||M!==Q)){const ve=M===Q&&G.id===q;Lt.setState(G,M,ve)}let re=!1;G.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Ve.state.version||yt.outputColorSpace!==vt||H.isBatchedMesh&&yt.batching===!1||!H.isBatchedMesh&&yt.batching===!0||H.isBatchedMesh&&yt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&yt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&yt.instancing===!1||!H.isInstancedMesh&&yt.instancing===!0||H.isSkinnedMesh&&yt.skinning===!1||!H.isSkinnedMesh&&yt.skinning===!0||H.isInstancedMesh&&yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&yt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&yt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&yt.instancingMorph===!1&&H.morphTexture!==null||yt.envMap!==Rt||G.fog===!0&&yt.fog!==xt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Lt.numPlanes||yt.numIntersection!==Lt.numIntersection)||yt.vertexAlphas!==Yt||yt.vertexTangents!==jt||yt.morphTargets!==Tt||yt.morphNormals!==ce||yt.morphColors!==Ee||yt.toneMapping!==xe||yt.morphTargetsCount!==Fe||!!yt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,yt.__version=G.version);let an=yt.currentProgram;re===!0&&(an=Os(G,U,H),F&&G.isNodeMaterial&&F.onUpdateProgram(G,an,yt));let bn=!1,kn=!1,yi=!1;const pe=an.getUniforms(),ye=yt.uniforms;if(_.useProgram(an.program)&&(bn=!0,kn=!0,yi=!0),G.id!==q&&(q=G.id,kn=!0),yt.needsLights){const ve=Kh(b.state.lightProbeGridArray,H);yt.lightProbeGrid!==ve&&(yt.lightProbeGrid=ve,kn=!0)}if(bn||Q!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(I,"projectionMatrix",M.projectionMatrix),pe.setValue(I,"viewMatrix",M.matrixWorldInverse);const Xn=pe.map.cameraPosition;Xn!==void 0&&Xn.setValue(I,ht.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,kn=!0,yi=!0)}if(yt.needsLights&&(Ve.state.sunShadowMap.length>0&&pe.setValue(I,"sunShadowMap",Ve.state.sunShadowMap,Y),Ve.state.directionalShadowMap.length>0&&pe.setValue(I,"directionalShadowMap",Ve.state.directionalShadowMap,Y),Ve.state.spotShadowMap.length>0&&pe.setValue(I,"spotShadowMap",Ve.state.spotShadowMap,Y),Ve.state.pointShadowMap.length>0&&pe.setValue(I,"pointShadowMap",Ve.state.pointShadowMap,Y)),H.isSkinnedMesh){pe.setOptional(I,H,"bindMatrix"),pe.setOptional(I,H,"bindMatrixInverse");const ve=H.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),pe.setValue(I,"boneTexture",ve.boneTexture,Y))}H.isBatchedMesh&&(pe.setOptional(I,H,"batchingTexture"),pe.setValue(I,"batchingTexture",H._matricesTexture,Y),pe.setOptional(I,H,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",H._indirectTexture,Y),pe.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",H._colorsTexture,Y));const Wn=k.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&N.update(H,k,an),(kn||yt.receiveShadow!==H.receiveShadow)&&(yt.receiveShadow=H.receiveShadow,pe.setValue(I,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(ye.envMapIntensity.value=U.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=T_()),kn){if(pe.setValue(I,"toneMappingExposure",P.toneMappingExposure),yt.needsLights&&$h(ye,yi),xt&&G.fog===!0&&Pt.refreshFogUniforms(ye,xt),Pt.refreshMaterialUniforms(ye,G,j,K,b.state.transmissionRenderTarget[M.id]),yt.needsLights&&yt.lightProbeGrid){const ve=yt.lightProbeGrid;ye.probesSH.value=ve.texture,ye.probesMin.value.copy(ve.boundingBox.min),ye.probesMax.value.copy(ve.boundingBox.max),ye.probesResolution.value.copy(ve.resolution)}br.upload(I,dl(yt),ye,Y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(br.upload(I,dl(yt),ye,Y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(I,"center",H.center),pe.setValue(I,"modelViewMatrix",H.modelViewMatrix),pe.setValue(I,"normalMatrix",H.normalMatrix),pe.setValue(I,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const ve=G.uniformsGroups;for(let Xn=0,bi=ve.length;Xn<bi;Xn++){const gl=ve[Xn];nt.update(gl,an),nt.bind(gl,an)}}return an}function $h(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Qh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(M,U,k){const G=V.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=U,V.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const k=V.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,k=0){it=M,W=U,X=k;let G=null,H=!1,xt=!1;if(M){const vt=V.get(M);if(vt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,vt.__webglFramebuffer),et.copy(M.viewport),Ct.copy(M.scissor),Et=M.scissorTest,_.viewport(et),_.scissor(Ct),_.setScissorTest(Et),q=-1;return}else if(vt.__webglFramebuffer===void 0)Y.setupRenderTarget(M);else if(vt.__hasExternalTextures)Y.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Yt=M.depthTexture;if(vt.__boundDepthTexture!==Yt){if(Yt!==null&&V.has(Yt)&&(M.width!==Yt.image.width||M.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(M)}}const wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(xt=!0);const Rt=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?G=Rt[U][k]:G=Rt[U],H=!0):M.samples>0&&Y.useMultisampledRTT(M)===!1?G=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[k]:G=Rt,et.copy(M.viewport),Ct.copy(M.scissor),Et=M.scissorTest}else et.copy(Mt).multiplyScalar(j).floor(),Ct.copy(zt).multiplyScalar(j).floor(),Et=he;if(k!==0&&(G=z),_.bindFramebuffer(I.FRAMEBUFFER,G)&&_.drawBuffers(M,G),_.viewport(et),_.scissor(Ct),_.setScissorTest(Et),H){const vt=V.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,k)}else if(xt){const vt=U;for(let wt=0;wt<M.textures.length;wt++){const Rt=V.get(M.textures[wt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+wt,Rt.__webglTexture,k,vt)}}else if(M!==null&&k!==0){const vt=V.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vt.__webglTexture,k)}q=-1};function ml(M){const U=V.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=A.textureFormatReadable(M.format),U.__typeReadable=A.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,k,G,H,xt,bt,vt=0){if(!(M&&M.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){_.bindFramebuffer(I.FRAMEBUFFER,wt);try{const Rt=M.textures[vt],Yt=Rt.format,jt=Rt.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+vt);const Tt=ml(Rt);if(Tt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&k>=0&&k<=M.height-H&&I.readPixels(U,k,G,H,mt.convert(Yt),mt.convert(jt),xt)}finally{const Rt=it!==null?V.get(it).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,U,k,G,H,xt,bt,vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt)if(U>=0&&U<=M.width-G&&k>=0&&k<=M.height-H){_.bindFramebuffer(I.FRAMEBUFFER,wt);const Rt=M.textures[vt],Yt=Rt.format,jt=Rt.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+vt);const Tt=ml(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),I.readPixels(U,k,G,H,mt.convert(Yt),mt.convert(jt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Ee=it!==null?V.get(it).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Ee);const xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Fu(I,xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ce),I.deleteSync(xe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,k=0){const G=Math.pow(2,-k),H=Math.floor(M.image.width*G),xt=Math.floor(M.image.height*G),bt=U!==null?U.x:0,vt=U!==null?U.y:0;Y.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,bt,vt,H,xt),_.unbindTexture()},this.copyTextureToTexture=function(M,U,k=null,G=null,H=0,xt=0){let bt,vt,wt,Rt,Yt,jt,Tt,ce,Ee;const xe=M.isCompressedTexture?M.mipmaps[xt]:M.image;if(k!==null)bt=k.max.x-k.min.x,vt=k.max.y-k.min.y,wt=k.isBox3?k.max.z-k.min.z:1,Rt=k.min.x,Yt=k.min.y,jt=k.isBox3?k.min.z:0;else{const ye=Math.pow(2,-H);bt=Math.floor(xe.width*ye),vt=Math.floor(xe.height*ye),M.isDataArrayTexture?wt=xe.depth:M.isData3DTexture?wt=Math.floor(xe.depth*ye):wt=1,Rt=0,Yt=0,jt=0}G!==null?(Tt=G.x,ce=G.y,Ee=G.z):(Tt=0,ce=0,Ee=0);const ge=mt.convert(U.format),Fe=mt.convert(U.type);let yt;U.isData3DTexture?(Y.setTexture3D(U,0),yt=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),yt=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),yt=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Ve=_.getParameter(I.UNPACK_ROW_LENGTH),re=_.getParameter(I.UNPACK_IMAGE_HEIGHT),an=_.getParameter(I.UNPACK_SKIP_PIXELS),bn=_.getParameter(I.UNPACK_SKIP_ROWS),kn=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),_.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),_.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);const yi=M.isDataArrayTexture||M.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const ye=V.get(M),Wn=V.get(U),ve=V.get(ye.__renderTarget),Xn=V.get(Wn.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,ve.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let bi=0;bi<wt;bi++)yi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(M).__webglTexture,H,jt+bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(U).__webglTexture,xt,Ee+bi)),I.blitFramebuffer(Rt,Yt,bt,vt,Tt,ce,bt,vt,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||V.has(M)){const ye=V.get(M),Wn=V.get(U);_.bindFramebuffer(I.READ_FRAMEBUFFER,D),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let ve=0;ve<wt;ve++)yi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,H,jt+ve):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,H),pe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wn.__webglTexture,xt,Ee+ve):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Wn.__webglTexture,xt),H!==0?I.blitFramebuffer(Rt,Yt,bt,vt,Tt,ce,bt,vt,I.COLOR_BUFFER_BIT,I.NEAREST):pe?I.copyTexSubImage3D(yt,xt,Tt,ce,Ee+ve,Rt,Yt,bt,vt):I.copyTexSubImage2D(yt,xt,Tt,ce,Rt,Yt,bt,vt);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pe?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(yt,xt,Tt,ce,Ee,bt,vt,wt,ge,Fe,xe.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,xt,Tt,ce,Ee,bt,vt,wt,ge,xe.data):I.texSubImage3D(yt,xt,Tt,ce,Ee,bt,vt,wt,ge,Fe,xe):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xt,Tt,ce,bt,vt,ge,Fe,xe.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xt,Tt,ce,xe.width,xe.height,ge,xe.data):I.texSubImage2D(I.TEXTURE_2D,xt,Tt,ce,bt,vt,ge,Fe,xe);_.pixelStorei(I.UNPACK_ROW_LENGTH,Ve),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),_.pixelStorei(I.UNPACK_SKIP_PIXELS,an),_.pixelStorei(I.UNPACK_SKIP_ROWS,bn),_.pixelStorei(I.UNPACK_SKIP_IMAGES,kn),xt===0&&U.generateMipmaps&&I.generateMipmap(yt),_.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&Y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Y.setTextureCube(M,0):M.isData3DTexture?Y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Y.setTexture2DArray(M,0):Y.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){W=0,X=0,it=null,_.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const ps=new C;function ln(s,t,e,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ps.copy(t),ps[n]=0,ps.normalize();const c=.5*a/(a+o),h=1-ps.angleTo(s)/l;return Math.sign(ps[e])===1?h*c:o/(a+o)+c+c*(1-h)}class sl extends vn{constructor(t=1,e=1,n=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new C,c=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,v=new C,g=.5/a;for(let p=0,E=0;p<f.length;p+=3,E+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),d[E+0]=ln(v,c,"z","y",r,n),d[E+1]=1-ln(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),d[E+0]=1-ln(v,c,"z","y",r,n),d[E+1]=1-ln(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),d[E+0]=1-ln(v,c,"x","z",r,t),d[E+1]=ln(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[E+0]=1-ln(v,c,"x","z",r,t),d[E+1]=1-ln(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[E+0]=1-ln(v,c,"x","y",r,t),d[E+1]=1-ln(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),d[E+0]=ln(v,c,"x","y",r,t),d[E+1]=1-ln(v,c,"y","x",r,e);break}}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.segments,t.radius)}}class R_ extends Or{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new vn;t.deleteAttribute("uv");const e=new Eo({side:Ye}),n=new Eo,i=new _d(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new te(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new bf(t,n,6),o=new Ne;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new te(t,Gi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new te(t,Gi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new te(t,Gi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new te(t,Gi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new te(t,Gi(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new te(t,Gi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Gi(s){return new dd({color:0,emissive:16777215,emissiveIntensity:s})}const C_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,P_=`
  uniform vec3 uBase;
  uniform vec3 uHaze;
  uniform vec2 uCenter;
  uniform float uRadius;
  uniform float uStrength;
  uniform float uVignette;
  uniform float uGrain;
  uniform float uGrainScale;
  uniform float uGrainFrame;
  uniform sampler2D uDrawing;
  uniform float uDrawingAmount;
  uniform vec2 uDrawingOffset;
  uniform float uDrawingHalo;
  varying vec2 vUv;

  // Interleaved gradient noise: cheap and evenly spread, so it hides banding
  // without reading as grain.
  float ign(vec2 p) {
    return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
  }

  // Dave Hoskins' hash without sine: stable across GPUs.
  float hash(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.zyx + 31.32);
    return fract((p.x + p.y) * p.z);
  }

  void main() {
    float d = length(gl_FragCoord.xy - uCenter) / uRadius;
    float haze = exp(-2.0 * d * d) * uStrength;
    vec3 colour = mix(uBase, uHaze, haze);

    if (uDrawingAmount > 0.0) {
      // Full colour, so warm lights in the drawing keep their hue. The halo
      // clears the drawing away from the cube's silhouette.
      float amount = uDrawingAmount * (1.0 - uDrawingHalo * exp(-2.0 * d * d));
      colour += vec3(0.93, 0.92, 0.9) * texture2D(uDrawing, vUv + uDrawingOffset).rgb * amount;
    }

    float r = length(vUv - 0.5) * 1.4142;
    colour *= 1.0 - uVignette * r * r;

    // Grain in CSS-pixel-sized cells, roughly Gaussian (sum of two uniforms).
    vec3 cell = vec3(floor(gl_FragCoord.xy / uGrainScale), uGrainFrame);
    float grain = hash(cell) + hash(cell + vec3(19.0, 7.0, 3.0)) - 1.0;
    colour += grain * uGrain;

    // Triangular dither of one 8-bit step.
    float noise = ign(gl_FragCoord.xy) + ign(gl_FragCoord.xy + vec2(47.0, 17.0)) - 1.0;
    gl_FragColor = vec4(colour + noise / 255.0, 1.0);
  }
`;class L_{mesh;constructor(){const t=new en({vertexShader:C_,fragmentShader:P_,depthTest:!1,depthWrite:!1,uniforms:{uBase:{value:new C},uHaze:{value:new C},uCenter:{value:new st},uRadius:{value:1},uStrength:{value:0},uVignette:{value:0},uGrain:{value:0},uGrainScale:{value:1},uGrainFrame:{value:0},uDrawing:{value:null},uDrawingAmount:{value:0},uDrawingOffset:{value:new st},uDrawingHalo:{value:0}}});this.mesh=new te(new is(2,2),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1}setColours(t,e){bc(this.mesh.material.uniforms.uBase.value,t),bc(this.mesh.material.uniforms.uHaze.value,e)}setHaze(t,e,n,i){const{uniforms:r}=this.mesh.material;r.uCenter.value.set(t,e),r.uRadius.value=n,r.uStrength.value=i}setVignette(t){this.mesh.material.uniforms.uVignette.value=t}setGrain(t,e){this.mesh.material.uniforms.uGrain.value=t,this.mesh.material.uniforms.uGrainScale.value=Math.max(1,Math.round(e))}setGrainFrame(t){this.mesh.material.uniforms.uGrainFrame.value=t%1e3}setDrawing(t,e,n=0,i=0,r=0){const{uniforms:a}=this.mesh.material;a.uDrawing.value=t,a.uDrawingAmount.value=t?e:0,a.uDrawingHalo.value=n,a.uDrawingOffset.value.set(i,r)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const D_=new Vt;function bc(s,t){const{r:e,g:n,b:i}=D_.set(t).getRGB({r:0,g:0,b:0},Je);s.set(e,n,i)}const I_=["significance","finale","quick"],U_={primary:2.6,secondary:2.2,terrace:1.6,path:1.4,feature:1.6,planting:1.2,boundary:1.2,prop:.9},wa=.45,N_=.55,F_=.9,Ec=.5,O_=.6;function wc(s){switch(s.type){case"pool":return(s.width+s.paving[0]+s.paving[2])*(s.length+s.paving[1]+s.paving[3]);case"gableHouse":case"flatHouse":return 160;case"cottage":return 82;case"sauna":return 52;case"pergola":return 40;case"carport":return 37;case"outdoorKitchen":return 24;default:return 10}}function Po(s,t="significance"){const e=new Map(s.items.map(y=>[y.id,y])),n=y=>y.partOf?e.get(y.partOf):void 0,i=new Map,r=y=>U_[rs(y)],a=s.items.filter(y=>rs(y)==="primary"),o=s.items.filter(y=>!n(y)&&(rs(y)==="secondary"||rs(y)==="feature")).sort((y,S)=>wc(S)-wc(y));for(const y of a)i.set(y.id,0);const l=a.length?wa*r(a[0]):0;o.forEach((y,S)=>i.set(y.id,l+.35+S*N_));const c=new Set,h=y=>{const S=i.get(y.id);if(S!==void 0)return S;if(c.has(y.id))return l;c.add(y.id);const w=[],b=n(y);b&&w.push(h(b)+wa*r(b));for(const x of y.connects??[]){const T=e.get(x);T&&w.push(h(T)+wa*r(T))}const R=w.length?Math.max(...w):l;return i.set(y.id,R),R},f=s.items.filter(y=>{const S=rs(y);return(S==="planting"||S==="boundary")&&!n(y)});for(const y of s.items)f.includes(y)||h(y);const u=Math.max(0,...i.values())*.85,d=a[0]??{x:0,z:0},m=y=>Math.hypot(y.x-d.x,y.z-d.z),v=Math.max(1,...f.map(m));for(const y of f)i.set(y.id,u+F_*(m(y)/v));for(const y of s.items)h(y);const g=t==="quick"?.6:1,p=s.items.map(y=>({id:y.id,start:i.get(y.id)*g,duration:r(y)*(t==="quick"?.75:1)})),E=Math.max(...p.map(y=>y.start+y.duration));return t==="finale"?{cues:p,lightsAt:E-.4}:{cues:p}}function B_(s,t){const e=Po(t).cues,n=Math.max(0,...e.map(l=>l.start)),i=e.map(l=>({id:l.id,start:n?O_*(n-l.start)/n:0,duration:Ec,leave:!0})),r=i.length?Math.max(...i.map(l=>l.start))+Ec/2:0,a=Po(s).cues,o=Math.min(...a.map(l=>l.start));return{cues:[...i,...a.map(l=>({...l,start:l.start-o+r}))]}}const z_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,G_=`
  uniform sampler2D uSource;
  uniform sampler2D uDepth;
  uniform vec2 uStep;
  uniform float uSigma;
  uniform float uDepthAmount;
  uniform vec2 uCamera;
  uniform vec2 uRange;
  uniform float uMipmaps;
  varying vec2 vUv;

  const int TAPS = 6;

  void main() {
    // Distance from the camera, then where it falls between the near and far
    // edge of the plot.
    float d = texture2D(uDepth, vUv).x;
    float z = uCamera.x * uCamera.y / (uCamera.y - d * (uCamera.y - uCamera.x));
    float far = clamp((z - uRange.x) / (uRange.y - uRange.x), 0.0, 1.0);
    float sigma = uSigma * mix(1.0, far, uDepthAmount);
    if (sigma < 0.3) {
      gl_FragColor = textureLod(uSource, vUv, 0.0);
      return;
    }

    // Taps half a sigma apart cover three sigmas either side.
    float spacing = sigma * 0.5;
    float lod = uMipmaps * max(0.0, log2(spacing));
    vec4 sum = vec4(0.0);
    float total = 0.0;
    for (int i = -TAPS; i <= TAPS; i++) {
      float x = float(i) * spacing;
      float w = exp(-0.5 * x * x / (sigma * sigma));
      sum += w * textureLod(uSource, vUv + uStep * x, lod);
      total += w;
    }
    gl_FragColor = sum / total;
  }
`;class H_{horizontal;vertical;material;quad;scene=new Or;camera=new il;constructor(t){const n={depthBuffer:!1,type:t.extensions.has("EXT_color_buffer_half_float")||t.extensions.has("EXT_color_buffer_float")?Sn:je};this.horizontal=new Ze(1,1,n),this.vertical=new Ze(1,1,n),this.material=new en({vertexShader:z_,fragmentShader:G_,depthTest:!1,depthWrite:!1,uniforms:{uSource:{value:null},uDepth:{value:null},uStep:{value:new st},uSigma:{value:0},uDepthAmount:{value:0},uCamera:{value:new st},uRange:{value:new st},uMipmaps:{value:0}}}),this.quad=new te(new is(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}get texture(){return this.vertical.texture}render(t,e,n){const{width:i,height:r}=e;(this.horizontal.width!==i||this.horizontal.height!==r)&&(this.horizontal.setSize(i,r),this.vertical.setSize(i,r));const{uniforms:a}=this.material;a.uDepth.value=e.depthTexture,a.uSigma.value=n.sigma,a.uDepthAmount.value=n.depth,a.uCamera.value.set(n.near,n.far),a.uRange.value.set(n.rangeNear,n.rangeFar);const o=t.getRenderTarget();this.pass(t,e.texture,this.horizontal,1/i,0,1),this.pass(t,this.horizontal.texture,this.vertical,0,1/r,0),t.setRenderTarget(o)}pass(t,e,n,i,r,a){const{uniforms:o}=this.material;o.uSource.value=e,o.uStep.value.set(i,r),o.uMipmaps.value=a,t.setRenderTarget(n),t.render(this.scene,this.camera)}dispose(){this.horizontal.dispose(),this.vertical.dispose(),this.quad.geometry.dispose(),this.material.dispose()}}ut.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new st},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Qe.line={uniforms:el.merge([ut.common,ut.fog,ut.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Fh extends en{constructor(t){super({type:"LineMaterial",uniforms:el.clone(Qe.line.uniforms),vertexShader:Qe.line.vertexShader,fragmentShader:Qe.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Tc=new Mn,dr=new C;class Wi extends Md{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new de(t,3)),this.setAttribute("uv",new de(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new wo(e,6,1);return this.setAttribute("instanceStart",new ni(n,3,0)),this.setAttribute("instanceEnd",new ni(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new wo(e,6,1);return this.setAttribute("instanceColorStart",new ni(n,3,0)),this.setAttribute("instanceColorEnd",new ni(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ld(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Tc.setFromBufferAttribute(e),this.boundingBox.union(Tc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)dr.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(dr)),dr.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dr));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const Ta=new ee,Ac=new C,Rc=new C,Le=new ee,De=new ee,Tn=new ee,Aa=new C,Ra=new Nt,Ue=new Cd,Cc=new C,pr=new Mn,mr=new Si,An=new ee;let Rn,di;function Pc(s,t,e){return An.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),An.multiplyScalar(1/An.w),An.x=di/e.width,An.y=di/e.height,An.applyMatrix4(s.projectionMatrixInverse),An.multiplyScalar(1/An.w),Math.abs(Math.max(An.x,An.y))}function V_(s,t){const e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let o=0,l=a;o<l;o++){Ue.start.fromBufferAttribute(i,o),Ue.end.fromBufferAttribute(r,o),Ue.applyMatrix4(e);const c=new C,h=new C;Rn.distanceSqToSegment(Ue.start,Ue.end,h,c),h.distanceTo(c)<di*.5&&t.push({point:h,pointOnLine:c,distance:Rn.origin.distanceTo(h),object:s,face:null,faceIndex:o,uv:null,uv1:null})}}function k_(s,t,e){const n=t.projectionMatrix,r=s.material.resolution,a=s.matrixWorld,o=s.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),f=-t.near;Rn.at(1,Tn),Tn.w=1,Tn.applyMatrix4(t.matrixWorldInverse),Tn.applyMatrix4(n),Tn.multiplyScalar(1/Tn.w),Tn.x*=r.x/2,Tn.y*=r.y/2,Tn.z=0,Aa.copy(Tn),Ra.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,d=h;u<d;u++){if(Le.fromBufferAttribute(l,u),De.fromBufferAttribute(c,u),Le.w=1,De.w=1,Le.applyMatrix4(Ra),De.applyMatrix4(Ra),Le.z>f&&De.z>f)continue;if(Le.z>f){const y=Le.z-De.z,S=(Le.z-f)/y;Le.lerp(De,S)}else if(De.z>f){const y=De.z-Le.z,S=(De.z-f)/y;De.lerp(Le,S)}Le.applyMatrix4(n),De.applyMatrix4(n),Le.multiplyScalar(1/Le.w),De.multiplyScalar(1/De.w),Le.x*=r.x/2,Le.y*=r.y/2,De.x*=r.x/2,De.y*=r.y/2,Ue.start.copy(Le),Ue.start.z=0,Ue.end.copy(De),Ue.end.z=0;const v=Ue.closestPointToPointParameter(Aa,!0);Ue.at(v,Cc);const g=ze.lerp(Le.z,De.z,v),p=g>=-1&&g<=1,E=Aa.distanceTo(Cc)<di*.5;if(p&&E){Ue.start.fromBufferAttribute(l,u),Ue.end.fromBufferAttribute(c,u),Ue.start.applyMatrix4(a),Ue.end.applyMatrix4(a);const y=new C,S=new C;Rn.distanceSqToSegment(Ue.start,Ue.end,S,y),e.push({point:S,pointOnLine:y,distance:Rn.origin.distanceTo(S),object:s,face:null,faceIndex:u,uv:null,uv1:null})}}}class ci extends te{constructor(t=new Wi,e=new Fh({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Ac.fromBufferAttribute(e,a),Rc.fromBufferAttribute(n,a),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Ac.distanceTo(Rc);const r=new wo(i,2,1);return t.setAttribute("instanceDistanceStart",new ni(r,1,0)),t.setAttribute("instanceDistanceEnd",new ni(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;if(i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Rn=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;di=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),mr.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=di*.5;else{const f=Math.max(i.near,mr.distanceToPoint(Rn.origin));c=Pc(i,f,l.resolution)}if(mr.radius+=c,Rn.intersectsSphere(mr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),pr.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=di*.5;else{const f=Math.max(i.near,pr.distanceToPoint(Rn.origin));h=Pc(i,f,l.resolution)}pr.expandByScalar(h),Rn.intersectsBox(pr)!==!1&&(n?V_(this,e):k_(this,i,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ta),this.material.uniforms.resolution.value.set(Ta.z,Ta.w))}}function W_(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Pe;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Lc(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);const m=Lc(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Lc(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new fn(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const v=h.getComponent(u,m);o.setComponent(u+f,m,v)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const rl=1e4,Oh={lines:1,solid:1,light:1,cut:rl,grow:1};function Dc(s){return s.lines===1&&s.solid===1&&s.light===1&&s.cut>=rl&&s.grow>=1}const Ic=2,Ca=`
  uniform sampler2D uItems;
  vec4 itemA(float slot) { return texelFetch(uItems, ivec2(int(slot + 0.5), 0), 0); }
  vec4 itemB(float slot) { return texelFetch(uItems, ivec2(int(slot + 0.5), 1), 0); }
`;class Bh{constructor(t){this.slots=t,this.data=new Float32Array(t*Ic*4),this.texture=new Zo(this.data,t,Ic,un,hn),this.texture.minFilter=this.texture.magFilter=Ce,this.uniform={value:this.texture};for(let e=0;e<t;e++)this.set(e,Oh)}texture;uniform;data;set(t,e){const n=t*4,i=(this.slots+t)*4;this.data.set([e.lines,e.solid,e.light,e.cut],n),this.data.set([e.grow,0,0,0],i),this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}lines(t){const e=t.onBeforeCompile;t.onBeforeCompile=(n,i)=>{e.call(t,n,i),n.uniforms.uItems=this.uniform;const r=n.vertexShader.lastIndexOf("void main() {"),a=n.vertexShader.slice(0,r);let o=n.vertexShader.slice(r+13);o=o.replace(/\binstanceStart\b/g,"grownStart").replace(/\binstanceEnd\b/g,"grownEnd"),o=o.slice(0,o.lastIndexOf("}"))+`  if (growK <= 0.0) gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
}`,n.vertexShader=a+Ca+`attribute float instanceSlot;
attribute float instanceDelay;
flat varying float vItemLines;
void main() {
  vItemLines = itemA(instanceSlot).x;
  float growK = clamp((itemB(instanceSlot).x - instanceDelay) / 0.25, 0.0, 1.0);
  bool down = (modelMatrix * vec4(instanceStart, 1.0)).y > (modelMatrix * vec4(instanceEnd, 1.0)).y + 1e-4;
  vec3 grownStart = down ? mix(instanceEnd, instanceStart, growK) : instanceStart;
  vec3 grownEnd = down ? instanceEnd : mix(instanceStart, instanceEnd, growK);
`+o,n.fragmentShader=n.fragmentShader.replace("void main() {",`flat varying float vItemLines;
void main() {`).replace("gl_FragColor = vec4( diffuseColor.rgb, alpha );","gl_FragColor = vec4( diffuseColor.rgb, alpha * vItemLines );")},t.customProgramCacheKey=()=>"items"}basic(t,e){t.onBeforeCompile=n=>{n.uniforms.uItems=this.uniform,n.vertexShader=n.vertexShader.replace("void main() {",`${Ca}
attribute float itemSlot;
flat varying float vItemLevel;
flat varying float vItemCut;
varying float vItemY;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
vec4 itemState = itemA(itemSlot);
vItemLevel = ${e==="solid"?"itemState.y":"itemState.z"};
vItemCut = itemState.w;
vItemY = (modelMatrix * vec4(transformed, 1.0)).y;`),n.fragmentShader=n.fragmentShader.replace("void main() {",`flat varying float vItemLevel;
flat varying float vItemCut;
varying float vItemY;
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
if (vItemY > vItemCut) discard;
diffuseColor.a *= vItemLevel;`)},t.customProgramCacheKey=()=>`items-${e}`}static GLSL=Ca}const zh=1,Gh=2,X_=59.44,q_=24.75,Y_=3,Z_=166,Uc={morning:{hours:8,colour:new Vt(.86,.92,1)},noon:{hours:13.33,colour:new Vt(1,.98,.94)},evening:{hours:20,colour:new Vt(1,.7,.42)}},$n={gain:.13,ground:.5,skylight:.08,softness:.035,tone:.55,engraving:.6,spacing:9},ms=2048,Pa=68,La=70;function K_(s,t=0){const e=ze.degToRad,n=e(360/365*(Z_-81)),i=e(23.44)*Math.sin(n),r=9.87*Math.sin(2*n)-7.53*Math.cos(n)-1.5*Math.sin(n),a=s-Y_+q_/15+r/60,o=e(15*(a-12)),l=e(X_),c=Math.asin(Math.sin(l)*Math.sin(i)+Math.cos(l)*Math.cos(i)*Math.cos(o)),h=Math.atan2(Math.sin(o),Math.cos(o)*Math.sin(l)-Math.tan(i)*Math.cos(l))+Math.PI+e(t);return new C(Math.sin(h)*Math.cos(c),Math.sin(c),-Math.cos(h)*Math.cos(c))}const J_=`
  uniform float uDay;
  uniform sampler2D uSunShadow;
  uniform mat4 uSunMatrix;
  uniform mat3 uSunView;
  uniform vec3 uSunDirection;
  uniform vec3 uSunColour;
  uniform float uSunSpacing;
  uniform float uSunPixel;

  // Golden-angle spiral: even coverage of a disc with few samples.
  vec2 sunDisc(int i, int count, float turn) {
    float r = sqrt((float(i) + 0.5) / float(count));
    float a = float(i) * 2.39996 + turn;
    return r * vec2(cos(a), sin(a));
  }

  // Share of the sun reaching p: find the casters around p in the shadow map
  // and their mean depth, then filter over a penumbra that widens with the
  // distance to them. Each sample is compared with the receiving surface's
  // own depth there, extrapolated along its plane, so a wide filter on
  // ground lit at a low angle doesn't find the ground itself as a caster.
  float sunShadow(vec3 p, vec3 n) {
    vec4 s = uSunMatrix * vec4(p + n * 0.04, 1.0);
    vec3 c = s.xyz / s.w * 0.5 + 0.5;
    if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return 1.0;
    float receiver = c.z - 0.0012;
    vec3 nl = uSunView * n;
    vec2 slope = clamp(nl.xy / max(abs(nl.z), 0.05) * sign(nl.z), -20.0, 20.0) * SUN_COVER / SUN_DEPTH;
    // A different turn of the sample pattern per pixel; the blur smooths the grain.
    float turn = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 6.2832;
    float texel = 1.0 / SUN_MAP;
    float blockers = 0.0, found = 0.0;
    for (int i = 0; i < 16; i++) {
      vec2 o = sunDisc(i, 16, turn) * texel * 60.0;
      float d = texture2D(uSunShadow, c.xy + o).x;
      if (d < receiver + dot(slope, o)) { blockers += d - dot(slope, o); found += 1.0; }
    }
    if (found < 0.5) return 1.0;
    float distance = (receiver - blockers / found) * SUN_DEPTH;
    float radius = clamp(distance * SUN_SOFTNESS * SUN_MAP / SUN_COVER, 1.0, 60.0);
    float light = 0.0;
    for (int i = 0; i < 32; i++) {
      vec2 o = sunDisc(i, 32, turn) * texel * radius;
      light += receiver + dot(slope, o) <= texture2D(uSunShadow, c.xy + o).x ? 1.0 : 0.0;
    }
    return light / 32.0;
  }

  vec3 sunLight(vec3 p, vec3 n) {
    // Exposed for the time of day, as an eye adjusts: sunlit ground reads
    // about as bright under a low sun as at noon, and surfaces turned to a
    // low sun roll off instead of clipping.
    float exposure = 1.0 / max(uSunDirection.y, 0.25);
    float facing = 1.0 - exp(-1.6 * max(dot(n, uSunDirection), 0.0) * exposure);
    float sun = facing > 0.0 ? facing * sunShadow(p, n) : 0.0;
    float tone = sun + SUN_SKYLIGHT * (1.0 - sun);
    // Parallel lines across the sheet, a fixed spacing apart on screen.
    float d = abs(fract((gl_FragCoord.x + gl_FragCoord.y) / uSunSpacing) - 0.5) * uSunSpacing;
    float line = 1.0 - smoothstep(0.4 * uSunPixel, 1.1 * uSunPixel, d);
    float amount = SUN_TONE * tone + SUN_ENGRAVING * line * smoothstep(0.05, 0.6, sun);
    // Grass and paving at ground level take less light than timber walls and roofs.
    float albedo = p.y < 0.01 ? SUN_GROUND : 1.0;
    return uSunColour * SUN_GAIN * amount * albedo * uDay;
  }
`;class $_{uniforms={uDay:{value:0},uSunShadow:{value:null},uSunMatrix:{value:new Nt},uSunView:{value:new kt},uSunDirection:{value:new C(0,1,0)},uSunColour:{value:new Vt},uSunSpacing:{value:$n.spacing},uSunPixel:{value:1}};defines={SUN_MAP:ms.toFixed(1),SUN_COVER:Pa.toFixed(1),SUN_DEPTH:(2*La-1).toFixed(1),SUN_SOFTNESS:$n.softness.toString(),SUN_SKYLIGHT:$n.skylight.toString(),SUN_TONE:$n.tone.toString(),SUN_ENGRAVING:$n.engraving.toString(),SUN_GROUND:$n.ground.toString(),SUN_GAIN:$n.gain.toString()};day=0;dayGoal=0;direction=new C(0,1,0);directionGoal=new C(0,1,0);colour=new Vt;colourGoal=new Vt;north=0;time="night";target;camera=new Br(-68/2,Pa/2,Pa/2,-68/2,1,2*La);depthOnly=new Qi({side:rn,colorWrite:!1});centre=new C;drawnFor=new C;setTime(t,e,n=!1){this.time=t,this.north=e,this.dayGoal=t==="night"?0:1,t!=="night"&&(this.directionGoal.copy(K_(Uc[t].hours,e)),this.colourGoal.copy(Uc[t].colour)),n&&(this.day=this.dayGoal,this.direction.copy(this.directionGoal),this.colour.copy(this.colourGoal))}setCentre(t,e){this.centre.set(t,0,e)}get easing(){return Math.abs(this.dayGoal-this.day)>.001||this.direction.distanceTo(this.directionGoal)>1e-4}update(t,e){const n=this.day<.02;this.day+=(this.dayGoal-this.day)*t,this.time!=="night"&&n?(this.direction.copy(this.directionGoal),this.colour.copy(this.colourGoal)):this.time!=="night"&&(this.direction.lerp(this.directionGoal,t).normalize(),this.colour.lerp(this.colourGoal,t));const{uniforms:i}=this;i.uDay.value=this.day<.001?0:this.day,i.uSunDirection.value.copy(this.direction),i.uSunColour.value.copy(this.colour),i.uSunSpacing.value=$n.spacing*e,i.uSunPixel.value=e}renderShadows(t,e,n){if(this.uniforms.uDay.value===0||(this.target||(this.target=new Ze(ms,ms,{depthTexture:new _i(ms,ms)}),this.uniforms.uSunShadow.value=this.target.depthTexture,n=!0),!n&&this.drawnFor.equals(this.direction)))return;this.drawnFor.copy(this.direction);const{camera:i}=this;i.position.copy(this.centre).addScaledVector(this.direction,La),i.lookAt(this.centre),i.updateMatrixWorld(),i.layers.set(zh),i.layers.enable(Gh),this.uniforms.uSunMatrix.value.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this.uniforms.uSunView.value.setFromMatrix4(i.matrixWorldInverse);const r=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),e.overrideMaterial=this.depthOnly,t.render(e,i),e.overrideMaterial=null,t.setRenderTarget(r)}dispose(){this.target?.depthTexture?.dispose(),this.target?.dispose(),this.depthOnly.dispose()}}const Hh=`
  uniform vec4 uLampA[SITE_LAMPS]; // position, intensity
  uniform vec4 uLampB[SITE_LAMPS]; // beam axis, cos of outer half-angle
  uniform vec4 uLampC[SITE_LAMPS]; // clip plane
  uniform vec4 uWinA[SITE_WINDOWS]; // centre, intensity
  uniform vec4 uWinB[SITE_WINDOWS]; // horizontal axis, half width
  uniform vec4 uWinC[SITE_WINDOWS]; // vertical axis, half height
  uniform vec4 uWinD[SITE_WINDOWS]; // room light, panes
  uniform vec3 uWarm;
  uniform float uGlow;

  // Radius of the room's light (several fittings, really): sets how fast
  // window edges and frame shadows soften.
  const float SOURCE_RADIUS = 0.7;
  const float FRAME = 0.035;
  // How far window light carries, and a lamp's reach per square root of its
  // intensity (inverse square alone never quite ends).
  const float WINDOW_RANGE = 6.5;
  const float LAMP_REACH = 2.2;

  // Smooth window on the falloff, reaching zero at range.
  float reach(float d2, float range) {
    float x = d2 / (range * range);
    float w = clamp(1.0 - x * x, 0.0, 1.0);
    return w * w;
  }

  // Irradiance at p. Surfaces pass their normal (useNormal 1). Lines have
  // none: they take half the light as if facing it and half as if lying on
  // the ground, so a lamp lights the boards around it more than far edges.
  float siteIrradiance(vec3 p, vec3 n, float useNormal) {
    float e = 0.0;
    for (int i = 0; i < SITE_LAMPS; i++) {
      vec3 toLight = uLampA[i].xyz - p;
      float d2 = max(dot(toLight, toLight), 0.02);
      float intensity = uLampA[i].w;
      float range = LAMP_REACH * sqrt(intensity);
      if (d2 > range * range || dot(uLampC[i], vec4(p, 1.0)) < 0.0) continue;
      vec3 l = toLight * inversesqrt(d2);
      float beam = smoothstep(uLampB[i].w, uLampB[i].w + 0.3, dot(-l, uLampB[i].xyz));
      float facing = mix(1.0, max(dot(n, l), 0.0), useNormal);
      e += intensity * beam * facing * reach(d2, range) / d2;
    }
    for (int i = 0; i < SITE_WINDOWS; i++) {
      vec3 c = uWinA[i].xyz;
      vec3 s = uWinD[i].xyz;
      vec3 outward = normalize(cross(uWinB[i].xyz, uWinC[i].xyz));
      if (dot(outward, c - s) < 0.0) outward = -outward;
      vec3 ray = p - s;
      float along = dot(ray, outward);
      float depth = dot(c - s, outward);
      // Only in front of the wall.
      if (along <= depth + 0.01) continue;
      // Range is measured from the window, not the room light.
      float r2 = dot(p - c, p - c);
      if (r2 > WINDOW_RANGE * WINDOW_RANGE) continue;
      float d2 = dot(ray, ray);
      float intensity = uWinA[i].w;
      // Where the ray from the room light to p crosses the window plane.
      float t = depth / along;
      vec3 h = s + ray * t - c;
      float x = dot(h, uWinB[i].xyz);
      float y = dot(h, uWinC[i].xyz);
      // The fitting's size blurs the outline more the further p is past the window.
      float soft = max(0.015, SOURCE_RADIUS * (1.0 - t));
      float mask = (1.0 - smoothstep(uWinB[i].w - soft, uWinB[i].w + soft, abs(x)))
                 * (1.0 - smoothstep(uWinC[i].w - soft, uWinC[i].w + soft, abs(y)));
      float panes = uWinD[i].w;
      if (panes > 1.5) {
        float width = 2.0 * uWinB[i].w / panes;
        float m = mod(x + uWinB[i].w, width);
        mask *= smoothstep(FRAME - soft, FRAME + soft, min(m, width - m));
      }
      if (mask <= 0.0) continue;
      vec3 l = -ray * inversesqrt(d2);
      float leaving = along * inversesqrt(d2);
      float facing = mix(1.0, max(dot(n, l), 0.0), useNormal);
      e += intensity * mask * leaving * facing * reach(r2, WINDOW_RANGE) / d2;
    }
    return e;
  }

  // Warm light, rolling off smoothly rather than clipping at the hot spots.
  vec3 siteLight(vec3 p, vec3 n, float useNormal) {
    // Lamps off (by day): skip the loops.
    if (uGlow <= 0.0) return vec3(0.0);
    return uWarm * (1.0 - exp(-siteIrradiance(p, n, useNormal))) * uGlow;
  }
`,Q_=`
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vDepth;
  #ifdef SITE_ITEMS
  ${Bh.GLSL}
  attribute float itemSlot;
  flat varying float vItemSolid;
  flat varying float vItemCut;
  #endif
  void main() {
    #ifdef SITE_ITEMS
    vec4 itemState = itemA(itemSlot);
    vItemSolid = itemState.y;
    vItemCut = itemState.w;
    #endif
    vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    // Projected exactly as three.js projects the depth-only occluder this
    // copy lies on; a different order of operations rounds differently and
    // the depth test then fails in flickering stripes.
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`,j_=`
  ${Hh}
  ${J_}
  uniform float uSurface;
  uniform vec2 uFog;
  // Nothing above this height draws (a building being swept in or out).
  uniform float uCut;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vDepth;
  #ifdef SITE_ITEMS
  flat varying float vItemSolid;
  flat varying float vItemCut;
  #endif
  void main() {
    if (vWorld.y > uCut) discard;
    float gain = uSurface;
    #ifdef SITE_ITEMS
    if (vWorld.y > vItemCut) discard;
    gain *= vItemSolid;
    #endif
    vec3 n = normalize(vNormal) * (gl_FrontFacing ? 1.0 : -1.0);
    float fog = 1.0 - smoothstep(uFog.x, uFog.y, vDepth);
    vec3 light = siteLight(vWorld, n, 1.0) * gain;
    // Sunlight by day, fading with the surface's own gain (see-through buildings).
    if (uDay > 0.0) light += sunLight(vWorld, n) * (gain / SITE_SURFACE);
    gl_FragColor = vec4(light * fog, 1.0);
  }
`;class tv{constructor(t,e,n){this.surfaceGain=e,this.sun=n,this.uniforms.uWarm.value.copy(t),this.surface=this.surfaceMaterial()}lamps=[];apertures=[];surface;uniforms={uLampA:{value:[]},uLampB:{value:[]},uLampC:{value:[]},uWinA:{value:[]},uWinB:{value:[]},uWinC:{value:[]},uWinD:{value:[]},uWarm:{value:new Vt},uGlow:{value:0}};lit=[];surfaces=[];fog={value:new st(10,60)};surfaceMaterial(t){const e=new en({vertexShader:Q_,fragmentShader:j_,uniforms:{...this.uniforms,...this.sun.uniforms,uSurface:{value:this.surfaceGain},uFog:this.fog,uCut:{value:1e4},...t&&{uItems:t.uniform}},defines:{...this.sun.defines,SITE_SURFACE:this.surfaceGain.toString(),...t&&{SITE_ITEMS:""}},transparent:!0,blending:wr,depthWrite:!1,side:rn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:-2});return this.lit.push(e),this.surfaces.push(e),e}lightLines(t,e){t.onBeforeCompile=n=>{Object.assign(n.uniforms,this.uniforms,{uLineLight:{value:e}}),n.vertexShader=n.vertexShader.replace("void main() {",`varying vec3 vLitWorld;
void main() {`).replace("#include <fog_vertex>",`#include <fog_vertex>
vLitWorld = (modelMatrix * vec4(position.y < 0.5 ? instanceStart : instanceEnd, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("void main() {",`${Hh}
uniform float uLineLight;
varying vec3 vLitWorld;
void main() {`).replace("gl_FragColor = vec4( diffuseColor.rgb, alpha );",`diffuseColor.rgb += siteLight(vLitWorld, vec3(0.0, 1.0, 0.0), 0.5) * uLineLight;
gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},this.lit.push(t)}finish(){const{uniforms:t}=this,e=this.lamps.length?this.lamps:[ev],n=this.apertures.length?this.apertures:[nv];t.uLampA.value=e.map(i=>new ee(...i.position.toArray(),i.intensity)),t.uLampB.value=e.map(i=>new ee(...i.direction.toArray(),i.cosOuter)),t.uLampC.value=e.map(i=>i.clip.clone()),t.uWinA.value=n.map(i=>new ee(...i.centre.toArray(),i.intensity)),t.uWinB.value=n.map(i=>new ee(...i.u.toArray(),i.halfWidth)),t.uWinC.value=n.map(i=>new ee(...i.v.toArray(),i.halfHeight)),t.uWinD.value=n.map(i=>new ee(...i.source.toArray(),i.panes));for(const i of this.lit)i.defines={...i.defines,SITE_LAMPS:e.length,SITE_WINDOWS:n.length},i.needsUpdate=!0}dim(t){this.lamps.forEach((e,n)=>{this.uniforms.uLampA.value[n].w=e.intensity*t(e.slot)}),this.apertures.forEach((e,n)=>{this.uniforms.uWinA.value[n].w=e.intensity*t(e.slot)})}update(t,e,n){this.uniforms.uGlow.value=t,this.fog.value.set(e,n)}dispose(){this.surfaces.forEach(t=>t.dispose())}}const ev={position:new C,intensity:0,direction:new C(0,-1,0),cosOuter:-1,clip:new ee(0,0,0,1),slot:0},nv={centre:new C,u:new C(1,0,0),v:new C(0,1,0),halfWidth:0,halfHeight:0,source:new C(0,0,-1),intensity:0,panes:1,slot:0},Lo={azimuth:-30,elevation:27,fov:30,x:0,y:0,z:2,radius:16,explode:0,plan:0,sway:1,xraySauna:0,xrayKitchen:0},iv={front:Lo,left:{azimuth:-90,elevation:3,fov:12,x:0,y:2.8,z:0,radius:16,explode:0,plan:0,sway:.25,xraySauna:0,xrayKitchen:1},right:{azimuth:55,elevation:22,fov:26,x:1,y:.5,z:0,radius:16,explode:0,plan:0,sway:1,xraySauna:1,xrayKitchen:0},bottom:{azimuth:-14,elevation:33,fov:30,x:-.5,y:2.6,z:-2,radius:15.5,explode:1,plan:0,sway:1,xraySauna:0,xrayKitchen:0},top:{azimuth:0,elevation:89,fov:12,x:0,y:0,z:1,radius:21,explode:0,plan:1,sway:.25,xraySauna:0,xrayKitchen:0}},Jt=.22,Qn=3,sv=.5,Me={house:Qn-sv,outbuilding:2.2,sauna:2.4,cottage:2.4,interior:2.4},me={floor:.05,desk:.9,lounger:.8,counter:1.1,high:1.8},Nc=.06,Hi=.26,rv=8,gs=Math.tan(ze.degToRad(rv)),be=.25,av=.05,Fc=.07,Oc={x:0,z:0,rotation:0},ov={x:0,z:-8,rotation:-90},lv=new C(0,1,0),Da=new Vt(1,.56,.22),cv=.3,hv=0,uv=1/3,fv={roof:0,other:.15,wall:.3},dv={edge:[.22,1.5],detail:[.095,1],faint:[.045,.9]},Ie={surface:.42,lines:.4,window:20,bollard:1.4,porch:4,soffit:4.5,pendant:2.5,tub:1.2,bath:.6,fire:1.6},Ia=2.6,Bc=.8,Er=s=>s*s*(3-2*s),Xi=(s,t,e)=>ze.clamp((s-t)/(e-t),0,1),pv={leave(s,t=.5){const e=Er(Xi(s,0,t));return{lines:1-e,solid:1-e,light:1-e,cut:1,grow:1}},enter(s,t=Ia){const e=Xi(s*Ia/t,.3,Ia-.1);return{lines:1,solid:Er(Xi(e,.6,.85)),light:Er(Xi(e,.85,1)),cut:1,grow:Xi(e,0,.7)}}};function Zt(s,t=[]){const e=new Ls(s.map(([n,i])=>new st(n,i)));for(const n of t)e.holes.push(new Ur(n.map(([i,r])=>new st(i,r))));return e}function Ut(s,t,e,n){return[[s,t],[e,t],[e,n],[s,n]]}function Zi(s){const t=s.map(([n])=>n),e=s.map(([,n])=>n);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function mv(s){const[t,e,n,i]=Zi(s);return[(t+n)/2,(e+i)/2]}function gv(s,t,e){const[n,i,r,a]=Zi(s);return t>=n&&t<=r&&e>=i&&e<=a}function _v(s,t,e,n,i){const r=[o=>o[0]-t,o=>n-o[0],o=>o[1]-e,o=>i-o[1]];let a=s;for(const o of r){const l=a;a=[];for(let c=0;c<l.length;c++){const h=l[c],f=l[(c+1)%l.length],[u,d]=[o(h),o(f)];if(u>=0&&a.push(h),u>=0!=d>=0){const m=u/(u-d);a.push([h[0]+(f[0]-h[0])*m,h[1]+(f[1]-h[1])*m])}}}return a}function vv(s,t){const e=s.filter((a,o)=>{const l=s[(o+1)%s.length];return Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),n=e.filter((a,o)=>{const l=e[(o+e.length-1)%e.length],c=e[(o+1)%e.length];return Math.abs((a[0]-l[0])*(c[1]-a[1])-(a[1]-l[1])*(c[0]-a[0]))>1e-6}),i=n.length,r=n.map((a,o)=>{const l=n[(o+1)%i],[c,h]=[l[0]-a[0],l[1]-a[1]],f=Math.hypot(c,h);return{x:a[0]-h/f*t,y:a[1]+c/f*t,dx:c,dy:h}});return r.map((a,o)=>{const l=r[(o+i-1)%i],c=((a.x-l.x)*a.dy-(a.y-l.y)*a.dx)/(l.dx*a.dy-l.dy*a.dx);return[l.x+l.dx*c,l.y+l.dy*c]})}function zc(s,t){let[e,n]=[1/0,-1/0];return s.forEach(([i,r],a)=>{const[o,l]=s[(a+1)%s.length];if(i<=t==o<=t)return;const c=r+(t-i)/(o-i)*(l-r);[e,n]=[Math.min(e,c),Math.max(n,c)]}),[e,n]}function Gc(s,t,e){for(const n of s)for(let i=0;i<n.length;i++){const[r,a]=n[i],[o,l]=n[(i+1)%n.length];e.push(r,a,t,o,l,t)}}function hi(s,t,e,n,i,r){r.push(s,i,t,e,i,t,e,i,t,e,i,n,e,i,n,s,i,n,s,i,n,s,i,t)}function Vi(s,t,e,n,i,r=40){for(let a=0;a<r;a++){const o=a/r*Math.PI*2,l=(a+1)/r*Math.PI*2;i.push(s+Math.cos(o)*e,n,t+Math.sin(o)*e,s+Math.cos(l)*e,n,t+Math.sin(l)*e)}}function xv(s,t){const e=[],n=Math.cos(ze.degToRad(15));for(const i of[s.getPoints(),...s.holes.map(r=>r.getPoints())]){const r=i.filter((a,o)=>!a.equals(i[(o+1)%i.length]));r.forEach((a,o)=>{const l=r[(o+1)%r.length],c=r[(o+r.length-1)%r.length];for(const u of[0,t])e.push(a.x,a.y,u,l.x,l.y,u);const h=new st().subVectors(a,c).normalize(),f=new st().subVectors(l,a).normalize();h.dot(f)<n&&e.push(a.x,a.y,0,a.x,a.y,t)})}return e}const Ke=()=>new Nt().makeRotationX(Math.PI/2),gr=s=>new Nt().makeRotationY(Math.PI/2).setPosition(s,0,0);class Ua{constructor(t,e=Nr,n,i="intro"){this.reducedMotion=t,this.target=new Ze(1,1,{samples:4,depthTexture:new _i(1,1),generateMipmaps:!0,minFilter:ei}),this.scene.fog=new Yo(0,10,60),this.plot=e.plot,this.north=e.north,e.items.forEach((h,f)=>{this.items.set(h.id,h),this.slots.set(h.id,f+1)}),this.itemStates=new Bh(e.items.length+1),this.live=this.liveMaterials();for(const h of e.items)this.build(h);this.place(Oc,()=>{this.drawBatched(),this.road(),this.contours(),this.ground()}),this.allLines=[...Object.values(this.materials),...Object.values(this.live.lines)];for(const h of this.allLines)this.light.lightLines(h,Ie.lines);for(const h of Object.values(this.live.lines))this.itemStates.lines(h);this.light.finish(),this.collectItems(e.items);const r=new Set([this.occluder,this.live.occluder]);this.scene.traverse(h=>{h instanceof te&&r.has(h.material)&&h.layers.enable(zh)});const{west:a,east:o,north:l,south:c}=this.plot;this.sun.setCentre((a+o)/2,(l+c)/2),this.sun.setTime(e.time,this.north,!0),this.disposables.push(this.sun,this.casterMaterial,this.crown),n&&!t&&this.play(n,i)}target;scene=new Or;camera=new $e(30,1,.5,400);parts=[];occluder=new Qi({colorWrite:!1,side:rn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});sun=new $_;light=new tv(Da,Ie.surface,this.sun);casterMaterial=new Qi({colorWrite:!1,depthWrite:!1});crown=new tl(1,24,16);materials=this.lineSet();poche=this.fill(new Vt().setScalar(.11));glass=this.fill(Da.clone().multiplyScalar(.42));pane=this.fill(Da.clone().multiplyScalar(.42),!0);itemStates;live;toLive=new Map;slots=new Map;drawn=[];shared=[];slot=0;allLines;animation;transitionDone=!1;get animating(){return!!this.animation}get transitioning(){return this.animation?.kind==="change"}billboards=[];disposables=[this.light];view={...Lo};goal=Lo;lightLevel=1;origin=new C;turn=new tn;building="site";plot;items=new Map;north;pixelRatio=1;batched={};holes=[];clearColour=new Vt;lookAt=new C;drawnViewProjection=new Nt;viewProjection=new Nt;drawnLightLevel=NaN;stale=!0;probe=new C;drawnProbe=new C;setSide(t){this.goal=iv[t]}settle(){Object.assign(this.view,this.goal)}setTime(t){this.sun.setTime(t,this.north,this.reducedMotion)}invalidate(){this.stale=!0}resize(t,e,n,i=1){if(!(t===this.target.width&&e===this.target.height)){this.target.setSize(t,e),this.pixelRatio=n,this.stale=!0,this.camera.aspect=t/e;for(const r of this.allLines)r.resolution.set(t,e),r.linewidth=r.userData.width*n,r.color.setScalar(r.userData.intensity*i)}}depthRange=[0,1];render(t,e,n,i){const r=this.reducedMotion?0:1,a=1-Math.exp(-e*(this.reducedMotion?20:1.5));for(const b of Object.keys(this.view))this.view[b]+=(this.goal[b]-this.view[b])*a;const o=this.view,l=this.advanceTransition(e);for(const b of this.parts){const R=b.house?o.explode:0,x=fv[b.kind],T=Math.max(0,(R-x)/(1-x))+(b.kind==="roof"?o.plan*3:0);b.object.position.copy(b.base).addScaledVector(b.explode,T)}const c=1-ze.smoothstep(o.plan,.1,.7);for(const b of[this.materials,this.live.lines])b.roofEdge.opacity=b.roofDetail.opacity=c;for(const b of this.parts)b.kind==="roof"&&(b.object.visible=c>.01);this.poche.opacity=ze.smoothstep(o.plan,.4,1),this.sun.update(1-Math.exp(-e*(this.reducedMotion?20:.9)),this.pixelRatio);const h=(1-ze.smoothstep(o.explode,.05,.5))*(1-this.sun.day);this.glass.opacity=this.pane.opacity=h*Math.min(1,this.lightLevel),this.live.glass.opacity=this.live.pane.opacity=this.glass.opacity,this.updateItems({sauna:o.xraySauna,kitchen:o.xrayKitchen});const f=r*o.sway,u=ze.degToRad(o.azimuth+f*(Math.sin(n*.06)*5-i.x*4)),d=ze.degToRad(Math.min(89.8,o.elevation+f*(Math.sin(n*.045+1)*2-i.y*3)));this.camera.fov=o.fov;const m=Math.min(1,this.camera.aspect/.85),v=o.radius/(Math.tan(ze.degToRad(o.fov/2))*m);this.lookAt.set(o.x,o.y,o.z),this.camera.position.set(o.x+v*Math.sin(u)*Math.cos(d),o.y+v*Math.sin(d),o.z+v*Math.cos(u)*Math.cos(d)),this.camera.lookAt(this.lookAt),this.camera.updateProjectionMatrix();for(const b of this.billboards)b.quaternion.copy(this.camera.quaternion);const g=this.scene.fog;g.near=v-o.radius*.4,g.far=v+o.radius*2.4,this.depthRange[0]=v-o.radius,this.depthRange[1]=v+o.radius,this.light.update(h*this.lightLevel,g.near,g.far),this.camera.updateMatrixWorld(),this.viewProjection.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse);const p=Object.keys(o).every(b=>Math.abs(this.goal[b]-o[b])<.001);if(p&&!this.sun.easing&&!l&&!this.stale&&this.lightLevel===this.drawnLightLevel&&this.drift(o.radius)<uv)return!1;this.drawnViewProjection.copy(this.viewProjection),this.drawnLightLevel=this.lightLevel;const y=this.stale;this.stale=!1,this.sun.renderShadows(t,this.scene,!p||y);const S=t.getRenderTarget();t.getClearColor(this.clearColour);const w=t.getClearAlpha();return t.setRenderTarget(this.target),t.setClearColor(0,1),t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(S),t.setClearColor(this.clearColour,w),!0}liveMaterials(){const t=this.lineSet(),e=this.occluder.clone();e.alphaHash=!0,this.itemStates.basic(e,"solid");const n=this.glass.clone(),i=this.pane.clone();for(const a of[n,i])this.itemStates.basic(a,"light");const r=this.light.surfaceMaterial(this.itemStates);for(const[a,o]of[...Object.keys(t).map(l=>[this.materials[l],t[l]]),[this.occluder,e],[this.glass,n],[this.pane,i],[this.light.surface,r]])this.toLive.set(a,o);return{lines:t,occluder:e,glass:n,pane:i,surface:r}}collectItems(t){this.scene.updateMatrixWorld(!0);for(const e of t){const n=this.slots.get(e.id);this.drawn[n]={item:e,slot:n,box:new Mn,leaves:[],solids:[],state:{...Oh}}}for(const e of this.parts){const n=this.drawn[e.slot];n&&(n.box.expandByObject(e.object),e.object.traverse(i=>{if(!(i instanceof te))return;const r=i.material;(r===this.occluder||r===this.light.surface||r===this.casterMaterial)&&n.solids.push(i),this.toLive.has(r)&&(this.tag(i,[e.slot]),n.leaves.push({object:i,still:r}))}))}for(const e of this.shared){for(let n=0;n<e.slots.length;n++){const i=this.drawn[e.slots[n]];if(!i)continue;const r=e.object.geometry.getAttribute("instanceStart");i.box.expandByPoint(new C().fromBufferAttribute(r,n)),i.box.expandByPoint(new C().fromBufferAttribute(e.object.geometry.getAttribute("instanceEnd"),n))}this.tag(e.object,e.slots)}for(const e of this.drawn)if(e)for(const n of e.leaves)this.orderLines(n.object);for(const e of this.shared)this.orderLines(e.object)}tag(t,e){if(t instanceof ci){const r=t.geometry.getAttribute("instanceStart").count,a=e.length===1?new Float32Array(r).fill(e[0]):Float32Array.from(e);t.geometry.setAttribute("instanceSlot",new Ir(a,1));return}const n=t.geometry.getAttribute("itemSlot");if(n&&n.getX(0)===e[0])return;n&&(t.geometry=t.geometry.clone(),this.disposables.push(t.geometry));const i=t.geometry.getAttribute("position").count;t.geometry.setAttribute("itemSlot",new de(new Float32Array(i).fill(e[0]),1))}orderLines(t){if(!(t instanceof ci))return;const e=t.geometry.getAttribute("instanceStart"),n=t.geometry.getAttribute("instanceEnd"),i=t.geometry.getAttribute("instanceSlot"),[r,a]=[new C,new C],o=new Float32Array(e.count);for(let l=0;l<e.count;l++){const c=this.drawn[i.getX(l)]?.box;if(!c)continue;r.fromBufferAttribute(e,l).applyMatrix4(t.matrixWorld),a.fromBufferAttribute(n,l).applyMatrix4(t.matrixWorld);const h=Math.max(.1,c.max.y-c.min.y),f=Math.max(.1,c.max.x-c.min.x+c.max.z-c.min.z),u=(Math.min(r.y,a.y)-c.min.y)/h,d=(Math.min(r.x,a.x)+Math.min(r.z,a.z)-c.min.x-c.min.z)/f;o[l]=.6*u+.15*d}t.geometry.setAttribute("instanceDelay",new Ir(o,1))}play({cues:t,lightsAt:e},n){const i=new Map;let r=e===void 0?0:e+Bc;for(const a of t){const o=this.slots.get(a.id);o!==void 0&&(i.set(o,{start:a.start,duration:a.duration,curve:a.leave?"leave":"enter"}),r=Math.max(r,a.start+a.duration))}this.animation={kind:n,t:0,end:r,items:i,lightsAt:e},n==="intro"&&Object.assign(this.view,this.goal,{elevation:40,azimuth:14})}advanceTransition(t){const e=this.animation;return e?(e.t=Math.min(e.end,e.t+t),this.stale=!0,e.t<e.end||(e.kind==="change"?this.transitionDone=!0:this.animation=void 0),!0):!1}updateItems(t){let e=!1;for(const n of this.drawn){if(!n)continue;const i=this.animation,r=i?.items.get(n.slot),a=r?pv[r.curve](i.t-r.start,r.duration):void 0;a&&i.lightsAt!==void 0&&(a.light=Er(Xi(i.t,i.lightsAt,i.lightsAt+Bc)));const o=n.item.xray?t[n.item.xray]:0,l=n.box.min.y,c=n.box.max.y+.02,h=a?a.cut:1,f={lines:(a?.lines??1)*(1-(1-cv)*o),solid:(a?.solid??1)*(1-o),light:(a?.light??1)*(1-(1-hv)*o),cut:h>=1?rl:l+(c-l)*h,grow:a?.grow??1},u=n.state;if(f.lines===u.lines&&f.solid===u.solid&&f.light===u.light&&f.cut===u.cut&&f.grow===u.grow)continue;e=!0,n.state=f,this.itemStates.set(n.slot,f);const d=!Dc(f);for(const m of n.leaves)m.object.material=d?this.toLive.get(m.still):m.still;if(f.solid>.001!=u.solid>.001)for(const m of n.solids)m.visible=f.solid>.001}if(e){for(const n of this.shared){const i=n.slots.some(r=>this.drawn[r]&&!Dc(this.drawn[r].state));n.object.material=i?this.toLive.get(n.still):n.still}this.light.dim(n=>this.drawn[n]?.state.light??1)}}drift(t){let e=0;for(const[n,i]of[[1,0],[-1,0],[0,1],[0,-1]]){this.probe.set(this.lookAt.x+n*t,this.lookAt.y,this.lookAt.z+i*t),this.drawnProbe.copy(this.probe).applyMatrix4(this.drawnViewProjection),this.probe.applyMatrix4(this.viewProjection);const r=(this.probe.x-this.drawnProbe.x)*this.target.width/2,a=(this.probe.y-this.drawnProbe.y)*this.target.height/2;e=Math.max(e,Math.hypot(r,a))}return e}dispose(){this.target.dispose(),this.disposables.forEach(i=>i.dispose()),this.itemStates.dispose();const{glass:t,pane:e,occluder:n}=this.live;for(const i of[this.occluder,this.poche,this.glass,this.pane,t,e,n,...this.allLines])i.dispose()}house(t="gable"){const e=t==="flat",n=4,i=9,r=Qn,a=e?r:r+n*Math.tan(ze.degToRad(38)),o=e?Ut(-4,0,n,r):[[-4,0],[n,0],[n,r],[0,a],[-4,r]],l=e?r-Me.house:.95,c=n-l,h=(a-r)/n,f=Ut(-c,me.floor,c,Me.house),u=[[-c,r],[c,r],[0,r+c*h]],d=[-c/2,0,c/2],m=e?[f]:[f,u];this.prism({shape:Zt(o,m),depth:Jt,matrix:new Nt().makeTranslation(0,0,i-Jt),explode:[0,.3,2.2],kind:"wall",glass:m,light:m.map(R=>({outline:R,level:1,columns:d}))});const v=e?[]:[Ut(-.6,4.1,.6,5.1)],g=Ut(-1.75,me.floor,-.85,Me.house);this.prism({shape:Zt(o,[...v,g]),depth:Jt,matrix:new Nt().makeTranslation(0,0,-9),explode:[0,.3,-1.4],kind:"wall",glass:v,light:v.map(R=>({outline:R,level:.5})),leaves:[g]}),this.prism({shape:Zt(Ut(-2.2,-9-1.2,-.4,-9)),depth:be/2,matrix:Ke().setPosition(0,-.25/2,0),explode:[0,0,-1],layers:!1}),this.fitting([-1.42,2.72,-9-.12],[-1.18,2.78,-9]),this.lamp(-1.3,2.7,-9-.07,Ie.porch,[0,-1,0],.2,[0,0,-1,.05-i]);const p=i-Jt,E=[{outline:Ut(-8,me.floor,-5,Me.house),level:1,columns:[-6.5]},{outline:Ut(-4.4,me.floor,.1,Me.house),level:1,columns:[-2.9,-1.4]},{outline:Ut(1.2,me.desk,3,Me.house),level:.55},{outline:Ut(4.2,me.floor,5.6,Me.house),level:.65},{outline:Ut(7.4,me.high,8.4,Me.house),level:.4}],y=E.map(R=>R.outline);this.prism({shape:Zt(Ut(-8.78,0,p,r),y),depth:Jt,matrix:gr(n-Jt),explode:[2.2,.3,0],kind:"wall",glass:y,light:E});const S=[Ut(-6.5,me.counter,-3.5,Me.house),Ut(2.7,me.floor,3.1,Me.house),Ut(4,me.high,4.6,Me.house),Ut(6.5,me.high,7.5,Me.house)],w=Ut(1.5,me.floor,2.5,Me.house),b=[.9,.8,.35,.45].map((R,x)=>({outline:S[x],level:R}));this.prism({shape:Zt(Ut(-8.78,0,p,r),[...S,w]),depth:Jt,matrix:gr(-4),explode:[-2.2,.3,0],kind:"wall",glass:S,light:b,leaves:[w]}),e?this.flatRoof(n,i):this.gableRoof(n,i,a),this.houseBase(n,i,e?()=>r:R=>r-R*h)}flatRoof(t,e){const[n,i]=[.5,1.5],r=[];for(const[a,o]of[[.8,1.85],[2.05,3.1]])for(let l=0;l<10;l++){const[c,h]=[-6.5+l*1.3,-5.3+l*1.3];r.push(a,c,-.04,o,c,-.04,o,c,-.04,o,h,-.04,o,h,-.04,a,h,-.04,a,h,-.04,a,c,-.04)}this.prism({shape:Zt(Ut(-t-n,-e-n,t+i,e+n)),depth:Hi,matrix:Ke().setPosition(0,Qn+Hi,0),explode:[0,2.6,0],kind:"roof",extra:r});for(const a of[6.5,2.15,-4.9])this.fitting([t+.78,Qn-.04,a-.12],[t+1.02,Qn,a+.12]),this.lamp(t+.9,Qn-.05,a,Ie.soffit,[0,-1,0],.35,[1,0,0,.05-t])}gableRoof(t,e,n,{overhang:i=.5,laminations:r=!0,panels:a=!0}={}){const o=Qn,l=Math.atan2(n-o,t),c=Math.hypot(t,n-o)+i,h=2*(e+i);for(const f of[1,-1]){const u=new st(f*Math.cos(l),-Math.sin(l)),d=new st(f*Math.sin(l),Math.cos(l)),m=new st(0,n),v=new st(0,n+Hi/Math.cos(l)),g=m.clone().addScaledVector(u,c),p=g.clone().addScaledVector(d,Hi),E=(S,w,b)=>S.clone().lerp(w,b),y=[];for(const S of r?[1/3,2/3]:[]){const w=E(m,v,S),b=E(g,p,S);for(const R of[0,h])y.push(w.x,w.y,R,b.x,b.y,R);y.push(b.x,b.y,0,b.x,b.y,h)}if(f===1&&a){const S=w=>m.clone().addScaledVector(d,Hi+.04).addScaledVector(u,w);for(let w=0;w<2;w++)for(let b=0;b<10;b++){const[R,x]=[.8+w*1.15,1.85+w*1.15],[T,P]=[e+i-6.5+b*1.3,e+i-5.3+b*1.3],L=S(R),F=S(x);y.push(L.x,L.y,T,F.x,F.y,T,F.x,F.y,T,F.x,F.y,P),y.push(F.x,F.y,P,L.x,L.y,P,L.x,L.y,P,L.x,L.y,T)}}this.prism({shape:Zt([m,g,p,v].map(S=>[S.x,S.y])),depth:h,matrix:new Nt().makeTranslation(0,0,-e-i),explode:[d.x*1.4,d.y*1.4+2.6,0],kind:"roof",layers:!1,extra:y})}}houseBase(t,e,n){this.prism({shape:Zt(Ut(-t,-e,t,e)),depth:be+.05,matrix:Ke(),explode:[0,0,0],layers:!1}),this.prism({shape:Zt(Ut(-t-1.6,-2.9,-t,-1.1)),depth:be/2,matrix:Ke().setPosition(0,-.25/2,0),explode:[-1,0,0],layers:!1}),this.fitting([-t-.45,n(.45)-.04,-2.15],[-t-.15,n(.45),-1.85]),this.lamp(-t-.3,n(.45)-.05,-2,Ie.porch,[0,-1,0],.2,[-1,0,0,.05-t])}cottage(){const n=Qn,i=n+3.96*(10.5/12),r=Me.cottage,a=[[-3.96,0],[3.96,0],[3.96,n],[0,i],[-3.96,n]],o=[{outline:Ut(-2.52,me.lounger,-1.76,r),level:.9},{outline:Ut(1.76,me.lounger,2.52,r),level:.9},{outline:Ut(-.45,n+.5,.45,n+1.95),level:.7,ceiling:4.5}],l=Ut(-.41,me.floor,.5,r),c=o.map(W=>W.outline);this.prism({shape:Zt(a,[...c,l]),depth:Jt,matrix:new Nt().makeTranslation(0,0,5.18-Jt),explode:[0,.3,1.6],kind:"wall",layers:!1,glass:c,light:o,leaves:[l]}),this.prism({shape:Zt(a),depth:Jt,matrix:new Nt().makeTranslation(0,0,-5.18),explode:[0,.3,-1.6],kind:"wall",layers:!1});const h=5.18-Jt,f=(W,X,it,q)=>Ut(-X,it,-W,q),u=[{outline:f(-4.17,-2.95,me.desk,r),level:.55},{outline:f(-1.41,-.19,me.high,r),level:.4}],d=f(.2,1.11,me.floor,r),m=u.map(W=>W.outline);this.prism({shape:Zt(Ut(-4.96,0,h,n),[...m,d]),depth:Jt,matrix:gr(3.96-Jt),explode:[1.6,.3,0],kind:"wall",layers:!1,glass:m,light:u,leaves:[d]});const v=[{outline:f(-4.17,-2.95,me.desk,r),level:.55},{outline:f(0,.61,me.counter,r),level:.4},{outline:f(1.7,2.46,me.lounger,r),level:.9}],g=v.map(W=>W.outline);this.prism({shape:Zt(Ut(-4.96,0,h,n),g),depth:Jt,matrix:gr(-3.96),explode:[-1.6,.3,0],kind:"wall",layers:!1,glass:g,light:v}),this.gableRoof(3.96,5.18,i,{overhang:.35,laminations:!1,panels:!1}),this.prism({shape:Zt(Ut(-3.96,-5.18,3.96,5.18)),depth:be+.05,matrix:Ke(),explode:[0,0,0],layers:!1});const[p,E]=[5.18,5.18+1.52],y=2.64;this.prism({shape:Zt(Ut(-3.96,p,3.96,E)),depth:be,matrix:Ke(),explode:[0,0,1.2],layers:!1});for(const W of[-3.72,-1,1.01,3.72])this.box([W-.07,0,E-.22],[W+.07,y-.2,E-.08],[0,.4,1.2]);this.box([-3.96,y-.2,E-.23],[3.96,y,E-.07],[0,.6,1.2]),this.shedRoof({x0:-3.96,x1:3.96,z0:p,z1:E-.07,low:n-.1,high:y,overhang:[.15,0,.25],explode:1.2}),this.fitting([-.12,y-.04,p+.6],[.12,y,p+.84]),this.lamp(0,y-.05,p+.72,Ie.porch,[0,-1,0],.2,[0,0,1,.05-5.18]),this.prism({shape:Zt(Ut(3.96,.05,3.96+1,1.26)),depth:be/2,matrix:Ke().setPosition(0,-.25/2,0),explode:[1,0,0],layers:!1}),this.fitting([3.96,2.3,1.3],[3.96+.1,2.5,1.42]),this.lamp(3.96+.12,2.35,1.36,Ie.porch*.6,[0,-1,0],-.2,[1,0,0,.05-3.96]);const S=Jt,[w,b]=[-3.96+S,3.96-S],[R,x]=[-5.18+S,5.18-S],T=2.9,P=Me.interior;this.partition(w,-1.61,b,-1.61,[[-2.26,-1.49],[-.98,-.26],[.13,.86],[1.11,1.88]],T,P),this.partition(.01,R,.01,-1.61,[],T,P),this.partition(-.72,R,-.72,-2.62,[[-4.94,-2.91]],T,P),this.partition(.74,R,.74,-2.62,[[-4.94,-2.91]],T,P),this.partition(-.72,-2.62,.74,-2.62,[],T,P),this.partition(-2.26,-1.61,-2.26,1.55,[[-1.49,-.72]],T,P),this.partition(w,1.55,-2.26,1.55,[],T,P),this.partition(-1.12,-.47,-1.12,1.55,[[-.27,1.43]],T,P),this.partition(-1.12,-.47,1.11,-.47,[],T,P),this.partition(-1.12,1.55,1.11,1.55,[],T,P),this.partition(1.11,-1.61,1.11,1.58,[[-1.45,-.72]],T,P),this.partition(1.11,.05,b,.05,[],T,P),this.partition(1.11,1.58,b,1.58,[[1.17,1.96]],T,P);const{box:L,circle:F,swing:z,done:D}=this.planKit(),O=Math.PI/2;z(.5,x,.91,Math.PI,Math.PI+O),z(b,1.11,.91,-O,-Math.PI),z(-.26,-1.61,.72,Math.PI,Math.PI+O),z(.13,-1.61,.72,0,-O),z(-2.26,-.72,.77,-O,-Math.PI),z(1.11,-.72,.73,-O,0),L(-2.95,R+.05,-1.45,R+2.1),L(1.45,R+.05,2.95,R+2.1),L(-3.45,R+.05,-3,R+.5),L(3,R+.05,3.45,R+.5),L(-3.72,.82,-2.38,1.43),F(-3.25,.34,.2),L(w+.02,-1.35,w+.5,-.8),L(3.09,-1.45,b-.02,-.07),F(2.58,-.39,.2),L(1.35,-.62,1.85,-.15),L(-.8,-.4,-.11,.26),L(.05,-.4,.74,.26),L(b-.62,1.7,b,x),L(b-.75,2.16,b,3.05),L(.78,2.5,1.84,4),F(-.35,2.28,.5),L(-3.6,3.4,-1.4,4.3),L(-2.9,2.3,-2,2.9),D()}houseInterior(){const[t,e,n]=[-11.78,-4.22,8.78];this.partition(.6,-8.6,3.6,-8.6,[[2.5,3.4]]),this.partition(.6,-8.6,.6,e),this.partition(3.6,t,3.6,-10),this.partition(3.6,-8.6,3.6,e),this.partition(3.6,-10,n,-10,[[3.9,4.6],[6,6.9]]),this.partition(5,t,5,-10),this.partition(3.6,-8.6,n,-8.6,[[5.8,6.7],[7.7,8.6]]),this.partition(6.8,-8.6,6.8,e,[[-6.2,-5.4]]);const{box:i,circle:r,swing:a,done:o}=this.planKit(),l=Math.PI/2;a(2.5,t,1,Math.PI,l),a(3.4,-8.6,.9,Math.PI,l),a(3.9,-10,.7,0,-l),a(6.9,-10,.9,Math.PI,Math.PI+l),a(5.8,-8.6,.9,0,l),a(8.6,-8.6,.9,Math.PI,l),a(6.8,-5.4,.8,l,0),i(-7.6,t,-2.6,t+.6),i(-2.6,t,-1.4,t+.6),i(-6.2,-9.9,-3.4,-8.9),i(-7.9,-8.2,-6.9,-5.8);for(const c of[-7.8,-7,-6.2])i(-8.35,c-.2,-8,c+.2),i(-6.8,c-.2,-6.45,c+.2);i(-3.4,-8.4,-.6,-7.6),i(-2.6,-7,-1.4,-6.2),r(.15,-6.2,.3),i(2.9,-11.6,3.48,-10.15),i(4.05,t+.06,4.45,t+.26),r(4.25,-11.3,.2),i(4.6,-10.9,4.92,-10.4),i(5.2,t+.06,5.8,t+.66),i(7,t+.06,7.6,t+.66),i(7.7,t+.06,8.3,t+.66),i(6.86,-7.6,7.36,-6.4),r(7.11,-7.3,.15),r(7.11,-6.7,.15),i(8.52,-7.4,8.72,-7),r(8.27,-7.2,.2),i(7.2,-5.4,n-.06,e-.06),i(4,-8.48,5.6,-6.4),i(3.68,-8.48,3.98,-8.1),i(5.62,-8.48,5.92,-8.1),i(.75,-8.48,2.15,-6.48),i(1.3,e-.54,2.9,e-.04),o()}planKit(){const t=[],e=[];return{box:(i,r,a,o)=>hi(i,r,a,o,.02,t),circle:(i,r,a)=>Vi(i,r,a,.02,t,20),swing:(i,r,a,o,l)=>{for(let c=0;c<8;c++){const h=o+(l-o)*c/8,f=o+(l-o)*(c+1)/8;e.push(i+Math.cos(h)*a,.02,r+Math.sin(h)*a,i+Math.cos(f)*a,.02,r+Math.sin(f)*a)}e.push(i,.02,r,i+Math.cos(l)*a,.02,r+Math.sin(l)*a)},done:()=>{this.lines(t,"faint"),this.lines(e,"detail")}}}partition(t,e,n,i,r=[],a=2.9,o=Me.interior){const l=e===i,c=[l?t:e,...r.flat(),l?n:i],h=.06,f=(d,m)=>l?Ut(d,-(e+h),m,-(e-h)):Ut(t-h,-m,t+h,-d),u=(d,m,v,g)=>this.prism({shape:Zt(f(d,m)),depth:g,matrix:new Nt().makeRotationX(-Math.PI/2).setPosition(0,v,0),explode:[0,1.1,0],kind:"wall",layers:!1});for(let d=0;d<c.length;d+=2)c[d+1]-c[d]>=.05&&u(c[d],c[d+1],0,a);for(const[d,m]of r)u(d,m,o,a-o)}sauna(){const[t,e,n,i]=[-3.5,3.5,-3.75,3.75],r=2.6,a=r+(i-n)*gs,o=D=>r+(D-n)*gs,l=Me.sauna,c=.45,h=[{outline:Ut(-3.1,me.floor,-.1,a-c),level:.85,columns:[-1.6],rows:[l]},{outline:Ut(.8,me.floor,3,l),level:.6}],f=h.map(D=>D.outline);this.prism({shape:Zt(Ut(t,0,e,a),f),depth:Jt,matrix:new Nt().makeTranslation(0,0,i-Jt),explode:[0,.2,1.3],kind:"wall",glass:f,light:h}),this.prism({shape:Zt(Ut(t,0,e,r)),depth:Jt,matrix:new Nt().makeTranslation(0,0,n),explode:[0,.2,-1.3],kind:"wall"});const[u,d]=[n+Jt,i-Jt],m=[[-d,0],[-u,0],[-u,o(u)],[-d,o(d)]],v=D=>new Nt().makeRotationY(Math.PI/2).setPosition(D,0,0),p=[{outline:((D,O)=>[[D,me.floor],[O,me.floor],[O,o(-.1)-c],[D,o(3.2)-c]])(-3.2,.1),level:.85,columns:[-1.55],rows:[l]},{outline:Ut(1.4,me.high,2.4,l),level:.35}],E=p.map(D=>D.outline);this.prism({shape:Zt(m,E),depth:Jt,matrix:v(t),explode:[-1.3,.2,0],kind:"wall",glass:E,light:p});const y=Ut(.75,me.floor,1.6,l);this.prism({shape:Zt(m,[y]),depth:Jt,matrix:v(e-Jt),explode:[1.3,.2,0],kind:"wall",leaves:[y]}),this.prism({shape:Zt(Ut(t,n,e,i)),depth:be,matrix:Ke(),explode:[0,0,0]}),this.shedRoof({x0:t,x1:e,z0:n,z1:i,low:r,high:a,overhang:[.35,.35,1.2],explode:1.3});const[S,w]=[n+Jt,i-Jt],[b,R]=[t+Jt,e-Jt],x=-.45;this.partition(b,x,R,x,[[-1.15,-.35],[.45,1.15]],2.5,Me.outbuilding),this.partition(.3,x+.06,.3,w,[],2.5,Me.outbuilding),this.partition(.3,S,.3,x-.06,[[-2.45,-1.65]],2.5,Me.outbuilding),this.partition(-1.7,S,-1.7,x-.06,[[-2.9,-2.2]],2.5,Me.outbuilding),this.box([1.25,0,x+.08],[R-.04,.95,.3],[0,.6,0],"detail"),this.box([1.25,0,.3],[R-.04,.45,.8],[0,.6,0],"detail"),this.box([.45,0,1.6],[.95,.8,2.1],[0,.6,0],"detail"),this.box([.61,.8,1.76],[.79,4.4,1.94],[0,2.1,0],"detail"),this.box([-3,0,x+.08],[-1.35,.42,.45],[0,.4,0],"detail"),this.box([-3,.42,x+.08],[-1.35,.75,-.17],[0,.4,0],"detail"),this.box([-2.6,0,1],[-1.6,.38,1.6],[0,.4,0],"detail");const{box:T,circle:P,swing:L,done:F}=this.planKit();P(.7,1.85,.16);for(const[D,O]of[[.6,1.6],[1.9,2.9]])T(D,S+.08,O,S+.98),P((D+O)/2,S+.53,.06);T(1.45,x-.38,2.15,x-.08),T(-2.75,S+.06,-2.35,S+.26),P(-2.55,S+.5,.2),T(-3.22,-1.4,-2.9,-.9),T(-1.6,S+.08,.2,S+.48);const z=Math.PI/2;L(-1.15,x,.8,0,-z),L(1.15,x,.7,Math.PI,Math.PI+z),L(.3,-1.65,.8,-z,0),L(-1.7,-2.2,.7,-z,0),L(R,-.75,.85,-z,-Math.PI),F();for(const D of[-2,1.9]){const O=o(i+.6);this.fitting([D-.12,O-.04,i+.48],[D+.12,O,i+.72]),this.lamp(D,O-.05,i+.6,Ie.soffit,[0,-1,0],.35,[0,0,1,.05-i])}}pergola(){const[t,e,n,i]=[-3.5,3.5,-3.75,3.75];this.deck(Ut(t,n,e,i),0);const[r,a]=[.07,.06],[o,l]=[2.45,2.75],[c,h]=[e-.15,i-.15],f=[],u=(m,v)=>{f.push(new vn(v[0]-m[0],v[1]-m[1],v[2]-m[2]).translate((m[0]+v[0])/2,(m[1]+v[1])/2,(m[2]+v[2])/2))};for(const m of[-c,c]){for(const v of[-h,0,h])u([m-r,0,v-r],[m+r,o,v+r]);u([m-a,o,-h-r],[m+a,l,h+r])}for(const m of[-h,0,h])u([-c+a,o,m-a],[c-a,l,m+a]);this.mergedSolid(f,"edge","other",[0,1,0]);const d=[];for(let m=-c+.2;m<c-.1;m+=.4)d.push(new vn(.05,.2,2*(h+.15)).translate(m,l+.1,0));this.mergedSolid(d,"detail","roof",[0,1.6,0]),this.box([-2.8,0,.3],[.2,.42,1.15],[0,.4,0],"detail"),this.box([-2.8,.42,.3],[.2,.75,.5],[0,.4,0],"detail"),this.box([.2,0,.3],[1.05,.42,2.6],[0,.4,0],"detail"),this.box([.85,.42,.3],[1.05,.75,2.6],[0,.4,0],"detail"),this.box([-1.9,0,1.7],[-.7,.38,2.4],[0,.4,0],"detail"),this.box([-1.2,0,-2.4],[1.2,.75,-1.5],[0,.5,0],"detail");for(const[m,v]of[[-2.85,-2.55],[-1.35,-1.05]])this.box([-1.2,0,m],[1.2,.45,v],[0,.4,0],"detail");this.fitting([-.8,1.86,-1.99],[.8,1.9,-1.91]),this.lines([-.7,1.9,-1.95,-.7,l,-1.95,.7,1.9,-1.95,.7,l,-1.95],"faint"),this.lamp(0,1.84,-1.95,Ie.pendant,[0,-1,0],-.2);for(const m of[-2,1.9])this.fitting([m-.12,o-.04,h-.05],[m+.12,o,h+.05]),this.lamp(m,o-.05,h,Ie.soffit,[0,-1,0],.35)}mergedSolid(t,e,n,i){const r=W_(t);t.forEach(a=>a.dispose()),this.addPart(this.solid(r,e,n),i,n)}hotTub(){this.cylinder(0,0,1.15,0,.9,[0,.8,1]),this.lamp(0,.68,0,Ie.tub,[0,1,0],0)}bathtub(){const[t,e,n,i,r]=[1.7,.8,.6,.06,.42],a=f=>{const u=e/2-f,d=t/2-e/2,m=[];for(const[v,g]of[[d,0],[-d,Math.PI]])for(let p=0;p<=16;p++){const E=g+p/16*Math.PI;m.push(new st(u*Math.cos(E),v+u*Math.sin(E)))}return m},o=new Ls(a(0));o.holes.push(new Ur(a(i)));const l=this.extrusion(o,n,"edge","other");l.rotation.x=-Math.PI/2;const c=new ws(new Ls(a(i))).translate(0,0,r),h=new te(c,this.glass);h.renderOrder=1,l.add(h,new te(c,this.occluder)),this.disposables.push(c),this.addPart(l,[0,.4,0]),this.lamp(0,r-.02,0,Ie.bath,[0,1,0],0)}greenhouse(){const[t,e,n,i]=[1.5,2,1.9,2.7];this.box([-t,0,-e],[t,.2,e],[0,0,0],"detail");const r=[],a=[];for(let o=0;o<=6;o++){const l=-e+o*2*e/6,c=o===0||o===6?r:a;for(const h of[-t,t])c.push(h,.2,l,h,n,l,h,n,l,0,i,l)}for(const o of[-t,t])r.push(o,n,-e,o,n,e);r.push(0,i,-e,0,i,e);for(const o of[-e,e])for(const l of[-.75,.75])a.push(l,.2,o,l,n+(i-n)*(1-Math.abs(l)/t),o);for(const[o,l,c,h]of[[-t,-e,t,-e],[t,-e,t,e],[t,e,-t,e],[-t,e,-t,-e]])a.push(o,.8,l,c,.8,h);a.push(-.45,1.85,e,.45,1.85,e),this.lines(r,"detail"),this.lines(a,"faint")}raisedBeds(t){const e=[];for(let n=0;n<t;n++){const i=(n-(t-1)/2)*1.8;this.box([i-.6,0,-1.2],[i+.6,.45,1.2],[0,.4,0],"detail"),hi(i-.55,-1.15,i+.55,1.15,.452,e)}this.lines(e,"faint")}firePit(){this.cylinder(0,0,.5,0,.35,[0,.4,0]),this.lamp(0,.45,0,Ie.fire,[0,1,0],-.9);const t=[];Vi(0,0,2.1,.002,t,48),this.lines(t,"faint");for(const[e,n,i,r]of[[-.7,-1.7,.7,-1.3],[-.7,1.3,.7,1.7],[-1.7,-.7,-1.3,.7],[1.3,-.7,1.7,.7]])this.box([e,0,n],[i,.42,r],[0,.4,0],"detail")}trampoline(){const[t,e,n]=[1.75,.85,2.6],i=this.solid(new qi(t,t,.08,48),"detail","other");i.position.set(0,e,0),this.addPart(i,[0,.4,0]);const r=[],a=[];for(let l=0;l<6;l++){const c=l/6*Math.PI*2;r.push(t*Math.cos(c),0,t*Math.sin(c),t*Math.cos(c),e-.04,t*Math.sin(c))}for(let l=0;l<8;l++){const c=(l+.5)/8*Math.PI*2;a.push(t*Math.cos(c),e,t*Math.sin(c),t*Math.cos(c),n,t*Math.sin(c))}const o=[];Vi(0,0,t,n,o,48),this.lines([...r,...a],"detail"),this.lines(o,"faint")}swingSet(){const[t,e,n]=[1.6,2.3,.85];this.box([-t,e-.1,-.05],[t,e,.05],[0,.4,0],"detail");const i=[];for(const a of[-t+.1,t-.1])for(const o of[-n,n])i.push(a,0,o,a,e-.1,0);this.lines(i,"detail");const r=[];for(const a of[-.65,.65]){this.box([a-.23,.42,-.1],[a+.23,.46,.1],[0,.4,0],"detail");for(const o of[-.2,.2])r.push(a+o,.46,0,a+o,e-.1,0)}this.lines(r,"faint")}hut(t,e,n,i,r){const a=[[-t/2,0],[t/2,0],[t/2,n],[0,i],[-t/2,n]];this.prism({shape:Zt(a),depth:e,matrix:new Nt().makeTranslation(0,0,-e/2),explode:[0,.4,0],layers:!1});const[o,l]=r;this.lines([-o/2,0,e/2+.005,-o/2,l,e/2+.005,-o/2,l,e/2+.005,o/2,l,e/2+.005,o/2,l,e/2+.005,o/2,0,e/2+.005],"detail")}sandbox(){const[t,e]=[.8,.08];this.prism({shape:Zt(Ut(-t,-t,t,t),[Ut(-t+e,-t+e,t-e,t-e)]),depth:.25,matrix:Ke().setPosition(0,.25,0),explode:[0,.4,0],layers:!1,weight:"detail"})}hammock(){const[t,e]=[1.8,1.2],n=[-t+.3,0,0,t-.3,0,0,-t+.3,0,0,-t,e,0,t-.3,0,0,t,e,0];this.lines(n,"detail");const i=[],r=(a,o)=>{const l=1-(2*a-1)**2;return[-t+.15+(2*t-.3)*a,e-.05-.6*l,o*.45*Math.sqrt(l)]};for(const a of[-1,1])for(let o=0;o<16;o++)i.push(...r(o/16,a),...r((o+1)/16,a));this.lines(i,"detail")}villageSwing(){const[t,e,n]=[1.4,4.2,1.5];this.box([-t,e-.15,-.08],[t,e,.08],[0,.4,0],"detail");const i=[];for(const a of[-t+.1,t-.1])for(const o of[-n,n])i.push(a,0,o,a,e-.15,0);this.lines(i,"detail"),this.box([-1.05,.45,-.4],[1.05,.5,.4],[0,.4,0],"detail");const r=[];for(const a of[-.95,.95])for(const o of[-.32,.32])r.push(a,.5,o,a,e-.15,0);this.lines(r,"faint")}sunLounger(){const t=[[-1,0],[1,0],[1,.75],[.86,.75],[.45,.32],[-1,.32]];this.prism({shape:Zt(t),depth:.7,matrix:new Nt().makeTranslation(0,0,-.35),explode:[0,.4,0],layers:!1,weight:"detail"})}parasol(){this.box([-.025,0,-.025],[.025,2.2,.025],[0,.4,0],"faint");const t=this.solid(new qi(.03,1.3,.35,32),"detail","other");t.position.set(0,2.2,0),this.addPart(t,[0,.6,0])}carport(){const[t,e,n,i]=[-3.75,-2.8,3.75,2.8],r=1.75,a=l=>2.6+(l-e)*gs;for(const[l,c]of[[t,e],[t,i],[r,e],[r,i]])this.box([l-.07,0,c-.07],[l+.07,a(c),c+.07],[0,.4,0]);const o=Ut(r+.5,me.floor,r+1.5,Me.outbuilding);this.origin.y+=.1,this.monoPitch({x0:r,x1:n,z0:e,z1:i,low:a(e)-.1,high:a(i)-.1,frontOverhang:0,explode:.8,front:[o],frontGlass:[],side:[],roof:!1,doors:[o]}),this.origin.y-=.1,this.shedRoof({x0:t,x1:n,z0:e,z1:i,low:a(e),high:a(i),overhang:[.4,.4,.4],explode:1}),this.box([4.35,0,2.6],[6.35,1.6,3.3],[0,0,0],"detail")}outdoorKitchen(){const[t,e,n,i]=[-2.7,2.7,-2,2],r=2.6,a=r+(i-n)*gs,o=m=>r+(m-n)*gs,l=n+Jt;this.prism({shape:Zt(Ut(t,0,e,r)),depth:Jt,matrix:new Nt().makeTranslation(0,0,n),explode:[0,.2,-1.3],kind:"wall"});const c=[[-i,0],[-l,0],[-l,o(l)],[-i,o(i)]];this.prism({shape:Zt(c),depth:Jt,matrix:new Nt().makeRotationY(Math.PI/2).setPosition(t,0,0),explode:[-1.3,.2,0],kind:"wall"}),this.box([e-.15,0,i-.15],[e,o(i),i],[0,.6,1.3]),this.prism({shape:Zt(Ut(t,n,e,i)),depth:be,matrix:Ke(),explode:[0,0,0]}),this.shedRoof({x0:t,x1:e,z0:n,z1:i,low:r,high:a,overhang:[.35,.35,.6],explode:1.3});const h=t+Jt+.02;this.box([h,0,l+.02],[h+1.1,1.7,l+.9],[0,.6,0],"detail"),this.box([h+.4,1.7,l+.25],[h+.7,3.7,l+.55],[0,2.1,0],"detail");const f=[h+1.12,l+.02,e-.3,l+.67];this.box([f[0],0,f[1]],[f[2],.9,f[3]],[0,.6,0],"detail");const u=[],d=l+.903;u.push(h+.3,.9,d,h+.8,.9,d,h+.8,.9,d,h+.8,1.25,d),u.push(h+.8,1.25,d,h+.3,1.25,d,h+.3,1.25,d,h+.3,.9,d),hi(-.6,l+.12,.2,l+.55,.903,u),hi(.8,l+.1,1.9,l+.57,.903,u),this.lines(u,"faint"),this.box([-.6,0,.45],[1.8,.75,1.35],[0,.5,.8],"detail");for(const[m,v]of[[0,.35],[1.45,1.8]])this.box([-.6,0,m],[1.8,.45,v],[0,.4,.8],"detail");for(const m of[-.4,1.4]){const v=o(l+.45);this.fitting([m-.12,v-.04,l+.33],[m+.12,v,l+.57]),this.lamp(m,v-.05,l+.45,Ie.soffit,[0,-1,0],.35,[0,0,1,.05-l])}this.fitting([-.2,1.86,.86],[1.4,1.9,.94]),this.lines([-.1,1.9,.9,-.1,o(.9),.9,1.3,1.9,.9,1.3,o(.9),.9],"faint"),this.lamp(.6,1.84,.9,Ie.pendant,[0,-1,0],-.2)}pool(t,e,[n,i,r,a]){const[o,l,c,h]=[-t/2,-e/2,t/2,e/2],f=.35;this.holes.push(Ut(o,l,c,h).map(([y,S])=>{const w=new C(y,0,S).applyQuaternion(this.turn).add(this.origin);return[w.x,w.z]})),this.prism({shape:Zt(Ut(o-f,l-f,c+f,h+f),[Ut(o,l,c,h)]),depth:.08,matrix:Ke().setPosition(0,.08,0),explode:[0,.5,0],layers:!1});const u=[],d=-1.4;hi(o,l,c,h,d,u);for(const[y,S]of[[o,l],[c,l],[c,h],[o,h]])u.push(y,0,S,y,d,S);for(let y=1;y<=3;y++)u.push(o,-.3*y,l+.4*y,c,-.3*y,l+.4*y);this.lines(u,"detail");const m=[];hi(o+.05,l+.05,c-.05,h-.05,-.15,m);const[v,g,p,E]=[o-n,l-i,c+r,h+a];m.push(p,.002,g,v,.002,g,v,.002,g,v,.002,E,v,.002,E,p,.002,E);for(let y=g+1;y<E;y+=1)y>l-f&&y<h+f?m.push(v,.002,y,o-f,.002,y):m.push(v,.002,y,p,.002,y);this.lines(m,"faint")}deck(t,e){const n=[],[i,,r]=Zi(t);for(let a=i+.3;a<r;a+=.3){const[o,l]=zc(t,a);n.push(a,o,-.003,a,l,-.003)}this.prism({shape:Zt(t),depth:be,matrix:Ke(),explode:[0,0,e],extra:n,weight:"detail"})}paving(t){const n=[];for(const c of t.edges??[[...t.outline,t.outline[0]]])for(let h=0;h<c.length-1;h++)n.push(c[h][0],.002,c[h][1],c[h+1][0],.002,c[h+1][1]);this.batch(n,t.edgeWeight??"faint");const i=[],r=t.jointsAlong==="x",a=r?t.outline:t.outline.map(([c,h])=>[h,c]),[o,,l]=Zi(a);for(let c=o+t.joints;c<l;c+=t.joints){const[h,f]=zc(a,c);r?i.push(c,.002,h,c,.002,f):i.push(h,.002,c,f,.002,c)}this.batch(i,"faint")}steppingStones(t,e){const n=[];for(let i=0;i<t;i++)hi(-.3,i*e-.45,.3,i*e+.45,.002,n);this.batch(n,"detail")}outdoorShower(){this.box([-.05,0,-.05],[.05,2.3,.05],[0,.4,1],"detail"),this.box([-.05,2.2,-.5],[.05,2.3,.05],[0,.4,1],"detail")}tree(t,e,n){const i=e-t;this.batch([0,0,0,0,i-t,0],"detail");const r=[];Vi(0,0,t,i,r,40),this.batch(r,"faint");const a=[];for(let u=0;u<48;u++){const d=u/48*Math.PI*2,m=(u+1)/48*Math.PI*2;a.push(Math.cos(d)*t,Math.sin(d)*t,0,Math.cos(m)*t,Math.sin(m)*t,0)}const o=new ci(new Wi().setPositions(a),this.materialFor(n,"other"));o.renderOrder=2,o.position.set(0,i,0),this.disposables.push(o.geometry),this.billboards.push(o),this.addPart(o,[0,0,0]);const l=new te(this.crown,this.casterMaterial);l.scale.setScalar(t*.92),l.position.set(0,i,0);const c=i-t+.3,h=new qi(.12,.15,c),f=new te(h,this.casterMaterial);f.position.set(0,c/2,0);for(const u of[l,f])u.layers.set(Gh),this.addPart(u,[0,0,0]);this.disposables.push(h)}fence(t){const e=[];for(const[n,i,r,a,o=1.3]of t){const l=Math.hypot(r-n,a-i),c=Math.max(1,Math.round(l/2));for(let h=0;h<=c;h++){const f=n+(r-n)*h/c,u=i+(a-i)*h/c;e.push(f,0,u,f,o,u)}for(const h of[.2,.88])e.push(n,o*h,i,r,o*h,a)}this.lines(e,"faint")}road(){const n=this.plot.north-.6;this.lines([-90,.002,n,90,.002,n,-90,.002,n-6.5,90,.002,n-6.5],"detail");const i=[];for(let r=-90;r<90;r+=6)i.push(r,.002,n-6.5/2,r+3,.002,n-6.5/2);this.lines(i,"faint")}contours(){const{west:t,east:e,north:n,south:i}=this.plot,[r,a]=[(t+e)/2,(n+i)/2],o=[];for(let l=0;l<9;l++){const c=(e-t)/2+4+l*3.4,h=(i-n)/2+4+l*3.4;let f=null;for(let u=0;u<=200;u++){const d=u/200*Math.PI*2,m=Math.cos(d),v=Math.sin(d),g=1+(.05*Math.sin(2*d+l*.4)+.035*Math.sin(3*d+1.7)+.02*Math.sin(5*d+l))*(1+l*.12),p=r+c*g*Math.sign(m)*Math.sqrt(Math.abs(m)),E=a+h*g*Math.sign(v)*Math.sqrt(Math.abs(v));f&&E>n&&f[1]>n&&o.push(f[0],.002,f[1],p,.002,E),f=[p,E]}}this.lines(o,"faint")}ground(){const t=new ws(Zt(Ut(-200,-200,200,200),this.holes));t.applyMatrix4(Ke()),this.scene.add(new te(t,this.occluder));const e=new te(t,this.light.surface);e.renderOrder=1,this.scene.add(e),this.disposables.push(t)}monoPitch(t){const{x0:e,x1:n,z0:i,z1:r,low:a,high:o,explode:l}=t,c=v=>a+(v-i)/(r-i)*(o-a);this.prism({shape:Zt(Ut(e,0,n,o),t.front),depth:Jt,matrix:new Nt().makeTranslation(0,0,r-Jt),explode:[0,.2,l],kind:"wall",glass:t.frontGlass,leaves:t.doors}),this.prism({shape:Zt(Ut(e,0,n,a)),depth:Jt,matrix:new Nt().makeTranslation(0,0,i),explode:[0,.2,-l],kind:"wall"});const h=i+Jt,f=r-Jt,u=(i+r)/2,d=[[-(f-u),0],[-(h-u),0],[-(h-u),c(h)],[-(f-u),c(f)]],m=v=>new Nt().makeRotationY(Math.PI/2).setPosition(v,0,u);this.prism({shape:Zt(d,t.side),depth:Jt,matrix:m(n-Jt),explode:[l,.2,0],kind:"wall",glass:t.side}),this.prism({shape:Zt(d),depth:Jt,matrix:m(e),explode:[-l,.2,0],kind:"wall"}),this.prism({shape:Zt(Ut(e,i,n,r)),depth:.25,matrix:Ke(),explode:[0,0,0]}),t.roof!==!1&&this.shedRoof({x0:e,x1:n,z0:i,z1:r,low:a,high:o,overhang:[.35,.35,t.frontOverhang],explode:l})}shedRoof(t){const{x0:e,x1:n,z0:i,z1:r,low:a,high:o}=t,[l,c,h]=t.overhang,f=new C(0,o-a,r-i).normalize(),u=new C(1,0,0),d=new C().crossVectors(u,f),m=new C(0,a,i).addScaledVector(d,-.26),v=Math.hypot(r-i,o-a),g=v/(r-i);this.prism({shape:Zt(Ut(e-l,-c*g,n+l,v+h*g)),depth:Hi,matrix:new Nt().makeBasis(u,f,d).setPosition(m),explode:[0,t.explode*1.6,0],kind:"roof"})}build(t){const e=this.withHouse(t),n=this.slots.get(t.id),i=(r,a={})=>this.place({...t,slot:n},r,{house:e,...a});switch(t.type){case"cottage":return i(()=>this.cottage(),{y:be});case"gableHouse":case"flatHouse":return i(()=>this.house(t.type==="flatHouse"?"flat":"gable"),{y:be}),i(()=>this.houseInterior(),{y:be,reference:ov});case"sauna":return i(()=>this.sauna(),{y:be});case"pergola":return i(()=>this.pergola(),{y:be});case"hotTub":return i(()=>this.hotTub(),{y:be});case"bathtub":return i(()=>this.bathtub(),{y:be});case"greenhouse":return i(()=>this.greenhouse());case"raisedBeds":return i(()=>this.raisedBeds(t.count));case"firePit":return i(()=>this.firePit());case"trampoline":return i(()=>this.trampoline());case"swingSet":return i(()=>this.swingSet());case"gardenShed":return i(()=>this.hut(2.4,3,2,2.65,[.9,1.9]));case"playhouse":return i(()=>this.hut(1.6,1.6,1.3,1.9,[.6,1.1]));case"sandbox":return i(()=>this.sandbox());case"hammock":return i(()=>this.hammock());case"villageSwing":return i(()=>this.villageSwing());case"sunLounger":return i(()=>this.sunLounger(),{y:be});case"parasol":return i(()=>this.parasol(),{y:be});case"outdoorShower":return i(()=>this.outdoorShower(),{y:be});case"outdoorKitchen":return i(()=>this.outdoorKitchen(),{y:be});case"carport":return i(()=>this.carport());case"pool":return i(()=>this.pool(t.width,t.length,t.paving));case"deck":return i(()=>this.deck(t.outline,e?1.6:1),{y:be});case"paving":return i(()=>this.paving(t));case"steppingStones":return i(()=>this.steppingStones(t.count,t.spacing));case"bollard":return i(()=>this.bollard(0,0,t.height));case"tree":return i(()=>this.tree(t.radius,t.height,t.fruit?"faint":"detail"));case"hedge":{const[r,a]=[t.width/2,t.depth/2];return i(()=>this.box([-r,0,-a],[r,t.height,a],[0,0,0],"faint"))}case"fence":return i(()=>this.fence(t.runs))}}withHouse(t){for(let e=0;t&&e<10;e++,t=t.partOf?this.items.get(t.partOf):void 0)if(Xc.includes(t.type))return!0;return!1}place(t,e,{y:n=0,house:i=!1,reference:r=Oc}={}){this.turn.setFromAxisAngle(lv,ze.degToRad(t.rotation-r.rotation)),this.origin.set(r.x,0,r.z).applyQuaternion(this.turn).negate().add(new C(t.x,n,t.z)),this.building=i?"house":"site",this.slot=t.slot??0,e(),this.slot=0}batch(t,e){const n=this.batched[e]??={segments:[],slots:[]},i=new C;for(let r=0;r<t.length;r+=3)i.set(t[r],t[r+1],t[r+2]).applyQuaternion(this.turn).add(this.origin),n.segments.push(i.x,i.y,i.z);for(let r=0;r<t.length;r+=6)n.slots.push(this.slot)}drawBatched(){for(const[t,{segments:e,slots:n}]of Object.entries(this.batched)){this.lines(e,t);const i=this.parts[this.parts.length-1].object;this.shared.push({object:i,still:i.material,slots:n})}}lineSet(){return{edge:this.lineMaterial("edge"),detail:this.lineMaterial("detail"),faint:this.lineMaterial("faint"),roofEdge:this.lineMaterial("edge"),roofDetail:this.lineMaterial("detail")}}lineMaterial(t){const[e,n]=dv[t],i=new Fh({color:new Vt().setScalar(e),linewidth:n,transparent:!0,fog:!0});return i.userData.width=n,i.userData.intensity=e,i}fill(t,e=!1){return new Qi({color:t,vertexColors:e,transparent:!0,opacity:0,blending:wr,depthWrite:!1,side:rn})}materialFor(t,e){const n=this.materials;return e==="roof"?t==="edge"?n.roofEdge:n.roofDetail:n[t]}addPart(t,e,n="other"){t.position.applyQuaternion(this.turn).add(this.origin),t.quaternion.premultiply(this.turn),this.scene.add(t);const i=new C(...e).applyQuaternion(this.turn);this.parts.push({object:t,base:t.position.clone(),explode:i,kind:n,house:this.building==="house",slot:this.slot})}solid(t,e,n,i){const r=new vs;r.add(new te(t,this.occluder));const a=new te(t,this.light.surface);a.renderOrder=1,r.add(a);const o=new Wi;if(i)o.setPositions(i);else{const c=new Af(t,15);o.fromEdgesGeometry(c),c.dispose()}const l=new ci(o,this.materialFor(e,n));return l.renderOrder=2,r.add(l),this.disposables.push(t,o),r}extrusion(t,e,n,i){const r=new jo(t,{depth:e,bevelEnabled:!1,curveSegments:1});return this.solid(r,n,i,xv(t,e))}prism(t){const{shape:e,depth:n,kind:i="other",layers:r=!0,weight:a="edge"}=t,o=this.extrusion(e,n,a,i),l=o.children[0].geometry;if(t.matrix.decompose(o.position,o.quaternion,o.scale),i==="wall"){const f=new te(l,this.poche);f.renderOrder=1,o.add(f)}const c=t.light??(t.glass??[]).map(f=>({outline:f,level:1}));for(const f of t.glass?.length?c:[])this.frame(f,o,n);for(const f of t.leaves??[]){const u=this.extrusion(Zt(f),Nc,"detail","other");u.position.z=(n-Nc)/2,o.add(u)}for(const f of t.glass??[]){const u=new ws(Zt(f));u.translate(0,0,n/2);const[d,m]=mv(f),v=c.find(({outline:y})=>gv(y,d,m))?.level??1,g=u.getAttribute("position"),p=[];for(let y=0;y<g.count;y++){const S=v*(.6+.55*ze.smoothstep(g.getY(y),0,2.8));p.push(S,S,S)}u.setAttribute("color",new de(p,3));const E=new te(u,this.pane);E.renderOrder=1,o.add(E),this.disposables.push(u)}if(c.length){const f=new Nt().compose(this.origin,this.turn,new C(1,1,1)).multiply(t.matrix);for(const u of c)this.aperture(u,f,n)}const h=[...t.extra??[]];if(r){const f=[e.getPoints().map(u=>[u.x,u.y]),...e.holes.map(u=>u.getPoints().map(d=>[d.x,d.y]))];Gc(f,n/3,h),Gc(f,n*2/3,h)}if(h.length){const f=new Wi().setPositions(h),u=new ci(f,this.materialFor("detail",i));u.renderOrder=2,o.add(u),this.disposables.push(f)}this.addPart(o,t.explode,i)}box(t,e,n,i="edge",r="other"){const a=new C(e[0]-t[0],e[1]-t[1],e[2]-t[2]),o=this.solid(new vn(a.x,a.y,a.z),i,r);o.position.set((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),this.addPart(o,n,r)}cylinder(t,e,n,i,r,a){const o=this.solid(new qi(n,n,r-i,48,1,!0),"edge","other"),l=[];Vi(0,0,n-.14,(r-i)/2,l,48),Vi(0,0,n-.14,(r-i)/2-.2,l,48);const c=new Wi().setPositions(l),h=new ci(c,this.materialFor("detail","other"));h.renderOrder=2,o.add(h);const f=new Jo(n-.14,48).rotateX(-Math.PI/2).translate(0,(r-i)/2-.2,0),u=new te(f,this.glass);u.renderOrder=1,o.add(u,new te(f,this.occluder)),this.disposables.push(c,f),o.position.set(t,(i+r)/2,e),this.addPart(o,a)}aperture(t,e,n){const[i,r,a,o]=Zi(t.outline),l=new C((i+a)/2,(r+o)/2,n/2).applyMatrix4(e),c=new C(1,0,0).transformDirection(e),h=new C(0,1,0).transformDirection(e),f=new C().crossVectors(c,h).setY(0).normalize();f.dot(new C().subVectors(this.origin,l))<0&&f.negate();const u=l.clone().addScaledVector(f,2.2).setY(t.ceiling??2.5);this.light.apertures.push({centre:l,u:c,v:h,source:u,halfWidth:(a-i)/2,halfHeight:(o-r)/2,intensity:Ie.window*t.level,panes:(t.columns?.length??0)+1,slot:this.slot})}frame(t,e,n){const[i,r,a,o]=Zi(t.outline),l=[i,...t.columns??[],a],c=[r,...t.rows??[],o],h=[];for(let u=0;u<l.length-1;u++)for(let d=0;d<c.length-1;d++){const m=_v(t.outline,l[u],c[d],l[u+1],c[d+1]);m.length>=3&&h.push(vv(m,av))}const f=this.extrusion(Zt(t.outline,h),Fc,"detail","other");f.position.z=(n-Fc)/2,e.add(f)}lamp(t,e,n,i,r,a,o){const l=new C(t,e,n).applyQuaternion(this.turn).add(this.origin),c=new ee(0,0,0,1);if(o){const h=new C(o[0],o[1],o[2]).applyQuaternion(this.turn),f=new C(o[0],o[1],o[2]).multiplyScalar(-o[3]).applyQuaternion(this.turn).add(this.origin);c.set(h.x,h.y,h.z,-h.dot(f))}this.light.lamps.push({position:l,intensity:i,direction:new C(...r).applyQuaternion(this.turn).normalize(),cosOuter:a,clip:c,slot:this.slot})}fitting(t,e){const n=new vn(e[0]-t[0],e[1]-t[1],e[2]-t[2]),i=new te(n,this.glass);i.position.set((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),i.renderOrder=1,this.disposables.push(n),this.addPart(i,[0,0,0])}bollard(t,e,n){this.box([t-.06,0,e-.06],[t+.06,n,e+.06],[0,0,0],"detail"),this.fitting([t-.062,n-.16,e-.062],[t+.062,n-.06,e+.062]),this.lamp(t,n-.11,e,Ie.bollard,[0,-1,0],-.45)}lines(t,e){const n=new Wi().setPositions(t),i=new ci(n,this.materialFor(e,"other"));i.renderOrder=2,this.disposables.push(n),this.addPart(i,[0,0,0])}}function Mi(s,{without:t=[],change:e={},add:n=[]}){const i=s.items.map(a=>e[a.id]?{...a,...e[a.id]}:a),r=t.reduce(jh,{...s,items:i});return{...r,items:[...r.items,...n]}}const Sv=Nr.items.find(s=>s.id==="hot-tub"),Ns=Mi(Nr,{without:["hot-tub"],add:[{id:"lounger-1",type:"sunLounger",x:9.7,z:6.9,rotation:0,partOf:"sauna-deck"},{id:"lounger-2",type:"sunLounger",x:9.7,z:9.1,rotation:0,partOf:"sauna-deck"},{id:"parasol",type:"parasol",x:10,z:8,rotation:0,partOf:"sauna-deck"}]}),Vh=Mi(Ns,{without:["pool","shower"],change:{sauna:{id:"pergola",type:"pergola"},"sauna-deck":{partOf:"pergola"},"stepping-stones":{connects:["terrace","fire-pit","sauna-deck"]}},add:[Sv,{id:"fire-pit",type:"firePit",x:5.55,z:9.5,rotation:0,partOf:"garden"}]}),kh=Mi(Vh,{add:[{id:"greenhouse",type:"greenhouse",x:-4.5,z:15.2,rotation:0,partOf:"garden"},{id:"vegetable-beds",type:"raisedBeds",x:.3,z:15.2,rotation:0,count:3,partOf:"garden"}]}),Wh=Mi(kh,{without:["terrace","terrace-west"],change:{house:{type:"cottage",x:2,z:-5.52,rotation:180}},add:[{id:"shed",type:"gardenShed",x:-6.5,z:-10,rotation:0,partOf:"garden"},{id:"kiik",type:"villageSwing",x:-6,z:-3,rotation:0,partOf:"garden"}]}),Mv=Mi(Wh,{without:["pergola","hot-tub","fire-pit"],add:Ns.items.filter(s=>["sauna","shower","pool"].includes(s.id)),change:{"sauna-deck":{partOf:"sauna"},"stepping-stones":{connects:["pool","sauna-deck"]}}}),yv=Mi(Ns,{change:{house:{type:"flatHouse"}},add:[{id:"playhouse",type:"playhouse",x:-6.5,z:8,rotation:0,partOf:"garden"},{id:"sandbox",type:"sandbox",x:-4.2,z:8.6,rotation:0,partOf:"garden"},{id:"trampoline",type:"trampoline",x:-5.5,z:15,rotation:0,partOf:"garden"},{id:"swing",type:"swingSet",x:-.5,z:16.2,rotation:0,partOf:"garden"}]}),bv=Mi(Ns,{without:["outdoor-kitchen","carport"],change:{house:{type:"flatHouse"}},add:[{id:"hammock",type:"hammock",x:-5,z:11,rotation:0,partOf:"garden"}]}),Do={sauna:{label:"Sauna and pool",layout:Ns},pergola:{label:"Pergola and fire pit",layout:Vh},kitchenGarden:{label:"Kitchen garden",layout:kh},farmstead:{label:"Farmstead (cottage)",layout:Wh},cottageSpa:{label:"Cottage, sauna and pool",layout:Mv},family:{label:"Family garden",layout:yv},minimal:{label:"Minimal",layout:bv}},Hc=["sauna","pergola","kitchenGarden","farmstead","cottageSpa","family","minimal"];function Ev(){const s=new URLSearchParams(location.search).get("set");return s&&s in Do?s:"sauna"}function wv(){const s=new URLSearchParams(location.search);return!s.has("set")&&!s.has("scene")&&s.get("autoplay")!=="0"}const Tv=[{name:"Cormorant Garamond",family:'"Cormorant Garamond Variable", "Cormorant Garamond", serif',google:"Cormorant+Garamond:wght@400;500;600",body:500,heading:600,scale:1.22},{name:"Marcellus",family:'"Marcellus", serif',google:"Marcellus",body:400,heading:400,scale:1},{name:"Italiana",family:'"Italiana", serif',google:"Italiana",body:400,heading:400,scale:1.08},{name:"Bodoni Moda",family:'"Bodoni Moda Variable", "Bodoni Moda", serif',google:"Bodoni+Moda:wght@400;600",body:400,heading:600,scale:1.04},{name:"Fraunces",family:'"Fraunces Variable", "Fraunces", serif',google:"Fraunces:wght@300;600",body:300,heading:600,scale:1},{name:"Josefin Sans",family:'"Josefin Sans Variable", "Josefin Sans", sans-serif',google:"Josefin+Sans:wght@300;600",body:300,heading:600,scale:1.08},{name:"Syne",family:'"Syne Variable", "Syne", sans-serif',google:"Syne:wght@400;600",body:400,heading:600,scale:.96},{name:"Tenor Sans",family:'"Tenor Sans", sans-serif',google:"Tenor+Sans",body:400,heading:400,scale:1},{name:"Open Sans",family:'"Open Sans Variable", "Open Sans", sans-serif',google:"Open+Sans:wght@300;600",body:300,heading:600,scale:1}],Av=Tv.find(s=>s.name==="Syne"),Xe=1024,Xh={background:"#161616",haze:"#3a3936",hazeStrength:1,hazeSize:1.5,vignette:.25,grain:.03,pattern:"grid",cube:"#0b0b0b",roughness:.7,metalness:.1,reflections:.05,keyLight:.6,motif:"site",motifStrength:1.2,motifBlur:2.5,motifDepth:.5,motifHalo:.4,motifLights:1},Vc=12,_r=[1.5,1,.75],Rv=.75,Cv=1/45,kc=40,ui=["right","left","top","bottom","front","back"],Wc={front:new tn,top:new tn().setFromEuler(new qe(Math.PI/2,0,0)),bottom:new tn().setFromEuler(new qe(-Math.PI/2,0,0)),right:new tn().setFromEuler(new qe(0,-Math.PI/2,0)),left:new tn().setFromEuler(new qe(0,Math.PI/2,0))};class Pv{constructor(t,e){this.canvas=t,this.options=e,this.faces=e.faces;const n=new URLSearchParams(location.search).get("intro"),i=n&&I_.includes(n)?n:"significance";this.site=new Ua(e.reducedMotion,this.layout,Po(this.layout,i)),wv()&&!e.reducedMotion&&(this.autoplay={at:0,wait:Vc}),this.renderer=new A_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=xn,this.renderer.info.autoReset=!1,this.scene.add(this.background.mesh),this.defocus=new H_(this.renderer),this.disposables.push(this.background,this.site,this.defocus);const r=new Ao(this.renderer),a=r.fromScene(new R_,.04).texture;this.scene.environment=a,r.dispose(),this.disposables.push(a),this.camera.position.set(0,0,5),this.scene.add(new Sd(16777215,.08)),this.keyLight=new xd(16777215),this.keyLight.position.set(-3,4,5),this.scene.add(this.keyLight);const o=new sl(1,1,1,2,.006),l=ui.map(()=>new Eo({emissive:16777215,emissiveIntensity:0,dithering:!0}));this.cube=new te(o,l),this.cube.scale.setScalar(.85),this.scene.add(this.cube),this.disposables.push(o,...l),this.applyLook(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.clock.connect(document),this.renderer.setAnimationLoop(()=>this.frame());const c=new URLSearchParams(location.search);c.has("stats")&&_l(async()=>{const{createStats:h}=await import("./stats.stRsLA2M.js");return{createStats:h}},[]).then(({createStats:h})=>this.statsPanel=h(this)),c.has("scene")&&_l(async()=>{const{createScenePanel:h}=await import("./scenePanel.CK3Ea41q.js");return{createScenePanel:h}},__vite__mapDeps([0,1,2,3,4,5])).then(({createScenePanel:h})=>this.scenePanel=h(this))}look={...Xh};renderer;scene=new Or;camera=new $e(32,1,.1,100);cube;background=new L_;site;time=Nr.time;layout=Do[Ev()].layout;pendingLayout;autoplay;defocus;drawingRatio=1;drawingLevel=0;frameTimes=[];siteDrawn=!1;blurred="";keyLight;raycaster=new Td;resizeObserver;disposables=[];tuner;statsPanel;scenePanel;onFrame;links={};logo;font=Av;faces;faceTextures=[];hoveredHref=null;drawnPattern;baseRotation=new tn().setFromEuler(new qe(-.5,.9,.15));targetRotation=Wc.front;activeSide="front";pointer=new st;smoothPointer=new st;clock=new Ed;bufferSize=new st;screenPosition=new C;intro=0;applyLook(){const{look:t}=this;for(const e of this.cube.material)e.color.set(t.cube),e.roughness=t.roughness,e.metalness=t.metalness;this.scene.environmentIntensity=t.reflections,this.keyLight.intensity=t.keyLight,this.background.setColours(t.background,t.haze),this.background.setVignette(t.vignette),this.background.setGrain(t.grain,this.renderer.getPixelRatio()),t.pattern!==this.drawnPattern&&this.faceTextures.length&&ui.forEach((e,n)=>{this.faces.some(i=>i.side===e)||(this.faceTextures[n].dispose(),this.faceTextures[n]=this.drawFace(n))}),this.drawnPattern=t.pattern}async loadFaces(){this.logo=await Lv(this.options.logoUrl),await this.setFont(this.font)}async setFont(t){this.font=t,await Promise.all([document.fonts.load(`${t.body} 64px ${t.family}`),document.fonts.load(`${t.heading} 32px ${t.family}`)]),!(this.font!==t||!this.logo)&&(this.faceTextures.forEach(e=>e.dispose()),this.faceTextures=ui.map((e,n)=>this.drawFace(n)))}setHoveredLink(t){if(t===this.hoveredHref)return;const e=this.hoveredHref;this.hoveredHref=t,ui.forEach((n,i)=>{!(n!=="back"&&this.links[n]?.some(a=>a.href===t||a.href===e))||!this.faceTextures[i]||(this.faceTextures[i].dispose(),this.faceTextures[i]=this.drawFace(i))})}setFaces(t){this.faces=t,this.logo&&(this.faceTextures.forEach(e=>e.dispose()),this.faceTextures=ui.map((e,n)=>this.drawFace(n)))}setTime(t){this.time=t,this.site.setTime(t)}setLayout(t,e=!1){if(this.site.transitioning&&!this.site.transitionDone){this.pendingLayout=t;return}const n=this.layout;if(this.layout=t,!e||this.options.reducedMotion)return this.replaceSite(new Ua(this.options.reducedMotion,{...t,time:this.time}));const i=(v,g)=>{const p=v.items.find(y=>y.id===tu(v,g));return(!!p&&Xc.includes(p.type))+JSON.stringify(g,(y,S)=>y==="connects"||y==="role"||y==="partOf"?void 0:S)},r=new Map(n.items.map(v=>[v.id,v])),a=new Map(t.items.map(v=>[v.id,v])),o=v=>{const[g,p]=[r.get(v),a.get(v)];return!!g&&!!p&&i(n,g)===i(t,p)},l=t.items.filter(v=>!o(v.id)).map(v=>v.id),c=n.items.filter(v=>!o(v.id));if(!l.length&&!c.length)return;const h=new Set(c.map(v=>v.id)),f=c.map(v=>({...v,id:`${v.id}~old`,...v.partOf&&h.has(v.partOf)&&{partOf:`${v.partOf}~old`}})),u={...t,time:this.time,items:[...t.items,...f]},d=new Set(l),m=B_({...t,items:t.items.filter(v=>d.has(v.id))},{...t,items:f});this.replaceSite(new Ua(!1,u,m,"change"))}replaceSite(t){const e=this.site;this.site=t,this.site.setSide(this.activeSide),this.site.settle(),this.disposables.splice(this.disposables.indexOf(e),1,this.site),e.dispose(),this.blurred="",this.resize()}showSide(t){this.activeSide=t,this.targetRotation=Wc[t],this.site.setSide(t)}setPointer(t,e){this.pointer.set(t,e)}pick(t,e){const n=this.canvas.getBoundingClientRect(),i=new st((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.camera);const[r]=this.raycaster.intersectObject(this.cube);if(!r)return{hit:!1};const a=r.face?ui[r.face.materialIndex]:void 0;if(!r.uv||a!==this.activeSide)return{hit:!0};const{x:o,y:l}=r.uv;return{hit:!0,href:this.links[a]?.find(h=>o>=h.u0&&o<=h.u1&&l>=h.v0&&l<=h.v1)?.href}}dispose(){this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect(),this.clock.dispose(),this.tuner?.destroy(),this.statsPanel?.destroy(),this.scenePanel?.destroy(),this.faceTextures.forEach(t=>t.dispose()),this.disposables.forEach(t=>t.dispose()),this.renderer.dispose()}drawFace(t){const e=ui[t],n=this.faces.find(l=>l.side===e),{canvas:i,links:r}=e==="front"?Iv(this.logo):n?Ov(n,this.font,this.hoveredHref):Dv(this.look.pattern),a=new wf(i);a.colorSpace=Je,a.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=this.cube.material[t];return o.emissiveMap=a,o.emissiveIntensity=1,o.needsUpdate=!0,e!=="back"&&(this.links[e]=r),a}resize(){const{clientWidth:t,clientHeight:e}=this.canvas;if(!t||!e)return;this.renderer.setSize(t,e,!1);const n=Math.min(window.devicePixelRatio,_r[0]),i=this.drawingRatio=Math.min(window.devicePixelRatio,_r[this.drawingLevel]),r=Math.pow(n/i,Rv);this.site.resize(Math.round(t*i),Math.round(e*i),i,r);const a=t/e,h=1/((a<1?.56:.34)*Math.min(1,a))/(2*Math.tan(ze.degToRad(this.camera.fov/2)));this.camera.aspect=a,this.camera.position.z=h+.5,this.camera.updateProjectionMatrix()}updateMotif(t,e){const{motif:n,motifStrength:i,motifBlur:r,motifDepth:a,motifHalo:o,motifLights:l}=this.look;if(n==="site"){if(this.site.transitionDone){this.setLayout(this.layout);const u=this.pendingLayout;this.pendingLayout=void 0,u&&this.setLayout(u,!0)}const c=this.autoplay;c&&!this.site.animating&&(c.wait-=t)<=0&&(c.at=(c.at+1)%Hc.length,c.wait=Vc,this.setLayout(Do[Hc[c.at]].layout,!0));const{site:h}=this;h.lightLevel=l,this.siteDrawn=h.render(this.renderer,t,e,this.smoothPointer);let f=h.target.texture;if(r>0){const[u,d]=h.depthRange,m={sigma:r*this.drawingRatio,depth:a,near:h.camera.near,far:h.camera.far,rangeNear:u,rangeFar:d},v=JSON.stringify(m);(this.siteDrawn||v!==this.blurred)&&this.defocus.render(this.renderer,h.target,m),this.blurred=v,f=this.defocus.texture}else this.blurred="";this.background.setDrawing(f,i*this.intro,o)}else this.siteDrawn=!1,this.background.setDrawing(null,0)}gpuName(){const t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return String(t.getParameter(e?e.UNMASKED_RENDERER_WEBGL:t.RENDERER))}frame(){this.renderer.info.reset(),this.clock.update();const t=this.clock.getDelta(),e=Math.min(t,.1),n=this.clock.getElapsed();this.watchFrames(t,n);const i=this.options.reducedMotion?0:1,r=1-Math.exp(-e*(this.options.reducedMotion?20:5));this.baseRotation.slerp(this.targetRotation,r),this.smoothPointer.lerp(this.pointer,1-Math.exp(-e*4));const a=new tn().setFromEuler(new qe(i*(this.smoothPointer.y*.22+Math.sin(n*.7)*.035),i*(-this.smoothPointer.x*.28+Math.sin(n*.5+1)*.045),0));this.cube.quaternion.copy(a).multiply(this.baseRotation),this.cube.position.y=i*Math.sin(n*.9)*.05,this.renderer.getDrawingBufferSize(this.bufferSize);const o=this.screenPosition.copy(this.cube.position).project(this.camera),l=2*this.camera.position.z*Math.tan(ze.degToRad(this.camera.fov/2)),c=this.bufferSize.y/l*this.cube.scale.x;this.intro=Math.min(1,this.intro+e*.6);const h=1+i*Math.sin(n*.6)*.06;if(this.background.setHaze((o.x*.5+.5)*this.bufferSize.x,(o.y*.5+.5)*this.bufferSize.y,this.look.hazeSize*c,this.look.hazeStrength*this.intro*h),this.background.setGrainFrame(i*Math.floor(n*24)),this.updateMotif(e,n),this.renderer.render(this.scene,this.camera),this.onFrame){const{info:f,domElement:u}=this.renderer;this.onFrame({elapsed:t,siteDrawn:this.siteDrawn,drawingLevel:this.drawingLevel,drawing:[this.site.target.width,this.site.target.height],canvas:[u.width,u.height],calls:f.render.calls,triangles:f.render.triangles})}}watchFrames(t,e){if(this.siteDrawn&&e>2&&t>0&&t<1&&this.frameTimes.push(t),this.frameTimes.length<kc)return;const n=this.frameTimes.sort((a,o)=>a-o)[kc>>1];if(this.frameTimes.length=0,n<=Cv)return;const i=a=>Math.min(window.devicePixelRatio,_r[a]),r=i(this.drawingLevel);for(;this.drawingLevel<_r.length-1&&i(this.drawingLevel)>=r;)this.drawingLevel++;this.resize()}}function al(){const s=document.createElement("canvas");s.width=s.height=Xe;const t=s.getContext("2d");return t.fillStyle="#000",t.fillRect(0,0,Xe,Xe),[s,t]}function Lv(s){return new Promise((t,e)=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>e(new Error(`Failed to load ${s}`)),n.src=s})}function Dv(s){const[t,e]=al(),n=Xe,i=(r,a,o,l)=>{e.beginPath(),e.moveTo(r,a),e.lineTo(o,l),e.stroke()};if(e.lineWidth=2.5,e.lineCap="square",s==="room"){const r=n*.22,a=6;for(let c=a;c>=1;c--){const h=n*Math.pow(r/n,c/a),f=Math.round(40+50*(c/a));e.strokeStyle=`rgb(${f},${f},${f})`,e.strokeRect((n-h)/2,(n-h)/2,h,h)}e.strokeStyle="#3a3a3a";const o=(n-r)/2,l=(n+r)/2;i(0,0,o,o),i(n,0,l,o),i(0,n,o,l),i(n,n,l,l)}else if(s==="grid"){for(let l=1;l<16;l++){const c=n*l/16;e.strokeStyle=l%4===0?"#3c3c3c":"#262626",i(c,0,c,n),i(0,c,n,c)}e.strokeStyle="#8a8a8a";const a=n/2,o=n*.035;i(a-o,a,a+o,a),i(a,a-o,a,a+o)}else{const r=n*.12;e.save(),e.beginPath(),e.rect(r,r,n-r*2,n-r*2),e.clip(),e.strokeStyle="#333";for(let a=-1024;a<n;a+=44)i(a,n,a+n,0);e.restore(),e.strokeStyle="#5a5a5a",e.strokeRect(r,r,n-r*2,n-r*2)}return{canvas:t,links:[]}}function Iv(s){const[t,e]=al(),n=Xe*.6,i=n*(s.naturalWidth/s.naturalHeight);return e.imageSmoothingQuality="high",e.drawImage(s,(Xe-i)/2,(Xe-n)/2,i,n),{canvas:t,links:[]}}function Uv(s,t,e,n,i){for(const r of t)s.fillText(r,e,n),e+=s.measureText(r).width+i}function Nv(s,t,e){const n=[];let i="";for(const r of t.split(/\s+/)){const a=i?`${i} ${r}`:r;i&&s.measureText(a).width>e?(n.push(i),i=r):i=a}return i&&n.push(i),n}function Fv(s,t,e){return t.flatMap((n,i)=>{const r=i===0?0:.35;return typeof n!="string"?[{text:n.text,href:n.href,gapBefore:r}]:Nv(s,n,e).map((a,o)=>({text:a,gapBefore:o===0?r:0}))})}function Ov(s,t,e){const[n,i]=al(),r=Xe*.15,a=Xe-r*2,o=30*t.scale,l=110;let c=64*t.scale,h=[],f=0;for(;c>=40;c-=4){i.font=`${t.body} ${c}px ${t.family}`,h=Fv(i,s.lines??[],a),f=c*1.38;const v=Math.max(...h.map(p=>i.measureText(p.text).width)),g=h.reduce((p,E)=>p+f*(1+E.gapBefore),0);if(v<=a&&g+l<=Xe-r*2)break}const u=h.reduce((v,g)=>v+f*(1+g.gapBefore),0);let d=(Xe-(l+u))/2;s.heading&&(i.font=`${t.heading} ${o}px ${t.family}`,i.fillStyle="#8c8c8c",i.textBaseline="top",Uv(i,s.heading.toUpperCase(),r,d,o*.36),i.fillStyle="#4a4a4a",i.fillRect(r,d+o+28,56,2)),d+=l;const m=[];i.font=`${t.body} ${c}px ${t.family}`,i.textBaseline="alphabetic";for(const v of h){d+=f*v.gapBefore;const g=d+c*1.02;if(i.fillStyle="#f2f2f2",i.fillText(v.text,r,g),v.href){const p=v.href===e,E=c*.4,y=r+i.measureText(v.text).width+c*(p?.34:.28);Bv(i,y,g-c*.04,E,Math.max(2,c*.05),p?"#fff":"#7a7a7a"),m.push({u0:r/Xe,u1:(y+E+c*.1)/Xe,v0:1-(d+f)/Xe,v1:1-d/Xe,href:v.href})}d+=f}return{canvas:n,links:m}}function Bv(s,t,e,n,i,r){const a=e-n,o=t+n,l=n*.55;s.save(),s.strokeStyle=r,s.lineWidth=i,s.lineCap="round",s.lineJoin="round",s.beginPath(),s.moveTo(t,e),s.lineTo(o,a),s.moveTo(o-l,a),s.lineTo(o,a),s.lineTo(o,a+l),s.stroke(),s.restore()}const Gv=Object.freeze(Object.defineProperty({__proto__:null,CubeScene:Pv,DEFAULT_LOOK:Xh},Symbol.toStringTag,{value:"Module"}));export{Gv as C,Do as S,Ev as s};
