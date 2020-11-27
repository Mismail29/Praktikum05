function openChat() {
    document.getElementById('chatbox').style.display='block';
    $('.btn-chat').hide();
}
function closeChat() {
    document.getElementById('chatbox').style.display='none';
    $('.btn-chat').show();
}
function send() {
	var pesan    = document.getElementById("pesan").value;
	var content  = document.getElementById('chat').innerHTML;
	if (pesan != "" && content =="") {
		document.getElementById('chat').innerHTML = pesan;
		document.getElementById("pesan").value = "";
		focus();
	}
	else if (pesan != "") {
		document.getElementById('chat').innerHTML = content +"<br>"+ pesan;
		document.getElementById("pesan").value = "";
		focus();
	}
}
function focus(){
	var input    = document.getElementById("chat");
	input.focus();
}
function deleteChat(){
	document.getElementById("pesan").value = "";
	$('.btn-chat').hide()
}
document.getElementById('message').addEventListener("keyup", function(event){
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("btn").click();
	}
})

