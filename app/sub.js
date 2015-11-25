//我们这里使用CommonJS的风格
export default function generateText() {
    var element = document.createElement('h3');
    element.innerHTML = "Hello h3 world";
    return element;
}
