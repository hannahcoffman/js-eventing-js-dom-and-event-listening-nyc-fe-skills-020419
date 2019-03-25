// problem is we want to react to clicks on the <main> tag 

const main = document.getElementById('main')

// AddEventListener has 2 options 
// 1. is the event that we care about 
// 2. is the function that is supposed to run when that event happens 

function onClick() {
  console.log('hey the click happened')
}

main.addEventListener('click', onClick)

// document level evetns: online/offline, global help button/scrolling 

// order matters - will always take first for the event

document.addEventListener('online/offline', onClick)


