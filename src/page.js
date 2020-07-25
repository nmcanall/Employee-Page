const generatePage = data => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body class="bg-light">
        <header class="bg-danger text-white p-4 text-center">
            <h1>My Team</h1>
        </header>
        <main class="p-5 d-flex justify-content-center flex-wrap">
            <div class="card shadow m-4" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">Jared</h2>
                    <h4 class="card-subtitle">Manager</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: 123456789</li>
                        <li class="list-group-item">Email: <a href="mailto:jared@work.com">jared@work.com</a></li>
                        <li class="list-group-item">Office Number: 101</li>
                    </ul>
                </div>
            </div>
            <div class="card shadow m-4" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">Susan</h2>
                    <h4 class="card-subtitle">Engineer</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: 123456789</li>
                        <li class="list-group-item">Email: <a href="mailto:jared@work.com">susan@work.com</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/gitsusan">GitSusan</a></li>
                    </ul>
                </div>
            </div>
            <div class="card shadow m-4" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">John</h2>
                    <h4 class="card-subtitle">Intern</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: 123456789</li>
                        <li class="list-group-item">Email: <a href="mailto:jared@work.com">john@work.com</a></li>
                        <li class="list-group-item">School: The Citadel</li>
                    </ul>
                </div>
            </div>
        </main>
    </body>
</html>`
}

module.exports = generatePage;