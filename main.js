var hex_count = [5, 6, 7, 8, 9, 8, 7, 6, 5];
var selectColor = options[0];
var hexCounter = 0;
const maxDay = 19;

function CreateFrame()
{
    var rows = document.createElement("div");
    rows.className = "row";
    document.body.appendChild(rows);
    rows.appendChild(CreateBoard());
    var columns = document.createElement("div");
    columns.className = "column"
    columns.appendChild(CreateSide([0,1,2]));
    columns.appendChild(CreateMap());
    columns.appendChild(CreateSide([5,4,3]));
    rows.appendChild(columns);
}

document.addEventListener('DOMContentLoaded', function() {
    CreateFrame();
    FillHexAll();
}, false);