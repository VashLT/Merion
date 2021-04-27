# Merion
Merion is a web site that holds data and laboratory exercises related to Computer Architecture I Subject. It is hosted at [https://merion.herokuapp.com/](https://merion.herokuapp.com/), uses **Django** as Backend, **React** for the frontend and Bootstrap and some custom css for styling. 


Contribuitors: [VashLT](https://github.com/VashLT), [ga-vo](https://github.com/ga-vo), [CristianERP](https://github.com/CristianERP) and [nockyy](https://github.com/nockyy).

## Deployment
To get this version up running you'll have to install some Python (Django) dependencies and `npm` packages. First, to install the dependencies in Python run the following command:
```
    pip install -r requirements.txt
```
Make sure you are in the root directory of this repo. Now, to install the `npm` packages (React) run the following commands:

```
    npm i webpack webpack-cli --save-dev
    npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
    npm i react react-dom --save-dev
    npm i react-router-dom
    npm i react-bootstrap
    npm i bootstrap
```

The previous commands will install:
- `react`, `react-dom`, `react-router-dom`, `react-bootstrap`
- `bootstrap`
- `webpack`
- `babel`

Up to this point, all the dependencies has been installed and it lefts to run the following command:
```
    npm start
```
To run the application it will be necessary to initialize two servers, one for Django and the other for  the `webpack` stuff, which is in `npm`. So, in the root directory run:
```
    python manage.py runserver
```
and now, inside `/frontend` run:
```
    npm run dev
```
And it's done, the web page should be at `http://localhost:8000/`.
