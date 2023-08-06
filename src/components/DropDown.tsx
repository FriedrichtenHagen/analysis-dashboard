import { Dropdown } from 'rsuite';

export function DropDown({currentView, setCurrentView}:any){
    
    const menuItems = ['Overview Daily', 'Overview Monthly', 'Pie Chart Total Spend', 'Creative Performance', 'Best Days' ]


    function handleMenuClick(e:any){
        const clickedView = e.target.innerText 
        setCurrentView(clickedView)
    }
    return(
            <Dropdown title="Menu" placement="bottomEnd">
                {menuItems.map((menuItem, i) => (
                    <Dropdown.Item onClick={handleMenuClick} key={i}>         {menuItem}
                    </Dropdown.Item>
                ))}
            </Dropdown>
    )
}