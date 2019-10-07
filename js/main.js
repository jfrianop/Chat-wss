const ws = new WebSocket("wss://mir-chat.herokuapp.com");

ws.onopen = function () {
    alert("Hola, ¡Bienvenido al chat de Make it Real CAMP!")
}

ws.onmessage = function (msg) {
    var obj = JSON.parse(msg.data);
    $(".chat-messages ul").append('<li class="list-group-item message"><strong>'
        + obj.sender + ': </strong>' + obj.message + '</li>')
    $('.chat-messages').animate({ scrollTop: 9999 }, 'slow');
}

ws.onclose = function () {
    alert("Se ha cerrado la conexión");
}

$("input").on("keypress", function (e) {
    if (e.which == 13) {
        ws.send(JSON.stringify({ sender: "Juan Riaño", message: $(this).val() }));
        $(this).val("");
        $('.chat-messages').animate({ scrollTop: 9999 }, 'slow');
    }
});

$(".send-message").on("click", function () {
    ws.send(JSON.stringify({ sender: "Juan Riaño", message: $("input").val() }));
    $("input").val("");
    $('.chat-messages').animate({ scrollTop: 9999 }, 'slow');
})