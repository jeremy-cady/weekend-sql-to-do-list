console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    renderTasks();
    $('#submitBtn').on('click', postTask);
}


function renderTasks() {
    $('.tasksTable').empty();

    $.ajax({
        type: 'GET',
        url: '/tasks'
    })
        .then((response) => {
            console.log('response is: ', response);
            // append the data to the DOM
            for (let i=0; i<response.length; i++) {
                $('.tasksTable').append(`
                    <tr data-id="${response[i].id}">
                        <td>${response[i].task}</td>
                        <td>${response[i].addedBy}</td>
                        <td>${response[i].dateAdded}</td>
                        <td>${response[i].deadline}</td> 
                        <td>${response[i].completedBy}</td>                      
                        <td>
                            <button class="markComplete">✅</>
                        </td>
                        <td>
                        <button class="deleteBtn">❌</button>    
                        </td>
                    </tr>
                `);
            }
        });
} // end renderTasks


function postTask() {
    let taskObject = {
        task: $('#task').val(),
        addedBy: $('#addedBy').val(),
        dateAdded: $('#dateAdded').val(),
        deadline: $('#deadline').val(),
        completedBy: $('#completedBy').val()
    }

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: taskObject
    })
        .then((response) => {
            $('#task').val(''),
            $('#addedBy').val(''),
            $('#dateAdded').val(''),
            $('#deadline').val(''),
            $('#completedBy').val('')
            renderTasks();
        })
}


function deleteTask() {

}


function completeTask() {

}