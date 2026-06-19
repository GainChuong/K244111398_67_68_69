function load_titles_fromxml(dataset_path) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");

            var tag_employees = xmlDoc.getElementsByTagName("employee");
            var titles = [];
            for (var i = 0; i < tag_employees.length; i++) {
                var title = tag_employees[i].getAttribute("title");
                if (titles.indexOf(title) === -1) {
                    titles.push(title);
                }
            }

            var dropdown = document.getElementById("titleDropdown");
            for (var i = 0; i < titles.length; i++) {
                var option = document.createElement("option");
                option.value = titles[i];
                option.text = titles[i];
                dropdown.appendChild(option);
            }

            // Lưu xmlDoc vào biến toàn cục để dùng khi lọc
            window._xmlDoc = xmlDoc;
        }
    }
}

function filter_by_title() {
    var dropdown = document.getElementById("titleDropdown");
    var selectedTitle = dropdown.value;
    var bodyresults = document.getElementById("bodyresults");
    bodyresults.innerHTML = "";

    if (!window._xmlDoc || selectedTitle === "") return;

    var tag_employees = window._xmlDoc.getElementsByTagName("employee");
    for (var i = 0; i < tag_employees.length; i++) {
        if (tag_employees[i].getAttribute("title") === selectedTitle) {
            var value_id    = tag_employees[i].getAttribute("id");
            var value_name  = tag_employees[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            var value_phone = tag_employees[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue;

            var tr       = document.createElement("tr");
            var td_id    = document.createElement("td");
            var td_name  = document.createElement("td");
            var td_phone = document.createElement("td");

            td_id.innerHTML    = value_id;
            td_name.innerHTML  = value_name;
            td_phone.innerHTML = value_phone;

            tr.appendChild(td_id);
            tr.appendChild(td_name);
            tr.appendChild(td_phone);
            bodyresults.appendChild(tr);
        }
    }
}
