import React from "react";
import { Card, CardHeader, Container } from "@mui/material";
import { IActivity } from "../../app/layout/models/activity";

interface IProps {
    activities: IActivity[]
}

export const ActivityList = ({ activities }: IProps) => {

    return (
        <Container>
            {activities.map(activity => (
                <Card sx={{maxWidth: 345}} key={activity.id}>
                    <CardHeader title={activity.title} />
                </Card>
            ))}
        </Container>
    )
}