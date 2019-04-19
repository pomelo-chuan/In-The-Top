/*
 * @Author: chenchuan 
 * @Date: 2019-04-16 09:22:11 
 * @Last Modified by: chenchuan
 * @Last Modified time: 2019-04-18 16:18:04
 */
function inTheTop(node) {
    // iOS设备使用position: sticky
    const isIos = window.navigator.userAgent.indexOf('iPhone') >= 0;
    if (isIos) {
        node.classList.add('sticky');
        return;
    }
    // 页面滚动的距离
    const offsetTop =  node.offsetTop;
    console.log(offsetTop);

    // 解决元素变为fixed时的抖动
    // const stickyHolder = document.createElement('div');
    // const rect = node.getBoundingClientRect();
    // node.parentNode.replaceChild(stickyHolder, node);
    // stickyHolder.appendChild(node);
    // stickyHolder.style.height = rect.height + 'px';

    // 当页面滚动时
    window.onscroll = function (event) {
        console.log(event.target)
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop, offsetTop);
        if (scrollTop > offsetTop) {
            node.classList.add('menu-fixed');
        } else {
            node.classList.remove('menu-fixed');
        }
    };
}