// Student Name: Xiaochen Wang Student ID: 015297153
console.log("Hello");
// function appendText(){
//     console.log("addElement");
//     var Element1 = "<li> Frist Name: <b> Xiaochen </b></li>";
//     var Element2 = "<li> Last Name: <b> Wang </b></li>";
//     var Element3 = "<li> Course Title: <b> WEB422 </b></li>";

//     var addElement = document.createElement("li");
//     txt3.innerHTML = "Text.";
//     $("body").append(Element1,Element2,Element3); 
// }

$("ul#list > li").each(function(index){
    console.log("addElement");
    $(this).prepend('<b>' + index + ' - ' );
});