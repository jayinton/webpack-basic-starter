import './main.less';
import generateText from './sub';
import $ from 'jquery';

var url = 'https://leancloud.cn:443/1.1/classes/FeedBack?limit=10&skip=10&order=-updatedAt&&'
$.ajax({
    type: "GET",
    url: url,
    headers: {
        'X-LC-Id': '7hyoc6are05n823dd424ywvf752gem2w96inlkl3yiann6vw',
        'X-LC-Key': 'tgufkdybjtb4gvsbwcatiwd9wx49adxrmf8qkpwunh0h3wx3'
    },
    processData: false,
    success: function(msg) {
        console.log(msg)
        var div = document.createElement('div')
        div.innerHTML = JSON.stringify(msg, null, '\t')
        document.body.appendChild(div)
    }
});
