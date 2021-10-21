const Email = document.getElementById('email')
const Password = document.getElementById('Password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages =[]

    if(Password.value === ''||Password.value === null){
        messages.push('must be field')
    }
    if(Password.value.length <=8){
        messages.push('Password minimal 8 ')
            }
    if(Password.value.length >=10){
        messages.push('Password Maximal 10')
            }

    if (!/[A-Z]/.test(Password.value)) {
        messages.push('Password must contain uppercase!')
    }

    if (!/[0-9]/.test(Password.value)) {
        messages.push('Password must contain numeric!')
    }
        if(messages.length >0){
            e.preventDefault()
            errorElement.innerText = messages.join(',')
        }
})