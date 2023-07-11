

const $search = document.querySelector("#pesquisar");


const showData = (result) => {
    for(let field in result){
        if(document.querySelector(`#${field}`)){
            document.querySelector(`#${field}`).value = result[field]
        }
    }
}

const $warning = document.createElement("div");
const $sectionFather = document.querySelector("section");
$sectionFather.appendChild($warning);

$search.addEventListener('blur', (e) => {
     

    if($search.value.length < 8 ){
       
        invalidCEP();
        clearField();
    }while($search.value.length >= 8){

            const newValue = $search.value.replace(/(\d{5})(\d{3})/, "$1-$2");
            $search.value = newValue;
            
            getAPI($search.value);
            console.log(document.querySelector("#localidade").value)
            if(document.querySelector("#localidade").value !== null || document.querySelector("#localidade").value !== ""){
                $warning.className = "text-success text-center fw-bold valid";
                $warning.innerHTML = "CEP VÁLIDO";
                
            }
            break
       
        
    }
    

});

function getAPI(res){
    res = res.replace('-', '');
    res = res.replace(res[-1], "");
    const options = {
        method: 'GET', 
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${res}/json/unicode`, options)
    .then(response => {response.json()
    .then(data => showData(data))
    })
    
    .catch(error => invalidCEP());
}

function clearField(){
    let $fields = document.querySelectorAll("section form fieldset input");
    $fields.forEach(element => {
        element.value = '';
    });
}

function invalidCEP(){
    $warning.className = "text-danger text-center fw-bold invalid";
    $warning.innerHTML = "CEP INVÁLIDO";
}



