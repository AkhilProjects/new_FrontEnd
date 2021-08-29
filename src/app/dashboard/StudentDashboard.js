import { React, useState, useEffect } from "react"

import Badge from "../../Assets/icons/Badge.svg";
import ProfileImage from "../../Assets/icons/profile.svg"
import Card from "./components/Card"
import DashboardCard from "../../Components/Cards/DashboardCard";
import { allHackathons, isAuthenticated, signout } from "../../auth";
import { NavLink, useHistory } from "react-router-dom";
import "./css/StudentDashboard.css"
import ProjectIcon from "../../Assets/Illustrations/ProjectIcon.svg"
import { DeskProjectCard } from "../../Components/Cards/ProjectCard";

const StudentDashboard = () => {
    const [load, setLoad] = useState();
    const [hackathons, setHackathons] = useState([]);
    const history = useHistory();
    const preload = () => {
        if (load === true) setLoad(false);
        allHackathons()
            .then((response) => {
                setHackathons(response);
                console.log(response);
            })
            .catch();
        // console.log(allHackathons());
    };

    useEffect(() => {
        preload();
    }, []);




    const onClickLogout = () => {
        signout(() => {
            history.push("/");
            window.location.reload();
        });
    };

    return (
        <div className="std-dashboard">
            <div className="dash-container">
                <div className="side-bar">
                    <i class="fas fa-minus minus"></i>
                    <div className="std-details" >
                        <img className="student-img" src={ProfileImage} alt="student-imh" />
                        <h4 className="name">KARAN</h4>
                        <p className="student"> CSE</p>
                        <p className="student">2019-2023</p>
                    </div>
                    <div className="startup-badge">
                        <img src={Badge} alt="" />
                        <p className="num">+918476090539</p>

                    </div>
                    <button className="log-out" onClick={onClickLogout}>
                        <i className="fas fa-sign-out-alt"></i> Log Out
                    </button>
                </div>
                <div className="content-container">
                    <div className="card_container">
                        <Card heading="Learn Entrepreneurship" para="Check the resources here" />
                        <Card heading="Register a Startup" icon="fas fa-plus" />
                    </div>

                    <DashboardCard>
                        <div className="head">
                            <h1 className="heading">
                                My projects
                            </h1>
                            <p className="para">List of your enrolled projects/startups</p>
                        </div>
                        <DeskProjectCard src={ProjectIcon} head='Roxet' para="Creating Reusable Rockets for space exploration and transportation of supplies and sending satellites to the orbit" branch="ME" members={4} />
                        <DeskProjectCard head='Roxet' para="Creating Reusable Rockets for space exploration and transportation of supplies and sending satellites to the orbit" branch="ME" members={4} />


                    </DashboardCard>

                </div>
            </div>
        </div>
    )
}

export default StudentDashboard