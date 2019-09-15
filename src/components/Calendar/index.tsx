import * as React from 'react';
import './cal.css';
import events from "./events";
import Modal from "../Modal";
const dateFns =  require("date-fns");

interface CalEvent {
    ename:string;
    date: string;
    description:string;
}

class Calendar extends React.Component<{}, {}>  {
    state:any = {
        show: false,
        selectedEvent: {},
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    renderHeader() {
        const dateFormat = "MMMM yyyy";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">

                </div>
                <div className="col col-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className="col col-end">
                </div>
            </div>
        );
    }

    findEventByDate(date:string) {
        let found:CalEvent = {ename:"", date:"", description:""};
        events.forEach(item=>{
            if(item.date === date){
                found = item;
            }
        });
        return found;
    }

    renderDays() {
        const dateFormat = "EEEE";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const event:CalEvent = this.findEventByDate(formattedDate);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => this.onDateClick(cloneDay, dateFns.format(cloneDay, dateFormat))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                        <span className="event">{event?event.ename:""}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = (selected:string, day: string) => {
        this.setState({
            selectedDate: selected
        });
        //show modal
        const event:CalEvent = this.findEventByDate(day);
        if(event.ename){
            this.showModal();
            this.setState({
                selectedEvent: event
            });
        }

    };

    render() {
        return (
            <div className="calendar">
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Event Details:</p>
                    <div><b>Name:</b> {this.state.selectedEvent.ename}</div>
                    <div><b>Description:</b> {this.state.selectedEvent.description}</div>
                </Modal>
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;