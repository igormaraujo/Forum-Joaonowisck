var threads = [null];
var respostas = [null];
var ids = [null];

let pagina = 1;

inicio();
function inicio(){

    let i;
    for(i = 1;i<=localStorage.cont && i<=20; i++){
        var aux = localStorage.getItem('thread'+i);
        var obj = JSON.parse(aux);
        title = obj.titulo;
        threads.push(title);
        respostas.push(obj.conta_resposta);
        ids.push(obj.id);
    }

    const generator= conta(pagina, localStorage.cont)
        .map(i => `<div class="flex-min">
                    <a href="/Thread.html" class="titulo-menor" onclick=getnome("${threads[i]}") id="dados"><div>${threads[i]}</div></a>
                    <a href="/Thread.html" class="detalhes" onclick=getnome("${threads[i]}") id="dados"><div>Detalhes</div></a>
                    <div class="respostas">${respostas[i]} respostas</div>
                </div>` )
    .join(''); 
    document.querySelector('.conteudo').innerHTML = generator  
};

function conta(inicio,fim){
    let result = []
    for(number = inicio; number <= fim && number <= inicio+20; number++){
        result.push(number)
    }
    return result
};

document.getElementById('vermais').addEventListener('click',function(){
    
    if(pagina + 20 <= localStorage.cont){
        pagina+=20;
        let i;
        for(i = pagina;i<=localStorage.cont && i<=pagina+20; i++){
            var aux = localStorage.getItem('thread'+i);
            var obj = JSON.parse(aux);
            title = obj.titulo;
            threads.push(title);
            respostas.push(obj.conta_resposta);
        }


        const generator= conta(pagina, localStorage.cont)
            .map(i => `<div class="flex-min">
            <a href="/Thread.html" class="titulo-menor" onclick=getnome("${threads[i]}") id="dados"><div>${threads[i]}</div></a>
            <a href="/Thread.html" class="detalhes" onclick=getnome("${threads[i]}") id="dados"><div>Detalhes</div></a>
                        <div class="respostas">${respostas[i]} respostas</div>
                    </div>` )
        .join('');    
        document.querySelector('.conteudo').innerHTML = generator
    }
});

document.getElementById('vermenos').addEventListener('click',function(){
    
    if(pagina - 20>= 0){
        pagina-=20;
        let i;
        for(i = pagina;i<=localStorage.cont && i<=pagina+20; i++){
            var aux = localStorage.getItem('thread'+i);
            var obj = JSON.parse(aux);
            title = obj.titulo;
            threads.push(title);
            respostas.push(obj.conta_resposta);
        }


        const generator= conta(pagina, localStorage.cont)
            .map(i => `<div class="flex-min">
            <a href="/Thread.html" class="titulo-menor" onclick=getnome("${threads[i]}") id="dados"><div>${threads[i]}</div></a>
            <a href="/Thread.html" class="detalhes" onclick=getnome("${threads[i]}") id="dados"><div>Detalhes</div></a>
                        <div class="respostas">${respostas[i]} respostas</div>
                    </div>` )
        .join('');    
        document.querySelector('.conteudo').innerHTML = generator
    }
});

function getnome(j){
    var aux = {loc:j};
    str_json = JSON.stringify(aux);
    localStorage.setItem("aux", str_json);
};
