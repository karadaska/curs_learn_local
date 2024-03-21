
async function animals(){
    const lista_animale = await fetch ("https://dog.ceo/api/breeds/list/all");
    const list = await lista_animale.json();

    console.log(list);
}

