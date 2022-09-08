<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
        <!-- <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}"> -->
        <!-- <link rel="stylesheet" href="{{ asset('css/fontawesome-free-6.0.0-web/css/all.min.css') }}" type="text/css"> -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body style="font-family: 'Nunito', sans-serif">
        <div id="app">
            <app></app>
        </div>
    </body>

    <script src="{{ mix('js/app.js') }}"></script>
</html>
