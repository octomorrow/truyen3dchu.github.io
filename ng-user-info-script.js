$(function() {
	var old_html_img_1 = $('.ng-group-icon-user-1').html();
	var old_html_img_2 = $('.ng-group-icon-user-2').html();
    getAcceptedExtension = function(element) {
		$('#inputFile1').attr('accept', '.jpg, .png');
		$('#inputFile1').click();
		// $('#inputFile1').show();
		// $('#inputFile1').focus();
		// $('#inputFile1').hide();
	}
	getimgsource = function(event) {
		const window_width = $(window).width();
		let order = 2;
		if (window_width < 1200) {
			order = 1;
		}
		let reader = new FileReader();
		let file = event.files[0];
		if(file) {
			reader.readAsDataURL(event.files[0]);
			reader.addEventListener('load', function() {
			    var res = reader.result;
			    let html_img = `<img src="${res}" class="ng-user-image">`;
			    $(`.ng-group-icon-user-${order}`).html(html_img);
			});
		} else {
			$(`.ng-group-icon-user-${order}`).html(old_html_img_[order]);
		}
	}
});