$(document).ready(function(){

    $('form').on('submit', function(){

        var item = $('form input');
        console.log(item);
        var todo = {item: item.val()};
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
       //   success: function(data){
         //   location.reload();
          //}
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            location.reload();
          }
        });
    });
  
  });
