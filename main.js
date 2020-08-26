
const sours = $("#people-template").html()
const template = Handlebars.compile(sours)


const render = function(){
  $.ajax({
    method: "GET",
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
  const result = data.results
   console.log(result)
      let someHTML = template(result)
      $("#people").append(someHTML)

    }
  });
 
}
 
render()

    