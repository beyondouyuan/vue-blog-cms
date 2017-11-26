<template>
  <canvas id="particle" class="particle"></canvas>
</template>
<script>
    export default {
        mounted() {
        let WIDTH = window.innerWidth,
            HEIGHT = window.innerHeight,
            POINT = 35;

        const canvas = document.getElementById('particle');
        canvas.width = WIDTH,
        canvas.height = HEIGHT;
        const context = canvas.getContext('2d');
        context.strokeStyle = 'rgba(0,0,0,0.2)',
        context.strokeWidth = 1,
        context.fillStyle = 'rgba(0,0,0,0.1)';
        let circleArr = [];

        /**
         * 创建线
         * @param {[type]} x  [description]
         * @param {[type]} y  [description]
         * @param {[type]} _x [description]
         * @param {[type]} _y [description]
         * @param {[type]} o  [description]
         */
        function Line (x, y, _x, _y, o) {
            this.beginX = x,
            this.beginY = y,
            this.closeX = _x,
            this.closeY = _y,
            this.o = o;
        }
        /**
         * 创建点
         * @param {[type]} x     [description]
         * @param {[type]} y     [description]
         * @param {[type]} r     [description]
         * @param {[type]} moveX [description]
         * @param {[type]} moveY [description]
         */
        function Circle (x, y, r, moveX, moveY) {
            this.x = x,
            this.y = y,
            this.r = r,
            this.moveX = moveX,
            this.moveY = moveY;
        }
        /**
         * 随机数
         * @param  {[type]} max  [description]
         * @param  {[type]} _min [description]
         * @return {[type]}      [description]
         */
        const num = (max, _min) => {
            const min = arguments[1] || 0;
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        /**
         * 绘制原点
         * @param  {[type]} cxt   [description]
         * @param  {[type]} x     [description]
         * @param  {[type]} y     [description]
         * @param  {[type]} r     [description]
         * @param  {[type]} moveX [description]
         * @param  {[type]} moveY [description]
         * @return {[type]}       [description]
         */
        const drawCricle = (cxt, x, y, r, moveX, moveY) => {
            const circle = new Circle(x, y, r, moveX, moveY)
            cxt.beginPath()
            cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
            cxt.closePath()
            cxt.fill();
            return circle;
        }
        /**
         * 绘制线
         * @param  {[type]} cxt [description]
         * @param  {[type]} x   [description]
         * @param  {[type]} y   [description]
         * @param  {[type]} _x  [description]
         * @param  {[type]} _y  [description]
         * @param  {[type]} o   [description]
         * @return {[type]}     [description]
         */
        const drawLine = (cxt, x, y, _x, _y, o) => {
            const line = new Line(x, y, _x, _y, o)
            cxt.beginPath()
            cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
            cxt.moveTo(line.beginX, line.beginY)
            cxt.lineTo(line.closeX, line.closeY)
            cxt.closePath()
            cxt.stroke();

        }
        /**
         * 逐帧绘制
         * @return {[type]} [description]
         */
        const draw = () => {
            context.clearRect(0,0,canvas.width, canvas.height);
            for (let i = 0; i < POINT; i++) {
                drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
            }
            for (let i = 0; i < POINT; i++) {
                for (let j = 0; j < POINT; j++) {
                    if (i + j < POINT) {
                        let A = Math.abs(circleArr[i+j].x - circleArr[i].x),
                            B = Math.abs(circleArr[i+j].y - circleArr[i].y);
                        let lineLength = Math.sqrt(A*A + B*B);
                        let C = 1/lineLength*7-0.009;
                        let lineOpacity = C > 0.03 ? 0.03 : C;
                        if (lineOpacity > 0) {
                            drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
                        }
                    }
                }
            }
        }
        /**
         * 初始化远点
         * @return {[type]} [description]
         */
        const init = () => {
            circleArr = [];
            for (let i = 0; i < POINT; i++) {
                circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
            }
            draw();
        }
        init();
        setInterval(function () {
            for (let i = 0; i < POINT; i++) {
                let cir = circleArr[i];
                cir.x += cir.moveX;
                cir.y += cir.moveY;
                if (cir.x > WIDTH) cir.x = 0;
                else if (cir.x < 0) cir.x = WIDTH;
                if (cir.y > HEIGHT) cir.y = 0;
                else if (cir.y < 0) cir.y = HEIGHT;
            }
            draw();
        }, 10);
        }
    }
</script>
<style>
  .particle {
    position: fixed;
    z-index: -1;
  }
</style>
