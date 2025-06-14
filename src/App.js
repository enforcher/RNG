import React, { useState, useEffect } from 'react';
import RangeSelector from './components/RangeSelector';
import NumberDisplay from './components/NumberDisplay';
import './styles/App.css';

function App() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(750);
    const [numbers, setNumbers] = useState([]);
    const [generatedNumbers, setGeneratedNumbers] = useState(new Set());

    useEffect(() => {
        const container = document.createElement('div');
        container.className = 'container';

        container.innerHTML = `
            <h1>Random Number Generator</h1>
            <p>Generate unique random numbers within a range</p>
            <div class="input-group">
                <div>
                    <label for="minValue">Min Value</label>
                    <input type="number" id="minValue" value="1">
                </div>
                <div>
                    <label for="maxValue">Max Value</label>
                    <input type="number" id="maxValue" value="750">
                </div>
            </div>
            <div class="button-group">
                <button class="generate-btn">Generate Number</button>
                <button class="reset-btn">Reset</button>
            </div>
            <div class="number-display"></div>
            <div>
                <h3>Generated Numbers:</h3>
                <div class="generated-numbers"></div>
            </div>
        `;

        document.getElementById('root').appendChild(container);

        const generateBtn = container.querySelector('.generate-btn');
        const resetBtn = container.querySelector('.reset-btn');
        const minInput = container.querySelector('#minValue');
        const maxInput = container.querySelector('#maxValue');
        const numberDisplay = container.querySelector('.number-display');
        const generatedNumbersContainer = container.querySelector('.generated-numbers');

        generateBtn.addEventListener('click', () => {
            const min = parseInt(minInput.value);
            const max = parseInt(maxInput.value);

            if (isNaN(min) || isNaN(max) || min >= max) {
                alert('Please enter valid numbers. Maximum should be greater than minimum.');
                return;
            }

            if (generatedNumbers.size >= (max - min + 1)) {
                alert('All possible numbers in the range have been generated!');
                return;
            }

            let newNumber;
            do {
                newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (generatedNumbers.has(newNumber));

            generatedNumbers.add(newNumber);

            // Display animation
            numberDisplay.textContent = newNumber;
            numberDisplay.classList.add('active');

            setTimeout(() => {
                numberDisplay.classList.remove('active');
                // Add to the list after animation
                const numberItem = document.createElement('span');
                numberItem.className = 'number-item';
                numberItem.textContent = newNumber;
                generatedNumbersContainer.appendChild(numberItem);
            }, 1500);
        });

        resetBtn.addEventListener('click', () => {
            generatedNumbers.clear();
            generatedNumbersContainer.innerHTML = '';
            numberDisplay.textContent = '';
            numberDisplay.classList.remove('active');
        });
    }, []);

    return (
        <div className="App">
            <h1>Random Number Generator</h1>
            <RangeSelector min={min} setMin={setMin} max={max} setMax={setMax} />
            <NumberDisplay numbers={numbers} />
        </div>
    );
}

export default App;