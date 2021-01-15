var myData = JSON.parse(data);

myData.forEach(element => {
    // console.log(element.name);
    let div = document.createElement('div');
    let h5 = document.createElement('h5');
    h5.classList.add('h5-header-js');
    let h5Content = document.createTextNode(element.name);
    h5.appendChild(h5Content);
    div.appendChild(h5);
    document.getElementById('container-js').appendChild(div);
});

// let div = document.createElement('div');
// div.classList.add('test');
// let text = document.createTextNode('test');
// div.appendChild(text);
// document.body.appendChild(div);

// container-js
{/* <div>
<h5>NodeList to Array</h5>
<div>
    <pre><code id="tricks-nodelistarray" class="language-javascript"></code></pre>
</div>
</div> */}