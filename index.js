const form = document.getElementsByTagName("form")[0]
const nameContainer = document.getElementById("nameContainer")
const storageKey = "name-memory"
const nameNode = document.getElementsByTagName("input")[0]
const nameShowed = localStorage.getItem(storageKey)
    nameContainer.innerText = nameShowed
form.onsubmit = e =>{
    e.preventDefault()

    localStorage.setItem(storageKey, nameNode.value)

    const nameShowed = localStorage.getItem(storageKey)
    nameContainer.innerText = nameShowed
}

form.onreset = e =>{
    e.preventDefault()
    localStorage.removeItem(storageKey)
    nameContainer.innerText = ""
    nameNode.value = ""
}

let i = 0
const timePassedtext = document.getElementsByTagName("span")[0]
setInterval(function(){
    i++
    sessionStorage.setItem("time-passed-memory", i)
    let timePassed = sessionStorage.getItem("time-passed-memory")
    console.log(timePassed);
    timePassedtext.innerText = timePassed
}, 1000)