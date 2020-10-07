"use strict";
const $ = function(id) { return document.getElementById(id); };
const downloadButton = $('download-project-button');
const projectURL = $('project-url');
const projectName = $('project-name');
const projectAuthor = $('project-author');

downloadButton.onclick = function() {
  if(projectURL.value.trim().length >= 1) {
    let params = {};
    const urlParams = projectURL.value.replace('https://snap.berkeley.edu/snap/snap.html#present:','').split('&');
    urlParams.forEach((item, index) => {
      urlParams[index] = item.split('=');
      params[urlParams[index][0]] = urlParams[index][1]; 
    });
    const projectIFrame = $('project-iframe');
    projectIFrame.style.display = 'block';
    projectIFrame.src = projectURL.value;
    (async function() {
      const req = await fetch(`https://cors-anywhere.herokuapp.com/https://cloud.snap.berkeley.edu/projects/${params.Username}/${params.ProjectName}/metadata`)
      const data = await req.json();
      const projectNotes = await $('project-notes');
      projectNotes.style.display = 'inline-block';
      projectNotes.value = data.notes || '';  
   })();
  } else if()
}
