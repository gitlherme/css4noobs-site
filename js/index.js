const boasVindas = document.querySelector('#boas-vindas')
const comunicacao = document.querySelector('#comunicacao')
const oqvps = document.querySelector('#oqvps')
const oqec = document.querySelector('#oqec')
const cocf = document.querySelector('#cocf')
const qav = document.querySelector('#qav')
const acnh = document.querySelector('#acnh')

const resultContent = document.querySelector('.result')


const mobileScreen = window.matchMedia('(max-width: 700px)')

function redirectToPage(modulo, item) {
  const baseUrl = `http://github.com/mathh95/css4noobs/tree/master/${modulo}/${item}.md`
  window.open(baseUrl)
}

function clearElement(element) {
  element.innerHTML = ""
}

function printResult(md){
  clearElement(resultContent)
  let zeroMd = document.createElement('zero-md')
  zeroMd.setAttribute('src', md)
  resultContent.appendChild(zeroMd)
  document.innerHTML = resultContent
}


boasVindas.addEventListener('click', () => {
    let md = 'md/introducao/boas-vindas.md'
    mobileScreen.matches ? redirectToPage('Introducao', 'boas-vindas') : printResult(md)
  }
)

comunicacao.addEventListener('click', () => {
  let md = 'md/introducao/comunicacao.md'
  mobileScreen.matches ? redirectToPage('Introducao', 'comunicacao') : printResult(md)
}
)

oqvps.addEventListener('click', () => {
  let md = 'md/introducao/o-que-voce-precisa-saber.md'
  mobileScreen.matches ? redirectToPage('Introducao', 'o-que-voce-precisa-saber') : printResult(md)
}
)

oqec.addEventListener('click', () => {
  let md = 'md/introducao/o-que-e-css.md'
  mobileScreen.matches ? redirectToPage('Introducao', 'o-que-e-css') : printResult(md)
}
)

cocf.addEventListener('click', () => {
  let md = 'md/introducao/como-o-css-funciona.md'
  mobileScreen.matches ? redirectToPage('Introducao', 'como-o-css-funciona') : printResult(md)
}
)

qav.addEventListener('click', () => {
  let md = 'md/introducao/quais-suas-vantagens.md'
  mobileScreen.matches ? redirectToPage('Introducao', 'quais-suas-vantagens') : printResult(md)
}
)

acnh.addEventListener('click', () => {
  let md = 'md/introducao/adicionando-css-no-html.md'
  mobileScreen.matches ? redirectToPage('Introducao', 'adicionando-css-no-html') : printResult(md)
}
)