const Email = document.getElementById('Email')
const form = document.getElementById('form')
const errorElement = document.getElementById('Error')
const address = document.getElementById('address')
const Phone = document.getElementById('Phone')
const Name = document.getElementById('name')

form.addEventListener('submit',(e)=>{
    let messages =[]
        if(Email.value === ""||Email.value === null){
            messages.push('Email must be filled')
        }
        if (name.value === ""||name.value === null) {
            messages.push('Please Input Your Fullname!')
        }
        if (!/^[a-zA-Z]*$/g.test(name.value)) {
                messages.push('Fullname Must be Letter!')
         }
         if(address.value === ''||address.value === null){
            messages.push('Address is required')
        }
        if(Phone.value.length <=6){
            messages.push('Phone Must Be More Than 6 Characters')
        }
        if(Phone.value.length >= 13){
            messages.push('Phone Must Be Less Than 13 Characters')
        }


  if(messages.length >0){
      e.preventDefault()
      errorElement.innerText = messages.join(',')
  }
})