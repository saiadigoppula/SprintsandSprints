function page_name(name){
    document.getElementById("html_header").innerHTML +=
    ` 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> ${name}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="index.css">
    `;
}
