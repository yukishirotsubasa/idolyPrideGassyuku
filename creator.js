function CreateBoard()
{
    var board = document.createElement("div");
    board.className = "column";
    var counterDiv = document.createElement("div");
    counterDiv.id = "counter";
    counterDiv.textContent = "あと" + maxDay;
    board.appendChild(counterDiv);
    board.appendChild(CreateTypeMenu());
    return board;
}
function CreateTypeMenu()
{
    var menuSel = document.createElement("select");
    for (var i = 0; i < options.length; i++)
    {
        let opt = document.createElement("option");
        opt.value = options[i];
        opt.text = options[i];
        menuSel.appendChild(opt);
    }
    menuSel.setAttribute("value", options[0]);
    menuSel.addEventListener("change", ColorChange);
    return menuSel;
}
function CreateSide(num)
{
    var side = document.createElement("div");
    side.className = "row";
    side.setAttribute("value", "side");
    side.appendChild(CreateTurnBtn(num[0]));
    side.appendChild(CreateTurnBtn(num[1]));
    side.appendChild(CreateTurnBtn(num[2]));
    return side;
}
function CreateTurnBtn(num)
{
    let btn = document.createElement("div");
    btn.className = "turnBtn";
    btn.id = "turnBtn" + num;
    btn.textContent = "🔄";
    btn.addEventListener("click", function() {TurnHexBlock(num);});
    return btn;
}
function CreateMap()
{
    var cols = document.createElement("div");
    cols.className = "column";
    for (var i = 0; i < 9; i++)
    {
        let col_content = document.createElement("div");
        col_content.className = "c" + (i+1);
        let row = document.createElement("div");
        row.className = "row";
        for (var j = 0; j < hex_count[i]; j++)
            row.appendChild(Hexagon(i.toString() + j.toString()));
        col_content.appendChild(row);
        cols.appendChild(col_content);
    }
    return cols;
}
function Hexagon(hexId)
{
    let hex = document.createElement("div");
    hex.className = "hex"
    let div1 = document.createElement("div");
    div1.className = "hex_outside";
    let div2 = document.createElement("div");
    div2.className = "hex_middle";
    let div3 = document.createElement("div");
    div3.className = "hex_center";
    div3.id = hexId;
    div3.addEventListener("click", function() {ClickHex(this.id);});
    let div4 = document.createElement("div");
    div4.className = "hex_content";
    div4.textContent = hexId;
    hex.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div4);
    return hex;
}