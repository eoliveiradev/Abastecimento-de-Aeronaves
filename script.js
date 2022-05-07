function calculate(){
    //Input variables
    const margemEmergencia = 1.3 //30%
    const lPorKm = parseFloat(document.querySelector('#lPorKm').value);
    const combustivelNoTanque = parseFloat(document.querySelector('#combustivelNoTanque').value);
    const capacidadeMaxTanque = parseFloat(document.querySelector('#capacidadeMaxTanque').value);
    const distanciaTrecho1 = parseFloat(document.querySelector('#distanciaTrecho1').value);
    const distanciaTrecho2 = parseFloat(document.querySelector('#distanciaTrecho2').value);
    
    //Out put containers
    const aguardando = document.querySelector("#aguardando")
    const aprovedContainer = document.querySelector('#aproved')
    const notAprovedContainer = document.querySelector('#not-aproved')
    //Out put variables if aproved
    const trechoPrincipalResult = document.querySelector('#trechoPrincipal');
    const trechoAalternativoResult = document.querySelector('#trechoAlternativo');
    const trechoCMargemResult = document.querySelector('#trechoCMargem');
    const qntCombNecessariaResult = document.querySelector('#qntCombNecessaria');
    const qntAbastecerResult = document.querySelector('#qntAbastecer');

    //Boring math '-'
    const distanciaTotal = (distanciaTrecho1 + distanciaTrecho2) * margemEmergencia;
    const combustivelNecessario = distanciaTotal * lPorKm;
    let combustivelAbastecer = combustivelNecessario - combustivelNoTanque;
    
    if (combustivelAbastecer < 0){
        combustivelAbastecer = 0;
    }

    if (combustivelNecessario > capacidadeMaxTanque){
        aguardando.classList.add('hidden');
        aprovedContainer.classList.add('hidden');
        notAprovedContainer.classList.remove('hidden');
    }
    else if(combustivelNecessario < capacidadeMaxTanque){
        aguardando.classList.add('hidden');
        aprovedContainer.classList.remove('hidden');
        notAprovedContainer.classList.add('hidden')
        trechoPrincipalResult.textContent = distanciaTrecho1 + " KM";
        trechoAalternativoResult.textContent = distanciaTrecho2 + " KM";
        trechoCMargemResult.textContent = distanciaTotal + " KM";
        qntCombNecessariaResult.textContent = combustivelNecessario + " L";
        qntAbastecerResult.textContent = combustivelAbastecer + " L";
    }
}







function resetButton(){
    location.reload()
}