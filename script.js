(function() {
  var load_chart;

  load_chart = function() {
    $("body").removeClass("loaded");
    return setTimeout(function() {
      return $("body").addClass("loaded");
    }, 700);
  };

  $(".js-do-it-again").on("click", function() {
    return load_chart();
  });

  load_chart();

}).call(this);

$(document).ready(function(){
  $(".modal_btn").click(function(){
    $(".modal_box").addClass("active");
  });

  $(".modal_close").click(function(){
    $(".modal_box").removeClass("active");
  });

$(".btn_cancel").click(function(){
    $(".modal_box").removeClass("active");
  });

$(".btn_confirm").click(function(){
    $(".modal_box").removeClass("active");
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtJQUNYLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxXQUFWLENBQXNCLFFBQXRCO1dBQ0EsVUFBQSxDQUFZLFFBQUEsQ0FBQSxDQUFBO2FBQ1YsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsUUFBbkI7SUFEVSxDQUFaLEVBRUUsR0FGRjtFQUZXOztFQU1iLENBQUEsQ0FBRSxpQkFBRixDQUFvQixDQUFDLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFFBQUEsQ0FBQSxDQUFBO1dBQy9CLFVBQUEsQ0FBQTtFQUQrQixDQUFqQzs7RUFHQSxVQUFBLENBQUE7QUFUQSIsInNvdXJjZXNDb250ZW50IjpbImxvYWRfY2hhcnQgPSAoKSAtPlxuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxvYWRlZFwiKVxuICBzZXRUaW1lb3V0KCAoKSAtPlxuICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibG9hZGVkXCIpXG4gICwgNTAwKVxuXG4kKFwiLmpzLWRvLWl0LWFnYWluXCIpLm9uIFwiY2xpY2tcIiwgKCkgLT5cbiAgbG9hZF9jaGFydCgpXG4gIFxubG9hZF9jaGFydCgpIl19
//# sourceURL=coffeescript
