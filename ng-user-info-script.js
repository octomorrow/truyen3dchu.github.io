$(function() {
    getAcceptedExtension = function(element) {
		$('#inputFile1').attr('accept', '.jpg, .png');
		$('#inputFile1').show();
		$('#inputFile1').focus();
		$('#inputFile1').click();
		$('#inputFile1').hide();
	}
});