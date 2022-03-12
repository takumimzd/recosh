export const removeNullFromArray = <T>(arr: T[]) => {
  return arr.filter((x) => {
    return !(x === null); 
  })
}