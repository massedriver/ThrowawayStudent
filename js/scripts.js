$(document).ready(function() {
  $("#goal_button").click(function() {
    $("#goal_list").append("<li class='list_item'>" + $("#new_goal").val() + "</li>");
    $("#new_goal").val("");
  })
})
