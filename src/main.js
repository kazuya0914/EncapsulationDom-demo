// const after = dom.create('<div>after</div>')
// dom.after(test, after)
// const fatherDiv = dom.create('<div id="father"></div>')
// dom.wrap(test, fatherDiv)
// console.log(dom.empty(window.empty))
// dom.attr(test, 'title', 'hello')
// dom.text(test, '这是新加内容')
//
// dom.style(test, {border: '1px solid black', color: 'red'})
// console.log(dom.style(test, 'color'))
// dom.style(test, 'border', '1px solid red')
//
// dom.class.add(test, 'yellow')
// dom.class.add(test, 'black')
// console.log(dom.class.contains(test, 'black'))
// dom.class.remove(test, 'black')
// const fn = () => {
//   console.log('点击了')
// }
// dom.on(test, 'click', fn)
// // dom.off(test, 'click', fn)

const div = dom.find('#test')[0]
console.log(dom.find('.red', div)[0])
dom.style(div, 'color', 'red')
const divList = dom.find('.red')
console.log(divList)
dom.each(divList, (n) => console.log(n))

// console.log(dom.parent(test))
// console.log(dom.children(test2))
//
// console.log(dom.siblings(dom.find('#e2')[0]))
// console.log(dom.index(s2))