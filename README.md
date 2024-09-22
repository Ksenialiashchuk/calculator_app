My own calculator app for Innowise Internship by Ksenia Liashchuk. The app is created by using HTML, JavaScript, Webpack. This calculator has user-friendly interfase and it allows basic arithmetic operations. Also you can change themes(light/dark).

## Task
Application requirements: [link](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit#heading=h.5dt3hghpa22f
)
 
## How to run the app

There are some tips if you want to run this calculator locally. But to activate these commands, nodeJS and Git must already be installed.


1. Сlone project:
```bash
git clone https://github.com/Ksenialiashchuk/calculator_app
```
2. Install dependencies 

```bash
npm install
```

3. Launch the main application process
```bash
npm run start
```


Additions:

  Compresses the application using webpack
```bash
npm run build
```

 Run build and passes the compressed version to the gh-pages branch
```bash
npm run deploy
```


## File structure

```
calculator-app/
|
├── husky/
│   ├── pre-commit      # A Git hook that runs before a commit is made.
├── src/                # Source files folder
│   ├── index.html     # Main HTML file containing the calculator markup
│   ├── index.js        # Main file combining all modules
│   ├── style.css       # Source styles
│   ├── theme.js        # Source JavaScript modules    
└── README.md           # Project documentation
```
