
export const required = (value:string)=> (value && value.trim()
    ? undefined
    : 'Field is required')

export const maxLength = (max:number)=>(value:string)=>{
    return ((value && value.trim()) && value.length<max)
        ? undefined
        : `Max length ${max} symbols`
}