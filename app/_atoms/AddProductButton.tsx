import { IoAddCircleOutline } from "react-icons/io5";
import Button from "./Button";
const AddProductButton = ({ isFull = false }: { isFull?: boolean }) => {
    return (
        <Button isFullWidth={isFull}> <IoAddCircleOutline className="text-3xl" />
            Add New Product
        </Button>
    )
}

export default AddProductButton