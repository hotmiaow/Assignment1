var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'home',filename:'index',studentName:'chun man lee',studentID:'301259281',date:'2023-Oct-1',sessionNo:'002'});
});
/* GET about page. */
router.get('/about', function(req, res, next) {
res.render('about', { title: 'About' ,filename:'about',studentName:'chun man lee',studentID:'301259281',date:'2023-Oct-1',sessionNo:'002'  });
});
/* GET project page. */
router.get('/project', function(req, res, next) {
res.render('project', { title: 'Project' ,filename:'project',studentName:'chun man lee',studentID:'301259281',date:'2023-Oct-1',sessionNo:'002'  });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' ,filename:'contact',studentName:'chun man lee',studentID:'301259281',date:'2023-Oct-1',sessionNo:'002' });
});
/* GET services page. */

router.get('/services', function(req, res, next) {
res.render('services', { title: 'Services' ,filename:'services',studentName:'chun man lee',studentID:'301259281',date:'2023-Oct-1',sessionNo:'002'  });
});

module.exports = router;
