import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signin = () => {
 



    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="email" required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control type="email" required/>
                        </Form.Group>
                        <Button className="w-100 mt-3" type="submit">SignUp</Button>
                    </Form>
                </Card.Body> 
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an Account? <Link to="login">Login</Link>
            </div>
        </div>
    )
}

export default Signin
