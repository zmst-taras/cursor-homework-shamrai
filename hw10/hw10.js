
function blocks() {
    const container = document.createElement('div');
    container.classList.add('container#1')
    document.body.append(container)

    for (let i = 0; i < 5; i++) {

        
        const square = document.createElement('div');
        square.classList.add('square#1');
        square.style.display = "flex"
        container.appendChild(square);

              for (let k = 0; k < 5; k++) {
      
            const blocks = document.createElement("div");
            blocks.classList.add("blocks");
        
            square.appendChild(blocks); 
           
            blocks.style.background = randomColor();
            blocks.style.height = "50px"
            blocks.style.width = "50px"
            blocks.style.margin = "1px"
            container.style.alignContent= "center"
            container.style.marginTop ="50px"
            container.style.marginLeft ="300px"

           
         };
     
    };
};

 const randomColor = () => {
    // const color = "rgb(" + (Math.random()*255) + ",8,508)";
    // return color;
  
    return '#' + Math.floor(Math.random()*16777215).toString(16)
 };

 function createBlocks () {
    if (!document.querySelector('.container')) {
        blocks();
       
    }
    document.querySelector('.container').remove();
    blocks()
    
}


let cut= false

function blocksInterval() {

    cut= false

    setInterval(() => {
        if (cut) {
            return
        }
            createBlocks();
       

    }, 1500)
};

