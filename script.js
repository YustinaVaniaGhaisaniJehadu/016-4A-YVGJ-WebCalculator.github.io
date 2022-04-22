
function insert(num){
	document.form.textView.value = document.form.textView.value + num;
}
function C(){
	document.form.textView.value = "";
}

function Del(){
	var X = document.form.textView.value;
	document.form.textView.value = X.substring(0,X.length-1);
}

function equal(){
     var X = document.form.textView.value;
     if(X == ""){
          alert('masukan angka terlebih dahulu')
     }
     if(X){
          document.form.textView.value = eval(X);
     }
}