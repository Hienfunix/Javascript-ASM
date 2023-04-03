var i = 0;
// Nhập dữ liệu và được thêm các chỉ số
$(document).ready(function(){
   $("#addtb").click(function(){
      var a = $("#fullName").val();
      var b = $("#math").val();
      var c = $("#physics").val();
      var d = $("#chemistry").val();
      if (a == "") {
         alert("Vui lòng nhập tên học sinh");
      } else if (b == "") {
         alert("Vui lòng nhập điểm Toán")
      } else if (c == "") {
         alert("Vui lòng nhập điểm Lý")
      } else if (d == "") {
         alert("Vui lòng nhập điểm Hóa")
      } else if (b < 0 || c < 0 || d < 0) {
         alert("Vui lòng nhập điểm là số dương")
      }
      $("#fullName").val("");
      $("#math").val("");
      $("#physics").val("");
      $("#chemistry").val("");


      if(a != "" && b != "" && c != "" && d != "" && b > 0 && c > 0 && d > 0){
      $("#tb").append(
         "<tr><td>" + ++i + "</td>" + 
         '<td class="cell1">' + a + "</td>" + 
         '<td class="cell2">' + b + "</td>" + 
         '<td class="cell3">' + c + "</td>" + 
         '<td class="cell4">' + d + "</td>" +
         '<td class="cell5">' + "?" + "</td>" +
         '<td class="cell6">' + "?" + "</td>" +  
         "</tr>");
      }
   });
});
   
//Tính điểm trung bình
$(document).ready(function(){
   $("#gpa").click(function(){
      $("#tb tr").each(function(){
         var x = $(this).children(".cell2").html();
         var y = $(this).children(".cell3").html();
         var z = $(this).children(".cell4").html();
         var tong = parseFloat(x,10)  + parseFloat(y,10) + parseFloat(z,10);
         var avr = (tong/3).toFixed(1);
         $(this).children(".cell5").html(avr);
      });

   });
})

// Xác định học sinh giỏi bằng cách in chữ đỏ /*
$(document).ready(function(){
   $("#goodStudent").click(function(){
      $("#tb tr").each(function(){
         var avr = $(this).children(".cell5").html();
         if (avr >= 8.0) {
            $(this).addClass("redtext");
         }
      });
   });
})

$(document).ready(function(){
   $("#rank").click(function(){
      $("#tb tr").each(function(){
         var avr = $(this).children(".cell5").html();
         if( avr >= 8.0) {
            $(this).children(".cell6").html("giỏi");
         } else if (avr >= 6.5 && avr < 8.0){
            $(this).children(".cell6").html("khá");
         } else if (avr >= 5.0 && avr < 6.5){
            $(this).children(".cell6").html("trung bình");
         } else if (avr >= 3.5 && avr < 5.0){ 
            $(this).children(".cell6").html("yếu"); 
         } else { 
            $(this).children(".cell6").html("kém"); 
         }
      });
   });
})


