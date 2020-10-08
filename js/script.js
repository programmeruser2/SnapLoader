"use strict";
const $ = function(id) { return document.getElementById(id); };
const withInfoLoadButton = $('with-info-load-button');
const withURLLoadButton = $('with-url-load-button');
const projectURL = $('project-url');
const projectName = $('project-name');
const projectAuthor = $('project-author');
const projectIFrame = $('project-iframe');
const projectNotes = $('project-notes');

function isEmpty(str) {
  if(str.trim().length >= 1) {
    return false;
  } else {
    return true;
  }
}
function parseQuerystring(url) {
  let params = {};
  const locOfQuestionMark = url.indexOf('?');
  url = (locOfQuestionMark === -1) ? url : url.slice(locOfQuestionMark, url.length+1);
  url = url.replace('?','');
  const pairs = url.split('&');
  pairs.forEach((item, index) => {
    pairs[index] = item.split('=');
    params[decodeURIComponent(pairs[index][0])] = decodeURIComponent(pairs[index][1]);
  });
  return params;
}
async function updateProjectNotes(project, username) {
  const req = await fetch(`https://cors-anywhere.herokuapp.com/https://cloud.snap.berkeley.edu/projects/${encodeURIComponent(projectAuthor.value)}/${encodeURIComponent(projectName.value)}/metadata`)
  const data = await req.json();
  projectNotes.style.display = 'inline-block';
  projectNotes.value = data.notes || '';  
}
function loadWithProjectInfo(project, author) {
  
}
function loadWithURL(url) {
  
}
