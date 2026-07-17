import React, { useState, useEffect } from 'react';
import ShowKeys from './keyboard';
import langs from './lang';

export default function Translator() {
	const [lang, setLang] = useState("braill")
	const lango = {'braill': langs.braill, 'illuminati': langs.illuminati, 'enchant': langs.enchant}
	var objs = ['braill','illuminati','enchant']
	const langsList = objs;
	const langObj = objs[lang] ? objs[lang] : langs[lang] ? langs[lang] : {a: "Empty array"};
	const cHandle = num => {
		const index = langsList.indexOf(lang)
		const len = langsList.length
		let ei = index+num
		if ( ei >= len ) {
			let ei = 0
			setLang(langsList[ei])
			return
		} else if (ei < 0) {
			let ei = len-1
			setLang(langsList[ei])
			return
		}
		setLang(langsList[ei])
	}
	return (
		<div>
			<div class="Keyboard">
				<ShowKeys lang={langObj} />
			</div>
			<div class="Buttons">
				<div class="Button" onClick={() => cHandle(-1)}>Prev</div>
				<div class="Button" onClick={() => cHandle(1)}>Next</div>
			</div>
		</div>
	);
}