function clickFirst() {




    document.getElementById("list-second-col").style.display = "none";
    document.getElementById("list-third-col").style.display = "none";
    document.getElementById("list-fourth-col").style.display = "none";
    document.getElementById("list-first-col").style.display = "block";

    $('#list-first-list').addClass('active');

    $('#list-second-list').removeClass('active');
    $('#list-third-list').removeClass('active');
    $('#list-fourth-list').removeClass('active');


    $('#list-first').addClass('show active');

    $('#list-second').removeClass('show active');
    $('#list-third').removeClass('show active');
    $('#list-fourth').removeClass('show active');

    /*document.getElementById("list-second").className += " show active";

    document.getElementById("list-first").className = document.getElementById("list-first").className.replace(/(?:^|\s)show active(?!\S)/g, '')*/
}

function clickSecond() {




    document.getElementById("list-first-col").style.display = "none";
    document.getElementById("list-third-col").style.display = "none";
    document.getElementById("list-fourth-col").style.display = "none";
    document.getElementById("list-second-col").style.display = "block";

    $('#list-second-list').addClass('active');

    $('#list-first-list').removeClass('active');
    $('#list-third-list').removeClass('active');
    $('#list-fourth-list').removeClass('active');


    $('#list-second').addClass('show active');

    $('#list-first').removeClass('show active');
    $('#list-third').removeClass('show active');
    $('#list-fourth').removeClass('show active');
}

function clickThird() {




    document.getElementById("list-second-col").style.display = "none";
    document.getElementById("list-first-col").style.display = "none";
    document.getElementById("list-fourth-col").style.display = "none";
    document.getElementById("list-third-col").style.display = "block";

    $('#list-third-list').addClass('active');

    $('#list-first-list').removeClass('active');
    $('#list-second-list').removeClass('active');
    $('#list-fourth-list').removeClass('active');


    $('#list-third').addClass('show active');

    $('#list-first').removeClass('show active');
    $('#list-second').removeClass('show active');
    $('#list-fourth').removeClass('show active');
}

function clickFourth() {




    document.getElementById("list-second-col").style.display = "none";
    document.getElementById("list-third-col").style.display = "none";
    document.getElementById("list-first-col").style.display = "none";
    document.getElementById("list-fourth-col").style.display = "block";

    $('#list-fourth-list').addClass('active');

    $('#list-first-list').removeClass('active');
    $('#list-third-list').removeClass('active');
    $('#list-second-list').removeClass('active');


    $('#list-fourth').addClass('show active');

    $('#list-first').removeClass('show active');
    $('#list-third').removeClass('show active');
    $('#list-second').removeClass('show active');
}