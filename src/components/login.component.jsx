import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// export default class Login extends Component {
export default function Login() {
    // render() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // render( 
    return (
        <>
            <Button variant="secondary" onClick={handleShow} >
                Войти
            </Button>
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <form>
                        {/* <h3>Войти</h3> */}
                        <div className="mb-3">
                            <label>Имя пользователя</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                        </div>
                        <div className="mb-3">
                            <label>Пароль</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Запомнить меня
                                </label>
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-secondary">
                                Войти
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Забыли <a href="#">пароль?</a>
                        </p>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}
// }
// )