import React from 'react';
import { Row, Col } from 'antd';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <Row>
                <Col span={8}>
                I'm a developer.
                </Col>
                <Col span={16}>
                coffee and caffeine create codes
                </Col>
            </Row>
        );
    }
}

export default Profile;