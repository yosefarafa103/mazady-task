const BoxContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white rounded-[21px] min-h-[40vh] p-[25px] w-full mt-4 h-fit"> {children} </div>
    )
}

export default BoxContainer