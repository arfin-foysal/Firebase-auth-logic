
import React from 'react'
import { Card, Form ,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
          <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="email"required/>
                        </Form.Group>
                        <Button className="w-100 mt-3" type="submit">SignUp</Button>
                    </Form>
                </Card.Body> 
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an Account? <Link to="signin">signin</Link>
            </div>
        </div>
    )
}

export default Login
