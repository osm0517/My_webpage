const video_one_src = document.getElementById('video1').src;
const video = document.getElementById('cookexp');


function openTextFile() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };
    input.click();
}
function processFile(file) {
    var reader = new FileReader();
    reader.onload = function () {
        cookexp.innerText = reader.result;
    };
    reader.readAsText(file, /* optional */ "euc-kr");
}

video.addEventListener('click',function(){
    alert(1)
});