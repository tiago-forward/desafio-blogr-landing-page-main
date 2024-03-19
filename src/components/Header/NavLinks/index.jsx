const NavLinks = ({ Arrow}) => {
    const links = [{ name: "Product" }, { name: "Company" }, { name: "Connect" }]

    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="link-title">{link.name}
                    <img className="seta close" src={Arrow} alt="Seta" />
                </li>
                ))}
        </>
    )
}

export { NavLinks }