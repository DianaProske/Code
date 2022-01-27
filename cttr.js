function crtanjeTrougla(){
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    var tacke = [];
    for (let i = 0; i < 3; i++) {
        let par = {};
        par.x = Math.floor(Math.random() * 400);
        par.y = Math.floor(Math.random() * 400);
        tacke.push(par);
    }

    var boja = document.getElementById('boja').value;

    ctx.moveTo(tacke[0].x, tacke[0].y);
    ctx.lineTo(tacke[1].x, tacke[1].y);
    ctx.lineTo(tacke[2].x, tacke[2].y);
    ctx.lineTo(tacke[0].x, tacke[0].y);
    ctx.strokeStyle = boja;
    ctx.stroke();
};