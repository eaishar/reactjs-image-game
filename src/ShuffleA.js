import React, {Component} from 'react';
import img1 from './img3src/9.jpg';
import img2 from './img3src/8.jpg';
import img3 from './img3src/7.jpg';
import img4 from './img3src/6.jpg';
import img5 from './img3src/5.jpg';
import img6 from './img3src/4.jpg';
import img7 from './img3src/3.jpg';
import img8 from './img3src/2.jpg';
import img9 from './img3src/1.jpg';


class ShuffleA extends Component {

    fixedAllDifferentShuffle = () => {
        let a = [...this.state.values];
        let f = this.getStatus(a);

        // memorize position of fixed elements
        let fixed = a.reduce((acc, e, i) => {
            if (f[i]) acc.push([e, i]);
            return acc;
        }, []);

        a = this.shuffle(a);

        // swap fixed elements back to their original position
        fixed.forEach(([item, initialIndex]) => {
            let currentIndex = a.indexOf(item);
            [a[initialIndex], a[currentIndex]] = [a[currentIndex], a[initialIndex]];
        });

        this.setState({
            values: [...a]
        });
    };

    getStatus = a => {
        let stat = [];
        let attempted = [...this.state.attemptedValues];
        for (let i = 0; i < a.length; i++) {
            if (attempted.includes(i)) {
                stat.push(true);
            }
            else {
                stat.push(false);
            }
        }
        return stat;
    };

    shuffle = a => {
        return a.reduce((l, e, i) => {
            const j = Math.floor(Math.random() * (a.length - i) + i); // j is in [i, a.length[
            [a[i], a[j]] = [a[j], a[i]];
            return a;
        }, a)
    };

    openChallenge = (i) => {
       const tasks=['Challenge 1:\n Recall any 3 dialogues which teachers used for scolding students during your school days',
            'Challenge 2: \nWOW This is an Angel!!',
            'Challenge 3: \nSay the tongue twister aloud:\nSix sick hicks nick six slick bricks with picks and sticks.(x3)',
            'Challenge 4: \nJimmy and his team are working alone late night in office and they find that there is a ghost haunting them.' +
            'They decide to call IT Service desk for help.Do the Role play between Jimmy\'s team and IT desk executive.',
            'Challenge 5: \nTurn ON your video for a group dance.\n One person in the team performs a signature ' +
            'step and others follow his/her steps.',
            'Challenge 6: \nSing any regional language movie song in English\n(min 4 lines)',
            'Challenge 7: \nSurprise Task!!\n Every team member except one person says any word related to office.'+
                '\nThere is a surprise task for the last one person.',
            'Challenge 8: \nAUTO-SHUFFLE! Here U Go!!',
            'Challenge 9: \nOOPS This is a Devil!!'];

        let attemptedNos = [...this.state.attemptedValues];

        attemptedNos.push(i - 1);
        this.setState({
            attemptedValues: [...attemptedNos]
        });
        if(i===8){
            this.fixedAllDifferentShuffle();
        }
        if (window.confirm(tasks[i - 1]) === true) {
            let x = document.getElementById(i);
            x.style.visibility = 'hidden';
        }
        else {
            let x = document.getElementById(i);
            x.disabled = true;
            x.style.backgroundColor = 'grey';
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            values: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
            attemptedValues: [],
            clickCount:0,
        };

        this.openChallenge = this.openChallenge.bind(this);
    }
    wrongGuess =() => {
        this.state.clickCount++;
        this.fixedAllDifferentShuffle();
    }

    render() {
        let row1 = [];
        for (let i = 0; i < 3; i++) {
            row1.push(this.state.values[i])
        }
        let row2 = [];
        for (let i = 3; i < 6; i++) {
            row2.push(this.state.values[i])
        }
        let row3 = [];
        for (let i = 6; i < 9; i++) {
            row3.push(this.state.values[i])
        }

        return (
            <div className="container">
                <div className="vertical-center">

                <button type="button" className="sButton" onClick={this.wrongGuess}>Wrong Guess?{this.state.clickCount}</button>
                </div>
                <table border="0" className="myTable">
                    <thead><h2>Team C</h2></thead>
                    <tr>

                        {row1.map((image, key) => {
                                return (
                                    <td style={{backgroundImage: `url(${image})`}}
                                        className="row1" width="200" height="200">
                                        <input type="submit" value={key + 1}
                                               onClick={() => this.openChallenge(key + 1)} id={key + 1}
                                               className="tableButtonX" width="200" height="200"/>
                                    </td>
                                )
                            }
                        )

                        }
                    </tr>
                    <tr>
                        {row2.map((image, key) => {
                                return (
                                    <td className="row2" width="200" height="200"
                                        style={{backgroundImage: `url(${image})`}}>
                                        <input type="submit" value={key + 4}
                                               onClick={() => this.openChallenge(key + 4)}
                                               id={key + 4} className="tableButtonX" width="200" height="200"/>
                                    </td>
                                )
                            }
                        )
                        }
                    </tr>
                    <tr>
                        {row3.map((image, key) => {
                                return (
                                    <td className="row3" width="200" height="200"
                                        style={{backgroundImage: `url(${image})`}}>
                                        <input type="submit"
                                               value={key + 7} onClick={() => this.openChallenge(key + 7)}
                                               id={key + 7} className="tableButtonX" width="200" height="200"/>
                                    </td>
                                )
                            }
                        )

                        }
                    </tr>
                </table>
            </div>
        )
    }
}

export default ShuffleA;
