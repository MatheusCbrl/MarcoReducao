var calc = function () {
  var sal = document.getElementById('sal').value; // pegamos o valor que digitamos no input
  var insa_val = 1;
  //pega valor empresa01;
  var i = document.getElementById('empresa01');
  var empresa_val = i.options[i.selectedIndex].value;
  var total_sal = document.getElementById('totalprov01').value;
  var total_sal30_fim = sal * (30 / 100);
  document.getElementById('totalprov30').value = total_sal30_fim.toFixed(2);
  var total_Seguro = document.getElementById('totalSeguro01').value;
  var total_Inss_Fim = document.getElementById('totalinss').value;
  var total_Ir_fim = document.getElementById('totalir').value;
  var Sal_sem_inss = total_sal30_fim - total_Inss_Fim;
  var sal50_seminss_e_ir = total_sal30_fim - total_Inss_Fim - total_Ir_fim;

  //INSS
  if (total_sal30_fim <= 1045) {
    var inss_Init_fim = (7.5 / 100) * total_sal30_fim;
    document.getElementById('totalinss').value = inss_Init_fim.toFixed(2);
  }
  if (total_sal30_fim >= 1045.01 && total_sal30_fim <= 2089.6) {
    var inss_Init = (9 / 100) * total_sal30_fim;
    var inss_Init_fim = inss_Init - 15.67;
    document.getElementById('totalinss').value = inss_Init_fim.toFixed(2);
  }
  if (total_sal30_fim >= 2089.61 && total_sal30_fim <= 3134.4) {
    var inss_Init = (12 / 100) * total_sal30_fim;
    var inss_Init_fim = inss_Init - 78.36;
    document.getElementById('totalinss').value = inss_Init_fim.toFixed(2);
  }
  if (total_sal30_fim >= 3134.41 && total_sal30_fim <= 6101.06) {
    var inss_Init = (14 / 100) * total_sal30_fim;
    var inss_Init_fim = inss_Init - 141.04;
    document.getElementById('totalinss').value = inss_Init_fim.toFixed(2);
  }
  if (total_sal30_fim > 6101.06) {
    var inss_Init_fim = 713.1;
    document.getElementById('totalinss').value = inss_Init_fim.toFixed(2);
  }
  //IRPF
  if (total_sal30_fim - inss_Init_fim <= 1903.98) {
    var fim = 0;
    document.getElementById('totalir').value = fim.toFixed(2);
    //alert("Seu salario � menor ou igual a R$1903.98. Portanto n�o possui dedu��es de IR");
  }
  if (
    total_sal30_fim - inss_Init_fim >= 1903.99 &&
    total_sal30_fim - inss_Init_fim <= 2826.65
  ) {
    var ir_final = (7.5 / 100) * (total_sal30_fim - inss_Init_fim);
    var fim = ir_final - 142.8;
    document.getElementById('totalir').value = fim.toFixed(2);
  }
  if (
    total_sal30_fim - inss_Init_fim >= 2826.66 &&
    total_sal30_fim - inss_Init_fim <= 3751.05
  ) {
    var ir_final = (15 / 100) * (total_sal30_fim - inss_Init_fim);
    var fim = ir_final - 354.8;
    document.getElementById('totalir').value = fim.toFixed(2);
  }

  if (
    total_sal30_fim - inss_Init_fim >= 3751.06 &&
    total_sal30_fim - inss_Init_fim <= 4664.68
  ) {
    var ir_final = (22.5 / 100) * (total_sal30_fim - inss_Init_fim);
    var fim = ir_final - 636.13;
    document.getElementById('totalir').value = fim.toFixed(2);
  }

  if (total_sal30_fim - inss_Init_fim > 4664.68) {
    var ir_final = (27.5 / 100) * (total_sal30_fim - inss_Init_fim);
    var fim = ir_final - 869.1336;
    document.getElementById('totalir').value = fim.toFixed(2);
  }

  //SEGURO desemprego
  if (sal < 1599.61) {
    var x = (80 / 100) * sal;
    var total_seguro_fim = (70 / 100) * x;
    document.getElementById('totalSeguro01').value = total_seguro_fim.toFixed(
      2
    );
  }

  if (sal >= 1599.61 && sal <= 2666.29) {
    var dim = sal - 1599.61;
    var x = (50 / 100) * dim;
    var y = 1279.69 * (100 / 100);
    var z = x + y;
    var total_seguro_fim = z * (70 / 100);
    document.getElementById('totalSeguro01').value = total_seguro_fim.toFixed(
      2
    );
  }
  if (sal >= 2666.29) {
    var total_seguro_fim = 1813.03 * (70 / 100);
    document.getElementById('totalSeguro01').value = total_seguro_fim.toFixed(
      2
    );
  }

  //sem adicional
  if (insa_val == 1) {
    var salario100 = sal * (100 / 100);
    var salario50 = sal * (50 / 100);
    var seguro = total_Seguro * (100 / 100);
    var inss = inss_Init_fim * (100 / 100);
    var ir = fim * (100 / 100);
    var salario51 = salario50 - (inss + ir);
    var total = salario51 + total_seguro_fim;
    document.getElementById('totalprov01').value = salario100.toFixed(2);
    document.getElementById('totalajuda01').value = salario51.toFixed(2);
    document.getElementById('totalrecebe01').value = total.toFixed(2);
  }
  //Rancho
  if (sal <= 3135 && empresa_val == 1) {
    var x = 100 * (100 / 100);
    document.getElementById('valeRancho').value = x.toFixed(2);
  } else {
    document.getElementById('valeRancho').value = ' ';
  }
};
