interface B_type{
label: any ,
onClick : any
}
export function Button({label, onClick}: B_type) {
    return <button onClick={onClick} type="button" className="w-full text-white bg-blue-700 hover:bg-gblue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-lg">{label}</button>
}