//Constructor//
function Ticket(age,movie,time) {
  this.age = age,
  this.movie = movie,
  this.time = time,
  this.price = " "
}

//Prototype//
Ticket.prototype.setPrice = function(inputAge) {
  if (inputAge === "Youth") {
    this.price = 5;
  } else {
    this.price = 10;
  }
}


$(document).ready(function() {
  $("form.movieForm").submit(function(event) {

    //Input Values//
    var inputAge = $("input:radio[name=age]:checked").val();
    var inputMovie = parseInt($("select#Movie-Name").val());
    var inputTime = $("input:radio[name=time]:checked").val();

    //Instance Object//
    var Ticket1 = new Ticket(inputAge, inputMovie, inputTime);

    Ticket1.setPrice(inputAge);
    $(".result").append(Ticket1.price);
    event.preventDefault();
  });
});
