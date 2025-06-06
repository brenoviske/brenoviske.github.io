// JavaScript BackEnd structure


// Adding some variables

const Textresume = `<p> Estou muito contente em te ter em meu portfolio, obrigado por reservar um tempo para conferi-lo <br>
                        Me chamo Breno, e sou um dedicado estudante de software, focado em continuar sempre aprendendo, afim de deixar uma marca positiva em meio ao mundo digital.
                    </p>
                    <p>
                        Desde pequeno, sempre gostei de jogar jogos eletrônicos, fossem eles de qualquer tipo, o que me fez me sentir interessado a entrar cada vez mais no mundo da tecnologia.
                        Aliado as minhas habilidades em matemática e lógica, mergulhei em meio ao mundo da programação e desenvolvimento digital em 2023, quando entrei na faculdade de Engenharia Mecânica, na UNESP.
                    </p>
                    <p> 
                        Hoje em dia, estudo na Faculdade de Tecnologia do Estado de São Paulo na cidade de São José dos Campos, no curso de Análise e Desenvolvimento de Sistemas(ADS).
                    </p>
                    <p>
                        Em meu tempo, gosto de ler, estudar e sair com amigos e familiares, experiências as quais considero me enriquecerem profundamente.
                    </p>
                    <p>
                        Obrigado por ler um pequeno pedaço de minha história, sinta-se a vontade para explorar e conhecer um pouco mais do meu mundo!
                    </p>`

const NewCertificates = `<p> Certificados </p
                        <ul> 
                            <li> Cambridge Assesment </li>
                            <p> Certificado de proeficiência B2 na língua inglesa, com pontuação máxima em conversação</p>
                            <br>
                            <li> Dois certificados de excelência em simulados nacionais Poliedro</li>
                            <p>  Colocado entre os melhores alunos na aplicação de simulados Poliedro, no ano de 2019</p>
                        </ul>
`

const CredentialsText = `<h5>Idade : 21 anos </h5>
                        <h5>Email : reisb6774@gmail.com</h5>`



const MoreText = `<p> Além do Português nativo e Inglês fluente <br>
                tem um nível intermediário em Espanhol e nível básico em Japonês </p>
                <p> Em experiências prévias,já trabalhei como auxiliar de relacionamento na empresa NipBR TELECOM <br> 
                Uma provedora de internet no vale do Paráiba </p>
                `



// Handling events

// Adding transition animations

const myObserver = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting === true){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element)=>{ myObserver.observe(element)})


// Adding more backend logic 

const Certificates = document.getElementById('certificates')
const resume = document.getElementById('aboutme')
const more = document.getElementById('more')



resume.onclick = function(){
    Upadatedisplay()
    maintext.innerHTML = Textresume
    credentials.innerHTML = CredentialsText
}


Certificates.onclick =function() {
    Upadatedisplay()
    maintext.innerHTML = NewCertificates
    credentials.innerHTML = ''


}


more.onclick = function(){
    Upadatedisplay()
    maintext.innerHTML = MoreText
    credentials.innerHTML= ''
}



function Upadatedisplay (){
    const maixtext = document.getElementById('maintext')
    const credentials = document.getElementById('credentials')
}

const Curriculum = document.getElementById('resumebtt')

