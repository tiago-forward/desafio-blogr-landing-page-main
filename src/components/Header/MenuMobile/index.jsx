import { IoIosClose } from "react-icons/io";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
    return (
        <div>
            <IoIosClose size={45}></IoIosClose>
            <nav>
                <a href="/">A</a>
                <a href="/">B</a>
                <a href="/">C</a>
                <a href="/">D</a>
            </nav>
        </div>
    )
}

export { MenuMobile }