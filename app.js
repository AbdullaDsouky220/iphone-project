let images = document.getElementsByClassName("choices")[0];
let transform = document.getElementById("transform");
console.log(images);
images.addEventListener("click", (e) => {
  console.log(window.location.host,e.target.src)
  transform.src = e.target.src;
  if (e.target.src == `https://${window.location.host}/iphone-project/photos/0.png`) {
    document.body.style.backgroundColor = "#e4bf5d";
  }
  if (e.target.src == `https://${window.location.host}/iphone-project/photos/1.png`) {
    document.body.style.backgroundColor = "#94acc4";
  }
  if (e.target.src == `https://${window.location.host}/iphone-project/photos/2.png`) {
    document.body.style.backgroundColor = "#464541";
  }
  if (e.target.src == `https://${window.location.host}/iphone-project/photos/3.png`) {
    document.body.style.backgroundColor = "#e2ceb3";
  }
  if (e.target.src == `https://${window.location.host}/iphone-project/photos/4.png`) {
    document.body.style.backgroundColor = "#e60000";
  }
});
