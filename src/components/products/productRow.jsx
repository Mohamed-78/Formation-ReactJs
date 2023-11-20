
/**
 * Description placeholder
 * @date 17/11/2023 - 11:01:59
 *
 * @export
 * @param {{ product: any; }} param0
 * @param {*} param0.product
 * @returns {*}
 */
export function ProductRow({product}){

    const style = product.stocked ? undefined : {color: 'red'}

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}