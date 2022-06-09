const node = document.getElementById('update-timestamp');
node.innerHTML = new Date().toDateString() + '  ' + new Date().toLocaleTimeString() ;

console.log(node);