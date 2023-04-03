 var testScore = {
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0
} 

var i = 0;
var j = 0;
var a = "";
var b = 0;
var c = 0;
var d = 0;
var k = 1;


// Hàm tạo thông tin điểm số cho học sinh
function point() {
// Gán giá trị nhập số điểm vào biến
   var a = document.getElementById("fullName").value;
   var b = document.getElementById("math").value; 
   var c = document.getElementById("physics").value;
   var d = document.getElementById("chemistry").value;

   if (a == "") {
      alert("Vui lòng nhập tên học sinh");
   } else if (b == "") {
      alert("Vui lòng nhập điểm Toán")
   } else if (c == "") {
      alert("Vui lòng nhập điểm Lý")
   } else if (d == "") {
      alert("Vui lòng nhập điểm Hóa")
   } else if (b < 0 || c < 0 || d < 0 || b > 10 || c > 10 || d > 10) {
		alert("Vui lòng nhập điểm từ 0 - 10")
	 }

   
   
   // khai báo biến để tạo thêm hàng cho bảng     
   if(a != "" && b != "" && c != "" && d != "" && b > 0 && c > 0 && d > 0 && b <= 10 && c <= 10 && d <= 10){   
      var row = tb.insertRow(++j); 
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
   }
   // in Kết quả đã nhập vào bảng
   if(a != "" && b != "" && c != "" && d != "" && b > 0 && c > 0 && d > 0 && b <= 10 && c <= 10 && d <= 10){
      cell1.innerHTML = ++i;
      cell2.innerHTML = a.toUpperCase();
      cell3.innerHTML = b;
      cell4.innerHTML = c;
      cell5.innerHTML = d;
      cell6.innerHTML = "?";
      cell7.innerHTML = "?";

      // xóa thông tin trong ô nhập
      document.getElementById("fullName").value="";
      document.getElementById("math").value=""; 
      document.getElementById("physics").value="";
      document.getElementById("chemistry").value=""; 
   }


   // lưu trữ các thông tin về tên và số điểm mỗi môn của học sinh:
      testScore.name = a.toUpperCase();
      testScore.math = b;
      testScore.physical = c;
      testScore.chemistry = d;
   
   
}

// hàm tính điểm trung bình
function gpa() {
    var table = document.getElementById("tb");
   var rowtb = table.rows;
   for (k=1; k < rowtb.length; k++) { 
      var x = table.rows[k].cells[2].innerHTML;
      var y = table.rows[k].cells[3].innerHTML;
      var z = table.rows[k].cells[4].innerHTML;
      tong =  parseFloat(x,10)  + parseFloat(y,10) + parseFloat(z,10);
      var avr = tong/3;
      table.rows[k].cells[5].innerHTML = avr.toFixed(1);
      }
}
// Hàm xác định học sinh đạt 8.0 điểm trở lên, chữ sẽ biến màu đỏ
function goodStudent() {
   var table = document.getElementById("tb");
   var rowtb = table.rows;
   for (k=1; k < rowtb.length; k++) { 
      var good = table.rows[k].cells[5].innerHTML;
      var goodScore = parseFloat(good,10);
      if (goodScore >= 8.0) {
         table.rows[k].style.color = "red";
      }
   }
}
 // Tính điểm trung bình cao nhất
function bestScore () {
   var table = document.getElementById("tb");
   var rowtb = table.rows;
   var arrayAvr = [];
   var bestAvr = 0;
   for (k=1; k < rowtb.length; k++) { 
      var good = table.rows[k].cells[5].innerHTML;
      var goodScore = parseFloat(good,10);
      arrayAvr.push(goodScore);
   }
   for (let i=1; i<arrayAvr.length;i++) {
      if(arrayAvr[i]>arrayAvr[i-1]){
         bestAvr=arrayAvr[i];
      } else{
         bestAvr = arrayAvr[i-1]
      };
   }
   console.log(arrayAvr); 
   console.log(bestAvr);

   document.getElementById("bestAll").innerHTML ="Điểm trung bình cao nhất: " + bestAvr
   }

   function rank () { 
      var table = document.getElementById("tb");
      var rowtb = table.rows;
      for (k=1; k < rowtb.length; k++) { 
         var score = table.rows[k].cells[5].innerHTML;
         if(score >= 8.0) {
            table.rows[k].cells[6].innerHTML = "giỏi";
         } else if (score >= 6.5 && score < 8.0){
               table.rows[k].cells[6].innerHTML = "khá";
         } else if (score >= 5.0 && score < 6.5){
            table.rows[k].cells[6].innerHTML = "trung bình";
         } else if (score >= 3.5 && score < 5.0){ 
            table.rows[k].cells[6].innerHTML = "yếu"; 
         }
         else { 
            table.rows[k].cells[6].innerHTML = "kém"; 
         }
      }   

   }

