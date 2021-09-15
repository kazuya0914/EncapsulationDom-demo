window.dom = {
  create(string) {//创建节点
    const container = document.createElement("template")
    container.innerHTML = string.trim()
    return container.content.firstChild
  },
  after(node, newNode) {//节点后 新增节点
    node.parentNode.insertBefore(newNode, node.nextSibling) //先找到父节点，调用insertBefore把新节点插入到node的下一个节点的前面
  },
  before(node, newNode) {//节点前 新增节点
    node.parentNode.insertBefore(newNode, node)
  },
  append(parent, node) {//新增子节点
    parent.appendChild(node)
  },
  wrap(node, parent) {//新增父节点
    dom.before(node, parent)//将新的父节点插入到目标节点前
    dom.append(parent, node)//把目标节点变为子节点
  },
  remove(node) {//删除节点
    node.parentNode.removeChild(node)
    return node
  },
  empty(node) {//删除子节点
    const {childNodes} = node
    const array = []
    let x = node.firstChild
    while (x) {
      array.push(dom.remove(node.firstChild))
      x = node.firstChild
    }
    return array
  },
  attr(node, name, value) {//改写或读取属性
    if (arguments.length === 3) {//如果有三个参数，就是改写属性
      node.setAttribute(name, value)
    } else if (arguments.length === 2) {//如果是两个参数，就读取属性
      return node.getAttribute(name)
    }
  },
  text(node, string) {//新增文本内容
    if (arguments.length === 2) {
      if ('innerText' in node) {//适配
        node.innerText = string
      } else {
        node.textContent = string
      }
    } else if (arguments.length === 1) {
      if ('innerText' in node) {//适配
        return node.innerText
      } else {
        return node.textContent
      }
    }
  },
  html(node, string) {//读写html内容
    if (arguments.length === 2) {
      node.innerHTML = string
    } else if (arguments.length === 1) {
      return node.innerHTML
    }
  },
  style(node, name, value) {//读写样式
    if (arguments.length === 3) {//dom.style(div, 'color', 'red')
      node.style[name] = value
    } else if (arguments.length === 2) {
      if (typeof name === 'string') {//dom.style(div, 'color')
        return node.style[name]
      } else if (name instanceof Object) {
        const object = name
        for (let key in object) {
          node.style[key] = object[key]
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className)
    },
    remove(node, className) {
      node.classList.remove(className)
    },
    contains(node, className) {
      return node.classList.contains(className)
    }
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
  },
  find(selector, scope) {//获取标签或标签们
    return (scope || document).querySelectorAll(selector)
  },
  parent(node) {//获取父元素
    return node.parentNode
  },
  children(node) {//获取子元素
    return node.children
  },
  siblings(node) {//获取兄弟元素
    return Array.from(node.parentNode.children)
      .filter(n => n !== node)
  },
  next(node) {//获取弟弟元素
    let x = node.nextSibling
    while (x && x.nodeType === 3) {
      x = x.nextSibling
    }
    return x
  },
  previous(node) {//获取哥哥元素
    let x = node.previousSibling
    while (x && x.nodeType === 3) {
      x = x.previousSibling
    }
    return x
  },
  each(nodeList, fn) {//遍历所有节点
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i])
    }
  },
  index(node) {//查看当前节点的排名
    const list = dom.children(node.parentNode)
    let i
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break
      }
    }
    return i
  }
};
