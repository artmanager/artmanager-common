module.exports = {
	"routes" : {
		"authentication" : {
			"postGenerateToken" : "/authentication"
		},
		"user" : {
			"postUsers": '/users/',
			"putUsersId": '/users/:id',
			"getAllUsers" : '/users/'
		},
		"client" : {
			"postCadastroCliente" : '/cliente/'
		},
		"productCategory" : {
			"getGetAllCategory" 		: '/productCategory/',
			"postInsertProductCategory" : '/productCategory/'
		},
		"supplier": {
			"postSupplier": "/supplier"
		}, 
		"product": {
			"postProduct": "/product",
			"getAllProducts": "/product"
		}
	}
}
