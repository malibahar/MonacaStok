function addTodoPicture() {
    navigator.camera.getPicture(addTodo, function() {
        alert("Failed to get camera.");
    }, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        targetWidth : 100,
        targetHeight : 100
    });
}
function addTodo(camera_url) {
    var title = $("#todo-title").val();
    var body = $("#todo-body").val();
    var img_tag = "";
    alert(camera_url);
    if (camera_url) {
        img_tag = "<img src='" + camera_url + "'>";
    }
    $.mobile.changePage($("#list-page"));
    $("#todo-list").append("<li id='test' onclick='silmenu()'>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>")
    $("#todo-list").listview('refresh');
};
function sil() {
    $("#test").remove();
	$.mobile.changePage($("#list-page"));
};
function silmenu() {
    $.mobile.changePage($("#menu"));
};