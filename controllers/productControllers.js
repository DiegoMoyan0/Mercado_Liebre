// Controladores de las vistas de product, productCart y productDetail, cada metodo se utiliza para renderizar la vista 'UserViews/' y pasa un objeto con el título " " como dato para cambiar el nombre del titulo de cada vista)//
const controller = {
    getProduct: (req,res) => {
        return res.render('productsViews/product');
    },
    getProductDetail:(req,res) => {
        return res.render('productsViews/productDetail');
    },
    getProductSale:(req,res) => {
        return res.render('productsViews/sale');
    }
}
// exportamos el controller //
module.exports = controller;