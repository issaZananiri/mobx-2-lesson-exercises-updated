import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component {
    completeRes = (e) => {
        this.props.RestaurantStore.completeRes(e.target.id)
    }


    seatRes = (e) => {
        this.props.RestaurantStore.seatRes(e.target.id)
    }
    render() {
        let res = this.props.res
        return (
            <div>
                {res.name} : {res.numPeople}
                <button className="completeRes"
                    id={res.id}
                    onClick={this.completeRes}>
                    Complete Reservation </button>
                <button
                    id={res.id}
                    onClick={this.seatRes}>
                    Seat Reservation </button>
            </div>
        )
    }
}

//inject your store here

export default inject("GeneralStore", "RestaurantStore")(observer(Reservation))