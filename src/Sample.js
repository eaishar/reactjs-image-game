import React, { Component } from 'react';
import './App.css';

class Sample extends Component {
    tasks=['Task1...','Task2...',
        'Task3...','Task4...','Task5...',
        'Task6...','Task7...','Task8...','Task9...'];
    openChallenge = (i) => {
        if (window.confirm(this.tasks[i-1]) === true) {
            let x = document.getElementById('button' + i);
            x.style.visibility = 'hidden';
        }
        else {
            let x = document.getElementById('button' + i);
            x.disabled = true;
            x.style.backgroundColor='grey';
        }
    }

    render() {
        return (
            <table border="0" className="myTable">
                <thead><h2>**Sample**</h2></thead>
                <tr>
                    <td className="tableCellWithBackgroundSample" width="540" height="540">
                        <input type="submit" className="tableButton" value="1" onClick={() => this.openChallenge(1)} id="button1"/>
                        <input type="submit" className="tableButton" value="2" onClick={() => this.openChallenge(2)} id="button2" />
                        <input type="submit" className="tableButton" value="3"  onClick={() => this.openChallenge(3)} id="button3" />
                        <input type="submit" className="tableButton" value="4"  onClick={() => this.openChallenge(4)} id="button4" />
                        <input type="submit" className="tableButton" value="5"  onClick={() => this.openChallenge(5)} id="button5" />
                        <input type="submit" className="tableButton" value="6"  onClick={() => this.openChallenge(6)} id="button6" />
                        <input type="submit" className="tableButton" value="7"  onClick={() => this.openChallenge(7)} id="button7" />
                        <input type="submit" className="tableButton" value="8"  onClick={() => this.openChallenge(8)} id="button8" />
                        <input type="submit" className="tableButton" value="9"  onClick={() => this.openChallenge(9)} id="button9" />
                    </td>
                </tr>
            </table>
        );
    }
}

export default Sample;
