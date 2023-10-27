import ContentContainer from 'components/Layouts/ContentContainer';
import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    // check the user login status before loading the dashboard routes...
    return (
        <div className="h-screen flex p-2 gap-x-2">
            <Sidebar />
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </div>
    );
};
export default Dashboard;
