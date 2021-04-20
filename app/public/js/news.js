console.log('hello')

const $button = document.querySelector('button');
const $ul = document.querySelector('ul');

function render(list, $container) {
  list.forEach(item => {
    let $li = document.createElement('li')
    let $a = document.createElement('a')
    $a.innerText = item.title
    $li.appendChild($a)
    $container.appendChild($li)
  });
}

$button.onclick = async function() {
  let data = await (await fetch('/api/news')).json();
  console.log(data)
  render(data.list, $ul)
}