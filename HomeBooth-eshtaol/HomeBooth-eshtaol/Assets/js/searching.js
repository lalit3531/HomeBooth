var firstPage = 1;
var lastPage = 5;
var multivol = false;
			
var indexingFinished = false;
var currentPage = firstPage;
var manualpages = [];
var content = [];
			
function indexit(){
    if(currentPage <= lastPage){
        document.getElementById("").innerHTML = "Searching...";
        document.getElementById("").src = currentPage + ".html";
        document.getElementById("").onload = function(){
            var dW = document.getElementById("").contentWindow;
            var dD = document.getElementById("").contentDocument;
            var dDContent = "";
            for(var s = 0; s < dD.getElementsByTagName("").length; s++){
                var tempString = dD.getElementsByTagName("")[s].innerHTML;
                dDContent += tempString + " ";
            }
            content.push({ address : dW.location.href, content : dDContent.toLowerCase() });
            currentPage++;
            indexit();
        };
    } else setTimeout(function(){ 
        document.getElementById("").innerHTML = JSON.stringify(content); 
        indexingFinished = true;
    }, 100)
}
            
function search(){
    document.getElementById("").innerHTML = "Searching..."
    var sinput = document.getElementById("").value;
    if(content.length > 0){
        var tempContent = "";
        var resultCount = 0;
        for(var i = 0; i < content.length; i ++){
            if(content[i].content.indexOf(sinput) > -1){
                tempContent += "Result found on: <a href='"+content[i].address.split("/").pop()+"'>Page " + content[i].address.split("/").pop().split(".")[0] + "</a><br />";
                resultCount += 1;
            }
        }
        if(resultCount == 0) tempContent = "No result found.";
        document.getElementById("").innerHTML = tempContent;
        
        //reset indexer
        content = [];
        currentPage = firstPage;
    } else document.getElementById("").innerHTML = "No index data."
}			
			
function indexAndSearch(){
    indexit();
    var tempTimer = setInterval(function(){
        if(indexingFinished){
            search();
            indexingFinished = false;
            clearInterval(tempTimer);
        }
    }, 100)
}						