function TextButtonClick()
{
    let size = 16;

    document.querySelector("#increment").onclick = function()
    {
        size++;

        document.body.style.fontSize = size + "px";
    }
    document.querySelector("#auto").onclick = function()
    {
        size = 16;

        document.body.style.fontSize = size + "px";
    }
    document.querySelector("#decrement").onclick = function()
    {
        size--;

        document.body.style.fontSize = size + "px";
    }
}