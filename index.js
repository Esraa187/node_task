import express, { request, response } from "express";
import { engine } from 'express-handlebars';
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templets');
const student = [
    {
        id: 1,
        name: "Esraa",
        city: "sadat"
    },
    {
        id: 2,
        name: "Ahmed",
        city: "shibean"
    },
    {
        id: 3,
        name: "Mariam",
        city: "sadat"
    }

]

const studentfunction = (request, response) => {
    response.render('students', { layout: false, student })


};
app.get('/students', studentfunction)



app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const stud = student.find((item) => {
        return item.id == id;
    })
    console.log(stud)

    res.render("student", { layout: false, student: stud })
})


app.listen(5000);