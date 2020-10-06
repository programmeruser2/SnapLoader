"use strict";
const downloadButton = document.getElementById('download-project-button');
const projectURL = document.getElementById('project-url');

downloadButton.onclick = function() {
  if(projectURL.value.trim().length >= 1) {
    let params = {};
    const urlParams = projectURL.value.replace('https://snap.berkeley.edu/snap/snap.html#present:','').split('&');
    urlParams.forEach((item, index) => {
      urlParams[index] = item.split('=');
      params[item] = item[1]; 
    });
    const projectIFrame = document.getElementById('project-iframe');
    projectIFrame.style.display = 'block';
    projectIFrame.src = projectURL.value;
    (async function() {
      const req = await fetch(`https://cors-anywhere.herokuapp.com/https://cloud.snap.berkeley.edu/projects/${params.Username}/${params.ProjectName}/metadata`)
      const data = await req.json();
      document.getElementById('project-notes').value = data.notes; 
   })();
  }
}
