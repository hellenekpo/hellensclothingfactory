import React from 'react';
import { Form, Input, Button} from 'antd';
import Icon from "antd/es/icon";

function changeBackground(e) {
    e.target.style.background = 'blue';
}
function changeBackground1(e) {
    e.target.style.background = 'pink';
}

const NewsletterForm = ({}) => {
    return (
        <Form layout='inline' className="newsletter-form" action="javascript:void(0);" method="POST">
        <Form.Item>
            <Input prefix = {<Icon type = "red-envelope" />} placeholder="Email"/>
        </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary" style={{ background: "red", borderColor: "yellow" }} onMouseEnter={changeBackground} onMouseLeave={changeBackground1}> Send</Button>
            </Form.Item>
        </Form>
    );
}

export default NewsletterForm;