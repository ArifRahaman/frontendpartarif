import{R as u,c as O,u as P,d as S,r as _,j as e,L as o,e as z}from"./index-CEvm53SA.js";var y={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=u.createContext&&u.createContext(y),$=["attr","size","title"];function L(t,r){if(t==null)return{};var s=C(t,r),a,l;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}function C(t,r){if(t==null)return{};var s={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(r.indexOf(a)>=0)continue;s[a]=t[a]}return s}function g(){return g=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},g.apply(this,arguments)}function p(t,r){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),s.push.apply(s,a)}return s}function b(t){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?p(Object(s),!0).forEach(function(a){k(t,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))})}return t}function k(t,r,s){return r=E(r),r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}function E(t){var r=V(t,"string");return typeof r=="symbol"?r:r+""}function V(t,r){if(typeof t!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var a=s.call(t,r||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function w(t){return t&&t.map((r,s)=>u.createElement(r.tag,b({key:s},r.attr),w(r.child)))}function h(t){return r=>u.createElement(F,g({attr:b({},t.attr)},r),w(t.child))}function F(t){var r=s=>{var{attr:a,size:l,title:i}=t,x=L(t,$),d=l||s.size||"1em",c;return s.className&&(c=s.className),t.className&&(c=(c?c+" ":"")+t.className),u.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,x,{className:c,style:b(b({color:t.color||s.color},s.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&u.createElement("title",null,i),t.children)};return m!==void 0?u.createElement(m.Consumer,null,s=>r(s)):r(y)}function B(t){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function f(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"},child:[]}]})(t)}function v(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function H(t){return h({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function j(t){return h({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}const M=()=>{const t=localStorage.getItem("uploadedImageUrl"),{authUser:r,setAuthUser:s}=O(),a=P(),l=S(),[i,x]=_.useState(!1),d=()=>{z.remove("jwt"),localStorage.clear(),s(null),a("/login")},c=()=>{x(!i)},n=N=>l.pathname===N;return e.jsxs("header",{className:"bg-gray-300 text-white",children:[e.jsxs("div",{className:"container mx-auto px-5 flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-2xl font-bold",children:e.jsx("img",{src:"",className:"h-8 w-32",alt:"Flowbite Logo"})})}),e.jsxs("nav",{className:"hidden md:flex space-x-4 justify-center mt-4",children:[e.jsxs(o,{to:"/chatbot",className:`relative group flex items-center justify-center px-2 py-1 rounded font-bold ${n("/chatbot")?"bg-blue-400 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:[e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"}),"Chatbot"]}),e.jsxs(o,{to:"/seeposts",className:`relative group flex items-center justify-center px-4 py-2 rounded font-bold ${n("/seeposts")?"bg-green-500 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:[e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"}),"See Posts"]}),r?e.jsxs(e.Fragment,{children:[e.jsxs(o,{to:"/search",className:`relative group flex items-center justify-center px-4 py-2 rounded font-bold ${n("/search")?"bg-blue-500 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:[e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"}),"Search"]}),e.jsxs(o,{to:"/postvideo",className:`relative group flex items-center justify-center px-4 py-2 rounded font-bold ${n("/search")?"bg-blue-500 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:[e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"}),"PostVideo"]}),e.jsxs(o,{to:"/upload",className:`relative group flex items-center justify-center px-4 py-2 rounded font-bold ${n("/upload")?"bg-blue-500 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:[e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"}),"Upload"]}),e.jsxs(o,{to:"/post",className:`relative group flex items-center justify-center px-4 py-2 rounded font-bold ${n("/post")?"bg-blue-500 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:[e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"}),"Post"]}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(o,{to:"/dashboard",className:`relative group flex items-center justify-center px-4 py-2 rounded  ${n("/dashboard")?"bg-blue-500 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:e.jsx("img",{src:t,alt:"Profile",className:"h-10 w-10 rounded-full border-2 border-blue-500 group-hover:border-blue-700 transition duration-300"})})}),e.jsxs("button",{onClick:d,className:"bg-red-500 flex items-center justify-center px-4 py-2 rounded text-white hover:bg-red-700 transition duration-300",children:[e.jsx(v,{className:"mr-2"})," Logout"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(o,{to:"/signup",className:`relative group flex items-center justify-center px-4 py-2 rounded ${n("/signup")?"bg-blue-500 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:[e.jsx(j,{className:"mr-2"})," Signup"]}),e.jsxs(o,{to:"/login",className:`relative group flex items-center justify-center px-4 py-2 rounded ${n("/login")?"bg-blue-500 text-white":"hover:bg-gray-100 text-slate-800"} transition duration-300`,children:[e.jsx(f,{className:"mr-2"})," Login"]})]})]}),e.jsx("button",{onClick:c,className:"md:hidden bg-gray-800 text-white px-2 py-1 rounded",children:i?e.jsx(H,{style:{fontSize:"1rem"}}):e.jsx(B,{style:{fontSize:"1rem"}})})]}),i&&e.jsx("nav",{className:"md:hidden bg-gradient-to-br from-red-400 to-gray-500 text-white p-4",children:e.jsxs("ul",{className:"space-y-4",children:[e.jsx("li",{children:e.jsx(o,{to:"/chatbot",className:`px-3 py-2 rounded block ${n("/chatbot")?"bg-blue-500":"hover:bg-gray-700"}`,children:"Chatbot"})}),e.jsx("li",{children:e.jsx(o,{to:"/seeposts",className:`px-3 py-2 rounded block ${n("/seeposts")?"bg-blue-500":"hover:bg-gray-700"}`,children:"See Posts"})}),r?e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(o,{to:"/search",className:`px-3 py-2 rounded block ${n("/search")?"bg-blue-500":"hover:bg-gray-700"}`,children:"Search"})}),e.jsx("li",{children:e.jsx(o,{to:"/postvideo",className:`px-3 py-2 rounded block ${n("/postvideo")?"bg-blue-500":"hover:bg-gray-700"}`,children:"PostVideo"})}),e.jsx("li",{children:e.jsx(o,{to:"/upload",className:`px-3 py-2 rounded block ${n("/upload")?"bg-blue-500":"hover:bg-gray-700"}`,children:"Upload"})}),e.jsx("li",{children:e.jsx(o,{to:"/post",className:`px-3 py-2 rounded block ${n("/post")?"bg-blue-500":"hover:bg-gray-700"}`,children:"Post"})}),e.jsx("li",{children:e.jsx(o,{to:"/dashboard",className:`px-3 py-2 rounded block ${n("/dashboard")?"bg-blue-500":"hover:bg-gray-700"}`,children:e.jsx("img",{src:t,alt:"https://www.hdwallpapers.in/download/golden_retriever_dog_in_red_yellow_lights_blur_bokeh_background_4k_hd_dog-3840x2160.jpg",className:"h-8 w-8 rounded-full"})})}),e.jsx("li",{children:e.jsxs("button",{onClick:d,className:"bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded flex items-center",children:[e.jsx(v,{className:"mr-2"})," Logout"]})})]}):e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsxs(o,{to:"/signup",className:`px-3 py-2 rounded block ${n("/signup")?"bg-blue-500":"hover:bg-gray-700"}`,children:[e.jsx(j,{className:"mr-2"})," Signup"]})}),e.jsx("li",{children:e.jsxs(o,{to:"/login",className:`px-3 py-2 rounded block  ${n("/login")?"bg-blue-500":"hover:bg-gray-700"}`,children:[e.jsx(f,{className:"mr-6"})," Login"]})})]})]})})]})};export{M as default};
