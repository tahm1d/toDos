const input = document.querySelector(".todo__input");
const list = document.querySelector(".todo__list");
const item = document.querySelectorAll(".todo__item");


console.log(input);
console.log(list);
console.log(item);


function addListItem()
{
    input.addEventListener("keypress", function(event)
    {
        console.log(event.keyCode);
       if(event.keyCode==13)
       {
            if(input.value==" " || input.value=="")
            {
                alert("empty input");
                input.value = "";
            }

            else
            {
                let newItem = createItem(input.value);
                //list.appendChild(newItem);
                list.insertBefore(newItem, list.childNodes[0]);
                input.value = "";

            }
       }
    })
}

//doesn't work, learn bubble propagation

/* function toggleDone()
{
    for (let el of item)
    {
        el.addEventListener("click", function()
        {
            el.classList.toggle("done");
        })
    }
} */


function toggleDone()
{

        list.addEventListener("click", function(event)
        {
            if(event.target.classList.contains("todo__item"))
            {
                event.target.classList.toggle("done");
            }
        })
}

function createItem(text)
{
    const newListEl = document.createElement("li");
    newListEl.textContent = text;
    newListEl.setAttribute("class","todo__item");
    return newListEl;
}


addListItem();
toggleDone();