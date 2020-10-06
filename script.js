"use strict";
const downloadButton = document.getElementById('download-project-button');
const projectURL = document.getElementById('project-url');

downloadButton.onclick = function() {
  if(project-url.value.trim().length >= 1) {
    let params = {};
    const urlParams = projectURL.value.replace('https://snap.berkeley.edu/snap/snap.html#present:','').split('&');
    urlParams.forEach((item, index) => {
      urlParams[index] = item.split('=');
      params[item] = item[1]; 
    });
    document.getElementById('project-iframe').src = project-url.value;
    
  }
}
