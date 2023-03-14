import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return ( <
        h5 onClick = { handleClick }
        className = { activeTab === id ? "active" : "" } > { title } <
        /h5>
    );
};
export default TabNavItem;