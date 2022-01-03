function generateID(){
    var extra = '-xxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
    var id="INF-EXT-"+Date.now() +extra
    document.getElementById("gid").innerHTML=id;
}
generateID();


function generatePDF() {
    window.print()

   }