console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    renderTasks();
    $('#submitBtn').on('click', postTask);
    $('.tasksTable').on('click', '.markComplete', completeTask);
}


function renderTasks() {
    console.log('in renderTasks');
    
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
    console.log('in postTask');
    
    // declare an object to store input data
    let taskObject = {
        task: $('#task').val(),
        addedBy: $('#addedBy').val(),
        dateAdded: $('#dateAdded').val(),
        deadline: $('#deadline').val(),
    }

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: taskObject
    })
        //clear fields
        .then((response) => {
            $('#task').val(''),
            $('#addedBy').val(''),
            $('#dateAdded').val(''),
            $('#deadline').val(''),
            renderTasks();
        })
} //end postTask


function completeTask() {
    console.log('in completeTask');

    const taskId = $(this).parents('tr').data('id');

    console.log(taskId);
    
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`,
        data: {
            completed: true
        }
    })
        .then(() => {
            console.log('PUT success!');
            renderTasks();
        })
        .catch((error) => {
            console.log('PUT /tasks error', error);
            alert('Something went wrong! 🤬')
        })
    
}



function deleteTask() {

}
