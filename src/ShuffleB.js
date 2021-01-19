import React, {Component} from 'react';
import img1 from './img2src/9.jpg';
import img2 from './img2src/8.jpg';
import img3 from './img2src/7.jpg';
import img4 from './img2src/6.jpg';
import img5 from './img2src/5.jpg';
import img6 from './img2src/4.jpg';
import img7 from './img2src/3.jpg';
import img8 from './img2src/2.jpg';
import img9 from './img2src/1.jpg';


class ShuffleB extends Component {

    fixedAllDifferentShuffle = () => {
        let a = [...this.state.values];
        let f = this.getStatus(a);
        console.log([...a]);
        console.log(...f);
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
        console.log(...a);
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
        console.log(stat);
        return stat;
    }
    shuffle = a => {
        return a.reduce((l, e, i) => {
            const j = Math.floor(Math.random() * (a.length - i) + i); // j is in [i, a.length[
            [a[i], a[j]] = [a[j], a[i]];
            return a;
        }, a)
    };
    openChallenge = (i) => {
        const tasks=['Challenge 1: \nSay the tongue twister aloud:\nBrisk brave brigadiers brandished broad bright blades, blunderbusses, and bludgeons—balancing them badly.(x3)',
            'Challenge 2: \nSurprise Task!!\n All team members except one person say a rhyming word. '+
                '\nThere is a surprise task for the last one person.',
            'Challenge 3: \nDiscuss about any 3 unrealistic incidents that happen only in Indian movies and not in real life. '+
                '\nBut you wish they would happen in real life too.',
            'Challenge 4: \nEach person collects an item that begins with the starting letter of the other person\'s name.',
            'Challenge 5: \nTurn ON your video and dance with your spouse/sibling/cousin.',
            'Challenge 6: \nOOPS This is a Devil!!',
            'Challenge 7: \nWOW This is an Angel!!',
            'Challenge 8: \nAUTO-SHUFFLE! Here U Go!!',
            'Challenge 9: \nJack is a workaholic working 20 hrs per day. Today he messed up with the production DB as he was sleep deprived' +
            ' and his manager received an escalation from the client.Do the Role play between Jack and his team members & manager who advise him to maintain ' +
            'a healthy work-life balance.',];

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
    }

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
                    <thead><h2>Team B</h2></thead>
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

export default ShuffleB;
