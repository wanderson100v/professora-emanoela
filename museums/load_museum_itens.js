class Museum{
    constructor(title, description, itens){
        this.title = title;
        this.description = description;
        this.itens = itens;
    }
}

class MuseumItem {
    constructor(autor, description, pictures){
        this.autor = autor;
        this.description = description;
        this.pictures = pictures;
    }
}

class PictureItem{
    constructor(title, description, url){
        this.title = title;
        this.description = description;
        this.url = url;   
    }
}


const museums = {
    sixthA: new Museum(
        title = "6º Ano A",
        description = "A seguir serão apresentados os itens em exposição selecionados"
        +"por alunos do 6º ano \"A\" da escola Cicero Rabelo Nogueira. Nesta "
        +"atividade foi requisitado aos alunos que escolhessem"
        +"itens antigos que estão na posse de familiares ou conhecidos",
        itens = [

            new MuseumItem(
                autor = "Eliza",
                description = "Uma antiga bomba para água manual. Esses equipamentos"
                    +" foram e são utilizados para retirar água de poços de forma manual"
                    +" Desta forma, é necessário aplicar força para que se possa retirar"
                    +" a água do poço.",
                pictures = [
                    new PictureItem(
                        title = "Bomba d\'àgua manual",
                        description = "Bomba antiga para bombear água de forma manual", 
                        url = "sixth_a/Eliza-bomba-dagua.png"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Eduardo Oliveira",
                description = "Parte de um pilão, geralmente utilizado para moer grãos"
                    +" como o do milho.",
                pictures = [
                    new PictureItem(
                        title = "Pilão de madeira",
                        description = "Parte de um pilão de madeira ", 
                        url = "sixth_a/Eduardo-Oliveira.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Gleissy Firmino",
                description = "Este item é uma boneca antiga. Segundo a aluna essa "+
                    "boneca foi adiquirida quando sua tia naceu, e tem mais de 60 anos "+
                    "desde então é um item importante para a família.",
                pictures = [
                    new PictureItem(
                        title = "Boneca ",
                        description = "Boneca antiga", 
                        url = "sixth_a/Gleissy-Firmino-boneca.png"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Levi",
                description = "Espelho antigo.",
                pictures = [
                    new PictureItem(
                        title = "Espelho ",
                        description = "espelho antigo", 
                        url = "sixth_a/Levi-espenho.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Marcio",
                description = "Bolsa antiga",
                pictures = [
                    new PictureItem(
                        title = "Bolsa ",
                        description = "bolsa antiga", 
                        url = "sixth_a/Marcio-bolsa.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Maria Tereza",
                description = "Nota de mil fruzeiros",
                pictures = [
                    new PictureItem(
                        title = "Frente da nota ",
                        description = "frente de uma nota de mil cruzeiros", 
                        url = "sixth_a/Maria-Teraza-nota-mil-cruzeiros-frente.jpeg"
                    ),
                    new PictureItem(
                        title = "Verso da nota",
                        description = "verso de uma nota de mil cruzeiros", 
                        url = "sixth_a/Maria-Teraza-nota-mil-cruzeiros-verso.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Pedro",
                description = "Ferro de passar e panela de barro",
                pictures = [
                    new PictureItem(
                        title = "Ferro de passar ",
                        description = "Ferro de passar antigo", 
                        url = "sixth_a/Pedro-ferro-de-passar.jpeg"
                    ),
                    new PictureItem(
                        title = "Panela de barro",
                        description = "Panela de barro antiga", 
                        url = "sixth_a/Pedro-panela-de-barro.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Pedro",
                description = "Várias objetos de barros: potes, bacias e panelas",
                pictures = [
                    new PictureItem(
                        title = "Panelas de barro ",
                        description = "Várias panelas de barro empilhadas", 
                        url = "sixth_a/Pedro-penelas-de-barro-empilhadas.jpeg"
                    ),
                    new PictureItem(
                        title = "Potes de barro",
                        description = "Panela de barro antiga", 
                        url = "sixth_a/Pedro-potes-de-barro.jpeg"
                    ),

                    new PictureItem(
                        title = "Outros objetos",
                        description = "Mais objetos de barro", 
                        url = "sixth_a/Pedro-penelas-de-barro-outros-objetos.jpeg"
                    )
                ]
            ),
            
        ]
    ),
    sixthD: new Museum(
        title = "6º Ano D",
        description = "A seguir serão apresentados os itens em exposição selecionados"
        +" por alunos do 6º ano \"D\" da escola Cicero Rabelo Nogueira. Nesta"
        +" atividade foi requisitado aos alunos que escolhessem"
        +" itens antigos que estão na posse de familiares ou conhecidos",
        itens = [

            new MuseumItem(
                autor = "Aline",
                description = "Moeda de 1986",
                pictures = [
                    new PictureItem(
                        title = "Moeda antiga",
                        description = "Moeda antiga de 1986", 
                        url = "sixth_d/Aline-moeda.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Cicera",
                description = "Cabaça com rolha.",
                pictures = [
                    new PictureItem(
                        title = "Cabaça",
                        description = "Cabaça antiga com rolha", 
                        url = "sixth_d/Cicera-cabaca.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Emerson",
                description = "Ferro de passar a braza",
                pictures = [
                    new PictureItem(
                        title = "Ferro de passar",
                        description = "Ferro de passar antigo movido a base de braza/carvão", 
                        url = "sixth_d/Emerson-Ferro-de-passar.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Ivania",
                description = "A seguir, a Ivania, nós apresenta um moedor de milho."+
                    " O milho moido é a base para diversas comidas típicas como, angu, "+
                    "cuscuz, bolos entre outros. ",
                pictures = [
                    new PictureItem(
                        title = "Moedor de milho",
                        description = "Moedor de milho", 
                        url = "sixth_d/Ivania-moedor.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "João Vitor",
                description = "Panela de barro",
                pictures = [
                    new PictureItem(
                        title = "Panela de barro",
                        description = "Panela de barro", 
                        url = "sixth_d/João-vitor-panela.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Michelly",
                description = "Moedas antigas",
                pictures = [
                    new PictureItem(
                        title = "Moeda de 1 centavo",
                        description = "Frente de uma moeda de 1 centavo", 
                        url = "sixth_d/Michelly-moeda-1-centavo-frente.png"
                    ),
                    new PictureItem(
                        title = "Verso de moeda de 1 centavo",
                        description = "Verso de uma moeda de 1 centavo", 
                        url = "sixth_d/Michelly-moeda-1-centavo-verso.png"
                    ),
                    new PictureItem(
                        title = "Moeda de 5 cruzeiros",
                        description = "frente de uma moeda de 5 cruzeiros", 
                        url = "sixth_d/Michelly-moeda-5-cruzeiros-frente.png"
                    ),
                    new PictureItem(
                        title = "Verso de 5 cruzeiros",
                        description = "verso de uma moeda de 5 cruzeiros", 
                        url = "sixth_d/Michelly-moeda-5-cruzeiros-verso.png"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Natan",
                description = "Ferro de fornalha",
                pictures = [
                    new PictureItem(
                        title = "Ferro de fornalha",
                        description = "Ferro de fornalha", 
                        url = "sixth_d/Natan-ferro-fornalha.jpeg"
                    )
                ]
            ),
        ]
    ),
    sixthE: new Museum(
        title = "6º Ano E",
        description = "A seguir serão apresentados os itens em exposição selecionados"
        +" por alunos do 6º ano \"E\" da escola Cicero Rabelo Nogueira. Nesta"
        +" atividade foi requisitado aos alunos que escolhessem"
        +" itens antigos que estão na posse de familiares ou conhecidos",
        itens = [

            new MuseumItem(
                autor = "Angela",
                description = "Moeda",
                pictures = [
                    new PictureItem(
                        title = "Moeda antiga",
                        description = "Verso de uma moeda antiga", 
                        url = "sixth_e/Angela-moeda-objeto.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Dayvison",
                description = "Candeeiro",
                pictures = [
                    new PictureItem(
                        title = "Candeeiro",
                        description = "Candeeiro", 
                        url = "sixth_e/Dayvison-candeeiro.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Emilly",
                description = "Candeeiro",
                pictures = [
                    new PictureItem(
                        title = "Candeeiro",
                        description = "Candeeiro", 
                        url = "sixth_e/Emilly-candeeiro.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Gustavo",
                description = "Moedas antigas",
                pictures = [
                    new PictureItem(
                        title = "Moeda de 1 cruzeiro de 1980",
                        description = "Frente de uma moeda de 1 cruzeiro de 1980", 
                        url = "sixth_e/Gustavo-moeda-1-cruzeiro.jpeg"
                    ),
                    new PictureItem(
                        title = "Moeda de 10 centavos de 1974",
                        description = "Frente de uma moeda de 10 centavos de 1974", 
                        url = "sixth_e/Gustavo-moeda-10-centavos.jpeg"
                    ),
                    new PictureItem(
                        title = "Moeda de 20 centavos de 1970",
                        description = "Frente de uma moeda de 20 centavos de 1970", 
                        url = "sixth_e/Gustavo-moeda-20-centavos.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Janaína",
                description = "Pote de barro",
                pictures = [
                    new PictureItem(
                        title = "Pote de barro",
                        description = "Pote de barro", 
                        url = "sixth_e/Janaina-pote.jpeg"
                    )
                ]
            ),
        ]  
    ),
    seventhA: new Museum(
        title = "7º Ano A",
        description = "A seguir serão apresentados os itens em exposição selecionados"
        +" por alunos do 6º ano \"A\" da escola Cicero Rabelo Nogueira. Nesta"
        +" atividade foi requisitado aos alunos que escolhessem"
        +" itens antigos que estão na posse de familiares ou conhecidos",
        itens = [

            new MuseumItem(
                autor = "Mavielly",
                description = "Candeeiro e catiçal",
                pictures = [
                    new PictureItem(
                        title = "Candeeiro",
                        description = "Candeeiro", 
                        url = "seventh_a/Mavielly-candeeiro.jpeg"
                    ),
                    new PictureItem(
                        title = "Castiçal",
                        description = "Castiçal", 
                        url = "seventh_a/Mavielly-castical.jpeg"
                    )
                ]
            ),

            new MuseumItem(
                autor = "Viviane",
                description = "Ferro de passar roupas",
                pictures = [
                    new PictureItem(
                        title = "Ferro de passar",
                        description = "Ferro de passar roupas", 
                        url = "seventh_a/Viviane-ferro-de-passar.jpeg"
                    )
                ]
            ),
        ]
    )
};


var museum;

if(document.URL.indexOf("sixth/a") >= 0){ 
    museum = museums.sixthA;
}else if(document.URL.indexOf("sixth/d") >= 0){
    museum = museums.sixthD;
}else if(document.URL.indexOf("sixth/e") >= 0){
    museum = museums.sixthE;
}else if(document.URL.indexOf("seventh/a") >= 0){
    museum = museums.seventhA;
}

document.getElementById("museum-title").innerHTML = museum.title;
document.getElementById("museum-description").innerHTML = museum.description;

museumElement = document.getElementById("museum");
console.log(museumElement);
museum.itens.map(function(museumItem){
    let article = document.createElement("article")
    article.setAttribute("class","museum-item");

    picturesString = "";
    museumItem.pictures.forEach(function(picture) {
        picturesString = picturesString + 
            "<div class='centralized-img-container'>"+
                "<h4>"+picture.title+"</h4>"+
                "<img src='../../res/figures/"+picture.url+"'" 
                    + "title=\""+picture.title+"\" alt=\""+picture.description+"\" >\n" +
            "</div>";
    });

    article.innerHTML = 
            "<h3>Autor: "+museumItem.autor+"</h3>"+
            "<p>"+museumItem.description+"</p>"+
            picturesString;

    museumElement.appendChild(article);
}
);