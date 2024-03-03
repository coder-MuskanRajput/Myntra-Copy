$('.searchInput').on('input',()=>{
    const inpLength = $('.searchInput').val()
    if(inpLength.length > 2){
        $.post('/searchInp',{
            title:inpLength
        },(data, status)=>{
            $('#search-result-ul').html('')
            if(data === 'not found' || data.length == 0){
                $('#search-result-ul').html(`no result found`)
            }else if(data.length >= 10 ){
                for (let i = 0; i < 10; i++) {
                  $('#search-result-ul').append(`<a href="/product/${data[i]._id}"><li>
                  <img src="${data[i].images[0]}" alt="">
                  <span>
                      <p>${data[i].title}</p>
                      <span class="spCate">${data[i].subCategory}</span>
                  </span>
              </li></a>`)
                }
            } else if(data.length <= 10 && data.length >= 1){
                data.forEach(element => {
                    $('#search-result-ul').append(`<a href="/product/${element._id}"><li>
                  <img src="${element.images[0]}" alt="">
                  <span>
                      <p>${element.title}</p>
                      <span class="spCate">${element.subCategory}</span>
                  </span>
              </li></a>`)
                });
            } 
        })
    } else{
        $('#search-result-ul').html('')
    }

})
