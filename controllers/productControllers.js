const productos = require('../database/products.json');

// Controladores de las vistas de product, productCart y productDetail, cada metodo se utiliza para renderizar la vista 'UserViews/' y pasa un objeto con el título " " como dato para cambiar el nombre del titulo de cada vista)//
const controller = {
    getProduct: (req,res) => {
        return res.render('productsViews/product', {productos});
    },
    getCreate: (req,res) => {
        return res.render('productsViews/sale');
    },
    postProduct: (req,res) => {
        const datos = req.body;
        productos.push(datos)
        res.redirect('product')

        return res.render('productsViews/product');

    },
    getProductDetail:(req,res) => {
        const id = Number(req.params.id);

        return res.render('productsViews/productDetail');
    },
    getProductSale:(req,res) => {
        return res.render('productsViews/sale');
    }
}
// exportamos el controller //
module.exports = controller;