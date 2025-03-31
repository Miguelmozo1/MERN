import Advertisement from './Advertisement';
import SubContent from './SubContent';


const MainContent = () => {
    return (
        <>
            <div className='mainContent'>
                <SubContent  />
                <SubContent  />
                <SubContent  />
                <Advertisement  />
            </div>
        </>
    )
}

export default MainContent