# Static template starter

This is a starter template for generating static HTMLs using [gulp-static-template-resolver](https://github.com/alialavia/gulp-static-template-resolver).
You provide your data in a json file in src/templates/resolve/data.json, and optionally define your commands in src/templates/resolve/commands.js, and use them inside your html files using `{{ }}`.

The main idea is that you store your data in a structured way and separate from your layout (html) and design (css), so it easier to maintain and manage. Using your custom commands, you can also define how you want your data to be represented. Finally, using `many` helper function, you can avoid repetitive tasks of creating menus, lists, ....

Take a look at files in templates/ for a full example.

## Install
```npm i```

## Usage
Just run `gulp`, which automatically resolve all the html files in templates/ based on data in templates/resolve/data.json and commands defined in templates/resolve/commands.js.

Change the data in templates/resolve/data.json and see the changes in the browser, live!

## Important
If you have inline javascript in your html files, make sure that you don't use template strings with same names as the ones in the data.json and command.js files.



