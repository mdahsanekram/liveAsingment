
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import COVERLETTER from '../bio/COVERLETTER.pdf'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Link } from "react-router-dom";

import { getHobbies, getSubject, getErate, getVrate, editData } from '../action/dashboard'
const Home = ({ getHobbies, getSubject, getErate, dashboard, getVrate }) => {

    const [formdata, SetFormData] = useState({
        aboutme: "",
        bgroup: "A+",
        resume: "Na"

    })
    const [show, setShow] = useState(false);
    const bloodGroup = ["A+", "A-", "B+", "B-"]



    useEffect(() => {
        getHobbies()
        getSubject()
        getErate()
        getVrate()

    }, [])
    useEffect(() => {
        SetFormData(dashboard.data)
    }, [dashboard])

    const handleEdit = () => {
        setShow(true)
        // console.log("Edit")

    }

    const handelChange = (type, e) => {
        SetFormData((prevState) => ({
            ...prevState,
            [type]: e,
        }));
    }
    const handleSave = () => {
        editData(formdata)
        setShow(false)

    }



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ padding: "100px" }}>
            {console.log(formdata)}
            <button onClick={handleEdit}>Edit</button>
            <div>
                <h5>About Me </h5>
                <p>{formdata?.aboutme}</p>
            </div>
            <div>
                <h5>Blood Group</h5>
                <p>{formdata?.bgroup}</p>
            </div>
            <div>
                <a href={formdata?.resume}>Resume</a>
                <p></p>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" placeholder="About Me" value={formdata.aboutme} onChange={(e) => handelChange("aboutme", e.target.value)}></input>

                        <select name="bgroup" id="blood" value={formdata?.bgroup} onChange={(e) => handelChange("bgroup", e.target.value)} >
                            {bloodGroup.map(data => <option value={data}>{data}</option>)}
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard
});

export default connect(mapStateToProps, {
    getHobbies,
    getSubject,
    getErate,
    getVrate
})(Home);
