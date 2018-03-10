import React from 'react';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import cardBase from '../Cards/CardBase'
import Submit from '../Submit/Submit'
import './App.css'

console.log(cardBase);
class App extends React.Component {
        render() {
                return ( <
                        div >
                        <
                        Header / >
                        <
                        div className = 'mainBlock' >
                        <
                        div className = 'cardsBlock' >
                        <
                        Cards name = { cardBase[0].name } text = { cardBase[0].text } rating = { cardBase[0].rating } chips = {
                            cardBase[0].chips.map(chip => < li className = 'Cards__chips__item' > { chip } < /li>) } / >
                                <
                                Cards name = { cardBase[1].name } text = { cardBase[1].text } rating = { cardBase[1].rating } chips = {
                                    cardBase[1].chips.map(chip => < li className = 'Cards__chips__item' > { chip } < /li>) } / >
                                        <
                                        Cards name = { cardBase[2].name } text = { cardBase[2].text } rating = { cardBase[2].rating } chips = {
                                            cardBase[2].chips.map(chip => < li className = 'Cards__chips__item' > { chip } < /li>) } / >
                                                <
                                                Cards name = { cardBase[3].name } text = { cardBase[3].text } rating = { cardBase[3].rating } chips = {
                                                    cardBase[3].chips.map(chip => < li className = 'Cards__chips__item' > { chip } < /li>) } / >
                                                        <
                                                        Cards name = { cardBase[4].name } text = { cardBase[4].text } rating = { cardBase[4].rating } chips = {
                                                            cardBase[4].chips.map(chip => < li className = 'Cards__chips__item' > { chip } < /li>) } / >
                                                                < /
                                                                div >
                                                                <
                                                                Submit / >
                                                                <
                                                                /div> < /
                                                                div >
                                                            );
                                                        }
                                                    }

                                                    export default App;