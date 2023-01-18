export const getClearId = arr => {
 return arr.map(item => {
    const { _id, ...rest} = item._doc
    const id = _id
    return { ...rest, id }
    })
}