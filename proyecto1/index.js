const url = "https://jsonplaceholder.typicode.com/users";
const url2="https://jsonplaceholder.typicode.com/albums";


const datos= async()=>{
    const inicio=performance.now();

    const urli= await fetch(url);
    const data=await urli.json();
    console.log(data);
    console.log("iniciando 2 consulta");
    const urli2= await fetch(url2);
    const data2=await urli2.json();
    console.log(data2);
    const fin=performance.now();
    console.log(`ejecucion primer async:${fin-inicio} ms`);
}

datos();
const datos2= async()=>{
    const inicio=performance.now();

    const [urli,urli2]= await Promise.all([fetch(url),fetch(url2)]);
    const data=await urli.json();
    const data2=await urli2.json();

    const fin=performance.now();
    console.log(`ejecucion segundo async:${fin-inicio} ms`);


}
datos2();

