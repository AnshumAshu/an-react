// const heading= document.createElement("h1");
// heading.innerHTML="HELLO WORLD";
// const root=document.getElementById("root");
// root.appendChild(heading)


const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am in h2 tag")
        ]
    )
);
 // Create the React element
 const heading=React.createElement("h1",{id:"heading"},"hello world");
 
 
 // Render the React element inside the #root div
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);