const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  console.log(e);

  insert.innerHTML = `
    <div class= 'color' >
    <table>
        <tr>
            <th>key</th>
            <th>code</th>
            <th>keycode</th>
            <th>timeStamp</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "space" : e.key}</td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
            <td>${e.timeStamp}</td>
        </tr>
    </table>
    </div>
    `;
});
