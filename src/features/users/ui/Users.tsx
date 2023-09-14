import React, {useEffect} from 'react';
import {useActions} from "common/hooks/useActions";
import {usersThunk} from "features/users/model/usersSlice";
import Card from "antd/lib/card/Card";
import {useSelector} from "react-redux";
import {AppRootState} from "app/store";
import {User} from "common/types/apiTypes";
import Meta from "antd/lib/card/Meta";
import Avatar from "antd/lib/avatar/avatar";
import {Button} from "antd/lib";

export const Users = () => {
    const { getUsers, followUser, unFollowUser } = useActions(usersThunk)
    const users = useSelector<AppRootState, User[]>(state=>state.users.users)

    const params = {}

    useEffect(()=>{
        getUsers(params)
    },[])

    const followedUserHandler = (userId: number, isFollowed: boolean) => {
        if(isFollowed){
            unFollowUser(userId)
        } else {
            followUser(userId)
        }
    }

    return (
        <div>
            {users.map(el=>{
                return (
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <Button onClick={()=>followedUserHandler(el.id, el.followed)} type="primary">
                                {el.followed ? "Unfollow" : "Follow"}
                            </Button>
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                )
            })}
        </div>
    );
};

