const gridContainer = document.querySelector(".grid-container");
const reset = document.querySelector(".resetGrid");
const modify = document.querySelector(".modifyGrid");
let size=16;


    
function createGrid(size) {
              
    for(let i=0; i<size; i++){
        for(let j=0; j<size; j++){
            let colorNumber = addColor();
            let btn=document.createElement("button");
            btn.setAttribute("style",`width:40px; height:40px; cursor:pointer; transition: display 5s,opacity 5s; margin:0px;`);

            gridContainer.setAttribute("style",`display:grid; 
    grid-template-columns: repeat(${size},1fr);
    grid-template-rows: repeat(${size},1fr); height: 960px; width: 960px;`)

            gridContainer.appendChild(btn);

            let isColored= false;
            btn.addEventListener("mouseover",(event)=>{

                if(!isColored){
                    btn.style.background= addColor();
                    isColored = true;
                } else {
                
                    btn.style.background = addColor();
                    isColored = false;
                }

            });




        }
    }
}

createGrid(size);


    reset.addEventListener("click",()=>{
        gridContainer.innerHTML ="";
        createGrid(size=16);
        

    });









     


// function add color ; 

function addColor() {
    let colorNumber = Math.floor(Math.random()*7)+1;
    if(colorNumber==1) return "red";
    if(colorNumber==2) return "orange"; 
    if(colorNumber==3) return "yellow";
    if(colorNumber==4) return "blue";
    if(colorNumber==5) return "green";
    if(colorNumber==6) return "indigo";
    if(colorNumber==7) return "violet";

}

modify.addEventListener("click", () =>{
    size = prompt("Enter the size of the grid");
    gridContainer.innerHTML = "";
    createGrid(Number(size));


});


