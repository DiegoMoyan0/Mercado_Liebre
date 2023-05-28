const controller = {
    getHome: (req,res) => {
        return res.render('mainViews/home');
    }
    } 
// exportamos el controller //
module.exports = controller;