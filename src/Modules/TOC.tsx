import { useLocation } from "react-router";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a
                    id="wd-a1"
                    href="/Labs/Lab1"
                    className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
                >
                    Lab 1 - July 8th
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-a2"
                    href="/Labs/Lab2"
                    className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
                >
                    Lab 2 - July 15th
                </a>
            </li>
            <li className="nav-item">
                <a
                    id="wd-a3"
                    href="/Labs/Lab3"
                    className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
                >
                    Lab 3 - July 22nd
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-k" href="/Kanbas" className="nav-link">
                    Kanbas
                </a>
            </li>
        </ul>
    );
}
