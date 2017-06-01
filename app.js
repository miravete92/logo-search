function watchSearch() {
  $('.searchForm').submit(function(e) {
  	console.log("submit");
    e.preventDefault();
    var program = $('#program').val();
    var education = $('#education').val();
    console.log(program+":"+education);

    //Clear
    $('img').each(function(index){
      $(this).removeClass('selected');
    });

    //fillquery
    var query = 'img';
    if(program!=='all') query+='.'+program;
    if(education!=='all') query+='.'+education;

    //mark selected
    $(query).each(function(index){
      $(this).addClass('selected');
    });
  });
}

$(function(){
	watchSearch();
});