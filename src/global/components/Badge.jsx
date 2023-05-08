export function Badge({children , className}){
    return <div className={`w-max px-3 py-1 rounded-md text-3xl ${className}`}>
        {children}
    </div>  
}