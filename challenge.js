let counter = document.getElementById('counter')
let number = parseInt(counter.innerText)
let pause = false

function numberIncrementer() {
  setInterval(function() {
      if (!pause) {
      number++;
      counter.innerText = number
  }}, 1000)
}

window.addEventListener('load', numberIncrementer)

let add = document.getElementById("+");

add.addEventListener('click', function() {
  number++;
  counter.innerText = number;
})

let subtract = document.getElementById("-");

subtract.addEventListener('click', function() {
  number--;
  counter.innerText = number;
})

let like = document.getElementById("<3")
let likeList = document.querySelector(".likes")
let likeCount = {};

like.addEventListener('click', function() {
  if (likeCount[`${number}`]) {
    likeCount[`${number}`] += 1;
  } else {
    likeCount[`${number}`] = 1;
  }

  if (likeList.querySelector(`[data-num = "${number}"]`)) {
    likeList.querySelector(`[data-num = "${number}"]`).innerHTML = `${number} has been liked <span>${likeCount[`${number}`]}</span> times`
  } else {
    likeList.innerHTML += `<li data-num=${number}>${number} has been liked <span>${likeCount[`${number}`]}</span> times</li>`
  }
})


let pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', function() {
  if (pauseButton.innerText === "pause") {
    pauseButton.innerText = 'resume'
    document.getElementById('+').disabled = true
    document.getElementById('-').disabled = true
    document.getElementById('<3').disabled = true
    document.getElementById('submit').disabled = true
    pause = true
  } else {
    pauseButton.innerText = 'pause'
    document.getElementById('+').disabled = false
    document.getElementById('-').disabled = false
    document.getElementById('<3').disabled = false
    document.getElementById('submit').disabled = false
    pause = false
  }
})

let commentForm = document.getElementById("comment-form")
let commentSection = document.querySelector(".comments")

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const comment = document.querySelector("input").value;
  let p = document.createElement("p")
  p.innerText = comment
  commentSection.appendChild(p)
  commentForm.reset()
})
