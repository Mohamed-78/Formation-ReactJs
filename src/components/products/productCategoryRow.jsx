
/**
 * Description placeholder
 * @date 17/11/2023 - 11:04:07
 *
 * @export
 * @param {{ name: any; }} param0
 * @param {*} param0.name
 * @returns {*}
 */
export function ProductCategoryRow({name}){
    return <tr>
        <td colSpan={2}><strong>{name}</strong></td>
    </tr>
}