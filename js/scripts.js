function Place(name, yearVisited, notes) {
  this.name = name;
  this.year = yearVisited;
  this.notes = notes;
}
var dict = {};


$(document).ready(function() {
  var counter = 0;
  $("form").submit(function(event) {
    event.preventDefault();
    counter ++;
    var p = new Place($("#name").val(), $("#year").val(), $("#notes").val());

    dict[p.name] = p;
    if(counter <= 15) {
      $("#locations").append("<li>" + p.name + "</li>");
    } else if (counter <=30) {
      $("#locations2").append("<li>" + p.name + "</li>");
    } else {
      $("#locations3").append("<li>" + p.name + "</li>");
    }

    $("li").click(function() {
      var p = dict[$(this).text()];
      $(".col-md-4").show();
      $("#display-name").text(p.name);
      $("#display-year").text(p.year);
      $("#display-notes").text(p.notes);
    });
  });

  $("#edit-name").click(function() {
    $("#edited-name").toggle();
    var p = dict[$("#display-name").text()];
    $("li:contains('"+p.name+"')").text($("#edited-name").val());
    p.name = $("#edited-name").val();
    $("#display-name").text(p.name);
    dict[p.name] = p;
  });
  $("#edit-year").click(function() {
    $("#edited-year").toggle();
    var p = dict[$("#display-name").text()];
    p.year = $("#edited-year").val();
    $("#display-year").text(p.year);
  });
  $("#edit-notes").click(function() {
    $("#edited-notes").toggle();
    var p = dict[$("#display-name").text()];
    p.notes = $("#edited-notes").val();
    $("#display-notes").text(p.notes);
  });
});
