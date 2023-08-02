import { Dropdown } from 'rsuite';

export function DropDown(){
    function handleMenuClick(e){
        console.log(e.target.value)
    }
    return(
        <div style={{backgroundColor:'#fff',
            border: '1px solid #0000'}}>
            <Dropdown title="Menu" placement="bottomEnd">
                <Dropdown.Item onClick={handleMenuClick}>Overview Daily</Dropdown.Item>
                <Dropdown.Item onClick={handleMenuClick}>Monthly Overview</Dropdown.Item>
                <Dropdown.Item onClick={handleMenuClick}>Pie Chart Total Spend</Dropdown.Item>
                <Dropdown.Item onClick={handleMenuClick}>Creative Performance</Dropdown.Item>
                <Dropdown.Item onClick={handleMenuClick}>Best Days</Dropdown.Item>
            </Dropdown>
        </div>
    )
}