import SideNav from "./SideNav"

const Header = ({ setCurrentUser }) => {

    return (
        <div id="Header">
            <h4>Optiroute</h4>
            <SideNav setCurrentUser={setCurrentUser}/>
        </div>
    )
}

export default Header