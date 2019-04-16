# in the top

# 页面滑动，元素自动吸顶

## 预览地址
[in the top](https://pomelo-chuan.github.io/In-The-Top/)

## 安卓端实现方法

监听滚动，当滑动的距离大于需要吸顶元素距离顶部距离的时候，给需要吸顶的元素增加**position: fixed**属性。

## iOS端实现方法

iOS对于页面滑动监听非及时的，页面滑动停止才能取到滑动的距离，所以上面安卓实现效果的方法行不通，但是iOS设备支持**position: sticky**，借助该属性可以实现。

## 代码

```javascript
function inTheTop(node) {
    // iOS设备使用position: sticky
    const isIos = window.navigator.userAgent.indexOf('iPhone') >= 0;
    if (isIos) {
        node.classList.add('sticky');
        return;
    }

    // 页面滚动的距离
    const offsetTop = node.offsetTop;

    // 解决元素变为fixed时的抖动
    const stickyHolder = document.createElement('div');
    const rect = node.getBoundingClientRect();
    node.parentNode.replaceChild(stickyHolder, node);
    stickyHolder.appendChild(node);
    stickyHolder.style.height = rect.height + 'px';
    
    // 当页面滚动时
    window.onscroll = function (event) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > offsetTop) {
            node.classList.add('menu-fixed');
        } else {
            node.classList.remove('menu-fixed');
        }
    };
}
```

```css
.menu-fixed {
    position: fixed;
    top: 0;
    left: 0;
}

.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
}
```
