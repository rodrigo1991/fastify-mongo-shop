/**
 * @description Credenciales table
 * @typedef Credenciales
 * @property {String} RUT_CRE
 * @property {String}  NOMBRE_CRE
 * @property {String}  CLAVE_CRE
 * @property {String} ULTING_CRE
 * @property {String}   ULTHOR_CRE
 * @property {String}  EMAIL_CRE
 * @property {Number}  ESTADO_CRE
 * @property {Number} COBRADOR_CRE
 */

/**
 * @description movimientos table
 * @typedef Movimientos
 * @property {String} rutcli_mov
 * @property {String} succli_mov
 * @property {Number} refere_mov
 * @property {Number} folcon_mov
 * @property {Number} nrodoc_mov
 * @property {Date} fecven_mov
 * @property {Date} fecven_mov_format
 * @property {Number} SALDO_MOV
 * @property {String} estado_mov
 * @property {Number} refere_mov
 * @property {Number} folcon_mov
 * @property {Number} tipdoc_mov
 * @property {String} nomcor_mov
 * @property {String} operacion_mov
 * @property {Number} tipoing_mov
 * @property {String} nomtip_mov
 * @property {Number} sucsegal_mov
 * @property {String} succli_mov
 */

/**
 * @description CardDetail
 * @typedef CardDetail
 * @property {String} cardNumber
 */

/**
 * @description detailOut
 * @typedef DetailOut
 * @property {Number} sharesNumber
 * @property {String} amount
 * @property {String} commerceCode
 * @property {String} buyOrder
 * @property {String} authorizationCode
 * @property {String} paymentTypeCode
 * @property {Number} responseCode
 */

/**
 * @description Transbank response
 * @typedef Transaction
 * @property {String} accountingDate
 * @property {String}  buyOrder
 * @property {CardDetail}  cardDetail
 * @property {DetailOut[]} detailOutput
 * @property {Date} transactionDate
 * @property {String}  urlRedirection
 * @property {String} VCI
 */

/**
 * @description trxMessage
 * @typedef TrxMessage
 * @property {String} rut
 * @property {String} nombre
 * @property {Number} cobrador
 * @property {String} orden
 * @property {String} autorizacion
 * @property {Number} monto
 * @property {String} metodo
 * @property {Date} feccan
 * @property {Movimientos[]} cuotas
 */

/**
 * @description mailMessage
 * @typedef MailMessage
 * @property {String} mail
 * @property {String} rut
 * @property {String} nombre
 * @property {String} orden
 * @property {Number}  monto
 * @property {String} metodo
 * @property {Date} fecha
 * @property {Movimientos[]} cuotas
 */

/**
 * @description tbk
 * @typedef Tbk
 * @property {String} rut
 * @property {String} token
 * @property {String} estado
 * @property {Transaction} transaction
 */

/**
 * @description tbks
 * @typedef Tbks
 * @property {Tbk[]} docs
 */

/**
 * @description customer
 * @typedef Customer
 * @property {String} customerId
 * @property {Date} created
 * @property {String} email
 * @property {String} name
 * @property {String} pay_mode
 * @property {String} creditCardType
 * @property {String} last4CardDigits
 * @property {String} externalId
 * @property {Number} status
 * @property {Date} registerDate
 */

/**
 * @description paymentData
 * @typedef PaymentData
 * @property {Date} date
 * @property {String} media
 * @property {Date} conversionDate
 * @property {Date} conversionRate
 * @property {Number} amount
 * @property {String} currency
 * @property {Number} fee
 * @property {Number} taxes
 * @property {Number} balance
 * @property {Date} transferDate
 */

/**
 * @description pendingInfo
 * @typedef PendingInfo
 * @property {Date} date
 * @property {String} media
 */

/**
 * @description flow
 * @typedef Flow
 * @property {String} rut
 * @property {String} nombre
 * @property {String} correo
 * @property {Number} cobrador
 * @property {String} token
 * @property {Movimientos[]} cuotas
 * @property {Number} flowOrder
 * @property {String} commerceOrder
 * @property {Date} requestDate
 * @property {Number} status
 * @property {String} subject
 * @property {String} currency
 * @property {String} amount
 * @property {String} payer
 * @property {Object} optional
 * @property {pendingInfo} pending_info
 * @property {PaymentData} paymentData,
 * @property {String} merchantId
 */
