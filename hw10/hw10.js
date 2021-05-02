
function blocks() {
    const container = document.createElement('div');
    container.classList.add('container');
    

    for (let i = 0; i < 5; i++) {

        document.body.append(container)
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.display = "flex"
        container.appendChild(square);

              for (let k = 0; k < 5; k++) {
      
            const blocks = document.createElement("div");
            blocks.classList.add("blocks");
            square.appendChild(blocks); 
           
            blocks.style.background = getRandomBackgroundColor();
            blocks.style.height = "50px"
            blocks.style.width = "50px"
            blocks.style.margin = "1px"
            blocks.style.borderRadius = "5px"

            container.style.alignContent= "center"
            container.style.marginTop ="50px"
            container.style.marginLeft ="300px"

           
         };
     
    };
};

 const getRandomColorNumber = () => {
      return Math.floor(Math.random() * 256);
}
const getRandomBackgroundColor = () => {
    return `rgb(${getRandomColorNumber()},${getRandomColorNumber()},${getRandomColorNumber()})`
};


 function createBlocks () {
    if (!document.querySelector('.container')) {
        blocks();
       
    }
        document.querySelector('.container').remove();
        blocks()
    
};



function blocksInterval() {

    setInterval(() => {
        
             createBlocks();
    }, 1500)
};

