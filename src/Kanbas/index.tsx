import { Routes, Route, Navigate } from "react-router";

import Dashboard from './Dashboard/Dashboard';

import KanbasNavigation from "./Navigation/index";
import Courses from "./Courses";
import "./styles.css";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <div className="d-flex">
                <div className="d-none d-md-block bg-black">
                    <KanbasNavigation />
                </div>
                <div className="flex-fill">
                    <div className="wd-main-content-offset p-3">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="Courses/:id/*" element={<Courses />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}