async function picioare(){
    const lista = await fetch ("");
    const list = await lista.json();
    console.log(list);
}