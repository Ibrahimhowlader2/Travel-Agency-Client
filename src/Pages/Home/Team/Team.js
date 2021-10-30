import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './Team.css';
import team_1 from '../../../images/team1.jpg';
import team_2 from '../../../images/team2.jpg';
import team_3 from '../../../images/team3.jpg';
import team_4 from '../../../images/team4.jpg';

const Team = () => {
    return (
        <IconContext.Provider value={{ className: "react_team_icon" }}>
            <section className="team" id="team">

                <h1 className="heading">Meet <span>Our Team</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={team_1} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <p>CEO</p>
                            <div className="share">
                                <a href="/"><FaFacebookSquare /></a>
                                <a href="/" ><FaInstagram /></a>
                                <a href="/" ><FaTwitter /></a>
                                <a href="/" ><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <img src={team_2} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <p>Asia Tour Expert</p>
                            <div className="share">
                                <a href="/"><FaFacebookSquare /></a>
                                <a href="/" ><FaInstagram /></a>
                                <a href="/" ><FaTwitter /></a>
                                <a href="/" ><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <img src={team_3} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <p>Marketing Manager</p>
                            <div className="share">
                                <a href="/"><FaFacebookSquare /></a>
                                <a href="/" ><FaInstagram /></a>
                                <a href="/" ><FaTwitter /></a>
                                <a href="/" ><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <img src={team_4} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <p>Europe Tour Expert</p>
                            <div className="share">
                                <a href="/"><FaFacebookSquare /></a>
                                <a href="/" ><FaInstagram /></a>
                                <a href="/" ><FaTwitter /></a>
                                <a href="/" ><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </IconContext.Provider>
    );
};

export default Team;