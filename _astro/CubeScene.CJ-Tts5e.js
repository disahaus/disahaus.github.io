import{_ as _h}from"./FrontPageScreen.Bh_NEtXe.js";import"./runtime-dom.esm-bundler.B2kEdFR8.js";/* empty css                       *//**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="186",vh=0,$o=1,xh=2,or=1,Sh=2,os=3,fi=0,Xe=1,on=2,Gn=0,us=1,dr=2,Qo=3,jo=4,Mh=5,Oi=100,yh=101,Eh=102,bh=103,wh=104,Th=200,Ah=201,Rh=202,Ch=203,gc=204,_c=205,Ph=206,Lh=207,Dh=208,Ih=209,Uh=210,Nh=211,Fh=212,Oh=213,Bh=214,ga=0,_a=1,va=2,ms=3,xa=4,Sa=5,Ma=6,ya=7,po=0,zh=1,Gh=2,vn=0,vc=1,xc=2,Sc=3,Mc=4,yc=5,Ec=6,bc=7,wc=300,di=301,ki=302,Pr=303,Lr=304,br=306,Ea=1e3,Bn=1001,ba=1002,Le=1003,Hh=1004,ws=1005,Oe=1006,Dr=1007,ti=1008,Ke=1009,Tc=1010,Ac=1011,gs=1012,mo=1013,Pn=1014,gn=1015,Sn=1016,go=1017,_o=1018,_s=1020,Rc=35902,Cc=35899,Pc=1021,Lc=1022,_n=1023,Vn=1026,hi=1027,vo=1028,xo=1029,pi=1030,So=1031,Mo=1033,lr=33776,cr=33777,hr=33778,ur=33779,wa=35840,Ta=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,La=37496,Da=37488,Ia=37489,pr=37490,Ua=37491,Na=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,Ga=37813,Ha=37814,Va=37815,ka=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,Za=37821,Ja=36492,Ka=36494,$a=36495,Qa=36283,ja=36284,mr=36285,to=36286,Vh=3200,gr=0,kh=1,jn="",Ye="srgb",_r="srgb-linear",vr="linear",ue="srgb",Ir=7680,Wh=519,Xh=512,qh=513,Yh=514,yo=515,Zh=516,Jh=517,Eo=518,Kh=519,Dc=35044,tl="300 es",Rn=2e3,vs=2001;function $h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qh(){const i=xr("canvas");return i.style.display="block",i}const el={};function Sr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ic(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Ic(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=Ic(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Gi(...i){const t=i.join(" ");t in el||(el[t]=!0,zt(...i))}function jh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const tu={[ga]:_a,[va]:Ma,[xa]:ya,[ms]:Sa,[_a]:ga,[Ma]:va,[ya]:xa,[Sa]:ms};class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const Hi=Math.PI/180,xs=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function bo(i,t){return(i%t+t)%t}function eu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function nu(i,t,e){return i!==t?(e-i)/(t-i):0}function fs(i,t,e){return(1-e)*i+e*t}function iu(i,t,e,n){return fs(i,t,1-Math.exp(-e*n))}function su(i,t=1){return t-Math.abs(bo(i,t*2)-t)}function ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ou(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lu(i,t){return i+Math.random()*(t-i)}function cu(i){return i*(.5-Math.random())}function hu(i){i!==void 0&&(nl=i);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uu(i){return i*Hi}function fu(i){return i*xs}function du(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function pu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const qe={DEG2RAD:Hi,RAD2DEG:xs,generateUUID:Cn,clamp:Wt,euclideanModulo:bo,mapLinear:eu,inverseLerp:nu,lerp:fs,damp:iu,pingpong:su,smoothstep:ru,smootherstep:au,randInt:ou,randFloat:lu,randFloatSpread:cu,seededRandom:hu,degToRad:uu,radToDeg:fu,isPowerOfTwo:du,ceilPowerOfTwo:pu,floorPowerOfTwo:mu,setQuaternionFromProperEuler:gu,normalize:fe,denormalize:mn};class st{static{st.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],S=r[a+3];if(f!==S||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*S;m<0&&(u=-u,d=-d,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+S*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+S*o;const E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{R.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new R,il=new $e;class kt{static{kt.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],S=s[0],m=s[3],p=s[6],E=s[1],A=s[4],x=s[7],b=s[2],y=s[5],C=s[8];return r[0]=a*S+o*E+l*b,r[3]=a*m+o*A+l*y,r[6]=a*p+o*x+l*C,r[1]=c*S+h*E+f*b,r[4]=c*m+h*A+f*y,r[7]=c*p+h*x+f*C,r[2]=u*S+d*E+g*b,r[5]=u*m+d*A+g*y,r[8]=u*p+d*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=f*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=u*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new kt,sl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _u(){const i={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_r]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}const ee=_u();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class vu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Si===void 0&&(Si=xr("canvas")),Si.width=t.width,Si.height=t.height;const s=Si.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Si}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xu=0;class wo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fr(s[a].image)):r.push(Fr(s[a]))}else r=Fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let Su=0;const Or=new R;class Be extends gi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=Bn,s=Bn,r=Oe,a=ti,o=_n,l=Ke,c=Be.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Cn(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Or).x}get height(){return this.source.getSize(Or).y}get depth(){return this.source.getSize(Or).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=wc;Be.DEFAULT_ANISOTROPY=1;class jt{static{jt.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,x=(d+1)/2,b=(p+1)/2,y=(h+u)/4,C=(f+S)/4,v=(g+m)/4;return A>x&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=y/n,r=C/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=y/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=v/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-S)/E,this.z=(u-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Be(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new wo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qe extends Mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uc extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yu extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Gt{static{Gt.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,S,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,g=o*h,S=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-S*c,e[9]=-o*l,e[2]=S-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,S=c*f;e[0]=u+S*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=S+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,S=c*f;e[0]=u-S*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,g=o*h,S=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+S,e[1]=l*f,e[5]=S*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,g=o*l,S=o*c;e[0]=l*h,e[4]=S-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-S*f}else if(t.order==="XZY"){const u=a*l,d=a*c,g=o*l,S=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+S,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=S*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eu,t,bu)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Yn.crossVectors(n,tn),Yn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Yn.crossVectors(n,tn)),Yn.normalize(),Ts.crossVectors(tn,Yn),s[0]=Yn.x,s[4]=Ts.x,s[8]=tn.x,s[1]=Yn.y,s[5]=Ts.y,s[9]=tn.y,s[2]=Yn.z,s[6]=Ts.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],S=n[6],m=n[10],p=n[14],E=n[3],A=n[7],x=n[11],b=n[15],y=s[0],C=s[4],v=s[8],T=s[12],P=s[1],I=s[5],O=s[9],F=s[13],D=s[2],z=s[6],q=s[10],X=s[14],nt=s[3],G=s[7],K=s[11],j=s[15];return r[0]=a*y+o*P+l*D+c*nt,r[4]=a*C+o*I+l*z+c*G,r[8]=a*v+o*O+l*q+c*K,r[12]=a*T+o*F+l*X+c*j,r[1]=h*y+f*P+u*D+d*nt,r[5]=h*C+f*I+u*z+d*G,r[9]=h*v+f*O+u*q+d*K,r[13]=h*T+f*F+u*X+d*j,r[2]=g*y+S*P+m*D+p*nt,r[6]=g*C+S*I+m*z+p*G,r[10]=g*v+S*O+m*q+p*K,r[14]=g*T+S*F+m*X+p*j,r[3]=E*y+A*P+x*D+b*nt,r[7]=E*C+A*I+x*z+b*G,r[11]=E*v+A*O+x*q+b*K,r[15]=E*T+A*F+x*X+b*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],S=t[7],m=t[11],p=t[15],E=l*d-c*u,A=o*d-c*f,x=o*u-l*f,b=a*d-c*h,y=a*u-l*h,C=a*f-o*h;return e*(S*E-m*A+p*x)-n*(g*E-m*b+p*y)+s*(g*A-S*b+p*C)-r*(g*x-S*y+m*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],S=t[13],m=t[14],p=t[15],E=e*o-n*a,A=e*l-s*a,x=e*c-r*a,b=n*l-s*o,y=n*c-r*o,C=s*c-r*l,v=h*S-f*g,T=h*m-u*g,P=h*p-d*g,I=f*m-u*S,O=f*p-d*S,F=u*p-d*m,D=E*F-A*O+x*I+b*P-y*T+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return t[0]=(o*F-l*O+c*I)*z,t[1]=(s*O-n*F-r*I)*z,t[2]=(S*C-m*y+p*b)*z,t[3]=(u*y-f*C-d*b)*z,t[4]=(l*P-a*F-c*T)*z,t[5]=(e*F-s*P+r*T)*z,t[6]=(m*x-g*C-p*A)*z,t[7]=(h*C-u*x+d*A)*z,t[8]=(a*O-o*P+c*v)*z,t[9]=(n*P-e*O-r*v)*z,t[10]=(g*y-S*x+p*E)*z,t[11]=(f*x-h*y-d*E)*z,t[12]=(o*T-a*I-l*v)*z,t[13]=(e*I-n*T+s*v)*z,t[14]=(S*A-g*b-m*E)*z,t[15]=(h*b-f*A+u*E)*z,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,S=a*h,m=a*f,p=o*f,E=l*c,A=l*h,x=l*f,b=n.x,y=n.y,C=n.z;return s[0]=(1-(S+p))*b,s[1]=(d+x)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(d-x)*y,s[5]=(1-(u+p))*y,s[6]=(m+E)*y,s[7]=0,s[8]=(g+A)*C,s[9]=(m-E)*C,s[10]=(1-(u+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),l=Mi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hn.copy(this);const c=1/a,h=1/o,f=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,e.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Rn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===Rn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===vs)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===Rn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===vs)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new R,hn=new Gt,Eu=new R(0,0,0),bu=new R(1,1,1),Yn=new R,Ts=new R,tn=new R,al=new Gt,ol=new $e;class We{constructor(t=0,e=0,n=0,s=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wu=0;const ll=new R,yi=new $e,In=new Gt,As=new R,Ki=new R,Tu=new R,Au=new $e,cl=new R(1,0,0),hl=new R(0,1,0),ul=new R(0,0,1),fl={type:"added"},Ru={type:"removed"},Ei={type:"childadded",child:null},Br={type:"childremoved",child:null};class De extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new R,e=new We,n=new $e,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new kt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(cl,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(ul,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cl,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Ki,As,this.up):In.lookAt(As,Ki,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(In),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ru),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new R(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ls extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cu={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Gr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=bo(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Gr(a,r,t+1/3),this.g=Gr(a,r,t),this.b=Gr(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=Nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return ee.workingToColorSpace(Ne.copy(this),t),Math.round(Wt(Ne.r*255,0,255))*65536+Math.round(Wt(Ne.g*255,0,255))*256+Math.round(Wt(Ne.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Ye){ee.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Rs);const n=fs(Zn.h,Rs.h,e),s=fs(Zn.s,Rs.s,e),r=fs(Zn.l,Rs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Yt;Yt.NAMES=Nc;class Ao{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new Ao(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wr extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const un=new R,Un=new R,Hr=new R,Nn=new R,bi=new R,wi=new R,dl=new R,Vr=new R,kr=new R,Wr=new R,Xr=new jt,qr=new jt,Yr=new jt;class ln{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Un.subVectors(n,e),Hr.subVectors(t,e);const a=un.dot(un),o=un.dot(Un),l=un.dot(Hr),c=Un.dot(Un),h=Un.dot(Hr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Xr.setScalar(0),qr.setScalar(0),Yr.setScalar(0),Xr.fromBufferAttribute(t,e),qr.fromBufferAttribute(t,n),Yr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Xr,r.x),a.addScaledVector(qr,r.y),a.addScaledVector(Yr,r.z),a}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Un.subVectors(t,e),un.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;bi.subVectors(s,n),wi.subVectors(r,n),Vr.subVectors(t,n);const l=bi.dot(Vr),c=wi.dot(Vr);if(l<=0&&c<=0)return e.copy(n);kr.subVectors(t,s);const h=bi.dot(kr),f=wi.dot(kr);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);Wr.subVectors(t,r);const d=bi.dot(Wr),g=wi.dot(Wr);if(g>=0&&d<=g)return e.copy(r);const S=d*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(wi,o);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return dl.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(dl,o);const p=1/(m+S+u);return a=S*p,o=u*p,e.copy(n).addScaledVector(bi,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ln{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),Ps.subVectors(this.max,$i),Ti.subVectors(t.a,$i),Ai.subVectors(t.b,$i),Ri.subVectors(t.c,$i),Jn.subVectors(Ai,Ti),Kn.subVectors(Ri,Ai),ii.subVectors(Ti,Ri);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-ii.z,ii.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,ii.z,0,-ii.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-ii.y,ii.x,0];return!Zr(e,Ti,Ai,Ri,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,Ti,Ai,Ri,Ps))?!1:(Ls.crossVectors(Jn,Kn),e=[Ls.x,Ls.y,Ls.z],Zr(e,Ti,Ai,Ri,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fn=[new R,new R,new R,new R,new R,new R,new R,new R],fn=new R,Cs=new Ln,Ti=new R,Ai=new R,Ri=new R,Jn=new R,Kn=new R,ii=new R,$i=new R,Ps=new R,Ls=new R,si=new R;function Zr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ye=new R,Ds=new st;let Pu=0;class xn extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Fc extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oc extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Lu=new Ln,Qi=new R,Jr=new R;class _i{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Jr)),this.expandByPoint(Qi.copy(t.center).sub(Jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Du=0;const sn=new Gt,Kr=new De,Ci=new R,en=new Ln,ji=new Ln,Ae=new R;class ze extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?Oc:Fc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(en.min,ji.min),en.expandByPoint(Ae),Ae.addVectors(en.max,ji.max),en.expandByPoint(Ae)):(en.expandByPoint(ji.min),en.expandByPoint(ji.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ae.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(t,c),Ae.add(Ci)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new R,l[v]=new R;const c=new R,h=new R,f=new R,u=new st,d=new st,g=new st,S=new R,m=new R;function p(v,T,P){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),o[v].add(S),o[T].add(S),o[P].add(S),l[v].add(m),l[T].add(m),l[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,T=E.length;v<T;++v){const P=E[v],I=P.start,O=P.count;for(let F=I,D=I+O;F<D;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const A=new R,x=new R,b=new R,y=new R;function C(v){b.fromBufferAttribute(s,v),y.copy(b);const T=o[v];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(y,T);const I=x.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,I)}for(let v=0,T=E.length;v<T;++v){const P=E[v],I=P.start,O=P.count;for(let F=I,D=I+O;F<D;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new xn(u,h,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Iu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const He=new R;class ei{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ei(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $r=new R,Uu=new R,Nu=new kt;class Qn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$r.subVectors(n,e).cross(Uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta($r),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nu.getNormalMatrix(t),s=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Fu=0;class Yi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=us,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Qn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const On=new R,Qr=new R,Is=new R,Us=new R;class Bc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qr.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),Us.copy(this.origin).sub(Qr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Is),o=Us.dot(this.direction),l=-Us.dot(Is),c=Us.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const S=1/h;f*=S,u*=S,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Qr).addScaledVector(Is,u),d}intersectSphere(t,e){if(t.radius<0)return null;On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=n.x-a.x,E=n.y-a.y,A=n.z-a.z,x=Math.abs(l),b=Math.abs(c),y=Math.abs(h);let C,v,T,P,I,O,F,D,z,q,X,nt;if(x>=b&&x>=y?(T=l,O=f,z=g,nt=p,l>=0?(C=c,v=h,P=u,I=d,F=S,D=m,q=E,X=A):(C=h,v=c,P=d,I=u,F=m,D=S,q=A,X=E)):b>=y?(T=c,O=u,z=S,nt=E,c>=0?(C=h,v=l,P=d,I=f,F=m,D=g,q=A,X=p):(C=l,v=h,P=f,I=d,F=g,D=m,q=p,X=A)):(T=h,O=d,z=m,nt=A,h>=0?(C=l,v=c,P=f,I=u,F=g,D=S,q=p,X=E):(C=c,v=l,P=u,I=f,F=S,D=g,q=E,X=p)),T===0)return null;const G=C/T,K=v/T,j=1/T,yt=P-G*O,_t=I-K*O,Ht=F-G*z,Xt=D-K*z,te=q-G*nt,Y=X-K*nt,$=te*Xt-Y*Ht,ct=yt*Y-_t*te,Pt=Ht*_t-Xt*yt;if(s){if($<0||ct<0||Pt<0)return null}else if(($<0||ct<0||Pt<0)&&($>0||ct>0||Pt>0))return null;const Et=$+ct+Pt;if(Et===0)return null;const Ot=j*($*O+ct*z+Pt*nt);return(Et>0?Ot<0:Ot>0)?null:this.at(Ot/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mr extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pl=new Gt,ri=new Bc,Ns=new _i,ml=new R,Fs=new R,Os=new R,Bs=new R,jr=new R,zs=new R,gl=new R,Gs=new R;class se extends De{constructor(t=new ze,e=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(jr.fromBufferAttribute(f,t),a?zs.addScaledVector(jr,h):zs.addScaledVector(jr.sub(e),h))}e.add(zs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(Ns.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Ns,ml)===null||ri.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(r).invert(),ri.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,b=A;x<b;x+=3){const y=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);s=Hs(this,p,t,n,c,h,f,y,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const E=o.getX(m),A=o.getX(m+1),x=o.getX(m+2);s=Hs(this,a,t,n,c,h,f,E,A,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,b=A;x<b;x+=3){const y=x,C=x+1,v=x+2;s=Hs(this,p,t,n,c,h,f,y,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const E=m,A=m+1,x=m+2;s=Hs(this,a,t,n,c,h,f,E,A,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ou(i,t,e,n,s,r,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===fi,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Gs);return c<e.near||c>e.far?null:{distance:c,point:Gs.clone(),object:i}}function Hs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Fs),i.getVertexPosition(l,Os),i.getVertexPosition(c,Bs);const h=Ou(i,t,e,n,Fs,Os,Bs,gl);if(h){const f=new R;ln.getBarycoord(gl,Fs,Os,Bs,f),s&&(h.uv=ln.getInterpolatedAttribute(s,o,l,c,f,new st)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,f,new st)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};ln.getNormal(Fs,Os,Bs,u.normal),h.face=u,h.barycoord=f}return h}class zc extends Be{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Le,h=Le,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends xn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pi=new Gt,vl=new Gt,Vs=[],xl=new Ln,Bu=new Gt,ts=new se,es=new _i;class zu extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),xl.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pi),es.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pi),vl.multiplyMatrices(n,Pi),ts.matrixWorld=vl,ts.raycast(t,Vs);for(let a=0,o=Vs.length;a<o;a++){const l=Vs[a];l.instanceId=r,l.object=this,e.push(l)}Vs.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zc(new Float32Array(s*this.count),s,this.count,vo,gn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ai=new _i,Gu=new st(.5,.5),ks=new R;class Ro{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],S=r[9],m=r[10],p=r[11],E=r[12],A=r[13],x=r[14],b=r[15];if(s[0].setComponents(c-a,d-h,p-g,b-E).normalize(),s[1].setComponents(c+a,d+h,p+g,b+E).normalize(),s[2].setComponents(c+o,d+f,p+S,b+A).normalize(),s[3].setComponents(c-o,d-f,p-S,b-A).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,d-u,p-m,b-x).normalize();else if(s[4].setComponents(c-l,d-u,p-m,b-x).normalize(),e===Rn)s[5].setComponents(c+l,d+u,p+m,b+x).normalize();else if(e===vs)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){ai.center.set(0,0,0);const e=Gu.distanceTo(t.center);return ai.radius=.7071067811865476+e,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gc extends Be{constructor(t=[],e=di,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hu extends Be{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wi extends Be{constructor(t,e,n=Pn,s,r,a,o=Le,l=Le,c,h=Vn,f=1){if(h!==Vn&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Vu extends Wi{constructor(t,e=Pn,n=di,s,r,a=Le,o=Le,l,c=Vn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hc extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class kn extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(f,2));function g(S,m,p,E,A,x,b,y,C,v,T){const P=x/C,I=b/v,O=x/2,F=b/2,D=y/2,z=C+1,q=v+1;let X=0,nt=0;const G=new R;for(let K=0;K<q;K++){const j=K*I-F;for(let yt=0;yt<z;yt++){const _t=yt*P-O;G[S]=_t*E,G[m]=j*A,G[p]=D,c.push(G.x,G.y,G.z),G[S]=0,G[m]=0,G[p]=y>0?1:-1,h.push(G.x,G.y,G.z),f.push(yt/C),f.push(1-K/v),X+=1}}for(let K=0;K<v;K++)for(let j=0;j<C;j++){const yt=u+j+z*K,_t=u+j+z*(K+1),Ht=u+(j+1)+z*(K+1),Xt=u+(j+1)+z*K;l.push(yt,_t,Xt),l.push(_t,Ht,Xt),nt+=6}o.addGroup(d,nt,T),d+=nt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Co extends ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new R,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Po extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const S=[],m=n/2;let p=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2));function E(){const x=new R,b=new R;let y=0;const C=(e-t)/n;for(let v=0;v<=r;v++){const T=[],P=v/r,I=P*(e-t)+t;for(let O=0;O<=s;O++){const F=O/s,D=F*l+o,z=Math.sin(D),q=Math.cos(D);b.x=I*z,b.y=-P*n+m,b.z=I*q,f.push(b.x,b.y,b.z),x.set(z,C,q).normalize(),u.push(x.x,x.y,x.z),d.push(F,1-P),T.push(g++)}S.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){const P=S[T][v],I=S[T+1][v],O=S[T+1][v+1],F=S[T][v+1];(t>0||T!==0)&&(h.push(P,I,F),y+=3),(e>0||T!==r-1)&&(h.push(I,O,F),y+=3)}c.addGroup(p,y,0),p+=y}function A(x){const b=g,y=new st,C=new R;let v=0;const T=x===!0?t:e,P=x===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*P,0),u.push(0,P,0),d.push(.5,.5),g++;const I=g;for(let O=0;O<=s;O++){const D=O/s*l+o,z=Math.cos(D),q=Math.sin(D);C.x=T*q,C.y=m*P,C.z=T*z,f.push(C.x,C.y,C.z),u.push(0,P,0),y.x=z*.5+.5,y.y=q*.5*P+.5,d.push(y.x,y.y),g++}for(let O=0;O<s;O++){const F=b+O,D=I+O;x===!0?h.push(D,D+1,F):h.push(D+1,D,F),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Ws=new R,Xs=new R,ta=new R,qs=new ln;class ku extends ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Hi*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:S,b:m,c:p}=qs;if(S.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),qs.getNormal(ta),f[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const A=(E+1)%3,x=f[E],b=f[A],y=qs[h[E]],C=qs[h[A]],v=`${x}_${b}`,T=`${b}_${x}`;T in u&&u[T]?(ta.dot(u[T].normal)<=r&&(d.push(y.x,y.y,y.z),d.push(C.x,C.y,C.z)),u[T]=null):v in u||(u[v]={index0:c[E],index1:c[A],normal:ta.clone()})}}for(const g in u)if(u[g]){const{index0:S,index1:m}=u[g];Ws.fromBufferAttribute(o,S),Xs.fromBufferAttribute(o,m),d.push(Ws.x,Ws.y,Ws.z),d.push(Xs.x,Xs.y,Xs.z)}this.setAttribute("position",new ve(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,s=[],r=[],a=[],o=new R,l=new Gt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Wt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lo extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wu extends Lo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Sl=new R,Ml=new R,ea=new Do,na=new Do,ia=new Do;class Xu extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ml.subVectors(s[0],s[1]).add(s[0]),c=Ml);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),ea.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,S,m),na.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,S,m),ia.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),na.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ia.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(ea.calc(l),na.calc(l),ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function qu(i,t){const e=1-i;return e*e*t}function Yu(i,t){return 2*(1-i)*i*t}function Zu(i,t){return i*i*t}function ds(i,t,e,n){return qu(i,t)+Yu(i,e)+Zu(i,n)}function Ju(i,t){const e=1-i;return e*e*e*t}function Ku(i,t){const e=1-i;return 3*e*e*i*t}function $u(i,t){return 3*(1-i)*i*i*t}function Qu(i,t){return i*i*i*t}function ps(i,t,e,n,s){return Ju(i,t)+Ku(i,e)+$u(i,n)+Qu(i,s)}class Vc extends Dn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ps(t,s.x,r.x,a.x,o.x),ps(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ju extends Dn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ps(t,s.x,r.x,a.x,o.x),ps(t,s.y,r.y,a.y,o.y),ps(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kc extends Dn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tf extends Dn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wc extends Dn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ds(t,s.x,r.x,a.x),ds(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ef extends Dn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ds(t,s.x,r.x,a.x),ds(t,s.y,r.y,a.y),ds(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xc extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(yl(o,l.x,c.x,h.x,f.x),yl(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var eo=Object.freeze({__proto__:null,ArcCurve:Wu,CatmullRomCurve3:Xu,CubicBezierCurve:Vc,CubicBezierCurve3:ju,EllipseCurve:Lo,LineCurve:kc,LineCurve3:tf,QuadraticBezierCurve:Wc,QuadraticBezierCurve3:ef,SplineCurve:Xc});class nf extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new eo[s.type]().fromJSON(s))}return this}}class no extends nf{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kc(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Wc(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Vc(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Lo(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Io extends no{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new no().fromJSON(s))}return this}}function sf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=qc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){const d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ss(r,a,e,o,l,c,0),a}function qc(i,t,e,n,s){let r;if(s===Sf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=El(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=El(a/n|0,i[a],i[a+1],r);return r&&Xi(r,r.next)&&(ys(r),r=r.next),r}function mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xi(e,e.next)||xe(e.prev,e,e.next)===0)){if(ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(i,t,e,n,s,r,a){if(!i)return;!a&&r&&pf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?af(i,n,s,r):rf(i)){t.push(l.i,i.i,c.i),ys(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=of(mi(i),t),Ss(i,t,e,n,s,r,2)):a===2&&lf(i,t,e,n,s,r):Ss(mi(i),t,e,n,s,r,1);break}}}function rf(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&cs(s,o,r,l,a,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function af(i,t,e,n){const s=i.prev,r=i,a=i.next;if(xe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),S=Math.max(o,l,c),m=Math.max(h,f,u),p=io(d,g,t,e,n),E=io(S,m,t,e,n);let A=i.prevZ,x=i.nextZ;for(;A&&A.z>=p&&x&&x.z<=E;){if(A.x>=d&&A.x<=S&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&cs(o,h,l,f,c,u,A.x,A.y)&&xe(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=d&&x.x<=S&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&cs(o,h,l,f,c,u,x.x,x.y)&&xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=S&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&cs(o,h,l,f,c,u,A.x,A.y)&&xe(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=S&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&cs(o,h,l,f,c,u,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function of(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Xi(n,s)&&Zc(n,e,e.next,s)&&Ms(n,s)&&Ms(s,n)&&(t.push(n.i,e.i,s.i),ys(e),ys(e.next),e=i=s),e=e.next}while(e!==i);return mi(e)}function lf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_f(a,o)){let l=Jc(a,o);a=mi(a,a.next),l=mi(l,l.next),Ss(a,t,e,n,s,r,0),Ss(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=qc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gf(c))}s.sort(hf);for(let r=0;r<s.length;r++)e=uf(s[r],e);return e}function hf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function uf(i,t){const e=ff(i,t);if(!e)return t;const n=Jc(e,i);return mi(n,n.next),mi(e,e.next)}function ff(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Xi(i,e))return e;do{if(Xi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Yc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Ms(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&df(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function df(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function pf(i,t,e,n){let s=i;do s.z===0&&(s.z=io(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mf(s)}function mf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function io(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function cs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Yc(i,t,e,n,s,r,a,o)}function _f(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vf(i,t)&&(Ms(i,t)&&Ms(t,i)&&xf(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Xi(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xi(i,t){return i.x===t.x&&i.y===t.y}function Zc(i,t,e,n){const s=Zs(xe(i,t,e)),r=Zs(xe(i,t,n)),a=Zs(xe(e,n,i)),o=Zs(xe(e,n,t));return!!(s!==r&&a!==o||s===0&&Ys(i,e,t)||r===0&&Ys(i,n,t)||a===0&&Ys(e,i,n)||o===0&&Ys(e,t,n))}function Ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zs(i){return i>0?1:i<0?-1:0}function vf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ms(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function xf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jc(i,t){const e=so(i.i,i.x,i.y),n=so(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function El(i,t,e,n){const s=so(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function so(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Mf{static triangulate(t,e,n=2){return sf(t,e,n)}}class zn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return zn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];bl(t),wl(n,t);let a=t.length;e.forEach(bl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,wl(n,e[l]);const o=Mf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function bl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Uo extends ze{constructor(t=new Io([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ve(s,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:yf;let A,x=!1,b,y,C,v;if(p){A=p.getSpacedPoints(h),x=!0,u=!1;const et=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,et),y=new R,C=new R,v=new R}u||(m=0,d=0,g=0,S=0);const T=o.extractPoints(c);let P=T.shape;const I=T.holes;if(!zn.isClockWise(P)){P=P.reverse();for(let et=0,rt=I.length;et<rt;et++){const at=I[et];zn.isClockWise(at)&&(I[et]=at.reverse())}}function F(et){const at=10000000000000001e-36;let ot=et[0];for(let ut=1;ut<=et.length;ut++){const Nt=ut%et.length,Ut=et[Nt],Bt=Ut.x-ot.x,Vt=Ut.y-ot.y,L=Bt*Bt+Vt*Vt,oe=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(ot.x),Math.abs(ot.y)),$t=at*oe*oe;if(L<=$t){et.splice(Nt,1),ut--;continue}ot=Ut}}F(P),I.forEach(F);const D=I.length,z=P;for(let et=0;et<D;et++){const rt=I[et];P=P.concat(rt)}function q(et,rt,at){return rt||ne("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(rt,at)}const X=P.length;function nt(et,rt,at){let ot,ut,Nt;const Ut=et.x-rt.x,Bt=et.y-rt.y,Vt=at.x-et.x,L=at.y-et.y,oe=Ut*Ut+Bt*Bt,$t=Ut*L-Bt*Vt;if(Math.abs($t)>Number.EPSILON){const w=Math.sqrt(oe),_=Math.sqrt(Vt*Vt+L*L),B=rt.x-Bt/w,k=rt.y+Ut/w,Z=at.x-L/_,lt=at.y+Vt/_,ht=((Z-B)*L-(lt-k)*Vt)/(Ut*L-Bt*Vt);ot=B+Ut*ht-et.x,ut=k+Bt*ht-et.y;const J=ot*ot+ut*ut;if(J<=2)return new st(ot,ut);Nt=Math.sqrt(J/2)}else{let w=!1;Ut>Number.EPSILON?Vt>Number.EPSILON&&(w=!0):Ut<-Number.EPSILON?Vt<-Number.EPSILON&&(w=!0):Math.sign(Bt)===Math.sign(L)&&(w=!0),w?(ot=-Bt,ut=Ut,Nt=Math.sqrt(oe)):(ot=Ut,ut=Bt,Nt=Math.sqrt(oe/2))}return new st(ot/Nt,ut/Nt)}const G=[];for(let et=0,rt=z.length,at=rt-1,ot=et+1;et<rt;et++,at++,ot++)at===rt&&(at=0),ot===rt&&(ot=0),G[et]=nt(z[et],z[at],z[ot]);const K=[];let j,yt=G.concat();for(let et=0,rt=D;et<rt;et++){const at=I[et];j=[];for(let ot=0,ut=at.length,Nt=ut-1,Ut=ot+1;ot<ut;ot++,Nt++,Ut++)Nt===ut&&(Nt=0),Ut===ut&&(Ut=0),j[ot]=nt(at[ot],at[Nt],at[Ut]);K.push(j),yt=yt.concat(j)}let _t;if(m===0)_t=zn.triangulateShape(z,I);else{const et=[],rt=[];for(let at=0;at<m;at++){const ot=at/m,ut=d*Math.cos(ot*Math.PI/2),Nt=g*Math.sin(ot*Math.PI/2)+S;for(let Ut=0,Bt=z.length;Ut<Bt;Ut++){const Vt=q(z[Ut],G[Ut],Nt);ct(Vt.x,Vt.y,-ut),ot===0&&et.push(Vt)}for(let Ut=0,Bt=D;Ut<Bt;Ut++){const Vt=I[Ut];j=K[Ut];const L=[];for(let oe=0,$t=Vt.length;oe<$t;oe++){const w=q(Vt[oe],j[oe],Nt);ct(w.x,w.y,-ut),ot===0&&L.push(w)}ot===0&&rt.push(L)}}_t=zn.triangulateShape(et,rt)}const Ht=_t.length,Xt=g+S;for(let et=0;et<X;et++){const rt=u?q(P[et],yt[et],Xt):P[et];x?(C.copy(b.normals[0]).multiplyScalar(rt.x),y.copy(b.binormals[0]).multiplyScalar(rt.y),v.copy(A[0]).add(C).add(y),ct(v.x,v.y,v.z)):ct(rt.x,rt.y,0)}for(let et=1;et<=h;et++)for(let rt=0;rt<X;rt++){const at=u?q(P[rt],yt[rt],Xt):P[rt];x?(C.copy(b.normals[et]).multiplyScalar(at.x),y.copy(b.binormals[et]).multiplyScalar(at.y),v.copy(A[et]).add(C).add(y),ct(v.x,v.y,v.z)):ct(at.x,at.y,f/h*et)}for(let et=m-1;et>=0;et--){const rt=et/m,at=d*Math.cos(rt*Math.PI/2),ot=g*Math.sin(rt*Math.PI/2)+S;for(let ut=0,Nt=z.length;ut<Nt;ut++){const Ut=q(z[ut],G[ut],ot);ct(Ut.x,Ut.y,f+at)}for(let ut=0,Nt=I.length;ut<Nt;ut++){const Ut=I[ut];j=K[ut];for(let Bt=0,Vt=Ut.length;Bt<Vt;Bt++){const L=q(Ut[Bt],j[Bt],ot);x?ct(L.x,L.y+A[h-1].y,A[h-1].x+at):ct(L.x,L.y,f+at)}}}te(),Y();function te(){const et=s.length/3;if(u){let rt=0,at=X*rt;for(let ot=0;ot<Ht;ot++){const ut=_t[ot];Pt(ut[2]+at,ut[1]+at,ut[0]+at)}rt=h+m*2,at=X*rt;for(let ot=0;ot<Ht;ot++){const ut=_t[ot];Pt(ut[0]+at,ut[1]+at,ut[2]+at)}}else{for(let rt=0;rt<Ht;rt++){const at=_t[rt];Pt(at[2],at[1],at[0])}for(let rt=0;rt<Ht;rt++){const at=_t[rt];Pt(at[0]+X*h,at[1]+X*h,at[2]+X*h)}}n.addGroup(et,s.length/3-et,0)}function Y(){const et=s.length/3;let rt=0;$(z,rt),rt+=z.length;for(let at=0,ot=I.length;at<ot;at++){const ut=I[at];$(ut,rt),rt+=ut.length}n.addGroup(et,s.length/3-et,1)}function $(et,rt){let at=et.length;for(;--at>=0;){const ot=at;let ut=at-1;ut<0&&(ut=et.length-1);for(let Nt=0,Ut=h+m*2;Nt<Ut;Nt++){const Bt=X*Nt,Vt=X*(Nt+1),L=rt+ot+Bt,oe=rt+ut+Bt,$t=rt+ut+Vt,w=rt+ot+Vt;Et(L,oe,$t,w)}}}function ct(et,rt,at){l.push(et),l.push(rt),l.push(at)}function Pt(et,rt,at){Ot(et),Ot(rt),Ot(at);const ot=s.length/3,ut=E.generateTopUV(n,s,ot-3,ot-2,ot-1);he(ut[0]),he(ut[1]),he(ut[2])}function Et(et,rt,at,ot){Ot(et),Ot(rt),Ot(ot),Ot(rt),Ot(at),Ot(ot);const ut=s.length/3,Nt=E.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);he(Nt[0]),he(Nt[1]),he(Nt[3]),he(Nt[1]),he(Nt[2]),he(Nt[3])}function Ot(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function he(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ef(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new eo[s.type]().fromJSON(s)),new Uo(n,t.options)}}const yf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-f),new st(u,1-g),new st(S,1-p)]:[new st(o,1-l),new st(h,1-f),new st(d,1-g),new st(m,1-p)]}};function Ef(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zi extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],S=[],m=[];for(let p=0;p<h;p++){const E=p*u-a;for(let A=0;A<c;A++){const x=A*f-r;g.push(x,-E,0),S.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const A=E+c*p,x=E+c*(p+1),b=E+1+c*(p+1),y=E+1+c*p;d.push(A,x,y),d.push(x,b,y)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(S,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.width,t.height,t.widthSegments,t.heightSegments)}}class yr extends ze{constructor(t=new Io([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(r,3)),this.setAttribute("uv",new ve(a,2));function c(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;zn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const E=g[m];zn.isClockWise(E)===!0&&(g[m]=E.reverse())}const S=zn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const E=g[m];d=d.concat(E)}for(let m=0,p=d.length;m<p;m++){const E=d[m];s.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let m=0,p=S.length;m<p;m++){const E=S[m],A=E[0]+f,x=E[1]+f,b=E[2]+f;n.push(A,x,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return bf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new yr(n,t.curveSegments)}}function bf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class wf extends ze{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new R,r=new R;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],u=f.start,d=f.count;for(let g=u,S=u+d;g<S;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),E=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,E),Tl(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),Tl(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ve(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Tl(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Al(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Al(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const s in n)t[s]=n[s]}return t}function Al(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const No={clone:qi,merge:Ve};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new st().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Cf extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ro extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pf extends Yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lf extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Df extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Fo extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const sa=new Gt,Rl=new R,Cl=new R;class $c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Js=new R,Ks=new $e,En=new R;class Oo extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Js,Ks,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Js,Ks,En.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Js,Ks,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Js,Ks,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new R,Pl=new st,Ll=new st;class Ze extends Oo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Pl,Ll),e.subVectors(Ll,Pl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class If extends $c{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0}}class Uf extends Fo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new If}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Bo extends Oo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Nf extends $c{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ff extends Fo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Nf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Of extends Fo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bf extends ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Li=-90,Di=1;class zf extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Li,Di,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Li,Di,t,e);r.layers=this.layers,this.add(r);const a=new Ze(Li,Di,t,e);a.layers=this.layers,this.add(a);const o=new Ze(Li,Di,t,e);o.layers=this.layers,this.add(o);const l=new Ze(Li,Di,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gf extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Vf(){this._document.hidden===!1&&this.reset()}class ao extends Iu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Dl=new Gt;class kf{constructor(t,e,n=0,s=1/0){this.ray=new Bc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dl),this}intersectObject(t,e=!0,n=[]){return oo(t,this,n,e),n.sort(Il),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oo(t[s],this,n,e);return n.sort(Il),n}}function Il(i,t){return i.distance-t.distance}function oo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)oo(r[a],t,e,!0)}}class Qc{static{Qc.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}const Ul=new R,$s=new R,Ii=new R,Ui=new R,ra=new R,Wf=new R,Xf=new R;class qf{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ul.subVectors(t,this.start),$s.subVectors(this.end,this.start);const n=$s.dot($s);if(n===0)return 0;let r=$s.dot(Ul)/n;return e&&(r=Wt(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Wf,n=Xf){const s=10000000000000001e-32;let r,a;const o=this.start,l=t.start,c=this.end,h=t.end;Ii.subVectors(c,o),Ui.subVectors(h,l),ra.subVectors(o,l);const f=Ii.dot(Ii),u=Ui.dot(Ui),d=Ui.dot(ra);if(f<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(f<=s)r=0,a=d/u,a=Wt(a,0,1);else{const g=Ii.dot(ra);if(u<=s)a=0,r=Wt(-g/f,0,1);else{const S=Ii.dot(Ui),m=f*u-S*S;m!==0?r=Wt((S*d-g*u)/m,0,1):r=0,a=(S*r+d)/u,a<0?(a=0,r=Wt(-g/f,0,1)):a>1&&(a=1,r=Wt((S-g)/f,0,1))}}return e.copy(o).addScaledVector(Ii,r),n.copy(l).addScaledVector(Ui,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Nl(i,t,e,n){const s=Yf(n);switch(e){case Pc:return i*t;case vo:return i*t/s.components*s.byteLength;case xo:return i*t/s.components*s.byteLength;case pi:return i*t*2/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case Lc:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Mo:return i*t*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case wa:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Pa:case Da:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:case pr:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ja:case Ka:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mr:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yf(i){switch(i){case Ke:case Tc:return{byteLength:1,components:1};case gs:case Ac:case Sn:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case Pn:case mo:case gn:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],S=f[d];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,f[u]=S)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const S=f[d];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ld=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vd=`#define PI 3.141592653589793
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
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
#endif`,Yd=`uniform sampler2D dfgLUT;
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
}`,Zd=`
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$d=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
}`,dm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,vm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,Mm=`#define TOON
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
}`,ym=`#define TOON
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
}`,Em=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,Am=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Jf,alphahash_pars_fragment:Kf,alphamap_fragment:$f,alphamap_pars_fragment:Qf,alphatest_fragment:jf,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:ad,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:fd,clipping_planes_vertex:dd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:vd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Md,displacementmap_vertex:yd,emissivemap_fragment:Ed,emissivemap_pars_fragment:bd,colorspace_fragment:wd,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Ld,fog_vertex:Dd,fog_pars_vertex:Id,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:Gd,lights_toon_fragment:Vd,lights_toon_pars_fragment:kd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:Kd,lightprobes_pars_fragment:$d,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:fp,normal_fragment_begin:dp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:yp,opaque_fragment:Ep,packing:bp,premultiplied_alpha_fragment:wp,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Up,skinbase_vertex:Np,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:zp,specularmap_pars_fragment:Gp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Vp,transmission_fragment:kp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:Zp,background_vert:Jp,background_frag:Kp,backgroundCube_vert:$p,backgroundCube_frag:Qp,cube_vert:jp,cube_frag:tm,depth_vert:em,depth_frag:nm,distance_vert:im,distance_frag:sm,equirect_vert:rm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:fm,meshmatcap_vert:dm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:vm,meshphysical_vert:xm,meshphysical_frag:Sm,meshtoon_vert:Mm,meshtoon_frag:ym,points_vert:Em,points_frag:bm,shadow_vert:wm,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Rm},ft={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Je={basic:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ve([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ve([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ve([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ve([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ve([ft.points,ft.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ve([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ve([ft.common,ft.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ve([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ve([ft.sprite,ft.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Ve([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Ve([ft.lights,ft.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Je.physical={uniforms:Ve([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Qs={r:0,b:0,g:0},Cm=new Gt,th=new kt;th.set(-1,0,0,0,1,0,0,0,1);function Pm(i,t,e,n,s,r){const a=new Yt(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const x=E.backgroundBlurriness>0;A=t.get(A,x)}return A}function g(E){let A=!1;const x=d(E);x===null?m(a,o):x&&x.isColor&&(m(x,1),A=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(E,A){const x=d(A);x&&(x.isCubeTexture||x.mapping===br)?(c===void 0&&(c=new se(new kn(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:qi(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(th),c.material.toneMapped=ee.getTransfer(x.colorSpace)!==ue,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new se(new Zi(2,2),new je({name:"BackgroundMaterial",uniforms:qi(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(Qs,Kc(i)),e.buffers.color.setClear(Qs.r,Qs.g,Qs.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:S,dispose:p}}function Lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(I,O,F,D,z){let q=!1;const X=f(I,D,F,O);r!==X&&(r=X,c(r.object)),q=d(I,D,F,z),q&&g(I,D,F,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(I,O,F,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,O,F,D){const z=D.wireframe===!0;let q=n[O.id];q===void 0&&(q={},n[O.id]=q);const X=I.isInstancedMesh===!0?I.id:0;let nt=q[X];nt===void 0&&(nt={},q[X]=nt);let G=nt[F.id];G===void 0&&(G={},nt[F.id]=G);let K=G[z];return K===void 0&&(K=u(l()),G[z]=K),K}function u(I){const O=[],F=[],D=[];for(let z=0;z<e;z++)O[z]=0,F[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:D,object:I,attributes:{},index:null}}function d(I,O,F,D){const z=r.attributes,q=O.attributes;let X=0;const nt=F.getAttributes();for(const G in nt)if(nt[G].location>=0){const j=z[G];let yt=q[G];if(yt===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(yt=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(yt=I.instanceColor)),j===void 0||j.attribute!==yt||yt&&j.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(I,O,F,D){const z={},q=O.attributes;let X=0;const nt=F.getAttributes();for(const G in nt)if(nt[G].location>=0){let j=q[G];j===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const yt={};yt.attribute=j,j&&j.data&&(yt.data=j.data),z[G]=yt,X++}r.attributes=z,r.attributesNum=X,r.index=D}function S(){const I=r.newAttributes;for(let O=0,F=I.length;O<F;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){const F=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;F[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),z[I]!==O&&(i.vertexAttribDivisor(I,O),z[I]=O)}function E(){const I=r.newAttributes,O=r.enabledAttributes;for(let F=0,D=O.length;F<D;F++)O[F]!==I[F]&&(i.disableVertexAttribArray(F),O[F]=0)}function A(I,O,F,D,z,q,X){X===!0?i.vertexAttribIPointer(I,O,F,z,q):i.vertexAttribPointer(I,O,F,D,z,q)}function x(I,O,F,D){S();const z=D.attributes,q=F.getAttributes(),X=O.defaultAttributeValues;for(const nt in q){const G=q[nt];if(G.location>=0){let K=z[nt];if(K===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const j=K.normalized,yt=K.itemSize,_t=t.get(K);if(_t===void 0)continue;const Ht=_t.buffer,Xt=_t.type,te=_t.bytesPerElement,Y=Xt===i.INT||Xt===i.UNSIGNED_INT||K.gpuType===mo;if(K.isInterleavedBufferAttribute){const $=K.data,ct=$.stride,Pt=K.offset;if($.isInstancedInterleavedBuffer){for(let Et=0;Et<G.locationSize;Et++)p(G.location+Et,$.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Et=0;Et<G.locationSize;Et++)m(G.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Et=0;Et<G.locationSize;Et++)A(G.location+Et,yt/G.locationSize,Xt,j,ct*te,(Pt+yt/G.locationSize*Et)*te,Y)}else{if(K.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)p(G.location+$,K.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let $=0;$<G.locationSize;$++)A(G.location+$,yt/G.locationSize,Xt,j,yt*te,yt/G.locationSize*$*te,Y)}}else if(X!==void 0){const j=X[nt];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(G.location,j);break;case 3:i.vertexAttrib3fv(G.location,j);break;case 4:i.vertexAttrib4fv(G.location,j);break;default:i.vertexAttrib1fv(G.location,j)}}}}E()}function b(){T();for(const I in n){const O=n[I];for(const F in O){const D=O[F];for(const z in D){const q=D[z];for(const X in q)h(q[X].object),delete q[X];delete D[z]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const F in O){const D=O[F];for(const z in D){const q=D[z];for(const X in q)h(q[X].object),delete q[X];delete D[z]}}delete n[I.id]}function C(I){for(const O in n){const F=n[O];for(const D in F){const z=F[D];if(z[I.id]===void 0)continue;const q=z[I.id];for(const X in q)h(q[X].object),delete q[X];delete z[I.id]}}}function v(I){for(const O in n){const F=n[O],D=I.isInstancedMesh===!0?I.id:0,z=F[D];if(z!==void 0){for(const q in z){const X=z[q];for(const nt in X)h(X[nt].object),delete X[nt];delete z[q]}delete F[D],Object.keys(F).length===0&&delete n[O]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function Dm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ke&&C!==gn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:x,maxSamples:b,samples:y}}function Um(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Qn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,A=E*4;let x=p.clippingState||null;l.value=x,x=h(g,u,A,d);for(let b=0;b!==A;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const p=d+S*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,x=d;A!==S;++A,x+=4)a.copy(f[A]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const zi=4,Nm=6,Fm=20,Om=256,ns=new Bo,Fl=new Yt;let aa=null,oa=0,la=0,ca=!1;const Bm=new R,oi=new R;class lo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Bm}=r;aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,oa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Ni(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Sn,format:_n,colorSpace:_r,depthBuffer:!1},s=Ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zm(r)),this._blurMaterial=Hm(r,t,e),this._ggxMaterial=Gm(r,t,e)}return s}_compileMaterial(t){const e=new se(new ze,t);this._renderer.compile(e,ns)}_sceneToCubeUV(t,e,n,s,r){const l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Fl),f.toneMapping=vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new kn,new Mr({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(Fl),p=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));const b=this._cubeSize;Ni(s,x*b,A>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(S,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===di||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ni(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ns)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-zi?n-g+zi:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Ni(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,ns),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ni(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(o,ns)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-zi?s-this._lodMax+zi:0),u=4*(this._cubeSize-h);Ni(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ns)}}function zm(i){const t=[],e=[];let n=i;const s=i-zi+1+Nm;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),S=new Float32Array(d*u*f);for(let p=0;p<f;p++){const E=p%3*2/3-1,A=p>2?0:-1,x=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];g.set(x,d*u*p);for(let b=0;b<u;b++){const y=h[b*2]*2-1,C=h[b*2+1]*2-1;p===0?oi.set(1,C,y):p===1?oi.set(-y,1,-C):p===2?oi.set(-y,C,1):p===3?oi.set(-1,C,-y):p===4?oi.set(-y,-1,C):oi.set(y,C,-1),oi.toArray(S,(p*u+b)*d)}}const m=new ze;m.setAttribute("position",new xn(g,d)),m.setAttribute("outputDirection",new xn(S,d)),e.push(new se(m,null)),n>zi&&n--}return{lodMeshes:e,sizeLods:t}}function Ol(i,t,e){const n=new Qe(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gm(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Hm(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:Fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Bl(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function zl(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Tr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class eh extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Gn});r.uniforms.tEquirect.value=e;const a=new se(s,r),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=Oe),new zf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Vm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Pr||d===Lr)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new eh(g.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,g=d===Pr||d===Lr,S=d===di||d===ki;if(g||S){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new lo(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const E=u.image;return g&&E&&E.height>0||S&&E&&l(E)?(n===null&&(n=new lo(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Pr?u.mapping=di:d===Lr&&(u.mapping=ki),u}function l(u){let d=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gi("WebGLRenderer: "+n+" extension not supported."),s}}}function Wm(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(d!==null){const E=d.array;S=d.version;for(let A=0,x=E.length;A<x;A+=3){const b=E[A+0],y=E[A+1],C=E[A+2];u.push(b,y,y,C,C,b)}}else{const E=g.array;S=g.version;for(let A=0,x=E.length/3-1;A<x;A+=3){const b=A+0,y=A+1,C=A+2;u.push(b,y,y,C,C,b)}}const m=new(g.count>=65535?Oc:Fc)(u,1);m.version=S;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Xm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let S=0;for(let m=0;m<d;m++)S+=u[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ym(i,t,e){const n=new WeakMap,s=new jt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;d===!0&&(A=1),g===!0&&(A=2),S===!0&&(A=3);let x=o.attributes.position.count*A,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const y=new Float32Array(x*b*4*f),C=new Uc(y,x,b,f);C.type=gn,C.needsUpdate=!0;const v=A*4;for(let P=0;P<f;P++){const I=m[P],O=p[P],F=E[P],D=x*b*4*P;for(let z=0;z<I.count;z++){const q=z*v;d===!0&&(s.fromBufferAttribute(I,z),y[D+q+0]=s.x,y[D+q+1]=s.y,y[D+q+2]=s.z,y[D+q+3]=0),g===!0&&(s.fromBufferAttribute(O,z),y[D+q+4]=s.x,y[D+q+5]=s.y,y[D+q+6]=s.z,y[D+q+7]=0),S===!0&&(s.fromBufferAttribute(F,z),y[D+q+8]=s.x,y[D+q+9]=s.y,y[D+q+10]=s.z,y[D+q+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new st(x,b)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Zm(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Jm={[vc]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[bc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function Km(i,t,e,n,s,r){const a=new Qe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new ze;c.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ve([0,2,0,0,2,0],2));const h=new Cf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new se(c,h),u=new Bo(-1,1,1,-1,0,1);let d=null,g=null,S=!1,m,p=null,E=[],A=!1;this.setSize=function(x,b){a.setSize(x,b),o!==null&&o.setSize(x,b),l!==null&&l.setSize(x,b);for(let y=0;y<E.length;y++){const C=E[y];C.setSize&&C.setSize(x,b)}},this.setEffects=function(x){E=x,A=E.length>0&&E[0].isRenderPass===!0;const b=a.width,y=a.height;E.length>0&&o===null&&(o=new Qe(b,y,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(b,y,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){const v=E[C];v.setSize&&v.setSize(b,y)}},this.begin=function(x,b){if(S||x.toneMapping===vn&&E.length===0)return!1;if(p=b,b!==null){const y=b.width,C=b.height;(a.width!==y||a.height!==C)&&this.setSize(y,C)}return A===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=vn,!0},this.hasRenderPass=function(){return A},this.end=function(x,b){x.toneMapping=m,S=!0;let y=a,C=o;for(let v=0;v<E.length;v++){const T=E[v];T.enabled!==!1&&(T.render(x,C,y,b),T.needsSwap!==!1&&(y=C,C=C===o?l:o))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},ee.getTransfer(d)===ue&&(h.defines.SRGB_TRANSFER="");const v=Jm[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(p),x.render(f,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const nh=new Be,co=new Wi(1,1),ih=new Uc,sh=new yu,rh=new Gc,Gl=[],Hl=[],Vl=new Float32Array(16),kl=new Float32Array(9),Wl=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ar(i,t){let e=Hl[t];e===void 0&&(e=new Int32Array(t),Hl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),Te(e,n)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),Te(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Vl.set(n),i.uniformMatrix4fv(this.addr,!1,Vl),Te(e,n)}}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function l0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(co.compareFunction=e.isReversedDepthBuffer()?Eo:yo,r=co):r=nh,e.setTexture2D(t||r,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sh,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rh,s)}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ih,s)}function g0(i){switch(i){case 5126:return $m;case 35664:return Qm;case 35665:return jm;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return l0;case 36294:return c0;case 36295:return h0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}function _0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function x0(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function S0(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function M0(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function y0(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function b0(i,t){i.uniform1iv(this.addr,t)}function w0(i,t){i.uniform2iv(this.addr,t)}function T0(i,t){i.uniform3iv(this.addr,t)}function A0(i,t){i.uniform4iv(this.addr,t)}function R0(i,t){i.uniform1uiv(this.addr,t)}function C0(i,t){i.uniform2uiv(this.addr,t)}function P0(i,t){i.uniform3uiv(this.addr,t)}function L0(i,t){i.uniform4uiv(this.addr,t)}function D0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=co:a=nh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function I0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sh,r[a])}function U0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rh,r[a])}function N0(i,t,e){const n=this.cache,s=t.length,r=Ar(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ih,r[a])}function F0(i){switch(i){case 5126:return _0;case 35664:return v0;case 35665:return x0;case 35666:return S0;case 35674:return M0;case 35675:return y0;case 35676:return E0;case 5124:case 35670:return b0;case 35667:case 35671:return w0;case 35668:case 35672:return T0;case 35669:case 35673:return A0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}class O0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g0(e.type)}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F0(e.type)}}class z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Xl(i,t){i.seq.push(t),i.map[t.id]=t}function G0(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),a=ha.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xl(e,c===void 0?new O0(o,i,t):new B0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new z0(o),Xl(e,f)),e=f}}}class fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);G0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ql(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const H0=37297;let V0=0;function k0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yl=new kt;function W0(i){ee._getMatrix(Yl,ee.workingColorSpace,i);const t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+k0(i.getShaderSource(t),o)}else return r}function X0(i,t){const e=W0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const q0={[vc]:"Linear",[xc]:"Reinhard",[Sc]:"Cineon",[Mc]:"ACESFilmic",[Ec]:"AgX",[bc]:"Neutral",[yc]:"Custom"};function Y0(i,t){const e=q0[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const js=new R;function Z0(){ee.getLuminanceCoefficients(js);const i=js.x.toFixed(4),t=js.y.toFixed(4),e=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function K0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hs(i){return i!==""}function Jl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(Q0,tg)}const j0=new Map;function tg(i,t){let e=Kt[t];if(e===void 0){const n=j0.get(t);if(n!==void 0)e=Kt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ho(e)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(eg,ng)}function ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ql(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ig={[or]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function sg(i){return ig[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rg={[di]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function ag(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const og={[ki]:"ENVMAP_MODE_REFRACTION"};function lg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cg={[po]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[Gh]:"ENVMAP_BLENDING_ADD"};function hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cg[i.combine]||"ENVMAP_BLENDING_NONE"}function ug(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=sg(e),c=ag(e),h=lg(e),f=hg(e),u=ug(e),d=J0(e),g=K0(r),S=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==vn?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,X0("linearToOutputTexel",e.outputColorSpace),Z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=ho(a),a=Jl(a,e),a=Kl(a,e),o=ho(o),o=Jl(o,e),o=Kl(o,e),a=$l(a),o=$l(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=E+m+a,x=E+p+o,b=ql(s,s.VERTEX_SHADER,A),y=ql(s,s.FRAGMENT_SHADER,x);s.attachShader(S,b),s.attachShader(S,y),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(I){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(S)||"",F=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(y)||"",z=O.trim(),q=F.trim(),X=D.trim();let nt=!0,G=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,y);else{const K=Zl(s,b,"vertex"),j=Zl(s,y,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+K+`
`+j)}else z!==""?zt("WebGLProgram: Program Info Log:",z):(q===""||X==="")&&(G=!1);G&&(I.diagnostics={runnable:nt,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(b),s.deleteShader(y),v=new fr(s,S),T=$0(s,S)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,H0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=y,this}let dg=0;class pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mg(t),e.set(t,n)),n}}class mg{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}}function gg(i){return i===pi||i===pr||i===mr}function _g(i,t,e,n,s,r){const a=new To,o=new pg,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,T,P,I,O,F){const D=I.fog,z=O.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,nt=t.get(v.envMap||q,X),G=nt&&nt.mapping===br?nt.image.height:null,K=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&zt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const j=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,yt=j!==void 0?j.length:0;let _t=0;z.morphAttributes.position!==void 0&&(_t=1),z.morphAttributes.normal!==void 0&&(_t=2),z.morphAttributes.color!==void 0&&(_t=3);let Ht,Xt,te,Y;if(K){const me=Je[K];Ht=me.vertexShader,Xt=me.fragmentShader}else{Ht=v.vertexShader,Xt=v.fragmentShader;const me=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,me,le),te=me.id,Y=le.id}const $=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,Et=O.isBatchedMesh===!0,Ot=!!v.map,he=!!v.matcap,et=!!nt,rt=!!v.aoMap,at=!!v.lightMap,ot=!!v.bumpMap&&v.wireframe===!1,ut=!!v.normalMap,Nt=!!v.displacementMap,Ut=!!v.emissiveMap,Bt=!!v.metalnessMap,Vt=!!v.roughnessMap,L=v.anisotropy>0,oe=v.clearcoat>0,$t=v.dispersion>0,w=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,k=v.transmission>0,Z=L&&!!v.anisotropyMap,lt=oe&&!!v.clearcoatMap,ht=oe&&!!v.clearcoatNormalMap,J=oe&&!!v.clearcoatRoughnessMap,tt=_&&!!v.iridescenceMap,dt=_&&!!v.iridescenceThicknessMap,Lt=B&&!!v.sheenColorMap,vt=B&&!!v.sheenRoughnessMap,pt=!!v.specularMap,Dt=!!v.specularColorMap,Ft=!!v.specularIntensityMap,qt=k&&!!v.transmissionMap,N=k&&!!v.thicknessMap,mt=!!v.gradientMap,Q=!!v.alphaMap,gt=v.alphaTest>0,Mt=!!v.alphaHash,it=!!v.extensions;let It=vn;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(It=i.toneMapping);const Rt={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Ht,fragmentShader:Xt,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Et,batchingColor:Et&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ot,matcap:he,envMap:et,envMapMode:et&&nt.mapping,envMapCubeUVHeight:G,aoMap:rt,lightMap:at,bumpMap:ot,normalMap:ut,displacementMap:Nt,emissiveMap:Ut,normalMapObjectSpace:ut&&v.normalMapType===kh,normalMapTangentSpace:ut&&v.normalMapType===gr,packedNormalMap:ut&&v.normalMapType===gr&&gg(v.normalMap.format),metalnessMap:Bt,roughnessMap:Vt,anisotropy:L,anisotropyMap:Z,clearcoat:oe,clearcoatMap:lt,clearcoatNormalMap:ht,clearcoatRoughnessMap:J,dispersion:$t,retroreflection:w,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:dt,sheen:B,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:pt,specularColorMap:Dt,specularIntensityMap:Ft,transmission:k,transmissionMap:qt,thicknessMap:N,gradientMap:mt,opaque:v.transparent===!1&&v.blending===us&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:gt,alphaHash:Mt,combine:v.combine,mapUv:Ot&&g(v.map.channel),aoMapUv:rt&&g(v.aoMap.channel),lightMapUv:at&&g(v.lightMap.channel),bumpMapUv:ot&&g(v.bumpMap.channel),normalMapUv:ut&&g(v.normalMap.channel),displacementMapUv:Nt&&g(v.displacementMap.channel),emissiveMapUv:Ut&&g(v.emissiveMap.channel),metalnessMapUv:Bt&&g(v.metalnessMap.channel),roughnessMapUv:Vt&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:lt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(v.sheenRoughnessMap.channel),specularMapUv:pt&&g(v.specularMap.channel),specularColorMapUv:Dt&&g(v.specularColorMap.channel),specularIntensityMapUv:Ft&&g(v.specularIntensityMap.channel),transmissionMapUv:qt&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ut||L),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Ot||Q),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:_t,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Ot&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Ut&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Xe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)T.push(P),T.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(T,v),E(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function E(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const T=d[v.type];let P;if(T){const I=Je[T];P=No.clone(I.uniforms)}else P=v.uniforms;return P}function x(v,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new fg(i,T,v,s),c.push(P),h.set(T,P)),P}function b(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function y(v){o.remove(v)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:x,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:C}}function vg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,S,m,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=g,E.materialVariant=a(u),E.groupOrder=S,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function l(u,d,g,S,m,p,E){E.reversedDepth===!0&&(m=-m);const A=o(u,d,g,S,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(u,d,g,S,m,p){const E=o(u,d,g,S,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,d){e.length>1&&e.sort(u||xg),n.length>1&&n.sort(d||jl),s.length>1&&s.sort(d||jl)}function f(){for(let u=t,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Sg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new tc,i.set(n,[a])):s>=r.length?(a=new tc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Yt};break;case"SpotLight":e={position:new R,direction:new R,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Eg=0;function bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wg(i){const t=new Mg,e=yg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new Gt,a=new Gt;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,g=0,S=0,m=0,p=0,E=0,A=0,x=0,b=0,y=0,C=0,v=0,T=0,P=0;c.sort(bg);for(let O=0,F=c.length;O<F;O++){const D=c[O],z=D.color,q=D.intensity,X=D.distance;let nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===pi?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*q,f+=z.g*q,u+=z.b*q;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],q);P++}else if(D.isSunLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,j=e.get(D);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=nt;const yt=K.getViewportCount();for(let _t=0;_t<yt;_t++)n.sunShadowMatrix[S+_t]=K.getMatrix(_t),n.sunShadowCascade[S+_t]=K._cascadeData[_t];S+=yt,g++}n.sun[d]=G,d++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,j=e.get(D);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=G,m++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(z).multiplyScalar(q),G.distance=X,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[E]=G;const K=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,K.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[E]=K.matrix,D.castShadow){const j=e.get(D);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[E]=j,n.spotShadowMap[E]=nt,C++}E++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(z).multiplyScalar(q),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=G,A++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const K=D.shadow,j=e.get(D);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=D.shadow.matrix,y++}n.point[p]=G,p++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(q),G.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[x]=G,x++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==E||I.rectAreaLength!==A||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==C||I.numSpotMaps!==v||I.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=E,I.rectAreaLength=A,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=C,I.numSpotMaps=v,I.numLightProbes=P,n.version=Eg++)}function l(c,h){let f=0,u=0,d=0,g=0,S=0,m=0;const p=h.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){const x=c[E];if(x.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),f++}else if(x.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(x.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function ec(i){const t=new wg(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Tg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ec(i),t.set(s,[o])):r>=a.length?(o=new ec(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`,Cg=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Pg=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],nc=new Gt,is=new R,ua=new R;function Lg(i,t,e){let n=new Ro;const s=new st,r=new st,a=new jt,o=new Lf,l=new Df,c={},h=e.maxTextureSize,f={[fi]:Xe,[Xe]:fi,[on]:on},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Ag,fragmentShader:Rg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new se(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let p=this.type;this.render=function(y,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Sh&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Gn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==this.type;F&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=y.length;D<z;D++){const q=y[D],X=q.shadow;if(X===void 0){zt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const nt=X.getFrameExtents();s.multiply(nt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y));const G=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=G,X.map===null||F===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===os){if(q.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Qe(s.x,s.y,{format:pi,type:Sn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Wi(s.x,s.y,gn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Vn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Le,X.map.depthTexture.magFilter=Le}else q.isPointLight?(X.map=new eh(s.x),X.map.depthTexture=new Vu(s.x,Pn)):(X.map=new Qe(s.x,s.y),X.map.depthTexture=new Wi(s.x,s.y,Pn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Vn,this.type===or?(X.map.depthTexture.compareFunction=G?Eo:yo,X.map.depthTexture.minFilter=Oe,X.map.depthTexture.magFilter=Oe):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Le,X.map.depthTexture.magFilter=Le);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);const K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,v);for(let j=0;j<K;j++){const yt=X.getCamera(j);if(q.isPointLight){const _t=X.camera,Ht=X.matrix,Xt=q.distance||_t.far;Xt!==_t.far&&(_t.far=Xt,_t.updateProjectionMatrix()),is.setFromMatrixPosition(q.matrixWorld),_t.position.copy(is),ua.copy(_t.position),ua.add(Cg[j]),_t.up.copy(Pg[j]),_t.lookAt(ua),_t.updateMatrixWorld(),Ht.makeTranslation(-is.x,-is.y,-is.z),nc.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),X._frustum.setFromProjectionMatrix(nc,_t.coordinateSystem,_t.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,j),i.clear();else{j===0&&(i.setRenderTarget(X.map),i.clear());const _t=X.getViewport(j);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),O.viewport(a)}n=X.getFrustum(j),x(C,v,yt,q,this.type)}X.isPointLightShadow!==!0&&this.type===os&&E(X,v),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,I)};function E(y,C){const v=t.update(S);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new Qe(s.x,s.y,{format:pi,type:Sn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,v,u,S,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,v,d,S,null)}function A(y,C,v,T){let P=null;const I=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)P=I;else if(P=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=P.uuid,F=C.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let z=D[F];z===void 0&&(z=P.clone(),D[F]=z,C.addEventListener("dispose",b)),P=z}if(P.visible=C.visible,P.wireframe=C.wireframe,T===os?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=i.properties.get(P);O.light=v}return P}function x(y,C,v,T,P){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===os)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);const F=t.update(y),D=y.material;if(Array.isArray(D)){const z=F.groups;for(let q=0,X=z.length;q<X;q++){const nt=z[q],G=D[nt.materialIndex];if(G&&G.visible){const K=A(y,G,T,P);y.onBeforeShadow(i,y,C,v,F,K,nt),i.renderBufferDirect(v,null,F,K,y,nt),y.onAfterShadow(i,y,C,v,F,K,nt)}}}else if(D.visible){const z=A(y,D,T,P);y.onBeforeShadow(i,y,C,v,F,z,null),i.renderBufferDirect(v,null,F,z,y,null),y.onAfterShadow(i,y,C,v,F,z,null)}}const O=y.children;for(let F=0,D=O.length;F<D;F++)x(O[F],C,v,T,P)}function b(y){y.target.removeEventListener("dispose",b);for(const v in c){const T=c[v],P=y.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Dg(i,t){function e(){let N=!1;const mt=new jt;let Q=null;const gt=new jt(0,0,0,0);return{setMask:function(Mt){Q!==Mt&&!N&&(i.colorMask(Mt,Mt,Mt,Mt),Q=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,it,It,Rt,me){me===!0&&(Mt*=Rt,it*=Rt,It*=Rt),mt.set(Mt,it,It,Rt),gt.equals(mt)===!1&&(i.clearColor(Mt,it,It,Rt),gt.copy(mt))},reset:function(){N=!1,Q=null,gt.set(-1,0,0,0)}}}function n(){let N=!1,mt=!1,Q=null,gt=null,Mt=null;return{setReversed:function(it){if(mt!==it){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),mt=it;const Rt=Mt;Mt=null,this.setClear(Rt)}},getReversed:function(){return mt},setTest:function(it){it?$(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(it){Q!==it&&!N&&(i.depthMask(it),Q=it)},setFunc:function(it){if(mt&&(it=tu[it]),gt!==it){switch(it){case ga:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=it}},setLocked:function(it){N=it},setClear:function(it){Mt!==it&&(Mt=it,mt&&(it=1-it),i.clearDepth(it))},reset:function(){N=!1,Q=null,gt=null,Mt=null,mt=!1}}}function s(){let N=!1,mt=null,Q=null,gt=null,Mt=null,it=null,It=null,Rt=null,me=null;return{setTest:function(le){N||(le?$(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(le){mt!==le&&!N&&(i.stencilMask(le),mt=le)},setFunc:function(le,cn,Mn){(Q!==le||gt!==cn||Mt!==Mn)&&(i.stencilFunc(le,cn,Mn),Q=le,gt=cn,Mt=Mn)},setOp:function(le,cn,Mn){(it!==le||It!==cn||Rt!==Mn)&&(i.stencilOp(le,cn,Mn),it=le,It=cn,Rt=Mn)},setLocked:function(le){N=le},setClear:function(le){me!==le&&(i.clearStencil(le),me=le)},reset:function(){N=!1,mt=null,Q=null,gt=null,Mt=null,it=null,It=null,Rt=null,me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],S=null,m=!1,p=null,E=null,A=null,x=null,b=null,y=null,C=null,v=new Yt(0,0,0),T=0,P=!1,I=null,O=null,F=null,D=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,nt=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=nt>=1):G.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=nt>=2);let K=null,j={};const yt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Ht=new jt().fromArray(yt),Xt=new jt().fromArray(_t);function te(N,mt,Q,gt){const Mt=new Uint8Array(4),it=i.createTexture();i.bindTexture(N,it),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<Q;It++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(mt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return it}const Y={};Y[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(ms),ot(!1),ut($o),$(i.CULL_FACE),rt(Gn);function $(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ct(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Pt(N,mt){return u[N]!==mt?(i.bindFramebuffer(N,mt),u[N]=mt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Et(N,mt){let Q=g,gt=!1;if(N){Q=d.get(mt),Q===void 0&&(Q=[],d.set(mt,Q));const Mt=N.textures;if(Q.length!==Mt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let it=0,It=Mt.length;it<It;it++)Q[it]=i.COLOR_ATTACHMENT0+it;Q.length=Mt.length,gt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Q)}function Ot(N){return S!==N?(i.useProgram(N),S=N,!0):!1}const he={[Oi]:i.FUNC_ADD,[yh]:i.FUNC_SUBTRACT,[Eh]:i.FUNC_REVERSE_SUBTRACT};he[bh]=i.MIN,he[wh]=i.MAX;const et={[Th]:i.ZERO,[Ah]:i.ONE,[Rh]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Uh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ph]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Lh]:i.ONE_MINUS_DST_ALPHA,[Nh]:i.CONSTANT_COLOR,[Fh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(N,mt,Q,gt,Mt,it,It,Rt,me,le){if(N===Gn){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),N!==Mh){if(N!==p||le!==P){if((E!==Oi||b!==Oi)&&(i.blendEquation(i.FUNC_ADD),E=Oi,b=Oi),le)switch(N){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.ONE,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qo:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}A=null,x=null,y=null,C=null,v.set(0,0,0),T=0,p=N,P=le}return}Mt=Mt||mt,it=it||Q,It=It||gt,(mt!==E||Mt!==b)&&(i.blendEquationSeparate(he[mt],he[Mt]),E=mt,b=Mt),(Q!==A||gt!==x||it!==y||It!==C)&&(i.blendFuncSeparate(et[Q],et[gt],et[it],et[It]),A=Q,x=gt,y=it,C=It),(Rt.equals(v)===!1||me!==T)&&(i.blendColor(Rt.r,Rt.g,Rt.b,me),v.copy(Rt),T=me),p=N,P=!1}function at(N,mt){N.side===on?ct(i.CULL_FACE):$(i.CULL_FACE);let Q=N.side===Xe;mt&&(Q=!Q),ot(Q),N.blending===us&&N.transparent===!1?rt(Gn):rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const gt=N.stencilWrite;o.setTest(gt),gt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function ut(N){N!==vh?($(i.CULL_FACE),N!==O&&(N===$o?i.cullFace(i.BACK):N===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),O=N}function Nt(N){N!==F&&(X&&i.lineWidth(N),F=N)}function Ut(N,mt,Q){N?($(i.POLYGON_OFFSET_FILL),(D!==mt||z!==Q)&&(D=mt,z=Q,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,Q))):ct(i.POLYGON_OFFSET_FILL)}function Bt(N){N?$(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Vt(N){N===void 0&&(N=i.TEXTURE0+q-1),K!==N&&(i.activeTexture(N),K=N)}function L(N,mt,Q){Q===void 0&&(K===null?Q=i.TEXTURE0+q-1:Q=K);let gt=j[Q];gt===void 0&&(gt={type:void 0,texture:void 0},j[Q]=gt),(gt.type!==N||gt.texture!==mt)&&(K!==Q&&(i.activeTexture(Q),K=Q),i.bindTexture(N,mt||Y[N]),gt.type=N,gt.texture=mt)}function oe(){const N=j[K];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function B(){try{i.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function lt(){try{i.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function ht(){try{i.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function J(){try{i.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function tt(){try{i.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function dt(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Lt(N,mt){f[N]!==mt&&(i.pixelStorei(N,mt),f[N]=mt)}function vt(N){Ht.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ht.copy(N))}function pt(N){Xt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Xt.copy(N))}function Dt(N,mt){let Q=c.get(mt);Q===void 0&&(Q=new WeakMap,c.set(mt,Q));let gt=Q.get(N);gt===void 0&&(gt=i.getUniformBlockIndex(mt,N.name),Q.set(N,gt))}function Ft(N,mt){const gt=c.get(mt).get(N);l.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,N.__bindingPointIndex),l.set(mt,gt))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,j={},u={},d=new WeakMap,g=[],S=null,m=!1,p=null,E=null,A=null,x=null,b=null,y=null,C=null,v=new Yt(0,0,0),T=0,P=!1,I=null,O=null,F=null,D=null,z=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:ct,bindFramebuffer:Pt,drawBuffers:Et,useProgram:Ot,setBlending:rt,setMaterial:at,setFlipSided:ot,setCullFace:ut,setLineWidth:Nt,setPolygonOffset:Ut,setScissorTest:Bt,activeTexture:Vt,bindTexture:L,unbindTexture:oe,compressedTexImage2D:$t,compressedTexImage3D:w,texImage2D:J,texImage3D:tt,pixelStorei:Lt,getParameter:dt,updateUBOMapping:Dt,uniformBlockBinding:Ft,texStorage2D:lt,texStorage3D:ht,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:vt,viewport:pt,reset:qt}}function Ig(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,_){return g?new OffscreenCanvas(w,_):xr("canvas")}function m(w,_,B){let k=1;const Z=$t(w);if((Z.width>B||Z.height>B)&&(k=B/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const lt=Math.floor(k*Z.width),ht=Math.floor(k*Z.height);u===void 0&&(u=S(lt,ht));const J=_?S(lt,ht):u;return J.width=lt,J.height=ht,J.getContext("2d").drawImage(w,0,0,lt,ht),zt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+lt+"x"+ht+")."),J}else return"data"in w&&zt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function p(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,_,B,k,Z,lt=!1){if(w!==null){if(i[w]!==void 0)return i[w];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht;k&&(ht=t.get("EXT_texture_norm16"),ht||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&ht&&(J=ht.R16_EXT),B===i.SHORT&&ht&&(J=ht.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),_===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&ht&&(J=ht.RG16_EXT),B===i.SHORT&&ht&&(J=ht.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&ht&&(J=ht.RGB16_EXT),B===i.SHORT&&ht&&(J=ht.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){const tt=lt?vr:ee.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=tt===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ht&&(J=ht.RGBA16_EXT),B===i.SHORT&&ht&&(J=ht.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(w,_){let B;return w?_===null||_===Pn||_===_s?B=i.DEPTH24_STENCIL8:_===gn?B=i.DEPTH32F_STENCIL8:_===gs&&(B=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Pn||_===_s?B=i.DEPTH_COMPONENT24:_===gn?B=i.DEPTH_COMPONENT32F:_===gs&&(B=i.DEPTH_COMPONENT16),B}function y(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Le&&w.minFilter!==Oe?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function v(w){const _=w.target;_.removeEventListener("dispose",v),I(_)}function T(w){const _=n.get(w);if(_.__webglInit===void 0)return;const B=w.source,k=d.get(B);if(k){const Z=k[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(w),Object.keys(k).length===0&&d.delete(B)}n.remove(w)}function P(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const B=w.source,k=d.get(B);delete k[_.__cacheKey],a.memory.textures--}function I(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Z=0;Z<_.__webglFramebuffer[k].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[k][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=w.textures;for(let k=0,Z=B.length;k<Z;k++){const lt=n.get(B[k]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(B[k])}n.remove(w)}let O=0;function F(){O=0}function D(){return O}function z(w){O=w}function q(){const w=O;return w>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,w}function X(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function nt(w,_){const B=n.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const k=w.image;if(k===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(B,w,_);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function G(w,_){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ct(B,w,_);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function K(w,_){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ct(B,w,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function j(w,_){const B=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){Pt(B,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const yt={[Ea]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},_t={[Le]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},Ht={[Xh]:i.NEVER,[Kh]:i.ALWAYS,[qh]:i.LESS,[yo]:i.LEQUAL,[Yh]:i.EQUAL,[Eo]:i.GEQUAL,[Zh]:i.GREATER,[Jh]:i.NOTEQUAL};function Xt(w,_){if(_.type===gn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Oe||_.magFilter===Dr||_.magFilter===ws||_.magFilter===ti||_.minFilter===Oe||_.minFilter===Dr||_.minFilter===ws||_.minFilter===ti)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,yt[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,yt[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,yt[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_t[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ht[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Le||_.minFilter!==ws&&_.minFilter!==ti||_.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(w,_){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const k=_.source;let Z=d.get(k);Z===void 0&&(Z={},d.set(k,Z));const lt=X(_);if(lt!==w.__cacheKey){Z[lt]===void 0&&(Z[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[lt].usedTimes++;const ht=Z[w.__cacheKey];ht!==void 0&&(Z[w.__cacheKey].usedTimes--,ht.usedTimes===0&&P(_)),w.__cacheKey=lt,w.__webglTexture=Z[lt].texture}return B}function Y(w,_,B){return Math.floor(Math.floor(w/B)/_)}function $(w,_,B,k){const lt=w.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,k,_.data);else{lt.sort((Lt,vt)=>Lt.start-vt.start);let ht=0;for(let Lt=1;Lt<lt.length;Lt++){const vt=lt[ht],pt=lt[Lt],Dt=vt.start+vt.count,Ft=Y(pt.start,_.width,4),qt=Y(vt.start,_.width,4);pt.start<=Dt+1&&Ft===qt&&Y(pt.start+pt.count-1,_.width,4)===Ft?vt.count=Math.max(vt.count,pt.start+pt.count-vt.start):(++ht,lt[ht]=pt)}lt.length=ht+1;const J=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Lt=0,vt=lt.length;Lt<vt;Lt++){const pt=lt[Lt],Dt=Math.floor(pt.start/4),Ft=Math.ceil(pt.count/4),qt=Dt%_.width,N=Math.floor(Dt/_.width),mt=Ft,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,qt,N,mt,Q,B,k,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function ct(w,_,B){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const Z=te(w,_),lt=_.source;e.bindTexture(k,w.__webglTexture,i.TEXTURE0+B);const ht=n.get(lt);if(lt.version!==ht.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=ee.getPrimaries(ee.workingColorSpace),gt=_.colorSpace===jn?null:ee.getPrimaries(_.colorSpace),Mt=_.colorSpace===jn||Q===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=m(_.image,!1,s.maxTextureSize);tt=oe(_,tt);const dt=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type);let vt=x(_.internalFormat,dt,Lt,_.normalized,_.colorSpace,_.isVideoTexture);Xt(k,_);let pt;const Dt=_.mipmaps,Ft=_.isVideoTexture!==!0,qt=ht.__version===void 0||Z===!0,N=lt.dataReady,mt=y(_,tt);if(_.isDepthTexture)vt=b(_.format===hi,_.type),qt&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,vt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,vt,tt.width,tt.height,0,dt,Lt,null));else if(_.isDataTexture)if(Dt.length>0){Ft&&qt&&e.texStorage2D(i.TEXTURE_2D,mt,vt,Dt[0].width,Dt[0].height);for(let Q=0,gt=Dt.length;Q<gt;Q++)pt=Dt[Q],Ft?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,dt,Lt,pt.data):e.texImage2D(i.TEXTURE_2D,Q,vt,pt.width,pt.height,0,dt,Lt,pt.data);_.generateMipmaps=!1}else Ft?(qt&&e.texStorage2D(i.TEXTURE_2D,mt,vt,tt.width,tt.height),N&&$(_,tt,dt,Lt)):e.texImage2D(i.TEXTURE_2D,0,vt,tt.width,tt.height,0,dt,Lt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,vt,Dt[0].width,Dt[0].height,tt.depth);for(let Q=0,gt=Dt.length;Q<gt;Q++)if(pt=Dt[Q],_.format!==_n)if(dt!==null)if(Ft){if(N)if(_.layerUpdates.size>0){const Mt=Nl(pt.width,pt.height,_.format,_.type);for(const it of _.layerUpdates){const It=pt.data.subarray(it*Mt/pt.data.BYTES_PER_ELEMENT,(it+1)*Mt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,it,pt.width,pt.height,1,dt,It)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,pt.width,pt.height,tt.depth,dt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,vt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,pt.width,pt.height,tt.depth,dt,Lt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,vt,pt.width,pt.height,tt.depth,0,dt,Lt,pt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ft&&qt&&e.texStorage2D(i.TEXTURE_2D,mt,vt,Dt[0].width,Dt[0].height);for(let Q=0,gt=Dt.length;Q<gt;Q++)pt=Dt[Q],_.format!==_n?dt!==null?Ft?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,vt,pt.width,pt.height,0,pt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,dt,Lt,pt.data):e.texImage2D(i.TEXTURE_2D,Q,vt,pt.width,pt.height,0,dt,Lt,pt.data)}else if(_.isDataArrayTexture)if(Ft){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,vt,tt.width,tt.height,tt.depth),N)if(_.layerUpdates.size>0){const Q=Nl(tt.width,tt.height,_.format,_.type);for(const gt of _.layerUpdates){const Mt=tt.data.subarray(gt*Q/tt.data.BYTES_PER_ELEMENT,(gt+1)*Q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,tt.width,tt.height,1,dt,Lt,Mt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,Lt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,tt.width,tt.height,tt.depth,0,dt,Lt,tt.data);else if(_.isData3DTexture)Ft?(qt&&e.texStorage3D(i.TEXTURE_3D,mt,vt,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,Lt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,vt,tt.width,tt.height,tt.depth,0,dt,Lt,tt.data);else if(_.isFramebufferTexture){if(qt)if(Ft)e.texStorage2D(i.TEXTURE_2D,mt,vt,tt.width,tt.height);else{let Q=tt.width,gt=tt.height;for(let Mt=0;Mt<mt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,vt,Q,gt,0,dt,Lt,null),Q>>=1,gt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),tt.parentNode!==Q){Q.appendChild(tt),f.add(_),Q.onpaint=gt=>{const Mt=gt.changedElements;for(const it of f)Mt.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const Mt=i.RGBA,it=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,it,It,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ft&&qt){const Q=$t(Dt[0]);e.texStorage2D(i.TEXTURE_2D,mt,vt,Q.width,Q.height)}for(let Q=0,gt=Dt.length;Q<gt;Q++)pt=Dt[Q],Ft?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt,Lt,pt):e.texImage2D(i.TEXTURE_2D,Q,vt,dt,Lt,pt);_.generateMipmaps=!1}else if(Ft){if(qt){const Q=$t(tt);e.texStorage2D(i.TEXTURE_2D,mt,vt,Q.width,Q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Lt,tt)}else e.texImage2D(i.TEXTURE_2D,0,vt,dt,Lt,tt);p(_)&&E(k),ht.__version=lt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Pt(w,_,B){if(_.image.length!==6)return;const k=te(w,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const lt=n.get(Z);if(Z.version!==lt.__version||k===!0){e.activeTexture(i.TEXTURE0+B);const ht=ee.getPrimaries(ee.workingColorSpace),J=_.colorSpace===jn?null:ee.getPrimaries(_.colorSpace),tt=_.colorSpace===jn||ht===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const dt=_.isCompressedTexture||_.image[0].isCompressedTexture,Lt=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let it=0;it<6;it++)!dt&&!Lt?vt[it]=m(_.image[it],!0,s.maxCubemapSize):vt[it]=Lt?_.image[it].image:_.image[it],vt[it]=oe(_,vt[it]);const pt=vt[0],Dt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),qt=x(_.internalFormat,Dt,Ft,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,mt=lt.__version===void 0||k===!0,Q=Z.dataReady;let gt=y(_,pt);Xt(i.TEXTURE_CUBE_MAP,_);let Mt;if(dt){N&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,pt.width,pt.height);for(let it=0;it<6;it++){Mt=vt[it].mipmaps;for(let It=0;It<Mt.length;It++){const Rt=Mt[It];_.format!==_n?Dt!==null?N?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,qt,Rt.width,Rt.height,0,Rt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,Rt.width,Rt.height,Dt,Ft,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,qt,Rt.width,Rt.height,0,Dt,Ft,Rt.data)}}}else{if(Mt=_.mipmaps,N&&mt){Mt.length>0&&gt++;const it=$t(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,qt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,vt[it].width,vt[it].height,Dt,Ft,vt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,vt[it].width,vt[it].height,0,Dt,Ft,vt[it].data);for(let It=0;It<Mt.length;It++){const me=Mt[It].image[it].image;N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,me.width,me.height,Dt,Ft,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,qt,me.width,me.height,0,Dt,Ft,me.data)}}else{N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,Ft,vt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,Dt,Ft,vt[it]);for(let It=0;It<Mt.length;It++){const Rt=Mt[It];N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,Dt,Ft,Rt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,qt,Dt,Ft,Rt.image[it])}}}p(_)&&E(i.TEXTURE_CUBE_MAP),lt.__version=Z.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Et(w,_,B,k,Z,lt){const ht=r.convert(B.format,B.colorSpace),J=r.convert(B.type),tt=x(B.internalFormat,ht,J,B.normalized,B.colorSpace),dt=n.get(_),Lt=n.get(B);if(Lt.__renderTarget=_,!dt.__hasExternalTextures){const vt=Math.max(1,_.width>>lt),pt=Math.max(1,_.height>>lt);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,lt,tt,vt,pt,_.depth,0,ht,J,null):e.texImage2D(Z,lt,tt,vt,pt,0,ht,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Z,Lt.__webglTexture,0,Bt(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Z,Lt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(w,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const k=_.depthTexture,Z=k&&k.isDepthTexture?k.type:null,lt=b(_.stencilBuffer,Z),ht=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(_),lt,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(_),lt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,lt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,w)}else{const k=_.textures;for(let Z=0;Z<k.length;Z++){const lt=k[Z],ht=r.convert(lt.format,lt.colorSpace),J=r.convert(lt.type),tt=x(lt.internalFormat,ht,J,lt.normalized,lt.colorSpace);Vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(_),tt,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(_),tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(w,_,B){const k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,_.depthTexture);const dt=r.convert(_.depthTexture.format),Lt=r.convert(_.depthTexture.type);let vt;_.depthTexture.format===Vn?vt=i.DEPTH_COMPONENT24:_.depthTexture.format===hi&&(vt=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,vt,_.width,_.height,0,dt,Lt,null)}}else nt(_.depthTexture,0);const lt=Z.__webglTexture,ht=Bt(_),J=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,tt=_.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Vn)Vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,J,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,tt,J,lt,0);else if(_.depthTexture.format===hi)Vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,J,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,tt,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(w){const _=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const k=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=k}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)he(_.__webglFramebuffer[k],w,k);else{const k=w.texture.mipmaps;k&&k.length>0?he(_.__webglFramebuffer[0],w,0):he(_.__webglFramebuffer,w,0)}else if(B){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),Ot(_.__webglDepthbuffer[k],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,lt)}}else{const k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ot(_.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,_,B){const k=n.get(w);_!==void 0&&Et(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&et(w)}function at(w){const _=w.texture,B=n.get(w),k=n.get(_);w.addEventListener("dispose",v);const Z=w.textures,lt=w.isWebGLCubeRenderTarget===!0,ht=Z.length>1;if(ht||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),lt){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let tt=0;tt<_.mipmaps.length;tt++)B.__webglFramebuffer[J][tt]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ht)for(let J=0,tt=Z.length;J<tt;J++){const dt=n.get(Z[J]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Vt(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const tt=Z[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const dt=r.convert(tt.format,tt.colorSpace),Lt=r.convert(tt.type),vt=x(tt.internalFormat,dt,Lt,tt.normalized,tt.colorSpace,w.isXRRenderTarget===!0),pt=Bt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)Et(B.__webglFramebuffer[J][tt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,tt);else Et(B.__webglFramebuffer[J],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let J=0,tt=Z.length;J<tt;J++){const dt=Z[J],Lt=n.get(dt);let vt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(vt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Lt.__webglTexture),Xt(vt,dt),Et(B.__webglFramebuffer,w,dt,i.COLOR_ATTACHMENT0+J,vt,0),p(dt)&&E(vt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,k.__webglTexture),Xt(J,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)Et(B.__webglFramebuffer[tt],w,_,i.COLOR_ATTACHMENT0,J,tt);else Et(B.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,J,0);p(_)&&E(J),e.unbindTexture()}w.depthBuffer&&et(w)}function ot(w){const _=w.textures;for(let B=0,k=_.length;B<k;B++){const Z=_[B];if(p(Z)){const lt=A(w),ht=n.get(Z).__webglTexture;e.bindTexture(lt,ht),E(lt),e.unbindTexture()}}}const ut=[],Nt=[];function Ut(w){if(w.samples>0){if(Vt(w)===!1){const _=w.textures,B=w.width,k=w.height;let Z=i.COLOR_BUFFER_BIT;const lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(w),J=_.length>1;if(J)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const tt=w.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);const Lt=n.get(_[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,B,k,0,0,B,k,Z,i.NEAREST),l===!0&&(ut.length=0,Nt.length=0,ut.push(i.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ut.push(lt),Nt.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);const Lt=n.get(_[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Bt(w){return Math.min(s.maxSamples,w.samples)}function Vt(w){const _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(w){const _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function oe(w,_){const B=w.colorSpace,k=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==_r&&B!==jn&&(ee.getTransfer(B)===ue?(k!==_n||Z!==Ke)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",B)),_}function $t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=nt,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=rt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ug(i,t){function e(n,s=jn){let r;const a=ee.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Pc)return i.ALPHA;if(n===Lc)return i.RGB;if(n===_n)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===So)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===La||n===Da||n===Ia||n===pr||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pr)return r.COMPRESSED_RG11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Ga||n===Ha||n===Va||n===ka||n===Wa||n===Xa||n===qa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===Ka||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===ja||n===mr||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
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

}`;class Og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Hc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:Ng,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bg extends gi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const S=typeof XRWebGLBinding<"u",m=new Og,p={},E=e.getContextAttributes();let A=null,x=null;const b=[],y=[],C=new st;let v=null,T=null;const P=new Ze;P.viewport=new jt;const I=new Ze;I.viewport=new jt;const O=[P,I],F=new Gf;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=b[Y];return $===void 0&&($=new zr,b[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=b[Y];return $===void 0&&($=new zr,b[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=b[Y];return $===void 0&&($=new zr,b[Y]=$),$.getHandSpace()};function q(Y){const $=y.indexOf(Y.inputSource);if($===-1)return;const ct=b[$];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||a),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<b.length;Y++){const $=y[Y];$!==null&&(y[Y]=null,b[Y].disconnect($))}D=null,z=null,m.reset();for(const Y in p)delete p[Y];if(t.setRenderTarget(A),d=null,u=null,f=null,s=null,x=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),T!==null){const Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Pt=null,Et=null;E.depth&&(Et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=E.stencil?hi:Vn,Pt=E.stencil?_s:Pn);const Ot={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Qe(u.textureWidth,u.textureHeight,{format:_n,type:Ke,depthTexture:new Wi(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ct={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Qe(d.framebufferWidth,d.framebufferHeight,{format:_n,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Y){for(let $=0;$<Y.removed.length;$++){const ct=Y.removed[$],Pt=y.indexOf(ct);Pt>=0&&(y[Pt]=null,b[Pt].disconnect(ct))}for(let $=0;$<Y.added.length;$++){const ct=Y.added[$];let Pt=y.indexOf(ct);if(Pt===-1){for(let Ot=0;Ot<b.length;Ot++)if(Ot>=y.length){y.push(ct),Pt=Ot;break}else if(y[Ot]===null){y[Ot]=ct,Pt=Ot;break}if(Pt===-1)break}const Et=b[Pt];Et&&Et.connect(ct)}}const G=new R,K=new R;function j(Y,$,ct){G.setFromMatrixPosition($.matrixWorld),K.setFromMatrixPosition(ct.matrixWorld);const Pt=G.distanceTo(K),Et=$.projectionMatrix.elements,Ot=ct.projectionMatrix.elements,he=Et[14]/(Et[10]-1),et=Et[14]/(Et[10]+1),rt=(Et[9]+1)/Et[5],at=(Et[9]-1)/Et[5],ot=(Et[8]-1)/Et[0],ut=(Ot[8]+1)/Ot[0],Nt=he*ot,Ut=he*ut,Bt=Pt/(-ot+ut),Vt=Bt*-ot;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Vt),Y.translateZ(Bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const L=he+Bt,oe=et+Bt,$t=Nt-Vt,w=Ut+(Pt-Vt),_=rt*et/oe*L,B=at*et/oe*L;Y.projectionMatrix.makePerspective($t,w,_,B,L,oe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function yt(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,ct=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),F.near=I.near=P.near=$,F.far=I.far=P.far=ct,(D!==F.near||z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,z=F.far),F.layers.mask=Y.layers.mask|6,P.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const Pt=Y.parent,Et=F.cameras;yt(F,Pt);for(let Ot=0;Ot<Et.length;Ot++)yt(Et[Ot],Pt);Et.length===2?j(F,P,I):F.projectionMatrix.copy(P.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),_t(Y,F,Pt)};function _t(Y,$,ct){ct===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let Ht=null;function Xt(Y,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Pt=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,Pt=!0);for(let et=0;et<ct.length;et++){const rt=ct[et];let at=null;if(d!==null)at=d.getViewport(rt);else{const ut=f.getViewSubImage(u,rt);at=ut.viewport,et===0&&(t.setRenderTargetTextures(x,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(x))}let ot=O[et];ot===void 0&&(ot=new Ze,ot.layers.enable(et),ot.viewport=new jt,O[et]=ot),ot.matrix.fromArray(rt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(rt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(at.x,at.y,at.width,at.height),et===0&&(F.matrix.copy(ot.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pt===!0&&F.cameras.push(ot)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const et=f.getDepthInformation(ct[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(Et&&Et.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let et=0;et<ct.length;et++){const rt=ct[et].camera;if(rt){let at=p[rt];at||(at=new Hc,p[rt]=at);const ot=f.getCameraImage(rt);at.sourceTexture=ot}}}}for(let ct=0;ct<b.length;ct++){const Pt=y[ct],Et=b[ct];Pt!==null&&Et!==void 0&&Et.update(Pt,$,c||a)}Ht&&Ht(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const te=new jc;te.setAnimationLoop(Xt),this.setAnimationLoop=function(Y){Ht=Y},this.dispose=function(){}}}const zg=new Gt,ah=new kt;ah.set(-1,0,0,0,1,0,0,0,1);function Gg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,A,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),A=E.envMap,x=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ah),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const y=b.program;n.uniformBlockBinding(x,y)}function c(x,b){let y=s[x.id];y===void 0&&(m(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",E));const C=b.program;n.updateUBOMapping(x,C);const v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){const b=f();x.__bindingPointIndex=b;const y=i.createBuffer(),C=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const b=s[x.id],y=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,T=y.length;v<T;v++){const P=y[v];if(Array.isArray(P))for(let I=0,O=P.length;I<O;I++)d(P[I],v,I,C);else d(P,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,b,y,C){if(S(x,b,y,C)===!0){const v=x.__offset,T=x.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){const O=T[I],F=p(O);g(O,x.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,b,y){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,y)}function S(x,b,y,C){const v=x.value,T=b+"_"+y;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{const P=C[T];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(x){const b=x.uniforms;let y=0;const C=16;for(let T=0,P=b.length;T<P;T++){const I=Array.isArray(b[T])?b[T]:[b[T]];for(let O=0,F=I.length;O<F;O++){const D=I[O],z=Array.isArray(D.value)?D.value:[D.value];for(let q=0,X=z.length;q<X;q++){const nt=z[q],G=p(nt),K=y%C,j=K%G.boundary,yt=K+j;y+=j,yt!==0&&C-yt<G.storage&&(y+=C-yt),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=G.storage}}}const v=y%C;return v>0&&(y+=C-v),x.__size=y,x.__cache={},this}function p(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",x),b}function E(x){const b=x.target;b.removeEventListener("dispose",E);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}const Vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function kg(){return bn===null&&(bn=new zc(Vg,16,16,pi,Sn),bn.name="DFG_LUT",bn.minFilter=Oe,bn.magFilter=Oe,bn.wrapS=Bn,bn.wrapT=Bn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class Wg{constructor(t={}){const{canvas:e=Qh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ke}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=d,m=new Set([Mo,So,xo]),p=new Set([Ke,Pn,gs,_s,go,_o]),E=new Uint32Array(4),A=new Int32Array(4),x=new R;let b=null,y=null;const C=[],v=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,O=null,F=null,D=null,z=null;this._outputColorSpace=Ye;let q=0,X=0,nt=null,G=-1,K=null;const j=new jt,yt=new jt;let _t=null;const Ht=new Yt(0);let Xt=0,te=e.width,Y=e.height,$=1,ct=null,Pt=null;const Et=new jt(0,0,te,Y),Ot=new jt(0,0,te,Y);let he=!1;const et=new Ro;let rt=!1,at=!1;const ot=new Gt,ut=new R,Nt=new jt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Vt(){return nt===null?$:1}let L=n;function oe(M,U){return e.getContext(M,U)}let $t,w,_,B,k,Z,lt,ht,J,tt,dt,Lt,vt,pt,Dt,Ft,qt,N,mt,Q,gt,Mt,it;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",cn,!1),L===null){const U="webgl2";if(L=oe(U,M),L===null)throw oe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(M){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),ne("WebGLRenderer: "+M.message),M}function It(){$t=new km(L),$t.init(),gt=new Ug(L,$t),w=new Im(L,$t,t,gt),_=new Dg(L,$t),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=L.createFramebuffer(),D=L.createFramebuffer(),z=L.createFramebuffer(),B=new qm(L),k=new vg,Z=new Ig(L,$t,_,k,w,gt,B),lt=new Vm(P),ht=new Zf(L),Mt=new Lm(L,ht),J=new Wm(L,ht,B,Mt),tt=new Zm(L,J,ht,Mt,B),N=new Ym(L,w,Z),Dt=new Um(k),dt=new _g(P,lt,$t,w,Mt,Dt),Lt=new Gg(P,k),vt=new Sg,pt=new Tg($t),qt=new Pm(P,lt,_,tt,g,l),Ft=new Lg(P,tt,w),it=new Hg(L,B,w,_),mt=new Dm(L,$t,B),Q=new Xm(L,$t,B),B.programs=dt.programs,P.capabilities=w,P.extensions=$t,P.properties=k,P.renderLists=vt,P.shadowMap=Ft,P.state=_,P.info=B}S!==Ke&&(T=new Km(S,e.width,e.height,o,s,r));const Rt=new Bg(P,L);this.xr=Rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=$t.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$t.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(te,Y,!1))},this.getSize=function(M){return M.set(te,Y)},this.setSize=function(M,U,W=!0){if(Rt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}te=M,Y=U,e.width=Math.floor(M*$),e.height=Math.floor(U*$),W===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(te*$,Y*$).floor()},this.setDrawingBufferSize=function(M,U,W){te=M,Y=U,$=W,e.width=Math.floor(M*W),e.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(S===Ke){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(Et)},this.setViewport=function(M,U,W,H){M.isVector4?Et.set(M.x,M.y,M.z,M.w):Et.set(M,U,W,H),_.viewport(j.copy(Et).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(Ot)},this.setScissor=function(M,U,W,H){M.isVector4?Ot.set(M.x,M.y,M.z,M.w):Ot.set(M,U,W,H),_.scissor(yt.copy(Ot).multiplyScalar($).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(M){_.setScissorTest(he=M)},this.setOpaqueSort=function(M){ct=M},this.setTransparentSort=function(M){Pt=M},this.getClearColor=function(M){return M.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let H=0;if(M){let V=!1;if(nt!==null){const St=nt.texture.format;V=m.has(St)}if(V){const St=nt.texture.type,wt=p.has(St),xt=qt.getClearColor(),Tt=qt.getClearAlpha(),Ct=xt.r,Zt=xt.g,Qt=xt.b;wt?(E[0]=Ct,E[1]=Zt,E[2]=Qt,E[3]=Tt,L.clearBufferuiv(L.COLOR,0,E)):(A[0]=Ct,A[1]=Zt,A[2]=Qt,A[3]=Tt,L.clearBufferiv(L.COLOR,0,A))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),qt.dispose(),vt.dispose(),pt.dispose(),k.dispose(),lt.dispose(),tt.dispose(),Mt.dispose(),it.dispose(),dt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Vo),Rt.removeEventListener("sessionend",ko),ni.stop()};function me(M){M.preventDefault(),Sr("WebGLRenderer: Context Lost."),I=!0}function le(){Sr("WebGLRenderer: Context Restored."),I=!1;const M=B.autoReset,U=Ft.enabled,W=Ft.autoUpdate,H=Ft.needsUpdate,V=Ft.type;It(),B.autoReset=M,Ft.enabled=U,Ft.autoUpdate=W,Ft.needsUpdate=H,Ft.type=V}function cn(M){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Mn(M){const U=M.target;U.removeEventListener("dispose",Mn),hh(U)}function hh(M){uh(M),k.remove(M)}function uh(M){const U=k.get(M).programs;U!==void 0&&(U.forEach(function(W){dt.releaseProgram(W)}),M.isShaderMaterial&&dt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,H,V,St){U===null&&(U=Ut);const wt=V.isMesh&&V.matrixWorld.determinantAffine()<0,xt=ph(M,U,W,H,V);_.setMaterial(H,wt);let Tt=W.index,Ct=1;if(H.wireframe===!0){if(Tt=J.getWireframeAttribute(W),Tt===void 0)return;Ct=2}const Zt=W.drawRange,Qt=W.attributes.position;let At=Zt.start*Ct,ce=(Zt.start+Zt.count)*Ct;St!==null&&(At=Math.max(At,St.start*Ct),ce=Math.min(ce,(St.start+St.count)*Ct)),Tt!==null?(At=Math.max(At,0),ce=Math.min(ce,Tt.count)):Qt!=null&&(At=Math.max(At,0),ce=Math.min(ce,Qt.count));const Me=ce-At;if(Me<0||Me===1/0)return;Mt.setup(V,H,xt,W,Tt);let _e,pe=mt;if(Tt!==null&&(_e=ht.get(Tt),pe=Q,pe.setIndex(_e)),V.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*Vt()),pe.setMode(L.LINES)):pe.setMode(L.TRIANGLES);else if(V.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),_.setLineWidth(Ie*Vt()),V.isLineSegments?pe.setMode(L.LINES):V.isLineLoop?pe.setMode(L.LINE_LOOP):pe.setMode(L.LINE_STRIP)}else V.isPoints?pe.setMode(L.POINTS):V.isSprite&&pe.setMode(L.TRIANGLES);if(V.isBatchedMesh)if($t.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ie=V._multiDrawStarts,bt=V._multiDrawCounts,Ge=V._multiDrawCount,ie=Tt?ht.get(Tt).bytesPerElement:1,nn=k.get(H).currentProgram.getUniforms();for(let yn=0;yn<Ge;yn++)nn.setValue(L,"_gl_DrawID",yn),pe.render(Ie[yn]/ie,bt[yn])}else if(V.isInstancedMesh)pe.renderInstances(At,Me,V.count);else if(W.isInstancedBufferGeometry){const Ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,bt=Math.min(W.instanceCount,Ie);pe.renderInstances(At,Me,bt)}else pe.render(At,Me)};function Ho(M,U,W,H){O!==null&&M.isNodeMaterial&&O.setObject(H,M),rt===!0&&Dt.setState(M,W,!1),M.transparent===!0&&M.side===on&&M.forceSinglePass===!1?(M.side=Xe,M.needsUpdate=!0,bs(M,U,H),M.side=fi,M.needsUpdate=!0,bs(M,U,H),M.side=on):bs(M,U,H)}this.compile=function(M,U,W=null){W===null&&(W=M),O!==null&&O.renderStart(M,U,W),y=pt.get(W),y.init(U),v.push(y),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),M!==W&&M.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights(),O!==null&&O.updateLights(y.state.lightsArray),at=this.localClippingEnabled,rt=Dt.init(this.clippingPlanes,at),rt===!0&&Dt.setGlobalState(this.clippingPlanes,U),O!==null&&Ft.render(y.state.shadowsArray,W,U);const H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const St=V.material;if(St)if(Array.isArray(St))for(let wt=0;wt<St.length;wt++){const xt=St[wt];Ho(xt,W,U,V),H.add(xt)}else Ho(St,W,U,V),H.add(St)}),y=v.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(M,U,W=null){const H=this.compile(M,U,W);return new Promise(V=>{function St(){if(H.forEach(function(wt){const Tt=k.get(wt).currentProgram;(Tt===void 0||Tt.isReady())&&H.delete(wt)}),H.size===0){V(M);return}setTimeout(St,10)}$t.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Rr=null;function fh(M){Rr&&Rr(M)}function Vo(){ni.stop()}function ko(){ni.start()}const ni=new jc;ni.setAnimationLoop(fh),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(M){Rr=M,Rt.setAnimationLoop(M),M===null?ni.stop():ni.start()},Rt.addEventListener("sessionstart",Vo),Rt.addEventListener("sessionend",ko),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(M,U);const W=Rt.enabled===!0&&Rt.isPresenting===!0,H=T!==null&&(nt===null||W)&&T.begin(P,nt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(U),U=Rt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,nt),y=pt.get(M,v.length),y.init(U),y.state.textureUnits=Z.getTextureUnits(),v.push(y),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(ot,Rn,U.reversedDepth),at=this.localClippingEnabled,rt=Dt.init(this.clippingPlanes,at),b=vt.get(M,C.length),b.init(),C.push(b),Rt.enabled===!0&&Rt.isPresenting===!0){const wt=P.xr.getDepthSensingMesh();wt!==null&&Cr(wt,U,-1/0,P.sortObjects)}Cr(M,U,0,P.sortObjects),b.finish(),O!==null&&O.updateLights(y.state.lightsArray),P.sortObjects===!0&&b.sort(ct,Pt),Bt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Bt&&qt.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Dt.beginShadows();const V=y.state.shadowsArray;if(Ft.render(V,M,U),rt===!0&&Dt.endShadows(),(H&&T.hasRenderPass())===!1){const wt=b.opaque,xt=b.transmissive;if(y.setupLights(),U.isArrayCamera){const Tt=U.cameras;if(xt.length>0)for(let Ct=0,Zt=Tt.length;Ct<Zt;Ct++){const Qt=Tt[Ct];Xo(wt,xt,M,Qt)}Bt&&qt.render(M);for(let Ct=0,Zt=Tt.length;Ct<Zt;Ct++){const Qt=Tt[Ct];Wo(b,M,Qt,Qt.viewport)}}else xt.length>0&&Xo(wt,xt,M,U),Bt&&qt.render(M),Wo(b,M,U)}nt!==null&&X===0&&(Z.updateMultisampleRenderTarget(nt),Z.updateRenderTargetMipmap(nt)),H&&T.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),Mt.resetDefaultState(),G=-1,K=null,v.pop(),v.length>0?(y=v[v.length-1],Z.setTextureUnits(y.state.textureUnits),rt===!0&&Dt.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function Cr(M,U,W,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)y.pushLightProbeGrid(M);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(et)){H&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ot);const wt=tt.update(M),xt=M.material;xt.visible&&b.push(M,wt,xt,W,Nt.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(et))){const wt=tt.update(M),xt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Nt.copy(wt.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(ot)),Array.isArray(xt)){const Tt=wt.groups;for(let Ct=0,Zt=Tt.length;Ct<Zt;Ct++){const Qt=Tt[Ct],At=xt[Qt.materialIndex];At&&At.visible&&b.push(M,wt,At,W,Nt.z,Qt,U)}}else xt.visible&&b.push(M,wt,xt,W,Nt.z,null,U)}}const St=M.children;for(let wt=0,xt=St.length;wt<xt;wt++)Cr(St[wt],U,W,H)}function Wo(M,U,W,H){const{opaque:V,transmissive:St,transparent:wt}=M;y.setupLightsView(W),rt===!0&&Dt.setGlobalState(P.clippingPlanes,W),H&&_.viewport(j.copy(H)),V.length>0&&Es(V,U,W),St.length>0&&Es(St,U,W),wt.length>0&&Es(wt,U,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Xo(M,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[H.id]===void 0){const At=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[H.id]=new Qe(1,1,{generateMipmaps:!0,type:At?Sn:Ke,minFilter:ti,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const St=y.state.transmissionRenderTarget[H.id],wt=H.viewport||j;St.setSize(wt.z*P.transmissionResolutionScale,wt.w*P.transmissionResolutionScale);const xt=P.getRenderTarget(),Tt=P.getActiveCubeFace(),Ct=P.getActiveMipmapLevel();P.setRenderTarget(St),P.getClearColor(Ht),Xt=P.getClearAlpha(),Xt<1&&P.setClearColor(16777215,.5),P.clear(),Bt&&qt.render(W);const Zt=P.toneMapping;P.toneMapping=vn;const Qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),y.setupLightsView(H),rt===!0&&Dt.setGlobalState(P.clippingPlanes,H),Es(M,W,H),Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St),$t.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ce=0,Me=U.length;ce<Me;ce++){const _e=U[ce],{object:pe,geometry:Ie,material:bt,group:Ge}=_e;if(bt.side===on&&pe.layers.test(H.layers)){const ie=bt.side;bt.side=Xe,bt.needsUpdate=!0,qo(pe,W,H,Ie,bt,Ge),bt.side=ie,bt.needsUpdate=!0,At=!0}}At===!0&&(Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St))}P.setRenderTarget(xt,Tt,Ct),P.setClearColor(Ht,Xt),Qt!==void 0&&(H.viewport=Qt),P.toneMapping=Zt}function Es(M,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,St=M.length;V<St;V++){const wt=M[V],{object:xt,geometry:Tt,group:Ct}=wt;let Zt=wt.material;Zt.allowOverride===!0&&H!==null&&(Zt=H),xt.layers.test(W.layers)&&qo(xt,U,W,Tt,Zt,Ct)}}function qo(M,U,W,H,V,St){O!==null&&V.isNodeMaterial&&O.setObject(M,V),M.onBeforeRender(P,U,W,H,V,St),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(P,U,W,H,M,St),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=Xe,V.needsUpdate=!0,P.renderBufferDirect(W,U,H,V,M,St),V.side=fi,V.needsUpdate=!0,P.renderBufferDirect(W,U,H,V,M,St),V.side=on):P.renderBufferDirect(W,U,H,V,M,St),M.onAfterRender(P,U,W,H,V,St)}function bs(M,U,W){U.isScene!==!0&&(U=Ut);const H=k.get(M),V=y.state.lights,St=y.state.shadowsArray,wt=V.state.version,xt=dt.getParameters(M,V.state,St,U,W,y.state.lightProbeGridArray),Tt=dt.getProgramCacheKey(xt);let Ct=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const Zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=lt.get(M.envMap||H.environment,Zt),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ct===void 0&&(M.addEventListener("dispose",Mn),Ct=new Map,H.programs=Ct);let Qt=Ct.get(Tt);if(Qt!==void 0){if(H.currentProgram===Qt&&H.lightsStateVersion===wt)return Zo(M,xt),Qt}else xt.uniforms=dt.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,W,xt),M.onBeforeCompile(xt,P),Qt=dt.acquireProgram(xt,Tt),Ct.set(Tt,Qt),H.uniforms=xt.uniforms;const At=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=Dt.uniform),Zo(M,xt),H.needsLights=gh(M),H.lightsStateVersion=wt,H.needsLights&&(At.ambientLightColor.value=V.state.ambient,At.lightProbe.value=V.state.probe,At.sunLights.value=V.state.sun,At.sunLightShadows.value=V.state.sunShadow,At.directionalLights.value=V.state.directional,At.directionalLightShadows.value=V.state.directionalShadow,At.spotLights.value=V.state.spot,At.spotLightShadows.value=V.state.spotShadow,At.rectAreaLights.value=V.state.rectArea,At.ltc_1.value=V.state.rectAreaLTC1,At.ltc_2.value=V.state.rectAreaLTC2,At.pointLights.value=V.state.point,At.pointLightShadows.value=V.state.pointShadow,At.hemisphereLights.value=V.state.hemi,At.sunShadowMatrix.value=V.state.sunShadowMatrix,At.sunShadowCascade.value=V.state.sunShadowCascade,At.directionalShadowMatrix.value=V.state.directionalShadowMatrix,At.spotLightMatrix.value=V.state.spotLightMatrix,At.spotLightMap.value=V.state.spotLightMap,At.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=y.state.lightProbeGridArray.length>0,H.currentProgram=Qt,H.uniformsList=null,Qt}function Yo(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=fr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Zo(M,U){const W=k.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function dh(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let W=0,H=M.length;W<H;W++){const V=M[W];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function ph(M,U,W,H,V){U.isScene!==!0&&(U=Ut),Z.resetTextureUnits();const St=U.fog,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,xt=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ee.workingColorSpace,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ct=lt.get(H.envMap||wt,Tt),Zt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!W.morphAttributes.position,ce=!!W.morphAttributes.normal,Me=!!W.morphAttributes.color;let _e=vn;H.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(_e=P.toneMapping);const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ie=pe!==void 0?pe.length:0,bt=k.get(H),Ge=y.state.lights;if(rt===!0&&(at===!0||M!==K)){const ge=M===K&&H.id===G;Dt.setState(H,M,ge)}let ie=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ge.state.version||bt.outputColorSpace!==xt||V.isBatchedMesh&&bt.batching===!1||!V.isBatchedMesh&&bt.batching===!0||V.isBatchedMesh&&bt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&bt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&bt.instancing===!1||!V.isInstancedMesh&&bt.instancing===!0||V.isSkinnedMesh&&bt.skinning===!1||!V.isSkinnedMesh&&bt.skinning===!0||V.isInstancedMesh&&bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&bt.instancingMorph===!1&&V.morphTexture!==null||bt.envMap!==Ct||H.fog===!0&&bt.fog!==St||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Dt.numPlanes||bt.numIntersection!==Dt.numIntersection)||bt.vertexAlphas!==Zt||bt.vertexTangents!==Qt||bt.morphTargets!==At||bt.morphNormals!==ce||bt.morphColors!==Me||bt.toneMapping!==_e||bt.morphTargetsCount!==Ie||!!bt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,bt.__version=H.version);let nn=bt.currentProgram;ie===!0&&(nn=bs(H,U,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,nn,bt));let yn=!1,Wn=!1,vi=!1;const de=nn.getUniforms(),Se=bt.uniforms;if(_.useProgram(nn.program)&&(yn=!0,Wn=!0,vi=!0),H.id!==G&&(G=H.id,Wn=!0),bt.needsLights){const ge=dh(y.state.lightProbeGridArray,V);bt.lightProbeGrid!==ge&&(bt.lightProbeGrid=ge,Wn=!0)}if(yn||K!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),de.setValue(L,"projectionMatrix",M.projectionMatrix),de.setValue(L,"viewMatrix",M.matrixWorldInverse);const qn=de.map.cameraPosition;qn!==void 0&&qn.setValue(L,ut.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&de.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&de.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,Wn=!0,vi=!0)}if(bt.needsLights&&(Ge.state.sunShadowMap.length>0&&de.setValue(L,"sunShadowMap",Ge.state.sunShadowMap,Z),Ge.state.directionalShadowMap.length>0&&de.setValue(L,"directionalShadowMap",Ge.state.directionalShadowMap,Z),Ge.state.spotShadowMap.length>0&&de.setValue(L,"spotShadowMap",Ge.state.spotShadowMap,Z),Ge.state.pointShadowMap.length>0&&de.setValue(L,"pointShadowMap",Ge.state.pointShadowMap,Z)),V.isSkinnedMesh){de.setOptional(L,V,"bindMatrix"),de.setOptional(L,V,"bindMatrixInverse");const ge=V.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(L,"boneTexture",ge.boneTexture,Z))}V.isBatchedMesh&&(de.setOptional(L,V,"batchingTexture"),de.setValue(L,"batchingTexture",V._matricesTexture,Z),de.setOptional(L,V,"batchingIdTexture"),de.setValue(L,"batchingIdTexture",V._indirectTexture,Z),de.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&de.setValue(L,"batchingColorTexture",V._colorsTexture,Z));const Xn=W.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&N.update(V,W,nn),(Wn||bt.receiveShadow!==V.receiveShadow)&&(bt.receiveShadow=V.receiveShadow,de.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Se.envMapIntensity.value=U.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=kg()),Wn){if(de.setValue(L,"toneMappingExposure",P.toneMappingExposure),bt.needsLights&&mh(Se,vi),St&&H.fog===!0&&Lt.refreshFogUniforms(Se,St),Lt.refreshMaterialUniforms(Se,H,$,Y,y.state.transmissionRenderTarget[M.id]),bt.needsLights&&bt.lightProbeGrid){const ge=bt.lightProbeGrid;Se.probesSH.value=ge.texture,Se.probesMin.value.copy(ge.boundingBox.min),Se.probesMax.value.copy(ge.boundingBox.max),Se.probesResolution.value.copy(ge.resolution)}fr.upload(L,Yo(bt),Se,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fr.upload(L,Yo(bt),Se,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&de.setValue(L,"center",V.center),de.setValue(L,"modelViewMatrix",V.modelViewMatrix),de.setValue(L,"normalMatrix",V.normalMatrix),de.setValue(L,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const ge=H.uniformsGroups;for(let qn=0,xi=ge.length;qn<xi;qn++){const Ko=ge[qn];it.update(Ko,nn),it.bind(Ko,nn)}}return nn}function mh(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function gh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(M,U,W){const H=k.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),k.get(M.texture).__webglTexture=U,k.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const W=k.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,W=0){nt=M,q=U,X=W;let H=null,V=!1,St=!1;if(M){const xt=k.get(M);if(xt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,xt.__webglFramebuffer),j.copy(M.viewport),yt.copy(M.scissor),_t=M.scissorTest,_.viewport(j),_.scissor(yt),_.setScissorTest(_t),G=-1;return}else if(xt.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(xt.__hasExternalTextures)Z.rebindTextures(M,k.get(M.texture).__webglTexture,k.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Zt=M.depthTexture;if(xt.__boundDepthTexture!==Zt){if(Zt!==null&&k.has(Zt)&&(M.width!==Zt.image.width||M.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(St=!0);const Ct=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?H=Ct[U][W]:H=Ct[U],V=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?H=k.get(M).__webglMultisampledFramebuffer:Array.isArray(Ct)?H=Ct[W]:H=Ct,j.copy(M.viewport),yt.copy(M.scissor),_t=M.scissorTest}else j.copy(Et).multiplyScalar($).floor(),yt.copy(Ot).multiplyScalar($).floor(),_t=he;if(W!==0&&(H=F),_.bindFramebuffer(L.FRAMEBUFFER,H)&&_.drawBuffers(M,H),_.viewport(j),_.scissor(yt),_.setScissorTest(_t),V){const xt=k.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,W)}else if(St){const xt=U;for(let Tt=0;Tt<M.textures.length;Tt++){const Ct=k.get(M.textures[Tt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,W,xt)}}else if(M!==null&&W!==0){const xt=k.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,W)}G=-1};function Jo(M){const U=k.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=w.textureFormatReadable(M.format),U.__typeReadable=w.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,W,H,V,St,wt,xt=0){if(!(M&&M.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Tt=Tt[wt]),Tt){_.bindFramebuffer(L.FRAMEBUFFER,Tt);try{const Ct=M.textures[xt],Zt=Ct.format,Qt=Ct.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xt);const At=Jo(Ct);if(At.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&W>=0&&W<=M.height-V&&L.readPixels(U,W,H,V,gt.convert(Zt),gt.convert(Qt),St)}finally{const Ct=nt!==null?k.get(nt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,H,V,St,wt,xt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Tt=Tt[wt]),Tt)if(U>=0&&U<=M.width-H&&W>=0&&W<=M.height-V){_.bindFramebuffer(L.FRAMEBUFFER,Tt);const Ct=M.textures[xt],Zt=Ct.format,Qt=Ct.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xt);const At=Jo(Ct);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ce),L.bufferData(L.PIXEL_PACK_BUFFER,St.byteLength,L.STREAM_READ),L.readPixels(U,W,H,V,gt.convert(Zt),gt.convert(Qt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Me=nt!==null?k.get(nt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Me);const _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jh(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,St),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ce),L.deleteSync(_e),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){const H=Math.pow(2,-W),V=Math.floor(M.image.width*H),St=Math.floor(M.image.height*H),wt=U!==null?U.x:0,xt=U!==null?U.y:0;Z.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,wt,xt,V,St),_.unbindTexture()},this.copyTextureToTexture=function(M,U,W=null,H=null,V=0,St=0){let wt,xt,Tt,Ct,Zt,Qt,At,ce,Me;const _e=M.isCompressedTexture?M.mipmaps[St]:M.image;if(W!==null)wt=W.max.x-W.min.x,xt=W.max.y-W.min.y,Tt=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,Zt=W.min.y,Qt=W.isBox3?W.min.z:0;else{const Se=Math.pow(2,-V);wt=Math.floor(_e.width*Se),xt=Math.floor(_e.height*Se),M.isDataArrayTexture?Tt=_e.depth:M.isData3DTexture?Tt=Math.floor(_e.depth*Se):Tt=1,Ct=0,Zt=0,Qt=0}H!==null?(At=H.x,ce=H.y,Me=H.z):(At=0,ce=0,Me=0);const pe=gt.convert(U.format),Ie=gt.convert(U.type);let bt;U.isData3DTexture?(Z.setTexture3D(U,0),bt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),bt=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),bt=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ge=_.getParameter(L.UNPACK_ROW_LENGTH),ie=_.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=_.getParameter(L.UNPACK_SKIP_PIXELS),yn=_.getParameter(L.UNPACK_SKIP_ROWS),Wn=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),_.pixelStorei(L.UNPACK_SKIP_ROWS,Zt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Qt);const vi=M.isDataArrayTexture||M.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Se=k.get(M),Xn=k.get(U),ge=k.get(Se.__renderTarget),qn=k.get(Xn.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,ge.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let xi=0;xi<Tt;xi++)vi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(M).__webglTexture,V,Qt+xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(U).__webglTexture,St,Me+xi)),L.blitFramebuffer(Ct,Zt,wt,xt,At,ce,wt,xt,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||k.has(M)){const Se=k.get(M),Xn=k.get(U);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let ge=0;ge<Tt;ge++)vi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,V,Qt+ge):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,V),de?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xn.__webglTexture,St,Me+ge):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xn.__webglTexture,St),V!==0?L.blitFramebuffer(Ct,Zt,wt,xt,At,ce,wt,xt,L.COLOR_BUFFER_BIT,L.NEAREST):de?L.copyTexSubImage3D(bt,St,At,ce,Me+ge,Ct,Zt,wt,xt):L.copyTexSubImage2D(bt,St,At,ce,Ct,Zt,wt,xt);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else de?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(bt,St,At,ce,Me,wt,xt,Tt,pe,Ie,_e.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,St,At,ce,Me,wt,xt,Tt,pe,_e.data):L.texSubImage3D(bt,St,At,ce,Me,wt,xt,Tt,pe,Ie,_e):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,St,At,ce,wt,xt,pe,Ie,_e.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,St,At,ce,_e.width,_e.height,pe,_e.data):L.texSubImage2D(L.TEXTURE_2D,St,At,ce,wt,xt,pe,Ie,_e);_.pixelStorei(L.UNPACK_ROW_LENGTH,Ge),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie),_.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),_.pixelStorei(L.UNPACK_SKIP_ROWS,yn),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Wn),St===0&&U.generateMipmaps&&L.generateMipmap(bt),_.unbindTexture()},this.initRenderTarget=function(M){k.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){q=0,X=0,nt=null,_.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const ss=new R;function rn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ss.copy(t),ss[n]=0,ss.normalize();const c=.5*a/(a+o),h=1-ss.angleTo(i)/l;return Math.sign(ss[e])===1?h*c:o/(a+o)+c+c*(1-h)}class zo extends kn{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new R,c=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,S=new R,m=.5/a;for(let p=0,E=0;p<f.length;p+=3,E+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:S.set(1,0,0),d[E+0]=rn(S,c,"z","y",r,n),d[E+1]=1-rn(S,c,"y","z",r,e);break;case 1:S.set(-1,0,0),d[E+0]=1-rn(S,c,"z","y",r,n),d[E+1]=1-rn(S,c,"y","z",r,e);break;case 2:S.set(0,1,0),d[E+0]=1-rn(S,c,"x","z",r,t),d[E+1]=rn(S,c,"z","x",r,n);break;case 3:S.set(0,-1,0),d[E+0]=1-rn(S,c,"x","z",r,t),d[E+1]=1-rn(S,c,"z","x",r,n);break;case 4:S.set(0,0,1),d[E+0]=1-rn(S,c,"x","y",r,t),d[E+1]=1-rn(S,c,"y","x",r,e);break;case 5:S.set(0,0,-1),d[E+0]=rn(S,c,"x","y",r,t),d[E+1]=1-rn(S,c,"y","x",r,e);break}}static fromJSON(t){return new zo(t.width,t.height,t.depth,t.segments,t.radius)}}class Xg extends wr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new kn;t.deleteAttribute("uv");const e=new ro({side:Xe}),n=new ro,s=new Uf(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new se(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new zu(t,n,6),o=new De;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new se(t,Fi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new se(t,Fi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new se(t,Fi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new se(t,Fi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new se(t,Fi(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new se(t,Fi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Fi(i){return new Pf({color:0,emissive:16777215,emissiveIntensity:i})}const qg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Yg=`
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
`;class Zg{mesh;constructor(){const t=new je({vertexShader:qg,fragmentShader:Yg,depthTest:!1,depthWrite:!1,uniforms:{uBase:{value:new R},uHaze:{value:new R},uCenter:{value:new st},uRadius:{value:1},uStrength:{value:0},uVignette:{value:0},uGrain:{value:0},uGrainScale:{value:1},uGrainFrame:{value:0},uDrawing:{value:null},uDrawingAmount:{value:0},uDrawingOffset:{value:new st},uDrawingHalo:{value:0}}});this.mesh=new se(new Zi(2,2),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1}setColours(t,e){ic(this.mesh.material.uniforms.uBase.value,t),ic(this.mesh.material.uniforms.uHaze.value,e)}setHaze(t,e,n,s){const{uniforms:r}=this.mesh.material;r.uCenter.value.set(t,e),r.uRadius.value=n,r.uStrength.value=s}setVignette(t){this.mesh.material.uniforms.uVignette.value=t}setGrain(t,e){this.mesh.material.uniforms.uGrain.value=t,this.mesh.material.uniforms.uGrainScale.value=Math.max(1,Math.round(e))}setGrainFrame(t){this.mesh.material.uniforms.uGrainFrame.value=t%1e3}setDrawing(t,e,n=0,s=0,r=0){const{uniforms:a}=this.mesh.material;a.uDrawing.value=t,a.uDrawingAmount.value=t?e:0,a.uDrawingHalo.value=n,a.uDrawingOffset.value.set(s,r)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const Jg=new Yt;function ic(i,t){const{r:e,g:n,b:s}=Jg.set(t).getRGB({r:0,g:0,b:0},Ye);i.set(e,n,s)}const Kg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,$g=`
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
`;class Qg{horizontal;vertical;material;quad;scene=new wr;camera=new Oo;constructor(t){const n={depthBuffer:!1,type:t.extensions.has("EXT_color_buffer_half_float")||t.extensions.has("EXT_color_buffer_float")?Sn:Ke};this.horizontal=new Qe(1,1,n),this.vertical=new Qe(1,1,n),this.material=new je({vertexShader:Kg,fragmentShader:$g,depthTest:!1,depthWrite:!1,uniforms:{uSource:{value:null},uDepth:{value:null},uStep:{value:new st},uSigma:{value:0},uDepthAmount:{value:0},uCamera:{value:new st},uRange:{value:new st},uMipmaps:{value:0}}}),this.quad=new se(new Zi(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}get texture(){return this.vertical.texture}render(t,e,n){const{width:s,height:r}=e;(this.horizontal.width!==s||this.horizontal.height!==r)&&(this.horizontal.setSize(s,r),this.vertical.setSize(s,r));const{uniforms:a}=this.material;a.uDepth.value=e.depthTexture,a.uSigma.value=n.sigma,a.uDepthAmount.value=n.depth,a.uCamera.value.set(n.near,n.far),a.uRange.value.set(n.rangeNear,n.rangeFar);const o=t.getRenderTarget();this.pass(t,e.texture,this.horizontal,1/s,0,1),this.pass(t,this.horizontal.texture,this.vertical,0,1/r,0),t.setRenderTarget(o)}pass(t,e,n,s,r,a){const{uniforms:o}=this.material;o.uSource.value=e,o.uStep.value.set(s,r),o.uMipmaps.value=a,t.setRenderTarget(n),t.render(this.scene,this.camera)}dispose(){this.horizontal.dispose(),this.vertical.dispose(),this.quad.geometry.dispose(),this.material.dispose()}}ft.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new st},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Je.line={uniforms:No.merge([ft.common,ft.fog,ft.line]),vertexShader:`
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
		`};class oh extends je{constructor(t){super({type:"LineMaterial",uniforms:No.clone(Je.line.uniforms),vertexShader:Je.line.vertexShader,fragmentShader:Je.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const sc=new Ln,tr=new R;class Bi extends Bf{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ve(t,3)),this.setAttribute("uv",new ve(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new ao(e,6,1);return this.setAttribute("instanceStart",new ei(n,3,0)),this.setAttribute("instanceEnd",new ei(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new ao(e,6,1);return this.setAttribute("instanceColorStart",new ei(n,3,0)),this.setAttribute("instanceColorEnd",new ei(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new wf(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),sc.setFromBufferAttribute(e),this.boundingBox.union(sc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)tr.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tr)),tr.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(tr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const fa=new jt,rc=new R,ac=new R,Re=new jt,Ce=new jt,wn=new jt,da=new R,pa=new Gt,Pe=new qf,oc=new R,er=new Ln,nr=new _i,Tn=new jt;let An,ui;function lc(i,t,e){return Tn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Tn.multiplyScalar(1/Tn.w),Tn.x=ui/e.width,Tn.y=ui/e.height,Tn.applyMatrix4(i.projectionMatrixInverse),Tn.multiplyScalar(1/Tn.w),Math.abs(Math.max(Tn.x,Tn.y))}function jg(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Pe.start.fromBufferAttribute(s,o),Pe.end.fromBufferAttribute(r,o),Pe.applyMatrix4(e);const c=new R,h=new R;An.distanceSqToSegment(Pe.start,Pe.end,h,c),h.distanceTo(c)<ui*.5&&t.push({point:h,pointOnLine:c,distance:An.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function t_(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),f=-t.near;An.at(1,wn),wn.w=1,wn.applyMatrix4(t.matrixWorldInverse),wn.applyMatrix4(n),wn.multiplyScalar(1/wn.w),wn.x*=r.x/2,wn.y*=r.y/2,wn.z=0,da.copy(wn),pa.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,d=h;u<d;u++){if(Re.fromBufferAttribute(l,u),Ce.fromBufferAttribute(c,u),Re.w=1,Ce.w=1,Re.applyMatrix4(pa),Ce.applyMatrix4(pa),Re.z>f&&Ce.z>f)continue;if(Re.z>f){const A=Re.z-Ce.z,x=(Re.z-f)/A;Re.lerp(Ce,x)}else if(Ce.z>f){const A=Ce.z-Re.z,x=(Ce.z-f)/A;Ce.lerp(Re,x)}Re.applyMatrix4(n),Ce.applyMatrix4(n),Re.multiplyScalar(1/Re.w),Ce.multiplyScalar(1/Ce.w),Re.x*=r.x/2,Re.y*=r.y/2,Ce.x*=r.x/2,Ce.y*=r.y/2,Pe.start.copy(Re),Pe.start.z=0,Pe.end.copy(Ce),Pe.end.z=0;const S=Pe.closestPointToPointParameter(da,!0);Pe.at(S,oc);const m=qe.lerp(Re.z,Ce.z,S),p=m>=-1&&m<=1,E=da.distanceTo(oc)<ui*.5;if(p&&E){Pe.start.fromBufferAttribute(l,u),Pe.end.fromBufferAttribute(c,u),Pe.start.applyMatrix4(a),Pe.end.applyMatrix4(a);const A=new R,x=new R;An.distanceSqToSegment(Pe.start,Pe.end,x,A),e.push({point:x,pointOnLine:A,distance:An.origin.distanceTo(x),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}class rs extends se{constructor(t=new Bi,e=new oh({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)rc.fromBufferAttribute(e,a),ac.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+rc.distanceTo(ac);const r=new ao(s,2,1);return t.setAttribute("instanceDistanceStart",new ei(r,1,0)),t.setAttribute("instanceDistanceEnd",new ei(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;An=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;ui=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),nr.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=ui*.5;else{const f=Math.max(s.near,nr.distanceToPoint(An.origin));c=lc(s,f,l.resolution)}if(nr.radius+=c,An.intersectsSphere(nr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),er.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=ui*.5;else{const f=Math.max(s.near,er.distanceToPoint(An.origin));h=lc(s,f,l.resolution)}er.expandByScalar(h),An.intersectsBox(er)!==!1&&(n?jg(this,e):t_(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(fa),this.material.uniforms.resolution.value.set(fa.z,fa.w))}}const lh=`
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
    return uWarm * (1.0 - exp(-siteIrradiance(p, n, useNormal))) * uGlow;
  }
`,e_=`
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vDepth;
  void main() {
    vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    // Projected exactly as three.js projects the depth-only occluder this
    // copy lies on; a different order of operations rounds differently and
    // the depth test then fails in flickering stripes.
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`,n_=`
  ${lh}
  uniform float uSurface;
  uniform vec2 uFog;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vDepth;
  void main() {
    vec3 n = normalize(vNormal) * (gl_FrontFacing ? 1.0 : -1.0);
    float fog = 1.0 - smoothstep(uFog.x, uFog.y, vDepth);
    gl_FragColor = vec4(siteLight(vWorld, n, 1.0) * uSurface * fog, 1.0);
  }
`;class i_{constructor(t,e){this.surfaceGain=e,this.uniforms.uWarm.value.copy(t),this.surface=this.surfaceMaterial()}lamps=[];apertures=[];surface;uniforms={uLampA:{value:[]},uLampB:{value:[]},uLampC:{value:[]},uWinA:{value:[]},uWinB:{value:[]},uWinC:{value:[]},uWinD:{value:[]},uWarm:{value:new Yt},uGlow:{value:0}};lit=[];surfaces=[];fog={value:new st(10,60)};surfaceMaterial(){const t=new je({vertexShader:e_,fragmentShader:n_,uniforms:{...this.uniforms,uSurface:{value:this.surfaceGain},uFog:this.fog},transparent:!0,blending:dr,depthWrite:!1,side:on,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:-2});return this.lit.push(t),this.surfaces.push(t),t}lightLines(t,e){t.onBeforeCompile=n=>{Object.assign(n.uniforms,this.uniforms,{uLineLight:{value:e}}),n.vertexShader=n.vertexShader.replace("void main() {",`varying vec3 vLitWorld;
void main() {`).replace("#include <fog_vertex>",`#include <fog_vertex>
vLitWorld = (modelMatrix * vec4(position.y < 0.5 ? instanceStart : instanceEnd, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("void main() {",`${lh}
uniform float uLineLight;
varying vec3 vLitWorld;
void main() {`).replace("gl_FragColor = vec4( diffuseColor.rgb, alpha );",`diffuseColor.rgb += siteLight(vLitWorld, vec3(0.0, 1.0, 0.0), 0.5) * uLineLight;
gl_FragColor = vec4( diffuseColor.rgb, alpha );`)},this.lit.push(t)}finish(){const{uniforms:t}=this,e=this.lamps.length?this.lamps:[s_],n=this.apertures.length?this.apertures:[r_];t.uLampA.value=e.map(s=>new jt(...s.position.toArray(),s.intensity)),t.uLampB.value=e.map(s=>new jt(...s.direction.toArray(),s.cosOuter)),t.uLampC.value=e.map(s=>s.clip.clone()),t.uWinA.value=n.map(s=>new jt(...s.centre.toArray(),s.intensity)),t.uWinB.value=n.map(s=>new jt(...s.u.toArray(),s.halfWidth)),t.uWinC.value=n.map(s=>new jt(...s.v.toArray(),s.halfHeight)),t.uWinD.value=n.map(s=>new jt(...s.source.toArray(),s.panes));for(const s of this.lit)s.defines={...s.defines,SITE_LAMPS:e.length,SITE_WINDOWS:n.length},s.needsUpdate=!0}dim(t,e){this.lamps.forEach((n,s)=>{n.group===t&&(this.uniforms.uLampA.value[s].w=n.intensity*e)}),this.apertures.forEach((n,s)=>{n.group===t&&(this.uniforms.uWinA.value[s].w=n.intensity*e)})}update(t,e,n){this.uniforms.uGlow.value=t,this.fog.value.set(e,n)}dispose(){this.surfaces.forEach(t=>t.dispose())}}const s_={position:new R,intensity:0,direction:new R(0,-1,0),cosOuter:-1,clip:new jt(0,0,0,1)},r_={centre:new R,u:new R(1,0,0),v:new R(0,1,0),halfWidth:0,halfHeight:0,source:new R(0,0,-1),intensity:0,panes:1},uo={azimuth:-30,elevation:27,fov:30,x:0,y:0,z:2,radius:16,explode:0,explodeSite:0,plan:0,sway:1,xraySauna:0,xrayKitchen:0},a_={front:uo,left:{azimuth:-90,elevation:3,fov:12,x:0,y:2.8,z:0,radius:16,explode:0,explodeSite:0,plan:0,sway:.25,xraySauna:0,xrayKitchen:1},right:{azimuth:55,elevation:22,fov:26,x:1,y:.5,z:0,radius:16,explode:0,explodeSite:0,plan:0,sway:1,xraySauna:1,xrayKitchen:0},bottom:{azimuth:-14,elevation:33,fov:30,x:-.5,y:2.6,z:-2,radius:15.5,explode:1,explodeSite:0,plan:0,sway:1,xraySauna:0,xrayKitchen:0},top:{azimuth:0,elevation:89,fov:12,x:0,y:0,z:1,radius:21,explode:0,explodeSite:0,plan:1,sway:.25,xraySauna:0,xrayKitchen:0}},re=.22,ch=3,o_=.5,Ee={house:ch-o_,outbuilding:2.2,sauna:2.4,interior:2.4},be={floor:.05,desk:.9,counter:1.1,high:1.8},cc=.06,ir=.26,l_=8,as=Math.tan(qe.degToRad(l_)),an=.25,c_=.05,hc=.07,Fe=-18,sr=20,uc=[3.8,5.5,7.3,13.5],ma=new Yt(1,.56,.22),h_=.3,u_=0,f_=1/3,d_={roof:0,other:.15,wall:.3},p_={edge:[.22,1.5],detail:[.095,1],faint:[.045,.9]},dn={surface:.42,lines:.4,window:20,bollard:1.4,porch:4,soffit:4.5,pendant:2.5,tub:1.2};function ae(i,t=[]){const e=new Io(i.map(([n,s])=>new st(n,s)));for(const n of t)e.holes.push(new no(n.map(([s,r])=>new st(s,r))));return e}function Jt(i,t,e,n){return[[i,t],[e,t],[e,n],[i,n]]}function Er(i){const t=i.map(([n])=>n),e=i.map(([,n])=>n);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function m_(i){const[t,e,n,s]=Er(i);return[(t+n)/2,(e+s)/2]}function g_(i,t,e){const[n,s,r,a]=Er(i);return t>=n&&t<=r&&e>=s&&e<=a}function __(i,t,e,n,s){const r=[o=>o[0]-t,o=>n-o[0],o=>o[1]-e,o=>s-o[1]];let a=i;for(const o of r){const l=a;a=[];for(let c=0;c<l.length;c++){const h=l[c],f=l[(c+1)%l.length],[u,d]=[o(h),o(f)];if(u>=0&&a.push(h),u>=0!=d>=0){const g=u/(u-d);a.push([h[0]+(f[0]-h[0])*g,h[1]+(f[1]-h[1])*g])}}}return a}function v_(i,t){const e=i.filter((a,o)=>{const l=i[(o+1)%i.length];return Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),n=e.filter((a,o)=>{const l=e[(o+e.length-1)%e.length],c=e[(o+1)%e.length];return Math.abs((a[0]-l[0])*(c[1]-a[1])-(a[1]-l[1])*(c[0]-a[0]))>1e-6}),s=n.length,r=n.map((a,o)=>{const l=n[(o+1)%s],[c,h]=[l[0]-a[0],l[1]-a[1]],f=Math.hypot(c,h);return{x:a[0]-h/f*t,y:a[1]+c/f*t,dx:c,dy:h}});return r.map((a,o)=>{const l=r[(o+s-1)%s],c=((a.x-l.x)*a.dy-(a.y-l.y)*a.dx)/(l.dx*a.dy-l.dy*a.dx);return[l.x+l.dx*c,l.y+l.dy*c]})}function fc(i,t,e){for(const n of i)for(let s=0;s<n.length;s++){const[r,a]=n[s],[o,l]=n[(s+1)%n.length];e.push(r,a,t,o,l,t)}}function li(i,t,e,n,s,r){r.push(i,s,t,e,s,t,e,s,t,e,s,n,e,s,n,i,s,n,i,s,n,i,s,t)}function rr(i,t,e,n,s,r=40){for(let a=0;a<r;a++){const o=a/r*Math.PI*2,l=(a+1)/r*Math.PI*2;s.push(i+Math.cos(o)*e,n,t+Math.sin(o)*e,i+Math.cos(l)*e,n,t+Math.sin(l)*e)}}function x_(i,t){const e=[],n=Math.cos(qe.degToRad(15));for(const s of[i.getPoints(),...i.holes.map(r=>r.getPoints())]){const r=s.filter((a,o)=>!a.equals(s[(o+1)%s.length]));r.forEach((a,o)=>{const l=r[(o+1)%r.length],c=r[(o+r.length-1)%r.length];for(const u of[0,t])e.push(a.x,a.y,u,l.x,l.y,u);const h=new st().subVectors(a,c).normalize(),f=new st().subVectors(l,a).normalize();h.dot(f)<n&&e.push(a.x,a.y,0,a.x,a.y,t)})}return e}const pn=()=>new Gt().makeRotationX(Math.PI/2),dc=i=>new Gt().makeRotationY(Math.PI/2).setPosition(i,0,0);class S_{constructor(t){this.reducedMotion=t,this.target=new Qe(1,1,{samples:4,depthTexture:new Wi(1,1),generateMipmaps:!0,minFilter:ti}),this.scene.fog=new Ao(0,10,60),this.place(0,-8,"house",()=>this.house(),-90,an),this.place(0,0,"house",()=>this.houseInterior(),0,an),this.place(14.95,8,"site",()=>this.sauna(),-90,an,"sauna"),this.place(-12.8,4.1,"site",()=>this.outdoorKitchen(),90,an,"kitchen"),this.place(0,0,"site",()=>{this.carport(),this.pool(),this.access(),this.paths(),this.landscape(),this.fence(),this.road(),this.contours(),this.ground()});for(const e of this.allLines)this.light.lightLines(e,dn.lines);this.light.finish(),t?this.glow=1:Object.assign(this.view,{explode:1.3,explodeSite:1.3,elevation:40,azimuth:14})}target;scene=new wr;camera=new Ze(30,1,.5,400);parts=[];occluder=new Mr({colorWrite:!1,side:on,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});light=new i_(ma,dn.surface);materials=this.lineSet();poche=this.fill(new Yt().setScalar(.11));glass=this.fill(ma.clone().multiplyScalar(.42));pane=this.fill(ma.clone().multiplyScalar(.42),!0);xray={sauna:this.xrayMaterials(),kitchen:this.xrayMaterials()};allLines=[this.materials,this.xray.sauna.lines,this.xray.kitchen.lines].flatMap(t=>Object.values(t));billboards=[];disposables=[this.light];view={...uo};goal=uo;glow=0;lightLevel=1;origin=new R;turn=new $e;building="site";see;clearColour=new Yt;lookAt=new R;drawnViewProjection=new Gt;viewProjection=new Gt;drawnLightLevel=NaN;stale=!0;probe=new R;drawnProbe=new R;setSide(t){this.goal=a_[t]}invalidate(){this.stale=!0}resize(t,e,n,s=1){if(!(t===this.target.width&&e===this.target.height)){this.target.setSize(t,e),this.stale=!0,this.camera.aspect=t/e;for(const r of this.allLines)r.resolution.set(t,e),r.linewidth=r.userData.width*n,r.color.setScalar(r.userData.intensity*s)}}depthRange=[0,1];render(t,e,n,s){const r=this.reducedMotion?0:1,a=1-Math.exp(-e*(this.reducedMotion?20:1.5));for(const x of Object.keys(this.view))this.view[x]+=(this.goal[x]-this.view[x])*a;const o=this.view;for(const x of this.parts){const b=x.house?o.explode:o.explodeSite,y=d_[x.kind],C=Math.max(0,(b-y)/(1-y))+(x.kind==="roof"?o.plan*3:0);x.object.position.copy(x.base).addScaledVector(x.explode,C)}const l=1-qe.smoothstep(o.plan,.1,.7);this.materials.roofEdge.opacity=this.materials.roofDetail.opacity=l;for(const[x,b]of[["sauna",o.xraySauna],["kitchen",o.xrayKitchen]]){const{lines:y,solids:C,occluder:v,surface:T}=this.xray[x],P=1-(1-h_)*b;y.edge.opacity=y.detail.opacity=y.faint.opacity=P,y.roofEdge.opacity=y.roofDetail.opacity=P*l,v.opacity=1-b,T.uniforms.uSurface.value=dn.surface*(1-b);for(const I of C)I.visible=b<.999}for(const x of this.parts)x.kind==="roof"&&(x.object.visible=l>.01);this.poche.opacity=qe.smoothstep(o.plan,.4,1);const c=1-Math.min(1,o.explodeSite*2.5);this.glow+=(c-this.glow)*(1-Math.exp(-e*(this.reducedMotion?20:.9)));const h=this.glow*(1-qe.smoothstep(o.explode,.05,.5));this.glass.opacity=this.pane.opacity=h*Math.min(1,this.lightLevel);for(const[x,b]of[["sauna",o.xraySauna],["kitchen",o.xrayKitchen]]){const y=1-(1-u_)*b,{glass:C,pane:v}=this.xray[x];C.opacity=v.opacity=this.glass.opacity*y,this.light.dim(x,y)}const f=r*o.sway,u=qe.degToRad(o.azimuth+f*(Math.sin(n*.06)*5-s.x*4)),d=qe.degToRad(Math.min(89.8,o.elevation+f*(Math.sin(n*.045+1)*2-s.y*3)));this.camera.fov=o.fov;const g=Math.min(1,this.camera.aspect/.85),S=o.radius/(Math.tan(qe.degToRad(o.fov/2))*g);this.lookAt.set(o.x,o.y,o.z),this.camera.position.set(o.x+S*Math.sin(u)*Math.cos(d),o.y+S*Math.sin(d),o.z+S*Math.cos(u)*Math.cos(d)),this.camera.lookAt(this.lookAt),this.camera.updateProjectionMatrix();for(const x of this.billboards)x.quaternion.copy(this.camera.quaternion);const m=this.scene.fog;if(m.near=S-o.radius*.4,m.far=S+o.radius*2.4,this.depthRange[0]=S-o.radius,this.depthRange[1]=S+o.radius,this.light.update(h*this.lightLevel,m.near,m.far),this.camera.updateMatrixWorld(),this.viewProjection.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),Object.keys(o).every(x=>Math.abs(this.goal[x]-o[x])<.001)&&Math.abs(c-this.glow)<.001&&!this.stale&&this.lightLevel===this.drawnLightLevel&&this.drift(o.radius)<f_)return!1;this.drawnViewProjection.copy(this.viewProjection),this.drawnLightLevel=this.lightLevel,this.stale=!1;const E=t.getRenderTarget();t.getClearColor(this.clearColour);const A=t.getClearAlpha();return t.setRenderTarget(this.target),t.setClearColor(0,1),t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(E),t.setClearColor(this.clearColour,A),!0}drift(t){let e=0;for(const[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){this.probe.set(this.lookAt.x+n*t,this.lookAt.y,this.lookAt.z+s*t),this.drawnProbe.copy(this.probe).applyMatrix4(this.drawnViewProjection),this.probe.applyMatrix4(this.viewProjection);const r=(this.probe.x-this.drawnProbe.x)*this.target.width/2,a=(this.probe.y-this.drawnProbe.y)*this.target.height/2;e=Math.max(e,Math.hypot(r,a))}return e}dispose(){this.target.dispose(),this.disposables.forEach(e=>e.dispose());const t=Object.values(this.xray).flatMap(e=>[e.glass,e.pane,e.occluder]);for(const e of[this.occluder,this.poche,this.glass,this.pane,...t,...this.allLines])e.dispose()}house(){const n=ch,s=n+4*Math.tan(qe.degToRad(38)),r=[[-4,0],[4,0],[4,n],[0,s],[-4,n]],o=4-.95,l=(s-n)/4,c=Jt(-3.05,be.floor,o,Ee.house),h=[[-3.05,n],[o,n],[0,n+o*l]],f=[-3.05/2,0,o/2];this.prism({shape:ae(r,[c,h]),depth:re,matrix:new Gt().makeTranslation(0,0,9-re),explode:[0,.3,2.2],kind:"wall",glass:[c,h],light:[{outline:c,level:1,columns:f},{outline:h,level:1,columns:f}]});const u=Jt(-.6,4.1,.6,5.1),d=Jt(-1.75,be.floor,-.85,Ee.house);this.prism({shape:ae(r,[u,d]),depth:re,matrix:new Gt().makeTranslation(0,0,-9),explode:[0,.3,-1.4],kind:"wall",glass:[u],light:[{outline:u,level:.5}],leaves:[d]}),this.prism({shape:ae(Jt(-2.2,-9-1.2,-.4,-9)),depth:an/2,matrix:pn().setPosition(0,-.25/2,0),explode:[0,0,-1],layers:!1}),this.fitting([-1.42,2.72,-9-.12],[-1.18,2.78,-9]),this.lamp(-1.3,2.7,-9-.07,dn.porch,[0,-1,0],.2,[0,0,-1,.05-9]);const g=9-re,S=[{outline:Jt(-8,be.floor,-5,Ee.house),level:1,columns:[-6.5]},{outline:Jt(-4.4,be.floor,.1,Ee.house),level:1,columns:[-2.9,-1.4]},{outline:Jt(1.2,be.desk,3,Ee.house),level:.55},{outline:Jt(4.2,be.floor,5.6,Ee.house),level:.65},{outline:Jt(7.4,be.high,8.4,Ee.house),level:.4}],m=S.map(F=>F.outline);this.prism({shape:ae(Jt(-8.78,0,g,n),m),depth:re,matrix:dc(4-re),explode:[2.2,.3,0],kind:"wall",glass:m,light:S});const p=[Jt(-6.5,be.counter,-3.5,Ee.house),Jt(2.7,be.floor,3.1,Ee.house),Jt(4,be.high,4.6,Ee.house),Jt(6.5,be.high,7.5,Ee.house)],E=Jt(1.5,be.floor,2.5,Ee.house),A=[.9,.8,.35,.45].map((F,D)=>({outline:p[D],level:F}));this.prism({shape:ae(Jt(-8.78,0,g,n),[...p,E]),depth:re,matrix:dc(-4),explode:[-2.2,.3,0],kind:"wall",glass:p,light:A,leaves:[E]});const x=.5,b=Math.atan2(s-n,4),y=Math.hypot(4,s-n)+x,C=2*(9+x);for(const F of[1,-1]){const D=new st(F*Math.cos(b),-Math.sin(b)),z=new st(F*Math.sin(b),Math.cos(b)),q=new st(0,s),X=new st(0,s+ir/Math.cos(b)),nt=q.clone().addScaledVector(D,y),G=nt.clone().addScaledVector(z,ir),K=(yt,_t,Ht)=>yt.clone().lerp(_t,Ht),j=[];for(const yt of[1/3,2/3]){const _t=K(q,X,yt),Ht=K(nt,G,yt);for(const Xt of[0,C])j.push(_t.x,_t.y,Xt,Ht.x,Ht.y,Xt);j.push(Ht.x,Ht.y,0,Ht.x,Ht.y,C)}if(F===1){const yt=_t=>q.clone().addScaledVector(z,ir+.04).addScaledVector(D,_t);for(let _t=0;_t<2;_t++)for(let Ht=0;Ht<10;Ht++){const[Xt,te]=[.8+_t*1.15,1.85+_t*1.15],[Y,$]=[9+x-6.5+Ht*1.3,9+x-5.3+Ht*1.3],ct=yt(Xt),Pt=yt(te);j.push(ct.x,ct.y,Y,Pt.x,Pt.y,Y,Pt.x,Pt.y,Y,Pt.x,Pt.y,$),j.push(Pt.x,Pt.y,$,ct.x,ct.y,$,ct.x,ct.y,$,ct.x,ct.y,Y)}}this.prism({shape:ae([q,nt,G,X].map(yt=>[yt.x,yt.y])),depth:C,matrix:new Gt().makeTranslation(0,0,-9-x),explode:[z.x*1.4,z.y*1.4+2.6,0],kind:"roof",layers:!1,extra:j})}this.prism({shape:ae(Jt(-4,-9,4,9)),depth:an+.05,matrix:pn(),explode:[0,0,0],layers:!1});const[v,T]=[3.6,1.8],P=[];for(let F=-9+.3;F<9;F+=.3)P.push(4,F,-.003,4+v,F,-.003);this.prism({shape:ae(Jt(4,-9,4+v,9)),depth:an,matrix:pn(),explode:[1.6,0,0],extra:P,weight:"detail"});const I=[];for(let F=-4+.3;F<4+v;F+=.3)I.push(F,9,-.003,F,9+T,-.003);this.prism({shape:ae(Jt(-4,9,4+v,9+T)),depth:an,matrix:pn(),explode:[0,0,1.6],extra:I,weight:"detail"}),this.prism({shape:ae(Jt(-4-1.6,-2.9,-4,-1.1)),depth:an/2,matrix:pn().setPosition(0,-.25/2,0),explode:[-1,0,0],layers:!1});const O=F=>n-F*l;this.fitting([-4-.45,O(.45)-.04,-2.15],[-4-.15,O(.45),-1.85]),this.lamp(-4-.3,O(.45)-.05,-2,dn.porch,[0,-1,0],.2,[-1,0,0,.05-4])}houseInterior(){const[t,e,n]=[-11.78,-4.22,8.78];this.partition(.6,-8.6,3.6,-8.6,[[2.5,3.4]]),this.partition(.6,-8.6,.6,e),this.partition(3.6,t,3.6,-10),this.partition(3.6,-8.6,3.6,e),this.partition(3.6,-10,n,-10,[[3.9,4.6],[6,6.9]]),this.partition(5,t,5,-10),this.partition(3.6,-8.6,n,-8.6,[[5.8,6.7],[7.7,8.6]]),this.partition(6.8,-8.6,6.8,e,[[-6.2,-5.4]]);const{box:s,circle:r,swing:a,done:o}=this.planKit(),l=Math.PI/2;a(2.5,t,1,Math.PI,l),a(3.4,-8.6,.9,Math.PI,l),a(3.9,-10,.7,0,-l),a(6.9,-10,.9,Math.PI,Math.PI+l),a(5.8,-8.6,.9,0,l),a(8.6,-8.6,.9,Math.PI,l),a(6.8,-5.4,.8,l,0),s(-7.6,t,-2.6,t+.6),s(-2.6,t,-1.4,t+.6),s(-6.2,-9.9,-3.4,-8.9),s(-7.9,-8.2,-6.9,-5.8);for(const c of[-7.8,-7,-6.2])s(-8.35,c-.2,-8,c+.2),s(-6.8,c-.2,-6.45,c+.2);s(-3.4,-8.4,-.6,-7.6),s(-2.6,-7,-1.4,-6.2),r(.15,-6.2,.3),s(2.9,-11.6,3.48,-10.15),s(4.05,t+.06,4.45,t+.26),r(4.25,-11.3,.2),s(4.6,-10.9,4.92,-10.4),s(5.2,t+.06,5.8,t+.66),s(7,t+.06,7.6,t+.66),s(7.7,t+.06,8.3,t+.66),s(6.86,-7.6,7.36,-6.4),r(7.11,-7.3,.15),r(7.11,-6.7,.15),s(8.52,-7.4,8.72,-7),r(8.27,-7.2,.2),s(7.2,-5.4,n-.06,e-.06),s(4,-8.48,5.6,-6.4),s(3.68,-8.48,3.98,-8.1),s(5.62,-8.48,5.92,-8.1),s(.75,-8.48,2.15,-6.48),s(1.3,e-.54,2.9,e-.04),o()}planKit(){const t=[],e=[];return{box:(s,r,a,o)=>li(s,r,a,o,.02,t),circle:(s,r,a)=>rr(s,r,a,.02,t,20),swing:(s,r,a,o,l)=>{for(let c=0;c<8;c++){const h=o+(l-o)*c/8,f=o+(l-o)*(c+1)/8;e.push(s+Math.cos(h)*a,.02,r+Math.sin(h)*a,s+Math.cos(f)*a,.02,r+Math.sin(f)*a)}e.push(s,.02,r,s+Math.cos(l)*a,.02,r+Math.sin(l)*a)},done:()=>{this.lines(t,"faint"),this.lines(e,"detail")}}}partition(t,e,n,s,r=[],a=2.9,o=Ee.interior){const l=e===s,c=[l?t:e,...r.flat(),l?n:s],h=.06,f=(d,g)=>l?Jt(d,-(e+h),g,-(e-h)):Jt(t-h,-g,t+h,-d),u=(d,g,S,m)=>this.prism({shape:ae(f(d,g)),depth:m,matrix:new Gt().makeRotationX(-Math.PI/2).setPosition(0,S,0),explode:[0,1.1,0],kind:"wall",layers:!1});for(let d=0;d<c.length;d+=2)c[d+1]-c[d]>=.05&&u(c[d],c[d+1],0,a);for(const[d,g]of r)u(d,g,o,a-o)}sauna(){const[t,e,n,s]=[-3.5,3.5,-3.75,3.75],r=2.6,a=r+(s-n)*as,o=G=>r+(G-n)*as,l=Ee.sauna,c=.45,h=[{outline:Jt(-3.1,be.floor,-.1,a-c),level:.85,columns:[-1.6],rows:[l]},{outline:Jt(.8,be.floor,3,l),level:.6}],f=h.map(G=>G.outline);this.prism({shape:ae(Jt(t,0,e,a),f),depth:re,matrix:new Gt().makeTranslation(0,0,s-re),explode:[0,.2,1.3],kind:"wall",glass:f,light:h}),this.prism({shape:ae(Jt(t,0,e,r)),depth:re,matrix:new Gt().makeTranslation(0,0,n),explode:[0,.2,-1.3],kind:"wall"});const[u,d]=[n+re,s-re],g=[[-d,0],[-u,0],[-u,o(u)],[-d,o(d)]],S=G=>new Gt().makeRotationY(Math.PI/2).setPosition(G,0,0),p=[{outline:((G,K)=>[[G,be.floor],[K,be.floor],[K,o(-.1)-c],[G,o(3.2)-c]])(-3.2,.1),level:.85,columns:[-1.55],rows:[l]},{outline:Jt(1.4,be.high,2.4,l),level:.35}],E=p.map(G=>G.outline);this.prism({shape:ae(g,E),depth:re,matrix:S(t),explode:[-1.3,.2,0],kind:"wall",glass:E,light:p});const A=Jt(.75,be.floor,1.6,l);this.prism({shape:ae(g,[A]),depth:re,matrix:S(e-re),explode:[1.3,.2,0],kind:"wall",leaves:[A]}),this.prism({shape:ae(Jt(t,n,e,s)),depth:an,matrix:pn(),explode:[0,0,0]}),this.shedRoof({x0:t,x1:e,z0:n,z1:s,low:r,high:a,overhang:[.35,.35,1.2],explode:1.3});const[x,b]=[n+re,s-re],[y,C]=[t+re,e-re],v=-.45;this.partition(y,v,C,v,[[-1.15,-.35],[.45,1.15]],2.5,Ee.outbuilding),this.partition(.3,v+.06,.3,b,[],2.5,Ee.outbuilding),this.partition(.3,x,.3,v-.06,[[-2.45,-1.65]],2.5,Ee.outbuilding),this.partition(-1.7,x,-1.7,v-.06,[[-2.9,-2.2]],2.5,Ee.outbuilding),this.box([1.25,0,v+.08],[C-.04,.95,.3],[0,.6,0],"detail"),this.box([1.25,0,.3],[C-.04,.45,.8],[0,.6,0],"detail"),this.box([.45,0,1.6],[.95,.8,2.1],[0,.6,0],"detail"),this.box([.61,.8,1.76],[.79,4.4,1.94],[0,2.1,0],"detail"),this.box([-3,0,v+.08],[-1.35,.42,.45],[0,.4,0],"detail"),this.box([-3,.42,v+.08],[-1.35,.75,-.17],[0,.4,0],"detail"),this.box([-2.6,0,1],[-1.6,.38,1.6],[0,.4,0],"detail");const{box:T,circle:P,swing:I,done:O}=this.planKit();P(.7,1.85,.16);for(const[G,K]of[[.6,1.6],[1.9,2.9]])T(G,x+.08,K,x+.98),P((G+K)/2,x+.53,.06);T(1.45,v-.38,2.15,v-.08),T(-2.75,x+.06,-2.35,x+.26),P(-2.55,x+.5,.2),T(-3.22,-1.4,-2.9,-.9),T(-1.6,x+.08,.2,x+.48);const F=Math.PI/2;I(-1.15,v,.8,0,-F),I(1.15,v,.7,Math.PI,Math.PI+F),I(.3,-1.65,.8,-F,0),I(-1.7,-2.2,.7,-F,0),I(C,-.75,.85,-F,-Math.PI),O();const[D,z]=[6.5,s+3.5],q=[[t,s],[t,z],[D,z],[D,n],[e,n],[e,s]],X=[];for(let G=t+.3;G<D;G+=.3)X.push(G,G<e?s:n,-.003,G,z,-.003);this.prism({shape:ae(q),depth:an,matrix:pn(),explode:[0,0,1],extra:X,weight:"detail"});const nt=[5.1,.75];this.cylinder(nt[0],nt[1],1.15,0,.9,[0,.8,1]),this.box([-3.2,0,s+3.1],[-3.1,2.3,s+3.2],[0,.4,1],"detail"),this.box([-3.2,2.2,s+2.65],[-3.1,2.3,s+3.2],[0,.4,1],"detail");for(const G of[-2,1.9]){const K=o(s+.6);this.fitting([G-.12,K-.04,s+.48],[G+.12,K,s+.72]),this.lamp(G,K-.05,s+.6,dn.soffit,[0,-1,0],.35,[0,0,1,.05-s])}this.lamp(nt[0],.68,nt[1],dn.tub,[0,1,0],0)}carport(){const[t,e,n,s]=[11.2,-12,18.7,-6.4],r=16.7,a=l=>2.6+(l-e)*as;for(const[l,c]of[[t,e],[t,s],[r,e],[r,s]])this.box([l-.07,0,c-.07],[l+.07,a(c),c+.07],[0,.4,0]);const o=Jt(r+.5,be.floor,r+1.5,Ee.outbuilding);this.origin.y=.1,this.monoPitch({x0:r,x1:n,z0:e,z1:s,low:a(e)-.1,high:a(s)-.1,frontOverhang:0,explode:.8,front:[o],frontGlass:[],side:[],roof:!1,doors:[o]}),this.origin.y=0,this.shedRoof({x0:t,x1:n,z0:e,z1:s,low:a(e),high:a(s),overhang:[.4,.4,.4],explode:1}),this.box([19.3,0,-6.6],[21.3,1.6,-5.9],[0,0,0],"detail")}outdoorKitchen(){const[t,e,n,s]=[-2.7,2.7,-2,2],r=2.6,a=r+(s-n)*as,o=g=>r+(g-n)*as,l=n+re;this.prism({shape:ae(Jt(t,0,e,r)),depth:re,matrix:new Gt().makeTranslation(0,0,n),explode:[0,.2,-1.3],kind:"wall"});const c=[[-s,0],[-l,0],[-l,o(l)],[-s,o(s)]];this.prism({shape:ae(c),depth:re,matrix:new Gt().makeRotationY(Math.PI/2).setPosition(t,0,0),explode:[-1.3,.2,0],kind:"wall"}),this.box([e-.15,0,s-.15],[e,o(s),s],[0,.6,1.3]),this.prism({shape:ae(Jt(t,n,e,s)),depth:an,matrix:pn(),explode:[0,0,0]}),this.shedRoof({x0:t,x1:e,z0:n,z1:s,low:r,high:a,overhang:[.35,.35,.6],explode:1.3});const h=t+re+.02;this.box([h,0,l+.02],[h+1.1,1.7,l+.9],[0,.6,0],"detail"),this.box([h+.4,1.7,l+.25],[h+.7,3.7,l+.55],[0,2.1,0],"detail");const f=[h+1.12,l+.02,e-.3,l+.67];this.box([f[0],0,f[1]],[f[2],.9,f[3]],[0,.6,0],"detail");const u=[],d=l+.903;u.push(h+.3,.9,d,h+.8,.9,d,h+.8,.9,d,h+.8,1.25,d),u.push(h+.8,1.25,d,h+.3,1.25,d,h+.3,1.25,d,h+.3,.9,d),li(-.6,l+.12,.2,l+.55,.903,u),li(.8,l+.1,1.9,l+.57,.903,u),this.lines(u,"faint"),this.box([-.6,0,.45],[1.8,.75,1.35],[0,.5,.8],"detail");for(const[g,S]of[[0,.35],[1.45,1.8]])this.box([-.6,0,g],[1.8,.45,S],[0,.4,.8],"detail");for(const g of[-.4,1.4]){const S=o(l+.45);this.fitting([g-.12,S-.04,l+.33],[g+.12,S,l+.57]),this.lamp(g,S-.05,l+.45,dn.soffit,[0,-1,0],.35,[0,0,1,.05-l])}this.fitting([-.2,1.86,.86],[1.4,1.9,.94]),this.lines([-.1,1.9,.9,-.1,o(.9),.9,1.3,1.9,.9,1.3,o(.9),.9],"faint"),this.lamp(.6,1.84,.9,dn.pendant,[0,-1,0],-.2)}pool(){const[t,e,n,s]=uc,r=.35;this.prism({shape:ae(Jt(t-r,e-r,n+r,s+r),[Jt(t,e,n,s)]),depth:.08,matrix:pn().setPosition(0,.08,0),explode:[0,.5,0],layers:!1});const a=[],o=-1.4;li(t,e,n,s,o,a);for(const[d,g]of[[t,e],[n,e],[n,s],[t,s]])a.push(d,0,g,d,o,g);for(let d=1;d<=3;d++)a.push(t,-.3*d,e+.4*d,n,-.3*d,e+.4*d);this.lines(a,"detail");const l=[];li(t+.05,e+.05,n-.05,s-.05,-.15,l);const[c,h,f,u]=[t-r-.65,4.5,7.7,14.5];l.push(f,.002,h,c,.002,h,c,.002,h,c,.002,u,c,.002,u,f,.002,u);for(let d=h+1;d<u;d+=1)d>e-r&&d<s+r?l.push(c,.002,d,t-r,.002,d):l.push(c,.002,d,f,.002,d);this.lines(l,"faint")}access(){const e=[],n=[[12.2,Fe],[12.2,-13.4],[11.2,-13.4],[11.2,-6.6],[16.7,-6.6],[16.7,-13.4],[15.6,-13.4],[15.6,Fe]];for(let r=0;r<n.length-1;r++)e.push(n[r][0],.002,n[r][1],n[r+1][0],.002,n[r+1][1]);this.lines(e,"detail");const s=[];for(let r=Fe+1.2;r<-13.4;r+=1.2)s.push(12.2,.002,r,15.6,.002,r);for(let r=-12.2;r<-6.6;r+=1.2)s.push(11.2,.002,r,16.7,.002,r);li(1,-14.2,11.2,-12.2,.002,s);for(let r=2;r<11.2;r+=1)s.push(r,.002,-14.2,r,.002,-12.2);li(1.2,Fe,2.8,-14.2,.002,s);for(let r=Fe+1;r<-14.2;r+=1)s.push(1.2,.002,r,2.8,.002,r);s.push(11.2,.002,-6.6,11.2,.002,-.4,11.2,.002,-.4,9,.002,-.4);for(let r=-11.2;r<-.4;r+=1)s.push(9,.002,r,11.2,.002,r);this.lines(s,"faint");for(const[r,a]of[[11.7,-16.6],[16.1,-15],[3.2,-16],[11.45,-2.6]])this.bollard(r,a,.7)}paths(){const t=[],e=(l,c,h)=>{const f=Math.cos(h),u=Math.sin(h),d=[[-.45,-.3],[.45,-.3],[.45,.3],[-.45,.3]].map(([g,S])=>[l+g*f-S*u,c+g*u+S*f]);for(let g=0;g<4;g++)t.push(d[g][0],.002,d[g][1],d[(g+1)%4][0],.002,d[(g+1)%4][1])};for(let l=0;l<5;l++)e(5.7+l*.55,.25+l*.92,1.1);this.lines(t,"detail");for(const[l,c]of[[6.87,.48],[6.21,3.06],[8.62,4.13]])this.bollard(l,c,.55);const[n,s,r,a]=[-14.8,-.4,-9,6.8],o=[-10.8,.002,s,n,.002,s,n,.002,s,n,.002,a,n,.002,a,r,.002,a,r,.002,a,r,.002,s];for(let l=s+1;l<a;l+=1)o.push(n,.002,l,r,.002,l);this.lines(o,"faint")}landscape(){const t=[[-18.5,-15.5,2.1,6.5],[-12,-15.8,2.3,7],[-5,-15.4,1.9,6],[6,-15.6,2.2,6.8],[19.5,-15.5,2,6.5],[-19.6,-6,2,6.5],[-19.8,1.5,2.2,7],[-19.4,8.5,1.8,6],[19.8,1.5,2.1,6.8],[20.2,9.5,1.9,6.5],[19.4,16,1.9,6],[4,17.5,2.2,7],[10.5,18.2,1.6,5],...[-17,-13,-9].flatMap(r=>[10.5,14,17.5].map(a=>[r,a,1.35,4,"faint"]))],e=[],n=[];for(const[r,a,o,l,c="detail"]of t){const h=l-o;e.push(r,0,a,r,h-o,a),rr(r,a,o,h,n,40);const f=[];for(let d=0;d<48;d++){const g=d/48*Math.PI*2,S=(d+1)/48*Math.PI*2;f.push(Math.cos(g)*o,Math.sin(g)*o,0,Math.cos(S)*o,Math.sin(S)*o,0)}const u=new rs(new Bi().setPositions(f),this.materialFor(c,"other"));u.renderOrder=2,u.position.set(r,h,a),this.disposables.push(u.geometry),this.billboards.push(u),this.addPart(u,[0,0,0])}this.lines(e,"detail"),this.lines(n,"faint");const s=[[-21.5,-17.6,.8,-16.8,1.8],[3.6,-17.6,11.6,-16.8,1.8],[16.4,-17.6,21.5,-16.8,1.8],[-21.6,-14,-20.8,9,1.8],[20.8,-2,21.6,17,1.8],[11.2,-5.6,21,-4.9,1.5]];for(const[r,a,o,l,c]of s)this.box([r,0,a],[o,c,l],[0,0,0],"faint")}fence(){const t=[],e=(n,s,r,a,o=1.3)=>{const l=Math.hypot(r-n,a-s),c=Math.max(1,Math.round(l/2));for(let h=0;h<=c;h++){const f=n+(r-n)*h/c,u=s+(a-s)*h/c;t.push(f,0,u,f,o,u)}for(const h of[.2,.88])t.push(n,o*h,s,r,o*h,a)};e(-22,Fe,1.2,Fe),e(2.8,Fe,11.8,Fe),e(16,Fe,22,Fe),e(-22,Fe,-22,sr),e(22,Fe,22,sr),e(-22,sr,22,sr,.9),this.lines(t,"faint")}road(){const n=Fe-.6;this.lines([-90,.002,n,90,.002,n,-90,.002,n-6.5,90,.002,n-6.5],"detail");const s=[];for(let r=-90;r<90;r+=6)s.push(r,.002,n-6.5/2,r+3,.002,n-6.5/2);this.lines(s,"faint")}contours(){const t=[];for(let e=0;e<9;e++){const n=26+e*3.4,s=23+e*3.4;let r=null;for(let a=0;a<=200;a++){const o=a/200*Math.PI*2,l=Math.cos(o),c=Math.sin(o),h=1+(.05*Math.sin(2*o+e*.4)+.035*Math.sin(3*o+1.7)+.02*Math.sin(5*o+e))*(1+e*.12),f=n*h*Math.sign(l)*Math.sqrt(Math.abs(l)),u=1+s*h*Math.sign(c)*Math.sqrt(Math.abs(c));r&&u>Fe&&r[1]>Fe&&t.push(r[0],.002,r[1],f,.002,u),r=[f,u]}}this.lines(t,"faint")}ground(){const[t,e,n,s]=uc,r=new yr(ae(Jt(-200,-200,200,200),[Jt(t,e,n,s)]));r.applyMatrix4(pn()),this.scene.add(new se(r,this.occluder));const a=new se(r,this.light.surface);a.renderOrder=1,this.scene.add(a),this.disposables.push(r)}monoPitch(t){const{x0:e,x1:n,z0:s,z1:r,low:a,high:o,explode:l}=t,c=S=>a+(S-s)/(r-s)*(o-a);this.prism({shape:ae(Jt(e,0,n,o),t.front),depth:re,matrix:new Gt().makeTranslation(0,0,r-re),explode:[0,.2,l],kind:"wall",glass:t.frontGlass,leaves:t.doors}),this.prism({shape:ae(Jt(e,0,n,a)),depth:re,matrix:new Gt().makeTranslation(0,0,s),explode:[0,.2,-l],kind:"wall"});const h=s+re,f=r-re,u=(s+r)/2,d=[[-(f-u),0],[-(h-u),0],[-(h-u),c(h)],[-(f-u),c(f)]],g=S=>new Gt().makeRotationY(Math.PI/2).setPosition(S,0,u);this.prism({shape:ae(d,t.side),depth:re,matrix:g(n-re),explode:[l,.2,0],kind:"wall",glass:t.side}),this.prism({shape:ae(d),depth:re,matrix:g(e),explode:[-l,.2,0],kind:"wall"}),this.prism({shape:ae(Jt(e,s,n,r)),depth:.25,matrix:pn(),explode:[0,0,0]}),t.roof!==!1&&this.shedRoof({x0:e,x1:n,z0:s,z1:r,low:a,high:o,overhang:[.35,.35,t.frontOverhang],explode:l})}shedRoof(t){const{x0:e,x1:n,z0:s,z1:r,low:a,high:o}=t,[l,c,h]=t.overhang,f=new R(0,o-a,r-s).normalize(),u=new R(1,0,0),d=new R().crossVectors(u,f),g=new R(0,a,s).addScaledVector(d,-.26),S=Math.hypot(r-s,o-a),m=S/(r-s);this.prism({shape:ae(Jt(e-l,-c*m,n+l,S+h*m)),depth:ir,matrix:new Gt().makeBasis(u,f,d).setPosition(g),explode:[0,t.explode*1.6,0],kind:"roof"})}place(t,e,n,s,r=0,a=0,o){this.origin.set(t,a,e),this.turn.setFromAxisAngle(new R(0,1,0),qe.degToRad(r)),this.building=n,this.see=o,s(),this.see=void 0}xrayMaterials(){const t=this.occluder.clone();return t.alphaHash=!0,{lines:this.lineSet(),solids:[],glass:this.glass.clone(),pane:this.pane.clone(),occluder:t,surface:this.light.surfaceMaterial()}}lineSet(){return{edge:this.lineMaterial("edge"),detail:this.lineMaterial("detail"),faint:this.lineMaterial("faint"),roofEdge:this.lineMaterial("edge"),roofDetail:this.lineMaterial("detail")}}lineMaterial(t){const[e,n]=p_[t],s=new oh({color:new Yt().setScalar(e),linewidth:n,transparent:!0,fog:!0});return s.userData.width=n,s.userData.intensity=e,s}fill(t,e=!1){return new Mr({color:t,vertexColors:e,transparent:!0,opacity:0,blending:dr,depthWrite:!1,side:on})}materialFor(t,e){const n=this.see?this.xray[this.see].lines:this.materials;return e==="roof"?t==="edge"?n.roofEdge:n.roofDetail:n[t]}addPart(t,e,n="other"){t.position.applyQuaternion(this.turn).add(this.origin),t.quaternion.premultiply(this.turn),this.scene.add(t);const s=new R(...e).applyQuaternion(this.turn);if(this.parts.push({object:t,base:t.position.clone(),explode:s,kind:n,house:this.building==="house"}),this.see){const r=this.xray[this.see].solids,{occluder:a,surface:o}=this.xray[this.see];t.traverse(l=>{l instanceof se&&(l.material===a||l.material===o)&&r.push(l)})}}solid(t,e,n,s){const r=new ls,a=this.see&&this.xray[this.see];r.add(new se(t,a?a.occluder:this.occluder));const o=new se(t,a?a.surface:this.light.surface);o.renderOrder=1,r.add(o);const l=new Bi;if(s)l.setPositions(s);else{const h=new ku(t,15);l.fromEdgesGeometry(h),h.dispose()}const c=new rs(l,this.materialFor(e,n));return c.renderOrder=2,r.add(c),this.disposables.push(t,l),r}extrusion(t,e,n,s){const r=new Uo(t,{depth:e,bevelEnabled:!1,curveSegments:1});return this.solid(r,n,s,x_(t,e))}prism(t){const{shape:e,depth:n,kind:s="other",layers:r=!0,weight:a="edge"}=t,o=this.extrusion(e,n,a,s),l=o.children[0].geometry;if(t.matrix.decompose(o.position,o.quaternion,o.scale),s==="wall"){const f=new se(l,this.poche);f.renderOrder=1,o.add(f)}const c=t.light??(t.glass??[]).map(f=>({outline:f,level:1}));for(const f of t.glass?.length?c:[])this.frame(f,o,n);for(const f of t.leaves??[]){const u=this.extrusion(ae(f),cc,"detail","other");u.position.z=(n-cc)/2,o.add(u)}for(const f of t.glass??[]){const u=new yr(ae(f));u.translate(0,0,n/2);const[d,g]=m_(f),S=c.find(({outline:A})=>g_(A,d,g))?.level??1,m=u.getAttribute("position"),p=[];for(let A=0;A<m.count;A++){const x=S*(.6+.55*qe.smoothstep(m.getY(A),0,2.8));p.push(x,x,x)}u.setAttribute("color",new ve(p,3));const E=new se(u,this.see?this.xray[this.see].pane:this.pane);E.renderOrder=1,o.add(E),this.disposables.push(u)}if(c.length){const f=new Gt().compose(this.origin,this.turn,new R(1,1,1)).multiply(t.matrix);for(const u of c)this.aperture(u,f,n)}const h=[...t.extra??[]];if(r){const f=[e.getPoints().map(u=>[u.x,u.y]),...e.holes.map(u=>u.getPoints().map(d=>[d.x,d.y]))];fc(f,n/3,h),fc(f,n*2/3,h)}if(h.length){const f=new Bi().setPositions(h),u=new rs(f,this.materialFor("detail",s));u.renderOrder=2,o.add(u),this.disposables.push(f)}this.addPart(o,t.explode,s)}box(t,e,n,s="edge",r="other"){const a=new R(e[0]-t[0],e[1]-t[1],e[2]-t[2]),o=this.solid(new kn(a.x,a.y,a.z),s,r);o.position.set((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),this.addPart(o,n,r)}cylinder(t,e,n,s,r,a){const o=this.solid(new Po(n,n,r-s,48,1,!0),"edge","other"),l=[];rr(0,0,n-.14,(r-s)/2,l,48),rr(0,0,n-.14,(r-s)/2-.2,l,48);const c=new Bi().setPositions(l),h=new rs(c,this.materialFor("detail","other"));h.renderOrder=2,o.add(h);const f=new Co(n-.14,48).rotateX(-Math.PI/2).translate(0,(r-s)/2-.2,0),u=new se(f,this.see?this.xray[this.see].glass:this.glass);u.renderOrder=1,o.add(u,new se(f,this.see?this.xray[this.see].occluder:this.occluder)),this.disposables.push(c,f),o.position.set(t,(s+r)/2,e),this.addPart(o,a)}aperture(t,e,n){const[s,r,a,o]=Er(t.outline),l=new R((s+a)/2,(r+o)/2,n/2).applyMatrix4(e),c=new R(1,0,0).transformDirection(e),h=new R(0,1,0).transformDirection(e),f=new R().crossVectors(c,h).setY(0).normalize();f.dot(new R().subVectors(this.origin,l))<0&&f.negate();const u=l.clone().addScaledVector(f,2.2).setY(t.ceiling??2.5);this.light.apertures.push({centre:l,u:c,v:h,source:u,halfWidth:(a-s)/2,halfHeight:(o-r)/2,intensity:dn.window*t.level,panes:(t.columns?.length??0)+1,group:this.see})}frame(t,e,n){const[s,r,a,o]=Er(t.outline),l=[s,...t.columns??[],a],c=[r,...t.rows??[],o],h=[];for(let u=0;u<l.length-1;u++)for(let d=0;d<c.length-1;d++){const g=__(t.outline,l[u],c[d],l[u+1],c[d+1]);g.length>=3&&h.push(v_(g,c_))}const f=this.extrusion(ae(t.outline,h),hc,"detail","other");f.position.z=(n-hc)/2,e.add(f)}lamp(t,e,n,s,r,a,o){const l=new R(t,e,n).applyQuaternion(this.turn).add(this.origin),c=new jt(0,0,0,1);if(o){const h=new R(o[0],o[1],o[2]).applyQuaternion(this.turn),f=new R(o[0],o[1],o[2]).multiplyScalar(-o[3]).applyQuaternion(this.turn).add(this.origin);c.set(h.x,h.y,h.z,-h.dot(f))}this.light.lamps.push({position:l,intensity:s,direction:new R(...r).applyQuaternion(this.turn).normalize(),cosOuter:a,clip:c,group:this.see})}fitting(t,e){const n=new kn(e[0]-t[0],e[1]-t[1],e[2]-t[2]),s=new se(n,this.see?this.xray[this.see].glass:this.glass);s.position.set((t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2),s.renderOrder=1,this.disposables.push(n),this.addPart(s,[0,0,0])}bollard(t,e,n){this.box([t-.06,0,e-.06],[t+.06,n,e+.06],[0,0,0],"detail"),this.fitting([t-.062,n-.16,e-.062],[t+.062,n-.06,e+.062]),this.lamp(t,n-.11,e,dn.bollard,[0,-1,0],-.45)}lines(t,e){const n=new Bi().setPositions(t),s=new rs(n,this.materialFor(e,"other"));s.renderOrder=2,this.disposables.push(n),this.addPart(s,[0,0,0])}}const M_=[{name:"Cormorant Garamond",family:'"Cormorant Garamond Variable", "Cormorant Garamond", serif',google:"Cormorant+Garamond:wght@400;500;600",body:500,heading:600,scale:1.22},{name:"Marcellus",family:'"Marcellus", serif',google:"Marcellus",body:400,heading:400,scale:1},{name:"Italiana",family:'"Italiana", serif',google:"Italiana",body:400,heading:400,scale:1.08},{name:"Bodoni Moda",family:'"Bodoni Moda Variable", "Bodoni Moda", serif',google:"Bodoni+Moda:wght@400;600",body:400,heading:600,scale:1.04},{name:"Fraunces",family:'"Fraunces Variable", "Fraunces", serif',google:"Fraunces:wght@300;600",body:300,heading:600,scale:1},{name:"Josefin Sans",family:'"Josefin Sans Variable", "Josefin Sans", sans-serif',google:"Josefin+Sans:wght@300;600",body:300,heading:600,scale:1.08},{name:"Syne",family:'"Syne Variable", "Syne", sans-serif',google:"Syne:wght@400;600",body:400,heading:600,scale:.96},{name:"Tenor Sans",family:'"Tenor Sans", sans-serif',google:"Tenor+Sans",body:400,heading:400,scale:1},{name:"Open Sans",family:'"Open Sans Variable", "Open Sans", sans-serif',google:"Open+Sans:wght@300;600",body:300,heading:600,scale:1}],y_=M_.find(i=>i.name==="Syne"),ke=1024,E_={background:"#161616",haze:"#3a3936",hazeStrength:1,hazeSize:1.5,vignette:.25,grain:.03,pattern:"grid",cube:"#0b0b0b",roughness:.7,metalness:.1,reflections:.05,keyLight:.6,motif:"site",motifStrength:1.2,motifBlur:2.5,motifDepth:.5,motifHalo:.4,motifLights:1},ar=[1.5,1,.75],b_=.75,w_=1/45,pc=40,ci=["right","left","top","bottom","front","back"],mc={front:new $e,top:new $e().setFromEuler(new We(Math.PI/2,0,0)),bottom:new $e().setFromEuler(new We(-Math.PI/2,0,0)),right:new $e().setFromEuler(new We(0,-Math.PI/2,0)),left:new $e().setFromEuler(new We(0,Math.PI/2,0))};class O_{constructor(t,e){this.canvas=t,this.options=e,this.faces=e.faces,this.site=new S_(e.reducedMotion),this.renderer=new Wg({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=vn,this.renderer.info.autoReset=!1,this.scene.add(this.background.mesh),this.defocus=new Qg(this.renderer),this.disposables.push(this.background,this.site,this.defocus);const n=new lo(this.renderer),s=n.fromScene(new Xg,.04).texture;this.scene.environment=s,n.dispose(),this.disposables.push(s),this.camera.position.set(0,0,5),this.scene.add(new Of(16777215,.08)),this.keyLight=new Ff(16777215),this.keyLight.position.set(-3,4,5),this.scene.add(this.keyLight);const r=new zo(1,1,1,2,.006),a=ci.map(()=>new ro({emissive:16777215,emissiveIntensity:0,dithering:!0}));this.cube=new se(r,a),this.cube.scale.setScalar(.85),this.scene.add(this.cube),this.disposables.push(r,...a),this.applyLook(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.clock.connect(document),this.renderer.setAnimationLoop(()=>this.frame()),new URLSearchParams(location.search).has("stats")&&_h(async()=>{const{createStats:l}=await import("./stats.stRsLA2M.js");return{createStats:l}},[]).then(({createStats:l})=>this.statsPanel=l(this))}look={...E_};renderer;scene=new wr;camera=new Ze(32,1,.1,100);cube;background=new Zg;site;defocus;drawingRatio=1;drawingLevel=0;frameTimes=[];siteDrawn=!1;blurred="";keyLight;raycaster=new kf;resizeObserver;disposables=[];tuner;statsPanel;onFrame;links={};logo;font=y_;faces;faceTextures=[];hoveredHref=null;drawnPattern;baseRotation=new $e().setFromEuler(new We(-.5,.9,.15));targetRotation=mc.front;activeSide="front";pointer=new st;smoothPointer=new st;clock=new Hf;bufferSize=new st;screenPosition=new R;intro=0;applyLook(){const{look:t}=this;for(const e of this.cube.material)e.color.set(t.cube),e.roughness=t.roughness,e.metalness=t.metalness;this.scene.environmentIntensity=t.reflections,this.keyLight.intensity=t.keyLight,this.background.setColours(t.background,t.haze),this.background.setVignette(t.vignette),this.background.setGrain(t.grain,this.renderer.getPixelRatio()),t.pattern!==this.drawnPattern&&this.faceTextures.length&&ci.forEach((e,n)=>{this.faces.some(s=>s.side===e)||(this.faceTextures[n].dispose(),this.faceTextures[n]=this.drawFace(n))}),this.drawnPattern=t.pattern}async loadFaces(){this.logo=await T_(this.options.logoUrl),await this.setFont(this.font)}async setFont(t){this.font=t,await Promise.all([document.fonts.load(`${t.body} 64px ${t.family}`),document.fonts.load(`${t.heading} 32px ${t.family}`)]),!(this.font!==t||!this.logo)&&(this.faceTextures.forEach(e=>e.dispose()),this.faceTextures=ci.map((e,n)=>this.drawFace(n)))}setHoveredLink(t){if(t===this.hoveredHref)return;const e=this.hoveredHref;this.hoveredHref=t,ci.forEach((n,s)=>{!(n!=="back"&&this.links[n]?.some(a=>a.href===t||a.href===e))||!this.faceTextures[s]||(this.faceTextures[s].dispose(),this.faceTextures[s]=this.drawFace(s))})}setFaces(t){this.faces=t,this.logo&&(this.faceTextures.forEach(e=>e.dispose()),this.faceTextures=ci.map((e,n)=>this.drawFace(n)))}showSide(t){this.activeSide=t,this.targetRotation=mc[t],this.site.setSide(t)}setPointer(t,e){this.pointer.set(t,e)}pick(t,e){const n=this.canvas.getBoundingClientRect(),s=new st((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);const[r]=this.raycaster.intersectObject(this.cube);if(!r)return{hit:!1};const a=r.face?ci[r.face.materialIndex]:void 0;if(!r.uv||a!==this.activeSide)return{hit:!0};const{x:o,y:l}=r.uv;return{hit:!0,href:this.links[a]?.find(h=>o>=h.u0&&o<=h.u1&&l>=h.v0&&l<=h.v1)?.href}}dispose(){this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect(),this.clock.dispose(),this.tuner?.destroy(),this.statsPanel?.destroy(),this.faceTextures.forEach(t=>t.dispose()),this.disposables.forEach(t=>t.dispose()),this.renderer.dispose()}drawFace(t){const e=ci[t],n=this.faces.find(l=>l.side===e),{canvas:s,links:r}=e==="front"?R_(this.logo):n?D_(n,this.font,this.hoveredHref):A_(this.look.pattern),a=new Hu(s);a.colorSpace=Ye,a.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=this.cube.material[t];return o.emissiveMap=a,o.emissiveIntensity=1,o.needsUpdate=!0,e!=="back"&&(this.links[e]=r),a}resize(){const{clientWidth:t,clientHeight:e}=this.canvas;if(!t||!e)return;this.renderer.setSize(t,e,!1);const n=Math.min(window.devicePixelRatio,ar[0]),s=this.drawingRatio=Math.min(window.devicePixelRatio,ar[this.drawingLevel]),r=Math.pow(n/s,b_);this.site.resize(Math.round(t*s),Math.round(e*s),s,r);const a=t/e,h=1/((a<1?.56:.34)*Math.min(1,a))/(2*Math.tan(qe.degToRad(this.camera.fov/2)));this.camera.aspect=a,this.camera.position.z=h+.5,this.camera.updateProjectionMatrix()}updateMotif(t,e){const{motif:n,motifStrength:s,motifBlur:r,motifDepth:a,motifHalo:o,motifLights:l}=this.look;if(n==="site"){const{site:c}=this;c.lightLevel=l,this.siteDrawn=c.render(this.renderer,t,e,this.smoothPointer);let h=c.target.texture;if(r>0){const[f,u]=c.depthRange,d={sigma:r*this.drawingRatio,depth:a,near:c.camera.near,far:c.camera.far,rangeNear:f,rangeFar:u},g=JSON.stringify(d);(this.siteDrawn||g!==this.blurred)&&this.defocus.render(this.renderer,c.target,d),this.blurred=g,h=this.defocus.texture}else this.blurred="";this.background.setDrawing(h,s*this.intro,o)}else this.siteDrawn=!1,this.background.setDrawing(null,0)}gpuName(){const t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info");return String(t.getParameter(e?e.UNMASKED_RENDERER_WEBGL:t.RENDERER))}frame(){this.renderer.info.reset(),this.clock.update();const t=this.clock.getDelta(),e=Math.min(t,.1),n=this.clock.getElapsed();this.watchFrames(t,n);const s=this.options.reducedMotion?0:1,r=1-Math.exp(-e*(this.options.reducedMotion?20:5));this.baseRotation.slerp(this.targetRotation,r),this.smoothPointer.lerp(this.pointer,1-Math.exp(-e*4));const a=new $e().setFromEuler(new We(s*(this.smoothPointer.y*.22+Math.sin(n*.7)*.035),s*(-this.smoothPointer.x*.28+Math.sin(n*.5+1)*.045),0));this.cube.quaternion.copy(a).multiply(this.baseRotation),this.cube.position.y=s*Math.sin(n*.9)*.05,this.renderer.getDrawingBufferSize(this.bufferSize);const o=this.screenPosition.copy(this.cube.position).project(this.camera),l=2*this.camera.position.z*Math.tan(qe.degToRad(this.camera.fov/2)),c=this.bufferSize.y/l*this.cube.scale.x;this.intro=Math.min(1,this.intro+e*.6);const h=1+s*Math.sin(n*.6)*.06;if(this.background.setHaze((o.x*.5+.5)*this.bufferSize.x,(o.y*.5+.5)*this.bufferSize.y,this.look.hazeSize*c,this.look.hazeStrength*this.intro*h),this.background.setGrainFrame(s*Math.floor(n*24)),this.updateMotif(e,n),this.renderer.render(this.scene,this.camera),this.onFrame){const{info:f,domElement:u}=this.renderer;this.onFrame({elapsed:t,siteDrawn:this.siteDrawn,drawingLevel:this.drawingLevel,drawing:[this.site.target.width,this.site.target.height],canvas:[u.width,u.height],calls:f.render.calls,triangles:f.render.triangles})}}watchFrames(t,e){if(this.siteDrawn&&e>2&&t>0&&t<1&&this.frameTimes.push(t),this.frameTimes.length<pc)return;const n=this.frameTimes.sort((a,o)=>a-o)[pc>>1];if(this.frameTimes.length=0,n<=w_)return;const s=a=>Math.min(window.devicePixelRatio,ar[a]),r=s(this.drawingLevel);for(;this.drawingLevel<ar.length-1&&s(this.drawingLevel)>=r;)this.drawingLevel++;this.resize()}}function Go(){const i=document.createElement("canvas");i.width=i.height=ke;const t=i.getContext("2d");return t.fillStyle="#000",t.fillRect(0,0,ke,ke),[i,t]}function T_(i){return new Promise((t,e)=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>e(new Error(`Failed to load ${i}`)),n.src=i})}function A_(i){const[t,e]=Go(),n=ke,s=(r,a,o,l)=>{e.beginPath(),e.moveTo(r,a),e.lineTo(o,l),e.stroke()};if(e.lineWidth=2.5,e.lineCap="square",i==="room"){const r=n*.22,a=6;for(let c=a;c>=1;c--){const h=n*Math.pow(r/n,c/a),f=Math.round(40+50*(c/a));e.strokeStyle=`rgb(${f},${f},${f})`,e.strokeRect((n-h)/2,(n-h)/2,h,h)}e.strokeStyle="#3a3a3a";const o=(n-r)/2,l=(n+r)/2;s(0,0,o,o),s(n,0,l,o),s(0,n,o,l),s(n,n,l,l)}else if(i==="grid"){for(let l=1;l<16;l++){const c=n*l/16;e.strokeStyle=l%4===0?"#3c3c3c":"#262626",s(c,0,c,n),s(0,c,n,c)}e.strokeStyle="#8a8a8a";const a=n/2,o=n*.035;s(a-o,a,a+o,a),s(a,a-o,a,a+o)}else{const r=n*.12;e.save(),e.beginPath(),e.rect(r,r,n-r*2,n-r*2),e.clip(),e.strokeStyle="#333";for(let a=-1024;a<n;a+=44)s(a,n,a+n,0);e.restore(),e.strokeStyle="#5a5a5a",e.strokeRect(r,r,n-r*2,n-r*2)}return{canvas:t,links:[]}}function R_(i){const[t,e]=Go(),n=ke*.6,s=n*(i.naturalWidth/i.naturalHeight);return e.imageSmoothingQuality="high",e.drawImage(i,(ke-s)/2,(ke-n)/2,s,n),{canvas:t,links:[]}}function C_(i,t,e,n,s){for(const r of t)i.fillText(r,e,n),e+=i.measureText(r).width+s}function P_(i,t,e){const n=[];let s="";for(const r of t.split(/\s+/)){const a=s?`${s} ${r}`:r;s&&i.measureText(a).width>e?(n.push(s),s=r):s=a}return s&&n.push(s),n}function L_(i,t,e){return t.flatMap((n,s)=>{const r=s===0?0:.35;return typeof n!="string"?[{text:n.text,href:n.href,gapBefore:r}]:P_(i,n,e).map((a,o)=>({text:a,gapBefore:o===0?r:0}))})}function D_(i,t,e){const[n,s]=Go(),r=ke*.15,a=ke-r*2,o=30*t.scale,l=110;let c=64*t.scale,h=[],f=0;for(;c>=40;c-=4){s.font=`${t.body} ${c}px ${t.family}`,h=L_(s,i.lines??[],a),f=c*1.38;const S=Math.max(...h.map(p=>s.measureText(p.text).width)),m=h.reduce((p,E)=>p+f*(1+E.gapBefore),0);if(S<=a&&m+l<=ke-r*2)break}const u=h.reduce((S,m)=>S+f*(1+m.gapBefore),0);let d=(ke-(l+u))/2;i.heading&&(s.font=`${t.heading} ${o}px ${t.family}`,s.fillStyle="#8c8c8c",s.textBaseline="top",C_(s,i.heading.toUpperCase(),r,d,o*.36),s.fillStyle="#4a4a4a",s.fillRect(r,d+o+28,56,2)),d+=l;const g=[];s.font=`${t.body} ${c}px ${t.family}`,s.textBaseline="alphabetic";for(const S of h){d+=f*S.gapBefore;const m=d+c*1.02;if(s.fillStyle="#f2f2f2",s.fillText(S.text,r,m),S.href){const p=S.href===e,E=c*.4,A=r+s.measureText(S.text).width+c*(p?.34:.28);I_(s,A,m-c*.04,E,Math.max(2,c*.05),p?"#fff":"#7a7a7a"),g.push({u0:r/ke,u1:(A+E+c*.1)/ke,v0:1-(d+f)/ke,v1:1-d/ke,href:S.href})}d+=f}return{canvas:n,links:g}}function I_(i,t,e,n,s,r){const a=e-n,o=t+n,l=n*.55;i.save(),i.strokeStyle=r,i.lineWidth=s,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(t,e),i.lineTo(o,a),i.moveTo(o-l,a),i.lineTo(o,a),i.lineTo(o,a+l),i.stroke(),i.restore()}export{O_ as CubeScene,E_ as DEFAULT_LOOK};
