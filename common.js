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
			"postCadastroCliente" : '/client'
		},
		"productCategory" : {
			"getGetAllCategory" 		: '/productCategory/',
			"postInsertProductCategory" : '/productCategory/'
		},
		"supplier": {
			"postSupplier": "/supplier",
			"getGetAllSupplier": '/supplier'
		}, 
		"product": {
			"postProduct": "/product",
			"getAllProducts": "/product"
		}
	}
}
