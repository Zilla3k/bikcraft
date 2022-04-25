// Ativar links do 'nav'
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  url.includes;
  // '.includes', o valor da URL existe em HREF?
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

// Ativar items do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
    console.log(element);
  }
}

parametros.forEach(ativarProduto);
