import React from 'react';
import classes from './Sidebb.module.css';

const Sidebb =(props)=>
{
    return <>
        <div className={classes.two}>
            <div class={classes.item}><b>Name:</b>  {props.data.CampaignName}</div>

            <div class={classes.item}><b>Organization:</b>  {props.data.OrgName}</div>

            <div class={classes.item}><b>Contacts:</b>  {props.data.ContactNo},{props.data.Email}</div>
        </div>

   </>
}
export default Sidebb;