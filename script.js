const list = [];

const render = () => {
    $('#mainDiv').empty();
    list.forEach((item) => {
        // const $newDiv = $(`<div>${item}</div>`)
        const $newDiv = $(`<div>`)
        const $h2 = $(`<h2>${item}</h2>`)
        $newDiv.append($h2)
        $newDiv.addClass('newDiv')
        const $buttonCompleted = $(`<button type="button" class="toCompleteButton">Completed</button>`)
        $buttonCompleted.css({
            "color": "grey",
            "background-color": "lightblue",
            "border": "solid",
        })

        $('#mainDiv').append($newDiv)
        $newDiv.append($buttonCompleted);
    })

    $('.toCompleteButton').on('click', (event) => {
        // console.log($(event.currentTarget).parent().children().eq(0).text())
        // console.log(list)
        const getInnerText = $(event.currentTarget).parent().children().eq(0).text()
        for(let i=0; i<list.length; i++) {
            if(list[i] == getInnerText){
                list.splice(i,1);
            }
        }
        // console.log(list)
        $(event.currentTarget).parent().appendTo('#completed')
        // console.log($(event.currentTarget))
        const $removeButton = $(`<button type="button" class="toRemoveButton">Remove</button>`)
        const remove = $(event.currentTarget).replaceWith($removeButton)
        $removeButton.css({
            "color": "grey",
            "background-color": "lightblue",
            "border": "solid",
        })
        $('.toRemoveButton').on('click', (event) => {
            // console.log($(event.currentTarget).parent())
            $(event.currentTarget).parent().remove()
        })
    })

}



$(() => {
    $('form').on('submit', (event) => {
        const input = $('#input-box').val()
        if(input) {
            console.log(input)
            list.push(input);
            event.preventDefault();
            $(event.currentTarget).trigger('reset');
            render();
        } 
        else {
            alert('Please key in something....')
            event.preventDefault();
            $(event.currentTarget).trigger('reset');
            render();
        }
    });
})