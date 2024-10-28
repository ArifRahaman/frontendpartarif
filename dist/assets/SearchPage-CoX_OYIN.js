import{r as a,j as e}from"./index-CEvm53SA.js";import{a as o}from"./axios-BimPEqV4.js";const f=()=>{const[t,n]=a.useState(""),[d,i]=a.useState([]),[m,h]=a.useState([]),[r,c]=a.useState(null),x=async()=>{try{const s=await o.get("https://backend-pdfchatarif.onrender.com/suggestedUsers");h(s.data)}catch(s){console.error("Error fetching suggested users:",s)}};a.useEffect(()=>{x()},[]);const u=async()=>{try{const s=await o.get(`https://backend-pdfchatarif.onrender.com/search?query=${t}`);i(s.data)}catch(s){console.error("Error searching users:",s)}},l=s=>{c(s)},g=()=>{c(null)};return e.jsx("div",{className:"bg-slate-700 h-max",children:e.jsxs("div",{className:"container mx-auto bg-gradient-to-br from-gray-100 to-blue-100 p-6",children:[e.jsx("h1",{className:"text-3xl font-bold mb-8 text-center",children:"Search Users"}),r?e.jsxs("div",{className:"selected-user-profile bg-white p-8 rounded-lg shadow-lg",children:[e.jsx("button",{onClick:g,className:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4",children:"Back to Search"}),e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("img",{src:r.profileImage||"https://via.placeholder.com/150",alt:r.username,className:"w-24 h-24 rounded-full object-cover mr-4"}),e.jsxs("div",{className:"user-info",children:[e.jsx("h2",{className:"text-2xl font-bold",children:r.username}),e.jsx("p",{children:r.email})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"search-box flex justify-center mb-8",children:[e.jsx("input",{type:"text",value:t,onChange:s=>n(s.target.value),placeholder:"Search by username",className:"border p-2 rounded w-1/2"}),e.jsx("button",{onClick:u,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2",children:"Search"})]}),e.jsxs("div",{className:"suggested-users mb-8",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Suggested Users"}),e.jsx("div",{className:"flex flex-wrap",children:m.map(s=>e.jsxs("div",{className:"suggested-user-card bg-white p-2 rounded-lg shadow-md mr-4 mb-4 flex items-center cursor-pointer",onClick:()=>l(s),children:[e.jsx("img",{src:s.profileImage||"https://via.placeholder.com/150",alt:s.username,className:"w-12 h-12 rounded-full object-cover mr-2"}),e.jsxs("div",{className:"user-info",children:[e.jsx("h3",{className:"text-sm font-semibold",children:s.username}),e.jsx("p",{className:"text-xs",children:s.email})]})]},s._id))})]}),e.jsx("div",{className:"search-results",children:d.map(s=>e.jsxs("div",{className:"user-card bg-white p-4 rounded-lg shadow-lg mb-4 flex items-center cursor-pointer",onClick:()=>l(s),children:[e.jsx("img",{src:s.profileImage||"https://via.placeholder.com/150",alt:s.username,className:"w-16 h-16 rounded-full object-cover mr-4"}),e.jsxs("div",{className:"user-info",children:[e.jsx("h2",{className:"text-xl font-bold",children:s.username}),e.jsx("p",{children:s.email})]})]},s._id))})]})]})})};export{f as default};
