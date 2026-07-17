import translate from './translate.js';
export default function ShowKeys({ lang }) {
    const submit = () => {
        const input = document.getElementById("keyboardEntry")
        input.value = translate(input.value, lang)
    }
    const handleClick = key => {
        const input = document.getElementById("keyboardEntry")
        input.value += key
    }
    const backspace = () => {
        const input = document.getElementById("keyboardEntry")
        input.value = input.value.slice(0,-1)
    }
    return (
        <div class="Box">
            <div class="MainBox">
                <input id="keyboardEntry" class="Button" placeholder="Input some text" />
            </div>
            <div class="KeyBox">
                {Object.values(lang).map((key) => (
                    <div class="Button" onClick={() => handleClick(key)}>
                        {key}
                    </div>
                ))}
            </div>
            <div class="KeyBox">
                <div id="backspace" class="Button" onClick={backspace}>Backspace</div>
                <div id="space" class="Button" onClick={() => handleClick(' ')}>Space</div>
                <div id="enter" class="Button" onClick={submit}>Enter</div>
            </div>
        </div>
    );
}
