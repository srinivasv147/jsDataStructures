// this is a continuation of graphs,
// here we use an adjacency matrix for representation
// djikstra's, floyn warshall, prim's, kruskal's algorithm.
// for equally weighted graph just give some constant distance
// to every method.

// note this inside a function in a method of an object is not that of an object.
// but rather that of the method function.

var Graph_mat = function(isDirected){
  var numVertex = 0;
  this.graph = [];
  this.vertices = [];
  this.isDirected = isDirected;

  this.addVertex = function(key){
    numVertex++;
    var tempArr = []
    this.vertices.push(key);
    for (vertices in this.graph){
      this.graph[vertices].push(Infinity);
    }
    for (var i = 0;i<numVertex;i++){
      tempArr.push(Infinity);
    }
    this.graph.push(tempArr);
  }

  this.addEdge = function(key1,key2,dist){
    if(!dist){
      dist = 1;
    }
    ind1 = this.vertices.indexOf(key1);
    ind2 = this.vertices.indexOf(key2);
    if(ind1 === -1 || ind2 === -1){
      console.log("add vertices before adding edges to them");
      return false;
    }
    if(this.isDirected){
      this.graph[ind1][ind2] = dist;
    }
    else{
      this.graph[ind1][ind2] = dist;
      this.graph[ind2][ind1] = dist;
    }
  }

  this.minDist = function(dist,visit){
    // console.log(this.graph);
    var min = Infinity;
    var minInd = -1;
    for(vertex in this.vertices){
      // console.log(dist[vertex],min);
      if(dist[vertex] <= min && !visit[vertex]){
        min = dist[vertex];
        minInd = vertex;
      }
    }
    return minInd;
  }

  this.djikstra = function(src){
    var distances = [];
    var visited = [];
    // console.log(this.vertices);
    for(vertex in this.vertices){
      distances.push(Infinity);
      visited.push(false);
    }
    distances[this.vertices.indexOf(src)] = 0;
    // console.log(distances [0]);
    for (vertex in this.vertices){
      // console.log(this.vertices);
      var verInd = this.minDist(distances, visited);
      // console.log(this.vertices);
      visited[verInd] = true;
      for(neighbour in this.vertices){
        // console.log(verInd,neighbour);
        if(this.graph[verInd][neighbour] < Infinity &&
          distances[neighbour] > (distances[verInd] + this.graph[verInd][neighbour])){
          distances[neighbour] = distances[verInd] + this.graph[verInd][neighbour];
        }
      }
    }
    return distances;
  }

  this.floydWarshall = function(){
    var dist = [];
    var length = this.vertices.length;
    for (var i = 0; i < length;i++){
      dist[i] = [];
      for(var j = 0;j < length;j++){
        dist[i][j] = this.graph[i][j];
      }
    }
    // console.log(dist);
    for(var k = 0;k < length;k++){
      for(var i = 0;i < length;i++){
        for(var j = 0;j < length;j++){
          if(dist[i][j] > dist[i][k] + dist[k][j]){
            dist[i][j] = dist[i][k] + dist[k][j];
            // console.log(dist[i][k]);
          }
        }
      }
    }

    return dist;
  }
}

var graph = new Graph_mat(true);
console.log(graph.graph);
graph.addVertex("A");graph.addVertex("B");graph.addVertex("C");
graph.addVertex("D");graph.addVertex("E");graph.addVertex("F");
graph.addEdge("A","B",2);graph.addEdge("B","D",4);graph.addEdge("A","C",4);
graph.addEdge("B","C",2);graph.addEdge("C","E",3);graph.addEdge("B","E",2);
graph.addEdge("E","D",3);graph.addEdge("E","F",2);graph.addEdge("D","F",2);
console.log(graph.vertices);
console.log(graph.graph);
console.log(graph.djikstra("C"));
console.log(graph.floydWarshall());
