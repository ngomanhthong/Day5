var button = document.querySelector('.search_bth')

button.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    console.log(this.previousSibling);
    this.previousSibling.focus()
})