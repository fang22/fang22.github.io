
function getvalue () {
    var cla = document.getElementById('classes').value;
    if (cla == '') {
        alert("请填写班级");
        id.focus()
    }
    var id = document.getElementById('IDs').value;
    if (id == '') {
        alert("请填写学号");
        name.focus()
    }
    var name = document.getElementById('names').value;
    if (name == '') {
        alert("请填写姓名");
        cla.focus()
    }
    //测试是否填写个人信息
}
function get () {
    var t1 = document.getElementById('text1').value;
    var t2 = document.getElementById('text11').value;
    var t3 = document.getElementById('text12').value;
    var t4 = document.getElementById('text13').value;
    if(t1 == '统一建模语言'){}
    else{alert("错了")}
    if(t2 == '封装性'){}
    else{alert("错了")}
    if(t3 == '继承性'){}
    else{alert("错了")}
    if(t4 == '多态性'){}
    else{alert("错了")}
}
//填空题测试
function two() {
    var r1 = document.getElementsByName('options');
    var selectvalue =null;
    for (var i = 0; i < r1.length;i++) {
        if (r1[i].checked == true) {
            selectvalue = r1[i].value;
            break;
        }
    }
    alert(selectvalue)
}

function twos() {
    var r2 = document.getElementsByName('optionss');
    var selectvalue = null;
    for (var i = 0; i < r2.length;i++) {
        if (r2[i].checked == true) {
            selectvalue = r2[i].value;
            break;
        }
    }
    alert(selectvalue)
}
//单选题测试
function check () {
    var che = document.getElementsByName('check');
    var ches = document.getElementsByName('checks');
    var selectvalue1 = [];
    var selectvalue2 = [];

    for (var i = 0; i < che.length;i++) {
        if (che[i].checked == true) {
            selectvalue1.push(che[i].value)
        }
    }
    alert(selectvalue1)
    for (var j = 0; j < che.length;j++) {
        if (ches[j].checked == true) {
            selectvalue2.push(ches[j].value)
        }
    }
    alert(selectvalue2)
}
//多选题测试
function one() {
    var r1 = document.getElementsByName('radior');
    var s =null;
    for (var i = 0; i < r1.length;i++) {
        if (r1[i].checked == true) {
            s = r1[i].value;
            break;
        }
    }
    alert(s)
}

function ones() {
    var r2 = document.getElementsByName('radiorr');
    var ss = null;
    for (var i = 0; i < r2.length;i++) {
        if (r2[i].checked == true) {
            ss = r2[i].value;
            break;
        }
    }
    alert(ss)
}
//判断题测试