
    //<![CDATA[ 
    $(window).load(function(){
        var template = [
    '<div class="item chat l1">',
		'<div class="title">',
			'<h3><a href="#" class="slideRight">{{message}}</a></h3>',
			'<a href="#" class="comments">0</a>',
		'</div>',
        '<ul class="meta">',           
            '<li class="author">',
                '<span class="ui-icon ui-icon-comment"></span>3:10PM - <a href="#">Stacey Lipton</a>',
            '</li>',
        '</ul>',
    '</div>'
].join('');

 var commentTemplate = [
    '<div class="commentTemplate">',
		'<p>{{comment}}</p>',
		'<ul class="meta">',
			'<li class="author"><span class="ui-icon ui-icon-comment"></span>14:04PM - <a href="#">Adam Feldheim</a></li>',
		'</ul>',
    '</div>'
].join('');

$('#col2 .commentsForm form').submit(function(e) {
    template = commentTemplate.replace('{{comment}}', $('#c2comments1').val());
    $(template).hide().prependTo('#col2 .commentsList').slideDown("250");
	$('#col2 .commentsTitle').text('2 Comments');
    e.preventDefault();
	$('#c2comments1').val('');
});

$('#col2 .colHead form').submit(function(e) {
    template = template.replace('{{message}}', $('input.message, this').val());
    $(template).hide().prependTo('.itemList2').slideDown("250");
    e.preventDefault();
	$('#msg2').val('');
});

$('#col3 .colHead form').submit(function(e) {
    template = template.replace('{{message}}', $('input.message, this').val());
    $(template).hide().prependTo('#itemList3').slideDown("250");	
    e.preventDefault();
	$('#msg3').val('');
});

$('#col4 .colHead form').submit(function(e) {
    template = template.replace('{{message}}', $('input.message, this').val());
    $(template).hide().prependTo('#itemList4').slideDown("250");
    e.preventDefault();
	$('#msg4').val('');
});

$('#col5 .colHead form').submit(function(e) {
    template = template.replace('{{message}}', $('input.message, this').val());
    $(template).hide().prependTo('#itemList5').slideDown("250");
    e.preventDefault();
	$('#msg5').val('');
});

$('#col6 .colHead form').submit(function(e) {
    template = template.replace('{{message}}', $('input.message, this').val());
    $(template).hide().prependTo('#itemList6').slideDown("250");
    e.preventDefault();
	$('#msg6').val('');
});

$('#col7 .colHead form').submit(function(e) {
    template = template.replace('{{message}}', $('input.message, this').val());
    $(template).hide().prependTo('#itemList7').slideDown("250");
    e.preventDefault();
	$('#msg7').val('');
});

$('#col8 .colHead form').submit(function(e) {
    template = template.replace('{{message}}', $('input.message, this').val());
    $(template).hide().prependTo('#itemList8').slideDown("250");
    e.preventDefault();
	$('#msg8').val('');
});

$('#col1a .colHead form').submit(function(e) {
    template = template.replace('{{message}}', $('input.message, this').val());
    $(template).hide().prependTo('#itemList1a').slideDown("250");
    e.preventDefault();
	$('#msg9').val('');
});




$(function() {
    var tabContainers = $('div.colTabs1 > div > div');
    tabContainers.hide().filter(':first').show();

    $('div.colTabs1 ul.col3panes a').click(function() {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.colTabs1 ul.col3panes a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});















    });
    //]]> 
  