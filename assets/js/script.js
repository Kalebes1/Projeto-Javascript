const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

// Listagem dos Animes
animesJson.map((item, index)=>{
    let animeItem = c('.models .anime-item').cloneNode(true);

    animeItem.setAttribute('data-key',index);
    animeItem.querySelector('.anime-item--img img').src = item.img;
    animeItem.querySelector('.anime-item--name').innerHTML = item.name;
   
    animeItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.anime-item').getAttribute('data-key');

        c('.animeBig img').src = animesJson[key].img;
        c('.animeInfo h1').innerHTML = animesJson[key].name;
        c('.animeInfo--desc').innerHTML = animesJson[key].description;
        c('.animeInfo--size span').innerHTML = animesJson[key].note;

        c('.animeWindowArea').style.opacity = 0;
        c('.animeWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.animeWindowArea').style.opacity = 1;
        }, 50)
        
    })

    c('.anime-area').append(animeItem);
});

// Eventos do MODAL
function closeModal(){
    c('.animeWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.animeWindowArea').style.display = 'none';
    }, 500);
}
cs('.anime-item--close, .animeInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});