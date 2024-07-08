- Requerimientos y solución
    * Registrar pedido: Cree 3 modelos, Cliente,Producto y Pedido
    * Arquitectura multitenant: Para esta solución aplique el modelo de Colección compartida, por el tema   de tiempo
        Entonces usando un middleware y un identificador para cada dato podremos aplicar esta solución
        en el header se deberá mandar:
        Multitenand-Id "El nombre del multitenand ID"
        Y así para cada consulta que queramos hacer.
