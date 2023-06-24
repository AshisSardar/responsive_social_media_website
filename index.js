// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');


//========================SIDEBAR========================//

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display='none';
        } else{
            document.querySelector('.notifications-popup').style.display='block';
            document.querySelector('#notifications.notification-count').style.display= 'none';
        }
    })
})

//=============================MESSAGES===============================//
//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex' ;
        }else{
            chat.style.display = 'none';
        }

    })
}



//search chat
messageSearch.addEventListener('keyup', searchMessage);

//highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})



// THEME/DISPLAY CUSTOMIZATION

//opens modal
const openThemeModel = () => {
    themeModal.style.display = 'grid';
}

//close modal
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//close modal
themeModal.addEventListener('click', closeThemeModel);

theme.addEventListener('click',openThemeModel);






//===================================FONTS===============================//
fontSizes.forEach(size => {
    let fontSize;

    if(size.classList.contains('font-size-1')){
        fontSize = '10 px';
    }else if(size.classList.contains('font-size-2')){
        fontSize = '13 px';
    } else if(size.classList.contains('font-size-3')){
        fontSize = '16 px';
    } else if(size.classList.contains('font-size-4')){
        fontSize = '19 px';
    }else if(size.classList.contains('font-size-5')){
        fontSize = '22 px';
    }
})
