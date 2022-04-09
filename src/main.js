import _ from 'lodash'
const dom = document.createElement('div')
dom.innerHTML = 'hello,world11'
document.body.appendChild(dom)
const obj = _.assign({}, { a: 1 })
console.log(obj)
