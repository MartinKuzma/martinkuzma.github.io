/*! For license information please see 3davatar.min.js.LICENSE.txt */!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["3DAvatar"]=t():e["3DAvatar"]=t()}(self,()=>(()=>{"use strict";Je={d:(e,t)=>{for(var n in t)Je.o(t,n)&&!Je.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},Yt={},Je.r(Yt),Je.d(Yt,{Options:()=>Rs,showModels:()=>ic});const An="180",oa=0,sa=1,mi=2,fe=100,ui=101,ri=102,Ei=200,Oi=201,Mi=202,Fi=203,Ti=204,Ni=205,Li=206,Ri=207,Pi=208,Ki=209,Yi=210,Xi=211,Zi=212,Ji=213,ea=214,ta=0,na=1,ia=2,qa=3,Ya=4,er=5,or=6,ir=7,it=301,Ae=302,Rt=306,mn=1e3,Qe=1001,In=1002,I=1003,wr=1004,Kt=1005,B=1006,rn=1007,Oe=1008,Z=1009,tt=1012,xn=1013,Te=1014,H=1015,Ke=1016,Gn=1017,Xn=1018,ht=1020,z=1023,yt=1026,lt=1027,ls=1029,ws=1031,Ss=1033,wt=33776,Mt=33777,Jt=33778,Qt=33779,sn=35840,an=35841,vn=35842,wn=35843,Cn=36196,En=37492,kn=37496,Sn=37808,Mn=37809,Fn=37810,zn=37811,Dn=37812,Ln=37813,Rn=37814,Pn=37815,Hn=37816,Bn=37817,nn=37818,Un=37819,qn=37820,Zn=37821,hs=36492,bs=36494,js=36495,ys=36283,_s=36284,Os=36285,xs=36286,pt=2300,Es=2301,ks=2302,Ie="",E="srgb",Ve="srgb-linear",ft="linear",l="srgb",Ue=7680,sc=512,nc=513,tc=514,ec=515,Jr=516,Zr=517,Qr=518,Xr=519,As=35044,Vs="300 es",he=2e3,Nt=2001;class $e{addEventListener(e,t){0[0]===this._listeners&&(this._listeners={});const n=this._listeners;0[0]===n[e]&&(n[e]=[]),-1===n[e].indexOf(t)&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return 0[0]!==n&&0[0]!==n[e]&&-1!==n[e].indexOf(t)}removeEventListener(e,t){const s=this._listeners;if(0[0]===s)return;const n=s[e];if(0[0]!==n){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){const t=this._listeners;if(0[0]===t)return;const n=t[e.type];if(0[0]!==n){e.target=this;const t=n.slice(0);for(let n=0,s=t.length;n<s;n++)t[n].call(this,e);e.target=null}}}const b=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vs=Math.PI/180,fs=180/Math.PI;function ne(){const e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,s=4294967295*Math.random()|0;return(b[255&e]+b[e>>8&255]+b[e>>16&255]+b[e>>24&255]+"-"+b[255&t]+b[t>>8&255]+"-"+b[t>>16&15|64]+b[t>>24&255]+"-"+b[63&n|128]+b[n>>8&255]+"-"+b[n>>16&255]+b[n>>24&255]+b[255&s]+b[s>>8&255]+b[s>>16&255]+b[s>>24&255]).toLowerCase()}function o(e,t,n){return Math.max(t,Math.min(n,e))}function Qn(e,t,n){return(1-n)*e+n*t}function D(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function c(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(4294967295*e);case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int32Array:return Math.round(2147483647*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw new Error("Invalid component type.")}}class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6],this.y=t[1]*n+t[4]*s+t[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=o(this.x,e.x,t.x),this.y=o(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=o(this.x,e,t),this.y=o(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(o(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(0===t)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(o(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,i=this.y-e.y;return this.x=o*n-i*s+e.x,this.y=o*s+i*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,i,a){let r=n[s+0],c=n[s+1],l=n[s+2],d=n[s+3];const u=o[i+0],h=o[i+1],m=o[i+2],f=o[i+3];if(0===a)return e[t+0]=r,e[t+1]=c,e[t+2]=l,void(e[t+3]=d);if(1===a)return e[t+0]=u,e[t+1]=h,e[t+2]=m,void(e[t+3]=f);if(d!==f||r!==u||c!==h||l!==m){let e=1-a;const t=r*u+c*h+l*m+d*f,s=t>=0?1:-1,o=1-t*t;if(o>Number.EPSILON){const n=Math.sqrt(o),i=Math.atan2(n,t*s);e=Math.sin(e*i)/n,a=Math.sin(a*i)/n}const n=a*s;if(r=r*e+u*n,c=c*e+h*n,l=l*e+m*n,d=d*e+f*n,e===1-a){const e=1/Math.sqrt(r*r+c*c+l*l+d*d);r*=e,c*=e,l*=e,d*=e}}e[t]=r,e[t+1]=c,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,i){const a=n[s],r=n[s+1],c=n[s+2],l=n[s+3],d=o[i],u=o[i+1],h=o[i+2],m=o[i+3];return e[t]=a*m+l*d+r*h-c*u,e[t+1]=r*m+l*u+c*d-a*h,e[t+2]=c*m+l*h+a*u-r*d,e[t+3]=l*m-a*d-r*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const d=e._x,u=e._y,h=e._z,m=e._order,c=Math.cos,l=Math.sin,n=c(d/2),s=c(u/2),o=c(h/2),i=l(d/2),a=l(u/2),r=l(h/2);switch(m){case"XYZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"YXZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"ZXY":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"ZYX":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"YZX":this._x=i*s*o+n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o-i*a*r;break;case"XZY":this._x=i*s*o-n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o+i*a*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+m)}return!0===t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,n=Math.sin(s);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],c=t[9],l=t[2],d=t[6],o=t[10],u=n+s+o;if(u>0){const e=.5/Math.sqrt(u+1);this._w=.25/e,this._x=(d-c)*e,this._y=(a-l)*e,this._z=(r-i)*e}else if(n>s&&n>o){const e=2*Math.sqrt(1+n-s-o);this._w=(d-c)/e,this._x=.25*e,this._y=(i+r)/e,this._z=(a+l)/e}else if(s>o){const e=2*Math.sqrt(1+s-n-o);this._w=(a-l)/e,this._x=(i+r)/e,this._y=.25*e,this._z=(c+d)/e}else{const e=2*Math.sqrt(1+o-n-s);this._w=(r-i)/e,this._x=(a+l)/e,this._y=(c+d)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(o(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(0===n)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,i=e._w,a=t._x,r=t._y,c=t._z,l=t._w;return this._x=n*l+i*a+s*c-o*r,this._y=s*l+i*r+o*a-n*c,this._z=o*l+i*c+n*r-s*a,this._w=i*l-n*a-s*r-o*c,this._onChangeCallback(),this}slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);const s=this._x,o=this._y,i=this._z,a=this._w;let n=a*e._w+s*e._x+o*e._y+i*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=a,this._x=s,this._y=o,this._z=i,this;const d=1-n*n;if(d<=Number.EPSILON){const e=1-t;return this._w=e*a+t*this._w,this._x=e*s+t*this._x,this._y=e*o+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}const l=Math.sqrt(d),u=Math.atan2(l,n),r=Math.sin((1-t)*u)/l,c=Math.sin(t*u)/l;return this._w=a*r+this._w*c,this._x=s*r+this._x*c,this._y=o*r+this._y*c,this._z=i*r+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class e{constructor(t=0,n=0,s=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(e,t,n){return 0[0]===n&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6]*o,this.y=t[1]*n+t[4]*s+t[7]*o,this.z=t[2]*n+t[5]*s+t[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,t=e.elements,i=1/(t[3]*n+t[7]*s+t[11]*o+t[15]);return this.x=(t[0]*n+t[4]*s+t[8]*o+t[12])*i,this.y=(t[1]*n+t[5]*s+t[9]*o+t[13])*i,this.z=(t[2]*n+t[6]*s+t[10]*o+t[14])*i,this}applyQuaternion(e){const o=this.x,i=this.y,a=this.z,t=e.x,n=e.y,s=e.z,r=e.w,c=2*(n*a-s*i),l=2*(s*o-t*a),d=2*(t*i-n*o);return this.x=o+r*c+n*d-s*l,this.y=i+r*l+s*c-t*d,this.z=a+r*d+t*l-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o,this.y=t[1]*n+t[5]*s+t[9]*o,this.z=t[2]*n+t[6]*s+t[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=o(this.x,e.x,t.x),this.y=o(this.y,e.y,t.y),this.z=o(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=o(this.x,e,t),this.y=o(this.y,e,t),this.z=o(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(o(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this.z=this.z|0,this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,i=t.x,a=t.y,r=t.z;return this.x=s*r-o*a,this.y=o*i-n*r,this.z=n*a-s*i,this}projectOnVector(e){const t=e.lengthSq();if(0===t)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tn.copy(this).projectOnVector(e),this.sub(tn)}reflect(e){return this.sub(tn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(0===t)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(o(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=2*Math.random()-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tn=new e,vo=new Pe;class n{constructor(e,t,s,o,i,a,r,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],0[0]!==e&&this.set(e,t,s,o,i,a,r,c,l)}set(e,t,n,s,o,i,a,r,c){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=o,l[5]=r,l[6]=n,l[7]=i,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[3],r=n[6],c=n[1],l=n[4],d=n[7],u=n[2],h=n[5],m=n[8],f=s[0],p=s[3],g=s[6],v=s[1],b=s[4],j=s[7],y=s[2],_=s[5],w=s[8];return o[0]=i*f+a*v+r*y,o[3]=i*p+a*b+r*_,o[6]=i*g+a*j+r*w,o[1]=c*f+l*v+d*y,o[4]=c*p+l*b+d*_,o[7]=c*g+l*j+d*w,o[2]=u*f+h*v+m*y,o[5]=u*p+h*b+m*_,o[8]=u*g+h*j+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],i=e[4],a=e[5],r=e[6],c=e[7],l=e[8];return t*i*l-t*a*c-n*o*l+n*a*r+s*o*c-s*i*r}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],d=e[3],a=e[4],i=e[5],r=e[6],c=e[7],l=e[8],u=l*a-i*c,h=i*r-l*d,m=c*d-a*r,f=n*u+s*h+o*m;if(0===f)return this.set(0,0,0,0,0,0,0,0,0);const t=1/f;return e[0]=u*t,e[1]=(o*c-l*s)*t,e[2]=(i*s-o*a)*t,e[3]=h*t,e[4]=(l*n-o*r)*t,e[5]=(o*d-i*n)*t,e[6]=m*t,e[7]=(s*r-c*n)*t,e[8]=(a*n-s*d)*t,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,i,a){const r=Math.cos(o),c=Math.sin(o);return this.set(n*r,n*c,-n*(r*i+c*a)+i+e,-s*c,s*r,-s*(-c*i+r*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vn.makeScale(e,t)),this}rotate(e){return this.premultiply(Vn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return(new this.constructor).fromArray(this.elements)}}const Vn=new n;function Co(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _t(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Gr(){const e=_t("canvas");return e.style.display="block",e}Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array;const ko={};function ct(e){e in ko||(ko[e]=!0,console.warn(e))}const So=(new n).set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fo=(new n).set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yr(){const e={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(e,t,n){return!1!==this.enabled&&t!==n&&t&&n?(this.spaces[t].transfer===l&&(e.r=K(e.r),e.g=K(e.g),e.b=K(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===l&&(e.r=Me(e.r),e.g=Me(e.g),e.b=Me(e.b)),e):e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Ie?ft:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ct("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ct("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return e.define({[Ve]:{primaries:t,whitePoint:s,transfer:ft,toXYZ:So,fromXYZ:Fo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:E},outputColorSpaceConfig:{drawingBufferColorSpace:E}},[E]:{primaries:t,whitePoint:s,transfer:l,toXYZ:So,fromXYZ:Fo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:E}}}),e}const a=Yr();function K(e){return e<.04045?.0773993808*e:(.9478672986*e+.0521327014)**2.4}function Me(e){return e<.0031308?12.92*e:1.055*e**.41666-.055}let je;class qr{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if("undefined"==typeof HTMLCanvasElement)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{0[0]===je&&(je=_t("canvas")),je.width=e.width,je.height=e.height;const t=je.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=je}return n.toDataURL(t)}static sRGBToLinear(e){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){const t=_t("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),s=o.data;for(let e=0;e<s.length;e++)s[e]=255*K(s[e]/255);return n.putImageData(o,0,0),t}if(e.data){const t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*K(t[e]/255)):t[e]=K(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $r=0;class yn{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=ne(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return"undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):null!==t?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){!0===e&&this.version++}toJSON(e){const s=0[0]===e||"string"==typeof e;if(!s&&0[0]!==e.images[this.uuid])return e.images[this.uuid];const n={uuid:this.uuid,url:""},t=this.data;if(null!==t){let e;if(Array.isArray(t)){e=[];for(let n=0,s=t.length;n<s;n++)t[n].isDataTexture?e.push(jn(t[n].image)):e.push(jn(t[n]))}else e=jn(t);n.url=e}return s||(e.images[this.uuid]=n),n}}function jn(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?qr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pr=0;const bn=new e;class x extends $e{constructor(e=x.DEFAULT_IMAGE,t=x.DEFAULT_MAPPING,s=1001,o=1001,a=1006,r=1008,c=1023,l=1009,d=x.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=ne(),this.name="",this.source=new yn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=a,this.minFilter=r,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new i(0,0),this.repeat=new i(1,1),this.center=new i(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new n,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bn).x}get height(){return this.source.getSize(bn).y}get depth(){return this.source.getSize(bn).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return(new this.constructor).copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const s in e){const t=e[s];if(0[0]===t){console.warn(`THREE.Texture.setValues(): parameter '${s}' has value of undefined.`);continue}const n=this[s];0[0]!==n?n&&t&&n.isVector2&&t.isVector2||n&&t&&n.isVector3&&t.isVector3||n&&t&&n.isMatrix3&&t.isMatrix3?n.copy(t):this[s]=t:console.warn(`THREE.Texture.setValues(): property '${s}' does not exist.`)}}toJSON(e){const n=0[0]===e||"string"==typeof e;if(!n&&0[0]!==e.textures[this.uuid])return e.textures[this.uuid];const t={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),n||(e.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(300!==this.mapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case Qe:e.x=e.x<0?0:1;break;case In:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case Qe:e.y=e.y<0?0:1;break;case In:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){!0===e&&this.pmremVersion++}}x.DEFAULT_IMAGE=null,x.DEFAULT_MAPPING=300,x.DEFAULT_ANISOTROPY=1;class u{constructor(e=0,t=0,n=0,s=1){u.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=0[0]!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,i=this.w,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o+t[12]*i,this.y=t[1]*n+t[5]*s+t[9]*o+t[13]*i,this.z=t[2]*n+t[6]*s+t[10]*o+t[14]*i,this.w=t[3]*n+t[7]*s+t[11]*o+t[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let v,n,s,o;const a=.01,m=.1,t=e.elements,f=t[0],i=t[4],r=t[8],c=t[1],p=t[5],l=t[9],d=t[2],u=t[6],g=t[10];if(Math.abs(i-c)<a&&Math.abs(r-d)<a&&Math.abs(l-u)<a){if(Math.abs(i+c)<m&&Math.abs(r+d)<m&&Math.abs(l+u)<m&&Math.abs(f+p+g-3)<m)return this.set(1,0,0,0),this;v=Math.PI;const e=(f+1)/2,t=(p+1)/2,h=(g+1)/2,b=(i+c)/4,j=(r+d)/4,y=(l+u)/4;return e>t&&e>h?e<a?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(e),s=b/n,o=j/n):t>h?t<a?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(t),n=b/s,o=y/s):h<a?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(h),n=j/o,s=y/o),this.set(n,s,o,v),this}let h=Math.sqrt((u-l)*(u-l)+(r-d)*(r-d)+(c-i)*(c-i));return(h<0?-h:h)<.001&&(h=1),this.x=(u-l)/h,this.y=(r-d)/h,this.z=(c-i)/h,this.w=Math.acos((f+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=o(this.x,e.x,t.x),this.y=o(this.y,e.y,t.y),this.z=o(this.z,e.z,t.z),this.w=o(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=o(this.x,e,t),this.y=o(this.y,e,t),this.z=o(this.z,e,t),this.w=o(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(o(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this.z=this.z|0,this.w=this.w|0,this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sr extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:B,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new u(0,0,e,t),this.scissorTest=!1,this.viewport=new u(0,0,e,t);const s={width:e,height:t,depth:n.depth},o=new x(s);this.textures=[];const i=n.count;for(let e=0;e<i;e++)this.textures[e]=o.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:B,generateMipmaps:!1,flipY:!1,internalFormat:null};0[0]!==e.mapping&&(t.mapping=e.mapping),0[0]!==e.wrapS&&(t.wrapS=e.wrapS),0[0]!==e.wrapT&&(t.wrapT=e.wrapT),0[0]!==e.wrapR&&(t.wrapR=e.wrapR),0[0]!==e.magFilter&&(t.magFilter=e.magFilter),0[0]!==e.minFilter&&(t.minFilter=e.minFilter),0[0]!==e.format&&(t.format=e.format),0[0]!==e.type&&(t.type=e.type),0[0]!==e.anisotropy&&(t.anisotropy=e.anisotropy),0[0]!==e.colorSpace&&(t.colorSpace=e.colorSpace),0[0]!==e.flipY&&(t.flipY=e.flipY),0[0]!==e.generateMipmaps&&(t.generateMipmaps=e.generateMipmaps),0[0]!==e.internalFormat&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){null!==this._depthTexture&&(this._depthTexture.renderTarget=null),null!==e&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return(new this.constructor).copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yn(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class le extends Sr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uo extends x{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=I,this.minFilter=I,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Or extends x{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=I,this.minFilter=I,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xe{constructor(t=new e(1/0,1/0,1/0),n=new e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(S.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(S.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=S.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(0[0]!==n){const s=n.getAttribute("position");if(!0===t&&0[0]!==s&&!0!==e.isInstancedMesh)for(let t=0,n=s.count;t<n;t++)!0===e.isMesh?e.getVertexPosition(t,S):S.fromBufferAttribute(s,t),S.applyMatrix4(e.matrixWorld),this.expandByPoint(S);else 0[0]!==e.boundingBox?(null===e.boundingBox&&e.computeBoundingBox(),qt.copy(e.boundingBox)):(null===n.boundingBox&&n.computeBoundingBox(),qt.copy(n.boundingBox)),qt.applyMatrix4(e.matrixWorld),this.union(qt)}const s=e.children;for(let e=0,n=s.length;e<n;e++)this.expandByObject(s[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,S),S.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qe),Pt.subVectors(this.max,qe),we.subVectors(e.a,qe),_e.subVectors(e.b,qe),ye.subVectors(e.c,qe),G.subVectors(_e,we),J.subVectors(ye,_e),re.subVectors(we,ye);let t=[0,-G.z,G.y,0,-J.z,J.y,0,-re.z,re.y,G.z,0,-G.x,J.z,0,-J.x,re.z,0,-re.x,-G.y,G.x,0,-J.y,J.x,0,-re.y,re.x,0];return!!on(t,we,_e,ye,Pt)&&(t=[1,0,0,0,1,0,0,0,1],!!on(t,we,_e,ye,Pt)&&(Zt.crossVectors(G,J),t=[Zt.x,Zt.y,Zt.z],on(t,we,_e,ye,Pt)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,S).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(S).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(V[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),V[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),V[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),V[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),V[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),V[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),V[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),V[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(V)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const V=[new e,new e,new e,new e,new e,new e,new e,new e],S=new e,qt=new Xe,we=new e,_e=new e,ye=new e,G=new e,J=new e,re=new e,qe=new e,Pt=new e,Zt=new e,ce=new e;function on(e,t,n,s,o){for(let i=0,l=e.length-3;i<=l;i+=3){ce.fromArray(e,i);const d=o.x*Math.abs(ce.x)+o.y*Math.abs(ce.y)+o.z*Math.abs(ce.z),a=t.dot(ce),r=n.dot(ce),c=s.dot(ce);if(Math.max(-Math.max(a,r,c),Math.min(a,r,c))>d)return!1}return!0}const fr=new Xe,Ge=new e,cn=new e;class ln{constructor(t=new e,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;0[0]!==t?n.copy(t):fr.setFromPoints(e).getCenter(n);let s=0;for(let t=0,o=e.length;t<o;t++)s=Math.max(s,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ge.subVectors(e,this.center);const t=Ge.lengthSq();if(t>this.radius*this.radius){const e=Math.sqrt(t),n=.5*(e-this.radius);this.center.addScaledVector(Ge,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(cn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ge.copy(e.center).add(cn)),this.expandByPoint(Ge.copy(e.center).sub(cn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return(new this.constructor).copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const U=new e,un=new e,Vt=new e,Q=new e,fn=new e,It=new e,gn=new e;class hr{constructor(t=new e,n=new e(0,0,-1)){this.origin=t,this.direction=n}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,U)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=U.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(U.copy(this.origin).addScaledVector(this.direction,t),U.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){un.copy(e).add(t).multiplyScalar(.5),Vt.copy(t).sub(e).normalize(),Q.copy(this.origin).sub(un);const a=.5*e.distanceTo(t),r=-this.direction.dot(Vt),l=Q.dot(this.direction),c=-Q.dot(Vt),u=Q.lengthSq(),m=Math.abs(1-r*r);let i,o,d,h;if(m>0)if(i=r*c-l,o=r*l-c,h=a*m,i>=0)if(o>=-h)if(o<=h){const e=1/m;i*=e,o*=e,d=i*(i+r*o+2*l)+o*(r*i+o+2*c)+u}else o=a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o=-a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o<=-h?(i=Math.max(0,-(-r*a+l)),o=i>0?-a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u):o<=h?(i=0,o=Math.min(Math.max(-a,-c),a),d=o*(o+2*c)+u):(i=Math.max(0,-(r*a+l)),o=i>0?a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u);else o=r>0?-a:a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,i),s&&s.copy(un).addScaledVector(Vt,o),d}intersectSphere(e,t){U.subVectors(e.center,this.origin);const n=U.dot(this.direction),s=U.dot(U)-n*n,o=e.radius*e.radius;if(s>o)return null;const i=Math.sqrt(o-s),a=n-i,r=n+i;return r<0?null:a<0?this.at(r,t):this.at(a,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(0===t)return 0===e.distanceToPoint(this.origin)?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return null===n?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,a,r,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,o=this.origin;return l>=0?(n=(e.min.x-o.x)*l,s=(e.max.x-o.x)*l):(n=(e.max.x-o.x)*l,s=(e.min.x-o.x)*l),d>=0?(i=(e.min.y-o.y)*d,a=(e.max.y-o.y)*d):(i=(e.max.y-o.y)*d,a=(e.min.y-o.y)*d),n>a||i>s?null:((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),u>=0?(r=(e.min.z-o.z)*u,c=(e.max.z-o.z)*u):(r=(e.max.z-o.z)*u,c=(e.min.z-o.z)*u),n>c||r>s?null:((r>n||n!=n)&&(n=r),(c<s||s!=s)&&(s=c),s<0?null:this.at(n>=0?n:s,t)))}intersectsBox(e){return null!==this.intersectBox(e,U)}intersectTriangle(e,t,n,s,o){fn.subVectors(t,e),It.subVectors(n,e),gn.crossVectors(fn,It);let a,i=this.direction.dot(gn);if(i>0){if(s)return null;a=1}else{if(!(i<0))return null;a=-1,i=-i}Q.subVectors(this.origin,e);const r=a*this.direction.dot(It.crossVectors(Q,It));if(r<0)return null;const c=a*this.direction.dot(fn.cross(Q));if(c<0)return null;if(r+c>i)return null;const l=-a*Q.dot(gn);return l<0?null:this.at(l/i,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class m{constructor(e,t,n,s,o,i,a,r,c,l,d,u,h,f,p,g){m.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],0[0]!==e&&this.set(e,t,n,s,o,i,a,r,c,l,d,u,h,f,p,g)}set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=i,g[9]=a,g[13]=r,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=h,g[7]=m,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new m).fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/xe.setFromMatrixColumn(e,0).length(),o=1/xe.setFromMatrixColumn(e,1).length(),i=1/xe.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*i,t[9]=n[9]*i,t[10]=n[10]*i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,c=e.x,l=e.y,d=e.z,i=Math.cos(c),n=Math.sin(c),a=Math.cos(l),s=Math.sin(l),r=Math.cos(d),o=Math.sin(d);if("XYZ"===e.order){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=-a*o,t[8]=s,t[1]=c+l*s,t[5]=e-d*s,t[9]=-n*a,t[2]=d-e*s,t[6]=l+c*s,t[10]=i*a}else if("YXZ"===e.order){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e+d*n,t[4]=l*n-c,t[8]=i*s,t[1]=i*o,t[5]=i*r,t[9]=-n,t[2]=c*n-l,t[6]=d+e*n,t[10]=i*a}else if("ZXY"===e.order){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e-d*n,t[4]=-i*o,t[8]=l+c*n,t[1]=c+l*n,t[5]=i*r,t[9]=d-e*n,t[2]=-i*s,t[6]=n,t[10]=i*a}else if("ZYX"===e.order){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=l*s-c,t[8]=e*s+d,t[1]=a*o,t[5]=d*s+e,t[9]=c*s-l,t[2]=-s,t[6]=n*a,t[10]=i*a}else if("YZX"===e.order){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=d-e*o,t[8]=l*o+c,t[1]=o,t[5]=i*r,t[9]=-n*r,t[2]=-s*r,t[6]=c*o+l,t[10]=e-d*o}else if("XZY"===e.order){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=-o,t[8]=s*r,t[1]=e*o+d,t[5]=i*r,t[9]=c*o-l,t[2]=l*o-c,t[6]=n*r,t[10]=d*o+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cr,e,ar)}lookAt(e,t,n){const s=this.elements;return O.subVectors(e,t),0===O.lengthSq()&&(O.z=1),O.normalize(),Y.crossVectors(n,O),0===Y.lengthSq()&&(1===Math.abs(n.z)?O.x+=1e-4:O.z+=1e-4,O.normalize(),Y.crossVectors(n,O)),Y.normalize(),St.crossVectors(O,Y),s[0]=Y.x,s[4]=St.x,s[8]=O.x,s[1]=Y.y,s[5]=St.y,s[9]=O.y,s[2]=Y.z,s[6]=St.z,s[10]=O.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[4],r=n[8],c=n[12],l=n[1],d=n[5],u=n[9],h=n[13],m=n[2],f=n[6],p=n[10],g=n[14],v=n[3],b=n[7],j=n[11],y=n[15],_=s[0],w=s[4],O=s[8],x=s[12],C=s[1],E=s[5],k=s[9],A=s[13],S=s[2],M=s[6],F=s[10],T=s[14],z=s[3],D=s[7],N=s[11],L=s[15];return o[0]=i*_+a*C+r*S+c*z,o[4]=i*w+a*E+r*M+c*D,o[8]=i*O+a*k+r*F+c*N,o[12]=i*x+a*A+r*T+c*L,o[1]=l*_+d*C+u*S+h*z,o[5]=l*w+d*E+u*M+h*D,o[9]=l*O+d*k+u*F+h*N,o[13]=l*x+d*A+u*T+h*L,o[2]=m*_+f*C+p*S+g*z,o[6]=m*w+f*E+p*M+g*D,o[10]=m*O+f*k+p*F+g*N,o[14]=m*x+f*A+p*T+g*L,o[3]=v*_+b*C+j*S+y*z,o[7]=v*w+b*E+j*M+y*D,o[11]=v*O+b*k+j*F+y*N,o[15]=v*x+b*A+j*T+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],i=e[1],a=e[5],r=e[9],c=e[13],l=e[2],d=e[6],u=e[10],h=e[14];return e[3]*(+o*r*d-s*c*d-o*a*u+n*c*u+s*a*h-n*r*h)+e[7]*(+t*r*h-t*c*u+o*i*u-s*i*h+s*c*l-o*r*l)+e[11]*(+t*c*d-t*a*h-o*i*d+n*i*h+o*a*l-n*c*l)+e[15]*(-s*a*l-t*r*d+t*a*u+s*i*d-n*i*u+n*r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],d=e[4],f=e[5],r=e[6],c=e[7],l=e[8],i=e[9],u=e[10],h=e[11],m=e[12],a=e[13],p=e[14],g=e[15],b=i*p*c-a*u*c+a*r*h-f*p*h-i*r*g+f*u*g,j=m*u*c-l*p*c-m*r*h+d*p*h+l*r*g-d*u*g,y=l*a*c-m*i*c+m*f*h-d*a*h-l*f*g+d*i*g,_=m*i*r-l*a*r-m*f*u+d*a*u+l*f*p-d*i*p,w=t*b+n*j+s*y+o*_;if(0===w)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/w;return e[0]=b*v,e[1]=(a*u*o-i*p*o-a*s*h+n*p*h+i*s*g-n*u*g)*v,e[2]=(f*p*o-a*r*o+a*s*c-n*p*c-f*s*g+n*r*g)*v,e[3]=(i*r*o-f*u*o-i*s*c+n*u*c+f*s*h-n*r*h)*v,e[4]=j*v,e[5]=(l*p*o-m*u*o+m*s*h-t*p*h-l*s*g+t*u*g)*v,e[6]=(m*r*o-d*p*o-m*s*c+t*p*c+d*s*g-t*r*g)*v,e[7]=(d*u*o-l*r*o+l*s*c-t*u*c-d*s*h+t*r*h)*v,e[8]=y*v,e[9]=(m*i*o-l*a*o-m*n*h+t*a*h+l*n*g-t*i*g)*v,e[10]=(d*a*o-m*f*o+m*n*c-t*a*c-d*n*g+t*f*g)*v,e[11]=(l*f*o-d*i*o-l*n*c+t*i*c+d*n*h-t*f*h)*v,e[12]=_*v,e[13]=(l*a*s-m*i*s+m*n*u-t*a*u-l*n*p+t*i*p)*v,e[14]=(m*f*s-d*a*s-m*n*r+t*a*r+d*n*p-t*f*p)*v,e[15]=(d*i*s-l*f*s+l*n*r-t*i*r-d*n*u+t*f*u)*v,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),c=1-a,r=e.x,o=e.y,n=e.z,i=c*r,l=c*o;return this.set(i*r+a,i*o-s*n,i*n+s*o,0,i*o+s*n,l*o+a,l*n-s*r,0,i*n-s*o,l*n+s*r,c*n*n+a,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,i){return this.set(1,n,o,0,e,1,i,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,i=t._y,r=t._z,c=t._w,w=o+o,d=i+i,a=r+r,_=o*w,y=o*d,m=o*a,f=i*d,p=i*a,g=r*a,v=c*w,b=c*d,j=c*a,h=n.x,u=n.y,l=n.z;return s[0]=(1-(f+g))*h,s[1]=(y+j)*h,s[2]=(m-b)*h,s[3]=0,s[4]=(y-j)*u,s[5]=(1-(_+g))*u,s[6]=(p+v)*u,s[7]=0,s[8]=(m+b)*l,s[9]=(p-v)*l,s[10]=(1-(_+f))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=xe.set(s[0],s[1],s[2]).length();const c=xe.set(s[4],s[5],s[6]).length(),l=xe.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],F.copy(this);const i=1/o,a=1/c,r=1/l;return F.elements[0]*=i,F.elements[1]*=i,F.elements[2]*=i,F.elements[4]*=a,F.elements[5]*=a,F.elements[6]*=a,F.elements[8]*=r,F.elements[9]*=r,F.elements[10]*=r,t.setFromRotationMatrix(F),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,s,o,i,a=2e3,r=!1){const c=this.elements,u=2*o/(t-e),h=2*o/(n-s),m=(t+e)/(t-e),f=(n+s)/(n-s);let l,d;if(r)l=o/(i-o),d=i*o/(i-o);else if(a===he)l=-(i+o)/(i-o),d=-2*i*o/(i-o);else{if(a!==Nt)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);l=-i/(i-o),d=-i*o/(i-o)}return c[0]=u,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=d,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,i,a=2e3,r=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),m=-(t+e)/(t-e),f=-(n+s)/(n-s);let l,d;if(r)l=1/(i-o),d=i/(i-o);else if(a===he)l=-2/(i-o),d=-(i+o)/(i-o);else{if(a!==Nt)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);l=-1/(i-o),d=-o/(i-o)}return c[0]=u,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=l,c[14]=d,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xe=new e,F=new m,cr=new e(0,0,0),ar=new e(1,1,1),Y=new e,St=new e,O=new e,Do=new m,zo=new Pe;class X{constructor(e=0,t=0,n=0,s=X.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],c=s[4],l=s[8],d=s[1],a=s[5],u=s[9],h=s[2],m=s[6],r=s[10];switch(t){case"XYZ":this._y=Math.asin(o(l,-1,1)),(l<0?-l:l)<.9999999?(this._x=Math.atan2(-u,r),this._z=Math.atan2(-c,i)):(this._x=Math.atan2(m,a),this._z=0);break;case"YXZ":this._x=Math.asin(-o(u,-1,1)),(u<0?-u:u)<.9999999?(this._y=Math.atan2(l,r),this._z=Math.atan2(d,a)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(o(m,-1,1)),(m<0?-m:m)<.9999999?(this._y=Math.atan2(-h,r),this._z=Math.atan2(-c,a)):(this._y=0,this._z=Math.atan2(d,i));break;case"ZYX":this._y=Math.asin(-o(h,-1,1)),(h<0?-h:h)<.9999999?(this._x=Math.atan2(m,r),this._z=Math.atan2(d,i)):(this._x=0,this._z=Math.atan2(-c,a));break;case"YZX":this._z=Math.asin(o(d,-1,1)),(d<0?-d:d)<.9999999?(this._x=Math.atan2(-u,a),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(l,r));break;case"XZY":this._z=Math.asin(-o(c,-1,1)),(c<0?-c:c)<.9999999?(this._x=Math.atan2(m,a),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-u,r),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===n&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],0[0]!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}X.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return 0!==(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}}let sr=0;const Mo=new e,Ne=new Pe,q=new m,Ot=new e,ut=new e,Ja=new e,Qa=new Pe,_o=new e(1,0,0),jo=new e(0,1,0),zs=new e(0,0,1),bo={type:"added"},Xa={type:"removed"},Le={type:"childadded",child:null},Wn={type:"childremoved",child:null};class w extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sr++}),this.uuid=ne(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=w.DEFAULT_UP.clone();const o=new e,t=new X,s=new Pe,i=new e(1,1,1);t._onChange(function(){s.setFromEuler(t,!1)}),s._onChange(function(){t.setFromQuaternion(s,0[0],!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:o},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new m},normalMatrix:{value:new n}}),this.matrix=new m,this.matrixWorld=new m,this.matrixAutoUpdate=w.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=w.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=0[0],this.customDistanceMaterial=0[0],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ne.setFromAxisAngle(e,t),this.quaternion.multiply(Ne),this}rotateOnWorldAxis(e,t){return Ne.setFromAxisAngle(e,t),this.quaternion.premultiply(Ne),this}rotateX(e){return this.rotateOnAxis(_o,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(zs,e)}translateOnAxis(e,t){return Mo.copy(e).applyQuaternion(this.quaternion),this.position.add(Mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_o,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(zs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(q.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ot.copy(e):Ot.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ut.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?q.lookAt(ut,Ot,this.up):q.lookAt(Ot,ut,this.up),this.quaternion.setFromRotationMatrix(q),s&&(q.extractRotation(s.matrixWorld),Ne.setFromRotationMatrix(q),this.quaternion.premultiply(Ne.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bo),Le.child=e,this.dispatchEvent(Le),Le.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const t=this.children.indexOf(e);return-1!==t&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xa),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null),this}removeFromParent(){const e=this.parent;return null!==e&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),q.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),q.multiply(e.parent.matrixWorld)),e.applyMatrix4(q),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bo),Le.child=e,this.dispatchEvent(Le),Le.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const s=this.children[n].getObjectByProperty(e,t);if(0[0]!==s)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,i=s.length;o<i;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ut,e,Ja),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ut,Qa,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(!0===this.matrixWorldAutoUpdate&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(!0===e&&null!==n&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),!0===this.matrixWorldAutoUpdate&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),!0===t){const e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){const i=0[0]===e||"string"==typeof e,n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const t={};function o(t,n){return 0[0]===t[n.uuid]&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),!0===this.castShadow&&(t.castShadow=!0),!0===this.receiveShadow&&(t.receiveShadow=!0),!1===this.visible&&(t.visible=!1),!1===this.frustumCulled&&(t.frustumCulled=!1),0!==this.renderOrder&&(t.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(t.userData=this.userData),t.layers=this.layers.mask,t.matrix=this.matrix.toArray(),t.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(t.matrixAutoUpdate=!1),this.isInstancedMesh&&(t.type="InstancedMesh",t.count=this.count,t.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(t.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(t.type="BatchedMesh",t.perObjectFrustumCulled=this.perObjectFrustumCulled,t.sortObjects=this.sortObjects,t.drawRanges=this._drawRanges,t.reservedRanges=this._reservedRanges,t.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():0[0],boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():0[0]})),t.instanceInfo=this._instanceInfo.map(e=>({...e})),t.availableInstanceIds=this._availableInstanceIds.slice(),t.availableGeometryIds=this._availableGeometryIds.slice(),t.nextIndexStart=this._nextIndexStart,t.nextVertexStart=this._nextVertexStart,t.geometryCount=this._geometryCount,t.maxInstanceCount=this._maxInstanceCount,t.maxVertexCount=this._maxVertexCount,t.maxIndexCount=this._maxIndexCount,t.geometryInitialized=this._geometryInitialized,t.matricesTexture=this._matricesTexture.toJSON(e),t.indirectTexture=this._indirectTexture.toJSON(e),null!==this._colorsTexture&&(t.colorsTexture=this._colorsTexture.toJSON(e)),null!==this.boundingSphere&&(t.boundingSphere=this.boundingSphere.toJSON()),null!==this.boundingBox&&(t.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?t.background=this.background.toJSON():this.background.isTexture&&(t.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(t.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){t.geometry=o(e.geometries,this.geometry);const n=this.geometry.parameters;if(0[0]!==n&&0[0]!==n.shapes){const t=n.shapes;if(Array.isArray(t))for(let n=0,s=t.length;n<s;n++){const i=t[n];o(e.shapes,i)}else o(e.shapes,t)}}if(this.isSkinnedMesh&&(t.bindMode=this.bindMode,t.bindMatrix=this.bindMatrix.toArray(),0[0]!==this.skeleton&&(o(e.skeletons,this.skeleton),t.skeleton=this.skeleton.uuid)),0[0]!==this.material)if(Array.isArray(this.material)){const n=[];for(let t=0,s=this.material.length;t<s;t++)n.push(o(e.materials,this.material[t]));t.material=n}else t.material=o(e.materials,this.material);if(this.children.length>0){t.children=[];for(let n=0;n<this.children.length;n++)t.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){t.animations=[];for(let n=0;n<this.animations.length;n++){const s=this.animations[n];t.animations.push(o(e.animations,s))}}if(i){const t=s(e.geometries),o=s(e.materials),i=s(e.textures),a=s(e.images),r=s(e.shapes),c=s(e.skeletons),l=s(e.animations),d=s(e.nodes);t.length>0&&(n.geometries=t),o.length>0&&(n.materials=o),i.length>0&&(n.textures=i),a.length>0&&(n.images=a),r.length>0&&(n.shapes=r),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),d.length>0&&(n.nodes=d)}return n.object=t,n;function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}}clone(e){return(new this.constructor).copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){const n=e.children[t];this.add(n.clone())}return this}}w.DEFAULT_UP=new e(0,1,0),w.DEFAULT_MATRIX_AUTO_UPDATE=!0,w.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const A=new e,W=new e,Yn=new e,$=new e,He=new e,Be=new e,fo=new e,Jn=new e,es=new e,ts=new e,ns=new u,ss=new u,os=new u;class M{constructor(t=new e,n=new e,s=new e){this.a=t,this.b=n,this.c=s}static getNormal(e,t,n,s){s.subVectors(n,t),A.subVectors(e,t),s.cross(A);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){A.subVectors(s,t),W.subVectors(n,t),Yn.subVectors(e,t);const a=A.dot(A),i=A.dot(W),r=A.dot(Yn),c=W.dot(W),l=W.dot(Yn),d=a*c-i*i;if(0===d)return o.set(0,0,0),null;const u=1/d,h=(c*r-i*l)*u,m=(a*l-i*r)*u;return o.set(1-h-m,m,h)}static containsPoint(e,t,n,s){return null!==this.getBarycoord(e,t,n,s,$)&&$.x>=0&&$.y>=0&&$.x+$.y<=1}static getInterpolation(e,t,n,s,o,i,a,r){return null===this.getBarycoord(e,t,n,s,$)?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(o,$.x),r.addScaledVector(i,$.y),r.addScaledVector(a,$.z),r)}static getInterpolatedAttribute(e,t,n,s,o,i){return ns.setScalar(0),ss.setScalar(0),os.setScalar(0),ns.fromBufferAttribute(e,t),ss.fromBufferAttribute(e,n),os.fromBufferAttribute(e,s),i.setScalar(0),i.addScaledVector(ns,o.x),i.addScaledVector(ss,o.y),i.addScaledVector(os,o.z),i}static isFrontFacing(e,t,n,s){return A.subVectors(n,t),W.subVectors(e,t),A.cross(W).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return A.subVectors(this.c,this.b),W.subVectors(this.a,this.b),.5*A.cross(W).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return M.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return M.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return M.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return M.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return M.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,d=this.b,h=this.c;let u,i;He.subVectors(d,o),Be.subVectors(h,o),Jn.subVectors(e,o);const a=He.dot(Jn),r=Be.dot(Jn);if(a<=0&&r<=0)return t.copy(o);es.subVectors(e,d);const n=He.dot(es),c=Be.dot(es);if(n>=0&&c<=n)return t.copy(d);const m=a*c-n*r;if(m<=0&&a>=0&&n<=0)return u=a/(a-n),t.copy(o).addScaledVector(He,u);ts.subVectors(e,h);const l=He.dot(ts),s=Be.dot(ts);if(s>=0&&l<=s)return t.copy(h);const f=l*r-a*s;if(f<=0&&r>=0&&s<=0)return i=r/(r-s),t.copy(o).addScaledVector(Be,i);const p=n*s-l*c;if(p<=0&&c-n>=0&&l-s>=0)return fo.subVectors(h,d),i=(c-n)/(c-n+(l-s)),t.copy(d).addScaledVector(fo,i);const g=1/(p+f+m);return u=f*g,i=m*g,t.copy(o).addScaledVector(He,u).addScaledVector(Be,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ho={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ee={h:0,s:0,l:0},xt={h:0,s:0,l:0};function ds(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+6*(t-e)*(2/3-n):e}class r{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(0[0]===t&&0[0]===n){const t=e;t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=E){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,a.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=a.workingColorSpace){return this.r=e,this.g=t,this.b=n,a.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=a.workingColorSpace){if(e=(e%(i=1)+i)%i,t=o(t,0,1),n=o(n,0,1),0===t)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ds(o,s,e+1/3),this.g=ds(o,s,e),this.b=ds(o,s,e-1/3)}var i;return a.colorSpaceToWorking(this,s),this}setStyle(e,t=E){function s(t){0[0]!==t&&parseFloat(t)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^)]*)\)/.exec(e)){let o;const a=n[1],i=n[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)%\s*,\s*(\d*\.?\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(3===o)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(6===o)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=E){const n=ho[e.toLowerCase()];return 0[0]!==n?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=K(e.r),this.g=K(e.g),this.b=K(e.b),this}copyLinearToSRGB(e){return this.r=Me(e.r),this.g=Me(e.g),this.b=Me(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=E){return a.workingToColorSpace(v.copy(this),e),65536*Math.round(o(255*v.r,0,255))+256*Math.round(o(255*v.g,0,255))+Math.round(o(255*v.b,0,255))}getHexString(e=E){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=a.workingColorSpace){a.workingToColorSpace(v.copy(this),t);const r=v.r,n=v.g,s=v.b,o=Math.max(r,n,s),c=Math.min(r,n,s);let i,l;const d=(c+o)/2;if(c===o)i=0,l=0;else{const e=o-c;switch(l=d<=.5?e/(o+c):e/(2-o-c),o){case r:i=(n-s)/e+(n<s?6:0);break;case n:i=(s-r)/e+2;break;case s:i=(r-n)/e+4}i/=6}return e.h=i,e.s=l,e.l=d,e}getRGB(e,t=a.workingColorSpace){return a.workingToColorSpace(v.copy(this),t),e.r=v.r,e.g=v.g,e.b=v.b,e}getStyle(e=E){a.workingToColorSpace(v.copy(this),e);const t=v.r,n=v.g,s=v.b;return e!==E?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*s)})`}offsetHSL(e,t,n){return this.getHSL(ee),this.setHSL(ee.h+e,ee.s+t,ee.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ee),e.getHSL(xt);const n=Qn(ee.h,xt.h,t),s=Qn(ee.s,xt.s,t),o=Qn(ee.l,xt.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,o=this.b,t=e.elements;return this.r=t[0]*n+t[3]*s+t[6]*o,this.g=t[1]*n+t[4]*s+t[7]*o,this.b=t[2]*n+t[5]*s+t[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const v=new r;r.NAMES=ho;let Qi=0;class rt extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qi++}),this.uuid=ne(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=fe,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new r(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(0[0]!==e)for(const s in e){const n=e[s];if(0[0]===n){console.warn(`THREE.Material: parameter '${s}' has value of undefined.`);continue}const t=this[s];0[0]!==t?t&&t.isColor?t.set(n):t&&t.isVector3&&n&&n.isVector3?t.copy(n):this[s]=n:console.warn(`THREE.Material: '${s}' is not a property of THREE.${this.type}.`)}}toJSON(e){const n=0[0]===e||"string"==typeof e;n&&(e={textures:{},images:{}});const t={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),0[0]!==this.roughness&&(t.roughness=this.roughness),0[0]!==this.metalness&&(t.metalness=this.metalness),0[0]!==this.sheen&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),0[0]!==this.sheenRoughness&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),0[0]!==this.emissiveIntensity&&1!==this.emissiveIntensity&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),0[0]!==this.specularIntensity&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),0[0]!==this.shininess&&(t.shininess=this.shininess),0[0]!==this.clearcoat&&(t.clearcoat=this.clearcoat),0[0]!==this.clearcoatRoughness&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(t.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(t.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),0[0]!==this.dispersion&&(t.dispersion=this.dispersion),0[0]!==this.iridescence&&(t.iridescence=this.iridescence),0[0]!==this.iridescenceIOR&&(t.iridescenceIOR=this.iridescenceIOR),0[0]!==this.iridescenceThicknessRange&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),0[0]!==this.anisotropy&&(t.anisotropy=this.anisotropy),0[0]!==this.anisotropyRotation&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,0[0]!==this.combine&&(t.combine=this.combine)),0[0]!==this.envMapRotation&&(t.envMapRotation=this.envMapRotation.toArray()),0[0]!==this.envMapIntensity&&(t.envMapIntensity=this.envMapIntensity),0[0]!==this.reflectivity&&(t.reflectivity=this.reflectivity),0[0]!==this.refractionRatio&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),0[0]!==this.transmission&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(e).uuid),0[0]!==this.thickness&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(e).uuid),0[0]!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),0[0]!==this.attenuationColor&&(t.attenuationColor=this.attenuationColor.getHex()),0[0]!==this.size&&(t.size=this.size),null!==this.shadowSide&&(t.shadowSide=this.shadowSide),0[0]!==this.sizeAttenuation&&(t.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(t.blending=this.blending),0!==this.side&&(t.side=this.side),!0===this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),!0===this.transparent&&(t.transparent=!0),204!==this.blendSrc&&(t.blendSrc=this.blendSrc),205!==this.blendDst&&(t.blendDst=this.blendDst),this.blendEquation!==fe&&(t.blendEquation=this.blendEquation),null!==this.blendSrcAlpha&&(t.blendSrcAlpha=this.blendSrcAlpha),null!==this.blendDstAlpha&&(t.blendDstAlpha=this.blendDstAlpha),null!==this.blendEquationAlpha&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),0!==this.blendAlpha&&(t.blendAlpha=this.blendAlpha),3!==this.depthFunc&&(t.depthFunc=this.depthFunc),!1===this.depthTest&&(t.depthTest=this.depthTest),!1===this.depthWrite&&(t.depthWrite=this.depthWrite),!1===this.colorWrite&&(t.colorWrite=this.colorWrite),255!==this.stencilWriteMask&&(t.stencilWriteMask=this.stencilWriteMask),519!==this.stencilFunc&&(t.stencilFunc=this.stencilFunc),0!==this.stencilRef&&(t.stencilRef=this.stencilRef),255!==this.stencilFuncMask&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ue&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Ue&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Ue&&(t.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(t.stencilWrite=this.stencilWrite),0[0]!==this.rotation&&0!==this.rotation&&(t.rotation=this.rotation),!0===this.polygonOffset&&(t.polygonOffset=!0),0!==this.polygonOffsetFactor&&(t.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(t.polygonOffsetUnits=this.polygonOffsetUnits),0[0]!==this.linewidth&&1!==this.linewidth&&(t.linewidth=this.linewidth),0[0]!==this.dashSize&&(t.dashSize=this.dashSize),0[0]!==this.gapSize&&(t.gapSize=this.gapSize),0[0]!==this.scale&&(t.scale=this.scale),!0===this.dithering&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),!0===this.alphaHash&&(t.alphaHash=!0),!0===this.alphaToCoverage&&(t.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(t.premultipliedAlpha=!0),!0===this.forceSinglePass&&(t.forceSinglePass=!0),!0===this.wireframe&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(t.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(t.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(t.flatShading=!0),!1===this.visible&&(t.visible=!1),!1===this.toneMapped&&(t.toneMapped=!1),!1===this.fog&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData),n){const n=s(e.textures),o=s(e.images);n.length>0&&(t.textures=n),o.length>0&&(t.images=o)}return t}clone(){return(new this.constructor).copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(null!==t){const e=t.length;n=new Array(e);for(let s=0;s!==e;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}}class oo extends rt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new r(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const h=new e,mt=new i;let Gi=0;class T{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gi++}),this.name="",this.array=e,this.itemSize=t,this.count=0[0]!==e?e.length/t:0,this.normalized=n,this.usage=As,this.updateRanges=[],this.gpuType=H,this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXY(t,mt.x,mt.y);else if(3===this.itemSize)for(let t=0,n=this.count;t<n;t++)h.fromBufferAttribute(this,t),h.applyMatrix3(e),this.setXYZ(t,h.x,h.y,h.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)h.fromBufferAttribute(this,t),h.applyMatrix4(e),this.setXYZ(t,h.x,h.y,h.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)h.fromBufferAttribute(this,t),h.applyNormalMatrix(e),this.setXYZ(t,h.x,h.y,h.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)h.fromBufferAttribute(this,t),h.transformDirection(e),this.setXYZ(t,h.x,h.y,h.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=D(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=c(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=D(t,this.array)),t}setX(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=D(t,this.array)),t}setY(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=D(t,this.array)),t}setZ(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=D(t,this.array)),t}setW(e,t){return this.normalized&&(t=c(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array),o=c(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),this.usage!==As&&(e.usage=this.usage),e}}class Qs extends T{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Us extends T{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ue extends T{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qi=0;const C=new m,Cs=new w,be=new e,_=new Xe,et=new Xe,g=new e;class ie extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qi++}),this.uuid=ne(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Co(e)?Us:Qs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return 0[0]!==this.attributes[e]}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;0[0]!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(0[0]!==s){const t=(new n).getNormalMatrix(e);s.applyNormalMatrix(t),s.needsUpdate=!0}const o=this.attributes.tangent;return 0[0]!==o&&(o.transformDirection(e),o.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return C.makeRotationFromQuaternion(e),this.applyMatrix4(C),this}rotateX(e){return C.makeRotationX(e),this.applyMatrix4(C),this}rotateY(e){return C.makeRotationY(e),this.applyMatrix4(C),this}rotateZ(e){return C.makeRotationZ(e),this.applyMatrix4(C),this}translate(e,t,n){return C.makeTranslation(e,t,n),this.applyMatrix4(C),this}scale(e,t,n){return C.makeScale(e,t,n),this.applyMatrix4(C),this}lookAt(e){return Cs.lookAt(e),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(be).negate(),this.translate(be.x,be.y,be.z),this}setFromPoints(e){const t=this.getAttribute("position");if(0[0]===t){const t=[];for(let n=0,o=e.length;n<o;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ue(t,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Xe);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new e(-1/0,-1/0,-1/0),new e(1/0,1/0,1/0));if(0[0]!==t){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];_.setFromBufferAttribute(s),this.morphTargetsRelative?(g.addVectors(this.boundingBox.min,_.min),this.boundingBox.expandByPoint(g),g.addVectors(this.boundingBox.max,_.max),this.boundingBox.expandByPoint(g)):(this.boundingBox.expandByPoint(_.min),this.boundingBox.expandByPoint(_.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new ln);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new e,1/0);if(t){const s=this.boundingSphere.center;if(_.setFromBufferAttribute(t),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];et.setFromBufferAttribute(s),this.morphTargetsRelative?(g.addVectors(_.min,et.min),_.expandByPoint(g),g.addVectors(_.max,et.max),_.expandByPoint(g)):(_.expandByPoint(et.min),_.expandByPoint(et.max))}_.getCenter(s);let e=0;for(let n=0,o=t.count;n<o;n++)g.fromBufferAttribute(t,n),e=Math.max(e,s.distanceToSquared(g));if(n)for(let o=0,a=n.length;o<a;o++){const i=n[o],r=this.morphTargetsRelative;for(let n=0,o=i.count;n<o;n++)g.fromBufferAttribute(i,n),r&&(be.fromBufferAttribute(t,n),g.add(be)),e=Math.max(e,s.distanceToSquared(g))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,s=this.attributes;if(null===t||0[0]===s.position||0[0]===s.normal||0[0]===s.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const r=s.position,w=s.normal,j=s.uv;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new T(new Float32Array(4*r.count),4));const x=this.getAttribute("tangent"),l=[],d=[];for(let t=0;t<r.count;t++)l[t]=new e,d[t]=new e;const v=new e,m=new e,h=new e,g=new i,n=new i,a=new i,f=new e,u=new e;function O(e,t,s){v.fromBufferAttribute(r,e),m.fromBufferAttribute(r,t),h.fromBufferAttribute(r,s),g.fromBufferAttribute(j,e),n.fromBufferAttribute(j,t),a.fromBufferAttribute(j,s),m.sub(v),h.sub(v),n.sub(g),a.sub(g);const o=1/(n.x*a.y-a.x*n.y);isFinite(o)&&(f.copy(m).multiplyScalar(a.y).addScaledVector(h,-n.y).multiplyScalar(o),u.copy(h).multiplyScalar(n.x).addScaledVector(m,-a.x).multiplyScalar(o),l[e].add(f),l[t].add(f),l[s].add(f),d[e].add(u),d[t].add(u),d[s].add(u))}let o=this.groups;0===o.length&&(o=[{start:0,count:t.count}]);for(let e=0,i=o.length;e<i;++e){const n=o[e],s=n.start;for(let e=s,o=s+n.count;e<o;e+=3)O(t.getX(e+0),t.getX(e+1),t.getX(e+2))}const c=new e,y=new e,p=new e,_=new e;function b(e){p.fromBufferAttribute(w,e),_.copy(p);const t=l[e];c.copy(t),c.sub(p.multiplyScalar(p.dot(t))).normalize(),y.crossVectors(_,t);const n=y.dot(d[e])<0?-1:1;x.setXYZW(e,c.x,c.y,c.z,n)}for(let e=0,i=o.length;e<i;++e){const n=o[e],s=n.start;for(let e=s,o=s+n.count;e<o;e+=3)b(t.getX(e+0)),b(t.getX(e+1)),b(t.getX(e+2))}}computeVertexNormals(){const n=this.index,t=this.getAttribute("position");if(0[0]!==t){let o=this.getAttribute("normal");if(0[0]===o)o=new T(new Float32Array(3*t.count),3),this.setAttribute("normal",o);else for(let e=0,t=o.count;e<t;e++)o.setXYZ(e,0,0,0);const l=new e,i=new e,d=new e,a=new e,r=new e,c=new e,s=new e,u=new e;if(n)for(let e=0,p=n.count;e<p;e+=3){const h=n.getX(e+0),m=n.getX(e+1),f=n.getX(e+2);l.fromBufferAttribute(t,h),i.fromBufferAttribute(t,m),d.fromBufferAttribute(t,f),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),a.fromBufferAttribute(o,h),r.fromBufferAttribute(o,m),c.fromBufferAttribute(o,f),a.add(s),r.add(s),c.add(s),o.setXYZ(h,a.x,a.y,a.z),o.setXYZ(m,r.x,r.y,r.z),o.setXYZ(f,c.x,c.y,c.z)}else for(let e=0,n=t.count;e<n;e+=3)l.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),d.fromBufferAttribute(t,e+2),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),o.setXYZ(e+0,s.x,s.y,s.z),o.setXYZ(e+1,s.x,s.y,s.z),o.setXYZ(e+2,s.x,s.y,s.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)g.fromBufferAttribute(e,t),g.normalize(),e.setXYZ(t,g.x,g.y,g.z)}toNonIndexed(){function t(e,t){const s=e.array,n=e.itemSize,a=e.normalized,o=new s.constructor(t.length*n);let i=0,r=0;for(let a=0,c=t.length;a<c;a++){i=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*n;for(let e=0;e<n;e++)o[r++]=s[i++]}return new T(o,n,a)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ie,n=this.index.array,s=this.attributes;for(const o in s){const i=t(s[o],n);e.setAttribute(o,i)}const o=this.morphAttributes;for(const s in o){const i=[],a=o[s];for(let e=0,s=a.length;e<s;e++){const o=t(a[e],n);i.push(o)}e.morphAttributes[s]=i}e.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let t=0,s=i.length;t<s;t++){const n=i[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),0[0]!==this.parameters){const t=this.parameters;for(const n in t)0[0]!==t[n]&&(e[n]=t[n]);return e}e.data={attributes:{}};const t=this.index;null!==t&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const t in n){const s=n[t];e.data.attributes[t]=s.toJSON(e.data)}const s={};let o=!1;for(const n in this.morphAttributes){const i=this.morphAttributes[n],t=[];for(let n=0,s=i.length;n<s;n++){const o=i[n];t.push(o.toJSON(e.data))}t.length>0&&(s[n]=t,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(e.data.groups=JSON.parse(JSON.stringify(i)));const a=this.boundingSphere;return null!==a&&(e.data.boundingSphere=a.toJSON()),e}clone(){return(new this.constructor).copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;null!==n&&this.setIndex(n.clone());const s=e.attributes;for(const e in s){const n=s[e];this.setAttribute(e,n.clone(t))}const o=e.morphAttributes;for(const e in o){const n=[],s=o[e];for(let e=0,o=s.length;e<o;e++)n.push(s[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;const i=e.groups;for(let e=0,n=i.length;e<n;e++){const t=i[e];this.addGroup(t.start,t.count,t.materialIndex)}const a=e.boundingBox;null!==a&&(this.boundingBox=a.clone());const r=e.boundingSphere;return null!==r&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ps=new m,me=new hr,Wt=new ln,Ds=new e,Ut=new e,en=new e,kt=new e,Fs=new e,Bt=new e,Is=new e,bt=new e;class P extends w{constructor(e=new ie,t=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=0[0],this.morphTargetInfluences=0[0],this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),0[0]!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),0[0]!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(0[0]!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Bt.set(0,0,0);for(let n=0,r=s.length;n<r;n++){const i=o[n],c=s[n];0!==i&&(Fs.fromBufferAttribute(c,e),a?Bt.addScaledVector(Fs,i):Bt.addScaledVector(Fs.sub(t),i))}t.add(Bt)}return t}raycast(e,t){const n=this.geometry,o=this.material,s=this.matrixWorld;if(0[0]!==o){if(null===n.boundingSphere&&n.computeBoundingSphere(),Wt.copy(n.boundingSphere),Wt.applyMatrix4(s),me.copy(e.ray).recast(e.near),!1===Wt.containsPoint(me.origin)){if(null===me.intersectSphere(Wt,Ds))return;if(me.origin.distanceToSquared(Ds)>(e.far-e.near)**2)return}Ps.copy(s).invert(),me.copy(e.ray).applyMatrix4(Ps),null!==n.boundingBox&&!1===me.intersectsBox(n.boundingBox)||this._computeIntersections(e,t,me)}}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,i=a.index,h=a.attributes.position,c=a.attributes.uv,l=a.attributes.uv1,d=a.attributes.normal,u=a.groups,o=a.drawRange;if(null!==i)if(Array.isArray(r))for(let h=0,m=u.length;h<m;h++){const a=u[h],f=r[a.materialIndex];for(let r=Math.max(a.start,o.start),u=Math.min(i.count,Math.min(a.start+a.count,o.start+o.count));r<u;r+=3)s=vt(this,f,e,n,c,l,d,i.getX(r),i.getX(r+1),i.getX(r+2)),s&&(s.faceIndex=Math.floor(r/3),s.face.materialIndex=a.materialIndex,t.push(s))}else for(let a=Math.max(0,o.start),u=Math.min(i.count,o.start+o.count);a<u;a+=3)s=vt(this,r,e,n,c,l,d,i.getX(a),i.getX(a+1),i.getX(a+2)),s&&(s.faceIndex=Math.floor(a/3),t.push(s));else if(0[0]!==h)if(Array.isArray(r))for(let a=0,m=u.length;a<m;a++){const i=u[a],f=r[i.materialIndex];for(let a=Math.max(i.start,o.start),r=Math.min(h.count,Math.min(i.start+i.count,o.start+o.count));a<r;a+=3)s=vt(this,f,e,n,c,l,d,a,a+1,a+2),s&&(s.faceIndex=Math.floor(a/3),s.face.materialIndex=i.materialIndex,t.push(s))}else for(let i=Math.max(0,o.start),a=Math.min(h.count,o.start+o.count);i<a;i+=3)s=vt(this,r,e,n,c,l,d,i,i+1,i+2),s&&(s.faceIndex=Math.floor(i/3),t.push(s))}}function vt(t,n,s,o,a,r,c,l,d,u){t.getVertexPosition(l,Ut),t.getVertexPosition(d,en),t.getVertexPosition(u,kt);const h=function(e,t,n,s,o,i,a,r){let l;if(l=1===t.side?s.intersectTriangle(a,i,o,!0,r):s.intersectTriangle(o,i,a,0===t.side,r),null===l)return null;bt.copy(r),bt.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(bt);return c<n.near||c>n.far?null:{distance:c,point:bt.clone(),object:e}}(t,n,s,o,Ut,en,kt,Is);if(h){const t=new e;M.getBarycoord(Is,Ut,en,kt,t),a&&(h.uv=M.getInterpolatedAttribute(a,l,d,u,t,new i)),r&&(h.uv1=M.getInterpolatedAttribute(r,l,d,u,t,new i)),c&&(h.normal=M.getInterpolatedAttribute(c,l,d,u,t,new e),h.normal.dot(o.direction)>0&&h.normal.multiplyScalar(-1));const n={a:l,b:d,c:u,normal:new e,materialIndex:0};M.getNormal(Ut,en,kt,n.normal),h.face=n,h.barycoord=t}return h}class Ct extends ie{constructor(t=1,n=1,s=1,o=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:i,depthSegments:a};const f=this;o=Math.floor(o),i=Math.floor(i),a=Math.floor(a);const l=[],u=[],h=[],d=[];let c=0,m=0;function r(t,n,s,o,i,a,r,p,g,v,b){const O=a/g,x=r/v,C=a/2,E=r/2,k=p/2,y=g+1,A=v+1;let w=0,_=0;const j=new e;for(let e=0;e<A;e++){const a=e*x-E;for(let r=0;r<y;r++){const c=r*O-C;j[t]=c*o,j[n]=a*i,j[s]=k,u.push(j.x,j.y,j.z),j[t]=0,j[n]=0,j[s]=p>0?1:-1,h.push(j.x,j.y,j.z),d.push(r/g),d.push(1-e/v),w+=1}}for(let e=0;e<v;e++)for(let t=0;t<g;t++){const o=c+t+y*e,n=c+t+y*(e+1),i=c+(t+1)+y*(e+1),s=c+(t+1)+y*e;l.push(o,n,s),l.push(n,i,s),_+=6}f.addGroup(m,_,b),m+=_,c+=w}r("z","y","x",-1,-1,s,n,t,a,i,0),r("z","y","x",1,-1,s,n,-t,a,i,1),r("x","z","y",1,1,t,s,n,o,a,2),r("x","z","y",1,-1,t,s,-n,o,a,3),r("x","y","z",1,-1,t,n,s,o,i,4),r("x","y","z",-1,-1,t,n,-s,o,i,5),this.setIndex(l),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function De(e){const t={};for(const n in e){t[n]={};for(const o in e[n]){const s=e[n][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][o]=null):t[n][o]=s.clone():Array.isArray(s)?t[n][o]=s.slice():t[n][o]=s}}return t}function j(e){const t={};for(let n=0;n<e.length;n++){const s=De(e[n]);for(const e in s)t[e]=s[e]}return t}function qs(e){const t=e.getRenderTarget();return null===t?e.outputColorSpace:!0===t.isXRRenderTarget?t.texture.colorSpace:a.workingColorSpace}const Di={clone:De,merge:j};class te extends rt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=0[0],this.uniformsNeedUpdate=!1,this.glslVersion=null,0[0]!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=De(e.uniforms),this.uniformsGroups=function(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const n=this.uniforms[s].value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const e in this.extensions)!0===this.extensions[e]&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xs extends w{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new m,this.projectionMatrix=new m,this.projectionMatrixInverse=new m,this.coordinateSystem=he,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}const se=new e,Zs=new i,Js=new i;class k extends Xs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*fs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*vs*this.fov);return.5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*fs*Math.atan(Math.tan(.5*vs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){se.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(se.x,se.y).multiplyScalar(-e/se.z),se.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(se.x,se.y).multiplyScalar(-e/se.z)}getViewSize(e,t){return this.getViewBounds(e,Zs,Js),t.subVectors(Js,Zs)}setViewOffset(e,t,n,s,o,i){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=this.near;let t=i*Math.tan(.5*vs*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const e=this.view;if(null!==this.view&&this.view.enabled){const i=e.fullWidth,a=e.fullHeight;o+=e.offsetX*s/i,t-=e.offsetY*n/a,s*=e.width/i,n*=e.height/a}const a=this.filmOffset;0!==a&&(o+=i*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,i,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fe=-90;class Si extends w{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new k(Fe,1,e,t);s.layers=this.layers,this.add(s);const o=new k(Fe,1,e,t);o.layers=this.layers,this.add(o);const i=new k(Fe,1,e,t);i.layers=this.layers,this.add(i);const a=new k(Fe,1,e,t);a.layers=this.layers,this.add(a);const r=new k(Fe,1,e,t);r.layers=this.layers,this.add(r);const c=new k(Fe,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const a=this.coordinateSystem,r=this.children.concat(),[e,t,n,s,o,i]=r;for(const e of r)this.remove(e);if(a===he)e.up.set(0,1,0),e.lookAt(1,0,0),t.up.set(0,1,0),t.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),i.up.set(0,1,0),i.lookAt(0,0,-1);else{if(a!==Nt)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);e.up.set(0,-1,0),e.lookAt(-1,0,0),t.up.set(0,-1,0),t.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),i.up.set(0,-1,0),i.lookAt(0,0,-1)}for(const e of r)this.add(e),e.updateMatrixWorld()}update(e,t){null===this.parent&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,i,a,r,c,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,i),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,r),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(d,u,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class so extends x{constructor(e=[],t=301,n,s,o,i,a,r,c,l){super(e,t,n,s,o,i,a,r,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ai extends le{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new so(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={tEquirect:{value:null}},i=`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,a=`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,r=new Ct(5,5,5),s=new te({name:"CubemapFromEquirect",uniforms:De(o),vertexShader:i,fragmentShader:a,side:1,blending:0});s.uniforms.tEquirect.value=t;const n=new P(r,s),c=t.minFilter;return t.minFilter===Oe&&(t.minFilter=B),new Si(1,10,this).update(e,n),t.minFilter=c,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(o)}}class At extends w{constructor(){super(),this.isGroup=!0,this.type="Group"}}const si={type:"move"};class dn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new e),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new e),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,c=null;const s=this._targetRay,o=this._grip,r=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(r&&e.hand){c=!0;for(const i of e.hand.values()){const o=t.getJointPose(i,n),s=this._getHandJoint(r,i);null!==o&&(s.matrix.fromArray(o.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,s.jointRadius=o.radius),s.visible=null!==o}const a=r.joints["index-finger-tip"],l=r.joints["thumb-tip"],s=a.position.distanceTo(l.position),o=.02,i=.005;r.inputState.pinching&&s>o+i?(r.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!r.inputState.pinching&&s<=o-i&&(r.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==o&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),null!==a&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));null!==s&&(i=t.getPose(e.targetRaySpace,n),null===i&&null!==a&&(i=a),null!==i&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(si)))}return null!==s&&(s.visible=null!==i),null!==o&&(o.visible=null!==a),null!==r&&(r.visible=null!==c),this}_getHandJoint(e,t){if(0[0]===e.joints[t.jointName]){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ci extends w{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new X,this.environmentIntensity=1,this.environmentRotation=new X,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return null!==this.fog&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),1!==this.environmentIntensity&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xi{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=0[0]!==e?e.length/t:0,this.usage=As,this.updateRanges=[],this.version=0,this.uuid=ne()}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){0[0]===e.arrayBuffers&&(e.arrayBuffers={}),0[0]===this.array.buffer._uuid&&(this.array.buffer._uuid=ne()),0[0]===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(n,this.stride);return t.setUsage(this.usage),t}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return 0[0]===e.arrayBuffers&&(e.arrayBuffers={}),0[0]===this.array.buffer._uuid&&(this.array.buffer._uuid=ne()),0[0]===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const y=new e;class rs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)y.fromBufferAttribute(this,t),y.applyMatrix4(e),this.setXYZ(t,y.x,y.y,y.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)y.fromBufferAttribute(this,t),y.applyNormalMatrix(e),this.setXYZ(t,y.x,y.y,y.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)y.fromBufferAttribute(this,t),y.transformDirection(e),this.setXYZ(t,y.x,y.y,y.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=D(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=c(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=c(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=c(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=c(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=c(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=D(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=D(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=D(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=D(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=c(t,this.array),n=c(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=c(t,this.array),n=c(n,this.array),s=c(s,this.array),o=c(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(0[0]===e){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new T(new this.array.constructor(e),this.itemSize,this.normalized)}return 0[0]===e.interleavedBuffers&&(e.interleavedBuffers={}),0[0]===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(0[0]===e){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return 0[0]===e.interleavedBuffers&&(e.interleavedBuffers={}),0[0]===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class is extends rt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new r(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Se;const ot=new e,ke=new e,Ee=new e,Ce=new i,st=new i,yo=new m,Ht=new e,Ye=new e,Gt=new e,xo=new i,Nn=new i,Eo=new i;class pi extends w{constructor(e=new is){if(super(),this.isSprite=!0,this.type="Sprite",0[0]===Se){Se=new ie;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new xi(t,5);Se.setIndex([0,1,2,0,2,3]),Se.setAttribute("position",new rs(e,3,0,!1)),Se.setAttribute("uv",new rs(e,2,3,!1))}this.geometry=Se,this.material=e,this.center=new i(.5,.5),this.count=1}raycast(e,t){null===e.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ke.setFromMatrixScale(this.matrixWorld),yo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ee.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&ke.multiplyScalar(-Ee.z);const a=this.material.rotation;let n,s;0!==a&&(s=Math.cos(a),n=Math.sin(a));const o=this.center;Ft(Ht.set(-.5,-.5,0),Ee,o,ke,n,s),Ft(Ye.set(.5,-.5,0),Ee,o,ke,n,s),Ft(Gt.set(.5,.5,0),Ee,o,ke,n,s),xo.set(0,0),Nn.set(1,0),Eo.set(1,1);let r=e.ray.intersectTriangle(Ht,Ye,Gt,!1,ot);if(null===r&&(Ft(Ye.set(-.5,.5,0),Ee,o,ke,n,s),Nn.set(0,1),r=e.ray.intersectTriangle(Ht,Gt,Ye,!1,ot),null===r))return;const c=e.ray.origin.distanceTo(ot);c<e.near||c>e.far||t.push({distance:c,point:ot.clone(),uv:M.getInterpolation(ot,Ht,Ye,Gt,xo,Nn,Eo,new i),face:null,object:this})}copy(e,t){return super.copy(e,t),0[0]!==e.center&&this.center.copy(e.center),this.material=e.material,this}}function Ft(e,t,n,s,o,i){Ce.subVectors(e,n).addScalar(.5).multiply(s),0[0]!==o?(st.x=i*Ce.x-o*Ce.y,st.y=o*Ce.x+i*Ce.y):st.copy(Ce),e.copy(t),e.x+=st.x,e.y+=st.y,e.applyMatrix4(yo)}const Tn=new e,fi=new e,ki=new n;class ge{constructor(t=new e(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Tn.subVectors(n,t).cross(fi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Tn),o=this.normal.dot(s);if(0===o)return 0===this.distanceToPoint(e.start)?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/o;return n<0||n>1?null:t.copy(e.start).addScaledVector(s,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ki.getNormalMatrix(e),s=this.coplanarPoint(Tn).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return(new this.constructor).copy(this)}}const pe=new ln,hi=new i(.5,.5),$t=new e;class Lo{constructor(e=new ge,t=new ge,n=new ge,s=new ge,o=new ge,i=new ge){this.planes=[e,t,n,s,o,i]}set(e,t,n,s,o,i){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(i),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const o=this.planes,s=e.elements,y=s[0],v=s[1],d=s[2],c=s[3],f=s[4],m=s[5],l=s[6],r=s[7],p=s[8],g=s[9],u=s[10],a=s[11],b=s[12],j=s[13],h=s[14],i=s[15];if(o[0].setComponents(c-y,r-f,a-p,i-b).normalize(),o[1].setComponents(c+y,r+f,a+p,i+b).normalize(),o[2].setComponents(c+v,r+m,a+g,i+j).normalize(),o[3].setComponents(c-v,r-m,a-g,i-j).normalize(),n)o[4].setComponents(d,l,u,h).normalize(),o[5].setComponents(c-d,r-l,a-u,i-h).normalize();else if(o[4].setComponents(c-d,r-l,a-u,i-h).normalize(),t===he)o[5].setComponents(c+d,r+l,a+u,i+h).normalize();else{if(t!==Nt)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);o[5].setComponents(d,l,u,h).normalize()}return this}intersectsObject(e){if(0[0]!==e.boundingSphere)null===e.boundingSphere&&e.computeBoundingSphere(),pe.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;null===t.boundingSphere&&t.computeBoundingSphere(),pe.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pe)}intersectsSprite(e){pe.center.set(0,0,0);const t=hi.distanceTo(e.center);return pe.radius=.7071067811865476+t,pe.applyMatrix4(e.matrixWorld),this.intersectsSphere(pe)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const n=t[s];if($t.x=n.normal.x>0?e.max.x:e.min.x,$t.y=n.normal.y>0?e.max.y:e.min.y,$t.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint($t)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}class Ro extends x{constructor(e,t,n=1014,s,o,i,a=1003,r=1003,c,l=1026,d=1){if(l!==yt&&l!==lt)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:d},s,o,i,a,r,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return null!==this.compareFunction&&(t.compareFunction=this.compareFunction),t}}class Po extends x{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class On extends ie{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const u=e/2,h=t/2,i=Math.floor(n),a=Math.floor(s),o=i+1,m=a+1,f=e/i,p=t/a,r=[],l=[],d=[],c=[];for(let e=0;e<m;e++){const t=e*p-h;for(let n=0;n<o;n++){const s=n*f-u;l.push(s,-t,0),d.push(0,0,1),c.push(n/i),c.push(1-e/a)}}for(let e=0;e<a;e++)for(let t=0;t<i;t++){const a=t+o*e,n=t+o*(e+1),c=t+1+o*(e+1),s=t+1+o*e;r.push(a,n,s),r.push(n,c,s)}this.setIndex(r),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}class li extends rt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ci extends rt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Lt(e,t){return e&&e.constructor!==t?"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e):e}class zt{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=0[0]!==s?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const s=this.parameterPositions;let t=this._cachedIndex,o=s[t],n=s[t-1];t:{e:{let i;n:{i:if(!(e<o)){for(let i=t+2;;){if(0[0]===o){if(e<n)break i;return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===i)break;if(n=o,o=s[++t],e<o)break e}i=s.length;break n}if(!(e>=n)){const a=s[1];e<a&&(t=2,n=a);for(let i=t-2;;){if(0[0]===n)return this._cachedIndex=0,this.copySampleValue_(0);if(t===i)break;if(o=n,n=s[--t-1],e>=n)break e}i=t,t=0;break n}break t}for(;t<i;){const n=t+i>>>1;e<s[n]?i=n:t=n+1}if(o=s[t],n=s[t-1],0[0]===n)return this._cachedIndex=0,this.copySampleValue_(0);if(0[0]===o)return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,n,o)}return this.interpolate_(t,n,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n;for(let e=0;e!==n;++e)t[e]=s[o+e];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Xo extends zt{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,i=e+1,a=s[o],r=s[i];if(0[0]===a)switch(this.getSettings_().endingStart){case 2401:o=e,a=2*t-n;break;case 2402:o=s.length-2,a=t+s[o]-s[o+1];break;default:o=e,a=n}if(0[0]===r)switch(this.getSettings_().endingEnd){case 2401:i=e,r=2*n-t;break;case 2402:i=1,r=n+s[1]-s[0];break;default:i=e-1,r=t}const c=.5*(n-t),l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(r-n),this._offsetPrev=o*l,this._offsetNext=i*l}interpolate_(e,t,n,s){const h=this.resultBuffer,r=this.sampleValues,d=this.valueSize,u=e*d,m=u-d,p=this._offsetPrev,f=this._offsetNext,i=this._weightPrev,l=this._weightNext,o=(n-t)/(s-t),a=o*o,c=a*o,g=-i*c+2*i*a-i*o,v=(1+i)*c+(-1.5-2*i)*a+(-.5+i)*o+1,b=(-1-l)*c+(1.5+l)*a+.5*o,j=l*c-l*a;for(let e=0;e!==d;++e)h[e]=g*r[p+e]+v*r[m+e]+b*r[u+e]+j*r[f+e];return h}}class ti extends zt{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,r=e*o,l=r-o,c=(n-t)/(s-t),d=1-c;for(let e=0;e!==o;++e)i[e]=a[l+e]*d+a[r+e]*c;return i}}class ei extends zt{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class N{constructor(e,t,n,s){if(0[0]===e)throw new Error("THREE.KeyframeTrack: track name is undefined");if(0[0]===t||0===t.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lt(t,this.TimeBufferType),this.values=Lt(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let t;if(n.toJSON!==this.toJSON)t=n.toJSON(e);else{t={name:e.name,times:Lt(e.times,Array),values:Lt(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(t.interpolation=n)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new ei(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ti(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pt:t=this.InterpolantFactoryMethodDiscrete;break;case Es:t=this.InterpolantFactoryMethodLinear;break;case ks:t=this.InterpolantFactoryMethodSmooth}if(0[0]===t){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(0[0]===this.createInterpolant){if(e===this.DefaultInterpolation)throw new Error(t);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pt;case this.InterpolantFactoryMethodLinear:return Es;case this.InterpolantFactoryMethodSmooth:return ks}}getValueSize(){return this.values.length/this.times.length}shift(e){if(0!==e){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(1!==e){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const o=this.times,i=o.length;let s=0,n=i-1;for(;s!==i&&o[s]<e;)++s;for(;-1!==n&&o[n]>t;)--n;if(++n,0!==s||n!==i){s>=n&&(n=Math.max(n,1),s=n-1);const e=this.getValueSize();this.times=o.slice(s,n),this.values=this.values.slice(s*e,n*e)}return this}validate(){let e=!0;const o=this.getValueSize();o-Math.floor(o)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,t=this.values,a=i.length;0===a&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){const t=i[s];if("number"==typeof t&&isNaN(t)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,t),e=!1;break}if(null!==n&&n>t){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,t,n),e=!1;break}n=t}if(0[0]!==t&&(s=t,ArrayBuffer.isView(s)&&!(s instanceof DataView)))for(let n=0,o=t.length;n!==o;++n){const s=t[n];if(isNaN(s)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,s),e=!1;break}}var s;return e}optimize(){const e=this.times.slice(),s=this.values.slice(),t=this.getValueSize(),i=this.getInterpolation()===ks,o=e.length-1;let n=1;for(let a=1;a<o;++a){let r=!1;const c=e[a];if(c!==e[a+1]&&(1!==a||c!==e[0]))if(i)r=!0;else{const e=a*t,n=e-t,o=e+t;for(let i=0;i!==t;++i){const a=s[e+i];if(a!==s[n+i]||a!==s[o+i]){r=!0;break}}}if(r){if(a!==n){e[n]=e[a];const o=a*t,i=n*t;for(let e=0;e!==t;++e)s[i+e]=s[o+e]}++n}}if(o>0){e[n]=e[o];for(let i=o*t,a=n*t,e=0;e!==t;++e)s[a+e]=s[i+e];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=s.slice(0,n*t)):(this.times=e,this.values=s),this}clone(){const t=this.times.slice(),n=this.values.slice(),e=new(0,this.constructor)(this.name,t,n);return e.createInterpolant=this.createInterpolant,e}}N.prototype.ValueTypeName="",N.prototype.TimeBufferType=Float32Array,N.prototype.ValueBufferType=Float32Array,N.prototype.DefaultInterpolation=Es;class nt extends N{constructor(e,t,n){super(e,t,n)}}nt.prototype.ValueTypeName="bool",nt.prototype.ValueBufferType=Array,nt.prototype.DefaultInterpolation=pt,nt.prototype.InterpolantFactoryMethodLinear=0[0],nt.prototype.InterpolantFactoryMethodSmooth=0[0],class extends N{constructor(e,t,n,s){super(e,t,n,s)}}.prototype.ValueTypeName="color",class extends N{constructor(e,t,n,s){super(e,t,n,s)}}.prototype.ValueTypeName="number";class Qo extends zt{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,i=this.valueSize,c=(n-t)/(s-t);let o=e*i;for(let e=o+i;o!==e;o+=4)Pe.slerpFlat(a,0,r,o-i,r,o,c);return a}}class po extends N{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}}po.prototype.ValueTypeName="quaternion",po.prototype.InterpolantFactoryMethodSmooth=0[0];class Ze extends N{constructor(e,t,n){super(e,t,n)}}Ze.prototype.ValueTypeName="string",Ze.prototype.ValueBufferType=Array,Ze.prototype.DefaultInterpolation=pt,Ze.prototype.InterpolantFactoryMethodLinear=0[0],Ze.prototype.InterpolantFactoryMethodSmooth=0[0],class extends N{constructor(e,t,n,s){super(e,t,n,s)}}.prototype.ValueTypeName="vector",Error,new WeakMap;class Zo extends Xs{constructor(e=-1,t=1,n=1,s=-1,o=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=i,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,i){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let e=o-n,a=o+n,t=i+s,r=i-s;if(null!==this.view&&this.view.enabled){const n=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;e+=n*this.view.offsetX,a=e+n*this.view.width,t-=s*this.view.offsetY,r=t-s*this.view.height}this.projectionMatrix.makeOrthographic(e,a,t,r,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}}new WeakMap;class Jo extends k{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ko{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const hn="\\[\\]\\.:\\/",ni=new RegExp("["+hn+"]","g"),pn="[^"+hn+"]",oi="[^"+hn.replace("\\.","")+"]",ii=new RegExp("^"+/((?:WC+[/:])*)/.source.replace("WC",pn)+/(WCOD+)?/.source.replace("WCOD",oi)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pn)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pn)+"$"),ai=["material","materials","bones","map"];class d{constructor(e,t,n){this.path=t,this.parsedPath=n||d.parseTrackName(t),this.node=d.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new d.Composite(e,t,n):new d(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ni,"")}static parseTrackName(e){const n=ii.exec(e);if(null===n)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const t={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=t.nodeName&&t.nodeName.lastIndexOf(".");if(0[0]!==s&&-1!==s){const e=t.nodeName.substring(s+1);-1!==ai.indexOf(e)&&(t.nodeName=t.nodeName.substring(0,s),t.objectName=e)}if(null===t.propertyName||0===t.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return t}static findNode(e,t){if(0[0]===t||""===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(0[0]!==n)return n}if(e.children){const n=function(e){for(let o=0;o<e.length;o++){const s=e[o];if(s.name===t||s.uuid===t)return s;const i=n(s.children);if(i)return i}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,a=n.propertyName;let s=n.propertyIndex;if(e||(e=d.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let t=n.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let n=0;n<e.length;n++)if(e[n].name===t){t=n;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(0[0]===e[i])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(0[0]!==t){if(0[0]===e[t])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[t]}}const t=e[a];if(0[0]===t){const t=n.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+t+"."+a+" but it wasn't found.",e)}let r=this.Versioning.None;this.targetObject=e,!0===e.isMaterial?r=this.Versioning.NeedsUpdate:!0===e.isObject3D&&(r=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(0[0]!==s){if("morphTargetInfluences"===a){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);0[0]!==e.morphTargetDictionary[s]&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=t,this.propertyIndex=s}else 0[0]!==t.fromArray&&0[0]!==t.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=t):Array.isArray(t)?(o=this.BindingType.EntireArray,this.resolvedProperty=t):this.propertyName=a;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}function Bo(e,t,n,s){const o=function(e){switch(e){case Z:case 1010:return{byteLength:1,components:1};case tt:case 1011:case Ke:return{byteLength:2,components:1};case Gn:case Xn:return{byteLength:2,components:4};case Te:case xn:case H:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}(s);switch(n){case 1021:return e*t;case 1028:case ls:return e*t/o.components*o.byteLength;case 1030:case ws:return e*t*2/o.components*o.byteLength;case 1022:return e*t*3/o.components*o.byteLength;case z:case Ss:return e*t*4/o.components*o.byteLength;case wt:case Mt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Jt:case Qt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case an:case wn:return Math.max(e,16)*Math.max(t,8)/4;case sn:case vn:return Math.max(e,8)*Math.max(t,8)/2;case Cn:case En:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kn:case Sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Fn:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case zn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ln:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Rn:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Pn:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Hn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Bn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case nn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Un:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case qn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Zn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case hs:case bs:case js:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ys:case _s:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Os:case xs:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Io(){let e=null,t=!1,n=null,s=null;function o(t,i){n(t,i),s=e.requestAnimationFrame(o)}return{start:function(){!0!==t&&null!==n&&(s=e.requestAnimationFrame(o),t=!0)},stop:function(){e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function di(e){const t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);const s=t.get(n);s&&(e.deleteBuffer(s.buffer),t.delete(n))},update:function(n,s){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){const e=t.get(n);return 0[0]}const o=t.get(n);if(0[0]===o)t.set(n,function(t,n){const s=t.array,a=t.usage,r=s.byteLength,i=e.createBuffer();let o;if(e.bindBuffer(n,i),e.bufferData(n,s,a),t.onUploadCallback(),s instanceof Float32Array)o=e.FLOAT;else if("undefined"!=typeof Float16Array&&s instanceof Float16Array)o=e.HALF_FLOAT;else if(s instanceof Uint16Array)o=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(s instanceof Int16Array)o=e.SHORT;else if(s instanceof Uint32Array)o=e.UNSIGNED_INT;else if(s instanceof Int32Array)o=e.INT;else if(s instanceof Int8Array)o=e.BYTE;else if(s instanceof Uint8Array)o=e.UNSIGNED_BYTE;else{if(!(s instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);o=e.UNSIGNED_BYTE}return{buffer:i,type:o,bytesPerElement:s.BYTES_PER_ELEMENT,version:t.version,size:r}}(n,s));else if(o.version<n.version){if(o.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");!function(t,n,s){const i=n.array,o=n.updateRanges;if(e.bindBuffer(s,t),0===o.length)e.bufferSubData(s,0,i);else{o.sort((e,t)=>e.start-t.start);let t=0;for(let s=1;s<o.length;s++){const e=o[t],n=o[s];n.start<=e.start+e.count+1?e.count=Math.max(e.count,n.start+n.count-e.start):(++t,o[t]=n)}o.length=t+1;for(let t=0,a=o.length;t<a;t++){const n=o[t];e.bufferSubData(s,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}(o.buffer,n,s),o.version=n.version}}}}d.Composite=class{constructor(e,t,n){const s=n||d.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const s=this._targetGroup.nCachedObjects_,n=this._bindings[s];0[0]!==n&&n.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},d.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},d.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},d.prototype.GetterByBindingType=[d.prototype._getValue_direct,d.prototype._getValue_array,d.prototype._getValue_arrayElement,d.prototype._getValue_toArray],d.prototype.SetterByBindingTypeAndVersioning=[[d.prototype._setValue_direct,d.prototype._setValue_direct_setNeedsUpdate,d.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[d.prototype._setValue_array,d.prototype._setValue_array_setNeedsUpdate,d.prototype._setValue_array_setMatrixWorldNeedsUpdate],[d.prototype._setValue_arrayElement,d.prototype._setValue_arrayElement_setNeedsUpdate,d.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[d.prototype._setValue_fromArray,d.prototype._setValue_fromArray_setNeedsUpdate,d.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],new Float32Array(1),"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:An}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=An);const s={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},t={common:{diffuse:{value:new r(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new n},alphaMap:{value:null},alphaMapTransform:{value:new n},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new n}},envmap:{envMap:{value:null},envMapRotation:{value:new n},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new n}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new n}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new n},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new n},normalScale:{value:new i(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new n},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new n}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new n}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new n}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new r(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new r(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new n},alphaTest:{value:0},uvTransform:{value:new n}},sprite:{diffuse:{value:new r(16777215)},opacity:{value:1},center:{value:new i(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new n},alphaMap:{value:null},alphaMapTransform:{value:new n},alphaTest:{value:0}}},L={basic:{uniforms:j([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.fog]),vertexShader:s.meshbasic_vert,fragmentShader:s.meshbasic_frag},lambert:{uniforms:j([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.fog,t.lights,{emissive:{value:new r(0)}}]),vertexShader:s.meshlambert_vert,fragmentShader:s.meshlambert_frag},phong:{uniforms:j([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.fog,t.lights,{emissive:{value:new r(0)},specular:{value:new r(1118481)},shininess:{value:30}}]),vertexShader:s.meshphong_vert,fragmentShader:s.meshphong_frag},standard:{uniforms:j([t.common,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.roughnessmap,t.metalnessmap,t.fog,t.lights,{emissive:{value:new r(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:s.meshphysical_vert,fragmentShader:s.meshphysical_frag},toon:{uniforms:j([t.common,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.gradientmap,t.fog,t.lights,{emissive:{value:new r(0)}}]),vertexShader:s.meshtoon_vert,fragmentShader:s.meshtoon_frag},matcap:{uniforms:j([t.common,t.bumpmap,t.normalmap,t.displacementmap,t.fog,{matcap:{value:null}}]),vertexShader:s.meshmatcap_vert,fragmentShader:s.meshmatcap_frag},points:{uniforms:j([t.points,t.fog]),vertexShader:s.points_vert,fragmentShader:s.points_frag},dashed:{uniforms:j([t.common,t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:s.linedashed_vert,fragmentShader:s.linedashed_frag},depth:{uniforms:j([t.common,t.displacementmap]),vertexShader:s.depth_vert,fragmentShader:s.depth_frag},normal:{uniforms:j([t.common,t.bumpmap,t.normalmap,t.displacementmap,{opacity:{value:1}}]),vertexShader:s.meshnormal_vert,fragmentShader:s.meshnormal_frag},sprite:{uniforms:j([t.sprite,t.fog]),vertexShader:s.sprite_vert,fragmentShader:s.sprite_frag},background:{uniforms:{uvTransform:{value:new n},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:s.background_vert,fragmentShader:s.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new n}},vertexShader:s.backgroundCube_vert,fragmentShader:s.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:s.cube_vert,fragmentShader:s.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:s.equirect_vert,fragmentShader:s.equirect_frag},distanceRGBA:{uniforms:j([t.common,t.displacementmap,{referencePosition:{value:new e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:s.distanceRGBA_vert,fragmentShader:s.distanceRGBA_frag},shadow:{uniforms:j([t.lights,t.fog,{color:{value:new r(0)},opacity:{value:1}}]),vertexShader:s.shadow_vert,fragmentShader:s.shadow_frag}};L.physical={uniforms:j([L.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new n},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new n},clearcoatNormalScale:{value:new i(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new n},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new n},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new n},sheen:{value:0},sheenColor:{value:new r(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new n},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new n},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new n},transmissionSamplerSize:{value:new i},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new n},attenuationDistance:{value:0},attenuationColor:{value:new r(0)},specularColor:{value:new r(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new n},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new n},anisotropyVector:{value:new i},anisotropyMap:{value:null},anisotropyMapTransform:{value:new n}}]),vertexShader:s.meshphysical_vert,fragmentShader:s.meshphysical_frag};const Xt={r:0,b:0,g:0},ae=new X,gi=new m;function vi(e,t,n,s,o,i,c){const m=new r(0);let u,d,h=!0===i?0:1,f=null,p=0,g=null;function b(e){let s=!0===e.isScene?e.background:null;return s&&s.isTexture&&(s=(e.backgroundBlurriness>0?n:t).get(s)),s}function v(t,n){t.getRGB(Xt,qs(e)),s.buffers.color.setClear(Xt.r,Xt.g,Xt.b,n,c)}return{getClearColor:function(){return m},setClearColor:function(e,t=1){m.set(e),h=t,v(m,h)},getClearAlpha:function(){return h},setClearAlpha:function(e){h=e,v(m,h)},render:function(t){let o=!1;const n=b(t);null===n?v(m,h):n&&n.isColor&&(v(n,1),o=!0);const i=e.xr.getEnvironmentBlendMode();"additive"===i?s.buffers.color.setClear(0,0,0,1,c):"alpha-blend"===i&&s.buffers.color.setClear(0,0,0,0,c),(e.autoClear||o)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))},addToRenderList:function(t,n){const s=b(n);s&&(s.isCubeTexture||s.mapping===Rt)?(0[0]===d&&(d=new P(new Ct(1,1,1),new te({name:"BackgroundCubeMaterial",uniforms:De(L.backgroundCube.uniforms),vertexShader:L.backgroundCube.vertexShader,fragmentShader:L.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(d)),ae.copy(n.backgroundRotation),ae.x*=-1,ae.y*=-1,ae.z*=-1,s.isCubeTexture&&!1===s.isRenderTargetTexture&&(ae.y*=-1,ae.z*=-1),d.material.uniforms.envMap.value=s,d.material.uniforms.flipEnvMap.value=s.isCubeTexture&&!1===s.isRenderTargetTexture?-1:1,d.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(gi.makeRotationFromEuler(ae)),d.material.toneMapped=a.getTransfer(s.colorSpace)!==l,f===s&&p===s.version&&g===e.toneMapping||(d.material.needsUpdate=!0,f=s,p=s.version,g=e.toneMapping),d.layers.enableAll(),t.unshift(d,d.geometry,d.material,0,0,null)):s&&s.isTexture&&(0[0]===u&&(u=new P(new On(2,2),new te({name:"BackgroundMaterial",uniforms:De(L.background.uniforms),vertexShader:L.background.vertexShader,fragmentShader:L.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(u)),u.material.uniforms.t2D.value=s,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.toneMapped=a.getTransfer(s.colorSpace)!==l,!0===s.matrixAutoUpdate&&s.updateMatrix(),u.material.uniforms.uvTransform.value.copy(s.matrix),f===s&&p===s.version&&g===e.toneMapping||(u.material.needsUpdate=!0,f=s,p=s.version,g=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null))},dispose:function(){0[0]!==d&&(d.geometry.dispose(),d.material.dispose(),d=0[0]),0[0]!==u&&(u.geometry.dispose(),u.material.dispose(),u=0[0])}}}function bi(e,t){const g=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},o=d(null);let n=o,a=!1;function l(t){return e.bindVertexArray(t)}function i(t){return e.deleteVertexArray(t)}function d(e){const t=[],n=[],s=[];for(let e=0;e<g;e++)t[e]=0,n[e]=0,s[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:s,object:e,attributes:{},index:null}}function u(){const e=n.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function r(e){c(e,0)}function c(t,s){const a=n.newAttributes,o=n.enabledAttributes,i=n.attributeDivisors;a[t]=1,0===o[t]&&(e.enableVertexAttribArray(t),o[t]=1),i[t]!==s&&(e.vertexAttribDivisor(t,s),i[t]=s)}function h(){const s=n.newAttributes,t=n.enabledAttributes;for(let n=0,o=t.length;n<o;n++)t[n]!==s[n]&&(e.disableVertexAttribArray(n),t[n]=0)}function m(t,n,s,o,i,a,r){!0===r?e.vertexAttribIPointer(t,n,s,i,a):e.vertexAttribPointer(t,n,s,o,i,a)}function f(){p(),a=!0,n!==o&&(n=o,l(n.object))}function p(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:function(o,i,f,p,g){let v=!1;const b=function(t,n,o){const c=!0===o.wireframe;let i=s[t.id];0[0]===i&&(i={},s[t.id]=i);let a=i[n.id];0[0]===a&&(a={},i[n.id]=a);let r=a[c];return 0[0]===r&&(r=d(e.createVertexArray()),a[c]=r),r}(p,f,i);n!==b&&(n=b,l(n.object)),v=function(e,t,s,o){const r=n.attributes,c=t.attributes;let i=0;const a=s.getAttributes();for(const t in a)if(a[t].location>=0){const s=r[t];let n=c[t];if(0[0]===n&&("instanceMatrix"===t&&e.instanceMatrix&&(n=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(n=e.instanceColor)),0[0]===s)return!0;if(s.attribute!==n)return!0;if(n&&s.data!==n.data)return!0;i++}return n.attributesNum!==i||n.index!==o}(o,p,f,g),v&&function(e,t,s,o){const i={},c=t.attributes;let a=0;const r=s.getAttributes();for(const t in r)if(r[t].location>=0){let n=c[t];0[0]===n&&("instanceMatrix"===t&&e.instanceMatrix&&(n=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(n=e.instanceColor));const s={};s.attribute=n,n&&n.data&&(s.data=n.data),i[t]=s,a++}n.attributes=i,n.attributesNum=a,n.index=o}(o,p,f,g),null!==g&&t.update(g,e.ELEMENT_ARRAY_BUFFER),(v||a)&&(a=!1,function(n,s,o,i){u();const d=i.attributes,a=o.getAttributes(),l=s.defaultAttributeValues;for(const o in a){const s=a[o];if(s.location>=0){let a=d[o];if(0[0]===a&&("instanceMatrix"===o&&n.instanceMatrix&&(a=n.instanceMatrix),"instanceColor"===o&&n.instanceColor&&(a=n.instanceColor)),0[0]!==a){const h=a.normalized,o=a.itemSize,l=t.get(a);if(0[0]===l)continue;const f=l.buffer,d=l.type,u=l.bytesPerElement,p=d===e.INT||d===e.UNSIGNED_INT||a.gpuType===xn;if(a.isInterleavedBufferAttribute){const t=a.data,l=t.stride,g=a.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<s.locationSize;e++)c(s.location+e,t.meshPerAttribute);!0!==n.isInstancedMesh&&0[0]===i._maxInstanceCount&&(i._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<s.locationSize;e++)r(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<s.locationSize;e++)m(s.location+e,o/s.locationSize,d,h,l*u,(g+o/s.locationSize*e)*u,p)}else{if(a.isInstancedBufferAttribute){for(let e=0;e<s.locationSize;e++)c(s.location+e,a.meshPerAttribute);!0!==n.isInstancedMesh&&0[0]===i._maxInstanceCount&&(i._maxInstanceCount=a.meshPerAttribute*a.count)}else for(let e=0;e<s.locationSize;e++)r(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<s.locationSize;e++)m(s.location+e,o/s.locationSize,d,h,o*u,o/s.locationSize*e*u,p)}}else if(0[0]!==l){const t=l[o];if(0[0]!==t)switch(t.length){case 2:e.vertexAttrib2fv(s.location,t);break;case 3:e.vertexAttrib3fv(s.location,t);break;case 4:e.vertexAttrib4fv(s.location,t);break;default:e.vertexAttrib1fv(s.location,t)}}}}h()}(o,i,f,p),null!==g&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(g).buffer))},reset:f,resetDefaultState:p,dispose:function(){f();for(const t in s){const e=s[t];for(const n in e){const t=e[n];for(const e in t)i(t[e].object),delete t[e];delete e[n]}delete s[t]}},releaseStatesOfGeometry:function(e){if(0[0]===s[e.id])return;const t=s[e.id];for(const n in t){const e=t[n];for(const t in e)i(e[t].object),delete e[t];delete t[n]}delete s[e.id]},releaseStatesOfProgram:function(e){for(const o in s){const t=s[o];if(0[0]===t[e.id])continue;const n=t[e.id];for(const e in n)i(n[e].object),delete n[e];delete t[e.id]}},initAttributes:u,enableAttribute:r,disableUnusedAttributes:h}}function ji(e,t,n){let s;function o(t,o,i){0!==i&&(e.drawArraysInstanced(s,t,o,i),n.update(o,s,i))}this.setMode=function(e){s=e},this.render=function(t,o){e.drawArrays(s,t,o),n.update(o,s,1)},this.renderInstances=o,this.renderMultiDraw=function(e,o,i){if(0===i)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,e,0,o,0,i);let a=0;for(let e=0;e<i;e++)a+=o[e];n.update(a,s,1)},this.renderMultiDrawInstances=function(e,i,a,r){if(0===a)return;const c=t.get("WEBGL_multi_draw");if(null===c)for(let t=0;t<e.length;t++)o(e[t],i[t],r[t]);else{c.multiDrawArraysInstancedWEBGL(s,e,0,i,0,r,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*r[e];n.update(t,s,1)}}}function yi(e,t,n,s){let o;function r(t){if("highp"===t){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let i=0[0]!==n.precision?n.precision:"highp";const a=r(i);a!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",a,"instead."),i=a);const l=!0===n.logarithmicDepthBuffer,d=!0===n.reversedDepthBuffer&&t.has("EXT_clip_control"),u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),c=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(0[0]!==o)return o;if(!0===t.has("EXT_texture_filter_anisotropic")){const n=t.get("EXT_texture_filter_anisotropic");o=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o},getMaxPrecision:r,textureFormatReadable:function(t){return t===z||s.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(n){const o=n===Ke&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(n!==Z&&s.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==H&&!o)},precision:i,logarithmicDepthBuffer:l,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:c,maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),maxCubemapSize:e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:e.getParameter(e.MAX_VERTEX_ATTRIBS),maxVertexUniforms:e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:e.getParameter(e.MAX_VARYING_VECTORS),maxFragmentUniforms:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:c>0,maxSamples:e.getParameter(e.MAX_SAMPLES)}}function _i(e){const i=this;let a=null,s=0,c=!1,o=!1;const l=new ge,d=new n,t={value:null,needsUpdate:!1};function r(e,n,s,o){const r=null!==e?e.length:0;let a=null;if(0!==r){if(a=t.value,!0!==o||null===a){const t=s+4*r,o=n.matrixWorldInverse;d.getNormalMatrix(o),(null===a||a.length<t)&&(a=new Float32Array(t));for(let t=0,n=s;t!==r;++t,n+=4)l.copy(e[t]).applyMatrix4(o,d),l.normal.toArray(a,n),a[n+3]=l.constant}t.value=a,t.needsUpdate=!0}return i.numPlanes=r,i.numIntersection=0,a}this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){const n=0!==e.length||t||0!==s||c;return c=t,s=e.length,n},this.beginShadows=function(){o=!0,r(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(e,t){a=r(e,t,0)},this.setState=function(n,l,d){const u=n.clippingPlanes,m=n.clipIntersection,f=n.clipShadows,h=e.get(n);if(!c||null===u||0===u.length||o&&!f)o?r(null):(t.value!==a&&(t.value=a,t.needsUpdate=s>0),i.numPlanes=s,i.numIntersection=0);else{const n=o?0:s,i=4*n;let e=h.clippingState||null;t.value=e,e=r(u,l,i,d);for(let t=0;t!==i;++t)e[t]=a[t];h.clippingState=e,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=n}}}function wi(e){let t=new WeakMap;function n(e,t){return 303===t?e.mapping=it:304===t&&(e.mapping=Ae),e}function s(e){const n=e.target;n.removeEventListener("dispose",s);const o=t.get(n);0[0]!==o&&(t.delete(n),o.dispose())}return{get:function(o){if(o&&o.isTexture){const i=o.mapping;if(303===i||304===i){if(t.has(o))return n(t.get(o).texture,o.mapping);{const i=o.image;if(i&&i.height>0){const a=new Ai(i.height);return a.fromEquirectangularTexture(e,o),t.set(o,a),o.addEventListener("dispose",s),n(a.texture,o.mapping)}return null}}}return o},dispose:function(){t=new WeakMap}}}const uo=[.125,.215,.35,.446,.526,.582],cs=new Zo,co=new r;let us=null,ms=0,ps=0,gs=!1;const ve=(1+Math.sqrt(5))/2,ze=1/ve,Gs=[new e(-ve,ze,0),new e(ve,ze,0),new e(-ze,0,ve),new e(ze,0,ve),new e(0,ve,-ze),new e(0,ve,ze),new e(-1,1,-1),new e(1,1,-1),new e(-1,1,1),new e(1,1,1)],zi=new e;class Ys{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,o={}){const{size:a=256,position:r=zi}=o;us=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,s,i,r),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=Bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=Hs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(us,ms,ps),this._renderer.xr.enabled=gs,e.scissorTest=!1,Dt(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===it||e.mapping===Ae?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),us=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:B,minFilter:B,generateMipmaps:!1,type:Ke,format:z,colorSpace:Ve,depthBuffer:!1},o=Ks(t,n,s);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=Ks(t,n,s);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(e){const n=[],s=[],o=[];let t=e;const i=e-4+1+uo.length;for(let l=0;l<i;l++){const m=2**t;s.push(m);let g=1/m;l>e-4?g=uo[l-e+4-1]:0===l&&(g=0),o.push(g);const v=1/(m-2),r=-v,c=1+v,_=[r,r,c,r,c,c,r,r,c,c,r,c],u=6,a=6,h=3,f=2,p=1,b=new Float32Array(h*a*u),j=new Float32Array(f*a*u),y=new Float32Array(p*a*u);for(let e=0;e<u;e++){const t=e%3*2/3-1,n=e>2?0:-1,s=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];b.set(s,h*a*e),j.set(_,f*a*e);const o=[e,e,e,e,e,e];y.set(o,p*a*e)}const d=new ie;d.setAttribute("position",new T(b,h)),d.setAttribute("uv",new T(j,f)),d.setAttribute("faceIndex",new T(y,p)),n.push(d),t>4&&t--}return{lodPlanes:n,sizeLods:s,sigmas:o}}(o),this._blurMaterial=function(t,n,s){const o=new Float32Array(20),i=new e(0,1,0);return new te({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/s,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`,fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(o,t,n))}return o}_compileMaterial(e){const t=new P(this._lodPlanes[0],e);this._renderer.compile(t,cs)}_sceneToCubeUV(e,t,n,s,o){const a=new k(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],i=this._renderer,m=i.autoClear,f=i.toneMapping;i.getClearColor(co),i.toneMapping=0,i.autoClear=!1,i.state.buffers.depth.getReversed()&&(i.setRenderTarget(s),i.clearDepth(),i.setRenderTarget(null));const d=new oo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new P(new Ct,d);let h=!1;const r=e.background;r?r.isColor&&(d.color.copy(r),e.background=null,h=!0):(d.color.copy(co),h=!0);for(let t=0;t<6;t++){const r=t%3;0===r?(a.up.set(0,c[t],0),a.position.set(o.x,o.y,o.z),a.lookAt(o.x+l[t],o.y,o.z)):1===r?(a.up.set(0,0,c[t]),a.position.set(o.x,o.y,o.z),a.lookAt(o.x,o.y+l[t],o.z)):(a.up.set(0,c[t],0),a.position.set(o.x,o.y,o.z),a.lookAt(o.x,o.y,o.z+l[t]));const n=this._cubeSize;Dt(s,r*n,t>2?n:0,n,n),i.setRenderTarget(s),h&&i.render(u,a),i.render(e,a)}u.geometry.dispose(),u.material.dispose(),i.toneMapping=f,i.autoClear=m,e.background=r}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===it||e.mapping===Ae;s?(null===this._cubemapMaterial&&(this._cubemapMaterial=Bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=Hs());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new P(this._lodPlanes[0],o);o.uniforms.envMap.value=e;const i=this._cubeSize;Dt(t,0,0,3*i,2*i),n.setRenderTarget(t),n.render(a,cs)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let t=1;t<n;t++){const s=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),o=Gs[(n-t-1)%Gs.length];this._blur(e,t-1,t,s,o)}t.autoClear=s}_blur(e,t,n,s,o){const i=this._pingPongRenderTarget;this._halfBlur(e,i,t,n,s,"latitudinal",o),this._halfBlur(i,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,i,a){const m=this._renderer,f=this._blurMaterial;"latitudinal"!==i&&"longitudinal"!==i&&console.error("blur direction must be either latitudinal or longitudinal!");const v=new P(this._lodPlanes[s],f),r=f.uniforms,b=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*b):2*Math.PI/39,g=o/p,l=isFinite(o)?1+Math.floor(3*g):20;l>20&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${l} samples when the maximum is set to 20`);const c=[];let u=0;for(let e=0;e<20;++e){const n=e/g,t=Math.exp(-n*n/2);c.push(t),0===e?u+=t:e<l&&(u+=2*t)}for(let e=0;e<c.length;e++)c[e]=c[e]/u;r.envMap.value=e.texture,r.samples.value=l,r.weights.value=c,r.latitudinal.value="latitudinal"===i,a&&(r.poleAxis.value=a);const{_lodMax:h}=this;r.dTheta.value=p,r.mipInt.value=h-n;const d=this._sizeLods[s];Dt(t,3*d*(s>h-4?s-h+4:0),4*(this._cubeSize-d),3*d,2*d),m.setRenderTarget(t),m.render(v,cs)}}function Ks(e,t,n){const s=new le(e,t,n);return s.texture.mapping=Rt,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dt(e,t,n,s,o){e.viewport.set(t,n,s,o),e.scissor.set(t,n,s,o)}function Hs(){return new te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`,fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bs(){return new te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`,fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hi(e){let n=new WeakMap,t=null;function s(e){const t=e.target;t.removeEventListener("dispose",s);const o=n.get(t);0[0]!==o&&(n.delete(t),o.dispose())}return{get:function(o){if(o&&o.isTexture){const i=o.mapping,a=303===i||304===i,r=i===it||i===Ae;if(a||r){let i=n.get(o);const c=0[0]!==i?i.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return null===t&&(t=new Ys(e)),i=a?t.fromEquirectangular(o,i):t.fromCubemap(o,i),i.texture.pmremVersion=o.pmremVersion,n.set(o,i),i.texture;if(0[0]!==i)return i.texture;{const c=o.image;return a&&c&&c.height>0||r&&c&&function(e){let t=0;for(let n=0;n<6;n++)0[0]!==e[n]&&t++;return 6===t}(c)?(null===t&&(t=new Ys(e)),i=a?t.fromEquirectangular(o):t.fromCubemap(o),i.texture.pmremVersion=o.pmremVersion,n.set(o,i),o.addEventListener("dispose",s),i.texture):null}}}return o},dispose:function(){n=new WeakMap,null!==t&&(t.dispose(),t=null)}}}function Ii(e){const n={};function t(t){if(0[0]!==n[t])return n[t];let s;switch(t){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(t)}return n[t]=s,s}return{has:function(e){return null!==t(e)},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(e){const n=t(e);return null===n&&ct("THREE.WebGLRenderer: "+e+" extension not supported."),n}}}function Bi(e,t,n,s){const i={},o=new WeakMap;function a(e){const r=e.target;null!==r.index&&t.remove(r.index);for(const e in r.attributes)t.remove(r.attributes[e]);r.removeEventListener("dispose",a),delete i[r.id];const c=o.get(r);c&&(t.remove(c),o.delete(r)),s.releaseStatesOfGeometry(r),!0===r.isInstancedBufferGeometry&&delete r._maxInstanceCount,n.memory.geometries--}function r(e){const n=[],s=e.index,i=e.attributes.position;let a=0;if(null!==s){const e=s.array;a=s.version;for(let t=0,a=e.length;t<a;t+=3){const s=e[t+0],o=e[t+1],i=e[t+2];n.push(s,o,o,i,i,s)}}else{if(0[0]===i)return;{const e=i.array;a=i.version;for(let t=0,a=e.length/3-1;t<a;t+=3){const s=t+0,o=t+1,i=t+2;n.push(s,o,o,i,i,s)}}}const r=new(Co(n)?Us:Qs)(n,1);r.version=a;const c=o.get(e);c&&t.remove(c),o.set(e,r)}return{get:function(e,t){return!0===i[t.id]||(t.addEventListener("dispose",a),i[t.id]=!0,n.memory.geometries++),t},update:function(n){const s=n.attributes;for(const n in s)t.update(s[n],e.ARRAY_BUFFER)},getWireframeAttribute:function(e){const t=o.get(e);if(t){const n=e.index;null!==n&&t.version<n.version&&r(e)}else r(e);return o.get(e)}}}function Vi(e,t,n){let s,o,i;function a(t,a,r){0!==r&&(e.drawElementsInstanced(s,a,o,t*i,r),n.update(a,s,r))}this.setMode=function(e){s=e},this.setIndex=function(e){o=e.type,i=e.bytesPerElement},this.render=function(t,a){e.drawElements(s,a,o,t*i),n.update(a,s,1)},this.renderInstances=a,this.renderMultiDraw=function(e,i,a){if(0===a)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,i,0,o,e,0,a);let r=0;for(let e=0;e<a;e++)r+=i[e];n.update(r,s,1)},this.renderMultiDrawInstances=function(e,r,c,l){if(0===c)return;const d=t.get("WEBGL_multi_draw");if(null===d)for(let t=0;t<e.length;t++)a(e[t]/i,r[t],l[t]);else{d.multiDrawElementsInstancedWEBGL(s,r,0,o,e,0,l,0,c);let t=0;for(let e=0;e<c;e++)t+=r[e]*l[e];n.update(t,s,1)}}}function $i(e){const t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(n,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(n/3);break;case e.LINES:t.lines+=o*(n/2);break;case e.LINE_STRIP:t.lines+=o*(n-1);break;case e.LINE_LOOP:t.lines+=o*n;break;case e.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s)}}}}function Wi(e,t,n){const o=new WeakMap,s=new u;return{update:function(a,r,c){const u=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=0[0]!==h?h.length:0;let l=o.get(r);if(0[0]===l||l.count!==d){0[0]!==l&&l.texture.dispose();const h=0[0]!==r.morphAttributes.position,f=0[0]!==r.morphAttributes.normal,p=0[0]!==r.morphAttributes.color,g=r.morphAttributes.position||[],v=r.morphAttributes.normal||[],b=r.morphAttributes.color||[];let a=0;!0===h&&(a=1),!0===f&&(a=2),!0===p&&(a=3);let n=r.attributes.position.count*a,c=1;n>t.maxTextureSize&&(c=Math.ceil(n/t.maxTextureSize),n=t.maxTextureSize);const e=new Float32Array(n*c*4*d),u=new Uo(e,n,c,d);u.type=H,u.needsUpdate=!0;const j=4*a;for(let o=0;o<d;o++){const i=g[o],r=v[o],a=b[o],t=n*c*4*o;for(let o=0;o<i.count;o++){const n=o*j;!0===h&&(s.fromBufferAttribute(i,o),e[t+n+0]=s.x,e[t+n+1]=s.y,e[t+n+2]=s.z,e[t+n+3]=0),!0===f&&(s.fromBufferAttribute(r,o),e[t+n+4]=s.x,e[t+n+5]=s.y,e[t+n+6]=s.z,e[t+n+7]=0),!0===p&&(s.fromBufferAttribute(a,o),e[t+n+8]=s.x,e[t+n+9]=s.y,e[t+n+10]=s.z,e[t+n+11]=4===a.itemSize?s.w:1)}}function m(){u.dispose(),o.delete(r),r.removeEventListener("dispose",m)}l={count:d,texture:u,size:new i(n,c)},o.set(r,l),r.addEventListener("dispose",m)}if(!0===a.isInstancedMesh&&null!==a.morphTexture)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let t=0;for(let e=0;e<u.length;e++)t+=u[e];const n=r.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,"morphTargetBaseInfluence",n),c.getUniforms().setValue(e,"morphTargetInfluences",u)}c.getUniforms().setValue(e,"morphTargetsTexture",l.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",l.size)}}}function Ui(e,t,n,s){let o=new WeakMap;function i(e){const t=e.target;t.removeEventListener("dispose",i),n.remove(t.instanceMatrix),null!==t.instanceColor&&n.remove(t.instanceColor)}return{update:function(a){const r=s.render.frame,l=a.geometry,c=t.get(a,l);if(o.get(c)!==r&&(t.update(c),o.set(c,r)),a.isInstancedMesh&&(!1===a.hasEventListener("dispose",i)&&a.addEventListener("dispose",i),o.get(a)!==r&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),null!==a.instanceColor&&n.update(a.instanceColor,e.ARRAY_BUFFER),o.set(a,r))),a.isSkinnedMesh){const e=a.skeleton;o.get(e)!==r&&(e.update(),o.set(e,r))}return c},dispose:function(){o=new WeakMap}}}const $s=new x,Ws=new Ro(1,1),eo=new Uo,to=new Or,no=new so,io=[],ao=[],ro=new Float32Array(16),lo=new Float32Array(9),mo=new Float32Array(4);function Re(e,t,n){const o=e[0];if(o<=0||o>0)return e;const i=t*n;let s=io[i];if(0[0]===s&&(s=new Float32Array(i),io[i]=s),0!==t){o.toArray(s,0);for(let o=1,i=0;o!==t;++o)i+=n,e[o].toArray(s,i)}return s}function f(e,t){if(e.length!==t.length)return!1;for(let n=0,s=e.length;n<s;n++)if(e[n]!==t[n])return!1;return!0}function p(e,t){for(let n=0,s=t.length;n<s;n++)e[n]=t[n]}function gt(e,t){let n=ao[t];0[0]===n&&(n=new Int32Array(t),ao[t]=n);for(let s=0;s!==t;++s)n[s]=e.allocateTextureUnit();return n}function aa(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ra(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y||(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(f(n,t))return;e.uniform2fv(this.addr,t),p(n,t)}}function ca(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(0[0]!==t.r)n[0]===t.r&&n[1]===t.g&&n[2]===t.b||(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(f(n,t))return;e.uniform3fv(this.addr,t),p(n,t)}}function la(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(f(n,t))return;e.uniform4fv(this.addr,t),p(n,t)}}function da(e,t){const n=this.cache,s=t.elements;if(0[0]===s){if(f(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),p(n,t)}else{if(f(n,s))return;mo.set(s),e.uniformMatrix2fv(this.addr,!1,mo),p(n,s)}}function ua(e,t){const n=this.cache,s=t.elements;if(0[0]===s){if(f(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),p(n,t)}else{if(f(n,s))return;lo.set(s),e.uniformMatrix3fv(this.addr,!1,lo),p(n,s)}}function ha(e,t){const n=this.cache,s=t.elements;if(0[0]===s){if(f(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),p(n,t)}else{if(f(n,s))return;ro.set(s),e.uniformMatrix4fv(this.addr,!1,ro),p(n,s)}}function ma(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function fa(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y||(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(f(n,t))return;e.uniform2iv(this.addr,t),p(n,t)}}function pa(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(f(n,t))return;e.uniform3iv(this.addr,t),p(n,t)}}function ga(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(f(n,t))return;e.uniform4iv(this.addr,t),p(n,t)}}function va(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ba(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y||(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(f(n,t))return;e.uniform2uiv(this.addr,t),p(n,t)}}function ja(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(f(n,t))return;e.uniform3uiv(this.addr,t),p(n,t)}}function ya(e,t){const n=this.cache;if(0[0]!==t.x)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(f(n,t))return;e.uniform4uiv(this.addr,t),p(n,t)}}function _a(e,t,n){const i=this.cache,s=n.allocateTextureUnit();let o;i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),this.type===e.SAMPLER_2D_SHADOW?(Ws.compareFunction=515,o=Ws):o=$s,n.setTexture2D(t||o,s)}function wa(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture3D(t||to,s)}function Oa(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTextureCube(t||no,s)}function xa(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture2DArray(t||eo,s)}function Ca(e,t){e.uniform1fv(this.addr,t)}function Ea(e,t){const n=Re(t,this.size,2);e.uniform2fv(this.addr,n)}function ka(e,t){const n=Re(t,this.size,3);e.uniform3fv(this.addr,n)}function Aa(e,t){const n=Re(t,this.size,4);e.uniform4fv(this.addr,n)}function Sa(e,t){const n=Re(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ma(e,t){const n=Re(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Fa(e,t){const n=Re(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ta(e,t){e.uniform1iv(this.addr,t)}function za(e,t){e.uniform2iv(this.addr,t)}function Da(e,t){e.uniform3iv(this.addr,t)}function Na(e,t){e.uniform4iv(this.addr,t)}function La(e,t){e.uniform1uiv(this.addr,t)}function Ra(e,t){e.uniform2uiv(this.addr,t)}function Pa(e,t){e.uniform3uiv(this.addr,t)}function Ha(e,t){e.uniform4uiv(this.addr,t)}function Ia(e,t,n){const o=this.cache,i=t.length,s=gt(n,i);f(o,s)||(e.uniform1iv(this.addr,s),p(o,s));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||$s,s[e])}function Ba(e,t,n){const o=this.cache,i=t.length,s=gt(n,i);f(o,s)||(e.uniform1iv(this.addr,s),p(o,s));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||to,s[e])}function Va(e,t,n){const o=this.cache,i=t.length,s=gt(n,i);f(o,s)||(e.uniform1iv(this.addr,s),p(o,s));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||no,s[e])}function $a(e,t,n){const o=this.cache,i=t.length,s=gt(n,i);f(o,s)||(e.uniform1iv(this.addr,s),p(o,s));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||eo,s[e])}class Wa{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(e){switch(e){case 5126:return aa;case 35664:return ra;case 35665:return ca;case 35666:return la;case 35674:return da;case 35675:return ua;case 35676:return ha;case 5124:case 35670:return ma;case 35667:case 35671:return fa;case 35668:case 35672:return pa;case 35669:case 35673:return ga;case 5125:return va;case 36294:return ba;case 36295:return ja;case 36296:return ya;case 35678:case 36198:case 36298:case 36306:case 35682:return _a;case 35679:case 36299:case 36307:return wa;case 35680:case 36300:case 36308:case 36293:return Oa;case 36289:case 36303:case 36311:case 36292:return xa}}(t.type)}}class Ua{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(e){switch(e){case 5126:return Ca;case 35664:return Ea;case 35665:return ka;case 35666:return Aa;case 35674:return Sa;case 35675:return Ma;case 35676:return Fa;case 5124:case 35670:return Ta;case 35667:case 35671:return za;case 35668:case 35672:return Da;case 35669:case 35673:return Na;case 5125:return La;case 36294:return Ra;case 36295:return Pa;case 36296:return Ha;case 35678:case 36198:case 36298:case 36306:case 35682:return Ia;case 35679:case 36299:case 36307:return Ba;case 35680:case 36300:case 36308:case 36293:return Va;case 36289:case 36303:case 36311:case 36292:return $a}}(t.type)}}class Ka{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const i=s[o];i.setValue(e,t[i.id],n)}}}const Kn=/(\w+)(\])?(\[|\.)?/g;function go(e,t){e.seq.push(t),e.map[t.id]=t}function Ga(e,t,n){const s=e.name,o=s.length;for(Kn.lastIndex=0;;){const a=Kn.exec(s),c=Kn.lastIndex;let i=a[1];const l="]"===a[2],r=a[3];if(l&&(i|=0),0[0]===r||"["===r&&c+2===o){go(n,0[0]===r?new Wa(i,e,t):new Ua(i,e,t));break}{let e=n.map[i];0[0]===e&&(e=new Ka(i),go(n,e)),n=e}}}class jt{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s);Ga(o,e.getUniformLocation(t,o.name),this)}}setValue(e,t,n,s){const o=this.map[t];0[0]!==o&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];0[0]!==s&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const i=t[o],a=n[i.id];!1!==a.needsUpdate&&i.setValue(e,a.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function wo(e,t,n){const s=e.createShader(t);return e.shaderSource(s,n),e.compileShader(s),s}let Za=0;const Oo=new n;function Ao(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&""===s)return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const i=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+function(e,t){const n=e.split(`
`),s=[],o=Math.max(t-6,0),i=Math.min(t+6,n.length);for(let e=o;e<i;e++){const a=e+1;s.push(`${a===t?">":" "} ${a}: ${n[e]}`)}return s.join(`
`)}(e.getShaderSource(t),i)}return s}function tr(e,t){const n=function(e){a._getMatrix(Oo,a.workingColorSpace,e);const t=`mat3( ${Oo.elements.map(e=>e.toFixed(4))} )`;switch(a.getTransfer(e)){case ft:return[t,"LinearTransferOETF"];case l:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nr(e,t){let n;switch(t){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="Cineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 7:n="Neutral";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Et=new e;function at(e){return""!==e}function No(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rr=/^[ \t]*#include +<([\w\d./]+)>/gm;function _n(e){return e.replace(rr,dr)}const lr=new Map;function dr(e,t){let n=s[t];if(0[0]===n){const e=lr.get(t);if(0[0]===e)throw new Error("Can not resolve #include <"+t+">");n=s[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e)}return _n(n)}const ur=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(e){return e.replace(ur,mr)}function mr(e,t,n,s){let o="";for(let e=parseInt(t);e<parseInt(n);e++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return o}function Yo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}function pr(e,t,n,o){const i=e.getContext(),A=n.defines;let c=n.vertexShader,l=n.fragmentShader;const _=function(e){let t="SHADOWMAP_TYPE_BASIC";return 1===e.shadowMapType?t="SHADOWMAP_TYPE_PCF":2===e.shadowMapType?t="SHADOWMAP_TYPE_PCF_SOFT":3===e.shadowMapType&&(t="SHADOWMAP_TYPE_VSM"),t}(n),O=function(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case it:case Ae:t="ENVMAP_TYPE_CUBE";break;case Rt:t="ENVMAP_TYPE_CUBE_UV"}return t}(n),y=function(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Ae&&(t="ENVMAP_MODE_REFRACTION"),t}(n),k=function(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD"}return t}(n),h=function(e){const t=e.envMapCubeUVHeight;if(null===t)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:s,maxMip:n}}(n),E=function(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(at).join(`
`)}(n),p=function(e){const t=[];for(const n in e){const s=e[n];!1!==s&&t.push("#define "+n+" "+s)}return t.join(`
`)}(A),r=i.createProgram();let u,d,j=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(at).join(`
`),u.length>0&&(u+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(at).join(`
`),d.length>0&&(d+=`
`)):(u=[Yo(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&!1===n.flatShading?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&!1===n.flatShading?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+_:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(at).join(`
`),d=[Yo(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+O:"",n.envMap?"#define "+y:"",n.envMap?"#define "+k:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&!1===n.flatShading?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+_:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==n.toneMapping?"#define TONE_MAPPING":"",0!==n.toneMapping?s.tonemapping_pars_fragment:"",0!==n.toneMapping?nr("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",s.colorspace_pars_fragment,tr("linearToOutputTexel",n.outputColorSpace),(a.getLuminanceCoefficients(Et),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Et.x.toFixed(4)}, ${Et.y.toFixed(4)}, ${Et.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(at).join(`
`)),c=_n(c),c=No(c,n),c=Vo(c,n),l=_n(l),l=No(l,n),l=Vo(l,n),c=$o(c),l=$o(l),!0!==n.isRawShaderMaterial&&(j=`#version 300 es
`,u=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,d=["#define varying in",n.glslVersion===Vs?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const C=j+u+c,x=j+d+l,m=wo(i,i.VERTEX_SHADER,C),f=wo(i,i.FRAGMENT_SHADER,x);function w(t){if(e.debug.checkShaderErrors){const l=i.getProgramInfoLog(r)||"",h=i.getShaderInfoLog(m)||"",p=i.getShaderInfoLog(f)||"",n=l.trim(),s=h.trim(),o=p.trim();let a=!0,c=!0;if(!1===i.getProgramParameter(r,i.LINK_STATUS))if(a=!1,"function"==typeof e.debug.onShaderError)e.debug.onShaderError(i,r,m,f);else{const e=Ao(i,m,"vertex"),s=Ao(i,f,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(r,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+s)}else""!==n?console.warn("THREE.WebGLProgram: Program Info Log:",n):""!==s&&""!==o||(c=!1);c&&(t.diagnostics={runnable:a,programLog:n,vertexShader:{log:s,prefix:u},fragmentShader:{log:o,prefix:d}})}i.deleteShader(m),i.deleteShader(f),v=new jt(i,r),g=function(e,t){const n={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=e.getActiveAttrib(t,a),r=o.name;let i=1;o.type===e.FLOAT_MAT2&&(i=2),o.type===e.FLOAT_MAT3&&(i=3),o.type===e.FLOAT_MAT4&&(i=4),n[r]={type:o.type,location:e.getAttribLocation(t,r),locationSize:i}}return n}(i,r)}let v,g;i.attachShader(r,m),i.attachShader(r,f),0[0]!==n.index0AttributeName?i.bindAttribLocation(r,0,n.index0AttributeName):!0===n.morphTargets&&i.bindAttribLocation(r,0,"position"),i.linkProgram(r),this.getUniforms=function(){return 0[0]===v&&w(this),v},this.getAttributes=function(){return 0[0]===g&&w(this),g};let b=!1===n.rendererExtensionParallelShaderCompile;return this.isReady=function(){return!1===b&&(b=i.getProgramParameter(r,37297)),b},this.destroy=function(){o.releaseStatesOfProgram(this),i.deleteProgram(r),this.program=0[0]},this.type=n.shaderType,this.name=n.shaderName,this.id=Za++,this.cacheKey=t,this.usedTimes=1,this.program=r,this.vertexShader=m,this.fragmentShader=f,this}let gr=0;class vr{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const o=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(o),s=this._getShaderStage(i),t=this._getShaderCacheForMaterial(e);return!1===t.has(n)&&(t.add(n),n.usedTimes++),!1===t.has(s)&&(t.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const e of t)e.usedTimes--,0===e.usedTimes&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let t=n.get(e);return 0[0]===t&&(t=new Set,n.set(e,t)),t}_getShaderStage(e){const n=this.shaderCache;let t=n.get(e);return 0[0]===t&&(t=new br(e),n.set(e,t)),t}}class br{constructor(e){this.id=gr++,this.code=e,this.usedTimes=0}}function jr(e,t,n,s,o,i,r){const c=new To,h=new vr,m=new Set,u=[],v=o.logarithmicDepthBuffer,p=o.vertexTextures;let f=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(e){return m.add(e),0===e?"uv":`uv${e}`}return{getParameters:function(i,c,u,b,j){const H=b.fog,y=j.geometry,ye=i.isMeshStandardMaterial?b.environment:null,w=(i.isMeshStandardMaterial?n:t).get(i.envMap||ye),pe=w&&w.mapping===Rt?w.image.height:null,z=g[i.type];null!==i.precision&&(f=o.getMaxPrecision(i.precision),f!==i.precision&&console.warn("THREE.WebGLProgram.getParameters:",i.precision,"not supported, using",f,"instead."));const ee=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,he=0[0]!==ee?ee.length:0;let M,S,Z,X,E=0;if(0[0]!==y.morphAttributes.position&&(E=1),0[0]!==y.morphAttributes.normal&&(E=2),0[0]!==y.morphAttributes.color&&(E=3),z){const e=L[z];M=e.vertexShader,S=e.fragmentShader}else M=i.vertexShader,S=i.fragmentShader,h.update(i),Z=h.getVertexShaderID(i),X=h.getFragmentShaderID(i);const O=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),N=!0===j.isInstancedMesh,R=!0===j.isBatchedMesh,C=!!i.map,je=!!i.matcap,K=!!w,W=!!i.aoMap,oe=!!i.lightMap,$=!!i.bumpMap,_=!!i.normalMap,U=!!i.displacementMap,I=!!i.emissiveMap,B=!!i.metalnessMap,Y=!!i.roughnessMap,D=i.anisotropy>0,k=i.clearcoat>0,me=i.dispersion>0,A=i.iridescence>0,F=i.sheen>0,T=i.transmission>0,te=D&&!!i.anisotropyMap,ne=k&&!!i.clearcoatMap,se=k&&!!i.clearcoatNormalMap,V=k&&!!i.clearcoatRoughnessMap,ie=A&&!!i.iridescenceMap,ae=A&&!!i.iridescenceThicknessMap,re=F&&!!i.sheenColorMap,ce=F&&!!i.sheenRoughnessMap,le=!!i.specularMap,de=!!i.specularColorMap,ue=!!i.specularIntensityMap,J=T&&!!i.transmissionMap,Q=T&&!!i.thicknessMap,fe=!!i.gradientMap,P=!!i.alphaMap,ge=i.alphaTest>0,ve=!!i.alphaHash,G=!!i.extensions;let q=0;i.toneMapped&&(null!==O&&!0!==O.isXRRenderTarget||(q=e.toneMapping));const x={shaderID:z,shaderType:i.type,shaderName:i.name,vertexShader:M,fragmentShader:S,defines:i.defines,customVertexShaderID:Z,customFragmentShaderID:X,isRawShaderMaterial:!0===i.isRawShaderMaterial,glslVersion:i.glslVersion,precision:f,batching:R,batchingColor:R&&null!==j._colorsTexture,instancing:N,instancingColor:N&&null!==j.instanceColor,instancingMorph:N&&null!==j.morphTexture,supportsVertexTextures:p,outputColorSpace:null===O?e.outputColorSpace:!0===O.isXRRenderTarget?O.texture.colorSpace:Ve,alphaToCoverage:!!i.alphaToCoverage,map:C,matcap:je,envMap:K,envMapMode:K&&w.mapping,envMapCubeUVHeight:pe,aoMap:W,lightMap:oe,bumpMap:$,normalMap:_,displacementMap:p&&U,emissiveMap:I,normalMapObjectSpace:_&&1===i.normalMapType,normalMapTangentSpace:_&&0===i.normalMapType,metalnessMap:B,roughnessMap:Y,anisotropy:D,anisotropyMap:te,clearcoat:k,clearcoatMap:ne,clearcoatNormalMap:se,clearcoatRoughnessMap:V,dispersion:me,iridescence:A,iridescenceMap:ie,iridescenceThicknessMap:ae,sheen:F,sheenColorMap:re,sheenRoughnessMap:ce,specularMap:le,specularColorMap:de,specularIntensityMap:ue,transmission:T,transmissionMap:J,thicknessMap:Q,gradientMap:fe,opaque:!1===i.transparent&&1===i.blending&&!1===i.alphaToCoverage,alphaMap:P,alphaTest:ge,alphaHash:ve,combine:i.combine,mapUv:C&&d(i.map.channel),aoMapUv:W&&d(i.aoMap.channel),lightMapUv:oe&&d(i.lightMap.channel),bumpMapUv:$&&d(i.bumpMap.channel),normalMapUv:_&&d(i.normalMap.channel),displacementMapUv:U&&d(i.displacementMap.channel),emissiveMapUv:I&&d(i.emissiveMap.channel),metalnessMapUv:B&&d(i.metalnessMap.channel),roughnessMapUv:Y&&d(i.roughnessMap.channel),anisotropyMapUv:te&&d(i.anisotropyMap.channel),clearcoatMapUv:ne&&d(i.clearcoatMap.channel),clearcoatNormalMapUv:se&&d(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&d(i.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(i.iridescenceThicknessMap.channel),sheenColorMapUv:re&&d(i.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(i.sheenRoughnessMap.channel),specularMapUv:le&&d(i.specularMap.channel),specularColorMapUv:de&&d(i.specularColorMap.channel),specularIntensityMapUv:ue&&d(i.specularIntensityMap.channel),transmissionMapUv:J&&d(i.transmissionMap.channel),thicknessMapUv:Q&&d(i.thicknessMap.channel),alphaMapUv:P&&d(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(_||D),vertexColors:i.vertexColors,vertexAlphas:!0===i.vertexColors&&!!y.attributes.color&&4===y.attributes.color.itemSize,pointsUvs:!0===j.isPoints&&!!y.attributes.uv&&(C||P),fog:!!H,useFog:!0===i.fog,fogExp2:!!H&&H.isFogExp2,flatShading:!0===i.flatShading&&!1===i.wireframe,sizeAttenuation:!0===i.sizeAttenuation,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:!0===j.isSkinnedMesh,morphTargets:0[0]!==y.morphAttributes.position,morphNormals:0[0]!==y.morphAttributes.normal,morphColors:0[0]!==y.morphAttributes.color,morphTargetsCount:he,morphTextureStride:E,numDirLights:c.directional.length,numPointLights:c.point.length,numSpotLights:c.spot.length,numSpotLightMaps:c.spotLightMap.length,numRectAreaLights:c.rectArea.length,numHemiLights:c.hemi.length,numDirLightShadows:c.directionalShadowMap.length,numPointLightShadows:c.pointShadowMap.length,numSpotLightShadows:c.spotShadowMap.length,numSpotLightShadowsWithMaps:c.numSpotLightShadowsWithMaps,numLightProbes:c.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:q,decodeVideoTexture:C&&!0===i.map.isVideoTexture&&a.getTransfer(i.map.colorSpace)===l,decodeVideoTextureEmissive:I&&!0===i.emissiveMap.isVideoTexture&&a.getTransfer(i.emissiveMap.colorSpace)===l,premultipliedAlpha:i.premultipliedAlpha,doubleSided:2===i.side,flipSided:1===i.side,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:G&&!0===i.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(G&&!0===i.extensions.multiDraw||R)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:i.customProgramCacheKey()};return x.vertexUv1s=m.has(1),x.vertexUv2s=m.has(2),x.vertexUv3s=m.has(3),m.clear(),x},getProgramCacheKey:function(t){const n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),0[0]!==t.defines)for(const e in t.defines)n.push(e),n.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(function(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}(n,t),function(e,t){c.disableAll(),t.supportsVertexTextures&&c.enable(0),t.instancing&&c.enable(1),t.instancingColor&&c.enable(2),t.instancingMorph&&c.enable(3),t.matcap&&c.enable(4),t.envMap&&c.enable(5),t.normalMapObjectSpace&&c.enable(6),t.normalMapTangentSpace&&c.enable(7),t.clearcoat&&c.enable(8),t.iridescence&&c.enable(9),t.alphaTest&&c.enable(10),t.vertexColors&&c.enable(11),t.vertexAlphas&&c.enable(12),t.vertexUv1s&&c.enable(13),t.vertexUv2s&&c.enable(14),t.vertexUv3s&&c.enable(15),t.vertexTangents&&c.enable(16),t.anisotropy&&c.enable(17),t.alphaHash&&c.enable(18),t.batching&&c.enable(19),t.dispersion&&c.enable(20),t.batchingColor&&c.enable(21),t.gradientMap&&c.enable(22),e.push(c.mask),c.disableAll(),t.fog&&c.enable(0),t.useFog&&c.enable(1),t.flatShading&&c.enable(2),t.logarithmicDepthBuffer&&c.enable(3),t.reversedDepthBuffer&&c.enable(4),t.skinning&&c.enable(5),t.morphTargets&&c.enable(6),t.morphNormals&&c.enable(7),t.morphColors&&c.enable(8),t.premultipliedAlpha&&c.enable(9),t.shadowMapEnabled&&c.enable(10),t.doubleSided&&c.enable(11),t.flipSided&&c.enable(12),t.useDepthPacking&&c.enable(13),t.dithering&&c.enable(14),t.transmission&&c.enable(15),t.sheen&&c.enable(16),t.opaque&&c.enable(17),t.pointsUvs&&c.enable(18),t.decodeVideoTexture&&c.enable(19),t.decodeVideoTextureEmissive&&c.enable(20),t.alphaToCoverage&&c.enable(21),e.push(c.mask)}(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()},getUniforms:function(e){const n=g[e.type];let t;if(n){const e=L[n];t=Di.clone(e.uniforms)}else t=e.uniforms;return t},acquireProgram:function(t,n){let s;for(let e=0,o=u.length;e<o;e++){const t=u[e];if(t.cacheKey===n){s=t,++s.usedTimes;break}}return 0[0]===s&&(s=new pr(e,n,t,i),u.push(s)),s},releaseProgram:function(e){if(0===--e.usedTimes){const t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}},releaseShaderCache:function(e){h.remove(e)},programs:u,dispose:function(){h.dispose()}}}function yr(){let e=new WeakMap;return{has:function(t){return e.has(t)},get:function(t){let n=e.get(t);return 0[0]===n&&(n={},e.set(t,n)),n},remove:function(t){e.delete(t)},update:function(t,n,s){e.get(t)[n]=s},dispose:function(){e=new WeakMap}}}function _r(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Go(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function qo(){const o=[];let s=0;const e=[],t=[],n=[];function i(e,t,n,i,a,r){let c=o[s];return 0[0]===c?(c={id:e.id,object:e,geometry:t,material:n,groupOrder:i,renderOrder:e.renderOrder,z:a,group:r},o[s]=c):(c.id=e.id,c.object=e,c.geometry=t,c.material=n,c.groupOrder=i,c.renderOrder=e.renderOrder,c.z=a,c.group=r),s++,c}return{opaque:e,transmissive:t,transparent:n,init:function(){s=0,e.length=0,t.length=0,n.length=0},push:function(s,o,a,r,c,l){const d=i(s,o,a,r,c,l);a.transmission>0?t.push(d):!0===a.transparent?n.push(d):e.push(d)},unshift:function(s,o,a,r,c,l){const d=i(s,o,a,r,c,l);a.transmission>0?t.unshift(d):!0===a.transparent?n.unshift(d):e.unshift(d)},finish:function(){for(let t=s,n=o.length;t<n;t++){const e=o[t];if(null===e.id)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}},sort:function(s,o){e.length>1&&e.sort(s||_r),t.length>1&&t.sort(o||Go),n.length>1&&n.sort(o||Go)}}}function xr(){let e=new WeakMap;return{get:function(t,n){const o=e.get(t);let s;return 0[0]===o?(s=new qo,e.set(t,[s])):n>=o.length?(s=new qo,o.push(s)):s=o[n],s},dispose:function(){e=new WeakMap}}}function Cr(){const t={};return{get:function(n){if(0[0]!==t[n.id])return t[n.id];let s;switch(n.type){case"DirectionalLight":s={direction:new e,color:new r};break;case"SpotLight":s={position:new e,direction:new e,color:new r,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":s={position:new e,color:new r,distance:0,decay:0};break;case"HemisphereLight":s={direction:new e,skyColor:new r,groundColor:new r};break;case"RectAreaLight":s={color:new r,position:new e,halfWidth:new e,halfHeight:new e}}return t[n.id]=s,s}}}let Er=0;function kr(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Ar(n){const o=new Cr,c=function(){const e={};return{get:function(t){if(0[0]!==e[t.id])return e[t.id];let n;switch(t.type){case"DirectionalLight":case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let t=0;t<9;t++)s.probe.push(new e);const a=new e,l=new m,r=new m;return{setup:function(e){let j=0,y=0,b=0;for(let e=0;e<9;e++)s.probe[e].set(0,0,0);let l=0,a=0,r=0,d=0,p=0,u=0,h=0,m=0,f=0,v=0,g=0;e.sort(kr);for(let _=0,O=e.length;_<O;_++){const t=e[_],i=t.color,n=t.intensity,x=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)j+=i.r*n,y+=i.g*n,b+=i.b*n;else if(t.isLightProbe){for(let e=0;e<9;e++)s.probe[e].addScaledVector(t.sh.coefficients[e],n);g++}else if(t.isDirectionalLight){const e=o.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),t.castShadow){const n=t.shadow,e=c.get(t);e.shadowIntensity=n.intensity,e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,s.directionalShadow[l]=e,s.directionalShadowMap[l]=w,s.directionalShadowMatrix[l]=t.shadow.matrix,u++}s.directional[l]=e,l++}else if(t.isSpotLight){const e=o.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(i).multiplyScalar(n),e.distance=x,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,s.spot[r]=e;const a=t.shadow;if(t.map&&(s.spotLightMap[f]=t.map,f++,a.updateMatrices(t),t.castShadow&&v++),s.spotLightMatrix[r]=a.matrix,t.castShadow){const e=c.get(t);e.shadowIntensity=a.intensity,e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,s.spotShadow[r]=e,s.spotShadowMap[r]=w,m++}r++}else if(t.isRectAreaLight){const e=o.get(t);e.color.copy(i).multiplyScalar(n),e.halfWidth.set(.5*t.width,0,0),e.halfHeight.set(0,.5*t.height,0),s.rectArea[d]=e,d++}else if(t.isPointLight){const e=o.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),e.distance=t.distance,e.decay=t.decay,t.castShadow){const n=t.shadow,e=c.get(t);e.shadowIntensity=n.intensity,e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,e.shadowCameraNear=n.camera.near,e.shadowCameraFar=n.camera.far,s.pointShadow[a]=e,s.pointShadowMap[a]=w,s.pointShadowMatrix[a]=t.shadow.matrix,h++}s.point[a]=e,a++}else if(t.isHemisphereLight){const e=o.get(t);e.skyColor.copy(t.color).multiplyScalar(n),e.groundColor.copy(t.groundColor).multiplyScalar(n),s.hemi[p]=e,p++}}d>0&&(!0===n.has("OES_texture_float_linear")?(s.rectAreaLTC1=t.LTC_FLOAT_1,s.rectAreaLTC2=t.LTC_FLOAT_2):(s.rectAreaLTC1=t.LTC_HALF_1,s.rectAreaLTC2=t.LTC_HALF_2)),s.ambient[0]=j,s.ambient[1]=y,s.ambient[2]=b;const i=s.hash;i.directionalLength===l&&i.pointLength===a&&i.spotLength===r&&i.rectAreaLength===d&&i.hemiLength===p&&i.numDirectionalShadows===u&&i.numPointShadows===h&&i.numSpotShadows===m&&i.numSpotMaps===f&&i.numLightProbes===g||(s.directional.length=l,s.spot.length=r,s.rectArea.length=d,s.point.length=a,s.hemi.length=p,s.directionalShadow.length=u,s.directionalShadowMap.length=u,s.pointShadow.length=h,s.pointShadowMap.length=h,s.spotShadow.length=m,s.spotShadowMap.length=m,s.directionalShadowMatrix.length=u,s.pointShadowMatrix.length=h,s.spotLightMatrix.length=m+f-v,s.spotLightMap.length=f,s.numSpotLightShadowsWithMaps=v,s.numLightProbes=g,i.directionalLength=l,i.pointLength=a,i.spotLength=r,i.rectAreaLength=d,i.hemiLength=p,i.numDirectionalShadows=u,i.numPointShadows=h,i.numSpotShadows=m,i.numSpotMaps=f,i.numLightProbes=g,s.version=Er++)},setupView:function(e,t){let o=0,i=0,c=0,d=0,u=0;const n=t.matrixWorldInverse;for(let h=0,m=e.length;h<m;h++){const t=e[h];if(t.isDirectionalLight){const e=s.directional[o];e.direction.setFromMatrixPosition(t.matrixWorld),a.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(n),o++}else if(t.isSpotLight){const e=s.spot[c];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),e.direction.setFromMatrixPosition(t.matrixWorld),a.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(n),c++}else if(t.isRectAreaLight){const e=s.rectArea[d];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),r.identity(),l.copy(t.matrixWorld),l.premultiply(n),r.extractRotation(l),e.halfWidth.set(.5*t.width,0,0),e.halfHeight.set(0,.5*t.height,0),e.halfWidth.applyMatrix4(r),e.halfHeight.applyMatrix4(r),d++}else if(t.isPointLight){const e=s.point[i];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),i++}else if(t.isHemisphereLight){const e=s.hemi[u];e.direction.setFromMatrixPosition(t.matrixWorld),e.direction.transformDirection(n),u++}}},state:s}}function Wo(e){const n=new Ar(e),t=[],s=[],o={lightsArray:t,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:function(e){o.camera=e,t.length=0,s.length=0},state:o,setupLights:function(){n.setup(t)},setupLightsView:function(e){n.setupView(t,e)},pushLight:function(e){t.push(e)},pushShadow:function(e){s.push(e)}}}function Mr(e){let t=new WeakMap;return{get:function(n,s=0){const i=t.get(n);let o;return 0[0]===i?(o=new Wo(e),t.set(n,[o])):s>=i.length?(o=new Wo(e),i.push(o)):o=i[s],o},dispose:function(){t=new WeakMap}}}function Fr(e,t,n){let v=new Lo;const s=new i,o=new i,b=new u,y=new li({depthPacking:3201}),O=new ci,l={},c=n.maxTextureSize,w={[oa]:1,[sa]:0,[mi]:2},a=new te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new i},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),r=a.clone();r.defines.HORIZONTAL_PASS=1;const j=new ie;j.setAttribute("position",new T(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new P(j,a),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;function _(n,o){const i=t.update(h);a.defines.VSM_SAMPLES!==n.blurSamples&&(a.defines.VSM_SAMPLES=n.blurSamples,r.defines.VSM_SAMPLES=n.blurSamples,a.needsUpdate=!0,r.needsUpdate=!0),null===n.mapPass&&(n.mapPass=new le(s.x,s.y)),a.uniforms.shadow_pass.value=n.map.texture,a.uniforms.resolution.value=n.mapSize,a.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(o,null,i,a,h,null),r.uniforms.shadow_pass.value=n.mapPass.texture,r.uniforms.resolution.value=n.mapSize,r.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(o,null,i,r,h,null)}function f(t,n,s,o){let i=null;const a=!0===s.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(0[0]!==a)i=a;else if(i=!0===s.isPointLight?O:y,e.localClippingEnabled&&!0===n.clipShadows&&Array.isArray(n.clippingPlanes)&&0!==n.clippingPlanes.length||n.displacementMap&&0!==n.displacementScale||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||!0===n.alphaToCoverage){const s=i.uuid,o=n.uuid;let e=l[s];0[0]===e&&(e={},l[s]=e);let t=e[o];0[0]===t&&(t=i.clone(),e[o]=t,n.addEventListener("dispose",p)),i=t}return i.visible=n.visible,i.wireframe=n.wireframe,i.side=3===o?null!==n.shadowSide?n.shadowSide:n.side:null!==n.shadowSide?n.shadowSide:w[n.side],i.alphaMap=n.alphaMap,i.alphaTest=!0===n.alphaToCoverage?.5:n.alphaTest,i.map=n.map,i.clipShadows=n.clipShadows,i.clippingPlanes=n.clippingPlanes,i.clipIntersection=n.clipIntersection,i.displacementMap=n.displacementMap,i.displacementScale=n.displacementScale,i.displacementBias=n.displacementBias,i.wireframeLinewidth=n.wireframeLinewidth,i.linewidth=n.linewidth,!0===s.isPointLight&&!0===i.isMeshDistanceMaterial&&(e.properties.get(i).light=s),i}function g(n,s,o,i,a){if(!1===n.visible)return;if(n.layers.test(s.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&3===a)&&(!n.frustumCulled||v.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);const r=t.update(n),c=n.material;if(Array.isArray(c)){{const t=r.groups;for(let d=0,h=t.length;d<h;d++){const l=t[d],u=c[l.materialIndex];if(u&&u.visible){const t=f(n,u,i,a);n.onBeforeShadow(e,n,s,o,r,t,l),e.renderBufferDirect(o,null,r,t,n,l),n.onAfterShadow(e,n,s,o,r,t,l)}}}}else if(c.visible){const t=f(n,c,i,a);n.onBeforeShadow(e,n,s,o,r,t,null),e.renderBufferDirect(o,null,r,t,n,null),n.onAfterShadow(e,n,s,o,r,t,null)}}const r=n.children;for(let e=0,t=r.length;e<t;e++)g(r[e],s,o,i,a)}function p(e){e.target.removeEventListener("dispose",p);for(const s in l){const t=l[s],n=e.target.uuid;n in t&&(t[n].dispose(),delete t[n])}}this.render=function(t,n,i){if(!1===d.enabled)return;if(!1===d.autoUpdate&&!1===d.needsUpdate)return;if(0===t.length)return;const r=e.getRenderTarget(),l=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),a=e.state;a.setBlending(0),!0===a.buffers.depth.getReversed()?a.buffers.color.setClear(0,0,0,0):a.buffers.color.setClear(1,1,1,1),a.buffers.depth.setTest(!0),a.setScissorTest(!1);const h=3!==m&&3===this.type,f=3===m&&3!==this.type;for(let u=0,m=t.length;u<m;u++){const l=t[u],r=l.shadow;if(0[0]===r){console.warn("THREE.WebGLShadowMap:",l,"has no shadow.");continue}if(!1===r.autoUpdate&&!1===r.needsUpdate)continue;s.copy(r.mapSize);const d=r.getFrameExtents();if(s.multiply(d),o.copy(r.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/d.x),s.x=o.x*d.x,r.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/d.y),s.y=o.y*d.y,r.mapSize.y=o.y)),null===r.map||!0===h||!0===f){const e=3!==this.type?{minFilter:I,magFilter:I}:{};null!==r.map&&r.map.dispose(),r.map=new le(s.x,s.y,e),r.map.texture.name=l.name+".shadowMap",r.camera.updateProjectionMatrix()}e.setRenderTarget(r.map),e.clear();const p=r.getViewportCount();for(let e=0;e<p;e++){const t=r.getViewport(e);b.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),a.viewport(b),r.updateMatrices(l,e),v=r.getFrustum(),g(n,i,r.camera,l,this.type)}!0!==r.isPointLightShadow&&3===this.type&&_(r,i),r.needsUpdate=!1}m=this.type,d.needsUpdate=!1,e.setRenderTarget(r,l,u)}}const Tr={[ta]:1,[ia]:6,[Ya]:7,[qa]:5,[na]:0,[or]:2,[ir]:4,[er]:3};function zr(e,t){const E=new function(){let t=!1;const n=new u;let s=null;const o=new u(0,0,0,0);return{setMask:function(n){s===n||t||(e.colorMask(n,n,n,n),s=n)},setLocked:function(e){t=e},setClear:function(t,s,i,a,r){!0===r&&(t*=a,s*=a,i*=a),n.set(t,s,i,a),!1===o.equals(n)&&(e.clearColor(t,s,i,a),o.copy(n))},reset:function(){t=!1,s=null,o.set(-1,0,0,0)}}},o=new function(){let a=!1,o=!1,r=null,c=null,i=null;return{setReversed:function(e){if(o!==e){const n=t.get("EXT_clip_control");e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),o=e;const s=i;i=null,this.setClear(s)}},getReversed:function(){return o},setTest:function(t){t?n(e.DEPTH_TEST):s(e.DEPTH_TEST)},setMask:function(t){r===t||a||(e.depthMask(t),r=t)},setFunc:function(t){if(o&&(t=Tr[t]),c!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:default:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL)}c=t}},setLocked:function(e){a=e},setClear:function(t){i!==t&&(o&&(t=1-t),e.clearDepth(t),i=t)},reset:function(){a=!1,r=null,c=null,i=null,o=!1}}},a=new function(){let t=!1,o=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null;return{setTest:function(o){t||(o?n(e.STENCIL_TEST):s(e.STENCIL_TEST))},setMask:function(n){o===n||t||(e.stencilMask(n),o=n)},setFunc:function(t,n,s){i===t&&a===n&&r===s||(e.stencilFunc(t,n,s),i=t,a=n,r=s)},setOp:function(t,n,s){c===t&&l===n&&d===s||(e.stencilOp(t,n,s),c=t,l=n,d=s)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,o=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null}}},W=new WeakMap,L=new WeakMap;let h={},l={},T=new WeakMap,$=[],V=null,f=!1,p=null,c=null,v=null,b=null,m=null,y=null,_=null,g=new r(0,0,0),O=0,x=!1,B=null,F=null,I=null,N=null,D=null;const U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,w=0;const M=e.getParameter(e.VERSION);-1!==M.indexOf("WebGL")?(w=parseFloat(/^WebGL (\d)/.exec(M)[1]),R=w>=1):-1!==M.indexOf("OpenGL ES")&&(w=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),R=w>=2);let i=null,A={};const G=e.getParameter(e.SCISSOR_BOX),Y=e.getParameter(e.VIEWPORT),P=(new u).fromArray(G),H=(new u).fromArray(Y);function k(t,n,s,o){const i=new Uint8Array(4),a=e.createTexture();e.bindTexture(t,a),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let a=0;a<s;a++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,o,0,e.RGBA,e.UNSIGNED_BYTE,i):e.texImage2D(n+a,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,i);return a}const d={};function n(t){!0!==h[t]&&(e.enable(t),h[t]=!0)}function s(t){!1!==h[t]&&(e.disable(t),h[t]=!1)}d[e.TEXTURE_2D]=k(e.TEXTURE_2D,e.TEXTURE_2D,1),d[e.TEXTURE_CUBE_MAP]=k(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),d[e.TEXTURE_2D_ARRAY]=k(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),d[e.TEXTURE_3D]=k(e.TEXTURE_3D,e.TEXTURE_3D,1,1),E.setClear(0,0,0,1),o.setClear(1),a.setClear(0),n(e.DEPTH_TEST),o.setFunc(3),z(!1),K(1),n(e.CULL_FACE),S(0);const C={[fe]:e.FUNC_ADD,[ui]:e.FUNC_SUBTRACT,[ri]:e.FUNC_REVERSE_SUBTRACT};C[103]=e.MIN,C[104]=e.MAX;const j={[Ei]:e.ZERO,[Oi]:e.ONE,[Mi]:e.SRC_COLOR,[Ti]:e.SRC_ALPHA,[Yi]:e.SRC_ALPHA_SATURATE,[Pi]:e.DST_COLOR,[Li]:e.DST_ALPHA,[Fi]:e.ONE_MINUS_SRC_COLOR,[Ni]:e.ONE_MINUS_SRC_ALPHA,[Ki]:e.ONE_MINUS_DST_COLOR,[Ri]:e.ONE_MINUS_DST_ALPHA,[Xi]:e.CONSTANT_COLOR,[Zi]:e.ONE_MINUS_CONSTANT_COLOR,[Ji]:e.CONSTANT_ALPHA,[ea]:e.ONE_MINUS_CONSTANT_ALPHA};function S(t,o,i,a,r,l,d,u,h,w){if(0!==t){if(!1===f&&(n(e.BLEND),f=!0),5===t)r=r||o,l=l||i,d=d||a,o===c&&r===m||(e.blendEquationSeparate(C[o],C[r]),c=o,m=r),i===v&&a===b&&l===y&&d===_||(e.blendFuncSeparate(j[i],j[a],j[l],j[d]),v=i,b=a,y=l,_=d),!1!==u.equals(g)&&h===O||(e.blendColor(u.r,u.g,u.b,h),g.copy(u),O=h),p=t,x=!1;else if(t!==p||w!==x){if(c===fe&&m===fe||(e.blendEquation(e.FUNC_ADD),c=fe,m=fe),w)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}v=null,b=null,y=null,_=null,g.set(0,0,0),O=0,p=t,x=w}}else!0===f&&(s(e.BLEND),f=!1)}function z(t){B!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),B=t)}function K(t){0!==t?(n(e.CULL_FACE),t!==F&&(1===t?e.cullFace(e.BACK):2===t?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):s(e.CULL_FACE),F=t}function q(t,o,i){t?(n(e.POLYGON_OFFSET_FILL),N===o&&D===i||(e.polygonOffset(o,i),N=o,D=i)):s(e.POLYGON_OFFSET_FILL)}return{buffers:{color:E,depth:o,stencil:a},enable:n,disable:s,bindFramebuffer:function(t,n){return l[t]!==n&&(e.bindFramebuffer(t,n),l[t]=n,t===e.DRAW_FRAMEBUFFER&&(l[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(l[e.DRAW_FRAMEBUFFER]=n),!0)},drawBuffers:function(t,n){let s=$,o=!1;if(t){{s=T.get(n),0[0]===s&&(s=[],T.set(n,s));const i=t.textures;if(s.length!==i.length||s[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=i.length;t<n;t++)s[t]=e.COLOR_ATTACHMENT0+t;s.length=i.length,o=!0}}}else s[0]!==e.BACK&&(s[0]=e.BACK,o=!0);o&&e.drawBuffers(s)},useProgram:function(t){return V!==t&&(e.useProgram(t),V=t,!0)},setBlending:S,setMaterial:function(t,i){2===t.side?s(e.CULL_FACE):n(e.CULL_FACE);let r=1===t.side;i&&(r=!r),z(r),1===t.blending&&!1===t.transparent?S(0):S(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),E.setMask(t.colorWrite);const c=t.stencilWrite;a.setTest(c),c&&(a.setMask(t.stencilWriteMask),a.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),a.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),q(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?n(e.SAMPLE_ALPHA_TO_COVERAGE):s(e.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:z,setCullFace:K,setLineWidth:function(t){t!==I&&(R&&e.lineWidth(t),I=t)},setPolygonOffset:q,setScissorTest:function(t){t?n(e.SCISSOR_TEST):s(e.SCISSOR_TEST)},activeTexture:function(t){0[0]===t&&(t=e.TEXTURE0+U-1),i!==t&&(e.activeTexture(t),i=t)},bindTexture:function(t,n,s){0[0]===s&&(s=null===i?e.TEXTURE0+U-1:i);let o=A[s];0[0]===o&&(o={type:0[0],texture:0[0]},A[s]=o),o.type===t&&o.texture===n||(i!==s&&(e.activeTexture(s),i=s),e.bindTexture(t,n||d[t]),o.type=t,o.texture=n)},unbindTexture:function(){const t=A[i];0[0]!==t&&0[0]!==t.type&&(e.bindTexture(t.type,null),t.type=0[0],t.texture=0[0])},compressedTexImage2D:function(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage2D:function(){try{e.texImage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage3D:function(){try{e.texImage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},updateUBOMapping:function(t,n){let s=L.get(n);0[0]===s&&(s=new WeakMap,L.set(n,s));let o=s.get(t);0[0]===o&&(o=e.getUniformBlockIndex(n,t.name),s.set(t,o))},uniformBlockBinding:function(t,n){const s=L.get(n).get(t);W.get(n)!==s&&(e.uniformBlockBinding(n,s,t.__bindingPointIndex),W.set(n,s))},texStorage2D:function(){try{e.texStorage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texStorage3D:function(){try{e.texStorage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage2D:function(){try{e.texSubImage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage3D:function(){try{e.texSubImage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}},scissor:function(t){!1===P.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),P.copy(t))},viewport:function(t){!1===H.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),H.copy(t))},reset:function(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},i=null,A={},l={},T=new WeakMap,$=[],V=null,f=!1,p=null,c=null,v=null,b=null,m=null,y=null,_=null,g=new r(0,0,0),O=0,x=!1,B=null,F=null,I=null,N=null,D=null,P.set(0,0,e.canvas.width,e.canvas.height),H.set(0,0,e.canvas.width,e.canvas.height),E.reset(),o.reset(),a.reset()}}}function Dr(e,t,n,s,o,r,c){const j=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,Y="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),m=new i,A=new WeakMap;let S;const v=new WeakMap;let V=!1;try{V="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch{}function q(e,t){return V?new OffscreenCanvas(e,t):_t("canvas")}function K(e,t,n){let o=1;const s=y(e);if((s.width>n||s.height>n)&&(o=n/Math.max(s.width,s.height)),o<1){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap||"undefined"!=typeof VideoFrame&&e instanceof VideoFrame){const n=Math.floor(o*s.width),i=Math.floor(o*s.height);0[0]===S&&(S=q(n,i));const a=t?q(n,i):S;return a.width=n,a.height=i,a.getContext("2d").drawImage(e,0,0,n,i),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+s.width+"x"+s.height+") to ("+n+"x"+i+")."),a}return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+s.width+"x"+s.height+")."),e}return e}function h(e){return e.generateMipmaps}function f(t){e.generateMipmap(t)}function G(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function p(n,s,o,i,r=!1){if(null!==n){if(0[0]!==e[n])return e[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let c=s;if(s===e.RED&&(o===e.FLOAT&&(c=e.R32F),o===e.HALF_FLOAT&&(c=e.R16F),o===e.UNSIGNED_BYTE&&(c=e.R8)),s===e.RED_INTEGER&&(o===e.UNSIGNED_BYTE&&(c=e.R8UI),o===e.UNSIGNED_SHORT&&(c=e.R16UI),o===e.UNSIGNED_INT&&(c=e.R32UI),o===e.BYTE&&(c=e.R8I),o===e.SHORT&&(c=e.R16I),o===e.INT&&(c=e.R32I)),s===e.RG&&(o===e.FLOAT&&(c=e.RG32F),o===e.HALF_FLOAT&&(c=e.RG16F),o===e.UNSIGNED_BYTE&&(c=e.RG8)),s===e.RG_INTEGER&&(o===e.UNSIGNED_BYTE&&(c=e.RG8UI),o===e.UNSIGNED_SHORT&&(c=e.RG16UI),o===e.UNSIGNED_INT&&(c=e.RG32UI),o===e.BYTE&&(c=e.RG8I),o===e.SHORT&&(c=e.RG16I),o===e.INT&&(c=e.RG32I)),s===e.RGB_INTEGER&&(o===e.UNSIGNED_BYTE&&(c=e.RGB8UI),o===e.UNSIGNED_SHORT&&(c=e.RGB16UI),o===e.UNSIGNED_INT&&(c=e.RGB32UI),o===e.BYTE&&(c=e.RGB8I),o===e.SHORT&&(c=e.RGB16I),o===e.INT&&(c=e.RGB32I)),s===e.RGBA_INTEGER&&(o===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),o===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),o===e.UNSIGNED_INT&&(c=e.RGBA32UI),o===e.BYTE&&(c=e.RGBA8I),o===e.SHORT&&(c=e.RGBA16I),o===e.INT&&(c=e.RGBA32I)),s===e.RGB&&(o===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),o===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),s===e.RGBA){const t=r?ft:a.getTransfer(i);o===e.FLOAT&&(c=e.RGBA32F),o===e.HALF_FLOAT&&(c=e.RGBA16F),o===e.UNSIGNED_BYTE&&(c=t===l?e.SRGB8_ALPHA8:e.RGBA8),o===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),o===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return c!==e.R16F&&c!==e.R32F&&c!==e.RG16F&&c!==e.RG32F&&c!==e.RGBA16F&&c!==e.RGBA32F||t.get("EXT_color_buffer_float"),c}function T(t,n){let s;return t?null===n||n===Te||n===ht?s=e.DEPTH24_STENCIL8:n===H?s=e.DEPTH32F_STENCIL8:n===tt&&(s=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):null===n||n===Te||n===ht?s=e.DEPTH_COMPONENT24:n===H?s=e.DEPTH_COMPONENT32F:n===tt&&(s=e.DEPTH_COMPONENT16),s}function P(e,t){return!0===h(e)||e.isFramebufferTexture&&e.minFilter!==I&&e.minFilter!==B?Math.log2(Math.max(t.width,t.height))+1:0[0]!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function R(e){const t=e.target;t.removeEventListener("dispose",R),function(e){const n=s.get(e);if(0[0]===n.__webglInit)return;const o=e.source,t=v.get(o);if(t){const s=t[n.__cacheKey];s.usedTimes--,0===s.usedTimes&&U(e),0===Object.keys(t).length&&v.delete(o)}s.remove(e)}(t),t.isVideoTexture&&A.delete(t)}function L(t){const n=t.target;n.removeEventListener("dispose",L),function(t){const n=s.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),s.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let s=0;s<n.__webglFramebuffer[t].length;s++)e.deleteFramebuffer(n.__webglFramebuffer[t][s]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}const o=t.textures;for(let t=0,i=o.length;t<i;t++){const n=s.get(o[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),c.memory.textures--),s.remove(o[t])}s.remove(t)}(n)}function U(t){const n=s.get(t);e.deleteTexture(n.__webglTexture);const o=t.source;delete v.get(o)[n.__cacheKey],c.memory.textures--}let k=0;function $(t,o){const i=s.get(t);if(t.isVideoTexture&&function(e){const t=c.render.frame;A.get(e)!==t&&(A.set(e,t),e.update())}(t),!1===t.isRenderTargetTexture&&!0!==t.isExternalTexture&&t.version>0&&i.__version!==t.version){const e=t.image;if(null===e)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==e.complete)return void C(i,t,o);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+o)}const O={[mn]:e.REPEAT,[Qe]:e.CLAMP_TO_EDGE,[In]:e.MIRRORED_REPEAT},F={[I]:e.NEAREST,[wr]:e.NEAREST_MIPMAP_NEAREST,[Kt]:e.NEAREST_MIPMAP_LINEAR,[B]:e.LINEAR,[rn]:e.LINEAR_MIPMAP_NEAREST,[Oe]:e.LINEAR_MIPMAP_LINEAR},X={[sc]:e.NEVER,[Xr]:e.ALWAYS,[nc]:e.LESS,[ec]:e.LEQUAL,[tc]:e.EQUAL,[Qr]:e.GEQUAL,[Jr]:e.GREATER,[Zr]:e.NOTEQUAL};function b(n,i){if(i.type!==H||!1!==t.has("OES_texture_float_linear")||i.magFilter!==B&&i.magFilter!==rn&&i.magFilter!==Kt&&i.magFilter!==Oe&&i.minFilter!==B&&i.minFilter!==rn&&i.minFilter!==Kt&&i.minFilter!==Oe||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(n,e.TEXTURE_WRAP_S,O[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,O[i.wrapT]),n!==e.TEXTURE_3D&&n!==e.TEXTURE_2D_ARRAY||e.texParameteri(n,e.TEXTURE_WRAP_R,O[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,F[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,F[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,X[i.compareFunction])),!0===t.has("EXT_texture_filter_anisotropic")){if(i.magFilter===I)return;if(i.minFilter!==Kt&&i.minFilter!==Oe)return;if(i.type===H&&!1===t.has("OES_texture_float_linear"))return;if(i.anisotropy>1||s.get(i).__currentAnisotropy){const a=t.get("EXT_texture_filter_anisotropic");e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,o.getMaxAnisotropy())),s.get(i).__currentAnisotropy=i.anisotropy}}}function N(t,n){let i=!1;0[0]===t.__webglInit&&(t.__webglInit=!0,n.addEventListener("dispose",R));const a=n.source;let s=v.get(a);0[0]===s&&(s={},v.set(a,s));const o=function(e){const t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}(n);if(o!==t.__cacheKey){0[0]===s[o]&&(s[o]={texture:e.createTexture(),usedTimes:0},c.memory.textures++,i=!0),s[o].usedTimes++;const a=s[t.__cacheKey];0[0]!==a&&(s[t.__cacheKey].usedTimes--,0===a.usedTimes&&U(n)),t.__cacheKey=o,t.__webglTexture=s[o].texture}return i}function E(e,t,n){return Math.floor(Math.floor(e/n)/t)}function C(t,i,c){let l=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(l=e.TEXTURE_3D);const m=N(t,i),d=i.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);const u=s.get(d);if(d.version!==u.__version||!0===m){n.activeTexture(e.TEXTURE0+c);const S=a.getPrimaries(a.workingColorSpace),A=i.colorSpace===Ie?null:a.getPrimaries(i.colorSpace),k=i.colorSpace===Ie||S===A?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let t=K(i.image,!1,o.maxTextureSize);t=W(i,t);const g=r.convert(i.format,i.colorSpace),j=r.convert(i.type);let s,v=p(i.internalFormat,g,j,i.colorSpace,i.isVideoTexture);b(l,i);const _=i.mipmaps,w=!0!==i.isVideoTexture,O=0[0]===u.__version||!0===m,x=d.dataReady,C=P(i,t);if(i.isDepthTexture)v=T(i.format===lt,i.type),O&&(w?n.texStorage2D(e.TEXTURE_2D,1,v,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,v,t.width,t.height,0,g,j,null));else if(i.isDataTexture)if(_.length>0){w&&O&&n.texStorage2D(e.TEXTURE_2D,C,v,_[0].width,_[0].height);for(let t=0,o=_.length;t<o;t++)s=_[t],w?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,g,j,s.data):n.texImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,g,j,s.data);i.generateMipmaps=!1}else w?(O&&n.texStorage2D(e.TEXTURE_2D,C,v,t.width,t.height),x&&function(t,s,o,i){const a=t.updateRanges;if(0===a.length)n.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,o,i,s.data);else{a.sort((e,t)=>e.start-t.start);let r=0;for(let n=1;n<a.length;n++){const t=a[r],e=a[n],i=t.start+t.count,o=E(e.start,s.width,4),c=E(t.start,s.width,4);e.start<=i+1&&o===c&&E(e.start+e.count-1,s.width,4)===o?t.count=Math.max(t.count,e.start+e.count-t.start):(++r,a[r]=e)}a.length=r+1;const c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),d=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let t=0,u=a.length;t<u;t++){const r=a[t],c=Math.floor(r.start/4),h=Math.ceil(r.count/4),l=c%s.width,d=Math.floor(c/s.width),m=h,f=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,l,d,m,f,o,i,s.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,d)}}(i,t,g,j)):n.texImage2D(e.TEXTURE_2D,0,v,t.width,t.height,0,g,j,t.data);else if(i.isCompressedTexture)if(i.isCompressedArrayTexture){w&&O&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,v,_[0].width,_[0].height,t.depth);for(let o=0,a=_.length;o<a;o++)if(s=_[o],i.format!==z)if(null!==g)if(w){if(x)if(i.layerUpdates.size>0){const t=Bo(s.width,s.height,i.format,i.type);for(const a of i.layerUpdates){const r=s.data.subarray(a*t/s.data.BYTES_PER_ELEMENT,(a+1)*t/s.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,o,0,0,a,s.width,s.height,1,g,r)}i.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,o,0,0,0,s.width,s.height,t.depth,g,s.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,o,v,s.width,s.height,t.depth,0,s.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?x&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,o,0,0,0,s.width,s.height,t.depth,g,j,s.data):n.texImage3D(e.TEXTURE_2D_ARRAY,o,v,s.width,s.height,t.depth,0,g,j,s.data)}else{w&&O&&n.texStorage2D(e.TEXTURE_2D,C,v,_[0].width,_[0].height);for(let t=0,o=_.length;t<o;t++)s=_[t],i.format!==z?null!==g?w?x&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,g,s.data):n.compressedTexImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,g,j,s.data):n.texImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,g,j,s.data)}else if(i.isDataArrayTexture)if(w){if(O&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,v,t.width,t.height,t.depth),x)if(i.layerUpdates.size>0){const s=Bo(t.width,t.height,i.format,i.type);for(const o of i.layerUpdates){const a=t.data.subarray(o*s/t.data.BYTES_PER_ELEMENT,(o+1)*s/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,g,j,a)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,g,j,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,v,t.width,t.height,t.depth,0,g,j,t.data);else if(i.isData3DTexture)w?(O&&n.texStorage3D(e.TEXTURE_3D,C,v,t.width,t.height,t.depth),x&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,g,j,t.data)):n.texImage3D(e.TEXTURE_3D,0,v,t.width,t.height,t.depth,0,g,j,t.data);else if(i.isFramebufferTexture){if(O)if(w)n.texStorage2D(e.TEXTURE_2D,C,v,t.width,t.height);else{let s=t.width,o=t.height;for(let t=0;t<C;t++)n.texImage2D(e.TEXTURE_2D,t,v,s,o,0,g,j,null),s>>=1,o>>=1}}else if(_.length>0){if(w&&O){const t=y(_[0]);n.texStorage2D(e.TEXTURE_2D,C,v,t.width,t.height)}for(let t=0,o=_.length;t<o;t++)s=_[t],w?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g,j,s):n.texImage2D(e.TEXTURE_2D,t,v,g,j,s);i.generateMipmaps=!1}else if(w){if(O){const s=y(t);n.texStorage2D(e.TEXTURE_2D,C,v,s.width,s.height)}x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,g,j,t)}else n.texImage2D(e.TEXTURE_2D,0,v,g,j,t);h(i)&&f(l),u.__version=d.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function u(t,o,i,a,c,l){const u=r.convert(i.format,i.colorSpace),h=r.convert(i.type),f=p(i.internalFormat,u,h,i.colorSpace),v=s.get(o),m=s.get(i);if(m.__renderTarget=o,!v.__hasExternalTextures){const t=Math.max(1,o.width>>l),s=Math.max(1,o.height>>l);c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY?n.texImage3D(c,l,f,t,s,o.depth,0,u,h,null):n.texImage2D(c,l,f,t,s,0,u,h,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),d(o)?j.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,c,m.__webglTexture,0,g(o)):(c===e.TEXTURE_2D||c>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,c,m.__webglTexture,l),n.bindFramebuffer(e.FRAMEBUFFER,null)}function w(t,n,s){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){const o=n.depthTexture,r=o&&o.isDepthTexture?o.type:null,i=T(n.stencilBuffer,r),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=g(n);d(n)?j.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,a,i,n.width,n.height):s?e.renderbufferStorageMultisample(e.RENDERBUFFER,a,i,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{const t=n.textures;for(let i=0;i<t.length;i++){const o=t[i],l=r.convert(o.format,o.colorSpace),u=r.convert(o.type),a=p(o.internalFormat,l,u,o.colorSpace),c=g(n);s&&!1===d(n)?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,a,n.width,n.height):d(n)?j.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,a,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,a,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function D(t,o){if(o&&o.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,t),!o.depthTexture||!o.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const a=s.get(o.depthTexture);a.__renderTarget=o,a.__webglTexture&&o.depthTexture.image.width===o.width&&o.depthTexture.image.height===o.height||(o.depthTexture.image.width=o.width,o.depthTexture.image.height=o.height,o.depthTexture.needsUpdate=!0),$(o.depthTexture,0);const i=a.__webglTexture,r=g(o);if(o.depthTexture.format===yt)d(o)?j.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0,r):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0);else{if(o.depthTexture.format!==lt)throw new Error("Unknown depthTexture format");d(o)?j.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0,r):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0)}}function x(t){const o=s.get(t),i=!0===t.isWebGLCubeRenderTarget;if(o.__boundDepthTexture!==t.depthTexture){const e=t.depthTexture;if(o.__depthDisposeCallback&&o.__depthDisposeCallback(),e){const t=()=>{delete o.__boundDepthTexture,delete o.__depthDisposeCallback,e.removeEventListener("dispose",t)};e.addEventListener("dispose",t),o.__depthDisposeCallback=t}o.__boundDepthTexture=e}if(t.depthTexture&&!o.__autoAllocateDepthBuffer){if(i)throw new Error("target.depthTexture not supported in Cube render targets");const e=t.texture.mipmaps;e&&e.length>0?D(o.__webglFramebuffer[0],t):D(o.__webglFramebuffer,t)}else if(i){o.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[s]),0[0]===o.__webglDepthbuffer[s])o.__webglDepthbuffer[s]=e.createRenderbuffer(),w(o.__webglDepthbuffer[s],t,!1);else{const i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=o.__webglDepthbuffer[s];e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,n)}}else{const s=t.texture.mipmaps;if(s&&s.length>0?n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),0[0]===o.__webglDepthbuffer)o.__webglDepthbuffer=e.createRenderbuffer(),w(o.__webglDepthbuffer,t,!1);else{const s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=o.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,n)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}const _=[],M=[];function g(e){return Math.min(o.maxSamples,e.samples)}function d(e){const n=s.get(e);return e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==n.__useRenderToTexture}function W(e,t){const n=e.colorSpace,s=e.format,o=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||n!==Ve&&n!==Ie&&(a.getTransfer(n)===l?s===z&&o===Z||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",n)),t}function y(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement?(m.width=e.naturalWidth||e.width,m.height=e.naturalHeight||e.height):"undefined"!=typeof VideoFrame&&e instanceof VideoFrame?(m.width=e.displayWidth,m.height=e.displayHeight):(m.width=e.width,m.height=e.height),m}this.allocateTextureUnit=function(){const e=k;return e>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+o.maxTextures),k+=1,e},this.resetTextureUnits=function(){k=0},this.setTexture2D=$,this.setTexture2DArray=function(t,o){const i=s.get(t);!1===t.isRenderTargetTexture&&t.version>0&&i.__version!==t.version?C(i,t,o):n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+o)},this.setTexture3D=function(t,o){const i=s.get(t);!1===t.isRenderTargetTexture&&t.version>0&&i.__version!==t.version?C(i,t,o):n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+o)},this.setTextureCube=function(t,i){const c=s.get(t);t.version>0&&c.__version!==t.version?function(t,i,c){if(6!==i.image.length)return;const u=N(t,i),l=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);const d=s.get(l);if(l.version!==d.__version||!0===u){n.activeTexture(e.TEXTURE0+c);const k=a.getPrimaries(a.workingColorSpace),S=i.colorSpace===Ie?null:a.getPrimaries(i.colorSpace),A=i.colorSpace===Ie||k===S?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);const C=i.isCompressedTexture||i.image[0].isCompressedTexture,O=i.image[0]&&i.image[0].isDataTexture,t=[];for(let e=0;e<6;e++)t[e]=C||O?O?i.image[e].image:i.image[e]:K(i.image[e],!0,o.maxCubemapSize),t[e]=W(i,t[e]);const w=t[0],s=r.convert(i.format,i.colorSpace),m=r.convert(i.type),j=p(i.internalFormat,s,m,i.colorSpace),v=!0!==i.isVideoTexture,E=0[0]===d.__version||!0===u,_=l.dataReady;let g,x=P(i,w);if(b(e.TEXTURE_CUBE_MAP,i),C){v&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,x,j,w.width,w.height);for(let o=0;o<6;o++){g=t[o].mipmaps;for(let a=0;a<g.length;a++){const t=g[a];i.format!==z?null!==s?v?_&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,a,0,0,t.width,t.height,s,t.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,a,j,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,a,0,0,t.width,t.height,s,m,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,a,j,t.width,t.height,0,s,m,t.data)}}}else{if(g=i.mipmaps,v&&E){g.length>0&&x++;const s=y(t[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,x,j,s.width,s.height)}for(let o=0;o<6;o++)if(O){v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,t[o].width,t[o].height,s,m,t[o].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,j,t[o].width,t[o].height,0,s,m,t[o].data);for(let i=0;i<g.length;i++){const t=g[i].image[o].image;v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,0,0,t.width,t.height,s,m,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,j,t.width,t.height,0,s,m,t.data)}}else{v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,s,m,t[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,j,s,m,t[o]);for(let t=0;t<g.length;t++){const i=g[t];v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,0,0,s,m,i.image[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,j,s,m,i.image[o])}}}h(i)&&f(e.TEXTURE_CUBE_MAP),d.__version=l.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}(c,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture,e.TEXTURE0+i)},this.rebindTextures=function(t,n,o){const i=s.get(t);0[0]!==n&&u(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),0[0]!==o&&x(t)},this.setupRenderTarget=function(t){const o=t.texture,i=s.get(t),l=s.get(o);t.addEventListener("dispose",L);const a=t.textures,v=!0===t.isWebGLCubeRenderTarget,m=a.length>1;if(m||(0[0]===l.__webglTexture&&(l.__webglTexture=e.createTexture()),l.__version=o.version,c.memory.textures++),v){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(o.mipmaps&&o.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<o.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(o.mipmaps&&o.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<o.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(m)for(let t=0,o=a.length;t<o;t++){const n=s.get(a[t]);0[0]===n.__webglTexture&&(n.__webglTexture=e.createTexture(),c.memory.textures++)}if(t.samples>0&&!1===d(t)){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){const s=a[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);const o=r.convert(s.format,s.colorSpace),c=r.convert(s.type),l=p(s.internalFormat,o,c,s.colorSpace,!0===t.isXRRenderTarget),d=g(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,d,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),w(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(v){n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),b(e.TEXTURE_CUBE_MAP,o);for(let n=0;n<6;n++)if(o.mipmaps&&o.mipmaps.length>0)for(let s=0;s<o.mipmaps.length;s++)u(i.__webglFramebuffer[n][s],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,s);else u(i.__webglFramebuffer[n],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);h(o)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(m){for(let r=0,l=a.length;r<l;r++){const c=a[r],d=s.get(c);let o=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,d.__webglTexture),b(o,c),u(i.__webglFramebuffer,t,c,e.COLOR_ATTACHMENT0+r,o,0),h(c)&&f(o)}n.unbindTexture()}else{let s=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(s,l.__webglTexture),b(s,o),o.mipmaps&&o.mipmaps.length>0)for(let n=0;n<o.mipmaps.length;n++)u(i.__webglFramebuffer[n],t,o,e.COLOR_ATTACHMENT0,s,n);else u(i.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0,s,0);h(o)&&f(s),n.unbindTexture()}t.depthBuffer&&x(t)},this.updateRenderTargetMipmap=function(e){const t=e.textures;for(let o=0,a=t.length;o<a;o++){const i=t[o];if(h(i)){const t=G(e),o=s.get(i).__webglTexture;n.bindTexture(t,o),f(t),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(t.samples>0)if(!1===d(t)){const i=t.textures,c=t.width,l=t.height;let a=e.COLOR_BUFFER_BIT;const d=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,o=s.get(t),r=i.length>1;if(r)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);const u=t.texture.mipmaps;u&&u.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),r){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);const t=s.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,c,l,0,0,c,l,a,e.NEAREST),!0===Y&&(_.length=0,M.length=0,_.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&!1===t.resolveDepthBuffer&&(_.push(d),M.push(d),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,M)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),r)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,o.__webglColorRenderbuffer[t]);const a=s.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&!1===t.resolveDepthBuffer&&Y){const n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}},this.setupDepthRenderbuffer=x,this.setupFrameBufferTexture=u,this.useMultisampledRTT=d}function Nr(e,t){return{convert:function(n,s=""){let o;const i=a.getTransfer(s);if(n===Z)return e.UNSIGNED_BYTE;if(n===Gn)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Xn)return e.UNSIGNED_SHORT_5_5_5_1;if(35902===n)return e.UNSIGNED_INT_5_9_9_9_REV;if(35899===n)return e.UNSIGNED_INT_10F_11F_11F_REV;if(1010===n)return e.BYTE;if(1011===n)return e.SHORT;if(n===tt)return e.UNSIGNED_SHORT;if(n===xn)return e.INT;if(n===Te)return e.UNSIGNED_INT;if(n===H)return e.FLOAT;if(n===Ke)return e.HALF_FLOAT;if(1021===n)return e.ALPHA;if(1022===n)return e.RGB;if(n===z)return e.RGBA;if(n===yt)return e.DEPTH_COMPONENT;if(n===lt)return e.DEPTH_STENCIL;if(1028===n)return e.RED;if(n===ls)return e.RED_INTEGER;if(1030===n)return e.RG;if(n===ws)return e.RG_INTEGER;if(n===Ss)return e.RGBA_INTEGER;if(n===wt||n===Mt||n===Jt||n===Qt)if(i===l){{if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),null===o)return null;if(n===wt)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mt)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jt)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qt)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}}else{if(o=t.get("WEBGL_compressed_texture_s3tc"),null===o)return null;if(n===wt)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mt)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jt)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qt)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===sn||n===an||n===vn||n===wn){if(o=t.get("WEBGL_compressed_texture_pvrtc"),null===o)return null;if(n===sn)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===an)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vn)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wn)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Cn||n===En||n===kn){if(o=t.get("WEBGL_compressed_texture_etc"),null===o)return null;if(n===Cn||n===En)return i===l?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===kn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}if(n===Sn||n===Mn||n===Fn||n===zn||n===Dn||n===Ln||n===Rn||n===Pn||n===Hn||n===Bn||n===nn||n===Un||n===qn||n===Zn){if(o=t.get("WEBGL_compressed_texture_astc"),null===o)return null;if(n===Sn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ln)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Un)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zn)return i===l?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===hs||n===bs||n===js){if(o=t.get("EXT_texture_compression_bptc"),null===o)return null;if(n===hs)return i===l?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bs)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===js)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===ys||n===_s||n===Os||n===xs){if(o=t.get("EXT_texture_compression_rgtc"),null===o)return null;if(n===ys)return o.COMPRESSED_RED_RGTC1_EXT;if(n===_s)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Os)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xs)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===ht?e.UNSIGNED_INT_24_8:0[0]!==e[n]?e[n]:null}}}class Lr{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(null===this.texture){const n=new Po(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(null!==this.texture&&null===this.mesh){const t=e.cameras[0].viewport,n=new te({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new P(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rr extends $e{constructor(t,n){super();const p=this;let s=null,F=1,y=null,B="local-floor",E=1,b=null,T=null,d=null,r=null,a=null,A=null;const w="undefined"!=typeof XRWebGLBinding,f=new Lr,_={},m=n.getContextAttributes();let N=null,g=null;const c=[],h=[],C=new i;let V=null;const v=new k;v.viewport=new u;const j=new k;j.viewport=new u;const D=[v,j],o=new Jo;let x=null,M=null;function l(e){const n=h.indexOf(e.inputSource);if(-1===n)return;const t=c[n];0[0]!==t&&(t.update(e.inputSource,e.frame,b||y),t.dispatchEvent({type:e.type,data:e.inputSource}))}function L(){s.removeEventListener("select",l),s.removeEventListener("selectstart",l),s.removeEventListener("selectend",l),s.removeEventListener("squeeze",l),s.removeEventListener("squeezestart",l),s.removeEventListener("squeezeend",l),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",R);for(let e=0;e<c.length;e++){const t=h[e];null!==t&&(h[e]=null,c[e].disconnect(t))}x=null,M=null,f.reset();for(const e in _)delete _[e];t.setRenderTarget(N),a=null,r=null,d=null,s=null,g=null,O.stop(),p.isPresenting=!1,t.setPixelRatio(V),t.setSize(C.width,C.height,!1),p.dispatchEvent({type:"sessionend"})}function R(e){for(let t=0;t<e.removed.length;t++){const s=e.removed[t],n=h.indexOf(s);n>=0&&(h[n]=null,c[n].disconnect(s))}for(let s=0;s<e.added.length;s++){const n=e.added[s];let t=h.indexOf(n);if(-1===t){for(let e=0;e<c.length;e++){if(e>=h.length){h.push(n),t=e;break}if(null===h[e]){h[e]=n,t=e;break}}if(-1===t)break}const o=c[t];o&&o.connect(n)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=c[e];return 0[0]===t&&(t=new dn,c[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=c[e];return 0[0]===t&&(t=new dn,c[e]=t),t.getGripSpace()},this.getHand=function(e){let t=c[e];return 0[0]===t&&(t=new dn,c[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){F=e,!0===p.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){B=e,!0===p.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return b||y},this.setReferenceSpace=function(e){b=e},this.getBaseLayer=function(){return null!==r?r:a},this.getBinding=function(){return null===d&&w&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(e){if(s=e,null!==s){if(N=t.getRenderTarget(),s.addEventListener("select",l),s.addEventListener("selectstart",l),s.addEventListener("selectend",l),s.addEventListener("squeeze",l),s.addEventListener("squeezestart",l),s.addEventListener("squeezeend",l),s.addEventListener("end",L),s.addEventListener("inputsourceschange",R),!0!==m.xrCompatible&&await n.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let e=null,o=null,i=null;m.depth&&(i=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,e=m.stencil?lt:yt,o=m.stencil?ht:Te);const a={colorFormat:n.RGBA8,depthFormat:i,scaleFactor:F};d=this.getBinding(),r=d.createProjectionLayer(a),s.updateRenderState({layers:[r]}),t.setPixelRatio(1),t.setSize(r.textureWidth,r.textureHeight,!1),g=new le(r.textureWidth,r.textureHeight,{format:z,type:Z,depthTexture:new Ro(r.textureWidth,r.textureHeight,o,0[0],0[0],0[0],0[0],0[0],0[0],e),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:!1===r.ignoreDepthValues,resolveStencilBuffer:!1===r.ignoreDepthValues})}else{const e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:F};a=new XRWebGLLayer(s,n,e),s.updateRenderState({baseLayer:a}),t.setPixelRatio(1),t.setSize(a.framebufferWidth,a.framebufferHeight,!1),g=new le(a.framebufferWidth,a.framebufferHeight,{format:z,type:Z,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:!1===a.ignoreDepthValues,resolveStencilBuffer:!1===a.ignoreDepthValues})}g.isXRRenderTarget=!0,this.setFoveation(E),b=null,y=await s.requestReferenceSpace(B),O.setContext(s),O.start(),p.isPresenting=!0,p.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(null!==s)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};const P=new e,H=new e;function I(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(null===s)return;let i=e.near,a=e.far;null!==f.texture&&(f.depthNear>0&&(i=f.depthNear),f.depthFar>0&&(a=f.depthFar)),o.near=j.near=v.near=i,o.far=j.far=v.far=a,x===o.near&&M===o.far||(s.updateRenderState({depthNear:o.near,depthFar:o.far}),x=o.near,M=o.far),o.layers.mask=6|e.layers.mask,v.layers.mask=3&o.layers.mask,j.layers.mask=5&o.layers.mask;const t=e.parent,n=o.cameras;I(o,t);for(let e=0;e<n.length;e++)I(n[e],t);2===n.length?function(e,t,n){P.setFromMatrixPosition(t.matrixWorld),H.setFromMatrixPosition(n.matrixWorld);const d=P.distanceTo(H),s=t.projectionMatrix.elements,l=n.projectionMatrix.elements,i=s[14]/(s[10]-1),a=s[14]/(s[10]+1),p=(s[9]+1)/s[5],h=(s[9]-1)/s[5],c=(s[8]-1)/s[0],u=(l[8]+1)/l[0],f=i*c,m=i*u,o=d/(-c+u),r=o*-c;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(r),e.translateZ(o),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),-1===s[10])e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{const t=i+o,n=a+o,s=f-r,c=m+(d-r),l=p*a/n*t,u=h*a/n*t;e.projectionMatrix.makePerspective(s,c,l,u,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}(o,v,j):o.projectionMatrix.copy(v.projectionMatrix),function(e,t,n){null===n?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=2*fs*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}(e,o,t)},this.getCamera=function(){return o},this.getFoveation=function(){if(null!==r||null!==a)return E},this.setFoveation=function(e){E=e,null!==r&&(r.fixedFoveation=e),null!==a&&0[0]!==a.fixedFoveation&&(a.fixedFoveation=e)},this.hasDepthSensing=function(){return null!==f.texture},this.getDepthSensingMesh=function(){return f.getMesh(o)},this.getCameraTexture=function(e){return _[e]};let S=null;const O=new Io;O.setAnimationLoop(function(e,n){if(T=n.getViewerPose(b||y),A=n,null!==T){const e=T.views;null!==a&&(t.setRenderTargetFramebuffer(g,a.framebuffer),t.setRenderTarget(g));let i=!1;e.length!==o.cameras.length&&(o.cameras.length=0,i=!0);for(let s=0;s<e.length;s++){const l=e[s];let c=null;if(null!==a)c=a.getViewport(l);else{const e=d.getViewSubImage(r,l);c=e.viewport,0===s&&(t.setRenderTargetTextures(g,e.colorTexture,e.depthStencilTexture),t.setRenderTarget(g))}let n=D[s];0[0]===n&&(n=new k,n.layers.enable(s),n.viewport=new u,D[s]=n),n.matrix.fromArray(l.transform.matrix),n.matrix.decompose(n.position,n.quaternion,n.scale),n.projectionMatrix.fromArray(l.projectionMatrix),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),n.viewport.set(c.x,c.y,c.width,c.height),0===s&&(o.matrix.copy(n.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale)),!0===i&&o.cameras.push(n)}const n=s.enabledFeatures;if(n&&n.includes("depth-sensing")&&"gpu-optimized"==s.depthUsage&&w){d=p.getBinding();const t=d.getDepthInformation(e[0]);t&&t.isValid&&t.texture&&f.init(t,s.renderState)}if(n&&n.includes("camera-access")&&w){t.state.unbindTexture(),d=p.getBinding();for(let n=0;n<e.length;n++){const t=e[n].camera;if(t){let e=_[t];e||(e=new Po,_[t]=e);const n=d.getCameraImage(t);e.sourceTexture=n}}}}for(let e=0;e<c.length;e++){const t=h[e],s=c[e];null!==t&&0[0]!==s&&s.update(t,n,b||y)}S&&S(e,n),n.detectedPlanes&&p.dispatchEvent({type:"planesdetected",data:n}),A=null}),this.setAnimationLoop=function(e){S=e},this.dispose=function(){}}}const de=new X,Hr=new m;function Ir(e,t){function n(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function s(e,s){e.opacity.value=s.opacity,s.color&&e.diffuse.value.copy(s.color),s.emissive&&e.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(e.map.value=s.map,n(s.map,e.mapTransform)),s.alphaMap&&(e.alphaMap.value=s.alphaMap,n(s.alphaMap,e.alphaMapTransform)),s.bumpMap&&(e.bumpMap.value=s.bumpMap,n(s.bumpMap,e.bumpMapTransform),e.bumpScale.value=s.bumpScale,1===s.side&&(e.bumpScale.value*=-1)),s.normalMap&&(e.normalMap.value=s.normalMap,n(s.normalMap,e.normalMapTransform),e.normalScale.value.copy(s.normalScale),1===s.side&&e.normalScale.value.negate()),s.displacementMap&&(e.displacementMap.value=s.displacementMap,n(s.displacementMap,e.displacementMapTransform),e.displacementScale.value=s.displacementScale,e.displacementBias.value=s.displacementBias),s.emissiveMap&&(e.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,e.emissiveMapTransform)),s.specularMap&&(e.specularMap.value=s.specularMap,n(s.specularMap,e.specularMapTransform)),s.alphaTest>0&&(e.alphaTest.value=s.alphaTest);const i=t.get(s),o=i.envMap,a=i.envMapRotation;o&&(e.envMap.value=o,de.copy(a),de.x*=-1,de.y*=-1,de.z*=-1,o.isCubeTexture&&!1===o.isRenderTargetTexture&&(de.y*=-1,de.z*=-1),e.envMapRotation.value.setFromMatrix4(Hr.makeRotationFromEuler(de)),e.flipEnvMap.value=o.isCubeTexture&&!1===o.isRenderTargetTexture?-1:1,e.reflectivity.value=s.reflectivity,e.ior.value=s.ior,e.refractionRatio.value=s.refractionRatio),s.lightMap&&(e.lightMap.value=s.lightMap,e.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,e.lightMapTransform)),s.aoMap&&(e.aoMap.value=s.aoMap,e.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,e.aoMapTransform))}return{refreshFogUniforms:function(t,n){n.color.getRGB(t.fogColor.value,qs(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)},refreshMaterialUniforms:function(e,o,i,a,r){o.isMeshBasicMaterial||o.isMeshLambertMaterial?s(e,o):o.isMeshToonMaterial?(s(e,o),function(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}(e,o)):o.isMeshPhongMaterial?(s(e,o),function(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}(e,o)):o.isMeshStandardMaterial?(s(e,o),function(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}(e,o),o.isMeshPhysicalMaterial&&function(e,t,s){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),1===t.side&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=s.texture,e.transmissionSamplerSize.value.set(s.width,s.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}(e,o,r)):o.isMeshMatcapMaterial?(s(e,o),function(e,t){t.matcap&&(e.matcap.value=t.matcap)}(e,o)):o.isMeshDepthMaterial?s(e,o):o.isMeshDistanceMaterial?(s(e,o),function(e,n){const s=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(s.matrixWorld),e.nearDistance.value=s.shadow.camera.near,e.farDistance.value=s.shadow.camera.far}(e,o)):o.isMeshNormalMaterial?s(e,o):o.isLineBasicMaterial?(function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}(e,o),o.isLineDashedMaterial&&function(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}(e,o)):o.isPointsMaterial?function(e,t,s,o){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*s,e.scale.value=.5*o,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,o,i,a):o.isSpriteMaterial?function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,o):o.isShadowMaterial?(e.color.value.copy(o.color),e.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}}}function Br(e,t,n,s){let o={},a={},i=[];const l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function d(e,t,n,s){const o=e.value,i=t+"_"+n;if(0[0]===s[i])return s[i]="number"==typeof o||"boolean"==typeof o?o:o.clone(),!0;{const e=s[i];if("number"==typeof o||"boolean"==typeof o){if(e!==o)return s[i]=o,!0}else if(!1===e.equals(o))return e.copy(o),!0}return!1}function r(e){const t={boundary:0,storage:0};return"number"==typeof e||"boolean"==typeof e?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",e),t}function c(t){const n=t.target;n.removeEventListener("dispose",c);const s=i.indexOf(n.__bindingPointIndex);i.splice(s,1),e.deleteBuffer(o[n.id]),delete o[n.id],delete a[n.id]}return{bind:function(e,t){const n=t.program;s.uniformBlockBinding(e,n)},update:function(n,u){let h=o[n.id];0[0]===h&&(function(e){const n=e.uniforms;let t=0;for(let e=0,o=n.length;e<o;e++){const s=Array.isArray(n[e])?n[e]:[n[e]];for(let n=0,i=s.length;n<i;n++){const e=s[n],o=Array.isArray(e.value)?e.value:[e.value];for(let s=0,l=o.length;s<l;s++){const n=r(o[s]),a=t%16,c=a%n.boundary,i=a+c;t+=c,0!==i&&16-i<n.storage&&(t+=16-i),e.__data=new Float32Array(n.storage/Float32Array.BYTES_PER_ELEMENT),e.__offset=t,t+=n.storage}}}const s=t%16;s>0&&(t+=16-s),e.__size=t,e.__cache={}}(n),h=function(t){const s=function(){for(let e=0;e<l;e++)if(-1===i.indexOf(e))return i.push(e),e;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();t.__bindingPointIndex=s;const n=e.createBuffer(),o=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,o,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,s,n),n}(n),o[n.id]=h,n.addEventListener("dispose",c));const f=u.program;s.updateUBOMapping(n,f);const m=t.render.frame;a[n.id]!==m&&(function(t){const s=o[t.id],n=t.uniforms,i=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,s);for(let t=0,o=n.length;t<o;t++){const s=Array.isArray(n[t])?n[t]:[n[t]];for(let o=0,a=s.length;o<a;o++){const n=s[o];if(!0===d(n,t,o,i)){const s=n.__offset,o=Array.isArray(n.value)?n.value:[n.value];let t=0;for(let a=0;a<o.length;a++){const i=o[a],c=r(i);"number"==typeof i||"boolean"==typeof i?(n.__data[0]=i,e.bufferSubData(e.UNIFORM_BUFFER,s+t,n.__data)):i.isMatrix3?(n.__data[0]=i.elements[0],n.__data[1]=i.elements[1],n.__data[2]=i.elements[2],n.__data[3]=0,n.__data[4]=i.elements[3],n.__data[5]=i.elements[4],n.__data[6]=i.elements[5],n.__data[7]=0,n.__data[8]=i.elements[6],n.__data[9]=i.elements[7],n.__data[10]=i.elements[8],n.__data[11]=0):(i.toArray(n.__data,t),t+=c.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,s,n.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}(n),a[n.id]=m)},dispose:function(){for(const t in o)e.deleteBuffer(o[t]);i=[],o={},a={}}}}class Vr{constructor(t={}){const{canvas:p=Gr(),context:K=null,depth:Ue=!0,stencil:ve=!1,alpha:Ge=!1,antialias:Xe=!1,premultipliedAlpha:ye=!0,preserveDrawingBuffer:Qe=!1,powerPreference:We="default",failIfMajorPerformanceCaveat:Ye=!1,reversedDepthBuffer:qe=!1}=t;let ie;if(this.isWebGLRenderer=!0,null!==K){if("undefined"!=typeof WebGLRenderingContext&&K instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");ie=K.getContextAttributes().alpha}else ie=Ge;const B=new Uint32Array(4),I=new Int32Array(4);let g=null,c=null;const L=[],C=[];this.domElement=p,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const s=this;let fe=!1;this._outputColorSpace=E;let ne=0,q=0,d=null,$=-1,D=null;const T=new u,J=new u;let ae=null;const Pe=new r(0);let oe=0,z=p.width,k=p.height,v=1,Be=null,ke=null;const W=new u(0,0,z,k),U=new u(0,0,z,k);let se=!1;const ge=new Lo;let S=!1,me=!1;const Y=new m,$e=new e,A=new u,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function Ee(){return null===d?v:1}let h,b,o,w,i,l,R,P,H,ue,N,x,pe,G,X,y,_,j,_e,we,xe,O,M,Q,n=K;function Se(e,t){return p.getContext(e,t)}try{const e={alpha:!0,depth:Ue,stencil:ve,antialias:Xe,premultipliedAlpha:ye,preserveDrawingBuffer:Qe,powerPreference:We,failIfMajorPerformanceCaveat:Ye};if("setAttribute"in p&&p.setAttribute("data-engine",`three.js r${An}`),p.addEventListener("webglcontextlost",ze,!1),p.addEventListener("webglcontextrestored",De,!1),p.addEventListener("webglcontextcreationerror",Ne,!1),null===n){const t="webgl2";if(n=Se(t,e),null===n)throw Se(t)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}function Me(){h=new Ii(n),h.init(),O=new Nr(n,h),b=new yi(n,h,t,O),o=new zr(n,h),b.reversedDepthBuffer&&qe&&o.buffers.depth.setReversed(!0),w=new $i(n),i=new yr,l=new Dr(n,h,o,i,b,O,w),R=new wi(s),P=new Hi(s),H=new di(n),M=new bi(n,H),ue=new Bi(n,H,w,M),N=new Ui(n,ue,H,w),_e=new Wi(n,b,l),y=new _i(i),x=new jr(s,R,P,h,b,M,y),pe=new Ir(s,i),G=new xr,X=new Mr(h),j=new vi(s,R,P,o,N,ie,ye),_=new Fr(s,N,b),Q=new Br(n,w,b,o),we=new ji(n,h,w),xe=new Vi(n,h,w),w.programs=x.programs,s.capabilities=b,s.extensions=h,s.properties=i,s.renderLists=G,s.shadowMap=_,s.state=o,s.info=w}Me();const f=new Rr(s,n);function ze(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),fe=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),fe=!1;const e=w.autoReset,t=_.enabled,n=_.autoUpdate,s=_.needsUpdate,o=_.type;Me(),w.autoReset=e,_.enabled=t,_.autoUpdate=n,_.needsUpdate=s,_.type=o}function Ne(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function be(e){const t=e.target;t.removeEventListener("dispose",be),function(e){(function(e){const t=i.get(e).programs;0[0]!==t&&(t.forEach(function(e){x.releaseProgram(e)}),e.isShaderMaterial&&x.releaseShaderCache(e))})(e),i.remove(e)}(t)}function Re(e,t,n){!0===e.transparent&&2===e.side&&!1===e.forceSinglePass?(e.side=1,e.needsUpdate=!0,te(e,t,n),e.side=0,e.needsUpdate=!0,te(e,t,n),e.side=2):te(e,t,n)}this.xr=f,this.getContext=function(){return n},this.getContextAttributes=function(){return n.getContextAttributes()},this.forceContextLoss=function(){const e=h.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){const e=h.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(e){0[0]!==e&&(v=e,this.setSize(z,k,!1))},this.getSize=function(e){return e.set(z,k)},this.setSize=function(e,t,n=!0){f.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(z=e,k=t,p.width=Math.floor(e*v),p.height=Math.floor(t*v),!0===n&&(p.style.width=e+"px",p.style.height=t+"px"),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return e.set(z*v,k*v).floor()},this.setDrawingBufferSize=function(e,t,n){z=e,k=t,v=n,p.width=Math.floor(e*n),p.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e.copy(T)},this.getViewport=function(e){return e.copy(W)},this.setViewport=function(e,t,n,s){e.isVector4?W.set(e.x,e.y,e.z,e.w):W.set(e,t,n,s),o.viewport(T.copy(W).multiplyScalar(v).round())},this.getScissor=function(e){return e.copy(U)},this.setScissor=function(e,t,n,s){e.isVector4?U.set(e.x,e.y,e.z,e.w):U.set(e,t,n,s),o.scissor(J.copy(U).multiplyScalar(v).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(e){o.setScissorTest(se=e)},this.setOpaqueSort=function(e){Be=e},this.setTransparentSort=function(e){ke=e},this.getClearColor=function(e){return e.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,s=!0){let o=0;if(e){let e=!1;if(null!==d){const t=d.texture.format;e=t===Ss||t===ws||t===ls}if(e){const e=d.texture.type,r=e===Z||e===Te||e===tt||e===ht||e===Gn||e===Xn,t=j.getClearColor(),s=j.getClearAlpha(),o=t.r,i=t.g,a=t.b;r?(B[0]=o,B[1]=i,B[2]=a,B[3]=s,n.clearBufferuiv(n.COLOR,0,B)):(I[0]=o,I[1]=i,I[2]=a,I[3]=s,n.clearBufferiv(n.COLOR,0,I))}else o|=n.COLOR_BUFFER_BIT}t&&(o|=n.DEPTH_BUFFER_BIT),s&&(o|=n.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),n.clear(o)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){p.removeEventListener("webglcontextlost",ze,!1),p.removeEventListener("webglcontextrestored",De,!1),p.removeEventListener("webglcontextcreationerror",Ne,!1),j.dispose(),G.dispose(),X.dispose(),i.dispose(),R.dispose(),P.dispose(),N.dispose(),M.dispose(),Q.dispose(),x.dispose(),f.dispose(),f.removeEventListener("sessionstart",He),f.removeEventListener("sessionend",Ie),F.stop()},this.renderBufferDirect=function(e,t,a,r,u,m){null===t&&(t=re);const E=u.isMesh&&u.matrixWorld.determinant()<0,A=function(e,t,a,r,u){!0!==t.isScene&&(t=re),l.resetTextureUnits();const E=t.fog,W=r.isMeshStandardMaterial?t.environment:null,V=null===d?s.outputColorSpace:!0===d.isXRRenderTarget?d.texture.colorSpace:Ve,O=(r.isMeshStandardMaterial?P:R).get(r.envMap||W),I=!0===r.vertexColors&&!!a.attributes.color&&4===a.attributes.color.itemSize,H=!!a.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),N=!!a.morphAttributes.position,z=!!a.morphAttributes.normal,L=!!a.morphAttributes.color;let M=0;r.toneMapped&&(null!==d&&!0!==d.isXRRenderTarget||(M=s.toneMapping));const F=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,B=0[0]!==F?F.length:0,h=i.get(r),T=c.state.lights;if(!0===S&&(!0===me||e!==D)){const t=e===D&&r.id===$;y.setState(r,e,t)}let p=!1;r.version===h.__version?h.needsLights&&h.lightsStateVersion!==T.state.version||h.outputColorSpace!==V||u.isBatchedMesh&&!1===h.batching?p=!0:u.isBatchedMesh||!0!==h.batching?u.isBatchedMesh&&!0===h.batchingColor&&null===u.colorTexture||u.isBatchedMesh&&!1===h.batchingColor&&null!==u.colorTexture||u.isInstancedMesh&&!1===h.instancing?p=!0:u.isInstancedMesh||!0!==h.instancing?u.isSkinnedMesh&&!1===h.skinning?p=!0:u.isSkinnedMesh||!0!==h.skinning?u.isInstancedMesh&&!0===h.instancingColor&&null===u.instanceColor||u.isInstancedMesh&&!1===h.instancingColor&&null!==u.instanceColor||u.isInstancedMesh&&!0===h.instancingMorph&&null===u.morphTexture||u.isInstancedMesh&&!1===h.instancingMorph&&null!==u.morphTexture||h.envMap!==O||!0===r.fog&&h.fog!==E?p=!0:0[0]===h.numClippingPlanes||h.numClippingPlanes===y.numPlanes&&h.numIntersection===y.numIntersection?(h.vertexAlphas!==I||h.vertexTangents!==H||h.morphTargets!==N||h.morphNormals!==z||h.morphColors!==L||h.toneMapping!==M||h.morphTargetsCount!==B)&&(p=!0):p=!0:p=!0:p=!0:p=!0:(p=!0,h.__version=r.version);let _=h.currentProgram;!0===p&&(_=te(r,t,u));let A=!1,w=!1,x=!1;const m=_.getUniforms(),j=h.uniforms;if(o.useProgram(_.program)&&(A=!0,w=!0,x=!0),r.id!==$&&($=r.id,w=!0),A||D!==e){o.buffers.depth.getReversed()&&!0!==e.reversedDepth&&(e._reversedDepth=!0,e.updateProjectionMatrix()),m.setValue(n,"projectionMatrix",e.projectionMatrix),m.setValue(n,"viewMatrix",e.matrixWorldInverse);const t=m.map.cameraPosition;0[0]!==t&&t.setValue(n,$e.setFromMatrixPosition(e.matrixWorld)),b.logarithmicDepthBuffer&&m.setValue(n,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&m.setValue(n,"isOrthographic",!0===e.isOrthographicCamera),D!==e&&(D=e,w=!0,x=!0)}if(u.isSkinnedMesh){m.setOptional(n,u,"bindMatrix"),m.setOptional(n,u,"bindMatrixInverse");const e=u.skeleton;e&&(null===e.boneTexture&&e.computeBoneTexture(),m.setValue(n,"boneTexture",e.boneTexture,l))}u.isBatchedMesh&&(m.setOptional(n,u,"batchingTexture"),m.setValue(n,"batchingTexture",u._matricesTexture,l),m.setOptional(n,u,"batchingIdTexture"),m.setValue(n,"batchingIdTexture",u._indirectTexture,l),m.setOptional(n,u,"batchingColorTexture"),null!==u._colorsTexture&&m.setValue(n,"batchingColorTexture",u._colorsTexture,l));const C=a.morphAttributes;var f,g;if(0[0]===C.position&&0[0]===C.normal&&0[0]===C.color||_e.update(u,a,_),(w||h.receiveShadow!==u.receiveShadow)&&(h.receiveShadow=u.receiveShadow,m.setValue(n,"receiveShadow",u.receiveShadow)),r.isMeshGouraudMaterial&&null!==r.envMap&&(j.envMap.value=O,j.flipEnvMap.value=O.isCubeTexture&&!1===O.isRenderTargetTexture?-1:1),r.isMeshStandardMaterial&&null===r.envMap&&null!==t.environment&&(j.envMapIntensity.value=t.environmentIntensity),w&&(m.setValue(n,"toneMappingExposure",s.toneMappingExposure),h.needsLights&&(f=x,(g=j).ambientLightColor.needsUpdate=f,g.lightProbe.needsUpdate=f,g.directionalLights.needsUpdate=f,g.directionalLightShadows.needsUpdate=f,g.pointLights.needsUpdate=f,g.pointLightShadows.needsUpdate=f,g.spotLights.needsUpdate=f,g.spotLightShadows.needsUpdate=f,g.rectAreaLights.needsUpdate=f,g.hemisphereLights.needsUpdate=f),E&&!0===r.fog&&pe.refreshFogUniforms(j,E),pe.refreshMaterialUniforms(j,r,v,k,c.state.transmissionRenderTarget[e.id]),jt.upload(n,Ce(h),j,l)),r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(jt.upload(n,Ce(h),j,l),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&m.setValue(n,"center",u.center),m.setValue(n,"modelViewMatrix",u.modelViewMatrix),m.setValue(n,"normalMatrix",u.normalMatrix),m.setValue(n,"modelMatrix",u.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){const e=r.uniformsGroups;for(let t=0,s=e.length;t<s;t++){const n=e[t];Q.update(n,_),Q.bind(n,_)}}return _}(e,t,a,r,u);o.setMaterial(r,E);let g=a.index,_=1;if(!0===r.wireframe){if(g=ue.getWireframeAttribute(a),0[0]===g)return;_=2}const O=a.drawRange,x=a.attributes.position;let p=O.start*_,j=(O.start+O.count)*_;null!==m&&(p=Math.max(p,m.start*_),j=Math.min(j,(m.start+m.count)*_)),null!==g?(p=Math.max(p,0),j=Math.min(j,g.count)):x!=null&&(p=Math.max(p,0),j=Math.min(j,x.count));const w=j-p;if(w<0||w===1/0)return;let C;M.setup(u,r,A,a,g);let f=we;if(null!==g&&(C=H.get(g),f=xe,f.setIndex(C)),u.isMesh)!0===r.wireframe?(o.setLineWidth(r.wireframeLinewidth*Ee()),f.setMode(n.LINES)):f.setMode(n.TRIANGLES);else if(u.isLine){let e=r.linewidth;0[0]===e&&(e=1),o.setLineWidth(e*Ee()),u.isLineSegments?f.setMode(n.LINES):u.isLineLoop?f.setMode(n.LINE_LOOP):f.setMode(n.LINE_STRIP)}else u.isPoints?f.setMode(n.POINTS):u.isSprite&&f.setMode(n.TRIANGLES);if(u.isBatchedMesh)if(null!==u._multiDrawInstances)ct("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),f.renderMultiDrawInstances(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount,u._multiDrawInstances);else if(h.get("WEBGL_multi_draw"))f.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount);else{const e=u._multiDrawStarts,t=u._multiDrawCounts,s=u._multiDrawCount,o=g?H.get(g).bytesPerElement:1,a=i.get(r).currentProgram.getUniforms();for(let i=0;i<s;i++)a.setValue(n,"_gl_DrawID",i),f.render(e[i]/o,t[i])}else if(u.isInstancedMesh)f.renderInstances(p,w,u.count);else if(a.isInstancedBufferGeometry){const e=0[0]!==a._maxInstanceCount?a._maxInstanceCount:1/0,t=Math.min(a.instanceCount,e);f.renderInstances(p,w,t)}else f.render(p,w)},this.compile=function(e,t,n=null){null===n&&(n=e),c=X.get(n),c.init(t),C.push(c),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(c.pushLight(e),e.castShadow&&c.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(c.pushLight(e),e.castShadow&&c.pushShadow(e))}),c.setupLights();const s=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;const t=e.material;if(t)if(Array.isArray(t))for(let o=0;o<t.length;o++){const i=t[o];Re(i,n,e),s.add(i)}else Re(t,n,e),s.add(t)}),c=C.pop(),s},this.compileAsync=function(e,t,n=null){const s=this.compile(e,t,n);return new Promise(t=>{function n(){s.forEach(function(e){i.get(e).currentProgram.isReady()&&s.delete(e)}),0!==s.size?setTimeout(n,10):t(e)}null!==h.get("KHR_parallel_shader_compile")?n():setTimeout(n,10)})};let de=null;function He(){F.stop()}function Ie(){F.start()}const F=new Io;function ce(e,t,n,s){if(!1===e.visible)return;if(e.layers.test(t.layers))if(e.isGroup)n=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLight)c.pushLight(e),e.castShadow&&c.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ge.intersectsSprite(e)){s&&A.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Y);const o=N.update(e),t=e.material;t.visible&&g.push(e,o,t,n,A.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ge.intersectsObject(e))){const t=N.update(e),o=e.material;if(s&&(0[0]!==e.boundingSphere?(null===e.boundingSphere&&e.computeBoundingSphere(),A.copy(e.boundingSphere.center)):(null===t.boundingSphere&&t.computeBoundingSphere(),A.copy(t.boundingSphere.center)),A.applyMatrix4(e.matrixWorld).applyMatrix4(Y)),Array.isArray(o)){const s=t.groups;for(let i=0,c=s.length;i<c;i++){const r=s[i],a=o[r.materialIndex];a&&a.visible&&g.push(e,t,a,n,A.z,r)}}else o.visible&&g.push(e,t,o,n,A.z,null)}const o=e.children;for(let e=0,i=o.length;e<i;e++)ce(o[e],t,n,s)}function Le(e,t,n,i){const a=e.opaque,r=e.transmissive,l=e.transparent;c.setupLightsView(n),!0===S&&y.setGlobalState(s.clippingPlanes,n),i&&o.viewport(T.copy(i)),a.length>0&&ee(a,t,n),r.length>0&&ee(r,t,n),l.length>0&&ee(l,t,n),o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),o.setPolygonOffset(!1)}function Fe(e,t,n,o){if(null!==(!0===n.isScene?n.overrideMaterial:null))return;0[0]===c.state.transmissionRenderTarget[o.id]&&(c.state.transmissionRenderTarget[o.id]=new le(1,1,{generateMipmaps:!0,type:h.has("EXT_color_buffer_half_float")||h.has("EXT_color_buffer_float")?Ke:Z,minFilter:Oe,samples:4,stencilBuffer:ve,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:a.workingColorSpace}));const i=c.state.transmissionRenderTarget[o.id],r=o.viewport||T;i.setSize(r.z*s.transmissionResolutionScale,r.w*s.transmissionResolutionScale);const u=s.getRenderTarget(),m=s.getActiveCubeFace(),f=s.getActiveMipmapLevel();s.setRenderTarget(i),s.getClearColor(Pe),oe=s.getClearAlpha(),oe<1&&s.setClearColor(16777215,.5),s.clear(),V&&j.render(n);const p=s.toneMapping;s.toneMapping=0;const d=o.viewport;if(0[0]!==o.viewport&&(o.viewport=0[0]),c.setupLightsView(o),!0===S&&y.setGlobalState(s.clippingPlanes,o),ee(e,n,o),l.updateMultisampleRenderTarget(i),l.updateRenderTargetMipmap(i),!1===h.has("WEBGL_multisampled_render_to_texture")){let e=!1;for(let a=0,c=t.length;a<c;a++){const i=t[a],r=i.object,l=i.geometry,s=i.material,d=i.group;if(2===s.side&&r.layers.test(o.layers)){const t=s.side;s.side=1,s.needsUpdate=!0,Ae(r,n,o,l,s,d),s.side=t,s.needsUpdate=!0,e=!0}}!0===e&&(l.updateMultisampleRenderTarget(i),l.updateRenderTargetMipmap(i))}s.setRenderTarget(u,m,f),s.setClearColor(Pe,oe),0[0]!==d&&(o.viewport=d),s.toneMapping=p}function ee(e,t,n){const s=!0===t.isScene?t.overrideMaterial:null;for(let i=0,c=e.length;i<c;i++){const o=e[i],r=o.object,l=o.geometry,d=o.group;let a=o.material;!0===a.allowOverride&&null!==s&&(a=s),r.layers.test(n.layers)&&Ae(r,t,n,l,a,d)}}function Ae(e,t,n,o,i,a){e.onBeforeRender(s,t,n,o,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(s,t,n,o,e,a),!0===i.transparent&&2===i.side&&!1===i.forceSinglePass?(i.side=1,i.needsUpdate=!0,s.renderBufferDirect(n,t,o,i,e,a),i.side=0,i.needsUpdate=!0,s.renderBufferDirect(n,t,o,i,e,a),i.side=2):s.renderBufferDirect(n,t,o,i,e,a),e.onAfterRender(s,t,n,o,i,a)}function te(e,t,n){!0!==t.isScene&&(t=re);const r=i.get(e),o=c.state.lights,f=c.state.shadowsArray,m=o.state.version,l=x.getParameters(e,o.state,f,t,n),h=x.getProgramCacheKey(l);let u=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?P:R).get(e.envMap||r.environment),r.envMapRotation=null!==r.environment&&null===e.envMap?t.environmentRotation:e.envMapRotation,0[0]===u&&(e.addEventListener("dispose",be),u=new Map,r.programs=u);let d=u.get(h);if(0[0]!==d){if(r.currentProgram===d&&r.lightsStateVersion===m)return je(e,l),d}else l.uniforms=x.getUniforms(e),e.onBeforeCompile(l,s),d=x.acquireProgram(l,h),u.set(h,d),r.uniforms=l.uniforms;const a=r.uniforms;return(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(a.clippingPlanes=y.uniform),je(e,l),r.needsLights=function(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights}(e),r.lightsStateVersion=m,r.needsLights&&(a.ambientLightColor.value=o.state.ambient,a.lightProbe.value=o.state.probe,a.directionalLights.value=o.state.directional,a.directionalLightShadows.value=o.state.directionalShadow,a.spotLights.value=o.state.spot,a.spotLightShadows.value=o.state.spotShadow,a.rectAreaLights.value=o.state.rectArea,a.ltc_1.value=o.state.rectAreaLTC1,a.ltc_2.value=o.state.rectAreaLTC2,a.pointLights.value=o.state.point,a.pointLightShadows.value=o.state.pointShadow,a.hemisphereLights.value=o.state.hemi,a.directionalShadowMap.value=o.state.directionalShadowMap,a.directionalShadowMatrix.value=o.state.directionalShadowMatrix,a.spotShadowMap.value=o.state.spotShadowMap,a.spotLightMatrix.value=o.state.spotLightMatrix,a.spotLightMap.value=o.state.spotLightMap,a.pointShadowMap.value=o.state.pointShadowMap,a.pointShadowMatrix.value=o.state.pointShadowMatrix),r.currentProgram=d,r.uniformsList=null,d}function Ce(e){if(null===e.uniformsList){const t=e.currentProgram.getUniforms();e.uniformsList=jt.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function je(e,t){const n=i.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}F.setAnimationLoop(function(e){de&&de(e)}),"undefined"!=typeof self&&F.setContext(self),this.setAnimationLoop=function(e){de=e,f.setAnimationLoop(e),null===e?F.stop():F.start()},f.addEventListener("sessionstart",He),f.addEventListener("sessionend",Ie),this.render=function(e,t){if(0[0]!==t&&!0!==t.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===fe)return;if(!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===f.enabled&&!0===f.isPresenting&&(!0===f.cameraAutoUpdate&&f.updateCamera(t),t=f.getCamera()),!0===e.isScene&&e.onBeforeRender(s,e,t,d),c=X.get(e,C.length),c.init(t),C.push(c),Y.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ge.setFromProjectionMatrix(Y,he,t.reversedDepth),me=this.localClippingEnabled,S=y.init(this.clippingPlanes,me),g=G.get(e,L.length),g.init(),L.push(g),!0===f.enabled&&!0===f.isPresenting){const e=s.xr.getDepthSensingMesh();null!==e&&ce(e,t,-1/0,s.sortObjects)}ce(e,t,0,s.sortObjects),g.finish(),!0===s.sortObjects&&g.sort(Be,ke),V=!1===f.enabled||!1===f.isPresenting||!1===f.hasDepthSensing(),V&&j.addToRenderList(g,e),this.info.render.frame++,!0===S&&y.beginShadows();const i=c.state.shadowsArray;_.render(i,e,t),!0===S&&y.endShadows(),!0===this.info.autoReset&&this.info.reset();const o=g.opaque,n=g.transmissive;if(c.setupLights(),t.isArrayCamera){const s=t.cameras;if(n.length>0)for(let t=0,i=s.length;t<i;t++)Fe(o,n,e,s[t]);V&&j.render(e);for(let t=0,o=s.length;t<o;t++){const n=s[t];Le(g,e,n,n.viewport)}}else n.length>0&&Fe(o,n,e,t),V&&j.render(e),Le(g,e,t);null!==d&&0===q&&(l.updateMultisampleRenderTarget(d),l.updateRenderTargetMipmap(d)),!0===e.isScene&&e.onAfterRender(s,e,t),M.resetDefaultState(),$=-1,D=null,C.pop(),C.length>0?(c=C[C.length-1],!0===S&&y.setGlobalState(s.clippingPlanes,c.state.camera)):c=null,L.pop(),g=L.length>0?L[L.length-1]:null},this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(e,t,n){const s=i.get(e);s.__autoAllocateDepthBuffer=!1===e.resolveDepthBuffer,!1===s.__autoAllocateDepthBuffer&&(s.__useRenderToTexture=!1),i.get(e.texture).__webglTexture=t,i.get(e.depthTexture).__webglTexture=s.__autoAllocateDepthBuffer?0[0]:n,s.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){const n=i.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=0[0]===t};const Ze=n.createFramebuffer();this.setRenderTarget=function(e,t=0,s=0){d=e,ne=t,q=s;let r=!0,a=null,c=!1,u=!1;if(e){const h=i.get(e);if(0[0]!==h.__useDefaultFramebuffer)o.bindFramebuffer(n.FRAMEBUFFER,null),r=!1;else if(0[0]===h.__webglFramebuffer)l.setupRenderTarget(e);else if(h.__hasExternalTextures)l.rebindTextures(e,i.get(e.texture).__webglTexture,i.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){const t=e.depthTexture;if(h.__boundDepthTexture!==t){if(null!==t&&i.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(e)}}const m=e.texture;(m.isData3DTexture||m.isDataArrayTexture||m.isCompressedArrayTexture)&&(u=!0);const d=i.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(a=Array.isArray(d[t])?d[t][s]:d[t],c=!0):a=e.samples>0&&!1===l.useMultisampledRTT(e)?i.get(e).__webglMultisampledFramebuffer:Array.isArray(d)?d[s]:d,T.copy(e.viewport),J.copy(e.scissor),ae=e.scissorTest}else T.copy(W).multiplyScalar(v).floor(),J.copy(U).multiplyScalar(v).floor(),ae=se;if(0!==s&&(a=Ze),o.bindFramebuffer(n.FRAMEBUFFER,a)&&r&&o.drawBuffers(e,a),o.viewport(T),o.scissor(J),o.setScissorTest(ae),c){const o=i.get(e.texture);n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+t,o.__webglTexture,s)}else if(u){const o=t;for(let t=0;t<e.textures.length;t++){const a=i.get(e.textures[t]);n.framebufferTextureLayer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+t,a.__webglTexture,s,o)}}else if(null!==e&&0!==s){const t=i.get(e.texture);n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t.__webglTexture,s)}$=-1},this.readRenderTargetPixels=function(e,t,s,a,r,c,l,u=0){if(!e||!e.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let h=i.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&0[0]!==l&&(h=h[l]),h){o.bindFramebuffer(n.FRAMEBUFFER,h);try{const o=e.textures[u],i=o.format,l=o.type;if(!b.textureFormatReadable(i))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(l))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");t>=0&&t<=e.width-a&&s>=0&&s<=e.height-r&&(e.textures.length>1&&n.readBuffer(n.COLOR_ATTACHMENT0+u),n.readPixels(t,s,a,r,O.convert(i),O.convert(l),c))}finally{const e=null!==d?i.get(d).__webglFramebuffer:null;o.bindFramebuffer(n.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,s,a,r,c,l,u=0){if(!e||!e.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let h=i.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&0[0]!==l&&(h=h[l]),h){if(t>=0&&t<=e.width-a&&s>=0&&s<=e.height-r){o.bindFramebuffer(n.FRAMEBUFFER,h);const m=e.textures[u],f=m.format,p=m.type;if(!b.textureFormatReadable(f))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(p))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const l=n.createBuffer();n.bindBuffer(n.PIXEL_PACK_BUFFER,l),n.bufferData(n.PIXEL_PACK_BUFFER,c.byteLength,n.STREAM_READ),e.textures.length>1&&n.readBuffer(n.COLOR_ATTACHMENT0+u),n.readPixels(t,s,a,r,O.convert(f),O.convert(p),0);const v=null!==d?i.get(d).__webglFramebuffer:null;o.bindFramebuffer(n.FRAMEBUFFER,v);const g=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);return n.flush(),await function(e,t){return new Promise(function(n,s){setTimeout(function o(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(o,4);break;default:n()}},4)})}(n,g),n.bindBuffer(n.PIXEL_PACK_BUFFER,l),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,c),n.deleteBuffer(l),n.deleteSync(g),c}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(e,t=null,s=0){const i=2**-s,a=Math.floor(e.image.width*i),r=Math.floor(e.image.height*i),c=null!==t?t.x:0,d=null!==t?t.y:0;l.setTexture2D(e,0),n.copyTexSubImage2D(n.TEXTURE_2D,s,0,0,c,d,a,r),o.unbindTexture()};const Je=n.createFramebuffer(),et=n.createFramebuffer();this.copyTextureToTexture=function(e,t,s=null,a=null,r=0,c=null){let h,u,v,b,j,_,m,f,g;null===c&&(0!==r?(ct("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),c=r,r=0):c=0);const d=e.isCompressedTexture?e.mipmaps[c]:e.image;if(null!==s)h=s.max.x-s.min.x,u=s.max.y-s.min.y,v=s.isBox3?s.max.z-s.min.z:1,b=s.min.x,j=s.min.y,_=s.isBox3?s.min.z:0;else{const t=2**-r;h=Math.floor(d.width*t),u=Math.floor(d.height*t),v=e.isDataArrayTexture?d.depth:e.isData3DTexture?Math.floor(d.depth*t):1,b=0,j=0,_=0}null!==a?(m=a.x,f=a.y,g=a.z):(m=0,f=0,g=0);const y=O.convert(t.format),w=O.convert(t.type);let p;t.isData3DTexture?(l.setTexture3D(t,0),p=n.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(l.setTexture2DArray(t,0),p=n.TEXTURE_2D_ARRAY):(l.setTexture2D(t,0),p=n.TEXTURE_2D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,t.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,t.unpackAlignment);const E=n.getParameter(n.UNPACK_ROW_LENGTH),k=n.getParameter(n.UNPACK_IMAGE_HEIGHT),A=n.getParameter(n.UNPACK_SKIP_PIXELS),S=n.getParameter(n.UNPACK_SKIP_ROWS),M=n.getParameter(n.UNPACK_SKIP_IMAGES);n.pixelStorei(n.UNPACK_ROW_LENGTH,d.width),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,d.height),n.pixelStorei(n.UNPACK_SKIP_PIXELS,b),n.pixelStorei(n.UNPACK_SKIP_ROWS,j),n.pixelStorei(n.UNPACK_SKIP_IMAGES,_);const C=e.isDataArrayTexture||e.isData3DTexture,x=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){const s=i.get(e),a=i.get(t),l=i.get(s.__renderTarget),d=i.get(a.__renderTarget);o.bindFramebuffer(n.READ_FRAMEBUFFER,l.__webglFramebuffer),o.bindFramebuffer(n.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let s=0;s<v;s++)C&&(n.framebufferTextureLayer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,i.get(e).__webglTexture,r,_+s),n.framebufferTextureLayer(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,i.get(t).__webglTexture,c,g+s)),n.blitFramebuffer(b,j,h,u,m,f,h,u,n.DEPTH_BUFFER_BIT,n.NEAREST);o.bindFramebuffer(n.READ_FRAMEBUFFER,null),o.bindFramebuffer(n.DRAW_FRAMEBUFFER,null)}else if(0!==r||e.isRenderTargetTexture||i.has(e)){const s=i.get(e),a=i.get(t);o.bindFramebuffer(n.READ_FRAMEBUFFER,Je),o.bindFramebuffer(n.DRAW_FRAMEBUFFER,et);for(let e=0;e<v;e++)C?n.framebufferTextureLayer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,s.__webglTexture,r,_+e):n.framebufferTexture2D(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.__webglTexture,r),x?n.framebufferTextureLayer(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,a.__webglTexture,c,g+e):n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a.__webglTexture,c),0!==r?n.blitFramebuffer(b,j,h,u,m,f,h,u,n.COLOR_BUFFER_BIT,n.NEAREST):x?n.copyTexSubImage3D(p,c,m,f,g+e,b,j,h,u):n.copyTexSubImage2D(p,c,m,f,b,j,h,u);o.bindFramebuffer(n.READ_FRAMEBUFFER,null),o.bindFramebuffer(n.DRAW_FRAMEBUFFER,null)}else x?e.isDataTexture||e.isData3DTexture?n.texSubImage3D(p,c,m,f,g,h,u,v,y,w,d.data):t.isCompressedArrayTexture?n.compressedTexSubImage3D(p,c,m,f,g,h,u,v,y,d.data):n.texSubImage3D(p,c,m,f,g,h,u,v,y,w,d):e.isDataTexture?n.texSubImage2D(n.TEXTURE_2D,c,m,f,h,u,y,w,d.data):e.isCompressedTexture?n.compressedTexSubImage2D(n.TEXTURE_2D,c,m,f,d.width,d.height,y,d.data):n.texSubImage2D(n.TEXTURE_2D,c,m,f,h,u,y,w,d);n.pixelStorei(n.UNPACK_ROW_LENGTH,E),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,k),n.pixelStorei(n.UNPACK_SKIP_PIXELS,A),n.pixelStorei(n.UNPACK_SKIP_ROWS,S),n.pixelStorei(n.UNPACK_SKIP_IMAGES,M),0===c&&t.generateMipmaps&&n.generateMipmap(p),o.unbindTexture()},this.initRenderTarget=function(e){0[0]===i.get(e).__webglFramebuffer&&l.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?l.setTextureCube(e,0):e.isData3DTexture?l.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?l.setTexture2DArray(e,0):l.setTexture2D(e,0),o.unbindTexture()},this.resetState=function(){ne=0,q=0,d=null,o.reset(),M.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return he}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=a._getDrawingBufferColorSpace(e),t.unpackColorSpace=a._getUnpackColorSpace()}}Ho=function(e,t,n,s){return new(n||(n=Promise))(function(o,i){function r(e){try{a(s.next(e))}catch(e){i(e)}}function c(e){try{a(s.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(r,c)}a((s=s.apply(e,t||[])).next())})};class Wr{constructor(e,t,n,s){this.x=e,this.y=t,this.z=n,this.color=s}}class Ur{constructor(e){this.points=[],this.name=e}addPoint(e){this.points.push(e)}getPoints(){return this.points}}function Kr(e){return Ho(this,0[0],0[0],function*(){try{const t=yield fetch(e);if(!t.ok)throw new Error(`Failed to load model set file: ${t.statusText}`);const s=yield t.json();let n=new Ur("01");for(const e of s){const t=new Wr(e.position[0],e.position[1],e.position[2],e.color);n.addPoint(t)}return n}catch(e){return console.error("Error loading model file:",e),null}})}var Je,Yt,Ho,Tt,oe=Object.freeze({Linear:Object.freeze({None:function(e){return e},In:function(e){return e},Out:function(e){return e},InOut:function(e){return e}}),Quadratic:Object.freeze({In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}}),Cubic:Object.freeze({In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}}),Quartic:Object.freeze({In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}}),Quintic:Object.freeze({In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}}),Sinusoidal:Object.freeze({In:function(e){return 1-Math.sin((1-e)*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.sin(Math.PI*(.5-e)))}}),Exponential:Object.freeze({In:function(e){return 0===e?0:1024**(e-1)},Out:function(e){return 1===e?1:1-2**(-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*1024**(e-1):.5*(2-2**(-10*(e-1)))}}),Circular:Object.freeze({In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}}),Elastic:Object.freeze({In:function(e){return 0===e?0:1===e?1:-(2**(10*(e-1)))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return 0===e?0:1===e?1:2**(-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?-.5*2**(10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*2**(-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}}),Back:Object.freeze({In:function(e){var t=1.70158;return 1===e?1:e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return 0===e?0:--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)}}),Bounce:Object.freeze({In:function(e){return 1-oe.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*oe.Bounce.In(2*e):.5*oe.Bounce.Out(2*e-1)+.5}}),generatePow:function(e){return 0[0]===e&&(e=4),e=(e=e<Number.EPSILON?Number.EPSILON:e)>1e4?1e4:e,{In:function(t){return t**e},Out:function(t){return 1-(1-t)**e},InOut:function(t){return t<.5?(2*t)**e/2:(1-(2-2*t)**e)/2+.5}}}}),dt=function(){return performance.now()},Ms=function(){function e(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,t)}return e.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(){for(var e,n,s,o,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];for(n=0,o=i;n<o.length;n++)e=o[n],null===(s=e._group)||0[0]===s||s.remove(e),e._group=this,this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},e.prototype.remove=function(){for(var t,n,s,o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];for(t=0,s=o;t<s.length;t++)n=s[t],n._group=0[0],delete this._tweens[n.getId()],delete this._tweensAddedDuringUpdate[n.getId()]},e.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},e.prototype.update=function(e,t){if(0[0]===e&&(e=dt()),0[0]===t&&(t=!0),n=Object.keys(this._tweens),0!==n.length)for(;n.length>0;){this._tweensAddedDuringUpdate={};for(s=0;s<n.length;s++){var n,s,o=this._tweens[n[s]],i=!t;o&&!1===o.update(e,i)&&!t&&this.remove(o)}n=Object.keys(this._tweensAddedDuringUpdate)}},e}(),We={Linear:function(e,t){var n=e.length-1,s=n*t,o=Math.floor(s),i=We.Utils.Linear;return t<0?i(e[0],e[1],s):t>1?i(e[n],e[n-1],n-s):i(e[o],e[o+1>n?n:o+1],s-o)},Bezier:function(e,t){for(var o=0,s=e.length-1,i=Math.pow,a=We.Utils.Bernstein,n=0;n<=s;n++)o+=i(1-t,s-n)*i(t,n)*e[n]*a(s,n);return o},CatmullRom:function(e,t){var n=e.length-1,o=n*t,s=Math.floor(o),i=We.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(s=Math.floor(o=n*(1+t))),i(e[(s-1+n)%n],e[s],e[(s+1)%n],e[(s+2)%n],o-s)):t<0?e[0]-(i(e[0],e[0],e[1],e[1],-o)-e[0]):t>1?e[n]-(i(e[n],e[n],e[n-1],e[n-1],o-n)-e[n]):i(e[s?s-1:0],e[s],e[n<s+1?n:s+1],e[n<s+2?n:s+2],o-s)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=We.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:(Tt=[1],function(e){var t,n=1;if(Tt[e])return Tt[e];for(t=e;t>1;t--)n*=t;return Tt[e]=n,n}),CatmullRom:function(e,t,n,s,o){var i=.5*(n-e),a=.5*(s-t),r=o*o;return(2*t-2*n+i+a)*(o*r)+(-3*t+3*n-2*i-a)*r+i*o+t}}},Ns=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),$n=new Ms,Ts=function(){function e(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=oe.Linear.None,this._interpolationFunction=We.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Ns.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,"object"==typeof t?(this._group=t,t.add(this)):!0===t&&(this._group=$n,$n.add(this))}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.getDuration=function(){return this._duration},e.prototype.to=function(e,t){if(0[0]===t&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},e.prototype.duration=function(e){return 0[0]===e&&(e=1e3),this._duration=e<0?0:e,this},e.prototype.dynamic=function(e){return 0[0]===e&&(e=!1),this._isDynamic=e,this},e.prototype.start=function(e,t){if(0[0]===e&&(e=dt()),0[0]===t&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed)for(n in this._reversed=!1,this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n,o,s={};for(o in this._valuesEnd)s[o]=this._valuesEnd[o];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},e.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},e.prototype._setupProperties=function(e,t,n,s,o){for(i in n){var i,a,d,u,m,p,r=e[i],c=Array.isArray(r),h=c?"array":typeof r,l=!c&&Array.isArray(n[i]);if("undefined"!==h&&"function"!==h){if(l){if(0===(a=n[i]).length)continue;for(var g=[r],f=0,v=a.length;f<v;f+=1){if(m=this._handleRelativeValue(r,a[f]),isNaN(m)){l=!1,console.warn("Found invalid interpolation list. Skipping.");break}g.push(m)}l&&(n[i]=g)}if("object"!==h&&!c||!r||l)(0[0]===t[i]||o)&&(t[i]=r),c||(t[i]*=1),s[i]=l?n[i].slice().reverse():t[i]||0;else{t[i]=c?[]:{},u=r;for(d in u)t[i][d]=u[d];if(s[i]=c?[]:{},a=n[i],!this._isDynamic){p={};for(d in a)p[d]=a[d];n[i]=a=p}this._setupProperties(u,t[i],a,s[i],o)}}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},e.prototype.pause=function(e){return 0[0]===e&&(e=dt()),this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=e),this},e.prototype.resume=function(e){return 0[0]===e&&(e=dt()),this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this):this},e.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},e.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},e.prototype.remove=function(){var e;return null===(e=this._group)||0[0]===e||e.remove(this),this},e.prototype.delay=function(e){return 0[0]===e&&(e=0),this._delayTime=e,this},e.prototype.repeat=function(e){return 0[0]===e&&(e=0),this._initialRepeat=e,this._repeat=e,this},e.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},e.prototype.yoyo=function(e){return 0[0]===e&&(e=!1),this._yoyo=e,this},e.prototype.easing=function(e){return 0[0]===e&&(e=oe.Linear.None),this._easingFunction=e,this},e.prototype.interpolation=function(e){return 0[0]===e&&(e=We.Linear),this._interpolationFunction=e,this},e.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},e.prototype.onStart=function(e){return this._onStartCallback=e,this},e.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},e.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},e.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},e.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},e.prototype.onStop=function(e){return this._onStopCallback=e,this},e.prototype.update=function(t,n){if(a=this,0[0]===t&&(t=dt()),0[0]===n&&(n=e.autoStartOnUpdate),this._isPaused)return!0;if(!this._goToEnd&&!this._isPlaying){if(!n)return!1;this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;!1===this._onStartCallbackFired&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),!1===this._onEveryStartCallbackFired&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var s,a,r,c,l,u,o=t-this._startTime,i=this._duration+(null!==(c=this._repeatDelayTime)&&0[0]!==c?c:this._delayTime),h=this._duration+this._repeat*i,d=function(){if(0===a._duration)return 1;if(o>h)return 1;var t=o/i|0,n=o-t*i,e=Math.min(n/a._duration,1);return 0===e&&o===a._duration?1:e}(),m=this._easingFunction(d);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,m),this._onUpdateCallback&&this._onUpdateCallback(this._object,d),0===this._duration||o>=this._duration){if(this._repeat>0){l=Math.min(((o-this._duration)/i|0)+1,this._repeat);for(s in isFinite(this._repeat)&&(this._repeat-=l),this._valuesStartRepeat)this._yoyo||"string"!=typeof this._valuesEnd[s]||(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=i*l,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}this._onCompleteCallback&&this._onCompleteCallback(this._object);for(r=0,u=this._chainedTweens.length;r<u;r++)this._chainedTweens[r].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(e,t,n,s){for(i in n)if(0[0]!==t[i]){var i,a=t[i]||0,o=n[i],r=Array.isArray(e[i]),c=Array.isArray(o);!r&&c?e[i]=this._interpolationFunction(o,s):"object"==typeof o&&o?this._updateProperties(e[i],a,o,s):"number"==typeof(o=this._handleRelativeValue(a,o))&&(e[i]=a+(o-a)*s)}},e.prototype._handleRelativeValue=function(e,t){return"string"!=typeof t?t:"+"===t.charAt(0)||"-"===t.charAt(0)?e+parseFloat(t):parseFloat(t)},e.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],t=this._valuesEnd[e];this._valuesStartRepeat[e]="string"==typeof t?this._valuesStartRepeat[e]+parseFloat(t):this._valuesEnd[e],this._valuesEnd[e]=n},e.autoStartOnUpdate=!1,e}(),R=(Ns.nextId,$n),Ls=(R.getAll.bind(R),R.removeAll.bind(R),R.add.bind(R),R.remove.bind(R),R.update.bind(R),function(e,t,n,s){return new(n||(n=Promise))(function(o,i){function r(e){try{a(s.next(e))}catch(e){i(e)}}function c(e){try{a(s.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(r,c)}a((s=s.apply(e,t||[])).next())})});class Rs{constructor(){this.renderTargetID="avatar-container",this.backgroundColor="#00000000",this.rotateCamera=!0,this.rotateCameraSpeed=.25,this.cameraDistance=1.5,this.pointScale=.015,this.chanceOfFloatingPoint=.7,this.maxPoints=2e3,this.nextModelIntervalSeconds=20}}class oc{constructor(e,t){this.models=[],this.currentModelIndex=0,this.sprites=[],this.tweenGroup=new Ms,this.cameraTweenGroup=new Ms,this.cameraRotation=0,this.options=new Rs,this.options=Object.assign(Object.assign({},this.options),t),this.scene=new Ci,this.renderer=new Vr({alpha:!0}),this.renderer.setClearColor(new r(0,0,0),0),console.log(this.options),this.models=e;const n=document.getElementById(this.options.renderTargetID);if(!n)throw new Error(`Container with ID '${this.options.renderTargetID}' not found.`);this.camera=new k(75,n.clientWidth/n.clientHeight,.1,1e3),this.renderer.setSize(n.clientWidth,n.clientHeight),n.appendChild(this.renderer.domElement);let s=this.options.maxPoints;for(let t of this.models){const e=t.getPoints().length;e<s&&(s=e)}for(let n=0;n<s;n++){const o=new is({color:"#111111"}),e=new pi(o),t=this.options.pointScale;e.scale.set(t,t,t),e.position.set(0,-5,0),this.sprites.push(e),this.scene.add(e)}}show(){return Ls(this,0[0],0[0],function*(){this.camera.position.y=0,this.camera.lookAt(0,0,0),this.camera.position.z=1.5,this.changeModel(0);let e=new Ko;e.start();let t=new Ko;t.start(),this.cameraTweenGroup.removeAll(),this.renderer.setAnimationLoop(n=>{this.tweenGroup.update(n),e.getElapsedTime()>this.options.nextModelIntervalSeconds&&(this.nextModel(),e.start()),this.rotateCameraAroundModel(t.getDelta()),this.renderer.render(this.scene,this.camera)})})}rotateCameraAroundModel(e){if(!this.options.rotateCamera)return;this.cameraRotation+=this.options.rotateCameraSpeed*e;const t=this.options.cameraDistance;this.camera.position.x=t*Math.sin(this.cameraRotation),this.camera.position.z=t*Math.cos(this.cameraRotation),this.camera.lookAt(0,0,0)}changeModel(e){if(e<0||e>=this.models.length)return void console.error("Model index out of bounds.");this.tweenGroup.removeAll(),this.currentModelIndex=e;const t=this.models[e];for(let n=0;n<this.sprites.length;n++){const e=t.getPoints()[n],s=this.sprites[n];let o=new Ts(s.position).to({y:e.y,x:e.x,z:e.z},2e3).easing(oe.Circular.Out).delay(2e3*Math.random()).yoyo(!1).onComplete(()=>{if(this.tweenGroup.remove(o),Math.random()<this.options.chanceOfFloatingPoint)return;let t=new Ts(s.position).to({y:e.y+.1*Math.random()},5e3*Math.random()+1e3).easing(oe.Cubic.InOut).delay(10).yoyo(!0).repeat(1/0).start();this.tweenGroup.add(t)}).start();const i=new is({color:e.color});let a=new Ts(s.material.color).to(i.color,2e3).easing(oe.Quadratic.InOut).delay(1e3).yoyo(!1).start();this.tweenGroup.add(o),this.tweenGroup.add(a)}}cleanupScene(){this.tweenGroup.removeAll(),this.scene.children=[],this.sprites=[]}nextModel(){let e=(this.currentModelIndex+1)%this.models.length;this.changeModel(e)}}function ic(e,t){return Ls(this,0[0],0[0],function*(){let n=[];for(let s of e){let t=yield Kr(s);t!=null&&n.push(t)}new oc(n,t).show()})}return Yt})())