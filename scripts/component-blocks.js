let editor = document.getElementById('page-builder');
const controls =
`
<span id="controls" data-controls="default">
<button class="pb-btn remove-element" onclick="this.parentNode.parentNode.remove();"></button>
<button class="pb-btn up"></button>
<button class="pb-btn down"></button>
</span
`
;
const controlsmedia =
`
<span class="mediacont" id="controls" data-controls="media">
<button class="pb-btn edit-element" onclick="this.nextElementSibling.style.display = 'block';"></button>
<input type="url" onkeyup="changeImage(this);" class="imageurlinput" placeholder="Paste URL here to update content" />
</span
`
;
const controlsmediavideo =
`
<span class="mediacont" id="controls" data-controls="mediavideo">
<button class="pb-btn edit-element" onclick="this.nextElementSibling.style.display = 'block';"></button>
<span class="videocont">
<input type="url" onkeyup="changeVideo(this);" class="videourlinput" placeholder="Paste URL here to update content" />
<button class="pb-btn autoplay" onclick="if(this.classList.contains('active')){this.classList.remove('active');this.parentNode.parentNode.nextElementSibling.removeAttribute('autoplay')}else{this.classList.add('active');this.parentNode.parentNode.nextElementSibling.setAttribute('autoplay','')}">autoplay</button>
<button class="pb-btn muted" onclick="if(this.classList.contains('active')){this.classList.remove('active');this.parentNode.parentNode.nextElementSibling.removeAttribute('muted')}else{this.classList.add('active');this.parentNode.parentNode.nextElementSibling.setAttribute('muted','')}">muted</button>
</span
</span
`
;
const controlslink =
`
<span class="linkcont" id="controls" data-controls="link">
<button class="pb-btn edit-element" onclick="this.nextElementSibling.style.display = 'block';"></button>
<input type="url" onkeyup="changeLink(this);" class="imageurlinput" placeholder="Paste Link URL here" />
</span
`
;
const table2colrowadd =
`
<button id="controls" class="row-buttons add-row" data-controls="tablerowcontrols" onclick='this.nextElementSibling.insertAdjacentHTML("beforeend", "<tr><td contenteditable=true>Battery Capacity:</td><td contenteditable=true class=rightcol>44kWh - 133kWh</td></tr>");'></button>
`
;
const table2colrowremove =
`
<button id="controls" class="row-buttons remove-row" data-controls="tablerowcontrols" onclick='this.previousElementSibling.deleteRow(-1);'></button>
`
;
const table3colrowadd =
`
<button id="controls" style="position:absolute" class="row-buttons add-row" data-controls="tablerowcontrols" onclick='this.nextElementSibling.insertAdjacentHTML("beforeend", "<tr><td contenteditable=true>Battery Capacity:</td><td contenteditable=true class=rightcol>44kWh - 133kWh</td><td contenteditable=true class=rightcol>xxx</td></tr>");'></button>
`
;
const table3colrowremove =
`
<button id="controls" class="row-buttons remove-row" data-controls="tablerowcontrols" onclick='this.previousElementSibling.deleteRow(-1);'></button>
`
;
const questionanswercontrols =
`
<span data-question="isanswercontrols"><span class="up-answer" data-controls="upanswercontrol"></span><span class="down-answer" data-controls="downanswercontrol"></span><button class="pb-btn" style="position:absolute;right:8px;bottom:8px" onclick="this.parentNode.parentNode.nextElementSibling.style.display = 'flex';this.parentNode.parentNode.style.display = 'none';">Enter Feedback</button></span>
`
;
const questionfeedbackcontrols =
`
<span data-question="isanswerfeedbackcontrols"><span class="up-answer" data-controls="upanswercontrol"></span><span class="down-answer" data-controls="downanswercontrol"></span><button class="pb-btn" style="position:absolute;right:8px;bottom:8px" onclick="this.parentNode.parentNode.previousElementSibling.style.display = 'flex';this.parentNode.parentNode.style.display = 'none';">Edit Question</button></span>
`
;
//
// TEXT
// *************************************************Title****************************************************************
function insertTitle(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<h1 contenteditable="true" data-text="Enter title">A relatively long title, can be two lines if needed!</h1>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  *************************************************Heading****************************************************************
function insertHeading(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<h2 contenteditable="true" data-text="Enter sub-title">Heading goes here</h2>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  *****************************************Title & Heading****************************************************************
function insertTitleHeading(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<h1 contenteditable="true" data-text="Enter title">Large title goes here</h1>
<h2 contenteditable="true" data-text="Enter sub-title">Subtitle goes here if needed, one line</h2>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  ***********************************************Paragraph****************************************************************
function insertParagraph(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<p contenteditable="true" data-text="Enter text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// ***********************************************Paragraph with Title******************************************************
function insertParagraphTitle(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<h3 contenteditable="true" data-text="Enter title">Smaller title would go here</h3>
<p contenteditable="true" data-text="Enter text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// ***************************************Section Mono Heading Paragraph with Title*****************************************
function insertSectionParagraph(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<p contenteditable="true" class="mono" data-text="Enter section name">module 1</p>
<h3 contenteditable="true" data-text="Enter title">Title</h3>
<p contenteditable="true" data-text="Enter text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
// LISTS
// ***************************************************Numbered Ordered List*************************************************
function insertNumberList(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<ol>
<span contenteditable="true">
<li>This is how a list may look when using a simple numbered list.</li>
<li>This is how a list may look when using a simple numbered list.</li>
<li>This is how a list may look when using a simple numbered list.</li>
</span>
</ol>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// ************************************************Numbered Ordered List with Title*****************************************
function insertNumberListTitle(){
var div = document.createElement("div");
var control = document.createElement("div");
div.setAttribute('data-controls','hasdefaultcontrols');
div.classList.add('component-block');
var html =
`
<h3 contenteditable="true" data-text="Enter list title">Learning Objectives</h3>
<ol>
<span contenteditable="true">
<li>This is how a list may look when using a simple numbered list.</li>
<li>This is how a list may look when using a simple numbered list.</li>
<li>This is how a list may look when using a simple numbered list.</li>
</span>
</ol>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Alpha Ordered List**************************************************
function insertAlphaList(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<ol class="alpha-list">
<span contenteditable="true">
<li>This is how a list may look when using a simple numbered list.</li>
<li>This is how a list may look when using a simple numbered list.</li>
<li>This is how a list may look when using a simple numbered list.</li>
</span>
</ol>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Bullet Unordered List**************************************************
function insertBulletList(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<ul>
<span contenteditable="true">
<li>This is how a list may look when using a simple bullet list.</li>
<li>This is how a list may look when using a simple bullet list.</li>
<li>This is how a list may look when using a simple bullet list.</li>
</span>
</ul>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// **************************************************Continued Number List**************************************************
function insertContinueNumberList(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<span class="pb-section-numbering">
<h3 contenteditable="true" data-text="Enter title">A instruction or step in a procedure can go here</h3>
<span contenteditable="true" data-text="Enter text">
<p data-text="Enter text">A sub-step or other information can go here.</p>
<p style="display:block">The numbering automatically continues from the previous number.</p>
<p>The numbering will continue even if seperated by other elements e.g images.</p>
</span>
</span>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
// ADMONITIONS
// *****************************************************Note Admonition*****************************************************
function insertNoteAdmonition(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<div class="admonition note">
<div class="title" contenteditable="true" data-text="Enter title">Attractive market position</div>
<div class="content" contenteditable="true" data-text="Enter text">Designed from the ground up, the Arrival Van can be tailored precisely to individual routes and specific uses - with different heights, lengths and battery capacities available. It’s internal cargo bay is optimised to efficiently carry the most volume and payload on the smallest vehicle footprint possible.
</div>
</div>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Caution Admonition*****************************************************
function insertCautionAdmonition(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<div class="admonition caution">
<div class="title" contenteditable="true" data-text="Enter title">Attractive market position</div>
<div class="content" contenteditable="true" data-text="Enter text">Designed from the ground up, the Arrival Van can be tailored precisely to individual routes and specific uses - with different heights, lengths and battery capacities available. It’s internal cargo bay is optimised to efficiently carry the most volume and payload on the smallest vehicle footprint possible.
</div>
</div>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Warning Admonition*****************************************************
function insertWarningAdmonition(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<div class="admonition warning">
<div class="title" contenteditable="true" data-text="Enter title">Attractive market position</div>
<div class="content" contenteditable="true" data-text="Enter text">Designed from the ground up, the Arrival Van can be tailored precisely to individual routes and specific uses - with different heights, lengths and battery capacities available. It’s internal cargo bay is optimised to efficiently carry the most volume and payload on the smallest vehicle footprint possible.
</div>
</div>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Danger Admonition*****************************************************
function insertDangerAdmonition(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<div class="admonition danger">
<div class="title" contenteditable="true" data-text="Enter title">Attractive market position</div>
<div class="content" contenteditable="true" data-text="Enter text">Designed from the ground up, the Arrival Van can be tailored precisely to individual routes and specific uses - with different heights, lengths and battery capacities available. It’s internal cargo bay is optimised to efficiently carry the most volume and payload on the smallest vehicle footprint possible.
</div>
</div>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
// MEDIA
// *****************************************************Image*****************************************************
function insertImage(){
var div = document.createElement("div");
var control = document.createElement("div");
var controlmedia = document.createElement("div");
div.classList.add('component-block','block-media');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<img class="standardimg" data-controls="hasmediacontrols" width="100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJ1dWlkLWVhMDdjZjVlLWNkMDEtNDIwYi1iM2Q3LWFkMDdkZThiYWQ0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwMDAgMTEyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJ1dWlkLTNiYTZiODg4LWVhZDYtNDc5Mi04MDQ1LTA2MzlkNDQxZWM0MiI+PHJlY3QgeD0iNjIyLjIiIHk9IjI0My4yNCIgd2lkdGg9Ijc1NS43MSIgaGVpZ2h0PSI2NDQiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9InV1aWQtMWZjOWMyNGQtYTk4YS00ODYxLWEyNmUtZTkwN2I1OGZkMTZhIj48cmVjdCB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIxMTI0IiBzdHlsZT0iZmlsbDojZThlOGU4OyIvPjxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCN1dWlkLTNiYTZiODg4LWVhZDYtNDc5Mi04MDQ1LTA2MzlkNDQxZWM0Mik7Ij48cGF0aCBkPSJNOTA2LjQsNzAxLjU3bC03Ni4zNy05Ny43MS0xMzIuMjUsMTY5LjIxaDYwNC41N2wtMjI2LjcxLTI4Mi4wMS0xNjkuMjQsMjEwLjUxWm0tMjg0LjE5LTM4MS45M2MwLTQxLjc0LDMzLjk0LTc1LjU3LDc1LjIyLTc1LjU3aDYwNS4yN2M0MS41NCwwLDc1LjIyLDMzLjYzLDc1LjIyLDc1LjU3djQ5MS4yMWMwLDQxLjc0LTMzLjk0LDc1LjU3LTc1LjIyLDc1LjU3SDY5Ny40M2MtNDEuNTQsMC03NS4yMi0zMy42My03NS4yMi03NS41N1YzMTkuNjRabTE4OC45MywxODguOTNjNDEuNzMsMCw3NS41Ny0zMy44NCw3NS41Ny03NS41N3MtMzMuODQtNzUuNTctNzUuNTctNzUuNTctNzUuNTcsMzMuODQtNzUuNTcsNzUuNTcsMzMuODQsNzUuNTcsNzUuNTcsNzUuNTdaIiBzdHlsZT0iZmlsbDojZmZmOyBmaWxsLXJ1bGU6ZXZlbm9kZDsiLz48L2c+PC9nPjwvc3ZnPg==">
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(controlmedia);
div.prepend(control);
control.outerHTML = controls;
controlmedia.outerHTML = controlsmedia;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Full Width Image*****************************************************
function insertFullImage(){
var div = document.createElement("div");
var control = document.createElement("div");
var controlmedia = document.createElement("div");
div.classList.add('component-block','block-full');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<img class="letterboximage" data-controls="hasmediacontrols" width="100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJ1dWlkLTVlY2MxZjc3LTcyMTUtNDdiNC04Mzg2LTZjODgzOWFlOTFhZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM4NDAgMTY0NSI+PGRlZnM+PGNsaXBQYXRoIGlkPSJ1dWlkLTk3NTJiMTEzLTAwZDktNDBhZS05MTQwLTBiN2FmYTVjMGEzNCI+PHJlY3QgeD0iMTU1MS41OCIgeT0iNTAyLjE4IiB3aWR0aD0iNzU1LjcxIiBoZWlnaHQ9IjY0NCIgc3R5bGU9ImZpbGw6bm9uZTsiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD0idXVpZC1hZjRhMmZiZC00NDExLTQwZDgtOGRmYi02ZGQyZjI4MjU2MzkiPjxyZWN0IHdpZHRoPSIzODQwIiBoZWlnaHQ9IjE2NDUiIHN0eWxlPSJmaWxsOiNlOGU4ZTg7Ii8+PGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI3V1aWQtOTc1MmIxMTMtMDBkOS00MGFlLTkxNDAtMGI3YWZhNWMwYTM0KTsiPjxwYXRoIGQ9Ik0xODM1Ljc4LDk2MC41MWwtNzYuMzctOTcuNzEtMTMyLjI1LDE2OS4yMWg2MDQuNTdsLTIyNi43MS0yODIuMDEtMTY5LjI0LDIxMC41MVptLTI4NC4xOS0zODEuOTNjMC00MS43NCwzMy45NC03NS41Nyw3NS4yMi03NS41N2g2MDUuMjdjNDEuNTQsMCw3NS4yMiwzMy42Myw3NS4yMiw3NS41N3Y0OTEuMjFjMCw0MS43NC0zMy45NCw3NS41Ny03NS4yMiw3NS41N2gtNjA1LjI3Yy00MS41NCwwLTc1LjIyLTMzLjYzLTc1LjIyLTc1LjU3di00OTEuMjFabTE4OC45MywxODguOTNjNDEuNzMsMCw3NS41Ny0zMy44NCw3NS41Ny03NS41N3MtMzMuODQtNzUuNTctNzUuNTctNzUuNTctNzUuNTcsMzMuODQtNzUuNTcsNzUuNTcsMzMuODQsNzUuNTcsNzUuNTcsNzUuNTdaIiBzdHlsZT0iZmlsbDojZmZmOyBmaWxsLXJ1bGU6ZXZlbm9kZDsiLz48L2c+PC9nPjwvc3ZnPg==">
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(controlmedia);
div.prepend(control);
control.outerHTML = controls;
controlmedia.outerHTML = controlsmedia;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Image and Caption***************************************************
function insertImageCaption(){
var div = document.createElement("div");
var control = document.createElement("div");
var controlmedia = document.createElement("div");
div.classList.add('component-block','block-media');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<img class="standardimg" data-controls="hasmediacontrols" width="100%" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJ1dWlkLWVhMDdjZjVlLWNkMDEtNDIwYi1iM2Q3LWFkMDdkZThiYWQ0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwMDAgMTEyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJ1dWlkLTNiYTZiODg4LWVhZDYtNDc5Mi04MDQ1LTA2MzlkNDQxZWM0MiI+PHJlY3QgeD0iNjIyLjIiIHk9IjI0My4yNCIgd2lkdGg9Ijc1NS43MSIgaGVpZ2h0PSI2NDQiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9InV1aWQtMWZjOWMyNGQtYTk4YS00ODYxLWEyNmUtZTkwN2I1OGZkMTZhIj48cmVjdCB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIxMTI0IiBzdHlsZT0iZmlsbDojZThlOGU4OyIvPjxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCN1dWlkLTNiYTZiODg4LWVhZDYtNDc5Mi04MDQ1LTA2MzlkNDQxZWM0Mik7Ij48cGF0aCBkPSJNOTA2LjQsNzAxLjU3bC03Ni4zNy05Ny43MS0xMzIuMjUsMTY5LjIxaDYwNC41N2wtMjI2LjcxLTI4Mi4wMS0xNjkuMjQsMjEwLjUxWm0tMjg0LjE5LTM4MS45M2MwLTQxLjc0LDMzLjk0LTc1LjU3LDc1LjIyLTc1LjU3aDYwNS4yN2M0MS41NCwwLDc1LjIyLDMzLjYzLDc1LjIyLDc1LjU3djQ5MS4yMWMwLDQxLjc0LTMzLjk0LDc1LjU3LTc1LjIyLDc1LjU3SDY5Ny40M2MtNDEuNTQsMC03NS4yMi0zMy42My03NS4yMi03NS41N1YzMTkuNjRabTE4OC45MywxODguOTNjNDEuNzMsMCw3NS41Ny0zMy44NCw3NS41Ny03NS41N3MtMzMuODQtNzUuNTctNzUuNTctNzUuNTctNzUuNTcsMzMuODQtNzUuNTcsNzUuNTcsMzMuODQsNzUuNTcsNzUuNTcsNzUuNTdaIiBzdHlsZT0iZmlsbDojZmZmOyBmaWxsLXJ1bGU6ZXZlbm9kZDsiLz48L2c+PC9nPjwvc3ZnPg==">
<span class="mono" contenteditable="true" data-text="your caption would go here">your caption would go here</span>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(controlmedia);
div.prepend(control);
control.outerHTML = controls;
controlmedia.outerHTML = controlsmedia;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Multi Image*********************************************************
function insertMultiImage(){
var div = document.createElement("div");
var control = document.createElement("div");
var controlmedia1 = document.createElement("div");
var controlmedia2 = document.createElement("div");
var multiimage = document.createElement("div");
var column1 = document.createElement("div");
var column2 = document.createElement("div");
var img1 = document.createElement("img");
var img2 = document.createElement("img");
div.classList.add('component-block','block-media');
div.setAttribute('data-controls','hasdefaultcontrols');
multiimage.classList.add('pb-multi-image');
column1.classList.add('image-column');
column2.classList.add('image-column');
var image1 =
`
<img class="multi-image1" data-controls="hasmediacontrols" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJ1dWlkLWVhMDdjZjVlLWNkMDEtNDIwYi1iM2Q3LWFkMDdkZThiYWQ0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwMDAgMTEyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJ1dWlkLTNiYTZiODg4LWVhZDYtNDc5Mi04MDQ1LTA2MzlkNDQxZWM0MiI+PHJlY3QgeD0iNjIyLjIiIHk9IjI0My4yNCIgd2lkdGg9Ijc1NS43MSIgaGVpZ2h0PSI2NDQiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9InV1aWQtMWZjOWMyNGQtYTk4YS00ODYxLWEyNmUtZTkwN2I1OGZkMTZhIj48cmVjdCB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIxMTI0IiBzdHlsZT0iZmlsbDojZThlOGU4OyIvPjxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCN1dWlkLTNiYTZiODg4LWVhZDYtNDc5Mi04MDQ1LTA2MzlkNDQxZWM0Mik7Ij48cGF0aCBkPSJNOTA2LjQsNzAxLjU3bC03Ni4zNy05Ny43MS0xMzIuMjUsMTY5LjIxaDYwNC41N2wtMjI2LjcxLTI4Mi4wMS0xNjkuMjQsMjEwLjUxWm0tMjg0LjE5LTM4MS45M2MwLTQxLjc0LDMzLjk0LTc1LjU3LDc1LjIyLTc1LjU3aDYwNS4yN2M0MS41NCwwLDc1LjIyLDMzLjYzLDc1LjIyLDc1LjU3djQ5MS4yMWMwLDQxLjc0LTMzLjk0LDc1LjU3LTc1LjIyLDc1LjU3SDY5Ny40M2MtNDEuNTQsMC03NS4yMi0zMy42My03NS4yMi03NS41N1YzMTkuNjRabTE4OC45MywxODguOTNjNDEuNzMsMCw3NS41Ny0zMy44NCw3NS41Ny03NS41N3MtMzMuODQtNzUuNTctNzUuNTctNzUuNTctNzUuNTcsMzMuODQtNzUuNTcsNzUuNTcsMzMuODQsNzUuNTcsNzUuNTcsNzUuNTdaIiBzdHlsZT0iZmlsbDojZmZmOyBmaWxsLXJ1bGU6ZXZlbm9kZDsiLz48L2c+PC9nPjwvc3ZnPg==">
`
var image2 =
`
<img class="multi-image2" data-controls="hasmediacontrols" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJ1dWlkLWVhMDdjZjVlLWNkMDEtNDIwYi1iM2Q3LWFkMDdkZThiYWQ0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDIwMDAgMTEyNCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJ1dWlkLTNiYTZiODg4LWVhZDYtNDc5Mi04MDQ1LTA2MzlkNDQxZWM0MiI+PHJlY3QgeD0iNjIyLjIiIHk9IjI0My4yNCIgd2lkdGg9Ijc1NS43MSIgaGVpZ2h0PSI2NDQiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9InV1aWQtMWZjOWMyNGQtYTk4YS00ODYxLWEyNmUtZTkwN2I1OGZkMTZhIj48cmVjdCB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIxMTI0IiBzdHlsZT0iZmlsbDojZThlOGU4OyIvPjxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCN1dWlkLTNiYTZiODg4LWVhZDYtNDc5Mi04MDQ1LTA2MzlkNDQxZWM0Mik7Ij48cGF0aCBkPSJNOTA2LjQsNzAxLjU3bC03Ni4zNy05Ny43MS0xMzIuMjUsMTY5LjIxaDYwNC41N2wtMjI2LjcxLTI4Mi4wMS0xNjkuMjQsMjEwLjUxWm0tMjg0LjE5LTM4MS45M2MwLTQxLjc0LDMzLjk0LTc1LjU3LDc1LjIyLTc1LjU3aDYwNS4yN2M0MS41NCwwLDc1LjIyLDMzLjYzLDc1LjIyLDc1LjU3djQ5MS4yMWMwLDQxLjc0LTMzLjk0LDc1LjU3LTc1LjIyLDc1LjU3SDY5Ny40M2MtNDEuNTQsMC03NS4yMi0zMy42My03NS4yMi03NS41N1YzMTkuNjRabTE4OC45MywxODguOTNjNDEuNzMsMCw3NS41Ny0zMy44NCw3NS41Ny03NS41N3MtMzMuODQtNzUuNTctNzUuNTctNzUuNTctNzUuNTcsMzMuODQtNzUuNTcsNzUuNTcsMzMuODQsNzUuNTcsNzUuNTcsNzUuNTdaIiBzdHlsZT0iZmlsbDojZmZmOyBmaWxsLXJ1bGU6ZXZlbm9kZDsiLz48L2c+PC9nPjwvc3ZnPg==">
`
editor.appendChild(div);
div.prepend(control);
div.appendChild(multiimage);
multiimage.appendChild(column1);
multiimage.appendChild(column2);
column1.appendChild(controlmedia1);
column2.appendChild(controlmedia2);
controlmedia1.outerHTML = controlsmedia;
controlmedia2.outerHTML = controlsmedia;
column1.appendChild(img1);
img1.outerHTML = image1;
column2.appendChild(img2);
img2.outerHTML = image2;
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
// *****************************************************Video***************************************************************
function insertVideo(){
var div = document.createElement("div");
var control = document.createElement("div");
var controlmedia = document.createElement("div");
div.classList.add('component-block','block-media');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<video controls playsinline class="standardvideo" data-controls="hasmediavideocontrols" loading="lazy" src="https://learn.arrival.co/rigel/slug/be-000001/binary-content-entry/be-000001/bce-000126">
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(controlmedia);
div.prepend(control);
control.outerHTML = controls;
controlmedia.outerHTML = controlsmediavideo;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Full Video**********************************************************
function insertVideoFull(){
var div = document.createElement("div");
var control = document.createElement("div");
var controlmedia = document.createElement("div");
div.classList.add('component-block','block-full');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<video controls playsinline class="standardvideo" data-controls="hasmediavideocontrols" loading="lazy" src="https://learn.arrival.co/rigel/slug/be-000001/binary-content-entry/be-000001/bce-000126">
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(controlmedia);
div.prepend(control);
control.outerHTML = controls;
controlmedia.outerHTML = controlsmediavideo;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Iframe**********************************************************
function insertIframe(){
var div = document.createElement("div");
var control = document.createElement("div");
var controlmedia = document.createElement("div");
div.classList.add('component-block','block-full');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<iframe id="sp-iframe" loading="lazy" data-controls="hasmediacontrols" src="https:www.arrival.com"></iframe>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(controlmedia);
div.prepend(control);
control.outerHTML = controls;
controlmedia.outerHTML = controlsmedia;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************PDF**********************************************************
function insertPdf(){
var div = document.createElement("div");
var control = document.createElement("div");
var controlmedia = document.createElement("div");
div.classList.add('component-block','block-full');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<iframe id="sp-iframe" loading="lazy" data-controls="hasmediacontrols" src="" type="application/pdf"></iframe>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(controlmedia);
div.prepend(control);
control.outerHTML = controls;
controlmedia.outerHTML = controlsmedia;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************Responsive Iframe***************************************************
function insertIframeResponsive(){
var div = document.createElement("div");
var resp = document.createElement("div");
var control = document.createElement("div");
var controlmedia = document.createElement("div");
div.classList.add('component-block','block-media');
div.setAttribute('data-controls','hasdefaultcontrols');
resp.classList.add('responsive-frame');
var html =
`
<iframe id="responsive-iframe" data-controls="hasmediacontrols" loading="lazy" src="https:www.arrival.com"></iframe>
`
editor.appendChild(div);
div.prepend(control);
div.appendChild(resp);
resp.innerHTML = html;
resp.prepend(controlmedia);
control.outerHTML = controls;
controlmedia.outerHTML = controlsmedia;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
// LINKS
// *****************************************************Download Link*******************************************************
function insertDownloadLink(){
var div = document.createElement("div");
var control = document.createElement("div");
var controllink = document.createElement("div");
var linkclass = document.createElement("span");
div.classList.add('component-block','link');
div.setAttribute('data-controls','hasdefaultcontrols');
linkclass.classList.add('link');
var html =
`
<a class="download-file" data-controls="haslinkcontrols" href="null" download></a>
<p contenteditable="true" data-text="your link description would go here">Your Link Description</p>
`
editor.appendChild(div);
div.prepend(control);
div.appendChild(linkclass);
linkclass.innerHTML = html;
linkclass.prepend(controllink);
control.outerHTML = controls;
controllink.outerHTML = controlslink;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
// *****************************************************External Link*****************************************************
function insertExternalLink(){
var div = document.createElement("div");
var control = document.createElement("div");
var controllink = document.createElement("div");
var linkclass = document.createElement("span");
div.classList.add('component-block','link');
div.setAttribute('data-controls','hasdefaultcontrols');
linkclass.classList.add('link');
var html =
`
<a class="link-window" data-controls="haslinkcontrols" href="https://www.arrival.com" target="_blank"></a>
<p contenteditable="true" data-text="your link description would go here">Arrival Website</p>
`
editor.appendChild(div);
div.prepend(control);
div.appendChild(linkclass);
linkclass.innerHTML = html;
linkclass.prepend(controllink);
control.outerHTML = controls;
controllink.outerHTML = controlslink;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
// OTHER
//  ***********************************************Divider******************************************************************
function insertDivider(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<hr class="divider"></hr>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  *************************************************Table******************************************************************
function insertTable(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<table data-controls="hastable2colrowcontrols">
<tr>
<th contenteditable="true" class="leftcol-heading" data-text="Enter text">Specifications</th>
<th contenteditable="true" class="rightcol-heading"></th>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">GVW:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">3.5T / 4.25T</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Height:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">2.4 - 2.7m</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Length:</td>
<td contenteditable="true" class="rightcol">5.1 - 6.5m</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Max. Payload:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text"> 2,100kg</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Battery Capacity:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">44kWh - 133kWh</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Range up to:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">350km / 215 miles</td>
</tr>
<button id="controls" class="row-buttons add-row" data-controls="tablerowcontrols" onclick='this.nextElementSibling.insertAdjacentHTML("beforeend", "<tr><td contenteditable=true>Battery Capacity:</td><td contenteditable=true class=rightcol>44kWh - 133kWh</td></tr>");'></button>
</table>
<button id="controls" class="row-buttons remove-row" data-controls="tablerowcontrols" onclick='this.previousElementSibling.deleteRow(-1);'></button>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  **********************************************Table 3 Column*************************************************************
function insertTableThreeCol(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<table data-controls="hastable3colrowcontrols">
<tr>
<th contenteditable="true" class="leftcol-heading" data-text="Enter text">Description</th>
<th contenteditable="true" class="rightcol-heading">Detail</th>
<th contenteditable="true" class="rightcol-heading">Specification</th>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">GVW:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">3.5T / 4.25T</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">xxx</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Height:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">2.4 - 2.7m</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">xxx</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Length:</td>
<td contenteditable="true" class="rightcol">5.1 - 6.5m</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">xxx</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Max. Payload:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text"> 2,100kg</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">xxx</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Battery Capacity:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">44kWh - 133kWh</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">xxx</td>
</tr>
<tr>
<td contenteditable="true" data-text="Enter text">Range up to:</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">350km / 215 miles</td>
<td contenteditable="true" class="rightcol" data-text="Enter text">xxx</td>
</tr>
<button id="controls" style="position:absolute" class="row-buttons add-row" data-controls="tablerowcontrols" onclick='this.nextElementSibling.insertAdjacentHTML("beforeend", "<tr><td contenteditable=true>Battery Capacity:</td><td contenteditable=true class=rightcol>44kWh - 133kWh</td><td contenteditable=true class=rightcol>xxx</td></tr>");'></button>
</table>
<button id="controls" class="row-buttons remove-row" data-controls="tablerowcontrols" onclick='this.previousElementSibling.deleteRow(-1);'></button>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  ***********************************************Header*******************************************************************
function insertHeader(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block','block-full');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<span class="pb-arrival-header"></span>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  ***********************************************Header with Text*********************************************************
function insertHeaderText(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block','block-full');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<span class="pb-arrival-header">
<span class="pb-arrival-header-text" contenteditable="true" data-text="Enter text">Arrival Insider Trading Policy v.1.0</span>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  ***************************************************Footer***************************************************************
function insertFooter(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block','block-full');
div.setAttribute('data-controls','hasdefaultcontrols');
div.style.marginBottom = '0';
var html =
`
<div class="pb-footer">
<span contenteditable="true">confidential. &copy; 2022 arrival ltd.</span>
</div>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
//  ***************************************************Question*************************************************************
function insertQuestion(){
var div = document.createElement("div");
var control = document.createElement("div");
div.classList.add('component-block');
div.setAttribute('data-controls','hasdefaultcontrols');
var html =
`
<div class="question-block">
<h3 contenteditable="true" data-text="Enter your question"></h3>
<div class="answerblock">
<span class="answer">
<span class="mono" contenteditable="true" data-text="Enter an incorrect answer" data-question="hasanswercontrols"></span>
<span data-question="isanswercontrols"><span class="up-answer" data-controls="upanswercontrol"></span><span class="down-answer" data-controls="downanswercontrol"></span><button class="pb-btn" style="position:absolute;right:8px;bottom:8px" onclick="this.parentNode.parentNode.nextElementSibling.style.display = 'flex';this.parentNode.parentNode.style.display = 'none';">Enter Feedback</button></span>
</span>
<span class="answerfeedback incorrect">
<span contenteditable="true" data-text="Enter your feedback" data-question="hasanswerfeedbackcontrols"></span>
<span data-question="isanswerfeedbackcontrols"><span class="up-answer" data-controls="upanswercontrol"></span><span class="down-answer" data-controls="downanswercontrol"></span><button class="pb-btn" style="position:absolute;right:8px;bottom:8px" onclick="this.parentNode.parentNode.previousElementSibling.style.display = 'flex';this.parentNode.parentNode.style.display = 'none';">Edit Question</button></span>
</span>
</div>
<div class="answerblock">
<span class="answer">
<span class="mono" contenteditable="true" data-text="Enter a correct answer" data-question="hasanswercontrols"></span>
<span data-question="isanswercontrols"><span class="up-answer" data-controls="upanswercontrol"></span><span class="down-answer" data-controls="downanswercontrol"></span><button class="pb-btn" style="position:absolute;right:8px;bottom:8px" onclick="this.parentNode.parentNode.nextElementSibling.style.display = 'flex';this.parentNode.parentNode.style.display = 'none';">Enter Feedback</button></span>
</span>
<span class="answerfeedback correct">
<span contenteditable="true" data-text="Enter your feedback" data-question="hasanswerfeedbackcontrols"></span>
<span data-question="isanswerfeedbackcontrols"><span class="up-answer" data-controls="upanswercontrol"></span><span class="down-answer" data-controls="downanswercontrol"></span><button class="pb-btn" style="position:absolute;right:8px;bottom:8px" onclick="this.parentNode.parentNode.previousElementSibling.style.display = 'flex';this.parentNode.parentNode.style.display = 'none';">Edit Question</button></span>
</div>
<div class="answerblock">
<span class="answer">
<span class="mono" contenteditable="true" data-text="Enter an incorrect answer" data-question="hasanswercontrols"></span>
<span data-question="isanswercontrols"><span class="up-answer" data-controls="upanswercontrol"></span><span class="down-answer" data-controls="downanswercontrol"></span><button class="pb-btn" style="position:absolute;right:8px;bottom:8px" onclick="this.parentNode.parentNode.nextElementSibling.style.display = 'flex';this.parentNode.parentNode.style.display = 'none';">Enter Feedback</button></span>
</span>
<span class="answerfeedback incorrect">
<span contenteditable="true" data-text="Enter your feedback" data-question="hasanswerfeedbackcontrols"></span>
<span data-question="isanswerfeedbackcontrols"><span class="up-answer" data-controls="upanswercontrol"></span><span class="down-answer" data-controls="downanswercontrol"></span><button class="pb-btn" style="position:absolute;right:8px;bottom:8px" onclick="this.parentNode.parentNode.previousElementSibling.style.display = 'flex';this.parentNode.parentNode.style.display = 'none';">Edit Question</button></span>
</span>
</div>
</div>
`
editor.appendChild(div);
div.innerHTML = html;
div.prepend(control);
control.outerHTML = controls;
div.scrollIntoView({behavior: 'smooth'});
}
// *************************************************************************************************************************
//
