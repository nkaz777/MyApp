var flg = false;
function down(event){
    flg = true;
    setLoc(event);
}
function up(event){
    flg = false;
    setLoc(event);
}
function move(event){
    if (flg){
        setLoc(event);
    }
}
function setLoc(event){
    var obj = document.getElementById("msg").style;
    obj.left = event.clientX - 50 + 'px';
    obj.top = event.clientY - 50 + 'px';
}

//Chapter3-04
function doClick04(){
    var frontVal = document.getElementById('front').value;
    var backVal = document.getElementById('back').value;
    var sizeVal = document.getElementById('size').value;
    var styleObj = document.getElementById('msg').style;
    styleObj.color = frontVal;
    styleObj.backgroundColor = backVal;
    styleObj.frontSize = sizeVal + 'pt';
}
//Chapter3-03
function doClick3(){
    var val = document.getElementById('text1').value;
    data.push(val);
    var res = '<ol type="1">';
    for(var i = 0;i < data.length;i++){
        res += '<li>' + data[i] + '</li>';
    }
    res += '</ol>'; 
    var msg = document.getElementById('msg');
    msg.innerHTML = res;
}
function doClick2(){
    var text1 = document.getElementById("text1");
    var str = text1.value;
    var res = 'あなたは、「' + str + '」と入力しました。';
    var msg = document.getElementById('msg');
    msg.textContent = res;
}

function TaxObject(t,p){
    this.tax = t;
    this.price = p;
    this.calc = function(){
        return this.price * (1.0 + this.tax);
    };
    
    this.print = function(){
        document.write('<p>税込み価格：' + this.calc() + '円</p>');
    };
}

//実行
//var obj = new TaxObject(0.08, 10000);
//obj.print();
