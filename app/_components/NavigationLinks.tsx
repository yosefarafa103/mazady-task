import NavigationLink from "../_atoms/NavigationLink"
const NavigationLinks = () => {
    return (
        <div className="flex items-center gap-7 max-lg:hidden">
            {["Home", "Blog", "Gifts"].map((el, idx) => (
                <NavigationLink key={`${el}-${idx}`} isActiveLink={idx === 0} href={el} />
            ))}
        </div>
    )
}
export default NavigationLinks