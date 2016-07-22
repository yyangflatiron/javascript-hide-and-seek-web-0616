function getFirstSelector(selector){
  var target = document.querySelector(`${selector}`)
  return target
}


function nestedTarget(){
  var search = document.getElementById('nested').children[0].children[0].children[0].children[0]
  return search
}

function deepestChild(){
  var y = document.getElementById('grand-node')
  while(y.children[0]!=null){y = y.children[0]}
  return y
}

function increaseRankBy(n){
  var array = document.querySelectorAll('ul.ranked-list li');
  for(let i=0;i < array.length; i++){
    array[i].innerHTML = (parseInt(array[i].innerHTML)+n)
  }
  // USING forEach
  // document.querySelectorAll('ul.ranked-list li').forEach((element)
  //   =>{element.innerHTML = parseInt(element.innerHTML)+n})
}
