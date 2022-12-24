const errorController = (req,res) => {
    res.render('404error.ejs',{errMsg:'Oops! Page Not Found'});
};

export default errorController;