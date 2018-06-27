// creating var with using array
var zooanimal=["cat","parrot","dog","lion","elephant"];
// button function
function button(){
    // for loop
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
// showbutton function
function showbutton(){
    
    var p1 = $(this).attr("data-name");
    // apikey
    var apikey = "3dgM4EKzygMbwDRyIrEsT6N7VKUuGgXU";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p1 + "&api_key=" + apikey;
    
    // ajax method
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // function and passing parameter
      .then(function(response){
        // using the console.log  
        console.log(response);
        var result=response.data;
        // for loop  
        for(var k=0;k<10;k++)
            {
                $("#imgdis"+k).text("");
            }

    // for loop
            for (var z=0; z < 10; z++)
    {
        var newdiv=$("<div>");
        var p= $("<p>");
        p.text("Rating :" + result[z].rating);
        var mainImage= $("<img>");

        mainImage.attr("src", result[z].images.fixed_height_still.url);
        mainImage.addClass("img");
        mainImage.attr("data-still",result[z].images.fixed_height_still.url);
        mainImage.attr("data-state","still");
        mainImage.attr("data-animate",result[z].images.fixed_height.url);
        
        newdiv.append(p);
        newdiv.append(mainImage);
        $("#imgdis"+z).prepend(newdiv);

    }

});
} 
// function add1
function add1(){
    var text = $("#textbox1").val().trim();
    console.log(text);
//  alert box 
    alert("you add new button  ")
   
    zooanimal.push(text);
     $("#b2").text("");
 button();
 };
// button function
 button();
 $(document).on("click", ".b1", showbutton);
 $(document).on("click",".img", function() {
    // STEP ONE: study the html above.
    // Look at all the data attributes.
    // Run the file in the browser. Look at the images.
    $(".img").on("click", function(){
      var state = $(this).attr("data-state");
      var an = $(this).attr("data-animate");
      var still= $(this).attr("data-still");
    //   if statment
      if(state == "still"){
            $(this).attr("src",an);
            $(this).attr("data-state","animte");
        }
        // else statment
        else{
          $(this).attr("src",still);
          $(this).attr("data-state","still");
        }
    });
});