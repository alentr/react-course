import If, { Else } from "./if";


const UserInfo = (props) => {

    const { user = {} } = props;

    return (
        <div>
            <If test={user && user.name}>
                Welcome <strong>{user.name}</strong>!
                <Else>
                    Welcome <strong>buddy</strong>!
                </Else>
            </If>
        </div>
    )
}

export default UserInfo;