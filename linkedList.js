/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;

    let getHead = function() {
        return head;
    }

    let getTail = function() {
        return tail;
    }

    let add = (Value) => {
        let obj = newNode(Value);
        if (head === null){
            head = obj;
        } else {
            obj.prev = tail;
            tail.next = obj;
        }        
        tail = obj;     
        return obj;
    }

    let get = function(Number) {
        let currentNode;
        let index = 0;
        if (head === null) {
            return null;
        } else if (Number < 0) {
            return false;
        } else {
            currentNode = head;
        }
        while (index < Number){
            index++;
            if (currentNode.next === null){
                return false;
            }
            currentNode = currentNode.next;
        }            
        return currentNode
    }

    let remove = (Number) => {
        //set index of previous and next node
        let prevNode = -1;
        let nextNode = 1;
        //set the current node to the head node and set index to 0
        let currentNode = head;
        let index = 0;
        //check if there are any nodes and return null if none
        if (head === null){            
            return null;
        //check to see if there is only one node
        } else if (head === tail){            
            //change head and tail to null if Number equals 0
            if (Number === 0){
                head = null;
                tail = null;
            //if Number doesn't equal 0, return false;
            } else {
                return false;
            }            
        //check if Number equals 0
        } else if (Number === 0){
            head = head.next;
        } else {
            //loop until index is equal to Number
            while(index < Number){
                //if there are no matching nodes return false
                if(currentNode.next === null){
                    return false;
                }
                //add a string containing '.next' for each loop to nextNode and prevNode
                nextNode++;
                prevNode++;
                //store the current node to get later on
                let cache = currentNode;
                //move index and current node to next position
                index++;                
                currentNode = currentNode.next;
                //check if current node is the last node and if it is then change the tail
                if(currentNode.next === null){
                    tail = cache;
                    tail.next = null;
                }
            }
            //assign key of node with the index of prevNode to the node of the nextNode
            get(prevNode).next = get(nextNode);
        }       
    }

    let insert = (Value, Number) => {
        if(!get(Number)){
            return false;
        } else if(get(Number-1).next === null){
            get(Number-1).next = newNode(Value);
            tail = newNode(Value);
        } else if(Number === 0){
            let cache = head;
            head = newNode(Value);
            head.next = cache;
        } else {
            let currentNode = get(Number);
            let prevNode = get(Number - 1);
            prevNode.next = newNode(Value);
            get(Number).next = currentNode;
        }
    }

    function newNode(Value){
        return {
            value: Value,
            prev: null,
            next: null
        }
    }

    return {
        add,
        getHead,
        getTail,
        get,
        remove,
        insert
    }
}