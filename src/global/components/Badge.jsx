export function Badge({children , className}){
    return <div className={`w-max px-3 py-1 rounded-md font-medium text-3xl ${className}`}>
        {children}
    </div>  
}