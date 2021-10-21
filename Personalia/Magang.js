const SearchInput = document.getElementById('search');
const rows = document.querySelectorAll('tbody tr');
// console.log(rows);

SearchInput.addEventListener('keyup',function(event){
    // console.log(event);
    const q = event.target.value.toLowerCase();
    rows.forEach(row =>{
        // console.log(row);
        row.querySelector('td').textContent.toLowerCase().startsWith(q)? (row.style.display = "") : (row.style.display = 'none')
    });
})
