import React, {useEffect, useState} from 'react';
import {useActions} from "common/hooks/useActions";
import {usersThunk} from "features/users/model/usersSlice";
import Card from "antd/lib/card/Card";
import {useSelector} from "react-redux";
import {AppRootState} from "app/store";
import {User} from "common/types/apiTypes";
import Meta from "antd/lib/card/Meta";
import Avatar from "antd/lib/avatar/avatar";
import {Button, PaginationProps} from "antd/lib";
import {Pagination} from "antd";

export const Users = () => {
    const {getUsers, followUser, unFollowUser} = useActions(usersThunk)
    const users = useSelector<AppRootState, User[]>(state => state.users.users)
    let totalCount = useSelector<AppRootState, number>(state => state.users.totalCount)



        const followedUserHandler = (userId: number, isFollowed: boolean) => {
        if (isFollowed) {
            unFollowUser(userId)
        } else {
            followUser(userId)
        }
    }
    const [paramsPagination, setParamsPagination] = useState({
        count: 10,
        page: 1
    })

    useEffect(() => {
        getUsers(paramsPagination)
    }, [paramsPagination])

    const onChange = (page: number, pageSize: number) => {
        setParamsPagination({...paramsPagination, page, count: pageSize})
    }
    const onShowSizeChange = (current: number, size: number) => {
        setParamsPagination({...paramsPagination, page: current, count: size})
    }

    return (
        <div>
            <Pagination
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={paramsPagination.page}
                total={totalCount}
                onChange={onChange}
                showQuickJumper
            />


            {users.map(el => {
                return (
                    <Card
                        style={{width: 300}}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <Button onClick={() => followedUserHandler(el.id, el.followed)} type="primary">
                                {el.followed ? "Unfollow" : "Follow"}
                            </Button>
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src=""/>}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                )
            })}
        </div>
    );
};

