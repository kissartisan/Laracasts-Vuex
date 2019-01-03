<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <style>
            body {
                display: flex;
                justify-content: center;
            }

            .level {
                display: flex;
                align-items: center;
            }

            .mr-1 {
                margin-right: 1em;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <div class="level">
                <h1 class="mr-1">Todos</h1>
                <button @click="completeAll" v-show="! allCompleted">Complete All</button>
            </div>

            <p>
                <input type="text" placeholder="Do this..." @keyup.enter="addTodo">
            </p>

            <todo v-for="(todo, index) in todos" :key="index" :todo="todo"></todo>
        </div>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
