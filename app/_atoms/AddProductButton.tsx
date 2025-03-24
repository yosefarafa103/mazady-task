import { IoAddCircleOutline } from "react-icons/io5";
import Button from "./Button";
const AddProductButton = ({ isFull = false, handelFn }: { isFull?: boolean, handelFn?: () => void }) => {
    return (
        <Button handlerFn={handelFn} isFullWidth={isFull}> <IoAddCircleOutline className="text-3xl" />
            Add New Product
        </Button>
    )
}

export default AddProductButton