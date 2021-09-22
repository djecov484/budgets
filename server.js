const express = require('express');
const app = express();

const budgets = require('./models/budget.js');
const bankAccount = 0;

app.use(express.urlencoded({ extended:false}));
app.use(express.static('public'));



app.get('/budgets/', (req,res)=> {
    res.render('index.ejs', { allBudgets: budgets, title: "Budget-Page", bankAccount:bankAccount});

});

app.get('/budgets/new', (req, res) =>{
    res.render('new.ejs', {title: 'Budgets - New Page'});

});


app.post('/budgets', (req, res) => {

   console.log(req.body);
  
   budgets.push(req.body);
   
   res.redirect('/budgets');
})



app.get('/budgets/:indexOfBudgetsArray', (req, res) => {
    res.render('show.ejs', {budgets: budgets[req.params.indexOfBudgetsArray], title: 'Show Page'});

})

app.listen(3000, () => {
    console.log('listening');
})