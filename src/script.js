function convertURL(url) {
  const regex = /https:\/\/(docs|drive)\.google\.com\/(document|presentation|spreadsheets|file)\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regex);

  if (!match) {
    let errorID = "Error: Invalid URL";
    alert(errorID);
    document.getElementById("url").value = "";
    return;
  }

  const baseURL = "https://drive.google.com/file/d/";
  const fileId = match[3];

  return baseURL + fileId + "/";
}

function convert() {
  const url = document.getElementById("url").value;
  const result = convertURL(url);
  if (result) {
    document.getElementById("result").value = result;
    document.getElementById("copybox").style.display = "block";
    document.getElementById("copybox").style.transition =
      "opacity 1s ease-in-out";
    document.getElementById("copybox").style.opacity = 0;

    setTimeout(function () {
      document.getElementById("copybox").style.opacity = 1;
    }, 100);
  }
}

document.getElementById("copybtn").addEventListener("click", function () {
  // Select the content of the input box
  document.getElementById("result").select();
  // Copy the selected content
  document.execCommand("copy");
  console.log(">_ copied");
});

// Listen for changes to the input element
document.getElementById("url").addEventListener("input", function () {
  // Hide the div with the id "copybox"
  document.getElementById("copybox").style.display = "none";
});
