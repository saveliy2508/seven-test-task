export const treeToList = (child: any, newArray: any = [], nestingLevel: any = 1) => {
    child.forEach((item: any) => {
        newArray.push({...item, nestingLevel})
        nestingLevel += 1
        if (item.child.length > 0) {
            treeToList(item.child, newArray, nestingLevel)
        }
    })
    console.log(newArray, 'to')
    return newArray
}