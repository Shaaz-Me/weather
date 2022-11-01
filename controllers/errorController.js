const errorController = (req,res) => {
    res.render('404error.ejs',{errMsg:'Oops! Page Not Found'});
};

module.exports = errorController;