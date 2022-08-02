const options = ["ボーカル","ダンス","ビジュアル"];
var dataMapping = [[4, 3, 2, 1, 0, 5],
                    [5, 4, 3, 2, 1, 0],
                    [0, 5, 4, 3, 2, 1]];
var centerDataShift = [0, 5, 4];
var hexContent = [[["基礎トレ4","GOAL","基礎トレ4","基礎トレ4"],
                    ["基礎トレ3","SPトレ4","オフ3"],
                    ["オフ1","基礎トレ2"]],
                    [["基礎トレ4","バトル3","アクセ強化4","オフ5"],
                    ["アクセ強化3","オフ3","基礎トレ3"],
                    ["基礎トレ2","アクセ強化2"]],
                    [["基礎トレ4","ライブ4","基礎トレ4","SPトレ5"],
                    ["オフ3","SPトレ4","撮影"],
                    ["基礎トレ2","オフ1"]],
                    [["SPトレ5","基礎トレ4","SPトレ5","オフ5"],
                    ["SPトレ4","オフ3","SPトレ4"],
                    ["基礎トレ","基礎トレ"]],
                    [["基礎トレ4","バトル5","アクセ強化4","基礎トレ4"],
                    ["アクセ強化3","撮影","オフ3"],
                    ["オフ1","SPトレ3"]],
                    [["SPトレ5","ライブ2","基礎トレ4","オフ5"],
                    ["基礎トレ3","基礎トレ3","SPトレ4"],
                    ["オフ1","基礎トレ2"]]];
var centerContent = ["基礎トレ1","SPトレ2","基礎トレ1","アクセ強化1","基礎トレ1","基礎トレ1"];
var blockIdMapping = [[["00", "10", "20", "30"],
                        ["11", "21", "31"],
                        ["22", "32"]],
                        [["04", "03", "02", "01"],
                        ["14", "13", "12"],
                        ["24", "23"]],
                        [["48", "37", "26", "15"],
                        ["47", "36", "25"],
                        ["46", "35"]],
                        [["84", "75", "66", "57"],
                        ["74", "65", "56"],
                        ["64", "55"]],
                        [["80", "81", "82", "83"],
                        ["71", "72", "73"],
                        ["62", "63"]],
                        [["40", "50", "60", "70"],
                        ["41", "51", "61"],
                        ["42", "52"]]];
var centerMapping = ["33", "34", "45", "54", "53", "43"];

function FillHexAll()
{
    for (var i = 0; i < 6; i++)
        FillHexBlock(i);
    FillHexCenter();
}

function FillHexBlock(num)
{
    let target = dataMapping[MappingTarget()];
    for (var j = 0; j < 3; j++)
        for (var i = 0; i < 4-j; i++)
            SetHex(blockIdMapping[num][j][i], hexContent[target[num]][j][i]);
}

function FillHexCenter()
{
    let shiftNum = centerDataShift[MappingTarget()];
    let remakeContent = centerContent;
    if (shiftNum != 0)
        remakeContent = centerContent.slice(shiftNum).concat(centerContent.slice(0, shiftNum));
    for (var i = 0; i < 6; i++)
        SetHex(centerMapping[i], remakeContent[i]);
    SetHex("44", "START");
}

function SetHex(id, content)
{
    let hex = document.getElementById(id);
    hex.childNodes[0].textContent = content;
    hex.setAttribute("value", content);
    hex.setAttribute("filter", false);
}

function MappingTarget()
{
    return options.indexOf(selectColor);
}

