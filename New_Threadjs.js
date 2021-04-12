
    function thread(ti, a, t, i){
        this.id = i;
        this.titulo=ti;
        this.autor=a;
        now = new Date;
        this.data=now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
        this.texto=t;
        this.respostas_texto = [null];
        this.respostas_nome = [null];
        this.conta_resposta = 0;
    };


    function newthread(){

        if (localStorage.cont) {
            localStorage.cont = Number(localStorage.cont)+1;
            } else {
                localStorage.cont = 1;
            }

            post = new thread(document.getElementById('titulo').value, document.getElementById('nome').value, document.getElementById('texto').value, "thread"+localStorage.cont )
            myJSON = JSON.stringify(post);
            localStorage.setItem("thread"+localStorage.cont, myJSON);
            alert("Thread Criada!")         
    };
