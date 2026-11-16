function valorVenta(venta) {
  return venta.cantidad * venta.precio;
}

function totalVendido(ventas) {
  let totalVendido = 0;

  for (const venta of ventas){
    totalVendido = venta.cantidad * venta.precio;
  }

  return totalVendido;
}

function totalUnidades(ventas) {
  let totalUnidadesVendidas = 0;

  for(const venta of ventas){
    totalUnidadesVendidas += venta.cantidad;
  }

  return totalUnidadesVendidas;
}

function ventaMayorValor(ventas) {
  [...ventas].sort((a, b) => (b.cantidad * b.precio) - (a.cantidad * a.precio));

  return ventas[0];
}

/**
 * Devuelve un nuevo arreglo con las ventas válidas de una ciudad específica,
 * sin importar diferencias de mayúsculas/minúsculas (ej. "Medellín" vs "medellín").
 * Patrón sugerido: Filtro manual con normalización de texto (.trim().toLowerCase()).
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @param {string} ciudad - Nombre de la ciudad a buscar.
 * @returns {Array} Nuevo arreglo con las ventas de esa ciudad.
 */
function ventasDeCiudad(ventas, ciudad) {
  // Tu código aquí
}

/**
 * Calcula el promedio de dinero por venta, dividiendo el total vendido
 * únicamente entre la cantidad de ventas válidas (cantidad > 0).
 * Patrón sugerido: Acumulador + Contador combinados.
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {number} Promedio por venta válida.
 */
function promedioPorVenta(ventas) {
  // Tu código aquí
}

// ============================================================================
// MINIRRETO 3: Métodos de arreglo (.filter, .map, .reduce, .sort) y Top K
// Requisito: Resolver usando métodos de arreglos sin mutar el arreglo original.
// Guía recomendada: patrones/03-filter-map-reduce.js, 04-objetos-como-diccionarios.js
//                   y 05-ordenar-inmutable-y-top-k.js
// ============================================================================

/**
 * Devuelve un nuevo arreglo únicamente con las ventas cuya cantidad sea mayor a 0.
 * Método sugerido: .filter()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Array} Ventas con cantidad > 0.
 */
function ventasValidas(ventas) {
  // Tu código aquí
}

/**
 * Transforma cada venta válida en un objeto resumido con la estructura:
 * { id, producto, ciudad, total } donde `ciudad` esté normalizada en minúsculas.
 * Método sugerido: .filter() seguido de .map()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Array} Arreglo de objetos resumidos.
 */
function resumenVentas(ventas) {
  // Tu código aquí
}

/**
 * Agrupa y suma el valor total vendido por cada ciudad normalizada en minúsculas.
 * Ejemplo de salida: { medellín: 356000, bogotá: 276000, ... }
 * Patrón sugerido: Objeto como diccionario con .reduce()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object} Diccionario { [ciudadNormalizada]: totalVendido }.
 */
function totalPorCiudad(ventas) {
  // Tu código aquí
}

/**
 * Agrupa y suma el total de unidades vendidas por cada producto.
 * Ejemplo de salida: { "Origen Huila 500 g": 7, "Origen Nariño 250 g": 6, ... }
 * Patrón sugerido: Objeto como diccionario con .reduce()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @returns {Object} Diccionario { [producto]: totalUnidades }.
 */
function unidadesPorProducto(ventas) {
  // Tu código aquí
}

/**
 * Devuelve un arreglo con los nombres de los `k` productos que más dinero generaron,
 * ordenados de mayor a menor valor vendido.
 * Ejemplo con k = 3: [ "Origen Huila 500 g", "Origen Sierra 500 g", "Prensa francesa" ]
 * Patrón sugerido: Diccionario con .reduce() -> Object.entries() -> .sort() -> .slice(0, k) -> .map()
 * @param {Array} ventas - Arreglo de objetos de ventas.
 * @param {number} k - Cantidad de productos a incluir en el ranking.
 * @returns {Array<string>} Nombres de los k productos con mayor valor vendido.
 */
function topProductosPorValor(ventas, k) {

  // Tu código aquí
}

module.exports = {
  valorVenta,
  totalVendido,
  totalUnidades,
  ventaMayorValor,
  ventasDeCiudad,
  promedioPorVenta,
  ventasValidas,
  resumenVentas,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
};
