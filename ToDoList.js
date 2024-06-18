function newElement() {
    var li = document.createElement("li");
    
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "taskCheckbox";
    
    var inputValue = document.getElementById("taskName").value;
    var t = document.createTextNode(inputValue);
    
    li.appendChild(checkbox); // Append the checkbox to the li element first
    li.appendChild(t); // Then append the task name text

    if (inputValue === '') {
        alert("You must enter a task!");
    } else {
        document.getElementById("tasks").appendChild(li);
    }
    
    document.getElementById("taskName").value = "";

    var span = document.createElement("SPAN");
    var txt1 = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt1);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    var hr = document.createElement("hr");
    li.appendChild(hr);
}

var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}