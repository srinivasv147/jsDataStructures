//here I implement the graph data structure
// the methods included are as follows:
// addEdge,addVertex, toString, BFS, DFS, BFSShortestPath,

var Graph = function(type){
  //keys are assumed to be strings.
  var adjList = {};
  var vertices = [];
  this.type = type;
  this.directed = (type == "directed");
  var checked = [];

  var check = function(key){
    if(typeof key !== "string")
    {
      console.log("passed in value must be a string");
      return false;
    }
    return true;
  }

  var makeColor = function(){
    var colors = [];
    for(index in vertices){
      colors[index] = 'white';
    }
    return colors;
  }

  this.addVertex = function(key){
    //no current version of node supports decorators.
    if(check(key)){
      if(key in adjList){
        return true;
      }
      else{
        adjList[key] = [];
        vertices.push(key);
        return true;
      }
    }
  }

  this.addEdge = function(key1,key2){
    if(check(key1) && check(key2)){
      if(!(key1 in adjList) || !(key2 in adjList)){
        console.log("add vertex before forming an edge");
        return false;
      }
      if(this.directed){
        if(adjList[key1].indexOf(key2) < 0){
          adjList[key1].push(key2);
          return true;
        }
      }
    else{
        if(adjList[key1].indexOf(key2) < 0){
          adjList[key1].push(key2);
        }
        if(adjList[key2].indexOf(key1) < 0){
          adjList[key2].push(key1);
        }
      }
    }
  }

  this.toString = function(){
    for(node in adjList){
      var temp = "";
      for(connection in adjList[node]){
        temp+=(" , "+adjList[node][connection]);
      }
      console.log(node,"->",temp.slice(2,temp.length));
    }
  }

  this.bfs = function(q,searchString,obq){
    if(typeof(q) !== "string" && !(q instanceof Array)){
      console.log("please enter a string");
      return false;
    }
    if(!(q instanceof Array)){
      obq = [{key : q,distance : 0,path : []}];
      q = [q];
    }
    if(q.length === 0){
      checked = [];
      return true;
    }
    else{
      var start = q.shift();
      var start_props = obq.shift();
      checked.push(start);
      console.log("checking",start);
      // console.log(start_props);
      for (connection in adjList[start]){
        if(checked.indexOf(adjList[start][connection]) < 0
        && q.indexOf(adjList[start][connection]) < 0){
          // console.log(adjList[start][connection],searchString,adjList[start][connection] === searchString);
          if(adjList[start][connection] === searchString){
            // var temp = checked;
            checked =[]
            // temp.push(searchString);
            // // console.log(temp);
            // //never return push as push returns length and adds elements
            // //inplace.
            // return temp;
            return {key : searchString,
              distance : start_props.distance+1,
              path : start_props["path"].concat([start_props.key,searchString])};
          }
          q.push(adjList[start][connection]);
          obq.push({key:adjList[start][connection],
            distance:start_props.distance+1,
            path:start_props["path"].concat([start_props.key])});
        }
      }
      return this.bfs(q,searchString,obq);
    }
  }

  this.dfs = function(callback){
    //since funciton call stack is already a stack so we
    //don't need a stack for DFS implementation.
    // this is implemented based on ideas in the book.
    var dfsIt = function(vertexIndex,callback){
      colors[vertexIndex] = 'black';
      callback(vertices[vertexIndex]);
      var tempList = adjList[vertices[vertexIndex]]
      for (neighbourIndex in tempList){
        if(colors[vertices.indexOf(tempList[neighbourIndex])] === 'white'){
          dfsIt(vertices.indexOf(tempList[neighbourIndex]),callback);
        }
      }
    }
    var colors = makeColor();
    for (vertexIndex in vertices){
      if (colors[vertexIndex] === 'white'){
        dfsIt(vertexIndex,callback);
      }
    }
  }
}

var graph = new Graph;
graph.addVertex("A");graph.addVertex("B");graph.addVertex("C");
graph.addVertex("D");graph.addVertex("E");graph.addVertex("F");
graph.addVertex("G");graph.addVertex("H");graph.addVertex("I");
graph.addEdge("A","B");graph.addEdge("C","D");graph.addEdge("A","C");
graph.addEdge("A","D");graph.addEdge("C","G");graph.addEdge("D","G");
graph.addEdge("D","H");graph.addEdge("B","F");graph.addEdge("B","E");
graph.addEdge("E","I");
graph.toString();
console.log(graph.bfs("A","I"));
var callback = function(key){console.log("visiting", key);}
graph.dfs(callback)
