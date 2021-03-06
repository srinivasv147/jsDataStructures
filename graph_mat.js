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

  this.prims = function(){
    //the minimum spanning tree of graph is found
    var key = [];
    var parent = [];
    var visited = []
    for(var i = 0;i < this.vertices.length;i++ ){
      key[i] = Infinity;
      parent[i] = '-1';
      visited[i] = false;
    }
    key[0] = 0;
    for(var i =0;i<this.vertices.length;i++){
      var visInd = this.minDist(key,visited);
      visited[visInd] = true;
      for(var j =0;j < this.vertices.length;j++){
        if((this.graph[visInd][j] < Infinity)
          && (visited[j] == false)
          && (key[j] > this.graph[visInd][j])){
            key[j] = this.graph[visInd][j];
            parent[j] = visInd;
          }
      }
    }
    return parent;
  }

  this.kruskal = function(){
    var connected = [];
    parent = []
    var dist = [];
    var u = -1;
    var v = -1;
    var findParent = function(node,parents){
      while(parent[node]){
        node = parents[node];
      }
      return node;
    }
    for(var i =0;i<this.vertices.length;i++){
      dist[i] = [];
      connected[i] = [];
      for(var j = 0;j<this.vertices.length;j++){
        dist[i][j] = this.graph[i][j];
        connected[i][j] = 0
      }
    }
    var ne = 0;
    while(ne < this.vertices.length-1){
      var min = Infinity;
      // console.log(min);
      for(var l = 0 ; l < this.vertices.length ; l++){
        // console.log(l);
        for(var m = 0;m < this.vertices.length; m++){
          // console.log(min);
          if(dist[l][m] < min){
            min = dist[l][m];
            u = l;
            v = m;
          }
        }
      }
      //here we get the two vertices with the lowest distance between them.
      // console.log(u,v);
      u1 = findParent(u,parent);
      v1 = findParent(v,parent);
      // console.log(u1,v1)
      if(u1 !== v1){
        // console.log("setting",u,"parent of",v);
        parent[v] = u;
        connected[v][u] = 1;
        connected[u][v] = 1;
        // if (v > u)parent[u] = v;
        // parent[u] = v;
        ne++;
      }
      dist[u][v] = Infinity;
      dist[v][u] = Infinity;
    }
    return connected;
  }
}

var graph = new Graph_mat();
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
console.log(graph.prims());
console.log(graph.kruskal());
