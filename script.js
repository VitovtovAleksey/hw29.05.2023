$(document).ready(() => {

    $('body').on('submit', '.task1 #login-form', (e) => {
        e.preventDefault();
        const login = $('.task1 #task1-username').val();
        const password = $('.task1 #task1-password').val();
        const remember = $('.task1 #remember').prop('checked');
        console.log(remember)

        if (remember) alert(`Привет, ${login}! Я тебя запомнил.`);
        else alert(`Привет, ${login}! Я тебя не запомнил.`);
    });


    $('body').on('submit', '.task2 #registration-form', (e) => {
        e.preventDefault();

        let email = $('.task2 #email').val();
        let login = $('.task2 #login').val();
        let password = $('.task2 #password').val();
        let confirmPassword = $('.task2 #confirm-password').val();

        if (password !== confirmPassword) alert('Пароли не совпадают!');
        else alert(`На почту ${email} отправлено письмо с подтверждением`);
    });

    $('body').on('submit', '.task3 #user-info', (e) => {
        e.preventDefault();
        let firstname = $('.task3 #firstname').val();
        let lastname = $('.task3 #lastname').val();
        let birthday = $('.task3 #birthday').val();
        let gender = $('.task3 input[name="gender"]:checked').val();
        let country = $('.task3 #country3').val();
        let city = $('.task3 #city').val();
        let skills = [];
        $('input.skills:checked').each(function () {
            skills.push($(this).val());
        });

        let table = `<table>
            <tr>
                <td>Firstname</td>
                <td>${firstname}</td>
            </tr>
            <tr>
                <td>Lastname</td>
                <td>${lastname}</td>
            </tr>
            <tr>
                <td>Birtday</td>
                <td>${birthday}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>${gender}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>${country}</td>
            </tr>
            <tr>
                <td>City</td>
                <td>${city}</td>
            </tr>
            <tr>
                <td>Skills</td>
                <td>${skills.join(', ')}</td>
            </tr>
        </table>`;
        $('.task3 #result').html(table);
    });

    $('body').on('click', '.task4 input[type="submit"]', (e) => {
        e.preventDefault();

        let r = parseInt($('.task4 input[name="r"]').val());
        let g = parseInt($('.task4 input[name="g"]').val());
        let b = parseInt($('.task4 input[name="b"]').val());

        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
            alert("От 0 до 255");
        } else {
            $('.task4 input[name="r"]').val('');
            $('.task4 input[name="g"]').val('');
            $('.task4 input[name="b"]').val('');

            let exampleColor = `<div class="example-color flex">
                <div style="background-color: rgb(${r} ${g} ${b});"></div>
                <div>RGB(${r}, ${g}, ${b})</div>
            </div>`;
            $('.task4 #added-colors').append(exampleColor);
        }
    });


    $('body').on('submit', '#add-question', (e) => {
        e.preventDefault();
        let question = $('#question').val();
        let correctAnswer = $('#correct-answer').val();
        let wrongAnswer = $('#wrong-answer').val();

        $('#question').val('');
        $('#correct-answer').val('');
        $('#wrong-answer').val('');

        let test = `<div class="test"><div><u>${question}</u></div><div>Correct answer: ${correctAnswer}</div>
<div>Wrong answer: ${wrongAnswer}</div></div>`;

        $('#qustions').append(test);
    });
});