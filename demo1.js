var chess=document.getElementById('chess');
//ȡ�û�ͼ������
var context=chess.getContext('2d');
//����Ӯ����Ŀ;
var count=0;
var over=false;
var me=true;


//�����ά���飬���ڴ洢�����λ�ã�
var chessBoard=[];
for(var i=0;i<15;i++){
chessBoard[i]=[];
for(var j=0;j<15;j++){
chessBoard[i][j]=0;
}
}



//����Ӯ������;
var wins=[];
for(var i=0;i<15;i++){
wins[i]=[];
for(var j=0;j<15;j++){
wins[i][j]=[];
}
}

//�����ҷ�Ӯ������
var myWin=[];
//��������Ӯ������
var computerWin=[];




//����
for(var i=0;i<15;i++){
for(var j=0;j<11;j++){
for(var k=0;k<5;k++){
wins[i][j+k][count]=true;
}
count++;
}
}



//����
for(var i=0;i<15;i++){
for(var j=0;j<11;j++){
for(var k=0;k<5;k++){
wins[j+k][i][count]=true;
}
count++;
}
}



//б��
for(var i=0;i<11;i++){
for(var j=0;j<11;j++){
for(var k=0;k<5;k++){
wins[i+k][j+k][count]=true;
}
count++;
}
}

//��б��
for(var i=0;i<11;i++){
for(var j=14;j>3;j--){
for(var k=0;k<5;k++){
wins[i+k][j-k][count]=true;
}
count++;
}
}


//��ʼ��,һ��Ҫע��count
for(var i=0;i<count;i++){
myWin[i]=0;
computerWin[i]=0;
}

//���
context.strokeStyle="#bfbfbf";
//����ˮӡͼƬ��
var logo=new Image();
logo.src="img.jpg";
logo.onload=function(){
	//�Ƚ���ˮӡ��Ȼ���ٻ������̣�
context.drawImage(logo,0,0,450,450);
drawChessBorder();
};

//��������
var drawChessBorder=function(){
for(var i=0;i<15;i++){
	//�ܼ�ʮ�ĳ�ʮ�ľ��Σ���15��15������;
context.moveTo(15+i*30,15);
context.lineTo(15+i*30,435);
context.stroke();//stroke�����������;
context.moveTo(15,15+i*30);
context.lineTo(435,15+i*30);
context.stroke();
}
};



//��������
var oneStep=function(i,j,me){
//��Բ
context.beginPath();
context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
context.closePath();
//ʵ�ֽ���Ч��
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




//ʵ������
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