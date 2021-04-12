init();
var thread;
function init(){
            var i = localStorage.getItem("aux");
            var obj = JSON.parse(i);
            let j;
            for(j=1;j<=localStorage.cont;j++){
                var y = localStorage.getItem("thread"+j)
                thread = JSON.parse(y);
                if(thread.titulo == obj.loc)
                    break;
            }

        const generator= `<div class="nav">
                <div class="titulo">${thread.titulo}</div>
                    <div class="autor-data">
                        <h2 class="nome">-${thread.autor}</h2>
                        <h2 class="nome">${thread.data}</h2>
                    <div>
                  </div>
                </div>
                <div class="btns">
                    <a href="/index.html" class="back"><div>Back</div></a>
                    <a href="/index.html" class="back" id="del" onclick="del()"><div>Delete</div></a>
                </div>
                <p class="texto">${thread.texto}</p>`;  
        document.querySelector('.corpo').innerHTML = generator;
        
    };

    function newreplie(){
        thread.respostas_texto[thread.conta_resposta] = document.getElementById('caixa-texto').value;
        thread.respostas_autor[thread.conta_resposta] = document.getElementById('nome').value;
        a = {id: thread.id, titulo: thread.titulo, autor: thread.autor, data: thread.data, texto: thread.texto, conta_resposta: thread.conta_resposta+1, 
            respostas_texto:thread.respostas_texto,
            respostas_autor:thread.respostas_autor};
        MyJSON = JSON.stringify(a);
        localStorage.setItem(thread.id, MyJSON);
    };

    function del(){
        localStorage.removeItem(thread.id); 
        localStorage.cont--;   
    };
    