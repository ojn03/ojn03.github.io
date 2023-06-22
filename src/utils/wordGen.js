"use server"
//  Purpose: Generates random words and adjectives for profile
// TODO - Add more words and adjectives
const Os = [
    '(O-liv-ee-ay)',
    'Orange',
    'Observant',
    // 'Oblivious',
    'Obliging',
    // 'Obnoxious',
    'Obscene',
    'Overpowered',
]

const Js = [
    'John',
    'Juice',
    'Juicy',
    'Jubilant',
    'Jellyfish',
    'Juvenile',
    'Jovial',
]

const Ns = [
    'Ninja',
    'Nerd',
    // 'Narcissist',
    'Necromancer',
    'Not-Simpson',
]

const words1 = [
    'Innovative',
    'creative',
    'adaptable',
    'adventurous',
    'genuine',
    'artistic',
]
const words2 = [
    'analytical',
    'ambitious',
    'curious',
    'diligent',
    'proactive',
    'resourceful',
]
const words3 = [
    'passionate',
    'dedicated',
    'dependable',
    'attentive',
    'cooperative',
]


const nouns = [
    'thinker',
    'problem-solver',
    'leader',
    'teammate',
    'engineer',
    'developer',
]


export const genWord1 = (word) => {    
    const idx = Math.floor(Math.random() * words1.length)
    if (word === words1[idx]) {
        return genWord1(word)
    }
    return words1[idx]
}
export const genWord2 = (word) => {
    const idx = Math.floor(Math.random() * words2.length)
    if (word === words2[idx]) {
        return genWord2(word)
    }
    return words2[idx]
}

export const genWord3 = (word) => {
    const idx = Math.floor(Math.random() * words3.length)
    if (word === words3[idx]) {
        return genWord3(word)
    }
    return words3[idx]
}

export const genNoun = (noun) => {
    const idx = Math.floor(Math.random() * nouns.length)
    if (noun === nouns[idx]) {
        return genNoun(noun)
    }
    return nouns[idx]
}


export const genOs = (O) => {
    const idx = Math.floor(Math.random() * Os.length)
    if (O === Os[idx]) {
        return genOs(O)
    }
    return Os[idx]
}
export const genJs = (J) => {
    const idx = Math.floor(Math.random() * Js.length)
    if (J === Js[idx]) {
        return genJs(J)
    }
    return Js[idx]
}
export const genNs = (N) => {
    const idx = Math.floor(Math.random() * Ns.length)
    if (N === Ns[idx]) {
        return genNs(N)
    }
    return Ns[idx]
}

export const NameGen = () => {
    return `${genOs()} ${genJs()} ${genNs()}`
}

// import FileSaver from 'file-saver';
// import { surpriseMePrompts } from '../constant';

// export function getRandomPrompt(prompt) {
//   const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
//   const randomPrompt = surpriseMePrompts[randomIndex];

//   if (randomPrompt === prompt) return getRandomPrompt(prompt);

//   return randomPrompt;
// }

// export async function downloadImage(_id, photo) {
//   FileSaver.saveAs(photo, `download-${_id}.jpg`);
// }