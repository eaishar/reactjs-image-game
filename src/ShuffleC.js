import React, {Component} from 'react';
import img1 from './img4src/9.jpg';
import img2 from './img4src/8.jpg';
import img3 from './img4src/7.jpg';
import img4 from './img4src/6.jpg';
import img5 from './img4src/5.jpg';
import img6 from './img4src/4.jpg';
import img7 from './img4src/3.jpg';
import img8 from './img4src/2.jpg';
import img9 from './img4src/1.jpg';


class ShuffleC extends Component {

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
            const j = Math.floor(Math.random() * (a.length - i) + i); // j is in [i, a.length]
            [a[i], a[j]] = [a[j], a[i]];
            return a;
        }, a)
    };
    openChallenge = (i) => {
        const tasks=['Challenge 1: \nEach person in the team describes the other team member in just one word. ',
            'Challenge 2: \nAUTO-SHUFFLE! Here U Go!!',
            'Challenge 3: \nThe first person begins a story with one opening sentence and another incomplete one.The next person continues the incomplete '+
                'sentence of the previous person and leaves the next sentence incomplete. The last person brings the story to a logical end.',
            'Challenge 4: \nOOPS This is a Devil!!',
            'Challenge 5: \nTurn ON your video and perform any traditional dance as a group.',
            'Challenge 6: \nSay the tongue twister aloud: Send toast to ten tense stout saints\' ten tall tents.(x3)',
            'Challenge 7: \nWOW This is an Angel!!',
            'Challenge 8: \nSurprise Task!! \nEvery team member except one person says the name of an animal or bird. There is a surprise task for the last person.',
            'Challenge 9: \nCome up with an ad for a newly launched Hair Spray. '];

        let attemptedNos = [...this.state.attemptedValues];

        attemptedNos.push(i - 1);
        this.setState({
            attemptedValues: [...attemptedNos]
        });
        if(i===2){
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

    wrongGuess =() => {
        this.state.clickCount++;
        this.fixedAllDifferentShuffle();
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
                    <thead><h2>Team A</h2></thead>
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

export default ShuffleC;
