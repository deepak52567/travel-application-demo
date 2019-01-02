function toggleItem(condition) {
    var header = document.getElementsByTagName('header')[0],
        navbar = document.getElementsByTagName('nav')[0];

        headerHeight = header.offsetHeight;
        navbarHeight = navbar.offsetHeight;

        navbar.classList.toggle('down');

    if(condition === 'add') {
        console.log('inside add');
        header.style.marginTop = '-' + headerHeight + 'px';
        navbar.style.marginBottom = '-' + navbarHeight + 'px';
    } else if(condition === 'remove') {
        console.log('inside remove');
        header.style.marginTop = 'unset';
        navbar.style.marginBottom = 'unset';
    }
};

document.querySelectorAll('.item-card').forEach(element => {
    element.addEventListener('click', function(e){  
        e.preventDefault();
        console.log(this.classList.contains('active'));
        if(!this.classList.contains('active')) {
            console.log('inside item-event');
            toggleItem('add');
            document.getElementsByTagName('main')[0].classList.toggle('active');
            this.classList.add('active');
        }
    })    
});


document.querySelectorAll('.card-close-btn').forEach(element => {
    element.addEventListener('click', function(e){  
        e.preventDefault();
        this.parentElement.classList.remove('active');
        toggleItem('remove');
        document.getElementsByTagName('main')[0].classList.remove('active');
    })
});