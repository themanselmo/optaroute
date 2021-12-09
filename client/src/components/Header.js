import SideNav from "./SideNav"

const Header = ({ setCurrentUser }) => {

    return (
        <div id="main-header">
            <h1>Optiroute</h1>
            <SideNav setCurrentUser={setCurrentUser}/>
        </div>
    )
}

export default Header