

// Hiển thị biểu tượng loading khi tải trang
window.onload = function(){
    loader.style.display = "inline-block";
}

// Hiển thị các bài viết của Web khác thông qua gnew
fetch('https://gnews.io/api/v4/top-headlines?token=5394ad86c00245d25bb6d2e5ba982838&lang=en')

    .then(function (response) {
        return response.json();
        
    })

    .then(function (data) {
        var news = data.articles.map(function(x){ 
            var a = x.image;
            var b = x.title;
            var c = x.description;
            var d = x.url;
            var e = x.publishedAt;
            return '<div class = "a-news">'
            + '<img src = \"' + a + '\" class = \"imgGnew\">' 
            + '<ul> <li class = "linkGnew"> <a href= \"'  + d + '\" target="_blank"> ' + b + '</a> </li>'
            + '<li class = "timeGnew">' + e + '</li>'
            + '<li class = "desGnew">' + c + '</li> </ul> </div>'; 
        });
        document.getElementById("news").innerHTML = news;
        loader.style.display = "none";  // ẩn đi biểu tượng loading sau khi tải xong
    });
 
    


// Chức năng tìm bài viết bằng từ khoá
function searching (){
    var input = document.getElementById('ip-search').value;
    var fromValue =  document.getElementById('ip-from').value; //thiết lập biến thời gian có tin tức
    var toValue =  document.getElementById('ip-to').value; //thiết lập biến thời gian có tin tức
    var loader = document.getElementById("loader");  
        loader.style.display = "inline-block"; // hiển thị biểu tượng loading khi tìm từ khoá
    
        // Bài viết xuất hiện liên quan từ khoá mình search
    fetch('https://gnews.io/api/v4/search?q='+input+'&from='+fromValue+'&to='+toValue+'&token=5394ad86c00245d25bb6d2e5ba982838&lang=en')
        .then(function (response) {
            return response.json()
        })

        .then(function (data) {
            var searchNews = data.articles.map(function(x){  
                var a = x.image;
                var b = x.title;
                var c = x.description;
                var d = x.url;
                var e = x.publishedAt;
                return '<div class = "a-news">'
                + '<img src = \"' + a + '\" class = \"imgGnew\">' 
                + '<ul> <li class = "linkGnew"> <a href= \"'  + d + '\" target="_blank"> ' + b + '</a> </li>'
                + '<li class = "timeGnew">' + e + '</li>'
                + '<li class = "desGnew">' + c + '</li> </ul> </div>'
            }) 
            document.getElementById("news").innerHTML = searchNews; 
            loader.style.display = "none";  // ẩn biểu tượng loading khi tìm từ khoá
        })
    // làm thanh tìm kiếm từ khoá nổi lên
    document.getElementById("modal").style.display = "none";
    document.getElementById('ip-searc h').value=""; 
}
        