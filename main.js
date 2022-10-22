
const notificationFields=[...document.querySelectorAll(".notification--grid--item")]
const unreadNotifications = [...document.querySelectorAll(".checkmark--unread")]
const markReadButton = document.querySelector(".mark--read")
let unreadCounter = document.querySelector(".notification-number")
unreadCounter.innerHTML=unreadNotifications.length



//toggle read by click on notification
for (let count = 0;count<notificationFields.length;count ++){
    notificationFields[count].addEventListener("click",()=>{
        if(notificationFields[count].dataset.id===unreadNotifications[count].dataset.id
            && unreadCounter.innerHTML!= 0 
            && unreadNotifications[count].classList.contains("checkmark--unread")){
            unreadCounter.innerHTML-=1
            unreadNotifications[count].classList.remove("checkmark--unread")
          

        }
    })
}
//toggle all read
markReadButton.addEventListener("click",()=>{
    unreadNotifications.forEach((e)=>{e.classList.remove("checkmark--unread")
    unreadCounter.innerHTML="0"

})})