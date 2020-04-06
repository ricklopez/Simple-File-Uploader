// let dropArea = document.getElementById('drop-area');

// dropArea.addEventListener('dragenter', handlerFunction, false);
// dropArea.addEventListener('dragleave', handlerFunction, false);
// dropArea.addEventListener('dragover', handlerFunction, false);
// dropArea.addEventListener('drop', handlerFunction, false);

/*
Adding The Drag-And-Drop Functionality
*/

let dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
});


['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
});

dropArea.addEventListener('drop', handleDrop, false);


function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('highlight')
}


function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files
  debugger;
  handleFiles(files)
}


function handleFiles(files) {
  ([...files]).forEach(uploadFile)
}


function uploadFile(file) {
  let url = 'https://httpbin.org/post';
  let formData = new FormData()

  formData.append('file', file)

  console.log(formData.get('file'));
  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then((response) => { console.log(response)})
  .catch(() => { /* Error. Inform the user */ })
}