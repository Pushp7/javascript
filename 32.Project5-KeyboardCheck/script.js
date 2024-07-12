window.addEventListener('keydown', function(e){
    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log(e.code);
    
    this.document.querySelector(".key").innerHTML = `
    <div class="color">
        <table>
        <tr>
            <th>Key</th>
            <th>Key Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>
    `
})