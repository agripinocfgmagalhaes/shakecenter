function id( el ){
        //return document.getElementById( el );
        return $( el );
}
function calcTotal( un01, qnt01 )
{
        return un01 * qnt01;
}
function getElementParent(event){
    return event.srcElement.parentNode.parentNode.getAttribute('id');
}
function getValorUnitario(elParent){
    return $('#'+elParent+' .class_unit input').val();
}
function getQuantidade(elParent){
    return $('#'+elParent+' .class_quant input').val();
}
function setFieldTotal(elParent, valueUnit, valueQuant){
    id('#'+elParent+' .class_total input').val(calcTotal( valueUnit , valueQuant));
    setTotalFinal();
}
function setTotalFinal(){
    
    var total = 0;
    $('#table-shop tr .class_total input').each(function(){
        if(this.value != ''){
        var valor = this.value;
        total += parseInt(valor);
        }
    });
    $('#total .value_total').html(total);
    $('#total .value_total').val(total);
}
$(document).ready(function(){
        id('#table-shop tr .class_unit').keyup(function(event)
        {
            var elemenPai = getElementParent(event);
            var valueUnit = getValorUnitario(elemenPai);
            var valueQuant = getQuantidade(elemenPai);

            setFieldTotal(elemenPai, valueUnit , valueQuant);
        });      
       
        id('#table-shop tr .class_quant').keyup(function(event)
        {
            var elemenPai = getElementParent(event);
            var valueUnit = getValorUnitario(elemenPai);
            var valueQuant = getQuantidade(elemenPai);

            setFieldTotal(elemenPai, valueUnit , valueQuant);
        });
});
