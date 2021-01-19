import React, { Component } from 'react';
import './App.css';

class TeamA extends Component {
    tasks=['Challenge 1: Recall any 3 dialogues which teachers used for scolding students during your school days',
        'Challenge 2: Jimmy is working alone late night in office and he finds that there is a ghost haunting him.' +
        'He decides to call IT Service desk for help.Do the Role play between Jimmy and IT desk executive.',
        'Challenge 3: Say the tongue twister aloud:Six sick hicks nick six slick bricks with picks and sticks.(x3)',
        'Challenge 4: You decide to make a prank call. Discuss about the prank and to whom would u make',
        'Challenge 5: Turn ON your video.Person 1 does a sequence of actions and ' +
        'Person 2 acts as his mirror (time: 2 mins)',
        'Challenge 6: Recall any funny discussion from your office cafeteria break time',
        'Challenge 7: As a team collect any 10 things in yellow colour. You lose the challenge if any 2 items are the same',
        'Challenge 8: Sing any regional language movie song in English(min 4 lines)',
        'Challenge 9: Describe each of our JDAX team members in one word. '];
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
                <thead><h2>Team A</h2></thead>
                <tr>
                    <td className="tableCellWithBackground1" width="540" height="540">
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

export default TeamA;
