class branch{

constructor(begin,end){
  this.begin=begin;this.end=end;
}
show(){
line(this.begin.x,this.begin.y,this.end.x,this.end.y);}

branchR(){
let dir=p5.Vector.sub(this.end,this.begin);
dir.rotate(PI/4);dir.mult(.677);
let newbrR=p5.Vector.add(this.end,dir);
let right=new branch(this.end,newbrR);
return right;
}

branchL(){
let dir=p5.Vector.sub(this.end,this.begin);
dir.rotate(-PI/4);dir.mult(.677);
let newbrL=p5.Vector.add(this.end,dir);
let left=new branch(this.end,newbrL);
return left;
}
jitter(){
this.end.x+=random(-2,2);
this.end.y+=random(-3,3);

}

}
