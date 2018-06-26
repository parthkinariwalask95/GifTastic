var zooanimal=["cat","parrot","dog","lion","elephant"];
function button(){
    for (var i=0; i<zooanimal.length;i++)
    {
        var animal=$("<button>");
        console.log(zooanimal[i]);
        animal.text(zooanimal[i]);
        animal.addClass("b1");
        animal.attr("data-name",zooanimal[i]);
        $("#b2").append(animal);
    }
    
};
function showbutton(){
    
    var p1 = $(this).attr("data-name");
    var apikey = "3dgM4EKzygMbwDRyIrEsT6N7VKUuGgXU";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p1 + "&api_key=" + apikey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
      .then(function(response){
         console.log(response);
        var result=response.data;
          for(var k=0;k<10;k++)
            {
                $("#imgdis"+k).text("");
            }

    for (var z=0; z < 10; z++)
    {
        var newdiv=$("<div>");
        var p= $("<p>");
        p.text("Rating :" + result[z].rating);
        var mainImage= $("<img>");
        mainImage.attr("src", result[z].images.fixed_height.url);
        mainImage.addClass("img");
        
        newdiv.append(p);
        newdiv.append(mainImage);
        $("#imgdis"+z).prepend(newdiv);

    }

});
} 
function add1(){
    var text = $("#textbox1").val().trim();
    console.log(text);
    alert("you add new button  ")
   
    zooanimal.push(text);
     $("#b2").text("");
 button();
 };
 
 button();
 $(document).on("click", ".b1", showbutton);