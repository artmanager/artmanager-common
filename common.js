module.exports = {
	"routes" : {
		"authentication" : {
			"postGenerateToken" : "/authentication"
		},
		"user" : {
			"postUsers": '/users/',
			"putUsersId": '/users/:id',
			"getAllUsers" : '/users/',
            "putEditPassword": '/users/'
		},
		"client" : {
			"postCadastroCliente" : '/client',
			"getAllClients": '/client'
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
		},
		"which": {
			"postWhich": "/which",
            "getWhich": "/consultWhich",
			"getWhichByClient": "/whichByClient",
			"putUpdateEntrancePending": "/updateEntrancePending",
			"deleteWhich": "/which"
		},
        "production": {
            "getProduction": "/production",
            "putUpdateProduction": "/production"
        },
		"report": {
			"getReportProduct": "/reportProduct",
			"getReportSupplier": "/reportSupplier",
			"getReportSales": "/reportSales"
		},
		"forgotPassword": {
			"sendEmail" : "/sendTokenToEmail",
			"receiveToken": "/receiveToken"
		}
	}
}
