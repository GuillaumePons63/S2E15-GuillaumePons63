import { Outlet } from 'react-router-dom';
import './dashboard.css';
import Header from './common/Header';
import Nav from './common/Nav';
import QuickActions from './common/QuickActions';
import { Fragment } from 'react';

const Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <QuickActions />
                <Outlet />
            </main>
        </Fragment>
    );
};

export default Dashboard;
