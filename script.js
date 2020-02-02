class song {
    title;
    author;
    releaseDate;
    howLong;
}

var songArray = [];

loadXMLDoc();

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "songs.xml", false);
    xmlhttp.send();
}

function myFunction(xml) {
    console.log("Run Function!!");
    var title, author, releaseDate, howLong, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    title = xmlDoc.getElementsByTagName("title");
    author = xmlDoc.getElementsByTagName("author");
    releaseDate = xmlDoc.getElementsByTagName("releaseDate");
    howLong = xmlDoc.getElementsByTagName("howLong");

    for (i = 0; i < title.length; i++) {
        songArray[i] = new song();
        songArray[i].title = title[i].childNodes[0].nodeValue;
        txt += "<option value=\"" + title[i].childNodes[0].nodeValue + "\">" + title[i].childNodes[0].nodeValue + "</option>";
    }

    for (i = 0; i < author.length; i++) {
        songArray[i].author = author[i].childNodes[0].nodeValue;
        songArray[i].releaseDate = releaseDate[i].childNodes[0].nodeValue;
        songArray[i].howLong = howLong[i].childNodes[0].nodeValue;

    }

    console.log(songArray);

    document.getElementById("demo").innerHTML = txt;
}

function getOption() {
    selectElement = document.querySelector('#demo');

    output = selectElement.value;

    document.querySelector('.output').textContent = output;

    for(var i = 0; i < songArray.length; i++) {
        if(songArray[i].title == output) {
            console.log("Value find!!");
            var output = "";
            output += "<tr><th>Title</th><th>Author</th><th>Release Date</th><th>How Long</th></tr><tr><td>" + songArray[i].title + "</td><td>" + songArray[i].author + "</td><td>" + songArray[i].releaseDate + "</td><td>" + songArray[i].howLong + "</td></tr>";
            document.getElementById("description").innerHTML = output;
            //document.querySelector('.description').textContent = output;
            return;
        }
    }
}