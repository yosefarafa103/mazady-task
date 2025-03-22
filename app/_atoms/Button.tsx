import styles from "@/app/_atoms/_atoms_styles/Button.module.css"

const Button = ({ children, classname, isFullWidth = true, handlerFn }: { classname?: string, children: React.ReactNode, isFullWidth?: boolean, handlerFn?: () => void }) => {
    return (
        <button onClick={handlerFn} className={`flex items-center gap-2 rounded-[10px] py-[12px] px-[15px] cursor-pointer ${styles.btn} text-white lg:text-lg ${isFullWidth ? "w-full" : "w-fit"}  justify-center font-semibold ${classname}`}> {children} </button>
    )
}

export default Button