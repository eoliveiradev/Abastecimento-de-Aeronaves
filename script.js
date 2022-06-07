function calculate(){
    //Input variables
    const input = {
        margemEmergencia : 1.3 /* 30% */,
        lPorKm : parseFloat(document.querySelector('#lPorKm').value),
        combustivelNoTanque : parseFloat(document.querySelector('#combustivelNoTanque').value),
        capacidadeMaxTanque : parseFloat(document.querySelector('#capacidadeMaxTanque').value),
        distanciaTrecho1 : parseFloat(document.querySelector('#distanciaTrecho1').value),
        distanciaTrecho2 : parseFloat(document.querySelector('#distanciaTrecho2').value)
    }

    
    //Out put containers
    const output = {
        aguardando : document.querySelector("#aguardando"),
        aprovedContainer : document.querySelector('#aproved'),
        notAprovedContainer : document.querySelector('#not-aproved'),
        //Out put variables if aproved
        trechoPrincipalResult : document.querySelector('#trechoPrincipal'),
        trechoAalternativoResult : document.querySelector('#trechoAlternativo'),
        trechoCMargemResult : document.querySelector('#trechoCMargem'),
        qntCombNecessariaResult : document.querySelector('#qntCombNecessaria'),
        qntAbastecerResult : document.querySelector('#qntAbastecer'),
    }


    //Boring math '-'
    const distanciaTotal = (input.distanciaTrecho1 + input.distanciaTrecho2) * input.margemEmergencia;
    const combustivelNecessario = distanciaTotal * input.lPorKm;
    let combustivelAbastecer = combustivelNecessario - input.combustivelNoTanque;
    
    if (combustivelAbastecer < 0){
        combustivelAbastecer = 0;
    }


    //Out put
    if (combustivelNecessario > input.capacidadeMaxTanque){
        output.aguardando.classList.add('hidden');
        output.aprovedContainer.classList.add('hidden');
        output.notAprovedContainer.classList.remove('hidden');
    }
    else if(combustivelNecessario < input.capacidadeMaxTanque){
        output.aguardando.classList.add('hidden');
        output.aprovedContainer.classList.remove('hidden');
        output.notAprovedContainer.classList.add('hidden')
        output.trechoPrincipalResult.textContent = input.distanciaTrecho1.toFixed(2) + " KM";
        output.trechoAalternativoResult.textContent = input.distanciaTrecho2.toFixed(2) + " KM";
        output.trechoCMargemResult.textContent = distanciaTotal.toFixed(2) + " KM";
        output.qntCombNecessariaResult.textContent = combustivelNecessario.toFixed(2) + " L";
        output.qntAbastecerResult.textContent = combustivelAbastecer.toFixed(2) + " L";
    }
}


function resetButton(){
    location.reload()
}