function load_CD_detail(dataset_path, bodyresults)
{
    bodyresults.innerHTML = "";
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true);
    xhr.send();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
            var tag_CD = xmlDoc.getElementsByTagName("CD")
            
            for (i = 0; i < tag_CD.length; i++)
            {
                value_tag_artist = tag_CD[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue
                value_tag_title = tag_CD[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
                
                tr=document.createElement("tr")
                tr.innerHTML="<td>" + value_tag_artist + "</td><td>" + value_tag_title + "</td>"
                bodyresults.appendChild(tr)
            }
        }
    }
}