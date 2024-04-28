$(document).ready(function(){
    //function to retrieve input value 
    $('.number').click(function(){
        var num = $(this).text();
        $('#display').val($('#display').val() + num)
    })

    //function to clear input 
    $('.clear').click(function(){
        $('#display').val('');
    })

    //function to retrieve operator button value
    $('.operator').click(function() {
        var operator = $(this).text();
        $('#display').val($('#display').val() + ' ' + operator + ' ');
      });

      //function to perform calculation
      $('.calculate').click(function() {
        var expression = $('#display').val();
        var result = eval(expression); // Warning: Using eval() is not recommended for production apps
        $('#display').val(result);
      });
});