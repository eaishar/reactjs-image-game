import React, { Component } from 'react';
import './App.css';

class TeamC extends Component {

    tasks=['Challenge 1: Sing your favourite movie song (min 4 lines)',
        'Challenge 2: Read out weather report like a newsreader',
        'Challenge 3: Say this tongue twister aloud :Which wristwatches are Swiss wristwatches? (x3)',
        'Challenge 4: Do the Role-play : A bank customer care executive convinces an IT employee to avail a personal loan',
        'Challenge 5: Turn ON your video and do any exercise 10 times',
        'Challenge 6: Translate your fav Hindi song and sing it in English (min 4 lines)',
        'Challenge 7: Deliver any famous movie dialogue',
        'Challenge 8: Introduce yourself in any regional language without any single English word (min 8 lines)',
        'Challenge 9: Name any 10 cosmetic products without giving any pause '];
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
                <thead><h2>Team C</h2></thead>
                <tr>
                    <td className="tableCellWithBackground3" width="540" height="540">
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

export default TeamC;
