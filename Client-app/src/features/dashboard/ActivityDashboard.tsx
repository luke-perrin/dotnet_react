import React from "react"
import { Grid } from "@mui/material"
import { IActivity } from "../../app/layout/models/activity"
import { ActivityList } from "./ActivityList"

interface IProps {
    activities: IActivity[]
}

export const ActivityDashboard = ({ activities }: IProps) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={{ md: 1 }}>
            <Grid>
                <ActivityList activities={activities} />
            </Grid>
        </Grid>
    )
}