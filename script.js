var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+15732001519'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>5732001519</label></div> </a> <a href='mailto:csrikanthc8@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Chakilamsrikanth'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a href='https://www.linkedin.com/in/srikanthch086644/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Srikanth Resume.pdf</label></div><a href='assets/Srikanth Resume.pdf' download='Srikanth Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48651.695765891585!2d-74.66984245!3d40.3483133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e6c172d059f1%3A0x3fcd49934a13d6c2!2sPrinceton%2C%20NJ!5e0!3m2!1sen!2sus!4v1698120557140!5m2!1sen!2sus' class='map'></iframe></div><label class='add'><address>Princeton<br>New Jersey 08544 United States of America</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Heya 👋🏻,<br><br> This is <span class='bold'><a class='alink'> Srikanth Chakilam </a>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>To know more reply the Keyword such as: <span class='bold'>'Skills'</span> - know my Skillset<br><span class='bold'>'Resume'</span> - Download my Resume <br><span class='bold'>'Education'</span> - My Education <br><span class='bold'>'Address'</span> - My Location <br><span class='bold'>'Contact'</span> - Connect with Me <br><span class='bold'>'Projects'</span> - Projects worked on <br><span class='bold'>'Clear'</span> - To clear Conversation<br><span class='bold'>'About'</span> - To know about WhatsApp ChatBot </span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I'm a Frontend Developer and a Designer by nature and profession, therefore you'll find me where creative thought and art collide. I'm UI designer and a Frontend Developer, I adore designing compelling experiences for product users and informing a brand's visual identity before harnessing the power of digital platforms to further promote it. My focus is on designing intuitive interfaces that are not only visually appealing but also user-friendly. I believe in innovation and are constantly exploring new design trends and technologies to stay ahead of the curve.<br><br>I am Proficient in - <br><br><span class='bold'>Languages: </span> Html, CSS, JavaScript, TypeScript, Ruby on Rails.<br><span class='bold'>Middleware: </span>XML, APIs, REST API, SOAP.<br><span class='bold'>Cloud: </span>Amazon Web Services, Azure, Apache Server.<br><span class='bold'>Application Software: </span>Adobe Photoshop, Adobe Illustrator, Flash, Adobe InDesign, Adobe Creative suite, Adobe dimension, After Effect, Figma.<br><span class='bold'>Data: </span>Oracle, MySQL, MongoDB Java, Spring boot, Hibernate.<br><span class='bold'>Tools & Environment: </span>Jenkins, SonarQube, Git, WebLogic, Apache tomcat, VS Code, IntelliJ, Postman, SoapUI.<br><span class='bold'>Frameworks: </span>React.js, Angular.js, jQuery.<br><span class='bold'>Web Technologies: </span>Bootstrap, AJAX, JSP.<br><span class='bold'>3D Design: </span>Maya, Blender, SketchUp.");
            break;

        case "education":
            sendTextMessage("I have completed Masters in Applied Computer Science at<br><span class='bold'>Southeast Missouri State University</span> January 2019 to December 2020<br>GPA: 3.7/4.0<br><br>I have completed my Bacheloers in Computer Science at<br><span class='bold'>Jawaharlal Nehru Techological University</span> June 2014 to May 2018<br>GPA: 3.3/4.0 ");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("I'm passionate about creating outstanding digital experiences through UI/UX design and Frontend UI Development. I seek to merge aesthetic elegance with user-centric functionality, with an emphasis on building aesthetically appealing interfaces (UI) and improving user pleasure (UX). I design with empathy, leveraging a deep understanding of human behavior to ensure products are not just visually appealing but also intuitive and pleasurable to use. Let us connect and cooperate to develop meaningful digital interactions.<br><br>Here is my <br><br><span class='bold'>GitHub: </span>https://github.com/Chakilamsrikanth<br><br><span class='bold'>Portfolio: </span>https://chakilamsrikanth.github.io/<br><br><span class='bold'>LinkedIn: </span>https://www.linkedin.com/in/srikanthch086644/");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Chakilamsrikanth'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...<br>Send 'help' to know more");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
