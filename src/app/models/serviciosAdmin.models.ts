import { ProductoAdminSistema } from "./productoAdminSistemas.models";
import { SubCategoria } from "./subCategoria.models";

export class ServiciosAdmin{
    idPresentacionProducto!: number;
    tamanho!: string;
    descripcion!: string;
    nombre!: string;
    idProducto!: ProductoAdminSistema;
    idColor!: null;
    descripcionGeneral!: string;
    codigo!: string;
    codigoAlternativo!: null;
    posicion!: 1;
    flagServicio!: "S";
    existenciaProducto!: {
        "idExistenciaProducto": null,
        "cantidad": null,
        "precioVenta": null,
        "porcentajeImpuestoVenta": null,
        "idLocal": null,
        "precioVentaMayorista": null,
        "precioVentaRevendedor": null,
        "precioVentaFrecuente": null,
        "descripcionDestacado": null,
        "flagDestacado": null,
        "flagVisible": null,
        "flagNoDisponible": null,
        "precioAlquilerSemanal": null,
        "precioAlquilerMensual": null,
        "precioAlquilerAnual": null,
        "precioAlquilerDiario": null,
        "cantidadIngreso": null,
        "anhoMesActual": null,
        "fechaHoraUltimoIngreso": null,
        "flagPedidoEnLocal": null,
        "flagDelivery": null,
        "flagReservable": null,
        "cantidadAlerta": null,
        "enExistencia": null,
        "soloLocalUsuario": null,
        "incluirExistenciaProducto": null,
        "idPresentacionProductoTransient": null,
        "seleccionado": false,
        "esReporte": null,
        "precioCompra": null,
        "precioAlquilerSemanalSinImpuesto": null,
        "precioAlquilerMensualSinImpuesto": null,
        "precioAlquilerDiarioSinImpuesto": null,
        "precioAlquilerAnualSinImpuesto": null,
        "precioVentaSinImpuesto": null,
        "precioVentaMayoristaSinImpuesto": null,
        "precioVentaRevendedorSinImpuesto": null,
        "precioVentaFrecuenteSinImpuesto": null,
        "calcularUltimoPrecioCompra": null,
        "calcularPromedioPrecioCompra": null,
        "precioCompraPromedio": null,
        "alertaCantidad": null,
        "cantidadProduccion": null,
        "fechaHoraUltimaCarga": null,
        "ajusteShopify": null,
        "encabezadoAuditoria": null
    };
    descripcionCorta!: null;
    incluirImagenDefault!: null;
    idPresentProdImagenDefault!: null;
    urlImagenDefault!: null;
    idPresentacionProductoConfRapida!: null;
    likeEnCodigo!: null;
    flagConsultaLiviana!: null;
    listPresentProdImagenId!: null;
    arrayIdInventarioTempExcluir!: null;
    descripcionGeneralFactura!: string;
    unidadPeso!: null;
    peso!: null;
    shopifyId!: null;
    shopifyVariantId!: null;
    shopifyInventoryItemId!: null;
    flagSoloPublicadoEnShopify!: null;
    flagSoloPublicadoEnWoocommerce!: null;
    cantidadEnInventario!: null;
    codigoAuxiliar!: null;
    operadorComparacionCantidadEnInventario!: null;
    cantidadAdquirida!: null;
    cantidadUtilizada!: null;
    fechasDeUtilizacion!: null;
    fechaCompraDePaquete!: null;
    idVentaDelPaquete!: null;
}