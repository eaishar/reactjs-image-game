import React, { Component } from 'react';
import './App.css';

class TeamB extends Component {
    tasks=['Challenge 1: Tell a joke',
        'Challenge 2: Give out instructions to prepare Tomato soup recipe',
        'Challenge 3: Spin a story revolving around yourself, a beautiful girl and a talking cat',
        'Challenge 4: Say the tongue twister aloud: I scream, you scream, we all scream for ice cream.(x3)',
        'Challenge 5: Turn ON your video and dance with your spouse',
        'Challenge 6: Jack is a workaholic working 20 hrs per day. Today he messed up with the production DB as he was sleep deprived' +
        ' and his manager received an escalation from the client.Do the Role play between Jack and his manager who advises him to manintain ' +
        'a healthy work-life balance.',
        'Challenge 7: Recall any funny incident from your college days',
        'Challenge 8: Name any 10 types of dresses worn in India without giving any pause',
        'Challenge 9: Send a GIF to the last person in your contact list in MS teams and a justification why you sent that(share' +
        ' your screen while you do so. '];
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
                <thead><h2>Team B</h2></thead>
                <tr>
                    <td className="tableCellWithBackground2" width="540" height="540">
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

export default TeamB;
