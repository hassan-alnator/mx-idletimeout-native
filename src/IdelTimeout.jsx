import { Component, createElement } from "react";

import { IdleTracker } from "./components/IdleTracker";

export class IdelTimeout extends Component {
    constructor(props) {
        super(props);

        this.onTimeOutAction = this.onTimeOutAction.bind(this);
    }
    render() {
        const { content, minutes, secondsAfterWarning, warnUser, warningText, buttonColor } = this.props;
        return <IdleTracker
            content={content}
            minutes={parseInt(minutes.value)}
            warnUser={warnUser}
            warningText={warningText}
            buttonColor={buttonColor}
            secondsAfterWarning={secondsAfterWarning}
            onTimeOut={() => this.onTimeOutAction()}
        />;
    }

    timeOutWarning() {
        const { canExecute, isExecuting, execute } = this.props.onTimeOutWarning;
        if (canExecute && !isExecuting) {
            execute();
        }
    }
    onTimeOutAction() {
        const { canExecute, isExecuting, execute } = this.props.onTimeOut;
        if (canExecute && !isExecuting) {
            execute();
        }
    }
}
