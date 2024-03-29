

class Maze{
      
    arrayString;
    constructor(stringValue){
        this.stringValue = stringValue;
    }
    parseString(){
        arrayString = this.stringValue.split("");
    }
    // game(){
        matrix = [
            ['#',1,1,0,0,1],
            [1,0,1,1,1,0],
            [0,0,0,0,1,0],
            [0,1,1,1,1,0],
            [0,1,0,1,0,0],
            [0,1,1,1,1,1]
        ]
         rows = 0;
         cols = 0;
         currentPosition = matrix[rows][cols];
         gamePoint = matrix[0][0];
    //}
    startGame(){
        for(let index = 0;index<arrayString.length;index++){
            if(arrayString[index] === 'w'){
                this.w();
            }else if(arrayString[index] ==='a'){
                this.a();
            }else if(arrayString[index] ==='s'){
                this.s();
            }else if(arrayString[index] ==='d'){
                this.d();
            }
        }
    }

    w(){
        if(rows !== 0){
            
          currentPosition = matrix[rows-1][cols];
        }
    }
    a(){
        if(cols!==0){
            currentPosition = matrix[rows][cols-1];
        }
    }
    s(){
        if(rows!==5){
            currentPosition = matrix[rows+1][cols];
        }
    }
    d(){
        if(cols!==5){
            currentPosition = matrix[rows][cols+1];
        }
    }
    winLose(){
        if(gamePoint === matrix[5][5]){
            return true;
        }else{
            false;
        }
    }
}

const maze = new Maze("Value");
maze.parseString();
maze.game();
maze.startGame();
const ans = winLose();
console.log(ans);