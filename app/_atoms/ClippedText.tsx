const ClippedText = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="whitespace-nowrap text-ellipsis overflow-x-hidden">
            {children}

        </div>
    )
}

export default ClippedText