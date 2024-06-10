let myicon=document.getElementById(`icon`)
let flyin=document.getElementById(`flyin`)
let main=document.getElementById(`main`)


myicon.addEventListener(`click`,function(event){
    event.stopPropagation()
    if(flyin.classList.contains(`edit-delete-box`)){
        flyin.classList.remove(`edit-delete-box`)
        flyin.classList.add(`edit-delete-box-new`)
       }
       else if(flyin.classList.contains(`edit-delete-box-new`)){
        flyin.classList.remove(`edit-delete-box-new`)
        flyin.classList.add(`edit-delete-box`)
       }
})

function close(){
    
    if(flyin.classList.contains(`edit-delete-box-new`)){
        flyin.classList.remove(`edit-delete-box-new`)
        flyin.classList.add(`edit-delete-box`)
       }
}

main.addEventListener(`click`,close)




