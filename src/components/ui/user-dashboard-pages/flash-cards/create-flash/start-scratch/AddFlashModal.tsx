import { Modal } from "antd";
import StartScratchCard from "./StartScratchCard";

const AddFlashModal = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {
    return (
        <Modal
            title={<p className=" text-xl">Add Flash </p>}
            open={open}
            onCancel={() => setOpen(false)}
            width={600} 
            footer={false} 
            centered
        >
            <StartScratchCard />
        </Modal>
    );
};

export default AddFlashModal;