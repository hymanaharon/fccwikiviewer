$(document).ready(function(){
  
  $('#search').click(function(){
      $("#list").html("");
      var searchForm =$('#searchForm').val();
  
   
     var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchForm + "&format=json";
      
      $.ajax({
          type: "GET",
          url: wikiUrl,
          dataType: "jsonp",
          success: function(data){
            var result = data.query.search;
            for (var i = 0; i < result.length; i++) {
					var endUrl = result[i].title.replace(/ /g, "_");
					var title = result[i].title;
					var snippet = result[i].snippet;
                $("#list").append('<a href=http://en.wikipedia.org/wiki/' + endUrl + ' target="blank_"><div class= result><h2>' + title + '</h2><h4 class="description">' + snippet + '</h4></div></a>');
              
          }
          }
      })
         
       
      
      
         
    
   });
    $('#searchForm').keypress(function(e){
        if(e.which==13){
            $('#search').click();
        }
    });
});
    
    
    
    
    