function TurnHexBlock(num)
{
    let target = dataMapping[MappingTarget()];
    hexContent[target[num]][0].reverse();
    hexContent[target[num]][1].reverse();
    hexContent[target[num]][2].reverse();
    FillHexBlock(num);
    ClearCounter();
    RefreshCounter();
}
function RefreshCounter()
{
    document.getElementById("counter").textContent = "あと" + (maxDay - hexCounter) ;
}
function ClickHex(id)
{
    let hex = document.getElementById(id);
    let filter = hex.getAttribute("filter");
    let content = hex.getAttribute("value");
    if (content == "GOAL" || content == "START")
        return;
    if (filter != "true")
    {
        if (hexCounter < maxDay)
        {
            hexCounter += 1;
            hex.setAttribute("filter", true);
        }
    }
    else
    {
        hexCounter -= 1;
        hex.setAttribute("filter", false);
    }
    //console.log(id);
    //console.log(hexCounter);
    RefreshCounter();
}
function ClearCounter()
{
    for (var i = 0; i < 9; i++)
        for (var j = 0; j < hex_count[i]; j++)
            document.getElementById(i.toString() + j.toString()).setAttribute("filter", false);
    hexCounter = 0;
    RefreshCounter();
}
function ColorChange(e)
{
    if (options.indexOf(e.target.value) == -1)
        return;
    else
    {
        e.target.setAttribute("value", e.target.value);
        selectColor = e.target.value;
        FillHexAll();
        hexCounter = 0;
        RefreshCounter();
    }
}