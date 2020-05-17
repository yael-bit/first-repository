//the alforitem calc the min cash flow
//get list/array of object that contain the value's
 //{"from"- who need to pay,"to"- how naeed to get the money,"sum"- how much}
 
 function GFG(list) {
    //declare a public parameter
    var mat=[];
    var hashTable = [];
    var hashTablereverse=[];

    //create hash table to all the user
    for(var index in list){
      //check if the value in the hash table
      exist(list[index].from);
      exist(list[index].to);
    }
   
    //create matrix
    //the mat contain [user size][user size] 
    //row[0] =user[0]and so on.
    //in the coulmn [2]= how much money user[0] need to pay to user[2]...
    var mat=new Array(Object.keys(hashTable).length);
    
       

    //for all the rows in the mat create coulmn
    for(var i=0;i<mat.length;i++){
      mat[i]=new Array(Object.keys(hashTable).length);
        for(var j=0;j<mat.length;j++)
        {
          //reset the mat
            mat[i][j]=0;
        }
    }
    //put value(sum) into mat from list

     for(var index in list){
            mat[hashTable[list[index].from]]
            [hashTable[list[index].to]]+=list[index].sum;
     }
    


    //function that push to hash new node
function exist(node) {

   // for (var id in mappedArr) {
      if (!hashTable.hasOwnProperty(node)){
        hashTable[node]=Object.keys(hashTable).length;
        hashTablereverse[Object.keys(hashTablereverse).length]=node;
      }
   // }
  }
  //array that contain the result on struct{fron,to,smu}
   var result=[];
   
    
      minCashFlow(mat);

  //function that calc the algoritem
      function minCashFlow(graph) {
        // Create an array amount[],  
        // initialize all value in it as 0. 
        
        var amount = [];
    
        // Calculate the net amount to  
        // be paid to person 'i', and 
        // stores it in amount[i]. The  
        // value of amount[i] can be 
        // calculated by subtracting  
        // debts of 'i' from credits of 'i' 
        for (var i = 0; i < graph.length; i++) {
          amount[i]=0
            for (var j = 0; j < graph.length; j++) {
              amount[i] += (graph[j][i] - graph[i][j]);
              
        
            }
        
          }
    
        minCashFlowRec(amount);
      }
      function minCashFlowRec(amount) {
        // Find the indexes of minimum and 
        // maximum values in amount[] 
        // amount[mxCredit] indicates the maximum amount  
        // to be given (or credited) to any person . 
        // And amount[mxDebit] indicates the maximum amount  
        // to be taken(or debited) from any person. 
        // So if there is a positive value in amount[],  
        // then there must be a negative value 
        var mxCredit = getMax(amount),
          mxDebit = getMin(amount);
    
        // If both amounts are 0, then  
        // all amounts are settled 
        if (amount[mxCredit] == 0 &&
          amount[mxDebit] == 0)
          return;
    
        // Find the minimum of two amounts 
        var min = minOf2(-amount[mxDebit], amount[mxCredit]);
        amount[mxCredit] -= min;
        amount[mxDebit] += min;
    
        result.push({"from":hashTablereverse[mxDebit],"to":hashTablereverse[mxCredit] ,"sum":min});
    
        // Recur for the amount array.  
        // Note that it is guaranteed that 
        // the recursion would terminate  
        // as either amount[mxCredit] or  
        // amount[mxDebit] becomes 0 
        minCashFlowRec(amount);
      }
  
    // A utility function that returns  
    // index of minimum value in arr[] 
    function getMin(arr) {
      var minInd = 0;
      for (var i = 1; i < arr.length; i++)
        if (arr[i] < arr[minInd])
          minInd = i;
      return minInd;
    }
  
    // A utility function that returns  
    // index of maximum value in arr[] 
    function getMax(arr) {
      var maxInd = 0;
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxInd])
          maxInd = i;
      }
      return maxInd;
    }
  
    // A utility function to return 
    // minimum of 2 values 
    function minOf2(x, y) {
      return (x < y) ? x : y;
    }
  
   return result;
  }

  export {
    GFG
  }
  
