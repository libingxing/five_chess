var chess=document.getElementById('chess');
//取得绘图上下文
var context=chess.getContext('2d');
//定义赢法数目;
var count=0;
var over=false;
var me=true;


//定义二维数组，用于存储落棋点位置；
var chessBoard=[];
for(var i=0;i<15;i++){
chessBoard[i]=[];
for(var j=0;j<15;j++){
chessBoard[i][j]=0;
}
}



//定义赢法数组;
var wins=[];
for(var i=0;i<15;i++){
wins[i]=[];
for(var j=0;j<15;j++){
wins[i][j]=[];
}
}

//定义我方赢法数组
var myWin=[];
//定义计算机赢法数组
var computerWin=[];




//横线
for(var i=0;i<15;i++){
for(var j=0;j<11;j++){
for(var k=0;k<5;k++){
wins[i][j+k][count]=true;
}
count++;
}
}



//竖线
for(var i=0;i<15;i++){
for(var j=0;j<11;j++){
for(var k=0;k<5;k++){
wins[j+k][i][count]=true;
}
count++;
}
}



//斜线
for(var i=0;i<11;i++){
for(var j=0;j<11;j++){
for(var k=0;k<5;k++){
wins[i+k][j+k][count]=true;
}
count++;
}
}

//反斜线
for(var i=0;i<11;i++){
for(var j=14;j>3;j--){
for(var k=0;k<5;k++){
wins[i+k][j-k][count]=true;
}
count++;
}
}


//初始化,一定要注意count
for(var i=0;i<count;i++){
myWin[i]=0;
computerWin[i]=0;
}

//描边
context.strokeStyle="#bfbfbf";
//添加水印图片，
var logo=new Image();
logo.src="img.jpg";
logo.onload=function(){
	//先进行水印，然后再绘制棋盘；
context.drawImage(logo,0,0,450,450);
drawChessBorder();
};

//绘制棋盘
var drawChessBorder=function(){
for(var i=0;i<15;i++){
	//总计十四乘十四矩形，画15乘15的线条;
context.moveTo(15+i*30,15);
context.lineTo(15+i*30,435);
context.stroke();//stroke方法用于描边;
context.moveTo(15,15+i*30);
context.lineTo(435,15+i*30);
context.stroke();
}
};



//绘制棋子
var oneStep=function(i,j,me){
//画圆
context.beginPath();
context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
context.closePath();
//实现渐变效果
var gradient=context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30+2,15+j*30-2,0);
if(me){
gradient.addColorStop(0,'#0A0A0A');
gradient.addColorStop(1,'#636766');
}
else{
gradient.addColorStop(0,'#D1D1D1');
gradient.addColorStop(1,'#F9F9F9');
}
context.fillStyle=gradient;
context.fill();
};




//实现落子
chess.onclick=function(ev){
if(over){
return ;
}
	var e=ev||window.event;
	var x=e.offsetX;
	var y=e.offsetY;
	var i=Math.floor(x/30);
	var j=Math.floor(y/30);

	if(chessBoard[i][j]==0){
      oneStep(i,j,me);
     if(me){
      chessBoard[i][j] = 1;
            }
			else{
              chessBoard[i][j] = 2;
                }
				for(var k=0; k<count; k++){
          if(wins[i][j][k]){
            if(me){
           myWin[k]++;
	      computerWin[k] = 6;
	   if(myWin[k]==5){
window.alert("You are win!");
over=true;	
}
 }
			  else{
   computerWin[k]++;
    myWin[k] = 6;
if(computerWin[k]==5){
window.alert("You are loser!");
over=true;
}	
}
}
}
if 
me=!me;
}

};
