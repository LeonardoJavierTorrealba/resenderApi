const documentsDAO = {
    getSucursales: (sucursal) => {
        
        if(sucursal){
            return(
                `SELECT idSucursal, nombre, SqlServerIP, dbName, SqlServerUser, SqlServerPass
                FROM sucursales
                WHERE idSucursal = ${sucursal} Activa = 1 AND dbName IS NOT NULL AND idSucursal BETWEEN 1 AND 60
                `)
        }
    },

    getPendingsProd01: (previousDays = 7) =>{
                    
        return(

            `DECLARE @Fdesde DATE, 
            @FHasta DATE = GETDATE();
            SET @Fdesde = GETDATE()-${previousDays}
            SELECT d.iddocumento as idDocumento, d.idSucursal, s.nombre as nombreSucursal, CONCAT(d.idSucursalSocio, '-' ,d.idSocio) as idSocio, soc.numeroDoc, d.importeTotal, d.InvoicerReference as invoicerReference, CONVERT(varchar,d.tsInsert,20) as dateTime
            FROM documentos d
            INNER JOIN sucursales s ON d.idSucursal = s.idSucursal
            INNER JOIN socios soc ON soc.idSocio = d.idSocio AND soc.idSucursal = d.idSucursalSocio
            WHERE (CONVERT(DATE, D.fechaYHora)BETWEEN @Fdesde AND @FHasta)              
            AND D.idSucursal NOT IN ( 11 )
            AND D.idEstadoFactura = 23`
            )        
    },

    getPendingsBySubsidiary: (idSucursal, previousDays = 7) =>{ 
        let subsidiary = parseInt(idSucursal);                    
        return(
        `DECLARE @Fdesde DATE, 
        @FHasta DATE = GETDATE();
        SET @Fdesde = GETDATE()-${previousDays}
        SELECT d.iddocumento as idDocumento, d.idSucursal, s.nombre as nombreSucursal, CONCAT(d.idSucursalSocio, '-' ,d.idSocio) as idSocio, soc.numeroDoc, d.importeTotal, d.InvoicerReference as invoicerReference, CONVERT(varchar,d.tsInsert,20) as dateTime
        FROM documentos d
		INNER JOIN sucursales s ON d.idSucursal = s.idSucursal
		INNER JOIN socios soc ON soc.idSocio = d.idSocio AND soc.idSucursal = d.idSucursalSocio
        WHERE (CONVERT(DATE, D.fechaYHora)BETWEEN @Fdesde AND @FHasta) 
        AND d.idSucursal = ${subsidiary}
        AND d.idEstadoFactura = 23`
        )
        
    },  


}

export default documentsDAO;