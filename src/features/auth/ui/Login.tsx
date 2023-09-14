import React from "react"
import {Button, Checkbox, Form, Input} from "antd"
import {useFormik} from "formik"
import {LoginParams} from "features/auth/api/authAPI"
import {useActions} from "common/hooks/useActions";
import {authThunks} from "features/auth/model/authSlice";
import {AppRootState} from "app/store";
import {useSelector} from "react-redux";
import {FacebookOutlined, RedoOutlined} from "@ant-design/icons";

export const Login = () => {

    const captchaValue = useSelector<AppRootState, string | null>(store => store.auth.captcha)
    const {login, captcha} = useActions(authThunks)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
            captcha: ""
        },
        onSubmit: (values: LoginParams) => {
            login(values).then(()=>{
                console.log(values)
            })
        }
    })
    const refreshCaptchaHandler = ()=> {
        captcha()
    }

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            onFinish={formik.handleSubmit}
            autoComplete="off"
        >
            <Form.Item<LoginParams> label="Email" rules={[{required: true, message: "Please input your username!"}]}>
                <Input
                    {...formik.getFieldProps("email")}
                />
            </Form.Item>
            <Form.Item<LoginParams> label="Password" rules={[{required: true, message: "Please input your password!"}]}>
                <Input.Password {...formik.getFieldProps("password")} />
            <FacebookOutlined style={{ fontSize: '36px', color: '#066c9f' }}  />
            </Form.Item>
            {captchaValue && (
                <>
                    <img src={captchaValue} alt="captcha"/>
                    <RedoOutlined title={"Refresh captcha"} onClick={refreshCaptchaHandler}/>
                    <Form.Item<LoginParams>
                        label="Captcha"
                        rules={[{required: true, message: "Please input your captcha!"}]}
                    >
                        <Input {...formik.getFieldProps("captcha")} />
                    </Form.Item>
                </>
            )}

            <Form.Item<LoginParams> wrapperCol={{offset: 8, span: 16}}>
                <Checkbox {...formik.getFieldProps("rememberMe")} checked={formik.values.rememberMe}>
                    Remember me
                </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

