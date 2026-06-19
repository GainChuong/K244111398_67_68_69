function load_student_fromxml(dataset_path, bodystudents)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET", dataset_path, true);
    xhr.send();
    xhr.onreadystatechange=function()
{
	if (xhr.readyState==4 && xhr.status==200)
	{

        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
        tag_students=xmlDoc.getElementsByTagName("student")
         for (i = 0; i < tag_students.length; i++)
{
        value_tag_id = tag_students[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
        value_tag_name = tag_students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
        value_tag_birthday = tag_students[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue
        value_tag_gender = tag_students[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue
        tr=document.createElement("tr")
        td_id=document.createElement("td")
        td_id.innerHTML=value_tag_id
        td_name=document.createElement("td")
        td_name.innerHTML=value_tag_name
        td_birthday=document.createElement("td")
        td_birthday.innerHTML=value_tag_birthday
        td_gender=document.createElement("td")
        td_gender.innerHTML=value_tag_gender
        tr.appendChild(td_id)
        tr.appendChild(td_name)
        tr.appendChild(td_birthday)
        tr.appendChild(td_gender)
        bodystudents.appendChild(tr)
}}
	else
	{
		//handling when data can't be loaded
	}
}
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tblstudents");
    switching = true;
    dir = "asc";

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
function load_student_detail(dataset_path, bodyresults, studentId)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true);
    xhr.send();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
            var tag_students = xmlDoc.getElementsByTagName("student")
            
            for (i = 0; i < tag_students.length; i++)
            {
                var current_id = tag_students[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
                
                if (current_id == studentId)
                {
                    value_tag_id = current_id
                    value_tag_name = tag_students[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
                    value_tag_birthday = tag_students[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue
                    value_tag_gender = tag_students[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue
                    
                    tr_id=document.createElement("tr")
                    tr_id.innerHTML="<td>Student ID</td><td>" + value_tag_id + "</td>"
                    
                    tr_name=document.createElement("tr")
                    tr_name.innerHTML="<td>Student Name</td><td>" + value_tag_name + "</td>"
                    
                    tr_birthday=document.createElement("tr")
                    tr_birthday.innerHTML="<td>Birthday</td><td>" + value_tag_birthday + "</td>"
                    
                    tr_gender=document.createElement("tr")
                    tr_gender.innerHTML="<td>Gender</td><td>" + value_tag_gender + "</td>"
                    
                    bodyresults.appendChild(tr_id)
                    bodyresults.appendChild(tr_name)
                    bodyresults.appendChild(tr_birthday)
                    bodyresults.appendChild(tr_gender)
                    break
                }
            }
        }
    }
}