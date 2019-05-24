(function () {
    var galaxy=document.getElementById("galaxy");
    var w=galaxy.width=document.documentElement.clientWidth;
    var h=galaxy.height=document.documentElement.clientHeight;
    window.onresize=function () {
        w=galaxy.width=window.innerWidth;
        h=galaxy.height=window.innerHeight;
    }
    function  random(min,max) {
        return Math.random()*(max-min)+min;
    }
    var ctx=galaxy.getContext("2d");
    function Star() {};
    Star.prototype={
        init:function(){
            this.x=random(0,w);
            this.y=random(0,h);
            this.r=1;
            this.xv=random(0,2)-1;
            this.yv=random(0,1)-0.5;
        },
        draw:function () {
            ctx.beginPath();
            ctx.fillStyle="#fff";
            ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
            ctx.fill();
        },
        move:function () {
            if(this.x<0||this.x>w){
                this.xv*=-1;
            }
            if(this.y<0||this.y>h){
                this.yv*=-1;
            }
            this.x+=this.xv;
            this.y+=this.yv;
            this.draw();
        }
    }
    var starArr=[];
    function creatStar() {
        var star=new Star();
        star.init();
        star.draw();
        starArr.push(star);
    }
    for(i=0;i<150;i++){
        creatStar();

    }
    function l(m,n) {
        return Math.sqrt(Math.pow(m.x-n.x,2)+Math.pow(m.y-n.y,2));
    }
    var mou={};
    galaxy.onmousemove=function (e) {
        mou.x=e.clientX;
        mou.y=e.clientY;

    }
    function starMove() {
        ctx.clearRect(0,0,w,h);

        for(var i=0;i<starArr.length;i++){
            for(var j=0;j<starArr.length;j++){
                if(i!=j){
                    var d=l(starArr[i],starArr[j]);
                    if(d<70){
                        ctx.beginPath();
                        ctx.moveTo(starArr[i].x,starArr[i].y);
                        ctx.lineTo(starArr[j].x,starArr[j].y);
                        ctx.strokeStyle="#1074AF";
                        ctx.stroke();
                    }
                }
            }
            var md=l(mou,starArr[i]);
            if(md<80){
                ctx.beginPath();
                ctx.moveTo(mou.x,mou.y);
                ctx.lineTo(starArr[i].x,starArr[i].y);
                ctx.strokeStyle="#1074AF";
                ctx.stroke();
            }

            starArr[i].move();
        }

    }
    setInterval(starMove,16);
})()