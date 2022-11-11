// for local/external testing slugs need to be prepended with a url. learn or asp.
const platformurl = 'https://service.arrival.co/rigel/';
const componentstyle = 'slug/be-000001/binary-content-entry/be-000001/bce-000521';

// Temp solution for dialog elent lack of suport in safari and firefox. May add polyfill
var browsercheck=window.navigator.userAgent;
if(browsercheck.indexOf('Mozilla')!=-1){document.getElementById('browser-no').style.display='flex'};
if(browsercheck.indexOf('Safari')!=-1){document.getElementById('browser-no').style.display='flex'};
if(browsercheck.indexOf('Chrome')!=-1){document.getElementById('browser-no').style.display='none'};

// Autosave to sessionstorage to prevent losing data o accidental refresh
let pbeditor = document.getElementById("page-builder");
// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
// Restore the contents of the text field
pbeditor.innerHTML = sessionStorage.getItem("autosave");
}

// Experimental - save every 10 seconds. May revert to when component added and keyup.
function autoSave(){
setInterval(function() {
// And save the results into the session storage object
sessionStorage.setItem("autosave", pbeditor.innerHTML);
}, 10000)};

//Rotate menu chevrons
setInterval (function rotateChev(){
document.getElementById('chev1').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection1').getAttribute('aria-expanded') === "true") {
document.getElementById('chev1').style.transform = 'rotate(180deg)';
};
document.getElementById('chev2').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection2').getAttribute('aria-expanded') === "true") {
document.getElementById('chev2').style.transform = 'rotate(180deg)';
};
document.getElementById('chev3').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection3').getAttribute('aria-expanded') === "true") {
document.getElementById('chev3').style.transform = 'rotate(180deg)';
};
document.getElementById('chev4').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection4').getAttribute('aria-expanded') === "true") {
document.getElementById('chev4').style.transform = 'rotate(180deg)';
};
document.getElementById('chev5').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection5').getAttribute('aria-expanded') === "true") {
document.getElementById('chev5').style.transform = 'rotate(180deg)';
};
// document.getElementById('chev6').style.transform = 'rotate(0deg)';
//if (document.getElementById('menusection6').getAttribute('aria-expanded') === "true") {
//document.getElementById('chev6').style.transform = 'rotate(180deg)';
//};
document.getElementById('chev7').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection7').getAttribute('aria-expanded') === "true") {
document.getElementById('chev7').style.transform = 'rotate(180deg)';
};
;},100)

//Clear menu searchTerm
function clearSearch(){
input = document.getElementById("accordion_search_bar");
input.value = "";
input.focus();
};

// image update
function changeImage(){
let urlbox = document.activeElement.value;
if (urlbox.startsWith("slug",0)){
document.activeElement.parentNode.nextElementSibling.src = platformurl + urlbox;
}
else{document.activeElement.parentNode.nextElementSibling.src = urlbox;}
document.activeElement.style.display = 'none';
document.activeElement.value = '';
};

// video update
function changeVideo(){
let urlbox = document.activeElement.value;
if (urlbox.startsWith("slug",0)){
document.activeElement.parentNode.parentNode.nextElementSibling.src = platformurl + urlbox;
}
else{document.activeElement.parentNode.parentNode.nextElementSibling.src = urlbox;}
document.activeElement.parentNode.style.display = 'none';
document.activeElement.value = '';
};

// link update
function changeLink(){
let urlbox = document.activeElement.value;
if (urlbox.startsWith("slug",0)){
document.activeElement.parentNode.nextElementSibling.href = platformurl + urlbox;
}
else{document.activeElement.parentNode.nextElementSibling.href = urlbox;}
document.activeElement.style.display = 'none';
document.activeElement.value = '';
};

//function to download a .txt version of the markup
(function () {
var textFile = null,
makeTextFile = function (text) {
var data = new Blob([text], {type: 'text/plain'});
// If we are replacing a previously generated file we need to
// manually revoke the object URL to avoid memory leaks.
if (textFile !== null) {
window.URL.revokeObjectURL(textFile);
}
textFile = window.URL.createObjectURL(data);
return textFile;
};
//button and markup textarea
var create = document.getElementById('generate-txt'),
textbox = document.getElementById('generatedmarkup');
//add click listener to download button
create.addEventListener('click', function () {
var link = document.getElementById('downloadlink');
link.href = makeTextFile(generatedmarkup.value);
link.style.display = 'block';
create.style.display = 'none';
}, false);
})();


//function to update html preview for TESTING only - remove comments for testing
//setInterval(function() {
//var html = document.getElementById('page-builder-html');
//var content = document.getElementById('page-builder').innerHTML;
 //html.value = content; {
//  }
//}, 1000);

//function to import existing pagebuilder markup
function editIt(){
var pasted = document.getElementById('page-builder-html'); /* Textarea where markup is pasted */
var pbmarkup = document.getElementById('pb-markup'); /* Div to temporary store page builder markup */
var content = document.getElementById('page-builder'); /* Page Builder Content */
pbmarkup.innerHTML = pasted.value.replaceAll('slug/', platformurl + 'slug/'); /* Update temporary Div with pasted markup */
pbmarkup.firstElementChild.remove(); /* Remove Css link from markup */
var contenteditable = pbmarkup.querySelectorAll('[contenteditable="false"]'); /* Change contenteditable to true */
for (var i=0; i < contenteditable.length; i++) {
contenteditable[i].setAttribute('contenteditable','true');
};
var mediacontrols = pbmarkup.querySelectorAll('[data-controls="hasmediacontrols"]'); /* Add Media controls */
for (var i=0; i < mediacontrols.length; i++) {
mediacontrols[i].insertAdjacentHTML('beforebegin', controlsmedia);
};
var mediavideocontrols = pbmarkup.querySelectorAll('[data-controls="hasmediavideocontrols"]'); /* Add Media Video controls */
for (var i=0; i < mediavideocontrols.length; i++) {
mediavideocontrols[i].insertAdjacentHTML('beforebegin', controlsmediavideo);
};
var linkcontrols = pbmarkup.querySelectorAll('[data-controls="haslinkcontrols"]'); /* Add Link url controls */
for (var i=0; i < linkcontrols.length; i++) {
linkcontrols[i].insertAdjacentHTML('beforebegin', controlslink);
};
var table2colrowcontrols = pbmarkup.querySelectorAll('[data-controls="hastable2colrowcontrols"]'); /* Add Table row controls */
for (var i=0; i < table2colrowcontrols.length; i++) {
table2colrowcontrols[i].insertAdjacentHTML('beforeend', table2colrowadd);
table2colrowcontrols[i].insertAdjacentHTML('afterend', table2colrowremove);
};
var table3colrowcontrols = pbmarkup.querySelectorAll('[data-controls="hastable3colrowcontrols"]'); /* Add Table row controls */
for (var i=0; i < table3colrowcontrols.length; i++) {
table3colrowcontrols[i].insertAdjacentHTML('beforeend', table3colrowadd);
table3colrowcontrols[i].insertAdjacentHTML('afterend', table3colrowremove);
};
var answercontrols = pbmarkup.querySelectorAll('[data-question="hasanswercontrols"]'); /* Add edit class for cursor:initial */
for (var i=0; i < answercontrols.length; i++) {
answercontrols[i].insertAdjacentHTML('afterend', questionanswercontrols);
};
var answerfeedbackcontrols = pbmarkup.querySelectorAll('[data-question="hasanswerfeedbackcontrols"]'); /* Add edit class for cursor:initial */
for (var i=0; i < answerfeedbackcontrols.length; i++) {
answerfeedbackcontrols[i].insertAdjacentHTML('afterend', questionfeedbackcontrols);
};
var answerselect = pbmarkup.querySelectorAll('.answer'); /* Remove onclick from answers */
for (var i=0; i < answerselect.length; i++) {
answerselect[i].setAttribute("onclick","")
};
var feedbackselect = pbmarkup.querySelectorAll('.answerfeedback'); /* Remove onclick from feedback answers */
for (var i=0; i < feedbackselect.length; i++) {
feedbackselect[i].setAttribute("onclick","")
};
var defaultcontrols = pbmarkup.querySelectorAll('[data-controls="hasdefaultcontrols"]'); /* Add controls */
var controldiv = document.createElement("div");
for (var i=0; i < defaultcontrols.length; i++) {
defaultcontrols[i].prepend(controldiv);
controldiv.outerHTML = controls;
};
var pbcontent = pbmarkup.firstElementChild; /* First element will be "#page-builder" after css link removed */
content.innerHTML = pbcontent.innerHTML; /* Get content inside "#page-builder" element and update page builder content*/
pbmarkup.innerHTML = ''; /* Clear temporary div */
pasted.value = ''; /* Clear textarea */
};

//function to clear import text
function editItErase() {
document.getElementById("page-builder-html").value = "";
}
//left menu show/hide accordian function
function componentMenu(id) {
var x = document.getElementById(id);
if (x.className.indexOf("w3-hide") == 0) {
x.className += " w3-hide";
} else {
x.className = x.className.replace(" w3-hide", "w3-show");
}
}

//function to move the div component block up or down the DOM
function moveUp(element) {
if(element.parentNode.parentNode)
element.parentNode.parentNode.insertBefore(element.parentNode, element.parentNode.previousElementSibling).scrollIntoView({behavior: 'smooth'});
}
function moveDown(element) {
if(element.parentNode.parentNode)
element.parentNode.parentNode.insertBefore(element.parentNode.nextElementSibling, element.parentNode).scrollIntoView({behavior: 'smooth'});
}
document.querySelector('#page-builder').addEventListener('click', function(e) {
if(e.target.classList.contains('down')) moveDown(e.target.parentNode);
else if(e.target.classList.contains('up')) moveUp(e.target.parentNode);
});


//function to move the answers up or down in question component
function moveUpAnswer(element) {
if(element.parentNode.parentNode)
element.parentNode.parentNode.insertBefore(element.parentNode, element.parentNode.previousElementSibling);
}
function moveDownAnswer(element) {
if(element.parentNode.parentNode)
element.parentNode.parentNode.insertBefore(element.parentNode.nextElementSibling, element.parentNode);
}
document.querySelector('#page-builder').addEventListener('click', function(e) {
if(e.target.className === 'down-answer') moveDownAnswer(e.target.parentNode.parentNode);
else if(e.target.className === 'up-answer') moveUpAnswer(e.target.parentNode.parentNode);
});

// Remove rich text styling when text is pasted
// Remove rich text styling when text is pasted
const editorEle = document.getElementById('page-builder');
// Handle the `paste` event
editorEle.addEventListener('paste', function (e) {
// Prevent the default action
e.preventDefault();
// Get the copied text from the clipboard
const text = e.clipboardData
? (e.originalEvent || e).clipboardData.getData('text/plain')
: // For IE
window.clipboardData
? window.clipboardData.getData('Text')
: '';

if (document.queryCommandSupported('insertHTML')) {
        document.execCommand('insertHTML', false, text);
} else {
// Insert text at the current position of caret
const range = document.getSelection().getRangeAt(0);
range.deleteContents();

const textNode = document.createTextNode(text);
range.insertNode(textNode);
range.selectNodeContents(textNode);
range.collapse(false);

const selection = window.getSelection();
selection.removeAllRanges();
selection.addRange(range);
}
});

// Prevent div being entered when pressing return in paragraph
document.addEventListener('keydown', event => {
const element = document.activeElement.tagName;
if (element === 'P' && event.key === 'Enter') {
document.execCommand('insertLineBreak');
event.preventDefault();
}
})
// Prevent div being entered when pressing return in H1
document.addEventListener('keydown', event => {
const element = document.activeElement.tagName;
if (element === 'H1' && event.key === 'Enter') {
document.execCommand('insertLineBreak');
event.preventDefault();
}
})
// Prevent div being entered when pressing return in H1
document.addEventListener('keydown', event => {
const element = document.activeElement.tagName;
if (element === 'H2' && event.key === 'Enter') {
document.execCommand('insertLineBreak');
event.preventDefault();
}
})
// Prevent div being entered when pressing return in H1
document.addEventListener('keydown', event => {
const element = document.activeElement.tagName;
if (element === 'H3' && event.key === 'Enter') {
document.execCommand('insertLineBreak');
event.preventDefault();
}
})


// Save div content to LocalStorage temporarily, load from localStorage and clearLocalStorage
var content = document.getElementById('content'),
clearButton = document.getElementById('clear');
editor = document.getElementById('page-builder');

var localStore = {
saveLocalStorage: function() {
localStorage.setItem('item', content.innerHTML);
},
loadLocalStorage: function() {
var contentStored = localStorage.getItem('item');
if ( contentStored ) {
content.innerHTML = contentStored;
}
},
clearLocalStorage: function() {
localStorage.removeItem('item');
}
};
clearButton.addEventListener('click', function() {
editor.innerHTML = "";
document.getElementById("page-title-input").value = "";
sessionStorage.removeItem('autosave');
}, false);


// Text styling execCommand
/* To replace execCommand eventually function onBoldClick() {
    const strongElement = document.createElement("strong");
    const userSelection = window.getSelection();
    const selectedTextRange = userSelection.getRangeAt(0);
    selectedTextRange.surroundContents(strongElement);
}*/
function onBoldClick() {
document.execCommand( 'bold', false, null );
}
function onItalicClick() {
document.execCommand( 'italic', false, null );
}
function onUnderlineClick() {
document.execCommand( 'underline', false, null );
}
function onUnderlineClick() {
document.execCommand( 'underline', false, null );
}
function onH1Click() {
document.execCommand( 'formatBlock', false, 'h1' );
}
function onH2Click() {
document.execCommand( 'formatBlock', false, 'h2' );
}
function onH3Click() {
document.execCommand( 'formatBlock', false, 'h3' );
}
function onBodyClick() {
document.execCommand( 'formatBlock', false, 'p' );
}

/* Generate Page Builder Markup */
var content = document.getElementById('page-builder'); /* Pagebuilder source content */
var pbmarkup = document.getElementById('pb-markup'); /* Div to temporary store page builder markup */
var markup = document.getElementById('generatedmarkup'); /* Textarea to put markup into and copy from */
var style = document.createElement("link"); /* Create link element to link to css */
var pagetitle = document.getElementById('page-title-input');

document.getElementById('generate').addEventListener('click', (ev)=>{ /* Get the 'generate' button and add click event */
pbmarkup.innerHTML = content.outerHTML; /* Get the page builder content and insert it into a temporary div */

var defaultcontrols = pbmarkup.querySelectorAll('[data-controls="default"]'); /* Remove controls */
for (var i=0; i < defaultcontrols.length; i++) {
defaultcontrols[i].remove()
};
var mediacontrols = pbmarkup.querySelectorAll('[data-controls="media"]'); /* Remove media url controls */
for (var i=0; i < mediacontrols.length; i++) {
mediacontrols[i].remove()
};
var mediacontrolsvideo = pbmarkup.querySelectorAll('[data-controls="mediavideo"]'); /* Remove video controls */
for (var i=0; i < mediacontrolsvideo.length; i++) {
mediacontrolsvideo[i].remove()
};
var linkcontrols = pbmarkup.querySelectorAll('[data-controls="link"]'); /* Remove link controls */
for (var i=0; i < linkcontrols.length; i++) {
linkcontrols[i].remove()
};
var tablerowcontrols = pbmarkup.querySelectorAll('[data-controls="tablerowcontrols"]'); /* Remove table row controls */
for (var i=0; i < tablerowcontrols.length; i++) {
tablerowcontrols[i].remove()
};
var answercontrols = pbmarkup.querySelectorAll('[data-question="isanswercontrols"]'); /* Remove answer controls */
for (var i=0; i < answercontrols.length; i++) {
answercontrols[i].remove()
};
var feedbackcontrols = pbmarkup.querySelectorAll('[data-question="isanswerfeedbackcontrols"]'); /* Remove answer feedback controls */
for (var i=0; i < feedbackcontrols.length; i++) {
feedbackcontrols[i].remove()
};
var answerselect = pbmarkup.querySelectorAll('.answer'); /* Add onclick to answers */
for (var i=0; i < answerselect.length; i++) {
answerselect[i].style.display = 'flex'; /* Set style to flex in case user was on feedback when generating  */
answerselect[i].setAttribute("onclick","this.style.display = 'none';this.nextElementSibling.style.display = 'flex'")
};
var feedbackselect = pbmarkup.querySelectorAll('.answerfeedback'); /* Add onclick to feedback answers */
for (var i=0; i < feedbackselect.length; i++) {
feedbackselect[i].style.display = 'none'; /* Set style to none in case user was on feedback when generating  */
feedbackselect[i].setAttribute("onclick","this.style.display = 'none';this.previousElementSibling.style.display = 'flex'")
};
var contenteditable = pbmarkup.querySelectorAll('[contenteditable="true"]'); /* Change contenteditable to false */
for (var i=0; i < contenteditable.length; i++) {
contenteditable[i].setAttribute('contenteditable','false');
};
var block = pbmarkup.querySelectorAll('.component-block'); /* Find component blocks */
var singlediv = block.length;
if(singlediv < '2'){block[0].style.marginBottom = '0px'}; /* If markup only has 1 component, remove bottom component block margin */
style.type = "text/css"; /* Css declaration */
style.rel = "stylesheet"; /* Css declaration */
style.href = componentstyle; /* Css url */
pbmarkup.prepend(style); /* Add Css link to temporary markup */
markup.value = pbmarkup.innerHTML.replace(/^\s*[\r\n]/gm, "").replaceAll('><', ">\n<").replaceAll('https://service.arrival.co/rigel/',''); /* Update textarea with content and remove blank lines where elements have been removed */
markup.select(); /* select the text inside the text area */
markup.setSelectionRange(0, 99999); /* For mobile devices */
dialog.showModal();document.execCommand('copy'); /* Copy the text inside the text area */
pbmarkup.innerHTML = ''; /* Clear Div */
});


document.getElementById('save').addEventListener('click', (ev)=>{ /* Get the 'generate' button and add click event */
if(pagetitle.value == "")
{
alert("Page must have a Title");
return false;
}
pbmarkup.innerHTML = content.outerHTML; /* Get the page builder content and insert it into a temporary div */

var defaultcontrols = pbmarkup.querySelectorAll('[data-controls="default"]'); /* Remove controls */
for (var i=0; i < defaultcontrols.length; i++) {
defaultcontrols[i].remove()
};
var mediacontrols = pbmarkup.querySelectorAll('[data-controls="media"]'); /* Remove media url controls */
for (var i=0; i < mediacontrols.length; i++) {
mediacontrols[i].remove()
};
var mediacontrolsvideo = pbmarkup.querySelectorAll('[data-controls="mediavideo"]'); /* Remove video controls */
for (var i=0; i < mediacontrolsvideo.length; i++) {
mediacontrolsvideo[i].remove()
};
var linkcontrols = pbmarkup.querySelectorAll('[data-controls="link"]'); /* Remove link controls */
for (var i=0; i < linkcontrols.length; i++) {
linkcontrols[i].remove()
};
var tablerowcontrols = pbmarkup.querySelectorAll('[data-controls="tablerowcontrols"]'); /* Remove table row controls */
for (var i=0; i < tablerowcontrols.length; i++) {
tablerowcontrols[i].remove()
};
var answercontrols = pbmarkup.querySelectorAll('[data-question="isanswercontrols"]'); /* Remove answer controls */
for (var i=0; i < answercontrols.length; i++) {
answercontrols[i].remove()
};
var feedbackcontrols = pbmarkup.querySelectorAll('[data-question="isanswerfeedbackcontrols"]'); /* Remove answer feedback controls */
for (var i=0; i < feedbackcontrols.length; i++) {
feedbackcontrols[i].remove()
};
var answerselect = pbmarkup.querySelectorAll('.answer'); /* Add onclick to answers */
for (var i=0; i < answerselect.length; i++) {
answerselect[i].style.display = 'flex'; /* Set style to flex in case user was on feedback when generating  */
answerselect[i].setAttribute("onclick","this.style.display = 'none';this.nextElementSibling.style.display = 'flex'")
};
var feedbackselect = pbmarkup.querySelectorAll('.answerfeedback'); /* Add onclick to feedback answers */
for (var i=0; i < feedbackselect.length; i++) {
feedbackselect[i].style.display = 'none'; /* Set style to none in case user was on feedback when generating  */
feedbackselect[i].setAttribute("onclick","this.style.display = 'none';this.previousElementSibling.style.display = 'flex'")
};
var contenteditable = pbmarkup.querySelectorAll('[contenteditable="true"]'); /* Change contenteditable to false */
for (var i=0; i < contenteditable.length; i++) {
contenteditable[i].setAttribute('contenteditable','false');
};
var block = pbmarkup.querySelectorAll('.component-block'); /* Find component blocks */
var singlediv = block.length;
if(singlediv < '2'){block[0].style.marginBottom = '0px'}; /* If markup only has 1 component, remove bottom component block margin */
style.type = "text/css"; /* Css declaration */
style.rel = "stylesheet"; /* Css declaration */
style.href = componentstyle; /* Css url */
pbmarkup.prepend(style); /* Add Css link to temporary markup */
markup.value = pbmarkup.innerHTML.replace(/^\s*[\r\n]/gm, "").replaceAll('><', ">\n<").replaceAll('https://service.arrival.co/rigel/',''); /* Update textarea with content and remove blank lines where elements have been removed */
const headers_ = {
     'Authorization': 'Bearer keyRMAjziDIJHyhQ7',
     'Content-Type': 'application/json'
};
axios.post('https://api.airtable.com/v0/appHLPXbQM0wap2K8/Page-Builder%20Generated%20Markup',
{
   "fields": {
    "PageTitle": pagetitle.value,
    "Markup": markup.value
}
}, {headers: headers_}
);
alert("Page has been saved! Use Load button to retrieve at a later date.");
pbmarkup.innerHTML = ''; /* Clear Div */
markup.value = '';
});

//function to list existing pagebuilder markup from Airtable
function loadFromDb(){
dialog3.showModal();
const headers_ = {
'Authorization': 'Bearer keyRMAjziDIJHyhQ7',
'Content-Type': 'application/json'
};
axios.get('https://api.airtable.com/v0/appHLPXbQM0wap2K8/page-builder%20generated%20markup?fields%5B%5D=PageTitle&fields%5B%5D=Markup',
{headers: headers_}
)
.then(function (response) {
    // hideLoading();
    if (response.status == 200) {
        // Axios parsed response already
        // const data = JSON.parse(response.data);
        console.log(response.data.records);
        var tableContent = document.querySelector('#database-markup > tbody');
        var fielddata = response.data.records;
        for (var i=0; i < fielddata.length; i++) {
        console.log(fielddata[i].fields.PageTitle);
        let created = fielddata[i].createdTime;
        let title = fielddata[i].fields.PageTitle;
        let markup = fielddata[i].fields.Markup;
        const row = document.createElement('tr');
        tableContent.appendChild(row);
        const timecell = document.createElement('td');
        const myDate = fielddata[i].createdTime;
        const time = new Date(myDate).toLocaleString('en-GB',
                 {dateStyle: 'medium', timeStyle: 'short', hour12: false, timeZone: 'UTC' });
        timecell.innerText = time;
        const cell = document.createElement('td');
        function randstr(prefix){
        return Math.random().toString(36).replace('0.',prefix || '');
        }
        let cell_id = randstr('cell_');
        cell.setAttribute('onclick','importIt(this.id)');
        cell.setAttribute('id',cell_id);
        cell.classList.add('row-select');
        const cell2 = document.createElement('td');
        cell2.classList.add('no-display');
        cell.innerText = title;
        cell2.innerHTML = markup;
        row.appendChild(timecell);
        row.appendChild(cell);
        row.appendChild(cell2);
        console.log(fielddata[i].fields.Markup);
        };
    }
});
}

//function to import existing pagebuilder markup from Airtable
function importIt(clicked_id){
let record = document.getElementById(clicked_id).nextElementSibling;/* Tablecell where markup is */
let recordmarkup = record.innerHTML;
var pbmarkup = document.getElementById('pb-markup'); /* Div to temporary store page builder markup */
var content = document.getElementById('page-builder'); /* Page Builder Content */
pbmarkup.innerHTML = recordmarkup.replaceAll('slug/', platformurl + 'slug/'); /* Update temporary Div with pasted markup */
pbmarkup.firstElementChild.remove(); /* Remove Css link from markup */
var contenteditable = pbmarkup.querySelectorAll('[contenteditable="false"]'); /* Change contenteditable to true */
for (var i=0; i < contenteditable.length; i++) {
contenteditable[i].setAttribute('contenteditable','true');
};
var mediacontrols = pbmarkup.querySelectorAll('[data-controls="hasmediacontrols"]'); /* Add Media controls */
for (var i=0; i < mediacontrols.length; i++) {
mediacontrols[i].insertAdjacentHTML('beforebegin', controlsmedia);
};
var mediavideocontrols = pbmarkup.querySelectorAll('[data-controls="hasmediavideocontrols"]'); /* Add Media Video controls */
for (var i=0; i < mediavideocontrols.length; i++) {
mediavideocontrols[i].insertAdjacentHTML('beforebegin', controlsmediavideo);
};
var linkcontrols = pbmarkup.querySelectorAll('[data-controls="haslinkcontrols"]'); /* Add Link url controls */
for (var i=0; i < linkcontrols.length; i++) {
linkcontrols[i].insertAdjacentHTML('beforebegin', controlslink);
};
var table2colrowcontrols = pbmarkup.querySelectorAll('[data-controls="hastable2colrowcontrols"]'); /* Add Table row controls */
for (var i=0; i < table2colrowcontrols.length; i++) {
table2colrowcontrols[i].insertAdjacentHTML('beforeend', table2colrowadd);
table2colrowcontrols[i].insertAdjacentHTML('afterend', table2colrowremove);
};
var table3colrowcontrols = pbmarkup.querySelectorAll('[data-controls="hastable3colrowcontrols"]'); /* Add Table row controls */
for (var i=0; i < table3colrowcontrols.length; i++) {
table3colrowcontrols[i].insertAdjacentHTML('beforeend', table3colrowadd);
table3colrowcontrols[i].insertAdjacentHTML('afterend', table3colrowremove);
};
var answercontrols = pbmarkup.querySelectorAll('[data-question="hasanswercontrols"]'); /* Add edit class for cursor:initial */
for (var i=0; i < answercontrols.length; i++) {
answercontrols[i].insertAdjacentHTML('afterend', questionanswercontrols);
};
var answerfeedbackcontrols = pbmarkup.querySelectorAll('[data-question="hasanswerfeedbackcontrols"]'); /* Add edit class for cursor:initial */
for (var i=0; i < answerfeedbackcontrols.length; i++) {
answerfeedbackcontrols[i].insertAdjacentHTML('afterend', questionfeedbackcontrols);
};
var answerselect = pbmarkup.querySelectorAll('.answer'); /* Remove onclick from answers */
for (var i=0; i < answerselect.length; i++) {
answerselect[i].setAttribute("onclick","")
};
var feedbackselect = pbmarkup.querySelectorAll('.answerfeedback'); /* Remove onclick from feedback answers */
for (var i=0; i < feedbackselect.length; i++) {
feedbackselect[i].setAttribute("onclick","")
};
var defaultcontrols = pbmarkup.querySelectorAll('[data-controls="hasdefaultcontrols"]'); /* Add controls */
var controldiv = document.createElement("div");
for (var i=0; i < defaultcontrols.length; i++) {
defaultcontrols[i].prepend(controldiv);
controldiv.outerHTML = controls;
};
var pbcontent = pbmarkup.firstElementChild; /* First element will be "#page-builder" after css link removed */
content.innerHTML = pbcontent.innerHTML; /* Get content inside "#page-builder" element and update page builder content*/
pbmarkup.innerHTML = ''; /* Clear temporary div */
};

// left menu searchTerm
(function(){
var searchTerm, panelContainerId;
// Create a new contains that is case insensitive
$.expr[':'].containsCaseInsensitive = function (n, i, m) {
return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

$('#accordion_search_bar').on('change keyup paste click focus', function () {
searchTerm = $(this).val();
$('#accordion > .panel').each(function () {
panelContainerId = '#' + $(this).attr('id');
$(panelContainerId + ':not(:containsCaseInsensitive(' + searchTerm + '))').hide();
$(panelContainerId + ':containsCaseInsensitive(' + searchTerm + ')').show();
});
});
}());

/* Device Previewer */
const previewer  = document.getElementById('preview').contentWindow.document; /* iframe */
const previewercontainer  = document.getElementById('preview-container');

document.getElementById('preview-btn').addEventListener('click', (ev)=>{ /* Get the 'preview' button and add click event */
if(document.getElementById('page-builder').innerHTML == "")
{
alert("Nothing to preview yet :-). Try adding some content.");
return false;
}
const framestyle = '<style>body{margin:0;margin-bottom:20px;}body::-webkit-scrollbar{display: none;}body{-ms-overflow-style:none;}body{scrollbar-width:none;}</style>';
const lmsbutton = '<div class="lms-dummy-btn"></div>';
pbmarkup.innerHTML = content.outerHTML; /* Get the page builder content and insert it into a temporary div */

var defaultcontrols = pbmarkup.querySelectorAll('[data-controls="default"]'); /* Remove controls */
for (var i=0; i < defaultcontrols.length; i++) {
defaultcontrols[i].remove()
};
var mediacontrols = pbmarkup.querySelectorAll('[data-controls="media"]'); /* Remove media url controls */
for (var i=0; i < mediacontrols.length; i++) {
mediacontrols[i].remove()
};
var mediacontrolsvideo = pbmarkup.querySelectorAll('[data-controls="mediavideo"]'); /* Remove video controls */
for (var i=0; i < mediacontrolsvideo.length; i++) {
mediacontrolsvideo[i].remove()
};
var linkcontrols = pbmarkup.querySelectorAll('[data-controls="link"]'); /* Remove link controls */
for (var i=0; i < linkcontrols.length; i++) {
linkcontrols[i].remove()
};
var tablerowcontrols = pbmarkup.querySelectorAll('[data-controls="tablerowcontrols"]'); /* Remove table row controls */
for (var i=0; i < tablerowcontrols.length; i++) {
tablerowcontrols[i].remove()
};
var answercontrols = pbmarkup.querySelectorAll('[data-question="isanswercontrols"]'); /* Remove answer controls */
for (var i=0; i < answercontrols.length; i++) {
answercontrols[i].remove()
};
var feedbackcontrols = pbmarkup.querySelectorAll('[data-question="isanswerfeedbackcontrols"]'); /* Remove answer feedback controls */
for (var i=0; i < feedbackcontrols.length; i++) {
feedbackcontrols[i].remove()
};
var answerselect = pbmarkup.querySelectorAll('.answer'); /* Add onclick to answers */
for (var i=0; i < answerselect.length; i++) {
answerselect[i].style.display = 'flex'; /* Set style to flex in case user was on feedback when generating  */
answerselect[i].setAttribute("onclick","this.style.display = 'none';this.nextElementSibling.style.display = 'flex'")
};
var feedbackselect = pbmarkup.querySelectorAll('.answerfeedback'); /* Add onclick to feedback answers */
for (var i=0; i < feedbackselect.length; i++) {
feedbackselect[i].style.display = 'none'; /* Set style to none in case user was on feedback when generating  */
feedbackselect[i].setAttribute("onclick","this.style.display = 'none';this.previousElementSibling.style.display = 'flex'")
};
var contenteditable = pbmarkup.querySelectorAll('[contenteditable="true"]'); /* Change contenteditable to false */
for (var i=0; i < contenteditable.length; i++) {
contenteditable[i].setAttribute('contenteditable','false');
};
var block = pbmarkup.querySelectorAll('.component-block'); /* Find component blocks */
var singlediv = block.length;
if(singlediv < '2'){block[0].style.marginBottom = '0px'}; /* If markup only has 1 component, remove bottom component block margin */
style.type = "text/css"; /* Css declaration */
style.rel = "stylesheet"; /* Css declaration */
style.href = platformurl+componentstyle; /* Css url */
pbmarkup.prepend(style); /* Add Css link to temporary markup */
pbmarkup.insertAdjacentHTML('beforeend', framestyle); /* Add iframe Css style to temporary markup */
pbmarkup.insertAdjacentHTML('beforeend', lmsbutton); /* Add dummy lms button to temporary markup */
pbmarkupclean = pbmarkup.innerHTML.replace(/^\s*[\r\n]/gm, "").replaceAll('><', ">\n<"); /* Update textarea with content and remove blank lines where elements have been removed */
previewer.write(pbmarkupclean);
previewer.body.style.margin = '0';
previewercontainer.style.display = 'flex';
if(tabletpreview.classList.contains('invert')){return false}
if(laptoppreview.classList.contains('invert')){return false}
else{mobilepreview.classList.add('invert')};
pbmarkup.innerHTML = ''; /* Clear Div */
});

const tabletpreview = document.getElementById('preview-tablet');
tabletpreview.addEventListener('click', (ev)=>{
const preview  = document.getElementById('preview');
preview.style.height = '900px';
preview.style.width = '768px';
preview.style.borderTop = '40px solid var(--black)';
preview.style.borderBottom = '40px solid var(--black)';
mobilepreview.classList.remove('invert');
laptoppreview.classList.remove('invert');
tabletpreview.classList.add('invert');
});

const mobilepreview = document.getElementById('preview-mobile');
mobilepreview.addEventListener('click', (ev)=>{
const preview  = document.getElementById('preview');
preview.style.height = '667px';
preview.style.width = '375px';
preview.style.borderTop = '30px solid var(--black)';
preview.style.borderBottom = '30px solid var(--black)';
tabletpreview.classList.remove('invert');
laptoppreview.classList.remove('invert');
mobilepreview.classList.add('invert');
});

const laptoppreview = document.getElementById('preview-laptop');
laptoppreview .addEventListener('click', (ev)=>{
const preview  = document.getElementById('preview');
preview.style.height = 'calc(100vh - 80px)';
preview.style.width = '1370px';
preview.style.borderBottom = '80px solid var(--black)';
tabletpreview.classList.remove('invert');
mobilepreview.classList.remove('invert');
laptoppreview.classList.add('invert');
});

document.getElementById('close-preview').addEventListener('click', (ev)=>{
const previewercontainer  = document.getElementById('preview-container'); /* iframe previewer container */
const previewer  = document.getElementById('preview').contentWindow.document; /* iframe */
previewercontainer.style.display = 'none'; /* Close Previewer */
previewer.body.innerHTML = ''; /* Clear Div */
})
