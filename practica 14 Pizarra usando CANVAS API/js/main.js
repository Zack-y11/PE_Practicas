let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')
let painting = false
ctx.scale(2,2)

function startPosition(e){
    painting = true;
    draw(e)
}
function endPosition(e){
    painting = false;
    ctx.beginPath()
}

const draw = (e)=>{
    if(!painting) return;

    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.strokeStyle = document.getElementById('colorPicker').value

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition)
canvas.addEventListener('mouseup', endPosition)
canvas.addEventListener('mousemove', draw)
