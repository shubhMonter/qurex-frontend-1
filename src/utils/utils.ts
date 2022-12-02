export const createOptions = (data:any[]) => {
    return data?.map(x => { return { label: x, value: x } })
}