import{r,j as t}from"./index-CEvm53SA.js";import{a as i}from"./axios-BimPEqV4.js";function C(){const[b,g]=r.useState(null),[p,y]=r.useState(""),[u,l]=r.useState(""),[j,o]=r.useState([]),[h,x]=r.useState(null),[c,m]=r.useState(""),[f,w]=r.useState(""),n=localStorage.getItem("userId");r.useEffect(()=>{(async()=>{try{const s=await i.get(`https://backend-pdfchatarif.onrender.com/user-pdfs/${n}`);o(s.data)}catch(s){console.error("Error fetching PDFs:",s)}})()},[n]);const v=async e=>{e.preventDefault();const s=new FormData;if(s.append("pdf",b),s.append("title",p),!n){l("User not logged in");return}s.append("userId",n);try{const a=await i.post("https://backend-pdfchatarif.onrender.com/upload-pdf",s,{headers:{"Content-Type":"multipart/form-data"}});l(a.data.message),o(d=>[...d,a.data.pdf])}catch(a){console.error("Upload error:",a),l("PDF upload failed")}},N=async e=>{try{const s=await i.delete(`https://backend-pdfchatarif.onrender.com/delete-pdf/${e}`);l(s.data.message),o(a=>a.filter(d=>d._id!==e))}catch(s){console.error("Delete error:",s),l("PDF deletion failed")}},P=async e=>{try{const s=await i.put(`https://backend-pdfchatarif.onrender.com/edit-pdf-title/${e}`,{title:c});l(s.data.message),o(a=>a.map(d=>d._id===e?{...d,title:c}:d)),x(null),m("")}catch(s){console.error("Edit title error:",s),l("PDF title edit failed")}},D=e=>{w(e.target.value)},F=j.filter(e=>e.title.toLowerCase().includes(f.toLowerCase()));return t.jsxs("div",{className:"bg-gradient-to-r from-blue-300 to-violet-600 min-h-screen p-8 flex flex-col items-center",children:[t.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md",children:[t.jsx("h1",{className:"text-2xl font-bold mb-6",style:{fontFamily:"Baloo Bhai 2, cursive"},children:"Upload PDF"}),t.jsxs("form",{onSubmit:v,children:[t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Title:"}),t.jsx("input",{type:"text",value:p,onChange:e=>y(e.target.value),className:"w-full px-3 py-2 border rounded-md",required:!0})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"PDF:"}),t.jsx("input",{type:"file",accept:"application/pdf",onChange:e=>g(e.target.files[0]),className:"w-full px-3 py-2 border rounded-md",required:!0})]}),t.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600",children:"Upload PDF"})]}),u&&t.jsx("div",{className:"mt-4 text-green-500",children:u})]}),t.jsxs("div",{className:"mt-8 w-full max-w-5xl",children:[t.jsx("h2",{className:"text-xl font-bold mb-4",children:"Uploaded PDFs"}),t.jsx("div",{className:"flex justify-center mb-4",children:t.jsx("input",{type:"text",value:f,onChange:D,placeholder:"Search PDFs by title...",className:"w-full max-w-lg px-3 py-2 border rounded-md"})}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:F.map(e=>t.jsxs("div",{className:"bg-white p-4 rounded-md shadow-md",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h===e._id?t.jsx("input",{type:"text",value:c,onChange:s=>m(s.target.value),className:"w-full px-3 py-2 border rounded-md mr-4"}):t.jsx("div",{className:"font-bold text-xl",children:e.title}),t.jsxs("div",{className:"flex space-x-2",children:[h===e._id?t.jsx("button",{onClick:()=>P(e._id),className:"bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600",children:"Save"}):t.jsx("button",{onClick:()=>{x(e._id),m(e.title)},className:"bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600",children:"Edit"}),t.jsx("button",{onClick:()=>N(e._id),className:"bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600",children:"Delete"})]})]}),t.jsx("a",{href:`https://backend-pdfchatarif.onrender.com/${e.pdfPath}`,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center block",children:"View PDF"})]},e._id))})]})]})}export{C as default};